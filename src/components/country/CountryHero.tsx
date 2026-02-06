import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Phone, Star, Users } from "lucide-react";
import { Country } from "@/hooks/useCountries";
import { useNavigate } from "react-router-dom";

interface CountryHeroProps {
  country: Country;
}

export const CountryHero = ({ country }: CountryHeroProps) => {
  const navigate = useNavigate();
  
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-16 lg:py-24 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <Breadcrumbs 
          items={[
            { label: "Countries", href: "/countries" },
            { label: country.name, href: `/countries/${country.slug}` }
          ]}
        />
        
        <div className="max-w-4xl mt-8">
          {/* Partner badge */}
          {country.partner_name && (
            <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-green-300" />
              <span className="text-green-200 text-sm font-medium">
                Local Partner: {country.partner_name}
              </span>
            </div>
          )}
          
          {/* Flag and H1 */}
          <div className="flex items-start gap-4 mb-6">
            <span className="text-6xl">{country.flag_emoji}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {country.hero_headline || `Programmatic SEO in ${country.name}`}
            </h1>
          </div>
          
          {/* Description */}
          <p className="text-xl text-blue-100/80 mb-8 max-w-3xl">
            {country.hero_description || `Scale organic traffic in ${country.name} with programmatic SEO and our trusted local partner.`}
          </p>
          
          {/* Industries */}
          {country.industries && country.industries.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {country.industries.map((industry, index) => (
                <Badge 
                  key={index} 
                  className="bg-blue-500/20 text-blue-200 border border-blue-400/30 hover:bg-blue-500/30"
                >
                  {industry}
                </Badge>
              ))}
            </div>
          )}
          
          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={() => navigate('/strategy-call')}
              className="webfx-button-primary px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl"
            >
              Book a Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            {country.partner_contact_url ? (
              <Button 
                onClick={() => window.open(country.partner_contact_url!, '_blank')}
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-bold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact {country.name.split('(')[0].trim()} Partner
              </Button>
            ) : (
              <Button 
                onClick={() => navigate('/contact')}
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-bold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Our Team
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
