-- Update sort order for AI Agent services to move them to the bottom
UPDATE public.services 
SET sort_order = 100 
WHERE slug = 'ai-chat-agent';

UPDATE public.services 
SET sort_order = 101 
WHERE slug = 'ai-voice-agent';