
import { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  const userAgent = request.headers.get("user-agent") || "unknown";
  
  console.log("Edge Function Triggered");
  console.log("User-Agent:", userAgent);
  console.log("Pathname:", url.pathname);
  console.log("Full URL:", request.url);
  
  try {
    // Comprehensive bot detection - simplified but effective
    const botRegex = /bot|crawl|spider|slurp|googlebot|bingbot|yandexbot|baiduspider|facebookexternalhit|facebookcrawler|twitterbot|linkedinbot|pinterest|whatsapp|telegram|discord|slackbot|applebot|yahoo|msnbot|duckduckbot|semrushbot|ahrefsbot|screamingfrog|siteimprove|serpstat|dataforseo|wayback|archive\.org|embedly|quora|outbrain|vkshare|W3C_Validator|reddit|preview|nuzzel|xenu|sitesuck/i;
    
    if (botRegex.test(userAgent)) {
      console.log("Bot detected! Serving pre-rendered HTML");
      
      // Get path-specific content
      const pathTitle = getPathTitle(url.pathname);
      const pathDescription = getPathDescription(url.pathname);
      
      // Serve optimized HTML for bots
      const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${pathTitle}</title>
    <meta name="description" content="${pathDescription}" />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href="${request.url}" />
    <meta property="og:title" content="${pathTitle}" />
    <meta property="og:description" content="${pathDescription}" />
    <meta property="og:url" content="${request.url}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="pSEO Agency" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${pathTitle}" />
    <meta name="twitter:description" content="${pathDescription}" />
  </head>
  <body>
    <header>
      <h1>pSEO Agency - Programmatic SEO Services</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/industries">Industries</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
    <main>
      <h1>${pathTitle}</h1>
      <p>${pathDescription}</p>
      ${getPathContent(url.pathname)}
    </main>
    <footer>
      <p>&copy; 2024 pSEO Agency. All rights reserved.</p>
    </footer>
  </body>
</html>`;
      
      return new Response(html, { 
        headers: { 
          "Content-Type": "text/html; charset=utf-8",
          "Cache-Control": "public, max-age=300, s-maxage=300",
          "X-Bot-Served": "true"
        } 
      });
    }
    
    console.log("Human user detected, serving SPA");
    return context.next(); // Let SPA handle it for humans
    
  } catch (err) {
    console.error("Edge Function Error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
};

// Helper functions for path-specific content
function getPathTitle(path: string): string {
  const pathMap: Record<string, string> = {
    '/': 'pSEO Agency - Programmatic SEO Services & Strategy',
    '/services': 'SEO Services - Data-Driven Strategies | pSEO Agency',
    '/industries': 'Industry-Specific SEO Solutions | pSEO Agency',
    '/blog': 'SEO Blog - Latest Strategies & Tips | pSEO Agency',
    '/contact': 'Contact Us - Get Your SEO Strategy | pSEO Agency',
    '/about': 'About pSEO Agency - SEO Experts & Team',
    '/free-strategy': 'Free pSEO Strategy Session | pSEO Agency',
    '/resources': 'SEO Resources & Tools | pSEO Agency',
    '/software': 'SEO Software & Tools Reviews | pSEO Agency',
    '/jobs': 'SEO Careers & Jobs | pSEO Agency',
    '/results': 'SEO Results & Case Studies | pSEO Agency',
  };
  
  // Check for dynamic routes
  if (path.startsWith('/services/')) return `${path.split('/')[2]} SEO Services | pSEO Agency`;
  if (path.startsWith('/industries/')) return `${path.split('/')[2]} SEO Strategy | pSEO Agency`;
  if (path.startsWith('/blog/')) return `${path.split('/')[2]} | pSEO Agency Blog`;
  if (path.startsWith('/software/')) return `${path.split('/')[2]} SEO Tool Review | pSEO Agency`;
  if (path.startsWith('/resources/')) return `${path.split('/')[2]} SEO Resource | pSEO Agency`;
  
  return pathMap[path] || `${path} | pSEO Agency - Programmatic SEO Services`;
}

function getPathDescription(path: string): string {
  const pathMap: Record<string, string> = {
    '/': 'Transform your business with data-driven programmatic SEO strategies. We help companies increase organic traffic and revenue through proven SEO techniques.',
    '/services': 'Comprehensive SEO services including programmatic SEO, technical audits, content strategy, and link building to boost your organic visibility.',
    '/industries': 'Industry-specific SEO solutions tailored to your business sector. Proven strategies for healthcare, finance, e-commerce, and more.',
    '/blog': 'Latest SEO strategies, tips, and industry insights from our team of SEO experts. Stay updated with search algorithm changes.',
    '/contact': 'Get in touch with our SEO experts for a free consultation. Let us help you develop a winning programmatic SEO strategy.',
    '/about': 'Learn about our team of SEO experts and our mission to help businesses succeed through data-driven SEO strategies.',
    '/free-strategy': 'Get a free personalized programmatic SEO strategy session. Discover how to 10X your organic traffic.',
    '/resources': 'Free SEO resources, tools, and guides to help you improve your search engine optimization efforts.',
    '/software': 'Reviews and comparisons of the best SEO software and tools to help you optimize your website and content.',
    '/jobs': 'Join our team of SEO experts. Current openings in SEO strategy, content creation, and technical SEO.',
    '/results': 'See our proven SEO results and case studies. Real businesses, real growth, real ROI.',
  };
  
  return pathMap[path] || `Expert SEO services and strategies for ${path}. Boost your organic traffic with proven programmatic SEO techniques.`;
}

function getPathContent(path: string): string {
  if (path.startsWith('/services')) {
    return `
      <section>
        <h2>Our SEO Services</h2>
        <ul>
          <li>Programmatic SEO Strategy</li>
          <li>Technical SEO Audits</li>
          <li>Content Optimization</li>
          <li>Link Building</li>
          <li>Local SEO</li>
        </ul>
      </section>
    `;
  }
  
  if (path.startsWith('/industries')) {
    return `
      <section>
        <h2>Industry Expertise</h2>
        <ul>
          <li>Healthcare SEO</li>
          <li>E-commerce SEO</li>
          <li>Financial Services SEO</li>
          <li>Technology SEO</li>
          <li>Professional Services SEO</li>
        </ul>
      </section>
    `;
  }
  
  return `
    <section>
      <h2>Why Choose pSEO Agency?</h2>
      <ul>
        <li>Data-driven programmatic SEO strategies</li>
        <li>Proven track record of success</li>
        <li>Industry-specific expertise</li>
        <li>Transparent reporting and analytics</li>
        <li>Dedicated account management</li>
      </ul>
    </section>
  `;
}
