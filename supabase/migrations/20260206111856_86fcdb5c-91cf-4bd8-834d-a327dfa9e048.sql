
-- Create partners table for the Partner Marketplace
CREATE TABLE public.partners (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  partner_type TEXT NOT NULL DEFAULT 'agency',
  region TEXT,
  country_slug TEXT,
  logo_url TEXT,
  short_description TEXT,
  full_description TEXT,
  expertise_tags JSONB DEFAULT '[]'::jsonb,
  integrations JSONB DEFAULT '[]'::jsonb,
  industries JSONB DEFAULT '[]'::jsonb,
  services_offered JSONB DEFAULT '[]'::jsonb,
  case_study_metrics JSONB DEFAULT '[]'::jsonb,
  contact_url TEXT,
  website_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.partners ENABLE ROW LEVEL SECURITY;

-- RLS policies
CREATE POLICY "Everyone can read published partners"
  ON public.partners
  FOR SELECT
  USING (is_published = true);

CREATE POLICY "Admins can manage partners"
  ON public.partners
  FOR ALL
  USING (is_admin(auth.uid()));

-- Index for slug lookups
CREATE INDEX idx_partners_slug ON public.partners (slug);
CREATE INDEX idx_partners_type ON public.partners (partner_type);
CREATE INDEX idx_partners_published ON public.partners (is_published);

-- Seed data: Country Partners
INSERT INTO public.partners (name, slug, partner_type, region, country_slug, short_description, full_description, expertise_tags, integrations, industries, services_offered, case_study_metrics, contact_url, website_url, is_featured, sort_order, meta_title, meta_description)
VALUES
  (
    'Programmatic SEO B.V.',
    'programmatic-seo-bv',
    'country',
    'Europe',
    'netherlands',
    'Headquarters — The original Programmatic SEO agency based in the Netherlands, pioneering scalable organic growth systems.',
    'Programmatic SEO B.V. is the founding entity and global headquarters of the Programmatic SEO partner network. Based in Enschede, Netherlands, we architect data-driven content systems that generate thousands of high-ranking pages at scale.',
    '["Programmatic SEO Strategy", "AI Content Automation", "Technical SEO & Indexation", "Data Enrichment Pipelines", "Enterprise SEO Systems"]',
    '["Webflow", "WordPress", "Headless CMS", "Airtable", "n8n / Zapier"]',
    '["SaaS", "Ecommerce", "Fintech", "Travel", "Real Estate"]',
    '[{"title": "Full-Stack Programmatic SEO", "description": "End-to-end strategy, build, and optimization"}, {"title": "AI Content Pipeline Design", "description": "Custom LLM-powered content generation systems"}, {"title": "Technical SEO Architecture", "description": "Crawlability, indexation, and rendering optimization"}, {"title": "Partner Network Management", "description": "Coordinating global partner delivery"}]',
    '[{"label": "+500%", "description": "Average organic traffic growth"}, {"label": "50,000+", "description": "Pages launched across clients"}, {"label": "100+", "description": "Enterprise clients served"}]',
    '/contact',
    'https://programmaticseo.agency',
    true,
    0,
    'Programmatic SEO B.V. — Global HQ | Partner Marketplace',
    'The founding Programmatic SEO agency. Headquartered in the Netherlands, we pioneer scalable organic growth systems worldwide.'
  ),
  (
    'GrowthLab Dubai',
    'growthlab-dubai',
    'country',
    'Middle East',
    'dubai',
    'Certified Country Partner — UAE. Specialists in Arabic SEO, SaaS growth, and programmatic content execution across the GCC region.',
    'GrowthLab Dubai is a certified Programmatic SEO partner serving the UAE and broader GCC region. They combine deep Arabic-language SEO expertise with scalable content automation to help businesses dominate Middle Eastern search markets.',
    '["Programmatic SEO Strategy", "Arabic SEO", "Directory & Landing Page Generation", "AI Content Automation", "Multilingual SEO Expansion"]',
    '["Webflow", "WordPress", "Airtable"]',
    '["SaaS", "Ecommerce", "Real Estate", "Travel"]',
    '[{"title": "Local PSEO Strategy", "description": "Market-specific programmatic SEO planning"}, {"title": "Landing Page Automation", "description": "Scalable page generation for GCC markets"}, {"title": "Technical SEO Support", "description": "Indexation and crawl optimization"}, {"title": "Ongoing Growth Optimization", "description": "Continuous performance monitoring and scaling"}]',
    '[{"label": "+320%", "description": "Organic growth achieved"}, {"label": "10,000+", "description": "Pages launched"}, {"label": "Multi-region", "description": "Scaling success across GCC"}]',
    '/countries/dubai',
    null,
    true,
    1,
    'GrowthLab Dubai — Certified PSEO Partner UAE | Partner Marketplace',
    'Certified Programmatic SEO partner in UAE. Arabic SEO, SaaS growth, and scalable content automation across the GCC region.'
  ),
  (
    'Scale SEO Partners',
    'scale-seo-partners',
    'country',
    'North America',
    'united-states',
    'Certified Country Partner — USA. Enterprise-grade programmatic SEO execution for the North American market.',
    'Scale SEO Partners delivers enterprise-grade Programmatic SEO solutions across the United States. With deep expertise in SaaS and fintech verticals, they help US-based companies generate thousands of optimized landing pages.',
    '["Enterprise SEO Systems", "Programmatic SEO Strategy", "Technical SEO & Indexation", "Data Enrichment Pipelines"]',
    '["WordPress", "Headless CMS", "Airtable", "n8n / Zapier"]',
    '["SaaS", "Fintech", "Ecommerce"]',
    '[{"title": "Enterprise PSEO Architecture", "description": "Large-scale page generation for US markets"}, {"title": "Data Pipeline Development", "description": "Custom data enrichment and content feeds"}, {"title": "Technical SEO Optimization", "description": "Site performance and indexation at scale"}]',
    '[{"label": "+450%", "description": "Organic traffic increase"}, {"label": "25,000+", "description": "Pages deployed"}, {"label": "Enterprise", "description": "Fortune 500 clients served"}]',
    '/countries/united-states',
    null,
    true,
    2,
    'Scale SEO Partners — Certified PSEO Partner USA | Partner Marketplace',
    'Enterprise-grade Programmatic SEO partner in the United States. Scalable page generation and technical SEO optimization.'
  ),
  (
    'Growth Engine SG',
    'growth-engine-sg',
    'country',
    'Asia Pacific',
    'singapore',
    'Certified Country Partner — Singapore. APAC-focused programmatic SEO with multilingual content capabilities.',
    'Growth Engine SG operates as the Asia-Pacific hub for Programmatic SEO delivery. Based in Singapore, they specialize in multilingual SEO expansion across diverse APAC markets.',
    '["Multilingual SEO Expansion", "Programmatic SEO Strategy", "AI Content Automation", "Directory & Landing Page Generation"]',
    '["Webflow", "WordPress", "Shopify"]',
    '["SaaS", "Ecommerce", "Travel"]',
    '[{"title": "APAC Market Expansion", "description": "Multi-market programmatic SEO rollout"}, {"title": "Multilingual Content Systems", "description": "Automated content in 10+ Asian languages"}, {"title": "Regional SEO Strategy", "description": "Localized search optimization"}]',
    '[{"label": "+280%", "description": "Regional organic growth"}, {"label": "15,000+", "description": "Multilingual pages created"}, {"label": "10+", "description": "Languages supported"}]',
    '/countries/singapore',
    null,
    true,
    3,
    'Growth Engine SG — Certified PSEO Partner Singapore | Partner Marketplace',
    'Asia-Pacific Programmatic SEO partner based in Singapore. Multilingual SEO expansion across APAC markets.'
  );

-- Seed data: Tech Partners
INSERT INTO public.partners (name, slug, partner_type, region, short_description, full_description, expertise_tags, integrations, industries, services_offered, case_study_metrics, website_url, is_featured, sort_order, meta_title, meta_description)
VALUES
  (
    'Webflow',
    'webflow',
    'tech',
    'Global',
    'Best for scalable landing page deployments. Visual-first CMS with powerful API for programmatic page generation.',
    'Webflow is a leading no-code web development platform and one of our primary technology partners. Its visual CMS and robust API make it ideal for programmatic SEO deployments, enabling rapid creation of thousands of templated landing pages with dynamic data binding.',
    '["Directory & Landing Page Generation", "Technical SEO & Indexation", "Enterprise SEO Systems"]',
    '["Webflow"]',
    '["SaaS", "Ecommerce", "Real Estate", "Travel"]',
    '[{"title": "CMS Collection Automation", "description": "Bulk page creation via Webflow CMS API"}, {"title": "Template System Design", "description": "SEO-optimized page templates"}, {"title": "Dynamic Data Binding", "description": "Connecting external data sources to Webflow"}]',
    '[{"label": "50,000+", "description": "Pages deployed on Webflow"}, {"label": "Sub-second", "description": "Load times achieved"}, {"label": "#1", "description": "Recommended CMS for PSEO"}]',
    'https://webflow.com',
    true,
    10,
    'Webflow — Technology Partner | Programmatic SEO Partner Marketplace',
    'Webflow integration for scalable programmatic SEO. Deploy thousands of landing pages with visual CMS and powerful API.'
  ),
  (
    'WordPress',
    'wordpress',
    'tech',
    'Global',
    'The world''s most popular CMS. Flexible plugin ecosystem for programmatic content generation at any scale.',
    'WordPress powers over 40% of the web and remains a cornerstone technology partner for Programmatic SEO implementations. With its extensive plugin ecosystem, custom post types, and REST API, WordPress enables highly customizable programmatic page generation.',
    '["Directory & Landing Page Generation", "AI Content Automation", "Technical SEO & Indexation"]',
    '["WordPress"]',
    '["SaaS", "Ecommerce", "Fintech", "Real Estate"]',
    '[{"title": "Custom Post Type Automation", "description": "Programmatic content via WordPress REST API"}, {"title": "Plugin Integration", "description": "Yoast, RankMath, and custom SEO plugins"}, {"title": "Multi-site Deployments", "description": "WordPress multisite for large-scale PSEO"}]',
    '[{"label": "30,000+", "description": "Pages deployed on WordPress"}, {"label": "40%", "description": "Of the web runs WordPress"}, {"label": "Enterprise", "description": "Grade scalability"}]',
    'https://wordpress.org',
    true,
    11,
    'WordPress — Technology Partner | Programmatic SEO Partner Marketplace',
    'WordPress integration for programmatic SEO at scale. Custom post types, REST API, and extensive plugin ecosystem.'
  ),
  (
    'Airtable',
    'airtable',
    'tech',
    'Global',
    'Powerful data management platform. Perfect for organizing datasets that feed programmatic SEO content pipelines.',
    'Airtable serves as a critical data layer in many Programmatic SEO implementations. Its spreadsheet-database hybrid interface makes it easy for teams to manage large datasets that feed into automated content generation pipelines.',
    '["Data Enrichment Pipelines", "AI Content Automation", "Programmatic SEO Strategy"]',
    '["Airtable"]',
    '["SaaS", "Ecommerce", "Real Estate", "Travel"]',
    '[{"title": "Data Pipeline Design", "description": "Structured data management for PSEO feeds"}, {"title": "API Integration", "description": "Connecting Airtable to CMS platforms"}, {"title": "Content Dataset Management", "description": "Organizing thousands of data points for page generation"}]',
    '[{"label": "100K+", "description": "Data records managed"}, {"label": "Real-time", "description": "Sync capabilities"}, {"label": "No-code", "description": "Data management"}]',
    'https://airtable.com',
    false,
    12,
    'Airtable — Technology Partner | Programmatic SEO Partner Marketplace',
    'Airtable integration for programmatic SEO data management. Organize and automate content datasets at scale.'
  ),
  (
    'n8n',
    'n8n',
    'tech',
    'Global',
    'Open-source workflow automation. Build custom data enrichment and content generation pipelines for PSEO.',
    'n8n is an open-source workflow automation platform that powers many of our most sophisticated Programmatic SEO pipelines. Its node-based interface enables complex data enrichment, API orchestration, and automated content generation workflows.',
    '["Data Enrichment Pipelines", "AI Content Automation", "Enterprise SEO Systems"]',
    '["n8n / Zapier"]',
    '["SaaS", "Fintech", "Ecommerce"]',
    '[{"title": "Workflow Automation", "description": "Custom n8n workflows for PSEO pipelines"}, {"title": "API Orchestration", "description": "Connecting multiple data sources and APIs"}, {"title": "Content Generation Pipelines", "description": "Automated content creation at scale"}]',
    '[{"label": "500+", "description": "Workflows deployed"}, {"label": "Open-source", "description": "Self-hosted flexibility"}, {"label": "200+", "description": "Integration nodes"}]',
    'https://n8n.io',
    false,
    13,
    'n8n — Technology Partner | Programmatic SEO Partner Marketplace',
    'n8n workflow automation for programmatic SEO. Build custom data enrichment and content generation pipelines.'
  );

-- Seed data: Agency Partners
INSERT INTO public.partners (name, slug, partner_type, region, short_description, full_description, expertise_tags, integrations, industries, services_offered, case_study_metrics, is_featured, sort_order, meta_title, meta_description)
VALUES
  (
    'ContentScale Agency',
    'contentscale-agency',
    'agency',
    'Europe',
    'Full-service content automation agency. Specialists in AI-driven programmatic content at enterprise scale.',
    'ContentScale Agency is a certified delivery partner specializing in AI-driven content automation for enterprise clients. They combine deep technical expertise with creative content strategy to deliver programmatic SEO implementations that drive measurable organic growth.',
    '["AI Content Automation", "Programmatic SEO Strategy", "Enterprise SEO Systems", "Data Enrichment Pipelines"]',
    '["WordPress", "Webflow", "Headless CMS", "n8n / Zapier"]',
    '["SaaS", "Fintech", "Ecommerce"]',
    '[{"title": "AI Content Strategy", "description": "LLM-powered content pipelines for programmatic SEO"}, {"title": "Enterprise Implementation", "description": "Large-scale PSEO deployments"}, {"title": "Performance Optimization", "description": "Continuous improvement and scaling"}]',
    '[{"label": "+380%", "description": "Average client traffic growth"}, {"label": "20,000+", "description": "AI-generated pages deployed"}, {"label": "50+", "description": "Enterprise clients"}]',
    true,
    20,
    'ContentScale Agency — Certified Agency Partner | Partner Marketplace',
    'Certified Programmatic SEO agency partner. AI-driven content automation and enterprise-scale implementations.'
  ),
  (
    'SEO Architects',
    'seo-architects',
    'agency',
    'North America',
    'Technical SEO consultancy with deep programmatic expertise. Building scalable search infrastructure for growth companies.',
    'SEO Architects is a boutique technical SEO consultancy based in North America, specializing in the architecture and infrastructure behind successful Programmatic SEO campaigns. They focus on crawlability, indexation strategy, and rendering optimization at scale.',
    '["Technical SEO & Indexation", "Enterprise SEO Systems", "Programmatic SEO Strategy"]',
    '["Headless CMS", "WordPress", "Shopify"]',
    '["SaaS", "Ecommerce", "Fintech"]',
    '[{"title": "Technical SEO Auditing", "description": "Deep-dive crawlability and indexation analysis"}, {"title": "Search Infrastructure Design", "description": "Scalable architecture for PSEO sites"}, {"title": "Rendering Optimization", "description": "JavaScript SEO and dynamic rendering solutions"}]',
    '[{"label": "99.5%", "description": "Indexation rate achieved"}, {"label": "Sub-1s", "description": "Core Web Vitals scores"}, {"label": "Fortune 500", "description": "Clients served"}]',
    false,
    21,
    'SEO Architects — Certified Agency Partner | Partner Marketplace',
    'Technical SEO consultancy and certified Programmatic SEO partner. Scalable search infrastructure for growth companies.'
  );
