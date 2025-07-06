
-- Update existing SAAS industry to use consistent "SAAS" naming
UPDATE industries 
SET name = 'SAAS', 
    title = 'SAAS Industry Solutions',
    description = 'Specialized programmatic SEO strategies designed specifically for Software as a Service businesses. Scale your organic presence with industry-specific content automation and targeted keyword strategies for SAAS companies.'
WHERE slug = 'saas';

-- Insert Local Business industry
INSERT INTO industries (name, slug, title, description, is_published, sort_order, stats, solutions, pain_points)
VALUES (
  'Local Business',
  'local-business',
  'Local Business SEO Solutions',
  'Comprehensive programmatic SEO strategies tailored for local businesses. Drive more local customers with location-based content automation and local search optimization.',
  true,
  5,
  '{"businesses_served": "1000+", "local_rankings_improved": "85%", "average_visibility_increase": "250%"}'::jsonb,
  '["Local SEO optimization", "Google My Business management", "Service area pages", "Location-based content", "Local citation building"]'::jsonb,
  '["Low local visibility", "Competition from national brands", "Managing multi-location presence", "Local review management"]'::jsonb
);

-- Insert Accounting Firm industry
INSERT INTO industries (name, slug, title, description, is_published, sort_order, stats, solutions, pain_points)
VALUES (
  'Accounting Firm',
  'accounting-firm',
  'Accounting Firm SEO Solutions',
  'Professional programmatic SEO strategies designed for accounting firms and CPA practices. Attract more clients with targeted content for tax services, bookkeeping, and financial consulting.',
  true,
  6,
  '{"firms_served": "300+", "client_inquiries_increased": "400%", "tax_season_traffic": "600%"}'::jsonb,
  '["Tax service pages", "CPA expertise showcasing", "Industry-specific accounting", "Seasonal content optimization", "Professional service marketing"]'::jsonb,
  '["Seasonal traffic fluctuations", "Competition from large firms", "Complex service explanations", "Trust and credibility building"]'::jsonb
);

-- Insert Law Firm industry  
INSERT INTO industries (name, slug, title, description, is_published, sort_order, stats, solutions, pain_points)
VALUES (
  'Law Firm',
  'law-firm',
  'Law Firm SEO Solutions',
  'Specialized programmatic SEO strategies for law firms and legal practices. Generate more qualified leads with practice area optimization and legal content automation.',
  true,
  7,
  '{"law_firms_served": "250+", "case_inquiries_increased": "350%", "practice_area_rankings": "90%"}'::jsonb,
  '["Practice area optimization", "Attorney profile pages", "Legal resource content", "Case study showcasing", "Local legal SEO"]'::jsonb,
  '["Intense legal competition", "Complex compliance requirements", "Building trust online", "Practice area specialization"]'::jsonb
);
