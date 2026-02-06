import { useState, useMemo, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import { PartnerCard } from "@/components/partners/PartnerCard";
import { PartnerFiltersSidebar, type PartnerFilters } from "@/components/partners/PartnerFilters";
import { usePartnersByType } from "@/hooks/usePartners";
import { getCanonicalUrl } from "@/lib/canonical";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import NotFound from "./NotFound";

interface TypeConfig {
  dbType: string;
  headline: string;
  intro: string;
  badge: string;
  metaTitle: string;
  metaDesc: string;
}

const typeMap: Record<string, TypeConfig> = {
  tech: {
    dbType: 'tech',
    headline: 'Technology Partners & Integrations',
    intro: 'Explore tools and platforms we integrate with to power scalable Programmatic SEO.',
    badge: 'Tech Partners',
    metaTitle: 'Technology Partners & Integrations | Programmatic SEO B.V.',
    metaDesc: 'Explore technology partners and integrations that power scalable Programmatic SEO. Webflow, WordPress, Airtable, n8n, and more.',
  },
  agencies: {
    dbType: 'agency',
    headline: 'Agency Delivery Partners',
    intro: 'Work with certified agencies delivering Programmatic SEO builds worldwide.',
    badge: 'Agency Partners',
    metaTitle: 'Agency Partners | Programmatic SEO B.V.',
    metaDesc: 'Work with certified agency partners delivering Programmatic SEO implementations worldwide.',
  },
  countries: {
    dbType: 'country',
    headline: 'Regional Programmatic SEO Experts',
    intro: 'Find trusted local partners in your market.',
    badge: 'Country Partners',
    metaTitle: 'Country & Regional Partners | Programmatic SEO B.V.',
    metaDesc: 'Find trusted local Programmatic SEO partners in your market. Regional experts delivering localized organic growth.',
  },
};

const defaultFilters: PartnerFilters = { search: '', types: [], regions: [], expertise: [], integrations: [] };

const PartnerTypePage = () => {
  const { type } = useParams<{ type: string }>();
  const config = type ? typeMap[type] : undefined;
  const { data: partners, isLoading } = usePartnersByType(config?.dbType || '');
  const [filters, setFilters] = useState<PartnerFilters>(defaultFilters);

  useEffect(() => {
    if (!isLoading && partners) {
      (window as any).prerenderReady = true;
    }
  }, [isLoading, partners]);

  if (!config) return <NotFound />;

  const filtered = useMemo(() => {
    if (!partners) return [];
    return partners.filter(p => {
      const search = filters.search.toLowerCase();
      if (search && ![p.name, p.region, p.short_description, ...(Array.isArray(p.expertise_tags) ? p.expertise_tags : [])]
        .filter(Boolean).some(v => String(v).toLowerCase().includes(search))) return false;
      if (filters.regions.length && !filters.regions.includes(p.region || '')) return false;
      if (filters.expertise.length) {
        const tags = Array.isArray(p.expertise_tags) ? p.expertise_tags : [];
        if (!filters.expertise.some(e => tags.includes(e))) return false;
      }
      if (filters.integrations.length) {
        const ints = Array.isArray(p.integrations) ? p.integrations : [];
        if (!filters.integrations.some(i => ints.includes(i))) return false;
      }
      return true;
    });
  }, [partners, filters]);

  const breadcrumbItems = [
    { label: 'Partners', href: '/partners' },
    { label: config.badge },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{config.metaTitle}</title>
        <meta name="description" content={config.metaDesc} />
        <meta property="og:title" content={config.metaTitle} />
        <meta property="og:description" content={config.metaDesc} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={getCanonicalUrl(`partners/${type}`)} />
      </Helmet>

      <Header />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/20 text-white mb-4 px-4 py-2 text-sm font-semibold backdrop-blur">
              {config.badge}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{config.headline}</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">{config.intro}</p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-72 flex-shrink-0">
              <div className="bg-white rounded-2xl border border-gray-200 p-6 sticky top-24 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-4">Filters</h3>
                <PartnerFiltersSidebar filters={filters} onFiltersChange={setFilters} hideTypeFilter />
              </div>
            </aside>
            <div className="flex-grow">
              <div className="flex items-center justify-between mb-6">
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-900">{filtered.length}</span> partner{filtered.length !== 1 ? 's' : ''} found
                </p>
              </div>
              {isLoading ? (
                <div className="flex items-center justify-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
                </div>
              ) : filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-gray-500 text-lg mb-4">No partners match your filters.</p>
                  <Button variant="outline" onClick={() => setFilters(defaultFilters)}>Clear Filters</Button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filtered.map(p => <PartnerCard key={p.id} partner={p} />)}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <TrustedToolsSection />
      <Footer />
    </div>
  );
};

export default PartnerTypePage;
