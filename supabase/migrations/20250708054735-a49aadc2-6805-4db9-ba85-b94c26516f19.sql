-- Add Google Search Console to the software table
INSERT INTO software (
  title, 
  slug, 
  type, 
  category, 
  description, 
  is_published, 
  is_featured, 
  difficulty_level, 
  setup_time, 
  target_audience,
  user_rating,
  review_count,
  popularity_score,
  sort_order
) VALUES (
  'Google Search Console',
  'google-search-console',
  'tool',
  'SEO Analytics',
  'Free web service provided by Google that helps you monitor, maintain, and troubleshoot your site presence in Google Search results. Essential for programmatic SEO monitoring and performance tracking.',
  true,
  true,
  'Beginner',
  'Minutes',
  'All Users',
  4.8,
  50000,
  98,
  1
) ON CONFLICT (slug) DO NOTHING;