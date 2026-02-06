import { Button } from "@/components/ui/button";
import { Country } from "@/hooks/useCountries";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Phone, Rocket } from "lucide-react";

interface CountryCTAProps {
  country: Country;
}

export const CountryCTA = ({ country }: CountryCTAProps) => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 mb-8 shadow-lg shadow-blue-500/30">
            <Rocket className="w-10 h-10 text-white" />
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Scale SEO Growth in {country.name.split('(')[0].trim()}?
          </h2>
          
          {/* Description */}
          <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
            Book a call with our team
            {country.partner_name && (
              <> or directly with {country.partner_name}</>
            )} to launch a scalable Programmatic SEO growth engine.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={() => navigate('/strategy-call')}
              className="webfx-button-primary px-10 py-6 text-lg font-bold shadow-lg hover:shadow-xl"
            >
              Book Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              onClick={() => country.partner_contact_url ? window.open(country.partner_contact_url, '_blank') : navigate('/contact')}
              variant="outline"
              className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg font-bold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact {country.name.split('(')[0].trim()} Partner
            </Button>
          </div>
          
          {/* Phone number */}
          <p className="mt-8 text-blue-200/60">
            Or call us directly: <span className="text-white font-semibold">+31 (0) 85 060 1065</span>
          </p>
        </div>
      </div>
    </section>
  );
};
