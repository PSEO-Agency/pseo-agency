import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { AuditModal } from "../AuditModal";
import { Json } from "@/integrations/supabase/types";

interface IndustryHeroProps {
  industry: {
    title: string;
    name: string;
    description?: string | null;
    hero_image_url?: string | null;
    stats?: Json;
    [key: string]: any;
  };
}

export const IndustryHero = ({ industry }: IndustryHeroProps) => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  
  // Safely convert Json to object with stats
  const stats = industry.stats && typeof industry.stats === 'object' ? industry.stats as Record<string, any> : {};
  
  const defaultStats = {
    "companies_served": "500+",
    "revenue_generated": "$50M+",
    "average_growth": "300%"
  };

  const displayStats = Object.keys(stats).length > 0 ? stats : defaultStats;

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center bg-blue-500/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-blue-400/30">
              <CheckCircle className="h-5 w-5 text-blue-300 mr-2" />
              <span className="text-blue-200 text-sm font-bold">INDUSTRY EXPERTISE</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              Programmatic SEO for <span className="webfx-text-gradient">{industry.name}</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-10 leading-relaxed">
              {industry.description || `Specialized programmatic SEO strategies designed specifically for ${industry.name.toLowerCase()} businesses. Scale your organic presence with industry-specific content automation and targeted keyword strategies.`}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                className="webfx-button-primary text-lg px-8 py-6 h-auto"
                onClick={() => setIsAuditModalOpen(true)}
              >
                Get Free Industry Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-3 text-blue-200">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-sm">Tailored to {industry.name} • Free consultation</span>
              </div>
            </div>

            {/* Industry Stats */}
            <div className="grid grid-cols-3 gap-6">
              {Object.entries(displayStats).slice(0, 3).map(([key, value], index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl sm:text-3xl font-black text-green-300 mb-2">
                    {String(value)}
                  </div>
                  <div className="text-sm text-blue-200 capitalize">
                    {key.replace(/_/g, ' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-4">
                  {industry.name} Success Metrics
                </div>
                <div className="space-y-4">
                  {Object.entries(displayStats).map(([key, value], index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-white/20 last:border-b-0">
                      <span className="text-blue-200 capitalize">{key.replace(/_/g, ' ')}:</span>
                      <span className="font-bold text-white text-lg">{String(value)}</span>
                    </div>
                  ))}
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
