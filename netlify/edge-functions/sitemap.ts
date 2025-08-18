
import { Context } from "https://edge.netlify.com";

export default async (req: Request, context: Context) => {
  const headers = {
    'Content-Type': 'application/xml; charset=utf-8',
    'Cache-Control': 'public, max-age=86400, s-maxage=86400'
  } as const;

  // Minimal logging
  console.log('[sitemap]', { method: req.method, url: req.url });

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

  const siteUrl = "https://programmaticseo.agency";

  // Static routes with priorities and change frequencies
  const staticRoutes = [
    // Main pages
    { url: '', priority: '1.0', changefreq: 'daily' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/jobs', priority: '0.7', changefreq: 'weekly' },
    { url: '/results', priority: '0.8', changefreq: 'monthly' },
    { url: '/free-strategy', priority: '0.7', changefreq: 'monthly' },
    
    // Collections
    { url: '/blog', priority: '0.9', changefreq: 'daily' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/industries', priority: '0.9', changefreq: 'weekly' },
    { url: '/resources', priority: '0.8', changefreq: 'weekly' },
    { url: '/software', priority: '0.8', changefreq: 'weekly' },
    { url: '/tools', priority: '0.8', changefreq: 'weekly' },
    
    // Service pages (common SEO services)
    { url: '/services/programmatic-seo', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/technical-seo', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/content-strategy', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/local-seo', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/enterprise-seo', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/seo-audit', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/keyword-research', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/link-building', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/seo-consulting', priority: '0.8', changefreq: 'monthly' },
    { url: '/services/ecommerce-seo', priority: '0.8', changefreq: 'monthly' },
    
    // Industry pages (common industries for SEO)
    { url: '/industries/ecommerce', priority: '0.8', changefreq: 'monthly' },
    { url: '/industries/saas', priority: '0.8', changefreq: 'monthly' },
    { url: '/industries/healthcare', priority: '0.8', changefreq: 'monthly' },
    { url: '/industries/finance', priority: '0.8', changefreq: 'monthly' },
    { url: '/industries/real-estate', priority: '0.8', changefreq: 'monthly' },
    { url: '/industries/legal', priority: '0.8', changefreq: 'monthly' },
    { url: '/industries/automotive', priority: '0.8', changefreq: 'monthly' },
    { url: '/industries/education', priority: '0.8', changefreq: 'monthly' },
    { url: '/industries/hospitality', priority: '0.8', changefreq: 'monthly' },
    { url: '/industries/manufacturing', priority: '0.8', changefreq: 'monthly' },
    { url: '/industries/retail', priority: '0.8', changefreq: 'monthly' },
    { url: '/industries/technology', priority: '0.8', changefreq: 'monthly' },
    
    // Software pages (common SEO software)
    { url: '/software/ahrefs', priority: '0.7', changefreq: 'monthly' },
    { url: '/software/semrush', priority: '0.7', changefreq: 'monthly' },
    { url: '/software/screaming-frog', priority: '0.7', changefreq: 'monthly' },
    { url: '/software/google-search-console', priority: '0.7', changefreq: 'monthly' },
    { url: '/software/google-analytics', priority: '0.7', changefreq: 'monthly' },
    { url: '/software/moz', priority: '0.7', changefreq: 'monthly' },
    { url: '/software/brightedge', priority: '0.7', changefreq: 'monthly' },
    { url: '/software/conductor', priority: '0.7', changefreq: 'monthly' },
    { url: '/software/searchmetrics', priority: '0.7', changefreq: 'monthly' },
    { url: '/software/botify', priority: '0.7', changefreq: 'monthly' },
    
    // Tools pages (common SEO tools)
    { url: '/tools/keyword-planner', priority: '0.7', changefreq: 'monthly' },
    { url: '/tools/site-audit', priority: '0.7', changefreq: 'monthly' },
    { url: '/tools/rank-tracker', priority: '0.7', changefreq: 'monthly' },
    { url: '/tools/backlink-checker', priority: '0.7', changefreq: 'monthly' },
    { url: '/tools/serp-checker', priority: '0.7', changefreq: 'monthly' },
    { url: '/tools/competitor-analysis', priority: '0.7', changefreq: 'monthly' },
    { url: '/tools/content-optimizer', priority: '0.7', changefreq: 'monthly' },
    { url: '/tools/schema-generator', priority: '0.7', changefreq: 'monthly' },
    { url: '/tools/page-speed-test', priority: '0.7', changefreq: 'monthly' },
    { url: '/tools/mobile-friendly-test', priority: '0.7', changefreq: 'monthly' },
    
    // Resource pages (common SEO resources)
    { url: '/resources/seo-guide', priority: '0.6', changefreq: 'monthly' },
    { url: '/resources/technical-seo-checklist', priority: '0.6', changefreq: 'monthly' },
    { url: '/resources/keyword-research-template', priority: '0.6', changefreq: 'monthly' },
    { url: '/resources/content-calendar-template', priority: '0.6', changefreq: 'monthly' },
    { url: '/resources/seo-audit-checklist', priority: '0.6', changefreq: 'monthly' },
    { url: '/resources/link-building-guide', priority: '0.6', changefreq: 'monthly' },
    { url: '/resources/local-seo-checklist', priority: '0.6', changefreq: 'monthly' },
    { url: '/resources/ecommerce-seo-guide', priority: '0.6', changefreq: 'monthly' },
    { url: '/resources/mobile-seo-guide', priority: '0.6', changefreq: 'monthly' },
    { url: '/resources/voice-search-optimization', priority: '0.6', changefreq: 'monthly' },
    
    // Blog posts (sample SEO topics)
    { url: '/blog/what-is-programmatic-seo', priority: '0.7', changefreq: 'weekly' },
    { url: '/blog/technical-seo-best-practices', priority: '0.7', changefreq: 'weekly' },
    { url: '/blog/keyword-research-strategies', priority: '0.7', changefreq: 'weekly' },
    { url: '/blog/content-optimization-guide', priority: '0.7', changefreq: 'weekly' },
    { url: '/blog/link-building-tactics', priority: '0.7', changefreq: 'weekly' },
    { url: '/blog/local-seo-tips', priority: '0.7', changefreq: 'weekly' },
    { url: '/blog/ecommerce-seo-strategies', priority: '0.7', changefreq: 'weekly' },
    { url: '/blog/mobile-first-indexing', priority: '0.7', changefreq: 'weekly' },
    { url: '/blog/core-web-vitals-optimization', priority: '0.7', changefreq: 'weekly' },
    { url: '/blog/schema-markup-guide', priority: '0.7', changefreq: 'weekly' },
    
    // Case studies (sample case studies)
    { url: '/case-studies/ecommerce-traffic-growth', priority: '0.7', changefreq: 'monthly' },
    { url: '/case-studies/saas-lead-generation', priority: '0.7', changefreq: 'monthly' },
    { url: '/case-studies/local-business-rankings', priority: '0.7', changefreq: 'monthly' },
    { url: '/case-studies/enterprise-migration', priority: '0.7', changefreq: 'monthly' },
    { url: '/case-studies/programmatic-seo-success', priority: '0.7', changefreq: 'monthly' },
    
    // Job listings (sample positions)
    { url: '/jobs/seo-specialist', priority: '0.6', changefreq: 'weekly' },
    { url: '/jobs/technical-seo-manager', priority: '0.6', changefreq: 'weekly' },
    { url: '/jobs/content-strategist', priority: '0.6', changefreq: 'weekly' },
    { url: '/jobs/seo-analyst', priority: '0.6', changefreq: 'weekly' },
    { url: '/jobs/digital-marketing-manager', priority: '0.6', changefreq: 'weekly' },
  ];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes.map(route => `  <url>
    <loc>${siteUrl}${route.url}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers
  });
};
