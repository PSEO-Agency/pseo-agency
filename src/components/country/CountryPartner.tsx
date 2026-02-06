import { Button } from "@/components/ui/button";
import { Country } from "@/hooks/useCountries";
import { useNavigate } from "react-router-dom";
import { Building, ArrowRight, CheckCircle } from "lucide-react";

interface CountryPartnerProps {
  country: Country;
}

export const CountryPartner = ({ country }: CountryPartnerProps) => {
  const navigate = useNavigate();
  
  if (!country.partner_name) return null;
  
  const trustIndicators = [
    "Certified execution partner",
    "Local market expertise",
    "Direct communication",
    "On-ground support",
  ];
  
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          Your Trusted Programmatic SEO Partner in {country.name.split('(')[0].trim()}
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Partner logo/icon */}
              <div className="flex-shrink-0">
                {country.partner_logo_url ? (
                  <img 
                    src={country.partner_logo_url} 
                    alt={country.partner_name}
                    className="w-24 h-24 rounded-2xl object-contain bg-gray-50 p-2"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <Building className="w-12 h-12 text-white" />
                  </div>
                )}
              </div>
              
              {/* Partner info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{country.flag_emoji}</span>
                  <h3 className="text-2xl font-bold text-gray-900">{country.partner_name}</h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {country.partner_description}
                </p>
                
                {/* Trust indicators */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {trustIndicators.map((indicator, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{indicator}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA */}
                <Button 
                  onClick={() => country.partner_contact_url ? window.open(country.partner_contact_url, '_blank') : navigate('/contact')}
                  className="webfx-button-primary"
                >
                  Meet the {country.name.split('(')[0].trim()} Partner
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
