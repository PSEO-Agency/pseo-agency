
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";

export const RevenueProof = () => {
  const caseStudies = [
    {
      company: "E-commerce Platform",
      industry: "Retail",
      trafficIncrease: "1,200%",
      revenueIncrease: "$2.3M",
      timeframe: "18 months",
      description: "Scaled organic traffic through programmatic product and category pages",
      rating: 5
    },
    {
      company: "SaaS Company",
      industry: "Technology",
      trafficIncrease: "850%",
      revenueIncrease: "$1.8M",
      timeframe: "12 months",
      description: "Created thousands of location-based and feature-specific landing pages",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revenue & Beyond: <span className="text-blue-600">Proven Results</span> For Clients
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our programmatic SEO strategies have transformed businesses across industries, 
            driving massive increases in organic traffic and revenue.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(study.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">({study.timeframe})</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
              <p className="text-gray-600 mb-6">{study.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-2xl font-bold text-blue-600">{study.trafficIncrease}</div>
                  <div className="text-sm text-gray-600">Traffic Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{study.revenueIncrease}</div>
                  <div className="text-sm text-gray-600">Additional Revenue</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Be Our Next Success Story?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that have transformed their online presence with our programmatic SEO expertise.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4">
            Get My Custom Strategy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
