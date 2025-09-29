-- Update blog post hero image to Lovable Cloud official image
UPDATE public.blog_posts 
SET 
  image_url = '/lovable-uploads/lovable-cloud-hero.png',
  featured_image_alt = 'Introducing Lovable Cloud and AI - official announcement banner',
  content = REPLACE(content, '/lovable-uploads/lovable-cloud-pricing-hero.png', '/lovable-uploads/lovable-cloud-hero.png')
WHERE slug = 'lovable-cloud-pricing-2025';