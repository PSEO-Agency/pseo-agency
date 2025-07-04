
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Target, BarChart, Globe, Zap, Award } from "lucide-react";

const Results = () => {
  const heroStats = [
    { number: "500%+", label: "Average Traffic Increase" },
    { number: "$50M+", label: "Revenue Generated" },
    { number: "200+", label: "Happy Clients" },
    { number: "10M+", label: "Pages Created" }
  ];

  const detailedStats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
      number: "500%+",
      label: "Average Traffic Increase",
      description: "Our clients see an average of 500% increase in organic traffic within 12 months",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <DollarSign className="h-8 w-8 text-green-600" />,
      number: "$50M+",
      label: "Revenue Generated",
      description: "Total additional revenue generated for our clients through programmatic SEO",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      number: "200+",
      label: "Happy Clients",
      description: "Businesses across various industries trust us with their SEO growth",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Target className="h-8 w-8 text-red-600" />,
      number: "10M+",
      label: "Pages Created",
      description: "High-quality, SEO-optimized pages created through our programmatic approach",
      gradient: "from-red-500 to-red-600"
    }
  ];

  const caseStudies = [
    {
      client: "E-commerce Retailer",
      industry: "Retail",
      challenge: "Low organic visibility for product categories",
      result: "800% increase in organic traffic, $2.3M additional revenue",
      timeframe: "6 months",
      metrics: { traffic: "+800%", revenue: "$2.3M", conversion: "+45%" },
      color: "from-blue-500 to-indigo-600"
    },
    {
      client: "SaaS Platform",
      industry: "Technology",
      challenge: "Difficulty ranking for competitive keywords",
      result: "600% increase in qualified leads, 300% boost in conversions",
      timeframe: "8 months",
      metrics: { leads: "+600%", conversions: "+300%", mrr: "+250%" },
      color: "from-green-500 to-emerald-600"
    },
    {
      client: "Local Service Business",
      industry: "Services",
      challenge: "Limited local search presence",
      result: "1200% increase in local search visibility, 400% more bookings",
      timeframe: "4 months",
      metrics: { visibility: "+1200%", bookings: "+400%", revenue: "+320%" },
      color: "from-purple-500 to-violet-600"
    }
  ];

  const achievements = [
    { icon: <Award className="h-6 w-6" />, text: "Top 1% SEO Agency" },
    { icon: <Globe className="h-6 w-6" />, text: "Global Client Base" },
    { icon: <Zap className="h-6 w-6" />, text: "Lightning Fast Results" },
    { icon: <BarChart className="h-6 w-6" />, text: "Data-Driven Approach" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Proven Results & Case Studies - pSEO | 500%+ Growth Guaranteed</title>
        <meta name="description" content="See real results from our programmatic SEO strategies. 500%+ traffic growth, $50M+ revenue generated, 200+ happy clients. View case studies." />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {achievements.map((achievement, index) => (
                <Badge key={index} className="bg-white/10 text-white border-white/20 px-3 py-1 flex items-center gap-2">
                  {achievement.icon}
                  {achievement.text}
                </Badge>
              ))}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Proven Results That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Speak For Themselves
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Our programmatic SEO strategies have delivered exceptional results for businesses 
              across various industries. See the measurable impact we can make for your business.
            </p>
            
            {/* Hero Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {heroStats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                  <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
              Get Similar Results
            </Button>
          </div>
        </div>
      </section>

      {/* Detailed Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">The Numbers Don't Lie</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real metrics from real clients who trusted us to transform their online presence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {detailedStats.map((stat, index) => (
                <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${stat.gradient}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {stat.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                        <div className="text-sm text-gray-500">{stat.label}</div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {stat.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Real results from real businesses. See how our programmatic SEO strategies 
                have transformed these companies' online presence and revenue.
              </p>
            </div>
            
            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className={`h-2 bg-gradient-to-r ${study.color}`}></div>
                  <CardContent className="p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                          <Badge className="bg-gray-100 text-gray-800">{study.industry}</Badge>
                          <Badge variant="outline">{study.timeframe}</Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{study.client}</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                              <Target className="h-4 w-4" />
                              Challenge:
                            </h4>
                            <p className="text-gray-600">{study.challenge}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                              <TrendingUp className="h-4 w-4" />
                              Result:
                            </h4>
                            <p className="text-gray-600">{study.result}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:border-l lg:pl-8">
                        <h4 className="font-semibold text-gray-700 mb-4">Key Metrics</h4>
                        <div className="space-y-3">
                          {Object.entries(study.metrics).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                              <span className="text-sm font-medium text-gray-600 capitalize">{key}</span>
                              <span className="font-bold text-gray-900">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Join the Success Stories</h2>
            <p className="text-lg text-gray-600 mb-12">
              Over 200 businesses have chosen our programmatic SEO solutions to scale their organic growth
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">6 Months</div>
                <div className="text-gray-600">Average ROI Timeline</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Monitoring & Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to See Similar Results?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of businesses that have transformed their online presence 
            with our proven programmatic SEO strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Start Your Success Story
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold">
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Results;
