import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Handshake, ArrowRight, Globe, Users, TrendingUp } from "lucide-react";

export const PartnerCTA = () => {
  const navigate = useNavigate();
  
  const partnerBenefits = [
    { icon: Globe, text: "Access our proven pSEO methodology" },
    { icon: Users, text: "Join our global partner network" },
    { icon: TrendingUp, text: "Grow your agency with new services" },
  ];
  
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 mb-8 shadow-lg shadow-orange-500/30">
            <Handshake className="w-10 h-10 text-white" />
          </div>
          
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Want to Become Our Regional Partner?
          </h2>
          
          {/* Description */}
          <p className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto">
            We're building a global network of elite SEO and growth partners. 
            Apply to represent Programmatic SEO B.V. in your market.
          </p>
          
          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {partnerBenefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10"
              >
                <benefit.icon className="w-5 h-5 text-blue-300" />
                <span className="text-white/90 font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <Button 
            onClick={() => navigate('/contact')}
            className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-10 py-6 text-lg font-bold rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300"
          >
            Apply as Partner
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          
          <p className="mt-6 text-blue-200/60 text-sm">
            We carefully select partners who share our commitment to excellence
          </p>
        </div>
      </div>
    </section>
  );
};
