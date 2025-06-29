
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle2, Users, Award, Target } from "lucide-react";
import { useState } from "react";
import { AuditModal } from "./AuditModal";

export const IndustriesSection = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const industries = [
    "E-commerce", "SaaS", "Real Estate", "Healthcare", "Finance", "Education",
    "Travel", "Automotive", "Legal", "Manufacturing", "Technology", "Retail"
  ];

  const achievements = [
    { icon: Users, label: "95%", description: "Client Satisfaction", color: "text-green-500" },
    { icon: Award, label: "24/7", description: "Support Available", color: "text-blue-500" },
    { icon: Star, label: "90+", description: "Net Promoter Score", color: "text-purple-500" },
    { icon: Target, label: "5-Star", description: "Average Rating", color: "text-orange-500" }
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
            <Users className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm font-bold">INDUSTRY EXPERTISE</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight text-balance">
            Helping Businesses in 
            <span className="webfx-text-gradient block mt-2">200+ Different Industries</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our programmatic SEO expertise spans across every major industry, 
            delivering tailored strategies that drive results regardless of your sector.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {industries.map((industry, index) => (
            <div key={index} className="webfx-card p-6 text-center group hover:scale-105 transition-all duration-300">
              <div className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{industry}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
                Boost Your Business Goals
              </h3>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Whether you're looking to increase brand awareness, generate more leads, 
                or drive direct sales, our programmatic SEO strategies are designed to meet your specific objectives.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  className="webfx-button-primary text-lg px-10 py-6 h-auto"
                  onClick={() => setIsAuditModalOpen(true)}
                >
                  Speak with a Strategist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <div className="flex items-center space-x-3 text-blue-200">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <span className="text-sm">Free consultation • No commitment</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => {
                const IconComponent = achievement.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className={`h-6 w-6 ${achievement.color}`} />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{achievement.label}</div>
                    <div className="text-sm text-blue-200">{achievement.description}</div>
                  </div>
                );
              })}
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
