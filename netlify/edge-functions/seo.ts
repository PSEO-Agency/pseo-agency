
import { Context } from "https://edge.netlify.com";

// Comprehensive bot detection with optimized regex
const botRegex = /bot|crawl|spider|slurp|googlebot|bingbot|yandexbot|baiduspider|facebookexternalhit|facebookcrawler|twitterbot|linkedinbot|pinterest|whatsapp|telegram|discord|slackbot|applebot|yahoo|msnbot|duckduckbot|semrushbot|ahrefsbot|screamingfrog|siteimprove|serpstat|dataforseo|wayback|archive\.org|embedly|quora|outbrain|vkshare|W3C_Validator|reddit|preview|nuzzel|xenu|sitesuck|ia_archiver|dotbot|blexbot|mj12bot|petalbot|sogou|360spider|exabot|nutch|rogerbot|seokicks|sistrix|spbot|turnitin|uptimerobot|wbsearchbot|yisou|seznam|jobboerse|newspaper|headless|phantom|seoanalyzer|seobility|searchmetrics|nerdy|mixrank|buzz|ltx71|megaindex|cliqz|coccoc|findx|istella|laserlike|magpie|proximic|qwant|semantic-visions|startme|wotbox|xovi|yacy|mail\.ru|sputnik|commander|cludo|clickagy|crowdtangle|datagnion|datanyze|deepcrawl|domcop|emailmarketing|feedburner|feedfetcher|genieo|gigabot|grapeshot|heritrix|httpmon|icjobs|indeed|jobsearch|keywordresearch|linguee|localsearch|mojee|muckrack|netcraft|okhttp|page2rss|paperli|prlog|pulsepoint|riddler|sbl-bot|seolytics|seozoom|spyfu|survey|tineye|trendiction|tweetmeme|twittercard|uptime|urlappend|voila|wappalyzer|webmeup|websitepolicy|yooz|zoom/i;

// Prerender.io bot detection (bypass Prerender's own bots)
const prerenderBotRegex = /prerender/i;

export default async (req: Request, context: Context) => {
  const userAgent = req.headers.get("user-agent") || "";
  const accept = req.headers.get("accept") || "";
  const xForwardedFor = req.headers.get("x-forwarded-for") || "";
  const isBot = botRegex.test(userAgent);
  const isPrerenderBot = prerenderBotRegex.test(userAgent);
  const url = new URL(req.url);
  const urlPath = url.pathname;
  const fullUrl = req.url;
  const wantsHTML = accept.includes("text/html");

  console.log("Edge Function Triggered");
  console.log(`SEO Edge Function - URL: ${fullUrl}, User-Agent: ${userAgent}, Is Bot: ${isBot}, Is Prerender Bot: ${isPrerenderBot}, WantsHTML: ${wantsHTML}`);
  console.log(`X-Forwarded-For: ${xForwardedFor}`);
  console.log("Pathname:", urlPath);

  // Skip Prerender.io for Prerender's own bots to prevent infinite loops
  if (isPrerenderBot) {
    console.log("Prerender bot detected, serving SPA directly");
    return context.next();
  }

  // Handle bot traffic for ALL PATHS with Prerender.io integration
  if (isBot && wantsHTML) {
    console.log(`Bot detected for path: ${urlPath}`);
    
    // Try Prerender.io with proper configuration
    const prerenderUrl = `https://service.prerender.io/${fullUrl}`;
    const prerenderToken = "iCYcttsrVusf8Vlp8emm";
    
    console.log(`Prerender URL: ${prerenderUrl}`);
    
    try {
      const prerendered = await fetch(prerenderUrl, {
        headers: {
          "User-Agent": userAgent,
          "X-Prerender-Token": prerenderToken,
          "X-Forwarded-For": xForwardedFor,
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Accept-Language": req.headers.get("accept-language") || "en-US,en;q=0.9",
          "Accept-Encoding": "gzip, deflate, br",
          "Cache-Control": "no-cache",
          "Pragma": "no-cache",
        },
        timeout: 30000, // 30 second timeout
      });

      console.log(`Prerender response status: ${prerendered.status}`);
      console.log(`Prerender response headers:`, Object.fromEntries(prerendered.headers.entries()));

      if (prerendered.ok) {
        const html = await prerendered.text();
        console.log(`Prerender success - HTML length: ${html.length}`);
        console.log(`Prerender HTML preview: ${html.substring(0, 500)}...`);
        
        return new Response(html, {
          status: 200,
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "public, max-age=300, s-maxage=300",
            "X-Prerendered": "true",
            "X-Bot-Served": "prerender",
          },
        });
      } else {
        console.error(`Prerender failed with status: ${prerendered.status}`);
        const errorText = await prerendered.text();
        console.error(`Prerender error response: ${errorText}`);
      }
    } catch (err) {
      console.error("Prerender fetch failed:", err);
    }

    // Enhanced SPA fallback when Prerender fails
    try {
      const response = await context.next();
      if (response.ok) {
        let html = await response.text();
        
        // Enhanced meta tags injection based on path
        const pathTitle = getPathTitle(urlPath);
        const pathDescription = getPathDescription(urlPath);
        
        // Inject comprehensive SEO meta tags if missing
        if (!html.includes('<meta property="og:')) {
          const metaTags = `
            <meta property="og:title" content="${pathTitle}">
            <meta property="og:description" content="${pathDescription}">
            <meta property="og:url" content="${fullUrl}">
            <meta property="og:type" content="website">
            <meta property="og:site_name" content="pSEO Agency">
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:title" content="${pathTitle}">
            <meta name="twitter:description" content="${pathDescription}">
            <meta name="twitter:site" content="@pseoagency">
            <meta name="robots" content="index,follow">
            <link rel="canonical" href="${fullUrl}">
            <meta name="description" content="${pathDescription}">
            <title>${pathTitle}</title>
          `;
          html = html.replace('</head>', `${metaTags}</head>`);
        }
        
        console.log(`Enhanced SPA fallback served - HTML length: ${html.length}`);
        
        return new Response(html, {
          status: 200,
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "X-Bot-Served": "enhanced-spa-fallback",
            "Cache-Control": "public, max-age=300, s-maxage=300",
          },
        });
      }
    } catch (enhanceErr) {
      console.error("Enhanced SPA serving failed:", enhanceErr);
    }

    // Final minimal fallback for bots: serve structured HTML for any path
    const pathTitle = getPathTitle(urlPath);
    const pathDescription = getPathDescription(urlPath);
    
    const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${pathTitle}</title>
    <meta name="description" content="${pathDescription}" />
    <meta name="robots" content="index,follow" />
    <link rel="canonical" href="${fullUrl}" />
    <meta property="og:title" content="${pathTitle}" />
    <meta property="og:description" content="${pathDescription}" />
    <meta property="og:url" content="${fullUrl}" />
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
      <p>This page is optimized for search engines. We provide comprehensive programmatic SEO services to help businesses scale their organic traffic through data-driven strategies.</p>
      ${getPathContent(urlPath)}
    </main>
    <footer>
      <p>&copy; 2024 pSEO Agency. All rights reserved.</p>
    </footer>
  </body>
</html>`;
    
    return new Response(html, { 
      status: 200,
      headers: { 
        "Content-Type": "text/html; charset=utf-8",
        "X-Bot-Served": "minimal-fallback",
        "Cache-Control": "public, max-age=300, s-maxage=300",
      } 
    });
  }

  // Handle static assets - let them pass through normally
  if (urlPath.includes('.') && !urlPath.endsWith('.html')) {
    return context.next();
  }

  // Handle SPA routing for human users
  try {
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
