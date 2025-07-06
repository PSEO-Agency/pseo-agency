
-- Add is_featured column to blog_posts table for the blog section
ALTER TABLE public.blog_posts 
ADD COLUMN is_featured boolean DEFAULT false;

-- Update a few existing blog posts to be featured for testing
UPDATE public.blog_posts 
SET is_featured = true 
WHERE id IN (
  SELECT id 
  FROM public.blog_posts 
  WHERE is_published = true 
  LIMIT 3
);
