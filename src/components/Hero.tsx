
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, TrendingUp, Target, Database, Palette, Server } from "lucide-react";
import { useState } from "react";
import { AuditModal } from "./AuditModal";

export const Hero = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuditModalOpen(true);
  };

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-24 relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-400 rounded-full blur-3xl opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center bg-blue-800/30 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-blue-400/20">
              <span className="text-blue-200 text-sm font-medium">🚀 Trusted by 2,500+ businesses worldwide</span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-bold leading-tight mb-8">
              Unlock Revenue Growth through
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent block mt-2"> Programmatic SEO</span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
              Scale your organic traffic and revenue with our data-driven programmatic SEO strategies. 
              We create thousands of high-converting pages that rank and drive qualified leads to your business.
            </p>
            
            {/* Enhanced Website URL Input Form */}
            <form onSubmit={handleSubmit} className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 bg-white/10 backdrop-blur-lg rounded-2xl p-2 border border-white/20">
                <div className="flex-1">
                  <Input
                    type="url"
                    placeholder="Enter your website URL"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="bg-transparent border-none text-white placeholder:text-blue-200 h-14 text-lg focus:ring-0 focus-visible:ring-0"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg" 
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-lg px-8 py-4 h-14 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get My SEO Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
            
            <div className="flex items-center space-x-6 text-blue-200">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">$6B+ in client revenue generated</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <span className="text-sm">45K+ keywords ranking</span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Process Flow Diagram */}
          <div className="relative">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-3">Our Programmatic SEO Process</h3>
              <p className="text-blue-200 text-lg">How we scale your organic traffic</p>
            </div>
            
            <div className="space-y-6">
              {/* Step 1 */}
              <div className="flex items-center space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-lg">
                    <h4 className="font-bold text-white mb-2 text-lg">1. Data Analysis</h4>
                    <p className="text-blue-100">Identify high-volume keywords and define dynamic entities</p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-center space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <Palette className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-lg">
                    <h4 className="font-bold text-white mb-2 text-lg">2. Dynamic Template Design</h4>
                    <p className="text-blue-100">Create scalable page templates with dynamic content</p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-center space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-lg">
                    <h4 className="font-bold text-white mb-2 text-lg">3. pSEO Database Setup</h4>
                    <p className="text-blue-100">Build structured data foundation for content generation</p>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex items-center space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <Server className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-lg">
                    <h4 className="font-bold text-white mb-2 text-lg">4. Page Generation</h4>
                    <p className="text-blue-100">Automatically create thousands of optimized pages</p>
                  </div>
                </div>
              </div>
              
              {/* Step 5 */}
              <div className="flex items-center space-x-6 group">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:shadow-lg">
                    <h4 className="font-bold text-white mb-2 text-lg">5. Traffic Growth & Revenue Impact</h4>
                    <p className="text-blue-100">Scale organic traffic, increase search visibility, and measure ROI</p>
                  </div>
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
