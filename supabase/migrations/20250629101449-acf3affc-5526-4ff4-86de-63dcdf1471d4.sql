
-- Create admin users table with role-based access
CREATE TABLE public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT NOT NULL DEFAULT 'admin',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

-- Create pages table for page-level settings
CREATE TABLE public.pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  meta_title TEXT,
  meta_description TEXT,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create sections table for section configuration
CREATE TABLE public.sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id UUID REFERENCES public.pages(id) ON DELETE CASCADE,
  section_type TEXT NOT NULL,
  section_key TEXT NOT NULL,
  title TEXT,
  is_visible BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create content fields table for individual field values
CREATE TABLE public.content_fields (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section_id UUID REFERENCES public.sections(id) ON DELETE CASCADE,
  field_key TEXT NOT NULL,
  field_type TEXT NOT NULL DEFAULT 'text',
  field_value TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create services table
CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  icon TEXT,
  features JSONB DEFAULT '[]',
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create team members table
CREATE TABLE public.team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  position TEXT,
  bio TEXT,
  image_url TEXT,
  linkedin_url TEXT,
  sort_order INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  category TEXT,
  read_time TEXT,
  image_url TEXT,
  slug TEXT UNIQUE NOT NULL,
  is_published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  client_name TEXT NOT NULL,
  company TEXT,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  image_url TEXT,
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create navigation items table
CREATE TABLE public.navigation_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  label TEXT NOT NULL,
  url TEXT NOT NULL,
  parent_id UUID REFERENCES public.navigation_items(id) ON DELETE CASCADE,
  sort_order INTEGER DEFAULT 0,
  is_visible BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.content_fields ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.navigation_items ENABLE ROW LEVEL SECURITY;

-- Create function to check if user is admin
CREATE OR REPLACE FUNCTION public.is_admin(user_id UUID)
RETURNS BOOLEAN
LANGUAGE SQL
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.admin_users 
    WHERE admin_users.user_id = is_admin.user_id
  );
$$;

-- Create RLS policies for admin access
CREATE POLICY "Admins can manage admin_users" ON public.admin_users
  FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Admins can manage pages" ON public.pages
  FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Everyone can read published pages" ON public.pages
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can manage sections" ON public.sections
  FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Everyone can read visible sections" ON public.sections
  FOR SELECT USING (is_visible = true);

CREATE POLICY "Admins can manage content_fields" ON public.content_fields
  FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Everyone can read content_fields" ON public.content_fields
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage services" ON public.services
  FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Everyone can read services" ON public.services
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage team_members" ON public.team_members
  FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Everyone can read visible team_members" ON public.team_members
  FOR SELECT USING (is_visible = true);

CREATE POLICY "Admins can manage blog_posts" ON public.blog_posts
  FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Everyone can read published blog_posts" ON public.blog_posts
  FOR SELECT USING (is_published = true);

CREATE POLICY "Admins can manage testimonials" ON public.testimonials
  FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Everyone can read testimonials" ON public.testimonials
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage navigation_items" ON public.navigation_items
  FOR ALL USING (public.is_admin(auth.uid()));

CREATE POLICY "Everyone can read visible navigation_items" ON public.navigation_items
  FOR SELECT USING (is_visible = true);

-- Insert initial page data
INSERT INTO public.pages (slug, title, meta_title, meta_description) VALUES
('home', 'Home', 'pSEO - Programmatic SEO Agency', 'Scale your content strategy with programmatic SEO techniques and drive massive organic growth.');

-- Insert initial sections for home page
INSERT INTO public.sections (page_id, section_type, section_key, title, sort_order)
SELECT 
  p.id,
  unnest(ARRAY['hero', 'automation', 'services', 'impact', 'expertise', 'revenue', 'industries', 'kpi', 'team', 'blog']),
  unnest(ARRAY['hero', 'automation', 'services', 'impact', 'expertise', 'revenue', 'industries', 'kpi', 'team', 'blog']),
  unnest(ARRAY['Hero Section', 'Automation Section', 'Services Overview', 'Impact Section', 'Expertise Section', 'Revenue Proof', 'Industries Section', 'KPI Section', 'Team Section', 'Blog Section']),
  unnest(ARRAY[1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
FROM public.pages p WHERE p.slug = 'home';
