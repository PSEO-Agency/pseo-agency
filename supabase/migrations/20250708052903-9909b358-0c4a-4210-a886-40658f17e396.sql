-- Add new fields to software table for enhanced content
ALTER TABLE public.software 
ADD COLUMN screenshots JSONB DEFAULT '[]'::jsonb,
ADD COLUMN setup_guide TEXT,
ADD COLUMN comparison_features JSONB DEFAULT '{}'::jsonb,
ADD COLUMN roi_calculator_data JSONB DEFAULT '{}'::jsonb,
ADD COLUMN migration_guide TEXT,
ADD COLUMN implementation_examples JSONB DEFAULT '[]'::jsonb,
ADD COLUMN video_urls JSONB DEFAULT '[]'::jsonb,
ADD COLUMN changelog JSONB DEFAULT '[]'::jsonb,
ADD COLUMN support_resources JSONB DEFAULT '{}'::jsonb;