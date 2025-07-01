
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp, DollarSign, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { AuditModal } from "./AuditModal";

export const RevenueProof = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  const caseStudies = [
    {
      company: "TechFlow Solutions",
      industry: "SaaS Technology",
      trafficIncrease: "950%",
      revenueIncrease: "$1.2M",
      timeframe: "14 months",
      description: "Revolutionary programmatic SEO strategy that transformed our B2B lead generation. Within 14 months, we went from 50 organic leads per month to over 500, with our MRR growing from $80K to $180K monthly.",
      rating: 5,
      color: "from-blue-500 to-blue-600"
    },
    {
      company: "Urban Retail Co.",
      industry: "E-commerce",
      trafficIncrease: "1,400%",
      revenueIncrease: "$2.8M",
      timeframe: "18 months",
      description: "The programmatic approach to product and category pages was game-changing. Our organic traffic exploded from 25K to 375K monthly visitors, directly contributing to a 240% increase in online revenue.",
      rating: 5,
      color: "from-green-500 to-green-600"  
    },
    {
      company: "HealthTech Innovations",
      industry: "Healthcare Technology",
      trafficIncrease: "750%",
      revenueIncrease: "$950K",
      timeframe: "12 months",
      description: "Exceptional results in the competitive healthcare space. The location-based landing pages and condition-specific content drove qualified traffic that converted 3x better than our previous campaigns.",
      rating: 5,
      color: "from-purple-500 to-purple-600"
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
          <div className="inline-flex items-center bg-green-50 rounded-full px-6 py-3 mb-8 border border-green-100">
            <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-green-700 text-sm font-bold">SUCCESS STORIES</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight text-balance">
            Revenue & Beyond: 
            <span className="webfx-text-gradient block mt-2">Proven Results For Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            See how our programmatic SEO strategies have transformed businesses across industries, 
            driving massive increases in organic traffic and revenue.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="webfx-card p-8 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(study.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">{study.timeframe}</span>
              </div>
              
              <div className="flex items-center mb-4">
                <div className={`w-3 h-3 bg-gradient-to-r ${study.color} rounded-full mr-3`}></div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">{study.company}</h3>
                  <p className="text-blue-600 font-medium">{study.industry}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">{study.description}</p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-3xl font-black text-blue-600 mb-1">{study.trafficIncrease}</div>
                  <div className="text-sm text-blue-700 font-medium">Traffic Increase</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
                  <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-3xl font-black text-green-600 mb-1">{study.revenueIncrease}</div>
                  <div className="text-sm text-green-700 font-medium">Additional Revenue</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 lg:p-16 text-white text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">Ready to Be Our Next Success Story?</h3>
            <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses that have transformed their online presence with our programmatic SEO expertise.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                className="webfx-button-primary text-lg px-10 py-6 h-auto"
                onClick={() => setIsAuditModalOpen(true)}
              >
                Get My Custom Strategy
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-3 text-blue-200">
                <CheckCircle2 className="h-5 w-5 text-green-400" />
                <span className="text-sm">Free strategy session • No commitment</span>
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
