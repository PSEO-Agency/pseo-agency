-- Update the carousel slides with enhanced branding-aligned content
UPDATE public.linkedin_posts 
SET 
  carousel_slides = '[
    {
      "slide_number": 1,
      "type": "hook",
      "title": "SEO Traffic Machine",
      "subtitle": "15,000+ clicks/month — Fully Automated",
      "icon": "🚀",
      "visual_notes": "Hero slide with workflow automation diagram as background, blue-indigo gradient overlay matching website hero"
    },
    {
      "slide_number": 2,
      "type": "inputs",
      "title": "Plug In Just 4 Things",
      "subtitle": "Connect once, scale forever",
      "icon": "🔌",
      "bullets": [
        "Your Website URL",
        "Google Search Console",
        "Niche News Sources",
        "CMS API Connection"
      ],
      "visual_notes": "Blue-tinted dark gradient with connection icons, flow lines to center engine"
    },
    {
      "slide_number": 3,
      "type": "engine",
      "title": "What It Does (24/7)",
      "subtitle": "Research → Write → Enrich → Publish → Index",
      "icon": "⚙️",
      "bullets": [
        "Scrapes niche-relevant news sources",
        "Analyzes SERPs & identifies gaps",
        "Auto-writes SEO briefings & content",
        "Enriches with links, media & schema",
        "Publishes & submits to Google"
      ],
      "visual_notes": "Purple-tinted gradient with process flow diagram style, 24/7 moon/gear indicator"
    },
    {
      "slide_number": 4,
      "type": "results",
      "title": "The Results",
      "subtitle": "Exponential organic growth, zero manual input",
      "icon": "📈",
      "bullets": [
        "15,000+ organic visitors/month",
        "100% automated content pipeline",
        "One-click email approval workflow",
        "Scaling globally via partners"
      ],
      "visual_notes": "Green success accent on dark gradient, stats-focused layout matching ImpactSection"
    },
    {
      "slide_number": 5,
      "type": "cta",
      "title": "Want to Launch Yours?",
      "subtitle": "Comment \"Machine\" or DM us",
      "icon": "💬",
      "visual_notes": "Orange-amber gradient matching webfx-button-primary, prominent CTA with chat icon"
    }
  ]'::jsonb,
  updated_at = now()
WHERE slug = 'seo-content-machine-reveal';
