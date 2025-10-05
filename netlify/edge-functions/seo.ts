// /netlify/edge-functions/seo.ts
import { Context } from "https://edge.netlify.com";

// A comprehensive list of bot user agents
const BOT_USER_AGENTS = [
  /googlebot/i,
  /bingbot/i,
  /yandex/i,
  /duckduckbot/i,
  /baiduspider/i,
  /slurp/i,
  /twitterbot/i,
  /facebookexternalhit/i,
  /linkedinbot/i,
  /embedly/i,
  /pinterest/i,
  /applebot/i,
  /discordbot/i,
  /slackbot/i,
  /telegrambot/i,
  /whatsapp/i,
  /w3c_validator/i,
  /ahrefsbot/i,
  /semrushbot/i,
  /screaming frog/i,
  /crawler/i,
  /spider/i,
  /bot/i,
];

// A list of query parameters to ignore
const IGNORED_QUERY_PARAMS = [
  "fbclid",
  "gclid",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

export default async (req: Request, context: Context) => {
  const userAgent = req.headers.get("user-agent") || "";
  const url = new URL(req.url);

  // Check if the user agent is a bot we want to prerender for
  const isBot = BOT_USER_AGENTS.some((bot) => bot.test(userAgent));
  
  // Also check for Prerender's own 'x-prerender' header to avoid loops
  const isPrerender = req.headers.get("x-prerender");

  if (!isBot || isPrerender) {
    // Not a bot or it's a request from Prerender itself, so serve the SPA
    return context.next();
  }

  // Clean the URL by removing ignored query parameters
  IGNORED_QUERY_PARAMS.forEach(param => url.searchParams.delete(param));
  
  const prerenderUrl = `https://service.prerender.io/${url.hostname}${url.pathname}${url.search}`;
  const prerenderToken = "iCYcttsrVusf8Vlp8emm"; // Your Prerender.io token

  console.log(`Bot detected: "${userAgent}". Prerendering URL: ${prerenderUrl}`);

  try {
    const prerenderedResponse = await fetch(prerenderUrl, {
      headers: {
        "User-Agent": userAgent,
        "X-Prerender-Token": prerenderToken,
      },
    });

    if (prerenderedResponse.ok) {
      const html = await prerenderedResponse.text();
      return new Response(html, {
        status: prerenderedResponse.status,
        headers: {
          "Content-Type": "text/html; charset=utf-8",
        },
      });
    }
  } catch (err) {
    console.error("Prerender fetch failed:", err);
  }

  // Fallback for failed prerender requests
  return context.next();
};
