-- Create countries table for international partner pages
CREATE TABLE public.countries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  region TEXT,
  flag_emoji TEXT,
  partner_name TEXT,
  partner_logo_url TEXT,
  partner_description TEXT,
  partner_contact_url TEXT,
  hero_headline TEXT,
  hero_description TEXT,
  meta_title TEXT,
  meta_description TEXT,
  industries JSONB DEFAULT '[]'::jsonb,
  keywords JSONB DEFAULT '[]'::jsonb,
  services JSONB DEFAULT '[]'::jsonb,
  use_cases JSONB DEFAULT '[]'::jsonb,
  process_steps JSONB DEFAULT '[]'::jsonb,
  faqs JSONB DEFAULT '[]'::jsonb,
  is_published BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.countries ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Everyone can read published countries"
ON public.countries
FOR SELECT
USING (is_published = true);

CREATE POLICY "Admins can manage countries"
ON public.countries
FOR ALL
USING (is_admin(auth.uid()));

-- Create index for slug lookups
CREATE INDEX idx_countries_slug ON public.countries(slug);
CREATE INDEX idx_countries_published ON public.countries(is_published);

-- Insert Dubai as initial seed data
INSERT INTO public.countries (
  name,
  slug,
  region,
  flag_emoji,
  partner_name,
  partner_description,
  hero_headline,
  hero_description,
  meta_title,
  meta_description,
  industries,
  keywords,
  services,
  use_cases,
  process_steps,
  faqs,
  is_published,
  is_featured,
  sort_order
) VALUES (
  'Dubai (UAE)',
  'dubai',
  'Middle East',
  '🇦🇪',
  'GrowthLab Dubai',
  'GrowthLab Dubai is our certified execution partner in the UAE, supporting companies with local market knowledge, implementation support, and growth strategy.',
  'Programmatic SEO in Dubai — Scale Organic Growth in the UAE',
  'We help Dubai-based and international companies dominate high-intent search results using scalable SEO landing pages, automated content systems, and local expertise.',
  'Programmatic SEO Dubai | Local Partner Growth SEO',
  'Scale SEO traffic in Dubai with Programmatic SEO and our trusted UAE partner. Thousands of landing pages, automated growth, real results.',
  '["Fintech", "Real Estate", "Ecommerce", "Tourism", "B2B SaaS"]'::jsonb,
  '["Best payroll software UAE", "Top coworking spaces in Dubai", "Dubai crypto exchange comparison", "Best real estate agents Dubai", "Top fintech companies UAE"]'::jsonb,
  '[
    {"title": "Programmatic SEO Strategy & Keyword Mapping", "icon": "Target", "description": "Comprehensive keyword research and strategy tailored for the UAE market"},
    {"title": "Landing Page & Directory Generation", "icon": "Database", "description": "Scalable template-driven page creation for thousands of keywords"},
    {"title": "AI Content Automation for UAE Markets", "icon": "Zap", "description": "Automated content generation optimized for local search intent"},
    {"title": "Technical SEO & Indexation Support", "icon": "Settings", "description": "Ensure all pages are properly indexed and technically optimized"},
    {"title": "Data Sourcing + Enrichment Pipelines", "icon": "BarChart3", "description": "Build comprehensive datasets for your programmatic pages"},
    {"title": "Multilingual Expansion (English + Arabic)", "icon": "Globe", "description": "Reach both English and Arabic-speaking audiences"},
    {"title": "Ongoing SEO Growth Optimization", "icon": "TrendingUp", "description": "Continuous improvement and scaling of your SEO performance"}
  ]'::jsonb,
  '[
    {"title": "Real estate directories", "icon": "Building", "description": "Property listings and agent directories"},
    {"title": "SaaS comparison pages", "icon": "Target", "description": "Software comparison and review sites"},
    {"title": "Tourism landing pages", "icon": "Plane", "description": "Travel guides and destination pages"},
    {"title": "Financial service SEO hubs", "icon": "DollarSign", "description": "Banking, fintech, and investment pages"},
    {"title": "Ecommerce scaling pages", "icon": "ShoppingCart", "description": "Product category and brand pages"}
  ]'::jsonb,
  '[
    {"step": 1, "title": "Market + Intent Research", "description": "Deep dive into UAE market opportunities and search intent patterns"},
    {"step": 2, "title": "Dataset Creation", "description": "Build comprehensive data sources for your programmatic pages"},
    {"step": 3, "title": "Template-Driven Page Builds", "description": "Design and develop scalable page templates"},
    {"step": 4, "title": "Automated Publishing", "description": "Deploy thousands of optimized landing pages"},
    {"step": 5, "title": "Internal Linking + Indexation", "description": "Ensure proper site structure and search engine discovery"},
    {"step": 6, "title": "Growth Loop Optimization", "description": "Continuous monitoring and improvement"}
  ]'::jsonb,
  '[
    {"question": "How long does Programmatic SEO take in Dubai?", "answer": "Typically, you can expect to see initial results within 3-6 months, with significant traffic growth occurring between 6-12 months. The UAE market responds well to programmatic SEO due to high commercial intent searches."},
    {"question": "Can you build Arabic landing pages?", "answer": "Yes! We support multilingual expansion including both English and Arabic content. Our Dubai partner has native Arabic speakers to ensure cultural accuracy and proper localization."},
    {"question": "Do I need a dataset to get started?", "answer": "Not necessarily. We can help you source, create, or enrich datasets as part of our service. Many clients start with basic data that we expand into comprehensive programmatic assets."},
    {"question": "What industries work best for Programmatic SEO in Dubai?", "answer": "Real estate, fintech, ecommerce, tourism, and B2B SaaS see excellent results in the UAE market. Any industry with high search volume and multiple variations (locations, products, services) is a good fit."},
    {"question": "How does the partner collaboration work?", "answer": "GrowthLab Dubai handles local execution, client communication, and market-specific optimization. Programmatic SEO B.V. provides the technology, strategy, and programmatic expertise. You get the best of both worlds."}
  ]'::jsonb,
  true,
  true,
  1
),
(
  'Germany',
  'germany',
  'Europe',
  '🇩🇪',
  'SEO Growth Partners DE',
  'SEO Growth Partners DE is our certified execution partner in Germany, bringing deep expertise in the DACH region with a focus on technical excellence and data-driven SEO.',
  'Programmatic SEO in Germany — Scale Organic Growth in DACH',
  'Dominate the German search market with scalable programmatic SEO. We help companies capture thousands of high-intent keywords across Germany, Austria, and Switzerland.',
  'Programmatic SEO Germany | DACH Region SEO Partner',
  'Scale SEO traffic in Germany with Programmatic SEO and our trusted DACH partner. Automated landing pages, data-driven growth, measurable results.',
  '["Automotive", "Manufacturing", "B2B SaaS", "Finance", "Healthcare"]'::jsonb,
  '["Beste CRM Software Deutschland", "Top Buchhaltungssoftware", "Vergleich Projektmanagement Tools", "Beste HR Software DACH"]'::jsonb,
  '[
    {"title": "Programmatic SEO Strategy", "icon": "Target", "description": "Tailored strategy for the German-speaking market"},
    {"title": "Landing Page Generation", "icon": "Database", "description": "Scalable page creation for DACH keywords"},
    {"title": "AI Content Automation", "icon": "Zap", "description": "German-language content at scale"},
    {"title": "Technical SEO Support", "icon": "Settings", "description": "Enterprise-grade technical optimization"},
    {"title": "Data Enrichment", "icon": "BarChart3", "description": "DACH-specific data sourcing and enrichment"},
    {"title": "DACH Expansion", "icon": "Globe", "description": "Expand across Germany, Austria, and Switzerland"}
  ]'::jsonb,
  '[
    {"title": "B2B software directories", "icon": "Building", "description": "Software comparison sites for German businesses"},
    {"title": "Industrial product catalogs", "icon": "Target", "description": "Manufacturing and industrial product pages"},
    {"title": "Service provider directories", "icon": "Users", "description": "Local service and agency directories"},
    {"title": "Job board pages", "icon": "Briefcase", "description": "Career and recruitment landing pages"},
    {"title": "Comparison portals", "icon": "Scale", "description": "Product and service comparison sites"}
  ]'::jsonb,
  '[
    {"step": 1, "title": "DACH Market Analysis", "description": "Research German, Austrian, and Swiss market opportunities"},
    {"step": 2, "title": "Dataset Development", "description": "Build comprehensive German-language datasets"},
    {"step": 3, "title": "Template Design", "description": "Create conversion-optimized page templates"},
    {"step": 4, "title": "Automated Deployment", "description": "Launch thousands of optimized pages"},
    {"step": 5, "title": "Technical Optimization", "description": "Ensure proper indexation and performance"},
    {"step": 6, "title": "Continuous Growth", "description": "Ongoing optimization and scaling"}
  ]'::jsonb,
  '[
    {"question": "Do you support German language content?", "answer": "Yes, we create native German content with proper grammar, terminology, and cultural context. Our German partner ensures all content meets local standards."},
    {"question": "Can you target Austria and Switzerland too?", "answer": "Absolutely! Our DACH strategy covers Germany, Austria, and Switzerland, with localization for each market including Swiss German variations."},
    {"question": "What is the typical timeline?", "answer": "Most projects see initial results in 3-4 months, with significant growth between 6-12 months. German markets often have higher competition but also higher conversion rates."},
    {"question": "Do you comply with German data regulations?", "answer": "Yes, all our processes are GDPR compliant. We work with our German partner to ensure all data handling meets strict European privacy requirements."}
  ]'::jsonb,
  true,
  true,
  2
),
(
  'United Kingdom',
  'united-kingdom',
  'Europe',
  '🇬🇧',
  'Organic Growth UK',
  'Organic Growth UK is our certified execution partner in the United Kingdom, specializing in enterprise SEO and scalable content strategies for the UK market.',
  'Programmatic SEO in the UK — Scale Organic Growth Across Britain',
  'Capture high-intent searches across the United Kingdom with programmatic SEO. We help companies scale organic traffic with thousands of targeted landing pages.',
  'Programmatic SEO UK | British Partner for Scalable SEO',
  'Scale SEO traffic in the UK with Programmatic SEO and our trusted British partner. Thousands of landing pages, automated growth, real results.',
  '["Fintech", "Legal", "Recruitment", "Property", "Professional Services"]'::jsonb,
  '["Best accountants London", "Top law firms Manchester", "Compare business insurance UK", "Best recruitment agencies Birmingham"]'::jsonb,
  '[
    {"title": "UK Market Strategy", "icon": "Target", "description": "Tailored programmatic strategy for British audiences"},
    {"title": "Landing Page Generation", "icon": "Database", "description": "Scalable pages for UK keywords and locations"},
    {"title": "Content Automation", "icon": "Zap", "description": "British English content at scale"},
    {"title": "Technical SEO", "icon": "Settings", "description": "Enterprise-grade technical optimization"},
    {"title": "Local SEO Integration", "icon": "MapPin", "description": "City and region-specific optimization"},
    {"title": "UK Expansion", "icon": "Globe", "description": "Scale across England, Scotland, Wales, and Northern Ireland"}
  ]'::jsonb,
  '[
    {"title": "Professional service directories", "icon": "Building", "description": "Legal, accounting, and consulting directories"},
    {"title": "Property listing pages", "icon": "Home", "description": "Real estate and rental property pages"},
    {"title": "Recruitment landing pages", "icon": "Briefcase", "description": "Job boards and agency directories"},
    {"title": "Financial comparison sites", "icon": "DollarSign", "description": "Insurance, banking, and loan comparisons"},
    {"title": "Local business directories", "icon": "MapPin", "description": "City and region-specific business listings"}
  ]'::jsonb,
  '[
    {"step": 1, "title": "UK Market Research", "description": "Analyze British market opportunities and competition"},
    {"step": 2, "title": "Data Collection", "description": "Build UK-specific datasets and location data"},
    {"step": 3, "title": "Template Development", "description": "Create conversion-focused page templates"},
    {"step": 4, "title": "Mass Deployment", "description": "Launch programmatic pages at scale"},
    {"step": 5, "title": "Indexation & Linking", "description": "Optimize site structure for search engines"},
    {"step": 6, "title": "Growth Optimization", "description": "Continuous improvement and scaling"}
  ]'::jsonb,
  '[
    {"question": "Do you cover all regions of the UK?", "answer": "Yes, we create programmatic pages targeting England, Scotland, Wales, and Northern Ireland, with city and region-specific optimization."},
    {"question": "How do you handle local SEO in the UK?", "answer": "We integrate location-specific keywords, create city-level landing pages, and optimize for local search intent across all UK regions."},
    {"question": "What industries work best in the UK market?", "answer": "Professional services, fintech, property, recruitment, and legal sectors see excellent results. The UK has high search volumes and strong commercial intent."},
    {"question": "Can you target specific cities?", "answer": "Absolutely! We can create thousands of city-specific pages targeting London, Manchester, Birmingham, Edinburgh, and beyond."}
  ]'::jsonb,
  true,
  false,
  3
),
(
  'Singapore',
  'singapore',
  'Asia Pacific',
  '🇸🇬',
  'Growth Engine SG',
  'Growth Engine SG is our certified execution partner in Singapore, serving as a hub for Southeast Asian expansion with deep expertise in APAC markets.',
  'Programmatic SEO in Singapore — Scale Organic Growth in APAC',
  'Dominate search results across Singapore and Southeast Asia with programmatic SEO. We help companies capture thousands of high-intent keywords in the APAC region.',
  'Programmatic SEO Singapore | APAC Partner for Scalable SEO',
  'Scale SEO traffic in Singapore with Programmatic SEO and our trusted APAC partner. Automated landing pages, regional expansion, measurable results.',
  '["Fintech", "Ecommerce", "B2B Tech", "Education", "Healthcare"]'::jsonb,
  '["Best fintech apps Singapore", "Top coworking spaces Singapore", "Compare business software Singapore", "Best digital marketing agencies SG"]'::jsonb,
  '[
    {"title": "APAC Market Strategy", "icon": "Target", "description": "Strategy tailored for Singapore and Southeast Asia"},
    {"title": "Landing Page Generation", "icon": "Database", "description": "Scalable pages for APAC keywords"},
    {"title": "Content Automation", "icon": "Zap", "description": "Regional content at scale"},
    {"title": "Technical SEO", "icon": "Settings", "description": "Enterprise-grade optimization"},
    {"title": "Regional Expansion", "icon": "Globe", "description": "Expand across Southeast Asian markets"},
    {"title": "Multilingual Support", "icon": "Languages", "description": "English, Mandarin, and regional languages"}
  ]'::jsonb,
  '[
    {"title": "Fintech directories", "icon": "DollarSign", "description": "Financial technology and banking pages"},
    {"title": "B2B software comparisons", "icon": "Target", "description": "Enterprise software comparison sites"},
    {"title": "Ecommerce landing pages", "icon": "ShoppingCart", "description": "Product and marketplace pages"},
    {"title": "Education portals", "icon": "GraduationCap", "description": "Course and institution directories"},
    {"title": "Startup directories", "icon": "Rocket", "description": "Startup and investor landing pages"}
  ]'::jsonb,
  '[
    {"step": 1, "title": "APAC Market Analysis", "description": "Research Singapore and Southeast Asian opportunities"},
    {"step": 2, "title": "Dataset Development", "description": "Build comprehensive regional datasets"},
    {"step": 3, "title": "Template Design", "description": "Create conversion-optimized templates"},
    {"step": 4, "title": "Automated Deployment", "description": "Launch thousands of targeted pages"},
    {"step": 5, "title": "Regional Optimization", "description": "Optimize for APAC search patterns"},
    {"step": 6, "title": "Scale & Grow", "description": "Expand across the region"}
  ]'::jsonb,
  '[
    {"question": "Can you help expand beyond Singapore?", "answer": "Yes! Singapore serves as our APAC hub, and we can help you expand into Malaysia, Indonesia, Thailand, Philippines, and other Southeast Asian markets."},
    {"question": "Do you support Mandarin content?", "answer": "Yes, we support English and Mandarin content creation, as well as other regional languages for broader APAC expansion."},
    {"question": "What industries perform well in Singapore?", "answer": "Fintech, B2B tech, ecommerce, and education see excellent results. Singapore has high digital adoption and strong commercial search intent."},
    {"question": "How do you handle regional differences?", "answer": "We customize content and strategy for each market, considering local search behavior, language preferences, and cultural nuances."}
  ]'::jsonb,
  true,
  false,
  4
),
(
  'United States',
  'united-states',
  'North America',
  '🇺🇸',
  'Scale SEO Partners',
  'Scale SEO Partners is our certified execution partner in the United States, bringing enterprise-level programmatic SEO expertise to the world''s largest search market.',
  'Programmatic SEO in the USA — Scale Organic Growth Nationwide',
  'Dominate American search results with programmatic SEO. We help companies capture thousands of high-intent keywords across all 50 states and major metro areas.',
  'Programmatic SEO USA | American Partner for Scalable SEO',
  'Scale SEO traffic in the USA with Programmatic SEO and our trusted American partner. Thousands of landing pages, automated growth, real results.',
  '["SaaS", "Healthcare", "Legal", "Real Estate", "Financial Services"]'::jsonb,
  '["Best CRM software", "Top law firms New York", "Compare health insurance", "Best real estate agents Los Angeles", "Top accountants Chicago"]'::jsonb,
  '[
    {"title": "US Market Strategy", "icon": "Target", "description": "Comprehensive strategy for the American market"},
    {"title": "State & City Pages", "icon": "Database", "description": "Location-specific landing pages at scale"},
    {"title": "Content Automation", "icon": "Zap", "description": "American English content at scale"},
    {"title": "Enterprise Technical SEO", "icon": "Settings", "description": "Large-scale technical optimization"},
    {"title": "Data Partnerships", "icon": "BarChart3", "description": "Access to premium US datasets"},
    {"title": "Nationwide Expansion", "icon": "Globe", "description": "Scale across all 50 states"}
  ]'::jsonb,
  '[
    {"title": "SaaS comparison sites", "icon": "Target", "description": "Software review and comparison pages"},
    {"title": "Local service directories", "icon": "Building", "description": "City-specific business listings"},
    {"title": "Healthcare provider pages", "icon": "Heart", "description": "Medical practice and clinic directories"},
    {"title": "Legal directories", "icon": "Scale", "description": "Law firm and attorney listings"},
    {"title": "Real estate landing pages", "icon": "Home", "description": "Property and agent directories"}
  ]'::jsonb,
  '[
    {"step": 1, "title": "US Market Research", "description": "Analyze nationwide and local market opportunities"},
    {"step": 2, "title": "Dataset Development", "description": "Build comprehensive American datasets"},
    {"step": 3, "title": "Template Design", "description": "Create high-converting page templates"},
    {"step": 4, "title": "Mass Deployment", "description": "Launch thousands of location-specific pages"},
    {"step": 5, "title": "Technical Optimization", "description": "Ensure proper indexation at scale"},
    {"step": 6, "title": "Continuous Growth", "description": "Ongoing optimization and expansion"}
  ]'::jsonb,
  '[
    {"question": "Can you target specific states or cities?", "answer": "Yes! We create programmatic pages for all 50 states and major metro areas, with city-level targeting for maximum local relevance."},
    {"question": "How do you handle the competitive US market?", "answer": "We focus on long-tail, high-intent keywords and use data-driven strategies to find opportunities in even competitive niches."},
    {"question": "What scale can you achieve in the US?", "answer": "We regularly deploy tens of thousands of pages for US clients, covering every state and major city with relevant content."},
    {"question": "Do you integrate with US data providers?", "answer": "Yes, we have partnerships with major US data providers to ensure accurate, comprehensive datasets for your programmatic pages."}
  ]'::jsonb,
  true,
  false,
  5
),
(
  'Netherlands',
  'netherlands',
  'Europe',
  '🇳🇱',
  'Programmatic SEO B.V. (HQ)',
  'As the headquarters of Programmatic SEO B.V., we provide direct service to Dutch clients with our full team and technology stack.',
  'Programmatic SEO in the Netherlands — Our Home Market',
  'Scale your organic traffic in the Netherlands with direct access to our headquarters team. Full-service programmatic SEO for Dutch and Benelux markets.',
  'Programmatic SEO Netherlands | Dutch SEO Specialists',
  'Scale SEO traffic in the Netherlands with Programmatic SEO B.V. Direct access to our Dutch headquarters team. Automated growth, real results.',
  '["B2B SaaS", "Ecommerce", "Recruitment", "Finance", "Professional Services"]'::jsonb,
  '["Beste boekhoudsoftware", "Top recruitmentbureaus Amsterdam", "Vergelijk zakelijke verzekeringen", "Beste CRM systemen Nederland"]'::jsonb,
  '[
    {"title": "Dutch Market Expertise", "icon": "Target", "description": "Deep knowledge of the Dutch and Benelux markets"},
    {"title": "Landing Page Generation", "icon": "Database", "description": "Scalable Dutch-language pages"},
    {"title": "AI Content Automation", "icon": "Zap", "description": "Native Dutch content at scale"},
    {"title": "Technical SEO", "icon": "Settings", "description": "Full-stack technical optimization"},
    {"title": "Benelux Expansion", "icon": "Globe", "description": "Expand into Belgium and Luxembourg"},
    {"title": "Direct Team Access", "icon": "Users", "description": "Work directly with our HQ team"}
  ]'::jsonb,
  '[
    {"title": "B2B software directories", "icon": "Building", "description": "Dutch software comparison sites"},
    {"title": "Recruitment platforms", "icon": "Briefcase", "description": "Job board and agency pages"},
    {"title": "Ecommerce landing pages", "icon": "ShoppingCart", "description": "Product and category pages"},
    {"title": "Financial comparison sites", "icon": "DollarSign", "description": "Insurance and banking comparisons"},
    {"title": "Service directories", "icon": "Users", "description": "Professional service listings"}
  ]'::jsonb,
  '[
    {"step": 1, "title": "Dutch Market Analysis", "description": "Research opportunities in the Netherlands and Benelux"},
    {"step": 2, "title": "Dataset Development", "description": "Build comprehensive Dutch datasets"},
    {"step": 3, "title": "Template Design", "description": "Create Dutch-optimized page templates"},
    {"step": 4, "title": "Automated Deployment", "description": "Launch thousands of pages"},
    {"step": 5, "title": "Technical Excellence", "description": "Full-stack optimization"},
    {"step": 6, "title": "Growth & Scale", "description": "Continuous expansion"}
  ]'::jsonb,
  '[
    {"question": "Why choose your Dutch headquarters directly?", "answer": "Working with our HQ gives you direct access to our full team, technology stack, and fastest response times. We know the Dutch market inside out."},
    {"question": "Do you support Flemish Dutch for Belgium?", "answer": "Yes! We create content for both Dutch and Belgian markets, with appropriate localization for Flemish audiences."},
    {"question": "Can you help with Benelux expansion?", "answer": "Absolutely. From our Dutch base, we can help you expand into Belgium and Luxembourg with localized programmatic SEO."},
    {"question": "What makes the Dutch market unique?", "answer": "The Netherlands has very high internet adoption, strong English proficiency, and sophisticated B2B buyers. It is excellent for programmatic SEO."}
  ]'::jsonb,
  true,
  true,
  6
);