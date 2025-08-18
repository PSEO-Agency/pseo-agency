
import { Context } from "https://edge.netlify.com";

export default async (req: Request, context: Context) => {
  const headers = {
    'Content-Type': 'text/plain; charset=utf-8',
    'Cache-Control': 'public, max-age=86400, s-maxage=86400'
  } as const;

  // Minimal logging
  console.log('[robots]', { method: req.method, url: req.url });

  // Support HEAD/OPTIONS for validators and crawlers
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers });
  }
  if (req.method === 'HEAD') {
    return new Response(null, { headers });
  }

  if (req.method !== 'GET') {
    return new Response('Method not allowed', { status: 405, headers });
  }

  const robots = `User-agent: *
Allow: /

# Major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Social media crawlers
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

User-agent: TelegramBot
Allow: /

User-agent: Discordbot
Allow: /

# Disallow admin and sensitive areas
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# Allow important directories
Allow: /services/
Allow: /industries/
Allow: /blog/
Allow: /software/
Allow: /tools/
Allow: /resources/
Allow: /case-studies/

# Crawl delay (optional - be considerate)
Crawl-delay: 1

# Sitemap location
Sitemap: https://programmaticseo.agency/sitemap.xml`;

  return new Response(robots, {
    headers
  });
};

