import { Helmet } from "react-helmet";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { InteractiveGlobe } from "@/components/countries/InteractiveGlobe";
import { CountryCard } from "@/components/countries/CountryCard";
import { CountriesBenefits } from "@/components/countries/CountriesBenefits";
import { PartnerCTA } from "@/components/countries/PartnerCTA";
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import { useCountries } from "@/hooks/useCountries";
import { getCanonicalUrl } from "@/lib/canonical";
import { Globe, ArrowRight, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CountriesCollection = () => {
  const navigate = useNavigate();
  const { data: countries, isLoading } = useCountries();

  // Tell Prerender.io the page is ready once data is loaded
  useEffect(() => {
    if (!isLoading && countries) {
      window.prerenderReady = true;
    }
  }, [isLoading, countries]);
  
  const scrollToGlobe = () => {
    document.getElementById('globe-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>International Programmatic SEO Partners | Programmatic SEO B.V.</title>
        <meta 
          name="description" 
          content="Find trusted Programmatic SEO partners around the world. Explore our regional experts and scale organic growth internationally." 
        />
        <meta property="og:title" content="International Programmatic SEO Partners | Programmatic SEO B.V." />
        <meta property="og:description" content="Find trusted Programmatic SEO partners around the world. Explore our regional experts and scale organic growth internationally." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="International Programmatic SEO Partners | Programmatic SEO B.V." />
        <meta name="twitter:description" content="Find trusted Programmatic SEO partners around the world. Explore our regional experts and scale organic growth internationally." />
        <link rel="canonical" href={getCanonicalUrl('countries')} />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 lg:py-28 overflow-hidden">
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <Breadcrumbs 
              items={[{ label: "Countries", href: "/countries" }]}
            />
            
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 rounded-full px-4 py-2 mb-6">
                <Globe className="w-4 h-4 text-blue-300" />
                <span className="text-blue-200 text-sm font-medium">Global Partner Network</span>
              </div>
              
              {/* H1 */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                International Programmatic SEO — <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Global Growth, Local Execution</span>
              </h1>
              
              {/* Subtext */}
              <p className="text-xl text-blue-100/80 mb-10 max-w-3xl mx-auto">
                We help companies scale organic traffic worldwide through Programmatic SEO, 
                AI-driven landing pages, and trusted regional partners.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  onClick={scrollToGlobe}
                  className="webfx-button-primary px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all"
                >
                  Find Your Region
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  onClick={() => navigate('/contact')}
                  variant="outline"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-bold backdrop-blur-sm"
                >
                  <Handshake className="w-5 h-5 mr-2" />
                  Become a Partner
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Interactive Globe Section */}
        <section id="globe-section" className="py-20 bg-gradient-to-b from-slate-900 to-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Select Your Region
              </h2>
              <p className="text-blue-200/70 text-lg max-w-2xl mx-auto">
                Discover local Programmatic SEO experts and tailored growth strategies for your market
              </p>
            </div>
            
            {!isLoading && countries && (
              <InteractiveGlobe countries={countries} />
            )}
          </div>
        </section>
        
        {/* Available Regions Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Available Regions
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Explore our partner network and find the right team for your market
              </p>
            </div>
            
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="bg-gray-100 rounded-2xl h-64 animate-pulse" />
                ))}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {countries?.map((country) => (
                  <CountryCard key={country.id} country={country} />
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Why International pSEO Works */}
        <CountriesBenefits />
        
        {/* Partner Network CTA */}
        <PartnerCTA />
      </main>
      
      <Footer />
    </>
  );
};

export default CountriesCollection;
