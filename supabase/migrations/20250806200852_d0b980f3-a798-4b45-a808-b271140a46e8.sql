-- Create AI Platform Ranking service
INSERT INTO services (
  title,
  slug,
  description,
  icon,
  features,
  process_steps,
  is_featured,
  sort_order,
  hero_image_url
) VALUES (
  'AI Platform Ranking',
  'ai-platform-ranking',
  'Optimize your brand''s visibility and ranking across AI search platforms. Track mentions, analyze sentiment, and outrank competitors in AI-generated responses.',
  'Search',
  '[
    {
      "title": "Multi-Platform AI Monitoring",
      "description": "Track your brand mentions across ChatGPT, Claude, Gemini, Perplexity, and other major AI models in real-time.",
      "icon": "Monitor"
    },
    {
      "title": "Competitive Intelligence Analysis",
      "description": "Compare your AI visibility against competitors and identify opportunities to capture market share in AI responses.",
      "icon": "TrendingUp"
    },
    {
      "title": "Sentiment & Context Analysis",
      "description": "Understand how AI models portray your brand with detailed sentiment analysis and contextual insights.",
      "icon": "BarChart3"
    },
    {
      "title": "AI Traffic Attribution",
      "description": "Track and measure traffic coming from AI platforms with detailed analytics and conversion tracking.",
      "icon": "Users"
    },
    {
      "title": "Knowledge Graph Optimization",
      "description": "Optimize your digital presence to improve how AI models understand and represent your brand.",
      "icon": "Network"
    },
    {
      "title": "Actionable Ranking Recommendations",
      "description": "Receive data-driven strategies and specific actions to improve your AI platform rankings and visibility.",
      "icon": "Target"
    },
    {
      "title": "Custom Prompt Testing",
      "description": "Test and optimize your brand''s responses to specific industry queries and user prompts.",
      "icon": "TestTube"
    },
    {
      "title": "Automated Reporting Dashboard",
      "description": "Access real-time dashboards with performance metrics, trends, and competitive analysis insights.",
      "icon": "PieChart"
    }
  ]'::jsonb,
  '[
    {
      "title": "AI Audit & Competitive Analysis",
      "description": "Comprehensive analysis of current AI visibility and competitor positioning across platforms.",
      "icon": "Search"
    },
    {
      "title": "Knowledge Base Optimization",
      "description": "Strategic content and data optimization to improve AI model understanding and representation.",
      "icon": "Database"
    },
    {
      "title": "Multi-Platform Monitoring Setup",
      "description": "Implementation of tracking systems across all major AI models and search platforms.",
      "icon": "Monitor"
    },
    {
      "title": "Performance Tracking & Analytics",
      "description": "Real-time monitoring with detailed reporting on mentions, sentiment, and traffic attribution.",
      "icon": "BarChart3"
    },
    {
      "title": "Continuous Optimization & Reporting",
      "description": "Ongoing refinement with actionable insights and strategic recommendations for improved rankings.",
      "icon": "TrendingUp"
    }
  ]'::jsonb,
  false,
  102,
  null
);