
-- Create a table for jobs
CREATE TABLE public.jobs (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  department TEXT,
  location TEXT,
  employment_type TEXT DEFAULT 'full-time',
  salary_range TEXT,
  requirements JSONB DEFAULT '[]'::jsonb,
  responsibilities JSONB DEFAULT '[]'::jsonb,
  benefits JSONB DEFAULT '[]'::jsonb,
  meta_title TEXT,
  meta_description TEXT,
  is_published BOOLEAN DEFAULT true,
  is_featured BOOLEAN DEFAULT false,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Add Row Level Security (RLS)
ALTER TABLE public.jobs ENABLE ROW LEVEL SECURITY;

-- Create policies for jobs
CREATE POLICY "Admins can manage jobs" 
  ON public.jobs 
  FOR ALL 
  USING (is_admin(auth.uid()));

CREATE POLICY "Everyone can read published jobs" 
  ON public.jobs 
  FOR SELECT 
  USING (is_published = true);

-- Insert the concept job pages
INSERT INTO public.jobs (title, slug, description, department, location, employment_type, requirements, responsibilities, benefits, meta_title, meta_description, is_published, is_featured) VALUES 
(
  'Account Manager - Programmatic SEO Specialist',
  'account-manager-programmatic-seo',
  'Join our team as an Account Manager specializing in Programmatic SEO strategies. Drive client success through scalable content automation and data-driven SEO solutions that generate thousands of landing pages and boost organic traffic exponentially.',
  'Client Success',
  'Remote',
  'full-time',
  '["3+ years experience in SEO account management", "Deep understanding of programmatic SEO techniques", "Experience with content automation tools", "Strong analytical skills with GA4, Search Console", "Client relationship management expertise", "Knowledge of technical SEO and site architecture"]'::jsonb,
  '["Manage programmatic SEO campaigns for enterprise clients", "Develop scalable content strategies using automation", "Analyze large datasets to identify SEO opportunities", "Create custom landing page templates at scale", "Monitor and optimize automated content performance", "Present ROI reports and growth metrics to stakeholders"]'::jsonb,
  '["Competitive salary + performance bonuses", "Remote-first work environment", "Professional development budget", "Health, dental, and vision insurance", "Flexible PTO policy", "Latest SEO tools and software licenses"]'::jsonb,
  'Account Manager - Programmatic SEO Jobs | pSEO Careers',
  'Lead programmatic SEO success for enterprise clients. Drive scalable content automation strategies and deliver exponential organic growth results.',
  true,
  true
),
(
  'Partner Manager - SEO Technology Partnerships',
  'partner-manager-seo-technology',
  'Expand our programmatic SEO ecosystem as a Partner Manager. Build strategic relationships with technology vendors, content management platforms, and automation tools to enhance our clients'' scalable SEO capabilities.',
  'Business Development',
  'Remote',
  'full-time',
  '["5+ years in partnership or business development", "Understanding of SEO technology landscape", "Experience with API integrations and automation tools", "Strong negotiation and relationship building skills", "Knowledge of content management systems", "Familiarity with programmatic advertising concepts"]'::jsonb,
  '["Identify and develop strategic technology partnerships", "Negotiate integration agreements with SEO tool providers", "Manage relationships with content automation platforms", "Collaborate on joint go-to-market strategies", "Evaluate new technologies for programmatic SEO", "Support client implementations of partner technologies"]'::jsonb,
  '["Base salary plus commission structure", "Equity participation program", "Travel allowance for partner meetings", "Professional networking budget", "Comprehensive benefits package", "Career advancement opportunities"]'::jsonb,
  'Partner Manager - SEO Technology Jobs | pSEO Partnerships',
  'Drive strategic technology partnerships in programmatic SEO. Build relationships with automation platforms and scale our client capabilities.',
  true,
  false
),
(
  'Product Owner - Programmatic SEO Platform',
  'product-owner-programmatic-seo-platform',
  'Shape the future of programmatic SEO as our Product Owner. Lead the development of automated content generation tools, scalable template systems, and data-driven optimization features that power thousands of landing pages.',
  'Product',
  'Remote',
  'full-time',
  '["4+ years product management experience", "Deep understanding of SEO and content automation", "Experience with agile development methodologies", "Strong analytical and data interpretation skills", "Knowledge of web technologies and APIs", "Background in scalable content systems"]'::jsonb,
  '["Define product roadmap for programmatic SEO tools", "Manage automated content generation features", "Collaborate with engineering on scalable architecture", "Analyze user behavior and optimization metrics", "Prioritize features based on SEO impact and ROI", "Work with clients to understand automation needs"]'::jsonb,
  '["Competitive product management salary", "Stock options in growing SEO tech company", "Remote work flexibility", "Annual product conference budget", "Health and wellness stipend", "Professional development opportunities"]'::jsonb,
  'Product Owner - Programmatic SEO Platform Jobs | pSEO Product',
  'Lead product development for programmatic SEO automation tools. Drive innovation in scalable content generation and optimization platforms.',
  true,
  false
),
(
  'Customer Success Manager - Enterprise SEO Automation',
  'customer-success-manager-enterprise-seo',
  'Ensure enterprise clients maximize their programmatic SEO investments. Guide implementation of large-scale content automation strategies and drive adoption of advanced SEO optimization techniques.',
  'Customer Success',
  'Remote',
  'full-time',
  '["3+ years in customer success or account management", "Strong understanding of enterprise SEO challenges", "Experience with content automation and scalability", "Excellent communication and presentation skills", "Knowledge of SEO analytics and reporting", "Problem-solving mindset with technical aptitude"]'::jsonb,
  '["Onboard enterprise clients to programmatic SEO solutions", "Develop custom automation strategies for large websites", "Monitor client KPIs and optimization performance", "Provide training on advanced SEO techniques", "Identify upsell opportunities for additional services", "Resolve technical issues and implementation challenges"]'::jsonb,
  '["Competitive base salary plus success bonuses", "Remote-first culture with flexible hours", "Professional certification reimbursement", "Client success conference attendance", "Comprehensive insurance coverage", "Generous vacation and sabbatical options"]'::jsonb,
  'Customer Success Manager - Enterprise SEO Jobs | pSEO Success',
  'Drive enterprise client success with programmatic SEO automation. Guide large-scale content strategies and maximize SEO ROI.',
  true,
  false
),
(
  'Automation Workflow Builder - SEO Content Systems',
  'automation-workflow-builder-seo-content',
  'Build sophisticated automation workflows that power programmatic SEO at scale. Design and implement systems that generate, optimize, and manage thousands of SEO-optimized landing pages automatically.',
  'Engineering',
  'Remote',
  'full-time',
  '["2+ years experience with workflow automation tools", "Understanding of SEO content requirements", "Experience with APIs and data integration", "Knowledge of content management systems", "Familiarity with SEO tools and analytics", "Strong problem-solving and optimization skills"]'::jsonb,
  '["Design automated content generation workflows", "Build scalable SEO optimization processes", "Integrate multiple data sources for content automation", "Create quality assurance systems for automated content", "Optimize workflow performance and efficiency", "Maintain and troubleshoot automation systems"]'::jsonb,
  '["Competitive engineering salary", "Remote work with flexible schedule", "Latest automation tools and software", "Professional development budget", "Health and dental benefits", "Annual bonus based on automation efficiency"]'::jsonb,
  'Automation Workflow Builder - SEO Content Jobs | pSEO Engineering',
  'Build advanced automation workflows for programmatic SEO content generation. Design scalable systems that optimize thousands of pages.',
  true,
  false
),
(
  'AI Strategist - Programmatic SEO Intelligence',
  'ai-strategist-programmatic-seo-intelligence',
  'Leverage artificial intelligence to revolutionize programmatic SEO strategies. Develop AI-powered content generation, optimization algorithms, and predictive analytics that drive unprecedented organic growth.',
  'Strategy',
  'Remote',
  'full-time',
  '["3+ years experience in AI/ML applications", "Strong understanding of SEO principles and content optimization", "Experience with natural language processing", "Knowledge of predictive analytics and data science", "Familiarity with AI content generation tools", "Strategic thinking and innovation mindset"]'::jsonb,
  '["Develop AI-powered SEO content strategies", "Implement machine learning for content optimization", "Create predictive models for keyword opportunities", "Design AI algorithms for automated content generation", "Analyze large datasets for SEO insights", "Research emerging AI technologies for SEO applications"]'::jsonb,
  '["Top-tier AI strategist compensation", "Equity in cutting-edge SEO AI company", "Research and development budget", "Conference speaking opportunities", "Flexible remote work arrangement", "Access to latest AI tools and platforms"]'::jsonb,
  'AI Strategist - Programmatic SEO Intelligence Jobs | pSEO AI',
  'Lead AI innovation in programmatic SEO. Develop intelligent content generation and optimization strategies using cutting-edge technology.',
  true,
  true
),
(
  'SEO Manager - Large Scale Content Operations',
  'seo-manager-large-scale-content-operations',
  'Manage enterprise-level programmatic SEO operations. Oversee large-scale content generation, optimization workflows, and performance analysis for websites with thousands of automated landing pages.',
  'SEO',
  'Remote',
  'full-time',
  '["5+ years advanced SEO management experience", "Proven track record with large-scale content operations", "Deep knowledge of programmatic SEO techniques", "Experience managing SEO teams and workflows", "Strong analytical skills with enterprise SEO tools", "Understanding of technical SEO and site architecture"]'::jsonb,
  '["Oversee programmatic SEO campaigns for multiple clients", "Manage large-scale content generation and optimization", "Lead team of SEO specialists and content creators", "Develop scalable SEO processes and workflows", "Analyze performance across thousands of landing pages", "Implement technical SEO improvements at scale"]'::jsonb,
  '["Senior management level compensation", "Leadership development opportunities", "Remote work with team collaboration", "Annual SEO conference and training budget", "Comprehensive benefits and retirement plans", "Performance-based bonuses and advancement"]'::jsonb,
  'SEO Manager - Large Scale Content Operations Jobs | pSEO Management',
  'Lead enterprise programmatic SEO operations. Manage large-scale content generation and optimization for thousands of landing pages.',
  true,
  true
);
