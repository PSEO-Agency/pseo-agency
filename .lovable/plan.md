

## Plan: Partner Marketplace System

### Overview
Build a complete Partner Marketplace at `/partners/` with search, filtering, partner profiles, category pages, and an application page. This is a new CMS-driven section using the established site patterns (database-backed, React Query hooks, consistent templates).

### Important Design Decision: Relationship with Countries

The existing `/countries/` section already has partner data (partner_name, partner_description, etc.) on a per-country basis. The new Partners system will be a **separate, standalone `partners` table** with richer fields (logo, type, expertise tags, integrations, industries). Country partners can link back to their country page. This avoids breaking the existing countries section.

---

### Step 1: Database -- Create `partners` Table

Create a new `partners` table with full marketplace fields:

| Column | Type | Purpose |
|--------|------|---------|
| id | uuid | Primary key |
| name | text | Partner display name |
| slug | text (unique) | URL slug |
| partner_type | text | "tech", "agency", or "country" |
| region | text | Geographic region |
| country_slug | text (nullable) | Links to countries table for country partners |
| logo_url | text | Partner logo |
| short_description | text | Card-level description |
| full_description | text | Full profile description |
| expertise_tags | jsonb | Array of expertise strings |
| integrations | jsonb | Array of integration names |
| industries | jsonb | Array of industry focus areas |
| services_offered | jsonb | Array of service objects |
| case_study_metrics | jsonb | Array of proof/metric items |
| contact_url | text | Partner contact link |
| website_url | text | Partner website |
| is_featured | boolean | Highlighted in results |
| is_published | boolean | Visibility control |
| sort_order | integer | Display ordering |
| meta_title | text | SEO title |
| meta_description | text | SEO description |
| created_at / updated_at | timestamptz | Timestamps |

RLS policies:
- Everyone can read published partners
- Admins can manage all partners

Seed data will include existing country partners (GrowthLab Dubai, etc.) plus tech partner placeholders (Webflow, WordPress, Airtable).

---

### Step 2: React Query Hook

**New file:** `src/hooks/usePartners.tsx`

```text
- usePartners(filters?): Fetch all published partners with optional filtering
- usePartner(slug): Fetch single partner by slug
- usePartnersByType(type): Fetch partners filtered by type
- Cache with React Query
```

---

### Step 3: Navigation Updates

**Update:** `src/components/Header.tsx`

Add a "Partners" NavigationMenuItem between "Countries" and "Results" with dropdown:

```text
Partners (dropdown)
+---------------------------------+
| Partner Marketplace             |
+---------------------------------+
| All Partners    -> /partners/   |
| Tech Partners   -> /partners/tech/     |
| Agency Partners -> /partners/agencies/ |
| Country Partners-> /partners/countries/|
+---------------------------------+
| Become a Partner -> /partners/apply/   |
+---------------------------------+
```

**Update:** `src/components/MobileMenu.tsx`
- Add "Partners" collapsible section with the same links

**Update:** `src/components/Footer.tsx`
- Add "Partners" link in the Company or Resources column

---

### Step 4: Partner Marketplace Hub Page

**New file:** `src/pages/PartnersHub.tsx`
**URL:** `/partners/`

Page structure:
1. **Breadcrumbs** (light bg strip, matching all other templates)
2. **Hero Section** -- Dark gradient with H1: "Find a Certified Programmatic SEO Partner", subtext, two CTAs (Browse Partners, Apply as Partner)
3. **Search + Filter Section** -- Search bar + filter sidebar (left) with partner grid (right)
   - Search bar: text input filtering by name, region, expertise
   - Filter groups: Partner Type (checkboxes), Region (checkboxes), Expertise (checkboxes), Integrations (checkboxes)
   - All filtering happens client-side with instant updates (no reload)
4. **Partner Results Grid** -- 3-column responsive grid of partner cards
5. **TrustedToolsSection + Footer**

---

### Step 5: Partner Card Component

**New file:** `src/components/partners/PartnerCard.tsx`

Card displays:
- Partner logo (or initials fallback)
- Partner name
- Partner type badge (color-coded: blue for Tech, green for Agency, purple for Country)
- Region badge
- Short description (2-line clamp)
- Up to 3 expertise tags
- "View Partner" button linking to profile

Design: `webfx-card` styling with hover effects, matching CountryCard/SoftwareCard patterns.

---

### Step 6: Partner Profile Page

**New file:** `src/pages/PartnerProfile.tsx`
**URL:** `/partners/:type/:slug` (e.g., `/partners/countries/dubai`, `/partners/tech/webflow`)

Page structure (following CountryPage/ServicePage template):
1. **Helmet** with full SEO meta tags, OG tags, Twitter tags, canonical URL, structured data
2. **Header + Breadcrumbs** (Home > Partners > [Type] > [Partner Name])
3. **Hero** -- Partner name, type badge, region, CTAs (Contact Partner, Book Joint Call)
4. **About Partner** -- Full description section
5. **Partner Specialties** -- Tag grid of expertise
6. **Supported Integrations** -- Icon/logo grid
7. **Services Offered** -- Structured service list
8. **Case Studies / Proof** -- Metric blocks (e.g., "+320% organic growth")
9. **Region Coverage** -- Text or badge showing areas served
10. **Final CTA** -- "Work With [Partner] + Programmatic SEO B.V." with dual buttons
11. **TrustedToolsSection + Footer**

Includes `prerenderReady` signal for SEO crawlers.

---

### Step 7: Partner Type Landing Pages

**New file:** `src/pages/PartnerTypePage.tsx`
**URLs:** `/partners/tech/`, `/partners/agencies/`, `/partners/countries/`

A reusable template that:
- Receives the type from the URL parameter
- Shows a filtered hero (headline/intro varies by type)
- Renders the same search + filter UI but pre-filtered to that type
- Uses the same PartnerCard grid

Type-specific content:

| Type | Headline | Intro |
|------|----------|-------|
| tech | Technology Partners and Integrations | Explore tools and platforms we integrate with to power scalable Programmatic SEO. |
| agencies | Agency Delivery Partners | Work with certified agencies delivering Programmatic SEO builds worldwide. |
| countries | Regional Programmatic SEO Experts | Find trusted local partners in your market. |

---

### Step 8: Partner Application Page

**New file:** `src/pages/PartnerApply.tsx`
**URL:** `/partners/apply/`

Page structure:
1. **Hero** -- "Become a Certified Programmatic SEO Partner"
2. **Benefits Section** -- 3-4 blocks (access methodology, join network, grow agency, co-branded materials)
3. **Requirements Section** -- What we look for in partners
4. **Application Form** -- Embedded form (matching the existing wellplan.io form pattern used on Contact and FreeStrategy pages, or a native form with fields: name, company, email, website, type, region, message)
5. **Footer**

---

### Step 9: Component Library

New components in `src/components/partners/`:

| Component | Purpose |
|-----------|---------|
| `PartnerCard.tsx` | Grid card for marketplace listing |
| `PartnerHero.tsx` | Profile page hero section |
| `PartnerAbout.tsx` | Full description section |
| `PartnerSpecialties.tsx` | Expertise tags grid |
| `PartnerIntegrations.tsx` | Integration logos/icons |
| `PartnerServices.tsx` | Services offered list |
| `PartnerProof.tsx` | Case study metrics blocks |
| `PartnerCTASection.tsx` | Final dual-CTA section |
| `PartnerFilters.tsx` | Sidebar filter checkboxes |
| `PartnerSearch.tsx` | Search bar component |

---

### Step 10: App Router Updates

**Update:** `src/App.tsx`

Add routes:
```text
/partners/                  -> PartnersHub
/partners/apply/            -> PartnerApply
/partners/tech/             -> PartnerTypePage (type="tech")
/partners/agencies/         -> PartnerTypePage (type="agency")
/partners/countries/        -> PartnerTypePage (type="country")
/partners/:type/:slug       -> PartnerProfile
```

Route ordering matters -- static routes (`apply`, `tech`, `agencies`, `countries`) must come before the dynamic `:type/:slug` catch.

---

### Step 11: SEO Updates

**Update:** `netlify/edge-functions/sitemap.ts`
- Add `/partners/`, `/partners/tech/`, `/partners/agencies/`, `/partners/countries/`, `/partners/apply/`
- Dynamically include all published partner profile URLs

**Update:** Header sr-only nav
- Add Partners section for crawler accessibility

---

### Step 12: Seed Data

Insert initial partners including:

**Country Partners** (linked from existing countries data):
- Programmatic SEO B.V. (Netherlands, HQ)
- GrowthLab Dubai (UAE)
- Scale SEO Partners (USA)
- Growth Engine SG (Singapore)

**Tech Partners:**
- Webflow
- WordPress
- Airtable
- n8n

**Agency Partners:**
- 1-2 placeholder agency entries

---

### File Creation Summary

| File | Type | Description |
|------|------|-------------|
| `supabase/migrations/[timestamp].sql` | New | Partners table + RLS + seed data |
| `src/hooks/usePartners.tsx` | New | React Query hooks |
| `src/pages/PartnersHub.tsx` | New | Main marketplace page |
| `src/pages/PartnerProfile.tsx` | New | Individual partner page |
| `src/pages/PartnerTypePage.tsx` | New | Category landing pages |
| `src/pages/PartnerApply.tsx` | New | Application page |
| `src/components/partners/PartnerCard.tsx` | New | Card component |
| `src/components/partners/PartnerHero.tsx` | New | Profile hero |
| `src/components/partners/PartnerAbout.tsx` | New | About section |
| `src/components/partners/PartnerSpecialties.tsx` | New | Expertise tags |
| `src/components/partners/PartnerIntegrations.tsx` | New | Integration grid |
| `src/components/partners/PartnerServices.tsx` | New | Services list |
| `src/components/partners/PartnerProof.tsx` | New | Metrics/proof |
| `src/components/partners/PartnerCTASection.tsx` | New | Final CTA |
| `src/components/partners/PartnerFilters.tsx` | New | Filter sidebar |
| `src/components/partners/PartnerSearch.tsx` | New | Search bar |
| `src/components/Header.tsx` | Update | Partners dropdown |
| `src/components/MobileMenu.tsx` | Update | Partners mobile menu |
| `src/components/Footer.tsx` | Update | Partners link |
| `src/App.tsx` | Update | Partner routes |
| `netlify/edge-functions/sitemap.ts` | Update | Partner URLs |

---

### Design Consistency

All components follow established patterns:
- **Gradients:** `from-slate-900 via-blue-900 to-indigo-900` for heroes
- **Cards:** `rounded-2xl border hover:shadow-xl` pattern
- **Badges:** Color-coded by partner type (blue=tech, green=agency, purple=country)
- **CTAs:** `webfx-button-primary` gradient buttons
- **Typography:** `text-3xl md:text-4xl font-bold` for section headings
- **Breadcrumbs:** Placed between Header and Hero on `bg-gray-50` strip
- **SEO:** Full Helmet with OG/Twitter tags, canonical URLs, prerenderReady signal
- **Loading:** Standard spinning loader with TrustedToolsSection visible
- **Error:** Standard NotFound component

