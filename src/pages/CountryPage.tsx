import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
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
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CountryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { data: country, isLoading, error } = useCountry(slug || '');
  
  if (isLoading) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-64 bg-gray-200 rounded" />
            <div className="h-4 w-48 bg-gray-200 rounded" />
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  if (error || !country) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Country Not Found</h1>
          <p className="text-gray-600 mb-8">The country page you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/countries')} className="webfx-button-primary">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Countries
          </Button>
        </div>
        <Footer />
      </>
    );
  }
  
  // LocalBusiness schema for SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": country.partner_name || "Programmatic SEO B.V.",
    "description": country.partner_description || country.hero_description,
    "url": getCanonicalUrl(`/countries/${country.slug}`),
    "areaServed": {
      "@type": "Country",
      "name": country.name
    }
  };

  return (
    <>
      <Helmet>
        <title>{country.meta_title || `Programmatic SEO in ${country.name}`}</title>
        <meta 
          name="description" 
          content={country.meta_description || country.hero_description || `Scale SEO traffic in ${country.name} with Programmatic SEO and our trusted local partner.`} 
        />
        <link rel="canonical" href={getCanonicalUrl(`/countries/${country.slug}`)} />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      
      <Header />
      
      <main>
        <CountryHero country={country} />
        <CountryPartner country={country} />
        <CountryWhyItWorks country={country} />
        <CountryServices country={country} />
        <CountryUseCases country={country} />
        <CountryProcess country={country} />
        <CountryFAQ country={country} />
        <CountryCTA country={country} />
        <TrustedToolsSection />
      </main>
      
      <Footer />
    </>
  );
};

export default CountryPage;
