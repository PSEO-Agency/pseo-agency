-- Add AI Chat Agent service
INSERT INTO public.services (
  title,
  slug,
  description,
  icon,
  features,
  process_steps,
  pricing_tiers,
  faq_ids,
  case_study_ids,
  is_featured,
  sort_order,
  hero_image_url
) VALUES (
  'AI Chat Agent',
  'ai-chat-agent',
  'Deploy intelligent 24/7 customer support with custom-trained AI chat agents. Automate lead qualification, answer technical questions, and provide instant support across your website, WhatsApp, and Messenger platforms.',
  'MessageSquare',
  '[
    "Custom training on your content, FAQs, and business rules",
    "Multi-platform deployment (website, WhatsApp, Messenger)",
    "24/7 automated lead qualification and customer support",
    "Instant technical question responses with 95% accuracy",
    "Seamless handoff to human agents when needed",
    "Real-time conversation analytics and insights",
    "Multi-language support for global reach",
    "CRM integration for automatic lead capture",
    "Conversation history and customer journey tracking",
    "Custom branding and personality configuration",
    "A/B testing for conversation optimization",
    "GDPR compliant data handling and storage"
  ]',
  '[
    {
      "title": "Content Analysis & Training",
      "description": "We analyze your existing content, FAQs, support tickets, and business processes to create a comprehensive knowledge base for your AI agent.",
      "icon": "Brain"
    },
    {
      "title": "AI Agent Development",
      "description": "Custom development of your AI chat agent with personality, tone, and conversation flows tailored to your brand and customer needs.",
      "icon": "Bot"
    },
    {
      "title": "Platform Integration",
      "description": "Seamless deployment across your website, WhatsApp Business, Facebook Messenger, and other preferred communication channels.",
      "icon": "Zap"
    },
    {
      "title": "Testing & Optimization",
      "description": "Comprehensive testing with real customer scenarios, continuous learning implementation, and performance optimization based on conversation data.",
      "icon": "Target"
    },
    {
      "title": "Launch & Monitoring",
      "description": "Full deployment with real-time monitoring, analytics dashboard setup, and ongoing optimization to ensure peak performance.",
      "icon": "Rocket"
    }
  ]',
  '[
    {
      "name": "Starter",
      "price": "$2,997",
      "period": "one-time setup + $297/month",
      "features": ["Single platform deployment", "Basic conversation flows", "Standard business hours support", "Monthly performance reports"]
    },
    {
      "name": "Professional",
      "price": "$4,997",
      "period": "one-time setup + $497/month",
      "features": ["Multi-platform deployment", "Advanced conversation flows", "24/7 priority support", "Real-time analytics dashboard", "CRM integration"]
    },
    {
      "name": "Enterprise",
      "price": "Custom",
      "period": "contact for pricing",
      "features": ["Unlimited platforms", "Custom integrations", "Dedicated account manager", "Advanced AI training", "White-label options"]
    }
  ]',
  '[]',
  '[]',
  true,
  1,
  null
),
-- Add AI Voice Agent service
(
  'AI Voice Agent',
  'ai-voice-agent',
  'Transform your phone communications with advanced AI voice agents. Handle onboarding, support, and sales calls in multiple languages with natural conversation flow and real-time intelligence.',
  'Phone',
  '[
    "Natural voice conversations in 20+ languages",
    "Autonomous call handling for sales, support, and onboarding",
    "Real-time conversation intelligence and sentiment analysis",
    "Complete call transcription and analysis",
    "CRM integration with automatic lead scoring",
    "Custom voice personality and accent selection",
    "Advanced call routing and escalation rules",
    "Appointment scheduling and calendar integration",
    "Call recording and quality assurance",
    "Payment processing during calls (PCI compliant)",
    "Multi-tenant support for agencies and enterprises",
    "API integration for custom workflows"
  ]',
  '[
    {
      "title": "Voice Training & Personality Setup",
      "description": "We create a custom voice personality for your brand, train the AI on your specific use cases, and configure conversation flows for different call types.",
      "icon": "Mic"
    },
    {
      "title": "Phone System Integration",
      "description": "Seamless integration with your existing phone system, setting up dedicated numbers, and configuring call routing and escalation protocols.",
      "icon": "PhoneCall"
    },
    {
      "title": "Conversation Flow Design",
      "description": "Custom conversation scripts for different scenarios (sales, support, onboarding) with natural language processing and context awareness.",
      "icon": "MessageCircle"
    },
    {
      "title": "Testing & Quality Assurance",
      "description": "Extensive testing with real call scenarios, accent and language validation, and conversation quality optimization across different use cases.",
      "icon": "CheckCircle"
    },
    {
      "title": "Live Deployment & Monitoring",
      "description": "Full deployment with real-time call monitoring, performance analytics, and continuous improvement based on call success metrics.",
      "icon": "Activity"
    }
  ]',
  '[
    {
      "name": "Basic",
      "price": "$4,997",
      "period": "one-time setup + $697/month",
      "features": ["Single language support", "Basic call routing", "Standard voice personality", "Monthly call analytics", "Business hours support"]
    },
    {
      "name": "Professional",
      "price": "$7,997",
      "period": "one-time setup + $997/month",
      "features": ["Multi-language support", "Advanced call routing", "Custom voice personality", "Real-time analytics", "24/7 priority support", "CRM integration"]
    },
    {
      "name": "Enterprise",
      "price": "Custom",
      "period": "contact for pricing",
      "features": ["Unlimited languages", "White-label solution", "Dedicated phone numbers", "Custom integrations", "Dedicated account manager", "SLA guarantees"]
    }
  ]',
  '[]',
  '[]',
  true,
  2,
  null
);