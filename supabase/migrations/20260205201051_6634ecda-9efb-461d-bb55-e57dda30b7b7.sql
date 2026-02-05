-- Create linkedin_posts table for storing LinkedIn post content
CREATE TABLE public.linkedin_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  hook TEXT,
  body TEXT,
  hashtags TEXT[] DEFAULT '{}',
  images JSONB DEFAULT '[]'::jsonb,
  carousel_slides JSONB DEFAULT '[]'::jsonb,
  is_published BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.linkedin_posts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Admins can manage linkedin_posts" 
ON public.linkedin_posts 
FOR ALL 
USING (is_admin(auth.uid()));

CREATE POLICY "Everyone can read published linkedin_posts" 
ON public.linkedin_posts 
FOR SELECT 
USING (is_published = true);

-- Create index for slug lookups
CREATE INDEX idx_linkedin_posts_slug ON public.linkedin_posts(slug);

-- Insert first post: SEO Content Machine Reveal
INSERT INTO public.linkedin_posts (title, slug, hook, body, hashtags, carousel_slides, is_published, sort_order)
VALUES (
  'SEO Content Machine Reveal',
  'seo-content-machine-reveal',
  'Insane — a traffic machine on autopilot! 🤯
This SEO content system brings in 15,000+ organic visitors/month, outranks competitors, and runs while you sleep.',
  'Here''s how we built it (and how our agency partners are scaling it globally):

🧠 What it does:

• Scrapes niche-relevant news sources
• Analyzes Search Console + top 50 SERPs
• Identifies gaps + opportunities
• Auto-writes SEO briefings & outlines
• Drafts long-form content using verified sources (e.g. Perplexity)
• Enriches with internal links, media & schema
• Sends content for approval (one-click accept or rewrite)
• Publishes to CMS + sends to Google
• Learns from every click & improves over time

✅ It runs 24/7
✅ Clients approve from email
✅ You stay in full control
✅ And yes… it scales infinitely

Plug in just 4 things:
• Your website
• Search Console
• News feeds
• CMS API

That''s it. We''ve rolled this out for agencies, SaaS, and ecommerce teams — and it''s unlocking exponential organic growth.

Why we built this:
Because manual content production doesn''t scale.
You can''t hire fast enough.
You can''t brief fast enough.
But this can.

💬 Want to try it or bring it to your market?
Comment "Machine" or DM me and I''ll show you how it works.',
  ARRAY['#ProgrammaticSEO', '#TrafficMachine', '#AISEO', '#ContentAutomation', '#SEOgrowth', '#AgencyTools'],
  '[
    {
      "slide_number": 1,
      "title": "SEO Traffic Machine",
      "subtitle": "15,000+ clicks/month — Fully Automated",
      "type": "hook",
      "icon": "🚀",
      "visual_notes": "Machine graphic or dashboard mockup with growth curve"
    },
    {
      "slide_number": 2,
      "title": "Plug in just 4 things:",
      "bullets": ["Website URL", "Google Search Console", "News sources", "CMS API"],
      "type": "inputs",
      "icon": "🔌",
      "visual_notes": "Icons for each connecting into engine"
    },
    {
      "slide_number": 3,
      "title": "What It Does (While You Sleep)",
      "bullets": ["Researches & writes SEO articles", "Enriches with data, links, images", "Publishes automatically", "Gets indexed by Google"],
      "type": "engine",
      "icon": "⚙️",
      "visual_notes": "Flow diagram: Input → AI engine → Approval → Publish → Google"
    },
    {
      "slide_number": 4,
      "title": "Results",
      "bullets": ["📈 15,000+ organic visitors/month", "⚙️ Zero manual input", "✅ One-click approval", "🌍 Scaling globally via partners"],
      "type": "results",
      "icon": "📊",
      "visual_notes": "Bold organic growth chart"
    },
    {
      "slide_number": 5,
      "title": "Want to launch yours?",
      "subtitle": "Comment \"Machine\" or DM us",
      "type": "cta",
      "icon": "💬",
      "visual_notes": "Message/chat box icon with CTA"
    }
  ]'::jsonb,
  true,
  1
);