
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";
import { AuditModal } from "./AuditModal";

export const Hero = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

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
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4"
                onClick={() => setIsAuditModalOpen(true)}
              >
                Get My SEO Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-blue-900 text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Watch Case Study
              </Button>
            </div>
            <div className="mt-8 text-sm text-blue-200">
              🏆 Trusted by 2,500+ businesses worldwide • 📈 $6B+ in client revenue generated
            </div>
          </div>
          
          {/* Right side with stats/visual elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-blue-300">500%</div>
                <div className="text-sm text-blue-100">Avg Traffic Increase</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-green-300">300%</div>
                <div className="text-sm text-blue-100">Revenue Growth</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-purple-300">10K+</div>
                <div className="text-sm text-blue-100">Pages Created</div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300">95%</div>
                <div className="text-sm text-blue-100">Client Retention</div>
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
