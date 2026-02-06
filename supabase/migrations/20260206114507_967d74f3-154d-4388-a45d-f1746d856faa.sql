
-- Clear existing partner data and re-insert with real scraped data
DELETE FROM public.partners;

-- Insert WISEPIM (Tech Partner) with real data from wisepim.com
INSERT INTO public.partners (
  name, slug, partner_type, region, 
  short_description, full_description, 
  expertise_tags, integrations, services_offered, case_study_metrics,
  website_url, contact_url,
  is_published, is_featured, sort_order
) VALUES (
  'WISEPIM',
  'wisepim',
  'tech',
  'Netherlands',
  'AI-powered Product Information Management platform that transforms product data into content that ranks, converts, and scales globally. Trusted by leading e-commerce businesses.',
  'WISEPIM is an AI-powered Product Information Management (PIM) system that helps e-commerce businesses manage, enrich, and distribute product data across all channels. The platform automatically generates compelling product descriptions, SEO-friendly titles, and relevant attributes using AI — saving hours of manual work while ensuring product listings are optimized for maximum visibility and conversion. WISEPIM supports multi-language generation in 90+ languages, channel-specific content variations for B2B, B2C, and marketplaces, and connects seamlessly to leading e-commerce platforms. Whether used as a standalone PIM or as an AI enhancement layer on top of an existing PIM like Akeneo, WISEPIM adapts to any product catalog.',
  '["AI Content Generation", "SEO Optimization", "Product Data Enrichment", "Multi-Language Translation (90+ languages)", "Auto-Categorization", "Data Quality Analytics", "Automation Builder", "Prompt Library & Lab"]'::jsonb,
  '["Magento 2", "Shopify", "Shopify Plus", "WooCommerce", "Lightspeed (C-Series)", "Lightspeed E-Series (Ecwid)", "CCV Shop", "Akeneo"]'::jsonb,
  '[
    {"title": "AI Product Content Generation", "description": "Generate titles, descriptions, bullet points, attributes, and specifications in seconds. Brand-aligned, benefit-focused content that converts browsers into buyers."},
    {"title": "SEO Optimization", "description": "Product pages optimized for search from day one. Keyword-optimized descriptions, unique content that eliminates duplicate penalties, and auto-generated meta titles & descriptions."},
    {"title": "Multi-Language Translation", "description": "Enter new markets in days, not months. Native-quality AI translations in 90+ languages with industry terminology preserved."},
    {"title": "Channel-Specific Content", "description": "Create content variations for B2B, B2C, marketplaces, and more from a single source. Audience-tailored messaging and marketplace-optimized listings."},
    {"title": "Data Quality & Analytics", "description": "Monitor product data quality with insights, define quality rules and gates for exports, and use the Quality Guard to maintain standards across your catalog."}
  ]'::jsonb,
  '[
    {"label": "+30%", "description": "Higher conversion rates through AI-optimized product descriptions"},
    {"label": "10x", "description": "Faster content creation compared to manual copywriting"},
    {"label": "-50%", "description": "Reduction in product returns through accurate, detailed content"},
    {"label": "18-32%", "description": "Conversion increase reported by leading e-commerce customers"}
  ]'::jsonb,
  'https://wisepim.com',
  'https://wisepim.com/demo',
  true,
  true,
  1
);

-- Insert MediaDoctors (Agency Partner) with real data from mediadoctors.nl
INSERT INTO public.partners (
  name, slug, partner_type, region, 
  short_description, full_description, 
  expertise_tags, integrations, services_offered, case_study_metrics,
  website_url, contact_url,
  is_published, is_featured, sort_order
) VALUES (
  'MediaDoctors',
  'mediadoctors',
  'agency',
  'Netherlands',
  'Results-driven online marketing agency from Groenlo, Netherlands. Specialists in lead generation, e-commerce growth, and recruitment marketing. 5.0★ rated on Google with 21 reviews.',
  'MediaDoctors is a young, ambitious online marketing agency based in Groenlo, Netherlands. The team operates as a true extension of their clients — enthusiastic, reliable, and always challenging them to look further. No yes-men, but driven and innovative digital marketers focused on measurable results. Their specializations span lead generation, e-commerce, and recruitment marketing, helping organizations truly grow in the online world. With a perfect 5.0 Google rating from 21 reviews, MediaDoctors combines strategic thinking with hands-on execution to deliver real business impact.',
  '["Lead Generation", "E-commerce Growth", "Recruitment Marketing", "SEO", "Content Strategy", "Paid Media", "Conversion Optimization", "Online Strategy"]'::jsonb,
  '["Google Ads", "Google Analytics", "WordPress", "Shopify", "Social Media Platforms"]'::jsonb,
  '[
    {"title": "Lead Generation", "description": "Strategic campaigns and SEO-driven approaches to generate high-quality leads that convert into customers for B2B and B2C organizations."},
    {"title": "E-commerce Marketing", "description": "Full-funnel e-commerce growth strategies including SEO, paid search, social advertising, and conversion optimization for online stores."},
    {"title": "Recruitment Marketing", "description": "Attract top talent through targeted online recruitment campaigns, employer branding, and job marketing strategies."},
    {"title": "Online Strategy & Consulting", "description": "Goal-oriented digital strategy consulting. Focus on your strengths while MediaDoctors handles the online growth — together for success."}
  ]'::jsonb,
  '[
    {"label": "+34%", "description": "Uplift in branded search for MARIE MARIE Amsterdam (E-commerce)"},
    {"label": "+159%", "description": "Increase in organic traffic for KNWU (Lead generation)"},
    {"label": "5.0★", "description": "Perfect Google rating from 21 client reviews"}
  ]'::jsonb,
  'https://mediadoctors.nl',
  'https://mediadoctors.nl/start-een-project/',
  true,
  true,
  2
);
