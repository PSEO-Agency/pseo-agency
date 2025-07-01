
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, TrendingUp, Target, Database, Palette, Server, CheckCircle2, Users, Award, ChevronDown } from "lucide-react";
import { useState } from "react";
import { AuditModal } from "./AuditModal";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

export const Hero = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [isProcessOpen, setIsProcessOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuditModalOpen(true);
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
      
      <div className="container mx-auto px-4 lg:px-6 relative z-10 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="max-w-3xl">
            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 mb-6 lg:mb-8">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Award className="h-4 w-4 text-yellow-400 mr-2" />
                <span className="text-blue-200 text-xs sm:text-sm font-semibold">Award-Winning SEO Agency</span>
              </div>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <Users className="h-4 w-4 text-green-400 mr-2" />
                <span className="text-blue-200 text-xs sm:text-sm font-semibold">2,500+ Happy Clients</span>
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 lg:mb-8 text-balance">
              Drive More Revenue Through
              <span className="block webfx-text-gradient mt-2">Programmatic SEO</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-blue-100 mb-6 lg:mb-10 leading-relaxed max-w-2xl">
              Scale your organic traffic exponentially with our data-driven programmatic SEO strategies. 
              We create thousands of high-converting pages that rank on page 1 and drive qualified leads to your business.
            </p>

            {/* Key benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 mb-6 lg:mb-10">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white">800% Avg Traffic Growth</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white">45K+ Keywords Ranking</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white">$2.4B+ Revenue Generated</span>
              </div>
            </div>
            
            {/* Enhanced Website URL Input Form */}
            <form onSubmit={handleSubmit} className="mb-6 lg:mb-10">
              <div className="flex flex-col sm:flex-row gap-3 bg-white/10 backdrop-blur-lg rounded-2xl p-2 lg:p-3 border border-white/20 shadow-2xl">
                <div className="flex-1">
                  <Input
                    type="url"
                    placeholder="Enter your website URL (e.g., yoursite.com)"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="bg-transparent border-none text-white placeholder:text-blue-200 h-12 lg:h-14 text-base lg:text-lg focus:ring-0 focus-visible:ring-0"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg" 
                  className="webfx-button-primary h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg font-bold shadow-xl"
                >
                  <span className="hidden sm:inline">Get My Free SEO Strategy</span>
                  <span className="sm:hidden">Get Free Strategy</span>
                  <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
              </div>
              <p className="text-blue-200 text-xs sm:text-sm mt-3 flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                Free audit • No commitment • Results in 24 hours
              </p>
            </form>
          </div>
          
          {/* Collapsible Process Flow Visualization */}
          <div className="relative">
            <div className="text-center mb-8 lg:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 text-balance">Our Proven Programmatic SEO Process</h3>
              <p className="text-blue-200 text-base lg:text-lg">How we systematically scale your organic growth</p>
            </div>
            
            <Collapsible open={isProcessOpen} onOpenChange={setIsProcessOpen}>
              <CollapsibleTrigger className="w-full flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 border border-white/20 hover:bg-white/20 transition-all duration-200 mb-6">
                <span className="text-white font-semibold">View Our 4-Step Process</span>
                <ChevronDown className={`h-5 w-5 text-white transition-transform duration-200 ${isProcessOpen ? 'transform rotate-180' : ''}`} />
              </CollapsibleTrigger>
              
              <CollapsibleContent className="space-y-6 lg:space-y-8">
                {/* Enhanced process steps with better visual hierarchy */}
                <div className="flex items-center space-x-4 lg:space-x-6 group">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 relative">
                    <Search className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-green-900">1</div>
                  </div>
                  <div className="flex-1">
                    <div className="webfx-card p-4 lg:p-8 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-blue-50">
                      <h4 className="font-bold text-gray-900 mb-2 lg:mb-3 text-lg lg:text-xl">Data Analysis & Research</h4>
                      <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">Identify high-volume keywords, analyze competitors, and define dynamic content entities for maximum impact.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 lg:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs lg:text-sm font-medium">Keyword Research</span>
                        <span className="px-2 lg:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs lg:text-sm font-medium">Competitor Analysis</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 lg:space-x-6 group">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 relative">
                    <Palette className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-green-900">2</div>
                  </div>
                  <div className="flex-1">
                    <div className="webfx-card p-4 lg:p-8 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-purple-50">
                      <h4 className="font-bold text-gray-900 mb-2 lg:mb-3 text-lg lg:text-xl">Template Development</h4>
                      <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">Create scalable, SEO-optimized page templates with dynamic content placeholders for mass generation.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 lg:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs lg:text-sm font-medium">Dynamic Templates</span>
                        <span className="px-2 lg:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs lg:text-sm font-medium">SEO Optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 lg:space-x-6 group">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 relative">
                    <Database className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-green-900">3</div>
                  </div>
                  <div className="flex-1">
                    <div className="webfx-card p-4 lg:p-8 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-green-50">
                      <h4 className="font-bold text-gray-900 mb-2 lg:mb-3 text-lg lg:text-xl">Database & Content Setup</h4>
                      <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">Build structured data foundations and content databases to power thousands of unique, valuable pages.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 lg:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs lg:text-sm font-medium">Data Structuring</span>
                        <span className="px-2 lg:px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs lg:text-sm font-medium">Content Database</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 lg:space-x-6 group">
                  <div className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 relative">
                    <Target className="h-8 w-8 lg:h-10 lg:w-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-green-900">4</div>
                  </div>
                  <div className="flex-1">
                    <div className="webfx-card p-4 lg:p-8 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-orange-50">
                      <h4 className="font-bold text-gray-900 mb-2 lg:mb-3 text-lg lg:text-xl">Scale & Revenue Growth</h4>
                      <p className="text-gray-600 mb-3 lg:mb-4 text-sm lg:text-base">Launch thousands of optimized pages, track performance, and optimize for maximum revenue impact.</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 lg:px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs lg:text-sm font-medium">Performance Tracking</span>
                        <span className="px-2 lg:px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs lg:text-sm font-medium">Revenue Optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CollapsibleContent>
            </Collapsible>
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
