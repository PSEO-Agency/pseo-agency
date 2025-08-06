-- Update AI Chat Agent with enhanced process steps
UPDATE public.services 
SET process_steps = '[
  {
    "title": "AI Strategy & Requirements Discovery",
    "description": "Business goal analysis and use case definition, customer journey mapping and conversation flow planning, technical requirements assessment and platform selection, integration point identification with existing systems",
    "icon": "Target"
  },
  {
    "title": "Knowledge Base Development & Training",
    "description": "Content audit and knowledge extraction from existing resources, custom dataset creation and conversation training, brand voice and personality development, multi-language support configuration",
    "icon": "Brain"
  },
  {
    "title": "Intelligent Conversation Design",
    "description": "Natural language processing optimization, intent recognition and entity extraction setup, fallback scenarios and escalation triggers, context-aware response generation",
    "icon": "MessageSquare"
  },
  {
    "title": "Platform Integration & Deployment",
    "description": "Seamless integration with websites, CRM, and communication channels, API connections and webhook configurations, security protocols and compliance setup, cross-platform synchronization",
    "icon": "Link"
  },
  {
    "title": "Performance Testing & Optimization",
    "description": "Conversation flow testing with real user scenarios, A/B testing of responses and conversation paths, machine learning model fine-tuning, response accuracy and satisfaction optimization",
    "icon": "TestTube"
  },
  {
    "title": "Launch, Monitoring & Continuous Learning",
    "description": "Phased rollout with performance monitoring, real-time analytics and conversation insights, continuous learning implementation from user interactions, regular model updates and performance improvements",
    "icon": "TrendingUp"
  }
]'::jsonb
WHERE slug = 'ai-chat-agent';

-- Update AI Voice Agent with enhanced process steps
UPDATE public.services 
SET process_steps = '[
  {
    "title": "Voice Strategy & Communication Design",
    "description": "Call flow analysis and voice interaction mapping, business objectives alignment and KPI definition, voice personality development and accent selection, integration planning with existing phone systems",
    "icon": "Phone"
  },
  {
    "title": "Voice Training & Natural Speech Development",
    "description": "Custom voice model training with brand-specific language, speech recognition optimization for industry terminology, emotional intelligence and tone adaptation, multi-accent and language support configuration",
    "icon": "Mic"
  },
  {
    "title": "Intelligent Call Flow Engineering",
    "description": "Dynamic conversation routing and intent recognition, context-aware responses and memory retention, escalation triggers and human handoff protocols, integration with CRM and customer databases",
    "icon": "GitBranch"
  },
  {
    "title": "Telephony Integration & System Setup",
    "description": "Phone system integration and number provisioning, call routing, recording, and quality monitoring setup, security protocols and compliance (HIPAA, PCI, etc.), backup systems and failover configuration",
    "icon": "Settings"
  },
  {
    "title": "Voice Quality Assurance & Testing",
    "description": "Extensive voice testing across different scenarios, call quality optimization and latency reduction, accent recognition and clarity validation, load testing for concurrent call handling",
    "icon": "Volume2"
  },
  {
    "title": "Production Launch & Intelligence Analytics",
    "description": "Staged deployment with call volume monitoring, real-time call analytics and success metrics, continuous voice model improvement from call data, performance optimization and cost analysis",
    "icon": "BarChart3"
  }
]'::jsonb
WHERE slug = 'ai-voice-agent';