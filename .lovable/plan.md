

## Plan: Add Regions, Remove Globe, Show Active vs Coming Soon

### Overview
Add new country regions to the database, reorder Netherlands as #1 with a "Headquarters" label, split the grid into "Active Partners" and "Coming Soon" sections, and remove the Interactive Globe section entirely.

---

### Step 1: Database Migration

Insert new countries and update existing ones. Repurpose `is_featured` to mean "active" (has a live partner page) vs "coming soon".

**Active Partners (is_featured = true):**

| # | Country | Slug | Flag | Region | Sort Order |
|---|---------|------|------|--------|------------|
| 1 | Netherlands | netherlands | NL flag | Europe | 0 |
| 2 | Dubai (UAE) | dubai | UAE flag | Middle East | 1 |
| 3 | Belgium | belgium | BE flag | Europe | 2 |
| 4 | United States | united-states | US flag | North America | 3 |
| 5 | South Africa | south-africa | ZA flag | Africa | 4 |
| 6 | Singapore | singapore | SG flag | Asia Pacific | 5 |

**Coming Soon (is_featured = false):**

| # | Country | Slug | Flag | Region | Sort Order |
|---|---------|------|------|--------|------------|
| 7 | Germany | germany | DE flag | Europe | 10 |
| 8 | Spain | spain | ES flag | Europe | 11 |
| 9 | Brazil | brazil | BR flag | South America | 12 |
| 10 | Romania | romania | RO flag | Europe | 13 |
| 11 | United Kingdom | united-kingdom | GB flag | Europe | 14 |
| 12 | Canada | canada | CA flag | North America | 15 |

**SQL operations:**
- UPDATE Netherlands: sort_order = 0, is_featured = true
- UPDATE Dubai: sort_order = 1, is_featured = true (no change)
- INSERT Belgium: sort_order = 2, is_featured = true, placeholder partner data
- UPDATE United States: sort_order = 3, is_featured = true
- INSERT South Africa: sort_order = 4, is_featured = true, placeholder partner data
- UPDATE Singapore: sort_order = 5, is_featured = true
- UPDATE Germany: sort_order = 10, is_featured = false
- INSERT Spain: sort_order = 11, is_featured = false, placeholder data
- INSERT Brazil: sort_order = 12, is_featured = false, placeholder data
- INSERT Romania: sort_order = 13, is_featured = false, placeholder data
- UPDATE United Kingdom: sort_order = 14, is_featured = false
- INSERT Canada: sort_order = 15, is_featured = false, placeholder data

---

### Step 2: Update CountryCard Component

**File:** `src/components/countries/CountryCard.tsx`

Changes:
- Replace "Featured" star badge with a **"Headquarters"** badge (blue/indigo gradient) when `country.slug === 'netherlands'`
- For coming soon countries (`is_featured === false`): show a "Coming Soon" badge, grey out the card slightly, and replace the "Explore" CTA button with a disabled "Coming Soon" button
- For active countries (`is_featured === true`): keep the current design with the "Explore" button

---

### Step 3: Update Countries Collection Page

**File:** `src/pages/CountriesCollection.tsx`

Changes:
- **Remove** the entire Interactive Globe section (lines 106-122)
- **Remove** the `InteractiveGlobe` import
- **Remove** the `scrollToGlobe` function
- Update the "Find Your Region" primary CTA to scroll to the regions grid instead
- Split the "Available Regions" grid into two sub-sections:
  1. **"Active Partners"** -- countries where `is_featured === true`, shown in full color cards
  2. **"Coming Soon"** -- countries where `is_featured === false`, shown in a slightly muted style
- Each sub-section gets its own heading

---

### Step 4: Update Navigation Dropdown

**File:** `src/components/Header.tsx`

- In the Countries dropdown, visually distinguish "Coming Soon" countries (add muted text + a small "soon" label next to the name)
- Keep them clickable only if they have a published page; otherwise show them as non-interactive text

**File:** `src/components/MobileMenu.tsx`

- Same treatment: show all countries with "Coming Soon" label for inactive ones

---

### Step 5: Clean Up Globe Component

Since the globe is no longer used on any page, the `InteractiveGlobe.tsx` file can be kept for now (no active references after import removal) or removed entirely. Will remove the import from `CountriesCollection.tsx` to prevent it from being bundled.

---

### Files Changed

| File | Action | Description |
|------|--------|-------------|
| `supabase/migrations/[timestamp].sql` | New | Add/update country records |
| `src/components/countries/CountryCard.tsx` | Update | HQ badge, coming soon state |
| `src/pages/CountriesCollection.tsx` | Update | Remove globe, split grid |
| `src/components/Header.tsx` | Update | Coming soon labels in dropdown |
| `src/components/MobileMenu.tsx` | Update | Coming soon labels in mobile nav |

