
-- Create a table for social media visuals
CREATE TABLE public.social_media_visuals (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  format TEXT NOT NULL, -- 'facebook-post', 'instagram-story', 'twitter-header', etc.
  width INTEGER NOT NULL,
  height INTEGER NOT NULL,
  template_data JSONB NOT NULL DEFAULT '{}', -- Stores customizable content
  html_variations JSONB NOT NULL DEFAULT '[]', -- Array of 3 HTML template variations
  generated_images JSONB DEFAULT '[]', -- Array of generated image URLs
  is_published BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  download_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS)
ALTER TABLE public.social_media_visuals ENABLE ROW LEVEL SECURITY;

-- Create policy that allows admins to manage social media visuals
CREATE POLICY "Admins can manage social_media_visuals" 
  ON public.social_media_visuals 
  FOR ALL 
  USING (is_admin(auth.uid()));

-- Create policy that allows everyone to read published visuals
CREATE POLICY "Everyone can read published social_media_visuals" 
  ON public.social_media_visuals 
  FOR SELECT 
  USING (is_published = true);

-- Create indexes for performance
CREATE INDEX idx_social_media_visuals_format ON public.social_media_visuals(format);
CREATE INDEX idx_social_media_visuals_published ON public.social_media_visuals(is_published);
CREATE INDEX idx_social_media_visuals_sort_order ON public.social_media_visuals(sort_order);
