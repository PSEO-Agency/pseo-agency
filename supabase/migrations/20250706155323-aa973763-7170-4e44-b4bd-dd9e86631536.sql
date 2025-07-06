
-- Insert new services
INSERT INTO public.services (title, slug, description, sort_order, is_featured, features, process_steps, pricing_tiers, case_study_ids, faq_ids)
VALUES 
-- SEO Automation
(
  'SEO Automation',
  'seo-automation',
  'Streamline your SEO workflow with intelligent automation tools that handle routine optimization tasks, monitor performance, and implement improvements at scale.',
  2,
  true,
  '["Automated keyword tracking", "Performance monitoring", "Technical SEO audits", "Content optimization", "Rank tracking automation"]'::jsonb,
  '["SEO audit and analysis", "Automation setup", "Workflow implementation", "Performance monitoring", "Continuous optimization"]'::jsonb,
  '[]'::jsonb,
  '[]'::jsonb,
  '[]'::jsonb
),
-- AI Website (100% SEO Proof)
(
  'AI Website (100% SEO Proof)',
  'ai-website-seo-proof',
  'Launch fully SEO-optimized websites built with AI technology, ensuring perfect technical SEO, content structure, and search engine compatibility from day one.',
  3,
  true,
  '["AI-powered website generation", "Perfect technical SEO", "Optimized site structure", "Fast loading speeds", "Mobile-first design", "Schema markup integration"]'::jsonb,
  '["Requirements analysis", "AI website generation", "SEO optimization", "Quality assurance", "Launch and monitoring"]'::jsonb,
  '[]'::jsonb,
  '[]'::jsonb,
  '[]'::jsonb
),
-- Webscraping
(
  'Webscraping',
  'webscraping',
  'Extract valuable data from competitor websites, market research, and content analysis to fuel your SEO and content strategies with actionable insights.',
  5,
  true,
  '["Competitor data extraction", "Market research automation", "Content gap analysis", "Price monitoring", "Lead generation", "Data cleaning and processing"]'::jsonb,
  '["Target identification", "Scraping setup", "Data extraction", "Processing and analysis", "Delivery and reporting"]'::jsonb,
  '[]'::jsonb,
  '[]'::jsonb,
  '[]'::jsonb
),
-- PR & Linkbuilding
(
  'PR & Linkbuilding',
  'pr-linkbuilding',
  'Build domain authority and increase organic visibility through strategic public relations campaigns and high-quality backlink acquisition.',
  7,
  true,
  '["Strategic outreach campaigns", "High-quality backlink acquisition", "Digital PR strategies", "Brand mention tracking", "Relationship building", "Authority building"]'::jsonb,
  '["Link opportunity research", "Outreach strategy development", "Campaign execution", "Relationship management", "Performance tracking"]'::jsonb,
  '[]'::jsonb,
  '[]'::jsonb,
  '[]'::jsonb
);

-- Update sort orders for existing services
UPDATE public.services 
SET sort_order = 4 
WHERE slug = 'ai-content-automation';

UPDATE public.services 
SET sort_order = 6 
WHERE slug = 'technical-seo';

UPDATE public.services 
SET sort_order = 8 
WHERE slug = 'analytics-reporting';

-- Ensure Programmatic SEO has correct sort order
UPDATE public.services 
SET sort_order = 1 
WHERE slug = 'programmatic-seo';
