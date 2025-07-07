
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Zap, Users, Target } from "lucide-react";
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
  
  // Industry-specific process steps
  const getProcessSteps = () => {
    const industryName = industry.name.toLowerCase();
    if (industryName === 'saas') {
      return [
        { icon: Target, title: "Competition Analysis", description: "Analyze your SaaS competitors and identify content gaps" },
        { icon: Zap, title: "Feature Content Strategy", description: "Create comparison and feature-focused content at scale" },
        { icon: Users, title: "User Journey Optimization", description: "Build content for every stage of the SaaS buyer journey" },
        { icon: CheckCircle, title: "Conversion Tracking", description: "Monitor and optimize for trial signups and conversions" }
      ];
    } else if (industryName === 'local business') {
      return [
        { icon: Target, title: "Local Market Research", description: "Analyze local search patterns and competitor presence" },
        { icon: Zap, title: "Service Area Optimization", description: "Create location-specific pages for all service areas" },
        { icon: Users, title: "Local Citation Building", description: "Establish consistent NAP across all local directories" },
        { icon: CheckCircle, title: "GMB Optimization", description: "Optimize Google My Business for maximum local visibility" }
      ];
    } else if (industryName === 'accounting firm') {
      return [
        { icon: Target, title: "Service Analysis", description: "Identify high-value accounting and tax services to target" },
        { icon: Zap, title: "Seasonal Content Creation", description: "Build content calendars around tax seasons and deadlines" },
        { icon: Users, title: "Trust Building Content", description: "Create authority content showcasing expertise and credentials" },
        { icon: CheckCircle, title: "Lead Qualification", description: "Optimize for high-value client inquiries and consultations" }
      ];
    } else if (industryName === 'law firm') {
      return [
        { icon: Target, title: "Practice Area Focus", description: "Identify and target high-value practice area keywords" },
        { icon: Zap, title: "Legal Content Creation", description: "Develop authoritative legal resource and FAQ content" },
        { icon: Users, title: "Attorney Profiles", description: "Showcase attorney expertise and case successes" },
        { icon: CheckCircle, title: "Case Generation", description: "Optimize for qualified legal consultation requests" }
      ];
    }
    return [
      { icon: Target, title: "Industry Analysis", description: "Deep dive into your industry's search landscape" },
      { icon: Zap, title: "Content Strategy", description: "Develop industry-specific content at scale" },
      { icon: Users, title: "Audience Targeting", description: "Create content for your ideal customer profile" },
      { icon: CheckCircle, title: "Performance Optimization", description: "Monitor and optimize for industry-specific KPIs" }
    ];
  };

  const processSteps = getProcessSteps();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
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

            <div className="flex flex-col sm:flex-row gap-4">
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
          </div>

          {/* Process Steps */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our {industry.name} Process</h3>
                <p className="text-blue-200">How we deliver results for {industry.name.toLowerCase()} businesses</p>
              </div>
              
              <div className="space-y-6">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  const colors = ["bg-blue-500", "bg-purple-500", "bg-green-500", "bg-orange-500"];
                  
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 ${colors[index]} rounded-xl flex items-center justify-center relative`}>
                        <IconComponent className="h-6 w-6 text-white" />
                        <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-green-900">
                          {index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white mb-2">{step.title}</h4>
                        <p className="text-blue-200 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
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
