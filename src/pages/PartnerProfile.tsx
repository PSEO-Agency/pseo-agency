import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import { usePartner } from "@/hooks/usePartners";
import { getCanonicalUrl } from "@/lib/canonical";
import NotFound from "./NotFound";
import {
  PartnerHero,
  PartnerAbout,
  PartnerSpecialties,
  PartnerIntegrations,
  PartnerServices,
  PartnerProof,
  PartnerCTA,
} from "@/components/partners/PartnerProfileSections";

const typeLabels: Record<string, string> = {
  tech: 'Tech Partners',
  agency: 'Agency Partners',
  country: 'Country Partners',
};
const typeRoutes: Record<string, string> = {
  tech: '/partners/tech',
  agency: '/partners/agencies',
  country: '/partners/countries',
};

const PartnerProfile = () => {
  const { slug } = useParams<{ type: string; slug: string }>();
  const { data: partner, isLoading } = usePartner(slug || '');

  useEffect(() => {
    if (!isLoading && partner) {
      (window as any).prerenderReady = true;
    }
  }, [isLoading, partner]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center py-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
        </div>
        <TrustedToolsSection />
        <Footer />
      </div>
    );
  }

  if (!partner) return <NotFound />;

  const typeLabel = typeLabels[partner.partner_type] || 'Partners';
  const typeRoute = typeRoutes[partner.partner_type] || '/partners';

  const breadcrumbItems = [
    { label: 'Partners', href: '/partners' },
    { label: typeLabel, href: typeRoute },
    { label: partner.name },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{partner.meta_title || `${partner.name} — Partner Marketplace | Programmatic SEO B.V.`}</title>
        <meta name="description" content={partner.meta_description || partner.short_description || ''} />
        <meta property="og:title" content={partner.meta_title || partner.name} />
        <meta property="og:description" content={partner.meta_description || partner.short_description || ''} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={getCanonicalUrl(`partners/${partner.partner_type === 'agency' ? 'agencies' : partner.partner_type === 'country' ? 'countries' : 'tech'}/${partner.slug}`)} />
      </Helmet>

      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      <PartnerHero partner={partner} />
      <PartnerAbout partner={partner} />
      <PartnerSpecialties partner={partner} />
      <PartnerIntegrations partner={partner} />
      <PartnerServices partner={partner} />
      <PartnerProof partner={partner} />
      <PartnerCTA partner={partner} />
      <TrustedToolsSection />
      <Footer />
    </div>
  );
};

export default PartnerProfile;
