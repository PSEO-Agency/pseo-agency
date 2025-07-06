
-- Update Programmatic SEO with detailed process steps
UPDATE public.services 
SET process_steps = '[
  "Keyword Research & Data Analysis: Comprehensive analysis of search volumes, competition, and user intent across thousands of target keywords",
  "Template & Content Structure Design: Creation of scalable page templates and content frameworks optimized for search engines",
  "Automated Page Generation: Implementation of systems to generate hundreds or thousands of SEO-optimized pages programmatically",
  "Technical SEO Implementation: Ensuring proper site architecture, internal linking, and technical optimization across all generated pages",
  "Performance Monitoring & Optimization: Continuous tracking of rankings, traffic, and conversions with automated optimization adjustments"
]'::jsonb,
description = 'Scale your SEO efforts with programmatic page generation that creates thousands of optimized landing pages targeting long-tail keywords and driving massive organic traffic growth.'
WHERE slug = 'programmatic-seo';

-- Update AI Content Automation with specific process steps
UPDATE public.services 
SET process_steps = '[
  "Content Strategy Development: AI-powered analysis of your industry, competitors, and target audience to create comprehensive content strategies",
  "Automated Content Generation: Deploy AI systems to create high-quality blog posts, product descriptions, and landing page content at scale",
  "SEO Optimization Integration: Automatic keyword integration, meta tag generation, and content structure optimization for search engines",
  "Quality Control & Review: Multi-layer AI and human review process to ensure content quality, accuracy, and brand consistency",
  "Publishing & Distribution: Automated content scheduling, publishing, and distribution across multiple channels and platforms"
]'::jsonb,
description = 'Transform your content marketing with AI-powered automation that generates high-quality, SEO-optimized content at scale while maintaining your brand voice and quality standards.'
WHERE slug = 'ai-content-automation';

-- Update Technical SEO with comprehensive process steps
UPDATE public.services 
SET process_steps = '[
  "Complete Technical Audit: Deep analysis of site speed, crawlability, indexation, mobile-friendliness, and technical SEO factors",
  "Core Web Vitals Optimization: Improve loading speed, interactivity, and visual stability to meet Google performance standards",
  "Site Architecture Enhancement: Optimize URL structure, internal linking, and navigation for better search engine crawling",
  "Schema Markup Implementation: Add structured data to enhance search result appearance and improve click-through rates",
  "Monitoring & Maintenance: Ongoing technical SEO monitoring with automated alerts and regular optimization updates"
]'::jsonb,
description = 'Optimize your website technical foundation with comprehensive audits, Core Web Vitals improvements, and ongoing technical SEO maintenance for maximum search engine performance.'
WHERE slug = 'technical-seo';

-- Update Analytics & Reporting with detailed process steps
UPDATE public.services 
SET process_steps = '[
  "Analytics Setup & Configuration: Comprehensive setup of Google Analytics, Search Console, and advanced tracking systems",
  "Custom Dashboard Creation: Build personalized dashboards showing key SEO metrics, traffic sources, and conversion data",
  "Automated Report Generation: Set up automated weekly and monthly reports with insights and recommendations",
  "Performance Analysis & Insights: Deep dive analysis of traffic patterns, keyword performance, and user behavior data",
  "Strategic Recommendations: Data-driven recommendations for SEO improvements and growth opportunities"
]'::jsonb,
description = 'Get complete visibility into your SEO performance with advanced analytics setup, custom reporting dashboards, and actionable insights to drive continuous improvement.'
WHERE slug = 'analytics-reporting';

-- Update SEO Automation with enhanced features and process steps
UPDATE public.services 
SET features = '[
  "Automated rank tracking for thousands of keywords",
  "Real-time technical SEO monitoring and alerts",
  "Competitor analysis and gap identification",
  "Content optimization recommendations",
  "Link building opportunity detection",
  "Performance reporting automation"
]'::jsonb,
process_steps = '[
  "SEO System Assessment: Comprehensive analysis of current SEO workflows and identification of automation opportunities",
  "Tool Integration & Setup: Implementation of advanced SEO tools and automation platforms tailored to your needs",
  "Workflow Automation Design: Creation of automated processes for rank tracking, reporting, and optimization tasks",
  "Monitoring System Implementation: Setup of real-time monitoring for technical issues, ranking changes, and opportunities",
  "Optimization & Scaling: Continuous refinement of automated processes and scaling of successful SEO workflows"
]'::jsonb
WHERE slug = 'seo-automation';

-- Update AI Website with enhanced features and process steps
UPDATE public.services 
SET features = '[
  "AI-powered website architecture planning",
  "Automated SEO-optimized content generation",
  "Perfect technical SEO implementation",
  "Mobile-first responsive design",
  "Core Web Vitals optimization",
  "Schema markup integration",
  "Advanced internal linking structure"
]'::jsonb,
process_steps = '[
  "Requirements Analysis: Detailed analysis of business goals, target audience, and SEO objectives",
  "AI Website Architecture: Intelligent site structure planning optimized for user experience and search engines",
  "Content Generation & Optimization: AI-powered creation of SEO-optimized content, meta tags, and structured data",
  "Technical Implementation: Development with perfect technical SEO, fast loading speeds, and mobile optimization",
  "Testing & Launch: Comprehensive testing, SEO validation, and seamless website launch with monitoring setup"
]'::jsonb
WHERE slug = 'ai-website-seo-proof';

-- Update Webscraping with enhanced features and process steps
UPDATE public.services 
SET features = '[
  "Large-scale competitor data extraction",
  "Market research automation",
  "Price and product monitoring",
  "Content gap analysis",
  "Lead generation and contact discovery",
  "Data cleaning and processing",
  "API integrations and data delivery"
]'::jsonb,
process_steps = '[
  "Data Requirements Analysis: Identification of target websites, data points, and extraction requirements",
  "Scraping Infrastructure Setup: Development of robust, scalable scraping systems with proper rate limiting",
  "Data Extraction Implementation: Automated extraction of competitor data, pricing, content, and market insights",
  "Data Processing & Cleaning: Advanced data cleaning, deduplication, and formatting for immediate use",
  "Delivery & Integration: Processed data delivery via APIs, databases, or custom reporting dashboards"
]'::jsonb
WHERE slug = 'webscraping';

-- Update PR & Linkbuilding with enhanced features and process steps
UPDATE public.services 
SET features = '[
  "High-authority backlink acquisition",
  "Digital PR campaign management",
  "Brand mention monitoring and optimization",
  "Influencer outreach and partnerships",
  "Content marketing for link building",
  "Competitor backlink analysis",
  "Link quality assessment and management"
]'::jsonb,
process_steps = '[
  "Link Opportunity Research: Comprehensive analysis of high-quality link opportunities in your industry",
  "Outreach Strategy Development: Creation of personalized outreach campaigns targeting relevant websites and influencers",
  "Content Creation & PR: Development of link-worthy content and digital PR campaigns to attract natural backlinks",
  "Relationship Building: Establishment of long-term relationships with website owners, journalists, and influencers",
  "Link Acquisition & Monitoring: Systematic link building execution with ongoing monitoring and quality assessment"
]'::jsonb
WHERE slug = 'pr-linkbuilding';
