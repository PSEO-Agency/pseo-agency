
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

# Additional directives for better SEO
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

Crawl-delay: 1

Sitemap: https://programmaticseo.agency/sitemap.xml`;


  return new Response(robots, {
    headers
  });
};

