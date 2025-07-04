
import { Context } from "https://edge.netlify.com";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const SUPABASE_URL = "https://kvnovcnuqccxarjbnqil.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2bm92Y251cWNjeGFyamJucWlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExOTE3MTUsImV4cCI6MjA2Njc2NzcxNX0.Veoys8Ee4uEfIHNTafBqL1yAgjTCS6DsZR3gLYTXHHA";

export default async (req: Request, context: Context) => {
  if (req.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  const siteUrl = new URL(req.url).origin;

  try {
    // Static routes
    const staticRoutes = [
      { url: '', priority: '1.0', changefreq: 'daily' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/contact', priority: '0.8', changefreq: 'monthly' },
      { url: '/jobs', priority: '0.7', changefreq: 'weekly' },
      { url: '/results', priority: '0.8', changefreq: 'monthly' },
      { url: '/blog', priority: '0.9', changefreq: 'daily' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
      { url: '/industries', priority: '0.9', changefreq: 'weekly' },
      { url: '/resources', priority: '0.8', changefreq: 'weekly' },
      { url: '/software', priority: '0.8', changefreq: 'weekly' },
      { url: '/tools', priority: '0.8', changefreq: 'weekly' },
    ];

    // Fetch dynamic content
    const [
      { data: services },
      { data: industries },
      { data: blogPosts },
      { data: caseStudies },
      { data: resources },
      { data: software },
      { data: tools },
      { data: jobs },
      { data: pages }
    ] = await Promise.all([
      supabase.from('services').select('slug, updated_at').eq('is_published', true),
      supabase.from('industries').select('slug, updated_at').eq('is_published', true),
      supabase.from('blog_posts').select('slug, updated_at').eq('is_published', true),
      supabase.from('case_studies').select('slug, updated_at').eq('is_published', true),
      supabase.from('resources').select('slug, updated_at').eq('is_published', true),
      supabase.from('software').select('slug, updated_at').eq('is_published', true).eq('type', 'software'),
      supabase.from('software').select('slug, updated_at').eq('is_published', true).eq('type', 'tool'),
      supabase.from('jobs').select('slug, updated_at').eq('is_published', true),
      supabase.from('pages').select('slug, updated_at').eq('is_published', true)
    ]);

    // Build dynamic routes
    const dynamicRoutes = [];

    // Services
    services?.forEach(service => {
      if (service.slug) {
        dynamicRoutes.push({
          url: `/services/${service.slug}`,
          lastmod: service.updated_at,
          priority: '0.8',
          changefreq: 'monthly'
        });
      }
    });

    // Industries
    industries?.forEach(industry => {
      if (industry.slug) {
        dynamicRoutes.push({
          url: `/industries/${industry.slug}`,
          lastmod: industry.updated_at,
          priority: '0.8',
          changefreq: 'monthly'
        });
      }
    });

    // Blog posts
    blogPosts?.forEach(post => {
      if (post.slug) {
        dynamicRoutes.push({
          url: `/blog/${post.slug}`,
          lastmod: post.updated_at,
          priority: '0.7',
          changefreq: 'weekly'
        });
      }
    });

    // Case studies
    caseStudies?.forEach(study => {
      if (study.slug) {
        dynamicRoutes.push({
          url: `/case-studies/${study.slug}`,
          lastmod: study.updated_at,
          priority: '0.7',
          changefreq: 'monthly'
        });
      }
    });

    // Resources
    resources?.forEach(resource => {
      if (resource.slug) {
        dynamicRoutes.push({
          url: `/resources/${resource.slug}`,
          lastmod: resource.updated_at,
          priority: '0.6',
          changefreq: 'monthly'
        });
      }
    });

    // Software
    software?.forEach(item => {
      if (item.slug) {
        dynamicRoutes.push({
          url: `/software/${item.slug}`,
          lastmod: item.updated_at,
          priority: '0.7',
          changefreq: 'monthly'
        });
      }
    });

    // Tools
    tools?.forEach(tool => {
      if (tool.slug) {
        dynamicRoutes.push({
          url: `/tools/${tool.slug}`,
          lastmod: tool.updated_at,
          priority: '0.7',
          changefreq: 'monthly'
        });
      }
    });

    // Jobs
    jobs?.forEach(job => {
      if (job.slug) {
        dynamicRoutes.push({
          url: `/jobs/${job.slug}`,
          lastmod: job.updated_at,
          priority: '0.6',
          changefreq: 'weekly'
        });
      }
    });

    // Dynamic pages
    pages?.forEach(page => {
      if (page.slug) {
        dynamicRoutes.push({
          url: `/${page.slug}`,
          lastmod: page.updated_at,
          priority: '0.6',
          changefreq: 'monthly'
        });
      }
    });

    // Generate XML
    const allRoutes = [...staticRoutes, ...dynamicRoutes];
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${siteUrl}${route.url}</loc>
    ${route.lastmod ? `<lastmod>${new Date(route.lastmod).toISOString().split('T')[0]}</lastmod>` : ''}
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600'
      }
    });

  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap', { status: 500 });
  }
};
