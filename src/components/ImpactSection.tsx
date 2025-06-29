
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, DollarSign, Target, CheckCircle2, Award, Zap } from "lucide-react";
import { useState } from "react";
import { AuditModal } from "./AuditModal";

export const ImpactSection = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const stats = [
    {
      number: "800%",
      label: "Average organic traffic increase",
      subtext: "within 12 months",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "45,000+",
      label: "Keywords ranking on page 1",
      subtext: "across all client accounts",
      icon: Target,
      color: "from-green-500 to-green-600"
    },
    {
      number: "$2.4B+",
      label: "Revenue generated for clients",
      subtext: "through programmatic SEO",
      icon: DollarSign,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "2,500+",
      label: "Businesses trust our expertise",
      subtext: "worldwide",
      icon: Users,
      color: "from-orange-500 to-red-500"
    }
  ];

  const achievements = [
    {
      title: "Award-Winning Agency",
      description: "Recognized industry leader in programmatic SEO",
      icon: Award
    },
    {
      title: "Rapid Implementation",
      description: "See results in as little as 30-90 days",
      icon: Zap
    },
    {
      title: "Proven Track Record",
      description: "8+ years of programmatic SEO expertise",
      icon: CheckCircle2
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
            <TrendingUp className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm font-bold">PROVEN RESULTS</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight text-balance">
            The Revenue Impact of
            <span className="webfx-text-gradient block mt-2">Programmatic SEO</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our data-driven programmatic SEO strategies have helped thousands of businesses 
            achieve unprecedented growth in organic traffic, search rankings, and most importantly - revenue.
          </p>
        </div>

        {/* Enhanced stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="webfx-stats-card text-center group hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-5xl font-black text-gray-900 mb-3">{stat.number}</div>
                <div className="text-lg font-bold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.subtext}</div>
              </div>
            );
          })}
        </div>

        {/* Achievement highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="webfx-card p-8 text-center group hover:scale-105 transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            );
          })}
        </div>

        {/* Enhanced CTA section */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Ready to 10x Your Organic Traffic?
              </h3>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Our team of programmatic SEO experts will create a custom strategy that scales 
                your content, dominates search rankings, and drives qualified leads to your business.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="webfx-button-primary text-lg px-10 py-6 h-auto"
                  onClick={() => setIsAuditModalOpen(true)}
                >
                  Get Your Free SEO Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex items-center space-x-3 text-blue-200">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Free consultation • No commitment</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-3xl font-bold text-green-300 mb-6">ROI Calculator Preview</div>
                <div className="space-y-6">
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-blue-200">Current Monthly Traffic:</span>
                    <span className="font-bold text-white text-lg">10,000 visitors</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-white/20">
                    <span className="text-blue-200">Projected Growth:</span>
                    <span className="font-bold text-green-300 text-xl">+800% (90,000)</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-blue-200">Additional Monthly Revenue:</span>
                    <span className="font-bold text-green-300 text-2xl">$85,000+</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-green-500/20 rounded-xl border border-green-400/20">
                  <p className="text-green-300 text-sm text-center font-medium">
                    * Based on average client results
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
