
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, MousePointer, Target, DollarSign, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { AuditModal } from "./AuditModal";

export const KPISection = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const kpis = [
    { 
      icon: TrendingUp,
      label: "Traffic", 
      value: "800%", 
      description: "Average increase",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-100"
    },
    { 
      icon: Users,
      label: "Leads", 
      value: "450%", 
      description: "More qualified leads",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-100"
    },
    { 
      icon: MousePointer,
      label: "CTR", 
      value: "25%", 
      description: "Click-through rate",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-100"
    },
    { 
      icon: Target,
      label: "Rankings", 
      value: "Page 1", 
      description: "Average position",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-100"
    },
    { 
      icon: DollarSign,
      label: "Revenue", 
      value: "300%", 
      description: "ROI improvement",
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-100"
    },
    { 
      icon: Zap,
      label: "Conversion", 
      value: "15%", 
      description: "Rate increase",
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-100"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
            <Target className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm font-bold">KEY PERFORMANCE INDICATORS</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight text-balance">
            Improve the KPIs That Matter Most
            <span className="webfx-text-gradient block mt-2">to Your Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our programmatic SEO strategies are designed to impact the metrics that directly 
            contribute to your bottom line and business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {kpis.map((kpi, index) => {
            const IconComponent = kpi.icon;
            return (
              <div key={index} className={`webfx-card p-8 text-center group hover:scale-105 transition-all duration-300`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${kpi.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">{kpi.value}</div>
                <div className="text-xl font-bold text-gray-900 mb-2">{kpi.label}</div>
                <div className="text-gray-600">{kpi.description}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid lg:grid-cols-2 items-center relative">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
            </div>
            
            <div className="p-12 lg:p-16 relative z-10">
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-white text-balance">
                Boost your website traffic and visibility
              </h3>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Our comprehensive programmatic SEO audit will identify exactly how to improve your 
                organic performance and scale your content strategy for maximum impact.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-blue-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Complete technical SEO analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Keyword opportunity assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Competitor gap analysis</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                  <span className="text-sm">Content scalability roadmap</span>
                </div>
              </div>
              
              <Button 
                className="webfx-button-primary text-lg px-10 py-6 h-auto"
                onClick={() => setIsAuditModalOpen(true)}
              >
                Get My Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-12 lg:p-16 border-l border-white/20 relative z-10">
              <h4 className="text-2xl font-bold text-white mb-8">Get Your Free SEO Audit</h4>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsAuditModalOpen(true); }}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-4 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/10 backdrop-blur-sm text-white placeholder:text-blue-200"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-6 py-4 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/10 backdrop-blur-sm text-white placeholder:text-blue-200"
                  required
                />
                <input
                  type="url"
                  placeholder="Website URL"
                  className="w-full px-6 py-4 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/10 backdrop-blur-sm text-white placeholder:text-blue-200"
                  required
                />
                <button 
                  type="submit"
                  className="w-full bg-white text-blue-900 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Get My Free Audit
                </button>
              </form>
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
