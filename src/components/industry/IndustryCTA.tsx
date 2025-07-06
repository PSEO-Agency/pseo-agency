
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone, Calendar } from "lucide-react";
import { useState } from "react";
import { AuditModal } from "../AuditModal";

interface IndustryCTAProps {
  industry: {
    name: string;
    [key: string]: any;
  };
}

export const IndustryCTA = ({ industry }: IndustryCTAProps) => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight text-balance">
            Ready to Transform Your
            <span className="webfx-text-gradient block mt-2">{industry.name} Business?</span>
          </h2>
          
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
            Join hundreds of successful {industry.name.toLowerCase()} businesses that have scaled their organic presence with our specialized programmatic SEO approach.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <Button 
                className="webfx-button-primary text-lg px-8 py-6 h-auto"
                onClick={() => setIsAuditModalOpen(true)}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Get Free {industry.name} Analysis
              </Button>
            </div>
            
            <div className="flex items-center justify-center sm:justify-start space-x-3 text-blue-200 mt-4">
              <CheckCircle2 className="h-5 w-5 text-green-400" />
              <span className="text-sm">Free consultation • No commitment • {industry.name} specialists</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-6">
                  {industry.name} ROI Calculator
                </div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-blue-200">Current Monthly Traffic:</span>
                    <span className="font-bold text-white text-lg">15,000 visitors</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-blue-200">Projected Growth:</span>
                    <span className="font-bold text-green-300 text-xl">+450% (82,500)</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-blue-200">Industry Conversion Rate:</span>
                    <span className="font-bold text-white text-lg">3.2%</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-blue-200">Additional Monthly Revenue:</span>
                    <span className="font-bold text-green-300 text-2xl">$125,000+</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-500/20 rounded-xl border border-green-400/20">
                  <p className="text-green-300 text-sm text-center font-medium">
                    * Based on average {industry.name.toLowerCase()} client results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuditModal 
        isOpen={isAuditModalOpen} 
        onClose={() => setIsAuditModalOpen(false)} 
      />
    </section>
  );
};
