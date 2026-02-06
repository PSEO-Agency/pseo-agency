
-- Update existing countries
UPDATE countries SET sort_order = 0, is_featured = true WHERE slug = 'netherlands';
UPDATE countries SET sort_order = 1, is_featured = true WHERE slug = 'dubai';
UPDATE countries SET sort_order = 3, is_featured = true WHERE slug = 'united-states';
UPDATE countries SET sort_order = 4, is_featured = false WHERE slug = 'singapore';
UPDATE countries SET sort_order = 10, is_featured = false WHERE slug = 'germany';
UPDATE countries SET sort_order = 14, is_featured = false WHERE slug = 'united-kingdom';

-- Insert new active countries
INSERT INTO countries (name, slug, flag_emoji, region, sort_order, is_featured, is_published, hero_headline, hero_description)
VALUES 
  ('Belgium', 'belgium', '🇧🇪', 'Europe', 2, true, true, 'Programmatic SEO in Belgium', 'Scale organic traffic in Belgium with data-driven programmatic SEO strategies and trusted local execution.'),
  ('South Africa', 'south-africa', '🇿🇦', 'Africa', 5, true, true, 'Programmatic SEO in South Africa', 'Expand your organic reach in South Africa with programmatic SEO strategies tailored to the local market.');

-- Insert new coming soon countries
INSERT INTO countries (name, slug, flag_emoji, region, sort_order, is_featured, is_published, hero_headline, hero_description)
VALUES
  ('Spain', 'spain', '🇪🇸', 'Europe', 11, false, true, 'Programmatic SEO in Spain', 'Coming soon — scale organic traffic in Spain with our trusted partner network.'),
  ('Brazil', 'brazil', '🇧🇷', 'South America', 12, false, true, 'Programmatic SEO in Brazil', 'Coming soon — expand your organic reach in Brazil with programmatic SEO.'),
  ('Romania', 'romania', '🇷🇴', 'Europe', 13, false, true, 'Programmatic SEO in Romania', 'Coming soon — grow organic traffic in Romania with data-driven SEO strategies.'),
  ('Canada', 'canada', '🇨🇦', 'North America', 15, false, true, 'Programmatic SEO in Canada', 'Coming soon — scale organic growth in Canada with our programmatic SEO partner.');

-- Update Singapore sort_order (was set above but let's also correct it to be active)
UPDATE countries SET sort_order = 5, is_featured = true WHERE slug = 'singapore';
