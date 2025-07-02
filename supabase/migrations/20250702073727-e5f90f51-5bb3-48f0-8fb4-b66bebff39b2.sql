
-- Create the software table
CREATE TABLE public.software (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  content TEXT,
  category TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  pricing_info JSONB DEFAULT '{}'::jsonb,
  image_url TEXT,
  demo_url TEXT,
  documentation_url TEXT,
  github_url TEXT,
  tags JSONB DEFAULT '[]'::jsonb,
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  meta_title TEXT,
  meta_description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.software ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for software table
CREATE POLICY "Admins can manage software" 
  ON public.software 
  FOR ALL 
  USING (is_admin(auth.uid()));

CREATE POLICY "Everyone can read published software" 
  ON public.software 
  FOR SELECT 
  USING (is_published = true);

-- Create index for better performance
CREATE INDEX idx_software_slug ON public.software(slug);
CREATE INDEX idx_software_published ON public.software(is_published);
CREATE INDEX idx_software_featured ON public.software(is_featured);
