
## Plan: International Countries Section with Partner Pages

### Overview
Create a complete International Countries section with navigation dropdown, overview hub page at `/countries/`, and dynamic country subpages following the existing design patterns. This will include an interactive globe/map component, partner information system, and scalable database-driven architecture.

---

### Technical Architecture

```text
Database Layer
+------------------+
| countries table  |
+------------------+
        |
        v
Frontend Layer
+------------------+     +------------------+
| Header.tsx       |<--->| MobileMenu.tsx   |
| (Countries menu) |     | (Countries menu) |
+------------------+     +------------------+
        |
        v
+------------------+     +---------------------+
| /countries/      |---->| /countries/:slug    |
| (Collection)     |     | (Country subpage)   |
+------------------+     +---------------------+
        |                         |
        v                         v
+------------------+     +---------------------+
| InteractiveGlobe |     | CountryHero         |
| CountryCard      |     | CountryPartner      |
+------------------+     | CountryServices     |
                         | CountryUseCases     |
                         | CountryProcess      |
                         | CountryFAQ          |
                         | CountryCTA          |
                         +---------------------+
```

---

### Step 1: Database Migration

Create a new `countries` table in Supabase with comprehensive fields:

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| name | text | Country display name (e.g., "Dubai (UAE)") |
| slug | text | URL slug (e.g., "dubai") |
| region | text | Geographic region (e.g., "Middle East") |
| flag_emoji | text | Country flag emoji |
| partner_name | text | Local partner company name |
| partner_logo_url | text | Partner logo image URL |
| partner_description | text | Partner company description |
| partner_contact_url | text | Partner contact link |
| hero_headline | text | Custom hero H1 headline |
| hero_description | text | Hero introduction text |
| meta_title | text | SEO meta title |
| meta_description | text | SEO meta description |
| industries | jsonb | Array of target industries in region |
| keywords | jsonb | Array of example target keywords |
| services | jsonb | Array of services offered |
| use_cases | jsonb | Array of use case cards |
| process_steps | jsonb | Array of process steps |
| faqs | jsonb | Array of FAQ items |
| is_published | boolean | Publication status |
| is_featured | boolean | Featured on overview page |
| sort_order | integer | Display order |
| created_at | timestamptz | Creation timestamp |
| updated_at | timestamptz | Update timestamp |

---

### Step 2: Create Custom Hook

**File:** `src/hooks/useCountries.tsx`

```text
- useCountries(): Fetch all published countries
- useCountry(slug): Fetch single country by slug
- Cache with React Query
- Handle loading/error states
```

---

### Step 3: Navigation Updates

**Update:** `src/components/Header.tsx`
- Add "Countries" NavigationMenuItem between "Industries" and "Results"
- Implement dropdown with country flags and names
- Two-column layout for countries list
- Link to `/countries` at bottom of dropdown

**Update:** `src/components/MobileMenu.tsx`
- Add "Countries" collapsible section
- Display all published countries with flags
- Maintain consistent styling with other sections

---

### Step 4: Interactive Globe Component

**File:** `src/components/countries/InteractiveGlobe.tsx`

Create a visually impressive interactive element using:
- SVG-based world map with clickable regions
- Hover effects with country highlights
- Animated connection lines between regions
- Tooltip showing country/partner info on hover
- Click navigation to country pages
- Responsive design (simplified on mobile)
- Uses existing blue/purple gradient aesthetic

**Visual Concept:**
```text
     ╭─────────────────────────────────╮
     │     [Interactive World Map]     │
     │                                 │
     │    🌐  Hover dots on regions    │
     │        Click to navigate        │
     │                                 │
     │   "Select your region..."       │
     ╰─────────────────────────────────╯
```

---

### Step 5: Countries Overview Page

**File:** `src/pages/CountriesCollection.tsx`

**URL:** `/countries/`

**Sections:**

1. **Hero Section**
   - H1: "International Programmatic SEO — Global Growth, Local Execution"
   - Subtext about worldwide scaling
   - Primary CTA: "Find Your Region" (scrolls to globe)
   - Secondary CTA: "Become a Partner" (links to contact/apply form)
   - Dark gradient background matching existing hero style

2. **Interactive Globe Section**
   - Centered globe/map component
   - "Select your region to discover local experts" text
   - Animated dots on available regions

3. **Available Regions Grid**
   - Responsive card grid (3 columns desktop, 1-2 mobile)
   - Each card shows: flag, country name, partner name, value prop, "Explore" button
   - Featured countries highlighted with badge
   - Cards use existing `webfx-card` styling

4. **Why International pSEO Works Section**
   - 4 benefit blocks with icons:
     - Scalable landing pages for every market
     - Local intent + global automation
     - Partner-supported execution
     - Multilingual and multi-region expansion

5. **Partner Network CTA**
   - Dark gradient section
   - Headline: "Want to Become Our Regional Partner?"
   - Description text
   - "Apply as Partner" button

---

### Step 6: Country Component Library

Create reusable components in `src/components/country/`:

**CountryHero.tsx**
- Similar structure to IndustryHero
- Shows partner badge, country-specific headline
- Process steps for the region
- Uses flag and local partner branding

**CountryPartner.tsx**
- Partner card with logo, name, description
- "Meet the Partner" CTA button
- Trust indicators

**CountryWhyItWorks.tsx**
- Localized content about market opportunity
- Target industries in region
- Example keywords grid

**CountryServices.tsx**
- Grid of services offered in region
- Icons and descriptions
- Pulled from `services` JSONB field

**CountryUseCases.tsx**
- Card grid of common use cases
- E.g., "Real estate directories", "SaaS comparison pages"

**CountryProcess.tsx**
- Numbered process steps
- Similar to ServiceProcess component
- Shows "Delivered jointly with [Partner]" note

**CountryFAQ.tsx**
- Accordion FAQ component
- Schema-ready for SEO
- Questions from database

**CountryCTA.tsx**
- Dual CTA section
- "Book Strategy Call" + "Contact [Region] Partner"
- Phone number and contact info

---

### Step 7: Country Subpage Template

**File:** `src/pages/CountryPage.tsx`

**URL:** `/countries/:slug`

**Structure:**
```text
Header
Breadcrumbs (Home > Countries > [Country Name])
├── CountryHero
├── CountryPartner
├── CountryWhyItWorks
├── CountryServices
├── CountryUseCases
├── CountryProcess
├── CountryFAQ
├── CountryCTA
TrustedToolsSection
Footer
```

**SEO:**
- Dynamic meta title/description from database
- Canonical URL
- Schema markup for LocalBusiness
- noindex=false (these pages are public)

---

### Step 8: Seed Initial Data

**Dubai Example Data:**

```text
name: "Dubai (UAE)"
slug: "dubai"
region: "Middle East"
flag_emoji: "🇦🇪"
partner_name: "GrowthLab Dubai"
hero_headline: "Programmatic SEO in Dubai — Scale Organic Growth in the UAE"
meta_title: "Programmatic SEO Dubai | Local Partner Growth SEO"
meta_description: "Scale SEO traffic in Dubai with Programmatic SEO and our trusted UAE partner. Thousands of landing pages, automated growth, real results."

industries: ["Fintech", "Real Estate", "Ecommerce", "Tourism", "B2B SaaS"]

keywords: [
  "Best payroll software UAE",
  "Top coworking spaces in Dubai",
  "Dubai crypto exchange comparison"
]

services: [
  {title: "Programmatic SEO Strategy", icon: "Target"},
  {title: "Landing Page Generation", icon: "Database"},
  {title: "AI Content Automation", icon: "Zap"},
  {title: "Technical SEO Support", icon: "Settings"},
  {title: "Data Sourcing Pipelines", icon: "BarChart3"},
  {title: "Multilingual Expansion", icon: "Globe"}
]

use_cases: [
  {title: "Real estate directories", icon: "Building"},
  {title: "SaaS comparison pages", icon: "Target"},
  {title: "Tourism landing pages", icon: "Plane"},
  {title: "Financial service SEO hubs", icon: "DollarSign"},
  {title: "Ecommerce scaling pages", icon: "ShoppingCart"}
]

faqs: [
  {question: "How long does Programmatic SEO take in Dubai?", answer: "..."},
  {question: "Can you build Arabic landing pages?", answer: "..."},
  ...
]
```

---

### Step 9: App Router Updates

**Update:** `src/App.tsx`

Add routes:
```text
<Route path="/countries" element={<CountriesCollection />} />
<Route path="/countries/:slug" element={<CountryPage />} />
```

---

### Step 10: SEO Crawlability

**Update:** `src/components/Header.tsx` (sr-only nav section)
- Add Countries section to hidden navigation for crawlers

**Update:** `netlify/edge-functions/sitemap.ts`
- Include `/countries/` and all `/countries/:slug` pages

---

### File Creation Summary

| File | Type | Description |
|------|------|-------------|
| `supabase/migrations/[timestamp].sql` | New | Countries table + seed Dubai data |
| `src/hooks/useCountries.tsx` | New | React Query hooks for countries |
| `src/pages/CountriesCollection.tsx` | New | Overview hub page |
| `src/pages/CountryPage.tsx` | New | Dynamic country subpage |
| `src/components/countries/InteractiveGlobe.tsx` | New | SVG world map component |
| `src/components/countries/CountryCard.tsx` | New | Grid card component |
| `src/components/country/CountryHero.tsx` | New | Hero section |
| `src/components/country/CountryPartner.tsx` | New | Partner info section |
| `src/components/country/CountryWhyItWorks.tsx` | New | Market opportunity section |
| `src/components/country/CountryServices.tsx` | New | Services grid |
| `src/components/country/CountryUseCases.tsx` | New | Use cases grid |
| `src/components/country/CountryProcess.tsx` | New | Process steps |
| `src/components/country/CountryFAQ.tsx` | New | FAQ accordion |
| `src/components/country/CountryCTA.tsx` | New | Final CTA section |
| `src/components/Header.tsx` | Update | Add Countries dropdown |
| `src/components/MobileMenu.tsx` | Update | Add Countries section |
| `src/App.tsx` | Update | Add country routes |
| `src/integrations/supabase/types.ts` | Update | Auto-generated types |

---

### Design Consistency

All new components will follow the established visual identity:
- **Primary Gradient:** `from-slate-900 via-blue-900 to-indigo-900`
- **Accent Colors:** Blue (#3B82F6), Purple (#8B5CF6), Green (#22C55E), Orange (#F97316)
- **Typography:** Inter font, bold headings, clean sans-serif
- **Cards:** `webfx-card` class, `rounded-2xl` corners
- **CTAs:** `webfx-button-primary` gradient buttons
- **Background Effects:** Blurred gradient orbs, dot patterns

---

### Testing Checklist

After implementation:
1. Navigate to `/countries` and verify hero, globe, and grid display
2. Click globe regions and verify navigation works
3. Test country cards link to correct subpages
4. Verify `/countries/dubai` displays all sections correctly
5. Test header dropdown on desktop
6. Test mobile menu Countries section
7. Verify SEO meta tags on all pages
8. Check responsive design on mobile/tablet
9. Confirm navigation accessibility for screen readers
10. Test "Become a Partner" and contact CTAs

