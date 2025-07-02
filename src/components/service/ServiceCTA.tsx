
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone, Calendar } from "lucide-react";
import { useState } from "react";
import { AuditModal } from "@/components/AuditModal";

interface ServiceCTAProps {
  service: {
    title: string;
  };
}

export const ServiceCTA = ({ service }: ServiceCTAProps) => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight text-balance">
              Ready to Transform Your Business with Our
              <span className="webfx-text-gradient block mt-2">{service.title}?</span>
            </h2>
            
            <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join thousands of businesses that have achieved remarkable growth with our expert {service.title.toLowerCase()} service. 
              Get your free consultation today and discover how we can help you succeed.
            </p>

            {/* Benefits grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <CheckCircle2 className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Free Consultation</h3>
                <p className="text-blue-200">No commitment required - get expert advice tailored to your business</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Calendar className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Quick Implementation</h3>
                <p className="text-blue-200">Start seeing results within 30-60 days of implementation</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <Phone className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Dedicated Support</h3>
                <p className="text-blue-200">24/7 access to our expert team and account managers</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button 
                className="webfx-button-primary text-lg px-12 py-6 h-auto shadow-2xl hover:shadow-blue-500/25"
                onClick={() => setIsAuditModalOpen(true)}
              >
                Get My Free {service.title} Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <Phone className="h-5 w-5 text-white" />
                <div>
                  <div className="text-sm text-blue-200">Call Now:</div>
                  <div className="font-bold text-white">+31 (0) 85 060 1065</div>
                </div>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-blue-200">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-sm">Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-sm">No long-term contracts</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-sm">Results in 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AuditModal 
        isOpen={isAuditModalOpen} 
        onClose={() => setIsAuditModalOpen(false)} 
      />
    </>
  );
};
