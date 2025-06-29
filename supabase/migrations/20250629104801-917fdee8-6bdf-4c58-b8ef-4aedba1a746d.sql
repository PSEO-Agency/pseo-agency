
-- Create industries table for industry-specific landing pages
CREATE TABLE public.industries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  description TEXT,
  hero_image_url TEXT,
  icon TEXT,
  stats JSONB DEFAULT '{}',
  pain_points JSONB DEFAULT '[]',
  solutions JSONB DEFAULT '[]',
  case_study_ids JSONB DEFAULT '[]',
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create case studies table
CREATE TABLE public.case_studies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  client_name TEXT NOT NULL,
  industry TEXT,
  challenge TEXT,
  solution TEXT,
  results TEXT,
  metrics JSONB DEFAULT '{}',
  image_url TEXT,
  gallery_images JSONB DEFAULT '[]',
  testimonial_id UUID,
  service_ids JSONB DEFAULT '[]',
  tags JSONB DEFAULT '[]',
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create resources table for guides, tools, webinars
CREATE TABLE public.resources (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('guide', 'ebook', 'tool', 'webinar', 'checklist', 'template')),
  description TEXT,
  content TEXT,
  download_url TEXT,
  thumbnail_url TEXT,
  file_size TEXT,
  duration TEXT,
  difficulty_level TEXT CHECK (difficulty_level IN ('beginner', 'intermediate', 'advanced')),
  tags JSONB DEFAULT '[]',
  download_count INTEGER DEFAULT 0,
  is_gated BOOLEAN DEFAULT false,
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create FAQs table
CREATE TABLE public.faqs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT,
  sort_order INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create site settings table
CREATE TABLE public.site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT UNIQUE NOT NULL,
  value TEXT,
  type TEXT DEFAULT 'text' CHECK (type IN ('text', 'number', 'boolean', 'json')),
  category TEXT DEFAULT 'general',
  description TEXT,
  is_public BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add foreign key reference for case studies testimonial
ALTER TABLE public.case_studies 
ADD CONSTRAINT fk_case_studies_testimonial 
FOREIGN KEY (testimonial_id) REFERENCES public.testimonials(id);

-- Add new fields to existing testimonials table
ALTER TABLE public.testimonials 
ADD COLUMN category TEXT DEFAULT 'general',
ADD COLUMN video_url TEXT,
ADD COLUMN location TEXT;

-- Add new fields to existing team_members table
ALTER TABLE public.team_members 
ADD COLUMN slug TEXT UNIQUE,
ADD COLUMN email TEXT,
ADD COLUMN phone TEXT,
ADD COLUMN expertise JSONB DEFAULT '[]',
ADD COLUMN achievements JSONB DEFAULT '[]',
ADD COLUMN social_links JSONB DEFAULT '{}';

-- Add new fields to existing services table
ALTER TABLE public.services 
ADD COLUMN slug TEXT UNIQUE,
ADD COLUMN hero_image_url TEXT,
ADD COLUMN process_steps JSONB DEFAULT '[]',
ADD COLUMN pricing_tiers JSONB DEFAULT '[]',
ADD COLUMN faq_ids JSONB DEFAULT '[]',
ADD COLUMN case_study_ids JSONB DEFAULT '[]';

-- Add new fields to existing blog_posts table (fixed syntax error)
ALTER TABLE public.blog_posts 
ADD COLUMN author_id UUID REFERENCES public.team_members(id),
ADD COLUMN tags JSONB DEFAULT '[]',
ADD COLUMN featured_image_alt TEXT,
ADD COLUMN read_count INTEGER DEFAULT 0;

-- Generate slugs for existing records (team members)
UPDATE public.team_members 
SET slug = LOWER(REGEXP_REPLACE(name, '[^a-zA-Z0-9]+', '-', 'g'))
WHERE slug IS NULL;

-- Generate slugs for existing records (services)
UPDATE public.services 
SET slug = LOWER(REGEXP_REPLACE(title, '[^a-zA-Z0-9]+', '-', 'g'))
WHERE slug IS NULL;

-- Enable RLS on all new tables
ALTER TABLE public.industries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for industries
CREATE POLICY "Admins can manage industries" ON public.industries
  FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Everyone can read published industries" ON public.industries
  FOR SELECT USING (is_published = true);

-- Create RLS policies for case studies
CREATE POLICY "Admins can manage case_studies" ON public.case_studies
  FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Everyone can read published case_studies" ON public.case_studies
  FOR SELECT USING (is_published = true);

-- Create RLS policies for resources
CREATE POLICY "Admins can manage resources" ON public.resources
  FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Everyone can read published resources" ON public.resources
  FOR SELECT USING (is_published = true);

-- Create RLS policies for FAQs
CREATE POLICY "Admins can manage faqs" ON public.faqs
  FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Everyone can read visible faqs" ON public.faqs
  FOR SELECT USING (is_visible = true);

-- Create RLS policies for site settings
CREATE POLICY "Admins can manage site_settings" ON public.site_settings
  FOR ALL USING (public.is_admin(auth.uid()));
CREATE POLICY "Everyone can read public site_settings" ON public.site_settings
  FOR SELECT USING (is_public = true);

-- Insert sample data for industries
INSERT INTO public.industries (name, slug, title, description, icon, is_featured, sort_order) VALUES
('SaaS', 'saas', 'SaaS Programmatic SEO', 'Scale your SaaS content with automated SEO strategies that drive qualified leads and reduce customer acquisition costs.', 'Cloud', true, 1),
('E-commerce', 'ecommerce', 'E-commerce SEO Automation', 'Generate thousands of product and category pages that rank and convert visitors into customers.', 'ShoppingCart', true, 2),
('Real Estate', 'real-estate', 'Real Estate SEO at Scale', 'Create location-based landing pages and property listings that dominate local search results.', 'Home', true, 3),
('Healthcare', 'healthcare', 'Healthcare Content Automation', 'Build trust and authority with compliant, scalable content strategies for healthcare providers.', 'Heart', false, 4),
('Finance', 'finance', 'Financial Services SEO', 'Generate compliant, high-converting content for financial products and services at scale.', 'DollarSign', false, 5);

-- Insert sample data for resources
INSERT INTO public.resources (title, slug, type, description, tags, is_featured, sort_order) VALUES
('Programmatic SEO Starter Guide', 'programmatic-seo-starter-guide', 'guide', 'Complete beginner''s guide to implementing programmatic SEO for your business.', '["seo", "guide", "beginner"]', true, 1),
('SEO Content Templates', 'seo-content-templates', 'template', 'Ready-to-use templates for creating scalable SEO content.', '["templates", "content", "seo"]', true, 2),
('Keyword Research Toolkit', 'keyword-research-toolkit', 'tool', 'Advanced toolkit for finding and analyzing keywords at scale.', '["tools", "keywords", "research"]', false, 3);

-- Insert sample site settings
INSERT INTO public.site_settings (key, value, type, category, description, is_public) VALUES
('site_name', 'pSEO Agency', 'text', 'general', 'Website name', true),
('site_tagline', 'Programmatic SEO that Scales', 'text', 'general', 'Website tagline', true),
('contact_email', 'hello@programmaticseo.agency', 'text', 'contact', 'Main contact email', true),
('contact_phone', '+1 (555) 123-4567', 'text', 'contact', 'Main contact phone', true),
('office_address', '123 SEO Street, Digital City, DC 12345', 'text', 'contact', 'Office address', true),
('google_analytics_id', '', 'text', 'tracking', 'Google Analytics tracking ID', false),
('facebook_pixel_id', '', 'text', 'tracking', 'Facebook Pixel ID', false);
