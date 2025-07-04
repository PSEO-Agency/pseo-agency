
import { Context } from "https://edge.netlify.com";

const botUserAgents = [
  /bot/i,
  /crawler/i,
  /spider/i,
  /crawl/i,
  /slurp/i,
  /facebookexternalhit/i,
  /twitterbot/i,
  /linkedinbot/i,
  /embedly/i,
  /quora link preview/i,
  /showyoubot/i,
  /outbrain/i,
  /pinterest/i,
  /vkshare/i,
  /W3C_Validator/i,
  /redditbot/i,
  /applebot/i,
  /WhatsApp/i,
  /slackbot/i,
  /TelegramBot/i,
  /Discordbot/i,
  /Preview/i,
  /nuzzel/i,
  /Xenu/i,
  /SiteSucker/i,
];

export default async (req: Request, context: Context) => {
  const userAgent = req.headers.get("user-agent") || "";
  const isBot = botUserAgents.some((regex) => regex.test(userAgent));
  const url = new URL(req.url);
  const urlPath = url.pathname;

  // Handle bot traffic with Prerender.io
  if (isBot) {
    const prerenderUrl = `https://service.prerender.io${urlPath}`;
    const prerenderToken = "iCYcttsrVusf8Vlp8emm";

    try {
      const prerendered = await fetch(prerenderUrl, {
        headers: {
          "User-Agent": userAgent,
          "X-Prerender-Token": prerenderToken,
        },
      });

      if (prerendered.ok) {
        const html = await prerendered.text();
        return new Response(html, {
          status: 200,
          headers: {
            "Content-Type": "text/html",
          },
        });
      }
    } catch (err) {
      console.error("Prerender fetch failed:", err);
    }
  }

  // Handle static assets - let them pass through normally
  if (urlPath.includes('.') && !urlPath.endsWith('.html')) {
    return context.next();
  }

  // Handle SPA routing for human users
  // For any route that doesn't correspond to a static file, serve index.html
  // This allows React Router to handle client-side routing
  try {
    // Try to get the actual file first
    const response = await context.next();
    
    // If we get a 404, serve index.html instead (SPA fallback)
    if (response.status === 404) {
      const indexResponse = await fetch(new URL('/index.html', req.url).href);
      if (indexResponse.ok) {
        const html = await indexResponse.text();
        return new Response(html, {
          status: 200,
          headers: {
            "Content-Type": "text/html",
          },
        });
      }
    }
    
    return response;
  } catch (err) {
    console.error("Error handling request:", err);
    // Fallback to serving index.html
    try {
      const indexResponse = await fetch(new URL('/index.html', req.url).href);
      if (indexResponse.ok) {
        const html = await indexResponse.text();
        return new Response(html, {
          status: 200,
          headers: {
            "Content-Type": "text/html",
          },
        });
      }
    } catch (indexErr) {
      console.error("Failed to serve index.html:", indexErr);
    }
    
    return context.next();
  }
};
