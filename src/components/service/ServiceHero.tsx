import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, TrendingUp, Target, Database, Palette, Server, CheckCircle2, Users, Award } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Json } from "@/integrations/supabase/types";

interface ServiceHeroProps {
  service: {
    title: string;
    description?: string | null;
    hero_image_url?: string | null;
    features?: Json;
    [key: string]: any;
  };
}

export const ServiceHero = ({ service }: ServiceHeroProps) => {
  const [domain, setDomain] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to the free strategy page with domain parameter
    navigate(`/free-strategy?domain=${encodeURIComponent(domain)}`);
  };

  // Get service-specific title and description
  const getServiceTitle = () => {
    if (service.title.toLowerCase().includes('programmatic')) {
      return 'Programmatic SEO';
    }
    return service.title;
  };

  const getServiceDescription = () => {
    if (service.title.toLowerCase().includes('programmatic')) {
      return 'Automatically generate thousands of SEO-optimized pages that rank on Google and drive qualified traffic to your business. Our data-driven programmatic SEO approach scales your organic presence exponentially.';
    }
    return service.description || `Scale your organic traffic exponentially with our data-driven ${service.title} strategies. We create thousands of high-converting pages that rank on page 1 and drive qualified leads to your business.`;
  };

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 lg:w-96 lg:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 lg:w-80 lg:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10 py-6 sm:py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          <div className="max-w-3xl">
            {/* Trust indicators - Mobile optimized */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 lg:gap-6 mb-3 sm:mb-4 lg:mb-6">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20">
                <Award className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 mr-1.5 sm:mr-2" />
                <span className="text-blue-200 text-xs font-semibold whitespace-nowrap">Award-Winning SEO</span>
              </div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 border border-white/20">
                <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 mr-1.5 sm:mr-2" />
                <span className="text-blue-200 text-xs font-semibold whitespace-nowrap">10X Your Traffic</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-3 sm:mb-4 lg:mb-6 text-balance">
              Drive More Revenue Through
              <span className="block webfx-text-gradient mt-1 sm:mt-2">{getServiceTitle()}</span>
            </h1>
            
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-3 sm:mb-4 lg:mb-6 leading-relaxed max-w-2xl">
              {getServiceDescription()}
            </p>

            {/* Key benefits - Mobile optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 lg:mb-6">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 border border-white/20">
                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white">500% Traffic Growth</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 border border-white/20">
                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white">100+ Projects</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 border border-white/20 sm:col-span-2 lg:col-span-1">
                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white">1M+ Pages Generated</span>
              </div>
            </div>
            
            {/* Enhanced Mobile-First Form */}
            <form onSubmit={handleSubmit} className="mb-3 sm:mb-4 lg:mb-6">
              <div className="flex flex-col gap-3 bg-white/10 backdrop-blur-lg rounded-2xl p-2 sm:p-3 border border-white/20 shadow-2xl">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Enter your domain (e.g., example.com)"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="bg-transparent border-none text-white placeholder:text-blue-200 h-10 sm:h-12 lg:h-14 text-sm sm:text-base lg:text-lg focus:ring-0 focus-visible:ring-0"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg" 
                  className="webfx-button-primary h-10 sm:h-12 lg:h-14 px-4 sm:px-6 lg:px-8 text-sm sm:text-base lg:text-lg font-bold shadow-xl w-full sm:w-auto"
                >
                  <span className="hidden sm:inline">Get My Free SEO Strategy</span>
                  <span className="sm:hidden">Get Free Strategy</span>
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
              </div>
              <p className="text-blue-200 text-xs sm:text-sm mt-2 sm:mt-3 flex items-center justify-center sm:justify-start">
                <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 mr-2 text-green-400" />
                Free audit • No commitment • Report in 24 hours
              </p>
            </form>
          </div>
          
          {/* Process Flow - Mobile optimized */}
          <div className="relative">
            <div className="text-center mb-4 sm:mb-6 lg:mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mb-2 sm:mb-3 text-balance">Our Proven Process</h3>
              <p className="text-blue-200 text-sm sm:text-base lg:text-lg">Systematic organic growth</p>
            </div>
            
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              {/* Steps - Mobile optimized with visible labels */}
              <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6 group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 relative">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 lg:h-8 lg:w-8 text-white" />
                  <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-green-900">1</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="webfx-card p-3 sm:p-4 lg:p-6">
                    <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg lg:text-xl">Data Analysis & Research</h4>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Identify high-volume keywords, dynamic data sources and analyze competitors for maximum impact.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6 group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 relative">
                  <Palette className="h-4 w-4 sm:h-5 sm:w-5 lg:h-8 lg:w-8 text-white" />
                  <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-green-900">2</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="webfx-card p-3 sm:p-4 lg:p-6">
                    <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg lg:text-xl">Template Development</h4>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Create scalable, SEO-optimized templates for mass page generation.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6 group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 relative">
                  <Database className="h-4 w-4 sm:h-5 sm:w-5 lg:h-8 lg:w-8 text-white" />
                  <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-green-900">3</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="webfx-card p-3 sm:p-4 lg:p-6">
                    <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg lg:text-xl">Database & Content Setup</h4>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Build structured data foundations to power thousands of unique pages.</p>
                  </div>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4 lg:space-x-6 group">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 relative">
                  <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 lg:h-8 lg:w-8 text-white" />
                  <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-green-900">4</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="webfx-card p-3 sm:p-4 lg:p-6">
                    <h4 className="font-bold text-gray-900 mb-1 sm:mb-2 text-base sm:text-lg lg:text-xl">Scale & Traffic Growth</h4>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Launch thousands of optimized pages and track performance for maximum traffic growth.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
