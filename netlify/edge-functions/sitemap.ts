import { Context } from "https://edge.netlify.com";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.2';

export default async (req: Request, context: Context) => {
  const supabaseUrl = 'https://kvnovcnuqccxarjbnqil.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt2bm92Y251cWNjeGFyamJucWlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExOTE3MTUsImV4cCI6MjA2Njc2NzcxNX0.Veoys8Ee4uEfIHNTafBqL1yAgjTCS6DsZR3gLYTXHHA';
  
  const supabase = createClient(supabaseUrl, supabaseKey);
  
  const baseUrl = 'https://programmaticseo.agency';
  const currentDate = new Date().toISOString();
  
  try {
    // Fetch all published content with slugs
    const [
      { data: blogPosts },
      { data: caseStudies },
      { data: services },
      { data: resources },
      { data: software },
      { data: industries },
      { data: countries },
      { data: jobs },
      { data: pages },
      { data: teamMembers }
    ] = await Promise.all([
      supabase.from('blog_posts').select('slug, updated_at').eq('is_published', true),
      supabase.from('case_studies').select('slug, updated_at').eq('is_published', true),
      supabase.from('services').select('slug, updated_at'),
      supabase.from('resources').select('slug, updated_at').eq('is_published', true),
      supabase.from('software').select('slug, updated_at').eq('is_published', true),
      supabase.from('industries').select('slug, updated_at').eq('is_published', true),
      supabase.from('countries').select('slug, updated_at').eq('is_published', true),
      supabase.from('jobs').select('slug, updated_at').eq('is_published', true),
      supabase.from('pages').select('slug, updated_at').eq('is_published', true),
      supabase.from('team_members').select('slug, updated_at').eq('is_visible', true).not('slug', 'is', null)
    ]);

    // Static pages
    const staticPages = [
      { url: '', priority: '1.0', changefreq: 'daily' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/contact', priority: '0.8', changefreq: 'monthly' },
      { url: '/free-strategy', priority: '0.9', changefreq: 'weekly' },
      { url: '/blog', priority: '0.8', changefreq: 'daily' },
      { url: '/services', priority: '0.9', changefreq: 'weekly' },
      { url: '/industries', priority: '0.8', changefreq: 'weekly' },
      { url: '/countries', priority: '0.8', changefreq: 'weekly' },
      { url: '/resources', priority: '0.7', changefreq: 'weekly' },
      { url: '/software', priority: '0.7', changefreq: 'weekly' },
      { url: '/jobs', priority: '0.6', changefreq: 'weekly' },
      { url: '/results', priority: '0.8', changefreq: 'monthly' },
      { url: '/programmatic-seo-guide', priority: '0.9', changefreq: 'monthly' }
    ];

    // Build sitemap XML
    let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">`;

    // Add static pages
    staticPages.forEach(page => {
      sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
    });

    // Add blog posts
    blogPosts?.forEach(post => {
      const lastmod = post.updated_at || currentDate;
      sitemap += `
  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });

    // Add case studies
    caseStudies?.forEach(study => {
      const lastmod = study.updated_at || currentDate;
      sitemap += `
  <url>
    <loc>${baseUrl}/case-studies/${study.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });

    // Add services
    services?.forEach(service => {
      if (service.slug) {
        const lastmod = service.updated_at || currentDate;
        sitemap += `
  <url>
    <loc>${baseUrl}/services/${service.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>`;
      }
    });

    // Add resources
    resources?.forEach(resource => {
      const lastmod = resource.updated_at || currentDate;
      sitemap += `
  <url>
    <loc>${baseUrl}/resources/${resource.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });

    // Add software
    software?.forEach(tool => {
      const lastmod = tool.updated_at || currentDate;
      sitemap += `
  <url>
    <loc>${baseUrl}/software/${tool.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });

    // Add industries
    industries?.forEach(industry => {
      const lastmod = industry.updated_at || currentDate;
      sitemap += `
  <url>
    <loc>${baseUrl}/industries/${industry.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });

    // Add jobs
    jobs?.forEach(job => {
      const lastmod = job.updated_at || currentDate;
      sitemap += `
  <url>
    <loc>${baseUrl}/jobs/${job.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.5</priority>
  </url>`;
    });

    // Add custom pages
    pages?.forEach(page => {
      const lastmod = page.updated_at || currentDate;
      sitemap += `
  <url>
    <loc>${baseUrl}/${page.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });

    // Add team members
    teamMembers?.forEach(member => {
      if (member.slug) {
        const lastmod = member.updated_at || currentDate;
        sitemap += `
  <url>
    <loc>${baseUrl}/team/${member.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`;
      }
    });

    sitemap += `
</urlset>`;

    return new Response(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600', // Cache for 1 hour
      },
    });

  } catch (error) {
    console.error('Error generating sitemap:', error);
    
    // Fallback minimal sitemap
    const fallbackSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

    return new Response(fallbackSitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    });
  }
};