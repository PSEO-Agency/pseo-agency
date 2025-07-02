
-- Add new fields to software table for enhanced functionality
ALTER TABLE public.software 
ADD COLUMN IF NOT EXISTS integration_capabilities jsonb DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS use_cases jsonb DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS technical_specs jsonb DEFAULT '{}'::jsonb,
ADD COLUMN IF NOT EXISTS user_rating numeric(2,1) DEFAULT 0.0,
ADD COLUMN IF NOT EXISTS review_count integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS popularity_score integer DEFAULT 0,
ADD COLUMN IF NOT EXISTS difficulty_level text DEFAULT 'Beginner',
ADD COLUMN IF NOT EXISTS setup_time text DEFAULT 'Minutes',
ADD COLUMN IF NOT EXISTS target_audience text DEFAULT 'All Users';

-- Update existing tools to be software with enhanced data
UPDATE public.software 
SET 
  type = 'software',
  category = CASE
    WHEN slug = 'screaming-frog' THEN 'SEO Analysis Platform'
    WHEN slug = 'ahrefs' THEN 'SEO Intelligence Suite'
    WHEN slug = 'google-search-console' THEN 'Search Analytics Platform'
    WHEN slug = 'semrush' THEN 'Digital Marketing Suite'
    ELSE category
  END,
  integration_capabilities = CASE
    WHEN slug = 'screaming-frog' THEN '["CSV Export", "Excel Integration", "Google Analytics", "Google Search Console"]'::jsonb
    WHEN slug = 'ahrefs' THEN '["API Access", "Google Sheets", "Zapier", "WordPress", "Shopify"]'::jsonb
    WHEN slug = 'google-search-console' THEN '["Google Analytics", "Data Studio", "BigQuery", "API Access"]'::jsonb
    WHEN slug = 'semrush' THEN '["Google Analytics", "Google Ads", "Social Media", "CRM Integration"]'::jsonb
    ELSE '[]'::jsonb
  END,
  use_cases = CASE
    WHEN slug = 'screaming-frog' THEN '["Technical SEO Audit", "Site Crawling", "Broken Link Detection", "Meta Analysis"]'::jsonb
    WHEN slug = 'ahrefs' THEN '["Keyword Research", "Competitor Analysis", "Backlink Analysis", "Content Gap Analysis"]'::jsonb
    WHEN slug = 'google-search-console' THEN '["Performance Monitoring", "Technical Issues", "Search Analytics", "Mobile Usability"]'::jsonb
    WHEN slug = 'semrush' THEN '["Keyword Research", "PPC Management", "Social Media", "Content Marketing"]'::jsonb
    ELSE '[]'::jsonb
  END,
  technical_specs = CASE
    WHEN slug = 'screaming-frog' THEN '{"platform": "Desktop", "os_support": ["Windows", "Mac", "Linux"], "memory_required": "4GB RAM", "disk_space": "100MB"}'::jsonb
    WHEN slug = 'ahrefs' THEN '{"platform": "Web", "api_available": true, "data_export": "CSV, Excel, PDF", "update_frequency": "Real-time"}'::jsonb
    WHEN slug = 'google-search-console' THEN '{"platform": "Web", "api_available": true, "data_retention": "16 months", "real_time": "Partial"}'::jsonb
    WHEN slug = 'semrush' THEN '{"platform": "Web", "api_available": true, "data_sources": "100+ countries", "update_frequency": "Daily"}'::jsonb
    ELSE '{}'::jsonb
  END,
  user_rating = CASE
    WHEN slug = 'screaming-frog' THEN 4.5
    WHEN slug = 'ahrefs' THEN 4.7
    WHEN slug = 'google-search-console' THEN 4.3
    WHEN slug = 'semrush' THEN 4.6
    ELSE 0.0
  END,
  review_count = CASE
    WHEN slug = 'screaming-frog' THEN 1250
    WHEN slug = 'ahrefs' THEN 2800
    WHEN slug = 'google-search-console' THEN 950
    WHEN slug = 'semrush' THEN 3200
    ELSE 0
  END,
  popularity_score = CASE
    WHEN slug = 'screaming-frog' THEN 85
    WHEN slug = 'ahrefs' THEN 95
    WHEN slug = 'google-search-console' THEN 90
    WHEN slug = 'semrush' THEN 92
    ELSE 0
  END,
  difficulty_level = CASE
    WHEN slug = 'screaming-frog' THEN 'Intermediate'
    WHEN slug = 'ahrefs' THEN 'Intermediate'
    WHEN slug = 'google-search-console' THEN 'Beginner'
    WHEN slug = 'semrush' THEN 'Advanced'
    ELSE 'Beginner'
  END,
  setup_time = CASE
    WHEN slug = 'screaming-frog' THEN '5 minutes'
    WHEN slug = 'ahrefs' THEN 'Instant'
    WHEN slug = 'google-search-console' THEN '10 minutes'
    WHEN slug = 'semrush' THEN 'Instant'
    ELSE 'Minutes'
  END,
  target_audience = CASE
    WHEN slug = 'screaming-frog' THEN 'SEO Professionals'
    WHEN slug = 'ahrefs' THEN 'SEO Agencies'
    WHEN slug = 'google-search-console' THEN 'Website Owners'
    WHEN slug = 'semrush' THEN 'Digital Marketers'
    ELSE 'All Users'
  END
WHERE type = 'tool';

-- Insert new tool entries
INSERT INTO public.software (title, slug, description, category, type, is_featured, is_published, features, pricing_info, tags, integration_capabilities, use_cases, technical_specs, user_rating, review_count, popularity_score, difficulty_level, setup_time, target_audience) VALUES

('Programmatic SEO Suite', 'programmatic-seo-suite', 'Comprehensive toolkit for automating large-scale SEO content creation and optimization workflows.', 'SEO Automation', 'tool', true, true, 
'[{"name": "Bulk Content Generation", "description": "Generate thousands of SEO-optimized pages automatically"}, {"name": "Keyword Clustering", "description": "Automatically group related keywords for content planning"}, {"name": "Template Builder", "description": "Create dynamic page templates for programmatic content"}]'::jsonb,
'{"free": false, "pricing_tiers": [{"name": "Professional", "price": "$99/month", "features": ["10,000 pages/month", "Keyword clustering", "Template builder"]}, {"name": "Enterprise", "price": "$299/month", "features": ["Unlimited pages", "API access", "White-label options"]}]}'::jsonb,
'["Programmatic SEO", "Content Automation", "Bulk Generation", "SEO Tools"]'::jsonb,
'["WordPress", "Webflow", "Custom APIs", "Google Sheets", "Zapier"]'::jsonb,
'["Bulk Content Creation", "Affiliate Site Building", "Directory Sites", "Location-based SEO"]'::jsonb,
'{"platform": "Web + API", "content_types": ["HTML", "Markdown", "JSON"], "export_formats": ["CSV", "XML", "JSON"], "api_rate_limit": "1000 requests/hour"}'::jsonb,
4.4, 680, 78, 'Intermediate', '15 minutes', 'SEO Professionals'),

('SEO Content Generator', 'seo-content-generator', 'AI-powered tool for creating SEO-optimized content at scale with keyword integration and competitive analysis.', 'Content Creation', 'tool', true, true,
'[{"name": "AI Content Writing", "description": "Generate high-quality, SEO-optimized content using advanced AI"}, {"name": "Keyword Integration", "description": "Seamlessly integrate target keywords naturally into content"}, {"name": "Competitor Analysis", "description": "Analyze top-ranking content to inform your strategy"}]'::jsonb,
'{"free": true, "pricing_tiers": [{"name": "Free", "price": "$0", "features": ["5 articles/month", "Basic keywords", "Standard quality"]}, {"name": "Pro", "price": "$49/month", "features": ["100 articles/month", "Advanced keywords", "Premium AI models"]}]}'::jsonb,
'["AI Content", "SEO Writing", "Content Marketing", "Automation"]'::jsonb,
'["WordPress", "Contentful", "Ghost", "Medium", "LinkedIn"]'::jsonb,
'["Blog Content", "Product Descriptions", "Landing Pages", "Social Media Posts"]'::jsonb,
'{"platform": "Web", "ai_models": ["GPT-4", "Claude", "Custom"], "languages": 25, "content_types": ["Articles", "Ads", "Social", "Email"]}'::jsonb,
4.3, 920, 82, 'Beginner', '2 minutes', 'Content Creators'),

('Keyword Research Master', 'keyword-research-master', 'Advanced keyword research and analysis tool with real-time search volume data and competitive intelligence.', 'Keyword Research', 'tool', false, true,
'[{"name": "Real-time Search Volume", "description": "Access live search volume data from multiple sources"}, {"name": "Keyword Difficulty Analysis", "description": "Analyze competition level for target keywords"}, {"name": "SERP Analysis", "description": "Deep dive into search results for strategic insights"}]'::jsonb,
'{"free": false, "pricing_tiers": [{"name": "Starter", "price": "$29/month", "features": ["1,000 keywords/month", "Basic metrics", "Export to CSV"]}, {"name": "Professional", "price": "$79/month", "features": ["10,000 keywords/month", "Advanced metrics", "API access"]}]}'::jsonb,
'["Keyword Research", "SEO Analysis", "Competitive Intelligence", "Search Volume"]'::jsonb,
'["Google Sheets", "Ahrefs", "SEMrush", "Moz", "Surfer SEO"]'::jsonb,
'["Keyword Discovery", "Content Planning", "PPC Campaigns", "Competitive Analysis"]'::jsonb,
'{"platform": "Web", "data_sources": ["Google", "Bing", "YouTube", "Amazon"], "update_frequency": "Real-time", "export_formats": ["CSV", "Excel", "PDF"]}'::jsonb,
4.2, 540, 75, 'Intermediate', '5 minutes', 'SEO Professionals'),

('Technical SEO Analyzer', 'technical-seo-analyzer', 'Comprehensive technical SEO audit tool that identifies and prioritizes website optimization opportunities.', 'Technical SEO', 'tool', false, true,
'[{"name": "Complete Site Audit", "description": "Comprehensive analysis of technical SEO factors"}, {"name": "Priority Recommendations", "description": "AI-powered prioritization of optimization tasks"}, {"name": "Progress Tracking", "description": "Monitor improvements over time with detailed reports"}]'::jsonb,
'{"free": true, "pricing_tiers": [{"name": "Free", "price": "$0", "features": ["Basic audit", "10 pages", "PDF report"]}, {"name": "Pro", "price": "$39/month", "features": ["Unlimited audits", "Full site crawl", "API access"]}]}'::jsonb,
'["Technical SEO", "Site Audit", "Performance", "Crawling"]'::jsonb,
'["Google Search Console", "Google Analytics", "PageSpeed Insights", "GTMetrix"]'::jsonb,
'["Technical Audits", "Performance Optimization", "Crawl Error Detection", "Mobile SEO"]'::jsonb,
'{"platform": "Web", "crawl_limit": "Unlimited", "report_formats": ["PDF", "HTML", "JSON"], "scheduling": "Automated"}'::jsonb,
4.1, 430, 71, 'Advanced', '10 minutes', 'Technical SEO Experts'),

('Local SEO Toolkit', 'local-seo-toolkit', 'Specialized toolkit for local businesses to dominate local search results and manage online presence.', 'Local SEO', 'tool', false, true,
'[{"name": "Local Keyword Research", "description": "Find high-converting local keywords for your business"}, {"name": "Citation Management", "description": "Manage business listings across 100+ directories"}, {"name": "Review Monitoring", "description": "Track and respond to customer reviews automatically"}]'::jsonb,
'{"free": false, "pricing_tiers": [{"name": "Local", "price": "$59/month", "features": ["5 locations", "Citation management", "Review monitoring"]}, {"name": "Multi-Location", "price": "$149/month", "features": ["25 locations", "Advanced reporting", "Team collaboration"]}]}'::jsonb,
'["Local SEO", "Citations", "Reviews", "Google My Business"]'::jsonb,
'["Google My Business", "Yelp", "Facebook", "Directory Sites", "CRM Systems"]'::jsonb,
'["Local Business Optimization", "Multi-location Management", "Reputation Management", "Local Citations"]'::jsonb,
'{"platform": "Web", "directories": 100, "review_sources": 50, "reporting": "Automated weekly/monthly"}'::jsonb,
4.0, 320, 68, 'Beginner', '20 minutes', 'Local Businesses');
