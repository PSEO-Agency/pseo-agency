
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
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Unlock Revenue Growth through
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Programmatic SEO</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Scale your organic traffic and revenue with our data-driven programmatic SEO strategies. 
              We create thousands of high-converting pages that rank and drive qualified leads to your business.
            </p>
            
            {/* Website URL Input Form */}
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="url"
                    placeholder="Enter your website URL"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 h-12 text-lg backdrop-blur-sm"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 h-12"
                >
                  Get My SEO Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
            
            <div className="text-sm text-blue-200">
              🏆 Trusted by 2,500+ businesses worldwide • 📈 $6B+ in client revenue generated
            </div>
          </div>
          
          {/* Process Flow Diagram */}
          <div className="relative">
            <div className="text-center mb-4">
              <h3 className="text-2xl font-bold text-white mb-2">Our Programmatic SEO Process</h3>
              <p className="text-blue-200">How we scale your organic traffic</p>
            </div>
            
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-1">1. Data Analysis</h4>
                    <p className="text-sm text-blue-100">Identify high-volume keywords and define dynamic entities</p>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                  <Palette className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-1">2. Dynamic Template Design</h4>
                    <p className="text-sm text-blue-100">Create scalable page templates with dynamic content</p>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-1">3. pSEO Database Setup</h4>
                    <p className="text-sm text-blue-100">Build structured data foundation for content generation</p>
                  </div>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-1">4. Page Generation</h4>
                    <p className="text-sm text-blue-100">Automatically create thousands of optimized pages</p>
                  </div>
                </div>
              </div>
              
              {/* Combined Step 5 (formerly steps 5 and 6) */}
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-600 to-red-600 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
                    <h4 className="font-semibold text-white mb-1">5. Traffic Growth & Revenue Impact</h4>
                    <p className="text-sm text-blue-100">Scale organic traffic, increase search visibility, and measure ROI</p>
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
