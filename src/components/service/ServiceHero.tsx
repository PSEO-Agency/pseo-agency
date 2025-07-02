
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle2, Star, Award } from "lucide-react";
import { useState } from "react";
import { AuditModal } from "@/components/AuditModal";

interface ServiceHeroProps {
  service: {
    title: string;
    description?: string;
    hero_image_url?: string;
    features?: string[];
  };
}

export const ServiceHero = ({ service }: ServiceHeroProps) => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuditModalOpen(true);
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 lg:w-96 lg:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 lg:w-80 lg:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="h-full w-full" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-6">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Award className="h-4 w-4 text-yellow-400 mr-2" />
                  <span className="text-blue-200 text-sm font-semibold">Expert Service</span>
                </div>
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <Star className="h-4 w-4 text-yellow-400 mr-2" />
                  <span className="text-blue-200 text-sm font-semibold">5-Star Results</span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-balance">
                {service.title}
              </h1>
              
              {service.description && (
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  {service.description}
                </p>
              )}

              {/* Key benefits */}
              {service.features && Array.isArray(service.features) && service.features.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {service.features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                      <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-sm font-medium text-white">{feature}</span>
                    </div>
                  ))}
                </div>
              )}
              
              {/* CTA Form */}
              <form onSubmit={handleSubmit} className="mb-6">
                <div className="flex flex-col gap-3 bg-white/10 backdrop-blur-lg rounded-2xl p-3 border border-white/20 shadow-2xl">
                  <Input
                    type="url"
                    placeholder="Enter your website URL"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="bg-transparent border-none text-white placeholder:text-blue-200 h-12 text-base focus:ring-0 focus-visible:ring-0"
                    required
                  />
                  <Button 
                    type="submit"
                    size="lg" 
                    className="webfx-button-primary h-12 px-6 text-base font-bold shadow-xl"
                  >
                    Get My Free {service.title} Strategy
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                <p className="text-blue-200 text-sm mt-3 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                  Free consultation • No commitment • Results in 24 hours
                </p>
              </form>
            </div>
            
            {/* Hero Image */}
            <div className="relative">
              {service.hero_image_url ? (
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={service.hero_image_url} 
                    alt={service.title}
                    className="w-full h-auto"
                  />
                </div>
              ) : (
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-3xl font-bold text-green-300 mb-6">Service Benefits</div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="text-blue-200">Faster Results:</span>
                      <span className="font-bold text-white text-lg">90% quicker</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-white/20">
                      <span className="text-blue-200">Cost Efficiency:</span>
                      <span className="font-bold text-green-300 text-xl">60% savings</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="text-blue-200">Success Rate:</span>
                      <span className="font-bold text-green-300 text-2xl">95%+</span>
                    </div>
                  </div>
                </div>
              )}
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
