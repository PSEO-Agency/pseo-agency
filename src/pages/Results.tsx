
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, Target } from "lucide-react";

const Results = () => {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      number: "500%+",
      label: "Average Traffic Increase",
      description: "Our clients see an average of 500% increase in organic traffic within 12 months"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      number: "$50M+",
      label: "Revenue Generated",
      description: "Total additional revenue generated for our clients through programmatic SEO"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      number: "200+",
      label: "Happy Clients",
      description: "Businesses across various industries trust us with their SEO growth"
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      number: "10M+",
      label: "Pages Created",
      description: "High-quality, SEO-optimized pages created through our programmatic approach"
    }
  ];

  const caseStudies = [
    {
      client: "E-commerce Retailer",
      industry: "Retail",
      challenge: "Low organic visibility for product categories",
      result: "800% increase in organic traffic, $2.3M additional revenue",
      timeframe: "6 months"
    },
    {
      client: "SaaS Platform",
      industry: "Technology",
      challenge: "Difficulty ranking for competitive keywords",
      result: "600% increase in qualified leads, 300% boost in conversions",
      timeframe: "8 months"
    },
    {
      client: "Local Service Business",
      industry: "Services",
      challenge: "Limited local search presence",
      result: "1200% increase in local search visibility, 400% more bookings",
      timeframe: "4 months"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Results & Case Studies - pSEO</title>
        <meta name="description" content="See the impressive results our programmatic SEO strategies have delivered for businesses across various industries." />
      </Helmet>
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">Proven Results</h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Our programmatic SEO strategies have delivered exceptional results for businesses 
              across various industries. See the impact we can make for your business.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Get Your Results
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-700 mb-3">{stat.label}</div>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real results from real businesses. See how our programmatic SEO strategies 
                have transformed these companies' online presence.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-8">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{study.industry}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{study.client}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-1">Result:</h4>
                      <p className="text-gray-600 text-sm">{study.result}</p>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <span className="text-sm font-semibold text-gray-500">
                        Achieved in {study.timeframe}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to See Similar Results?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses that have transformed their online presence 
              with our programmatic SEO strategies.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Start Your Success Story
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Results;
