

## Plan: Add Self-Referencing Canonical Tags to All Routes

### Overview

After auditing all routes, I found that **11 public pages are missing canonical tags**. This can cause duplicate content issues and confuse search engines about which URL should be indexed.

### Current State

**Pages with correct canonical tags (12):**
- Homepage (`/`)
- About (`/about`)
- Contact (`/contact`)
- Blog listing (`/blog`)
- Blog posts (`/blog/:slug`)
- Services listing (`/services`)
- Service pages (`/services/:slug`)
- Industries pages (`/industries/:slug`)
- Software listing (`/software`)
- Tools listing (`/tools`)
- Dynamic CMS pages (`/:slug`)

**Pages missing canonical tags (11):**
1. `/industries` - IndustriesCollection.tsx
2. `/software/:slug` - SoftwarePage.tsx
3. `/tools/:slug` - ToolPage.tsx
4. `/resources` - ResourcesCollection.tsx
5. `/resources/:slug` - Resource.tsx
6. `/case-studies/:slug` - CaseStudy.tsx
7. `/results` - Results.tsx
8. `/jobs` - Jobs.tsx
9. `/free-strategy` - FreeStrategy.tsx
10. `/strategy-call` - StrategyCall.tsx
11. `/programmatic-seo-guide` - ProgrammaticSEOGuide.tsx

### Implementation Steps

#### Step 1: Add canonical to Industries Collection
**File:** `src/pages/IndustriesCollection.tsx`
- Import `getCanonicalUrl` from `@/lib/canonical`
- Add `<link rel="canonical" href={getCanonicalUrl('industries')} />` inside Helmet

#### Step 2: Add canonical to Software Page (dynamic)
**File:** `src/pages/SoftwarePage.tsx`
- Import `getCanonicalUrl` from `@/lib/canonical`
- Add `<link rel="canonical" href={getCanonicalUrl(\`software/${slug}\`)} />` inside Helmet

#### Step 3: Add canonical to Tool Page (dynamic)
**File:** `src/pages/ToolPage.tsx`
- Import `getCanonicalUrl` from `@/lib/canonical`
- Add `<link rel="canonical" href={getCanonicalUrl(\`tools/${slug}\`)} />` inside Helmet

#### Step 4: Add canonical to Resources Collection
**File:** `src/pages/ResourcesCollection.tsx`
- Import `getCanonicalUrl` from `@/lib/canonical`
- Add `<link rel="canonical" href={getCanonicalUrl('resources')} />` inside Helmet

#### Step 5: Add canonical to Resource Page (dynamic)
**File:** `src/pages/Resource.tsx`
- Import `getCanonicalUrl` from `@/lib/canonical`
- Add `<link rel="canonical" href={getCanonicalUrl(\`resources/${slug}\`)} />` inside Helmet

#### Step 6: Add canonical to Case Study Page (dynamic)
**File:** `src/pages/CaseStudy.tsx`
- Import `getCanonicalUrl` from `@/lib/canonical`
- Add `<link rel="canonical" href={getCanonicalUrl(\`case-studies/${slug}\`)} />` inside Helmet

#### Step 7: Add canonical to Results Page
**File:** `src/pages/Results.tsx`
- Import `getCanonicalUrl` from `@/lib/canonical`
- Add `<link rel="canonical" href={getCanonicalUrl('results')} />` inside Helmet

#### Step 8: Add canonical to Jobs Page
**File:** `src/pages/Jobs.tsx`
- Import `getCanonicalUrl` from `@/lib/canonical`
- Add `<link rel="canonical" href={getCanonicalUrl('jobs')} />` inside Helmet

#### Step 9: Add canonical to Free Strategy Page
**File:** `src/pages/FreeStrategy.tsx`
- Import `getCanonicalUrl` from `@/lib/canonical`
- Import `Helmet` from `react-helmet`
- Add Helmet with canonical tag: `<link rel="canonical" href={getCanonicalUrl('free-strategy')} />`

#### Step 10: Add canonical to Strategy Call Page
**File:** `src/pages/StrategyCall.tsx`
- Import `getCanonicalUrl` from `@/lib/canonical`
- Import `Helmet` from `react-helmet`
- Add Helmet with canonical tag: `<link rel="canonical" href={getCanonicalUrl('strategy-call')} />`

#### Step 11: Add canonical to Programmatic SEO Guide
**File:** `src/pages/ProgrammaticSEOGuide.tsx`
- Import `getCanonicalUrl` from `@/lib/canonical`
- Add `<link rel="canonical" href={getCanonicalUrl('programmatic-seo-guide')} />` inside existing Helmet

---

### Technical Details

All canonical URLs will use the existing `getCanonicalUrl()` utility which:
- Uses the correct base URL: `https://programmaticseo.agency`
- Properly formats paths (removes leading slashes, adds them back correctly)
- Generates self-referencing canonical URLs (not pointing to homepage)

**Example outputs:**
- `/industries` -> `https://programmaticseo.agency/industries`
- `/software/wordpress` -> `https://programmaticseo.agency/software/wordpress`
- `/resources/seo-guide` -> `https://programmaticseo.agency/resources/seo-guide`

### Testing

After implementation:
1. View page source on each modified page
2. Search for `rel="canonical"` 
3. Verify the URL matches the current page URL exactly
4. Check in Google Search Console URL Inspection tool
5. Run Screaming Frog crawl to validate all canonical tags

