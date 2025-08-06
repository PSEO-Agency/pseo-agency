-- Update AI Chat Agent process steps to 5 steps with shorter descriptions
UPDATE services 
SET process_steps = '[
  {
    "title": "AI Strategy & Requirements Discovery",
    "description": "Business goal analysis and technical requirements assessment for optimal AI implementation.",
    "icon": "Target"
  },
  {
    "title": "Knowledge Base Development & Training", 
    "description": "Custom dataset creation and brand voice development for intelligent conversations.",
    "icon": "Brain"
  },
  {
    "title": "Intelligent Conversation Design",
    "description": "Natural language processing optimization with context-aware response generation.",
    "icon": "MessageSquare"
  },
  {
    "title": "Platform Integration & Deployment",
    "description": "Seamless integration with existing systems and secure cross-platform deployment.",
    "icon": "Link"
  },
  {
    "title": "Launch & Continuous Learning",
    "description": "Performance monitoring with real-time analytics and continuous model optimization.",
    "icon": "TrendingUp"
  }
]'::json
WHERE slug = 'ai-chat-agent';

-- Update AI Voice Agent process steps to 5 steps with shorter descriptions
UPDATE services 
SET process_steps = '[
  {
    "title": "Voice Strategy & Communication Design",
    "description": "Call flow analysis and voice personality development aligned with business objectives.",
    "icon": "Phone"
  },
  {
    "title": "Voice Training & Natural Speech Development",
    "description": "Custom voice model training with brand-specific language and emotional intelligence.",
    "icon": "Mic"
  },
  {
    "title": "Intelligent Call Flow Engineering",
    "description": "Dynamic conversation routing with context-aware responses and CRM integration.",
    "icon": "GitBranch"
  },
  {
    "title": "Telephony Integration & System Setup",
    "description": "Phone system integration with security protocols and compliance configuration.",
    "icon": "Settings"
  },
  {
    "title": "Production Launch & Intelligence Analytics",
    "description": "Staged deployment with real-time call analytics and continuous voice optimization.",
    "icon": "BarChart3"
  }
]'::json
WHERE slug = 'ai-voice-agent';