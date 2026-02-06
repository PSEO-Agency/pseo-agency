import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import { CountryHero } from "@/components/country/CountryHero";
import { CountryPartner } from "@/components/country/CountryPartner";
import { CountryWhyItWorks } from "@/components/country/CountryWhyItWorks";
import { CountryServices } from "@/components/country/CountryServices";
import { CountryUseCases } from "@/components/country/CountryUseCases";
import { CountryProcess } from "@/components/country/CountryProcess";
import { CountryFAQ } from "@/components/country/CountryFAQ";
import { CountryCTA } from "@/components/country/CountryCTA";
import { useCountry } from "@/hooks/useCountries";
import { getCanonicalUrl } from "@/lib/canonical";
import NotFound from "./NotFound";

const CountryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: country, isLoading, error } = useCountry(slug || '');

  // Tell Prerender.io the page is ready once data is loaded
  useEffect(() => {
    if (!isLoading && country) {
      window.prerenderReady = true;
    }
  }, [isLoading, country]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </div>
        <TrustedToolsSection />
        <Footer />
      </div>
    );
  }
  
  if (error || !country) {
    return <NotFound />;
  }

  const breadcrumbItems = [
    { label: "Countries", href: "/countries" },
    { label: `${country.flag_emoji || ''} ${country.name}`.trim() }
  ];
  
  // LocalBusiness schema for SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": country.partner_name || "Programmatic SEO B.V.",
    "description": country.partner_description || country.hero_description,
    "url": getCanonicalUrl(`countries/${country.slug}`),
    "areaServed": {
      "@type": "Country",
      "name": country.name
    }
  };

  // FAQ schema for SEO
  const faqSchema = country.faqs && country.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": country.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const metaTitle = country.meta_title || `Programmatic SEO in ${country.name}`;
  const metaDescription = country.meta_description || country.hero_description || `Scale SEO traffic in ${country.name} with Programmatic SEO and our trusted local partner.`;

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <link rel="canonical" href={getCanonicalUrl(`countries/${country.slug}`)} />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
      </Helmet>
      
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      
      <main>
        <CountryHero country={country} />
        <CountryPartner country={country} />
        <CountryWhyItWorks country={country} />
        <CountryServices country={country} />
        <CountryUseCases country={country} />
        <CountryProcess country={country} />
        <CountryFAQ country={country} />
        <CountryCTA country={country} />
      </main>
      
      <TrustedToolsSection />
      <Footer />
    </div>
  );
};

export default CountryPage;
