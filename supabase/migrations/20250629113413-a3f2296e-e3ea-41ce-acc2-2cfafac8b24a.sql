
-- Sync Services from frontend to database (handle duplicates)
INSERT INTO public.services (title, description, icon, features, is_featured, sort_order, slug) VALUES
('Programmatic SEO', 'Scale your content creation with automated SEO strategies that generate thousands of high-ranking pages.', 'Search', '["Automated content generation", "Template-based scaling", "SEO optimization", "Performance tracking"]', true, 1, 'programmatic-seo'),
('Content Automation', 'Streamline your content workflow with AI-powered automation tools and templates.', 'FileText', '["AI content generation", "Template management", "Workflow automation", "Quality control"]', true, 2, 'content-automation'),
('Technical SEO', 'Comprehensive technical SEO audits and optimizations for maximum search visibility.', 'Settings', '["Site audits", "Performance optimization", "Schema markup", "Core Web Vitals"]', true, 3, 'technical-seo'),
('Analytics & Reporting', 'Advanced analytics and reporting to track your SEO performance and ROI.', 'BarChart3', '["Custom dashboards", "Performance tracking", "ROI analysis", "Automated reporting"]', false, 4, 'analytics-reporting')
ON CONFLICT (slug) DO UPDATE SET
  description = EXCLUDED.description,
  icon = EXCLUDED.icon,
  features = EXCLUDED.features,
  is_featured = EXCLUDED.is_featured,
  sort_order = EXCLUDED.sort_order;

-- Sync Team Members from frontend to database (handle duplicates)
INSERT INTO public.team_members (name, position, bio, image_url, linkedin_url, expertise, is_visible, sort_order, slug) VALUES
('Sarah Johnson', 'CEO & SEO Strategist', 'With over 8 years of experience in programmatic SEO, Sarah has helped hundreds of companies scale their organic traffic through automated content strategies.', '/placeholder.svg', 'https://linkedin.com/in/sarahjohnson', '["Programmatic SEO", "Content Strategy", "Team Leadership", "Business Development"]', true, 1, 'sarah-johnson'),
('Mike Chen', 'Technical SEO Lead', 'Mike specializes in the technical aspects of programmatic SEO, from site architecture to automated content generation systems.', '/placeholder.svg', 'https://linkedin.com/in/mikechen', '["Technical SEO", "Web Development", "Site Architecture", "Automation Tools"]', true, 2, 'mike-chen'),
('Emily Rodriguez', 'Content Operations Manager', 'Emily oversees our content operations and ensures quality at scale across all automated content generation processes.', '/placeholder.svg', 'https://linkedin.com/in/emilyrodriguez', '["Content Operations", "Quality Assurance", "Project Management", "Process Optimization"]', true, 3, 'emily-rodriguez')
ON CONFLICT (slug) DO UPDATE SET
  position = EXCLUDED.position,
  bio = EXCLUDED.bio,
  image_url = EXCLUDED.image_url,
  linkedin_url = EXCLUDED.linkedin_url,
  expertise = EXCLUDED.expertise,
  is_visible = EXCLUDED.is_visible,
  sort_order = EXCLUDED.sort_order;

-- Sync Testimonials from frontend to database (handle duplicates by client_name)
INSERT INTO public.testimonials (client_name, company, content, rating, category, is_featured, sort_order) VALUES
('David Park', 'TechStartup Inc.', 'Working with this team transformed our SEO strategy. We went from 10K to 500K monthly organic visitors in just 6 months through programmatic SEO.', 5, 'saas', true, 1),
('Lisa Thompson', 'E-commerce Plus', 'The programmatic approach helped us create thousands of product pages that actually rank and convert. Our organic revenue increased by 300%.', 5, 'ecommerce', true, 2),
('James Wilson', 'Real Estate Pro', 'Their location-based SEO strategy helped us dominate local search results across 50+ cities. Incredible results and professional service.', 5, 'real-estate', true, 3),
('Maria Garcia', 'Healthcare Solutions', 'Compliance was our biggest concern, but they handled everything perfectly. Our organic traffic grew while maintaining all regulatory requirements.', 5, 'healthcare', false, 4)
ON CONFLICT DO NOTHING;

-- Sync Blog Posts from frontend to database (handle duplicates)
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, tags, image_url, is_published, published_at) VALUES
('The Complete Guide to Programmatic SEO in 2024', 'complete-guide-programmatic-seo-2024', 'Learn everything you need to know about implementing programmatic SEO strategies that scale.', 'Complete blog post content about programmatic SEO strategies, implementation, and best practices...', 'Guide', '["programmatic-seo", "guide", "2024", "strategy"]', '/placeholder.svg', true, NOW()),
('How to Scale Content Creation with Automation', 'scale-content-creation-automation', 'Discover the tools and techniques for automating your content creation process without sacrificing quality.', 'Detailed guide on content automation tools, workflows, and quality control measures...', 'Tutorial', '["automation", "content-creation", "scaling", "tools"]', '/placeholder.svg', true, NOW() - INTERVAL '7 days'),
('Technical SEO Checklist for Large Websites', 'technical-seo-checklist-large-websites', 'A comprehensive checklist to ensure your large-scale website is technically optimized for search engines.', 'Complete technical SEO checklist covering all aspects from crawling to indexing to performance...', 'Checklist', '["technical-seo", "checklist", "optimization", "large-scale"]', '/placeholder.svg', true, NOW() - INTERVAL '14 days')
ON CONFLICT (slug) DO UPDATE SET
  excerpt = EXCLUDED.excerpt,
  content = EXCLUDED.content,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  image_url = EXCLUDED.image_url,
  is_published = EXCLUDED.is_published;

-- Sync Navigation Items (handle duplicates)
INSERT INTO public.navigation_items (label, url, sort_order, is_visible) VALUES
('Home', '/', 1, true),
('Services', '/services', 2, true),
('Industries', '/industries', 3, true),
('Case Studies', '/case-studies', 4, true),
('Resources', '/resources', 5, true),
('About', '/about', 6, true),
('Blog', '/blog', 7, true),
('Contact', '/contact', 8, true)
ON CONFLICT DO NOTHING;

-- Sync FAQs from frontend to database (handle duplicates)
INSERT INTO public.faqs (question, answer, category, sort_order, is_visible) VALUES
('What is programmatic SEO?', 'Programmatic SEO is the process of creating SEO-optimized pages at scale using templates, data, and automation. Instead of manually creating each page, you use systematic approaches to generate hundreds or thousands of pages that target specific keywords and user intents.', 'general', 1, true),
('How long does it take to see results?', 'Results typically start showing within 3-6 months, with significant improvements visible by month 6-12. The timeline depends on your domain authority, competition level, and implementation quality.', 'general', 2, true),
('Is programmatic SEO safe for my website?', 'Yes, when done correctly. We follow all Google guidelines and focus on creating genuinely useful content at scale. Our approach emphasizes quality over quantity and ensures each generated page provides real value to users.', 'general', 3, true),
('What industries work best with programmatic SEO?', 'Programmatic SEO works particularly well for SaaS companies, e-commerce sites, real estate, job boards, travel sites, and any business with large datasets that can be turned into valuable landing pages.', 'general', 4, true),
('Do you provide ongoing support?', 'Yes, we offer comprehensive ongoing support including monitoring, updates, optimization, and scaling of your programmatic SEO campaigns.', 'general', 5, true)
ON CONFLICT DO NOTHING;

-- Add more comprehensive site settings (handle duplicates)
INSERT INTO public.site_settings (key, value, type, category, description, is_public) VALUES
('hero_title', 'Scale Your SEO with Programmatic Content', 'text', 'general', 'Main hero section title', true),
('hero_subtitle', 'Generate thousands of SEO-optimized pages that rank and convert using our proven programmatic SEO strategies.', 'text', 'general', 'Hero section subtitle', true),
('cta_primary_text', 'Get Free SEO Audit', 'text', 'general', 'Primary call-to-action button text', true),
('cta_secondary_text', 'Schedule Consultation', 'text', 'general', 'Secondary call-to-action button text', true),
('company_description', 'We are a specialized programmatic SEO agency that helps businesses scale their organic traffic through automated content strategies and technical optimization.', 'text', 'about', 'Company description for about section', true),
('years_of_experience', '8', 'number', 'about', 'Years of experience in SEO', true),
('clients_served', '200+', 'text', 'about', 'Number of clients served', true),
('traffic_generated', '50M+', 'text', 'about', 'Monthly organic traffic generated for clients', true),
('average_growth', '400%', 'text', 'about', 'Average traffic growth percentage', true),
('meta_description', 'Professional programmatic SEO services that scale. Generate thousands of ranking pages with our proven automated content strategies. Get your free audit today.', 'text', 'seo', 'Default meta description', true),
('og_image', '/placeholder.svg', 'text', 'seo', 'Default Open Graph image', true),
('twitter_handle', '@pseoagency', 'text', 'social', 'Twitter handle', true),
('linkedin_company', 'pseo-agency', 'text', 'social', 'LinkedIn company page', true),
('facebook_page', 'pseoagency', 'text', 'social', 'Facebook page name', true)
ON CONFLICT (key) DO UPDATE SET
  value = EXCLUDED.value,
  type = EXCLUDED.type,
  category = EXCLUDED.category,
  description = EXCLUDED.description,
  is_public = EXCLUDED.is_public;

-- Update existing site settings with better values
UPDATE public.site_settings SET 
  value = 'Professional Programmatic SEO Agency | Scale Your Content',
  description = 'Complete website title with branding'
WHERE key = 'site_name';

UPDATE public.site_settings SET 
  value = 'Scale Your Organic Traffic with Automated SEO Content Strategies',
  description = 'Website tagline for SEO and branding'
WHERE key = 'site_tagline';

-- Add case study samples that reference the testimonials (handle duplicates)
INSERT INTO public.case_studies (title, slug, client_name, industry, challenge, solution, results, metrics, is_featured, sort_order, testimonial_id) VALUES
('TechStartup Inc. - 5000% Traffic Growth', 'techstartup-traffic-growth', 'TechStartup Inc.', 'SaaS', 'Low organic visibility and limited content resources for a growing SaaS platform.', 'Implemented programmatic SEO strategy with automated landing page generation for feature combinations and use cases.', 'Achieved 5000% increase in organic traffic within 6 months, from 10K to 500K monthly visitors.', '{"organic_traffic": "500K monthly", "growth_percentage": "5000%", "time_to_results": "6 months", "pages_created": "2500+"}', true, 1, (SELECT id FROM public.testimonials WHERE client_name = 'David Park' LIMIT 1)),
('E-commerce Plus - 300% Revenue Increase', 'ecommerce-plus-revenue-increase', 'E-commerce Plus', 'E-commerce', 'Thousands of products with poor search visibility and low conversion rates.', 'Created automated product and category pages with optimized content and local SEO elements.', '300% increase in organic revenue through improved rankings and conversion optimization.', '{"revenue_increase": "300%", "organic_revenue": "$2.5M annually", "conversion_improvement": "40%", "product_pages": "15000+"}', true, 2, (SELECT id FROM public.testimonials WHERE client_name = 'Lisa Thompson' LIMIT 1))
ON CONFLICT (slug) DO UPDATE SET
  client_name = EXCLUDED.client_name,
  industry = EXCLUDED.industry,
  challenge = EXCLUDED.challenge,
  solution = EXCLUDED.solution,
  results = EXCLUDED.results,
  metrics = EXCLUDED.metrics,
  is_featured = EXCLUDED.is_featured,
  sort_order = EXCLUDED.sort_order;

-- Generate slugs for any missing ones
UPDATE public.team_members SET slug = LOWER(REGEXP_REPLACE(name, '[^a-zA-Z0-9]+', '-', 'g')) WHERE slug IS NULL;
UPDATE public.services SET slug = LOWER(REGEXP_REPLACE(title, '[^a-zA-Z0-9]+', '-', 'g')) WHERE slug IS NULL;

-- Create main pages in the pages table (handle duplicates)
INSERT INTO public.pages (title, slug, meta_title, meta_description, is_published) VALUES
('Services', 'services', 'Our SEO Services | Programmatic Content & Technical SEO', 'Comprehensive programmatic SEO services including content automation, technical optimization, and performance tracking.', true),
('About Us', 'about', 'About Our SEO Agency | Expert Team & Proven Results', 'Learn about our experienced SEO team and proven track record of scaling organic traffic for businesses worldwide.', true),
('Contact', 'contact', 'Contact Us | Get Your Free SEO Audit Today', 'Ready to scale your SEO? Contact our programmatic SEO experts for a free audit and consultation.', true),
('Case Studies', 'case-studies', 'SEO Case Studies | Real Results & Success Stories', 'Explore our client success stories and see how programmatic SEO has transformed their organic traffic and revenue.', true),
('Blog', 'blog', 'SEO Blog | Latest Programmatic SEO Tips & Strategies', 'Stay updated with the latest programmatic SEO strategies, tips, and industry insights from our expert team.', true)
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  meta_title = EXCLUDED.meta_title,
  meta_description = EXCLUDED.meta_description,
  is_published = EXCLUDED.is_published;
