
import { Context } from "https://edge.netlify.com";

const botUserAgents = [
  /googlebot/i,
  /bingbot/i,
  /yandex/i,
  /baiduspider/i,
  /facebookexternalhit/i,
  /twitterbot/i,
  /linkedinbot/i,
  /slackbot/i,
  /discordbot/i,
  /whatsapp/i,
];

export default async (req: Request, context: Context) => {
  const userAgent = req.headers.get("user-agent") || "";
  const isBot = botUserAgents.some((bot) => bot.test(userAgent));
  const urlPath = new URL(req.url).pathname;

  if (isBot) {
    const prerenderUrl = `https://service.prerender.io${urlPath}`;
    const prerenderToken = "iCYcttsrVusf8Vlp8emm"; // if required

    try {
      const prerendered = await fetch(prerenderUrl, {
        headers: {
          "User-Agent": userAgent,
          "X-Prerender-Token": prerenderToken, // if needed
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

  // Human or fallback: pass to SPA
  return context.next();
};
