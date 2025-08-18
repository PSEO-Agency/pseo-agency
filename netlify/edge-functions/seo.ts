
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
  const accept = req.headers.get("accept") || "";
  const isBot = botUserAgents.some((regex) => regex.test(userAgent));
  const url = new URL(req.url);
  const urlPath = url.pathname;
  const fullUrl = req.url;
  const wantsHTML = accept.includes("text/html");

  console.log("Edge Function Triggered");
  console.log(`SEO Edge Function - URL: ${fullUrl}, User-Agent: ${userAgent}, Is Bot: ${isBot}, WantsHTML: ${wantsHTML}`);
  console.log("Pathname:", urlPath);

  // Handle bot traffic with Prerender.io (for HTML requests only)
  if (isBot && wantsHTML) {
    // Construct proper Prerender.io URL with the full site URL
    const prerenderUrl = `https://service.prerender.io/${fullUrl}`;
    const prerenderToken = "iCYcttsrVusf8Vlp8emm";

    console.log(`Prerender URL: ${prerenderUrl}`);

    try {
      const prerendered = await fetch(prerenderUrl, {
        headers: {
          "User-Agent": userAgent,
          "X-Prerender-Token": prerenderToken,
          "X-Forwarded-For": req.headers.get("x-forwarded-for") || "",
          "Accept": accept || "text/html",
          "Accept-Language": req.headers.get("accept-language") || "en",
        },
      });

      console.log(`Prerender response status: ${prerendered.status}`);

      if (prerendered.ok) {
        const html = await prerendered.text();
        console.log(`Prerender success - HTML length: ${html.length}`);
        
        return new Response(html, {
          status: 200,
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "public, max-age=300, s-maxage=300", // Cache for 5 minutes
            "X-Prerendered": "true",
          },
        });
      } else {
        console.error(`Prerender failed with status: ${prerendered.status}`);
        const errorText = await prerendered.text();
        console.error(`Prerender error response: ${errorText}`);
      }
    } catch (err) {
      console.error("Prerender fetch failed:", err);
      
      // If Prerender.io fails, try to serve a basic version with meta tags
      try {
        const response = await context.next();
        if (response.ok) {
          let html = await response.text();
          
          // Inject basic SEO meta tags if missing
          if (!html.includes('<meta property="og:')) {
            const metaTags = `
              <meta property="og:title" content="P SEO Agency - Professional SEO Services">
              <meta property="og:description" content="Transform your business with data-driven SEO strategies. We help companies increase organic traffic and revenue through proven SEO techniques.">
              <meta property="og:url" content="${fullUrl}">
              <meta property="og:type" content="website">
              <meta name="twitter:card" content="summary_large_image">
              <meta name="twitter:title" content="P SEO Agency - Professional SEO Services">
              <meta name="twitter:description" content="Transform your business with data-driven SEO strategies.">
            `;
            html = html.replace('</head>', `${metaTags}</head>`);
          }
          
          return new Response(html, {
            status: 200,
            headers: {
              "Content-Type": "text/html; charset=utf-8",
              "X-Fallback": "true",
            },
          });
        }
      } catch (fallbackErr) {
        console.error("Fallback also failed:", fallbackErr);
      }
    }

    // Final minimal fallback for bots: serve simple HTML for any path
    const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Bot Pre-rendered Page</title>
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href="${fullUrl}" />
  </head>
  <body>
    <h1>Bot content for ${urlPath}</h1>
    <p>This is a minimal fallback served by the edge function.</p>
  </body>
</html>`;
    return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
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
            "Content-Type": "text/html; charset=utf-8",
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
            "Content-Type": "text/html; charset=utf-8",
          },
        });
      }
    } catch (indexErr) {
      console.error("Failed to serve index.html:", indexErr);
    }
    
    return context.next();
  }
};
