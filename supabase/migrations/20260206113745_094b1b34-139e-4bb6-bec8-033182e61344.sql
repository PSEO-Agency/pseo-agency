
-- Remove all existing seed partners
DELETE FROM public.partners;

-- Insert WISEPIM (Tech Partner)
INSERT INTO public.partners (name, slug, partner_type, region, short_description, full_description, expertise_tags, integrations, services_offered, is_published, is_featured, sort_order)
VALUES (
  'WISEPIM',
  'wisepim',
  'tech',
  'Europe',
  'Product Information Management platform powering scalable programmatic SEO through structured product data.',
  'WISEPIM is a powerful Product Information Management (PIM) system that enables businesses to centralize, enrich, and distribute product data across channels. Combined with Programmatic SEO, WISEPIM allows companies to automatically generate thousands of optimized product and category pages from structured data feeds.',
  '["PIM Integration", "Product Data Enrichment", "Automated Page Generation", "E-commerce SEO", "Data Feed Optimization"]'::jsonb,
  '["Shopify", "WooCommerce", "Magento", "Custom API"]'::jsonb,
  '[{"title": "PIM-Powered Page Generation", "description": "Automatically create SEO-optimized product and category pages from WISEPIM data feeds."}, {"title": "Data Enrichment Pipelines", "description": "Enrich product data with SEO metadata, structured markup, and keyword-optimized descriptions."}, {"title": "Multi-Channel Distribution", "description": "Sync enriched product content across web, marketplaces, and digital channels."}]'::jsonb,
  true,
  true,
  1
);

-- Insert MediaDoctors (Agency Partner)
INSERT INTO public.partners (name, slug, partner_type, region, short_description, full_description, expertise_tags, integrations, services_offered, is_published, is_featured, sort_order)
VALUES (
  'MediaDoctors',
  'mediadoctors',
  'agency',
  'Europe',
  'Full-service digital agency specializing in SEO, content strategy, and programmatic growth for ambitious brands.',
  'MediaDoctors is a results-driven digital marketing agency with deep expertise in SEO, paid media, and content strategy. As a certified Programmatic SEO partner, MediaDoctors helps brands scale organic visibility through automated content generation, technical SEO optimization, and data-driven growth strategies.',
  '["Programmatic SEO Execution", "Content Strategy", "Technical SEO", "Paid Media", "Conversion Optimization"]'::jsonb,
  '["WordPress", "Webflow", "Google Ads", "Analytics"]'::jsonb,
  '[{"title": "Programmatic SEO Builds", "description": "End-to-end execution of scalable landing page and directory systems powered by data."}, {"title": "SEO & Content Strategy", "description": "Comprehensive organic growth planning combining programmatic and editorial SEO."}, {"title": "Performance Marketing", "description": "Integrated paid and organic strategies to maximize ROI across channels."}]'::jsonb,
  true,
  true,
  2
);
