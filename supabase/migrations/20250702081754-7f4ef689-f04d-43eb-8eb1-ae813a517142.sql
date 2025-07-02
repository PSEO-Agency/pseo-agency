
-- Insert sample software data focused on Programmatic SEO tools
INSERT INTO public.software (
  title, 
  slug, 
  description, 
  category, 
  content, 
  features, 
  pricing_info, 
  tags, 
  is_featured, 
  is_published,
  sort_order,
  image_url,
  demo_url,
  github_url,
  documentation_url,
  meta_title,
  meta_description
) VALUES 
(
  'WordPress Programmatic SEO Plugin',
  'wordpress-programmatic-seo-plugin',
  'Advanced WordPress plugin for automated SEO content generation and management at scale.',
  'WordPress Plugin',
  '<h2>Complete Programmatic SEO Solution for WordPress</h2>
  <p>Our WordPress Programmatic SEO Plugin transforms how you approach content creation and SEO optimization. Built specifically for agencies and businesses that need to scale their organic presence quickly and efficiently.</p>
  
  <h3>SEO Implementation Guide</h3>
  <p>The plugin provides a comprehensive implementation framework that covers every aspect of programmatic SEO, from keyword research to content deployment.</p>
  
  <h3>Integration Options</h3>
  <p>Seamlessly integrates with popular WordPress themes, page builders, and third-party APIs to create a unified SEO workflow.</p>
  
  <h3>Scalability Metrics</h3>
  <p>Generate thousands of SEO-optimized pages in minutes, with built-in performance monitoring and analytics.</p>',
  '[
    {"name": "Automated Content Generation", "description": "Generate thousands of SEO-optimized pages from templates and data sources"},
    {"name": "Dynamic Schema Markup", "description": "Automatically add structured data to improve search visibility"},
    {"name": "Bulk URL Management", "description": "Create and manage thousands of URLs with advanced categorization"},
    {"name": "API Integration Hub", "description": "Connect to external data sources and APIs for content automation"},
    {"name": "Performance Analytics", "description": "Track rankings, traffic, and conversion metrics for all generated pages"},
    {"name": "Template System", "description": "Create reusable page templates with dynamic content variables"}
  ]',
  '{
    "price": "$297",
    "period": "one-time",
    "description": "Complete plugin with lifetime updates",
    "features": [
      "Unlimited site license",
      "Priority support",
      "Advanced templates library",
      "API documentation",
      "Video training course"
    ]
  }',
  '["WordPress", "SEO", "Automation", "Content Generation", "Programmatic SEO"]',
  true,
  true,
  1,
  '/lovable-uploads/ba592c92-0d43-4888-adec-c4b937d2a5b7.png',
  'https://demo.programmaticseo.com/wordpress-plugin',
  'https://github.com/programmaticseo/wp-plugin',
  'https://docs.programmaticseo.com/wordpress',
  'WordPress Programmatic SEO Plugin - Scale Your Content Generation',
  'Advanced WordPress plugin for automated SEO content generation. Create thousands of optimized pages with our programmatic SEO solution.'
),
(
  'SEO Content Generator API',
  'seo-content-generator-api',
  'Powerful API for generating SEO-optimized content at scale using AI and data-driven templates.',
  'API Service',
  '<h2>Enterprise-Grade Content Generation API</h2>
  <p>Our SEO Content Generator API enables developers and agencies to build powerful programmatic SEO solutions that scale automatically.</p>
  
  <h3>AI-Powered Content Creation</h3>
  <p>Leverage advanced AI models to generate unique, SEO-optimized content that ranks well and engages users.</p>
  
  <h3>Template Management System</h3>
  <p>Create and manage content templates that can be dynamically populated with data from various sources.</p>',
  '[
    {"name": "RESTful API", "description": "Clean, well-documented API endpoints for easy integration"},
    {"name": "AI Content Generation", "description": "Generate unique content using advanced language models"},
    {"name": "Template Engine", "description": "Create reusable content templates with variable substitution"},
    {"name": "Bulk Processing", "description": "Process thousands of content requests simultaneously"},
    {"name": "SEO Optimization", "description": "Built-in SEO best practices and optimization features"},
    {"name": "Multi-language Support", "description": "Generate content in multiple languages and locales"}
  ]',
  '{
    "price": "$99",
    "period": "month",
    "description": "Professional API access with generous limits",
    "features": [
      "50,000 API calls/month",
      "Priority support",
      "Advanced AI models",
      "Custom templates",
      "Analytics dashboard"
    ]
  }',
  '["API", "Content Generation", "AI", "SEO", "Automation"]',
  true,
  true,
  2,
  '/lovable-uploads/68267ce2-fd99-4216-8f3a-6afa830af03a.png',
  'https://api-demo.programmaticseo.com',
  'https://github.com/programmaticseo/content-api',
  'https://docs.programmaticseo.com/api',
  'SEO Content Generator API - AI-Powered Content at Scale',
  'Enterprise API for generating SEO-optimized content automatically. Build powerful programmatic SEO solutions with our AI-driven platform.'
),
(
  'Local SEO Automation Tool',
  'local-seo-automation-tool',
  'Specialized tool for automating local SEO campaigns across multiple locations and markets.',
  'SaaS Platform',
  '<h2>Dominate Local Search Results</h2>
  <p>Our Local SEO Automation Tool helps businesses and agencies scale their local SEO efforts across hundreds or thousands of locations.</p>
  
  <h3>Multi-Location Management</h3>
  <p>Manage SEO campaigns for multiple business locations from a single, unified dashboard.</p>
  
  <h3>Local Keyword Research</h3>
  <p>Automatically discover and target location-specific keywords that drive qualified local traffic.</p>',
  '[
    {"name": "Location-Based Content", "description": "Generate unique content for each business location automatically"},
    {"name": "Local Citation Building", "description": "Automate citation creation and management across local directories"},
    {"name": "Review Management", "description": "Monitor and respond to reviews across multiple platforms"},
    {"name": "Local Keyword Tracking", "description": "Track rankings for location-specific keywords"},
    {"name": "GMB Integration", "description": "Sync with Google My Business for seamless management"},
    {"name": "Competitor Analysis", "description": "Analyze local competitors and identify opportunities"}
  ]',
  '{
    "price": "$197",
    "period": "month",
    "description": "Complete local SEO automation platform",
    "features": [
      "Up to 100 locations",
      "Unlimited content generation",
      "Priority support",
      "Advanced reporting",
      "API access"
    ]
  }',
  '["Local SEO", "Automation", "Multi-Location", "GMB", "Citations"]',
  false,
  true,
  3,
  '/lovable-uploads/0d07af3b-9627-4d89-b2a7-0972d8195b23.png',
  'https://local-demo.programmaticseo.com',
  null,
  'https://docs.programmaticseo.com/local-seo',
  'Local SEO Automation Tool - Scale Your Local Presence',
  'Automate local SEO campaigns across multiple locations. Generate location-specific content and manage citations at scale.'
),
(
  'E-commerce SEO Optimizer',
  'ecommerce-seo-optimizer',
  'Comprehensive SEO solution designed specifically for e-commerce stores and product catalogs.',
  'E-commerce Tool',
  '<h2>Optimize Every Product Page for Search</h2>
  <p>Our E-commerce SEO Optimizer automatically creates SEO-optimized product pages, category pages, and content that drives organic traffic and sales.</p>',
  '[
    {"name": "Product Page Optimization", "description": "Automatically optimize product titles, descriptions, and metadata"},
    {"name": "Category Page Generation", "description": "Create SEO-friendly category and collection pages"},
    {"name": "Schema Markup Automation", "description": "Add product schema markup for rich snippets"},
    {"name": "Inventory-Based Content", "description": "Generate content based on product availability and features"},
    {"name": "Competitor Price Tracking", "description": "Monitor competitor prices and adjust content accordingly"},
    {"name": "Conversion Optimization", "description": "A/B test product page elements for better conversions"}
  ]',
  '{
    "price": "$147",
    "period": "month",
    "description": "Complete e-commerce SEO solution",
    "features": [
      "Unlimited products",
      "Automated optimization",
      "Conversion tracking",
      "Priority support",
      "Custom integrations"
    ]
  }',
  '["E-commerce", "Product SEO", "Schema Markup", "Conversion Optimization"]',
  false,
  true,
  4
);
