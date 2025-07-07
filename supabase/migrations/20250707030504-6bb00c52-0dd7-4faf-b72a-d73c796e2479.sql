
-- Add Automotive industry to the industries table
INSERT INTO industries (name, slug, title, description, is_published, sort_order, stats, solutions, pain_points)
VALUES (
  'Automotive',
  'automotive',
  'Automotive Industry SEO Solutions',
  'Specialized programmatic SEO strategies for automotive businesses including dealerships, repair shops, parts suppliers, and automotive services. Drive more customers with location-based content and automotive-specific optimization.',
  true,
  8,
  '{"dealerships_served": "500+", "service_inquiries_increased": "300%", "local_visibility_boost": "400%"}'::jsonb,
  '["Dealership inventory optimization", "Service appointment booking", "Parts catalog SEO", "Local automotive SEO", "Seasonal campaign management"]'::jsonb,
  '["High local competition", "Seasonal demand fluctuations", "Complex inventory management", "Trust and reputation building"]'::jsonb
);
