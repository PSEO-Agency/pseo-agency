-- Update Next.js and Screaming Frog content with enhanced features
UPDATE software 
SET 
  features = CASE 
    WHEN slug = 'nextjs' THEN '[
      {"name": "Server-Side Rendering (SSR)", "description": "Built-in SSR for better SEO performance and faster initial page loads for programmatic content"},
      {"name": "Static Site Generation (SSG)", "description": "Generate static pages at build time for maximum speed and SEO optimization"},
      {"name": "Incremental Static Regeneration", "description": "Update static content without rebuilding the entire site - perfect for programmatic pages"},
      {"name": "API Routes Integration", "description": "Built-in API functionality for dynamic content generation and data fetching"},
      {"name": "Automatic Code Splitting", "description": "Optimize loading performance across thousands of programmatic pages"},
      {"name": "Image Optimization", "description": "Automatic image optimization and WebP generation for better Core Web Vitals"},
      {"name": "Dynamic Routing", "description": "File-based routing system perfect for programmatic URL structures"},
      {"name": "TypeScript Support", "description": "Built-in TypeScript support for type-safe programmatic SEO development"},
      {"name": "Vercel Integration", "description": "Seamless deployment and edge optimization for global programmatic sites"},
      {"name": "Middleware Support", "description": "Custom logic for A/B testing, redirects, and personalization at scale"}
    ]'::jsonb
    WHEN slug = 'screaming-frog' THEN '[
      {"name": "Large Site Crawling", "description": "Crawl up to 500 URLs for free or unlimited with license - perfect for programmatic site audits"},
      {"name": "Technical SEO Analysis", "description": "Identify broken links, redirects, meta issues, and technical problems across programmatic pages"},
      {"name": "Custom Extraction", "description": "Extract specific data elements from programmatic pages using XPath and CSS selectors"},
      {"name": "Bulk Export Capabilities", "description": "Export crawl data to CSV, Excel, or Google Sheets for analysis and reporting"},
      {"name": "Site Architecture Visualization", "description": "Interactive crawl tree view to understand programmatic site structure and navigation"},
      {"name": "Performance Monitoring", "description": "Analyze page load times, response codes, and server errors across programmatic content"},
      {"name": "Integration Connectors", "description": "Connect with Google Analytics, Search Console, and other SEO tools for comprehensive analysis"},
      {"name": "Custom Robots.txt Testing", "description": "Test robots.txt rules against programmatic URL patterns before deployment"},
      {"name": "Duplicate Content Detection", "description": "Identify duplicate title tags, meta descriptions, and content across programmatic pages"},
      {"name": "Structured Data Validation", "description": "Audit schema markup and structured data implementation across programmatic content"}
    ]'::jsonb
    ELSE features
  END,
  content = CASE 
    WHEN slug = 'nextjs' THEN '<h2>Next.js: React Framework for Programmatic SEO</h2>
    <p>Next.js provides the perfect foundation for programmatic SEO applications with its hybrid rendering capabilities, automatic optimizations, and developer-friendly features. Build fast, SEO-optimized programmatic sites that scale efficiently.</p>
    
    <h3>Hybrid Rendering Strategies</h3>
    <p>Choose the optimal rendering strategy for each programmatic page. Use SSG for static content, SSR for dynamic data, and ISR for content that updates periodically. This flexibility ensures optimal performance and SEO across different content types.</p>
    
    <h3>Built-in Performance Optimization</h3>
    <p>Next.js automatically optimizes images, splits code, and prefetches critical resources. These built-in optimizations ensure your programmatic pages achieve excellent Core Web Vitals scores without manual intervention.</p>
    
    <h3>Developer Experience</h3>
    <p>TypeScript support, hot reloading, and comprehensive documentation make Next.js ideal for large-scale programmatic SEO projects. The framework scales from small sites to enterprise applications with thousands of pages.</p>'
    
    WHEN slug = 'screaming-frog' THEN '<h2>Screaming Frog: Quality Assurance for Programmatic SEO</h2>
    <p>Screaming Frog SEO Spider is essential for auditing large programmatic sites. Crawl thousands of generated pages efficiently to identify technical issues, optimize performance, and ensure SEO compliance across your entire programmatic content strategy.</p>
    
    <h3>Large-Scale Site Auditing</h3>
    <p>The paid version removes the 500 URL limit, enabling comprehensive audits of sites with thousands of programmatic pages. Identify technical issues, broken links, and optimization opportunities across your entire content inventory.</p>
    
    <h3>Programmatic Content Analysis</h3>
    <p>Use custom extraction to validate that programmatic templates are generating content correctly. Extract specific data points, verify schema markup, and ensure consistent SEO implementation across generated pages.</p>
    
    <h3>Integration & Automation</h3>
    <p>Connect with Google Analytics and Search Console for comprehensive site analysis. Export crawl data for further analysis and create automated reporting workflows for ongoing programmatic SEO monitoring.</p>'
    
    ELSE content
  END,
  setup_guide = CASE 
    WHEN slug = 'nextjs' THEN '<h3>Next.js Programmatic SEO Setup</h3>
    <ol>
      <li><strong>Create Next.js Project</strong> - Initialize with npx create-next-app@latest</li>
      <li><strong>Configure Dynamic Routes</strong> - Set up [slug].js files for programmatic pages</li>
      <li><strong>Implement Data Fetching</strong> - Use getStaticProps/getServerSideProps for content</li>
      <li><strong>Set Up CMS/Database</strong> - Connect to headless CMS or database for content</li>
      <li><strong>Create Page Templates</strong> - Design reusable components for programmatic content</li>
      <li><strong>Configure SEO</strong> - Add next-seo for meta tag management</li>
      <li><strong>Optimize Images</strong> - Use next/image for automatic optimization</li>
      <li><strong>Deploy to Vercel</strong> - Deploy with automatic CI/CD and edge optimization</li>
    </ol>'
    
    WHEN slug = 'screaming-frog' THEN '<h3>Screaming Frog for Programmatic SEO Setup</h3>
    <ol>
      <li><strong>Download & Install</strong> - Get the desktop application from official website</li>
      <li><strong>Configure Crawl Settings</strong> - Set up user agent, crawl limits, and custom settings</li>
      <li><strong>Add Site URL</strong> - Enter your programmatic site domain to begin crawl</li>
      <li><strong>Set Up Custom Extraction</strong> - Configure XPath/CSS selectors for specific data</li>
      <li><strong>Configure Integrations</strong> - Connect Google Analytics and Search Console APIs</li>
      <li><strong>Run Initial Crawl</strong> - Perform comprehensive site audit and analysis</li>
      <li><strong>Set Up Reporting</strong> - Configure automated exports and reporting workflows</li>
      <li><strong>Schedule Regular Audits</strong> - Create monitoring schedule for ongoing optimization</li>
    </ol>'
    
    ELSE setup_guide
  END
WHERE slug IN ('nextjs', 'screaming-frog');