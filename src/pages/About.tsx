
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Zap, Award, TrendingUp, Globe, Rocket, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const stats = [
    { number: "500+", label: "Clients Served", icon: <Users className="h-6 w-6" /> },
    { number: "10M+", label: "Pages Created", icon: <Globe className="h-6 w-6" /> },
    { number: "99.9%", label: "Uptime", icon: <Shield className="h-6 w-6" /> },
    { number: "24/7", label: "Support", icon: <Rocket className="h-6 w-6" /> }
  ];

  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Data-Driven Excellence",
      description: "Every strategy is backed by comprehensive data analysis and proven methodologies to ensure maximum ROI."
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Innovation First",
      description: "We stay ahead of SEO trends and algorithm changes, implementing cutting-edge techniques for sustainable growth."
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable results that drive real business impact."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      title: "Scalable Solutions",
      description: "From startups to enterprise, our programmatic approach scales with your business needs and ambitions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us - pSEO | Leading Programmatic SEO Agency</title>
        <meta name="description" content="Learn about pSEO's mission to democratize enterprise-level SEO through innovative programmatic strategies that scale businesses of all sizes." />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-100 text-blue-800 mb-6 px-4 py-2 text-sm font-semibold">
              Industry Leaders Since 2019
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Democratizing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Enterprise SEO
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              We believe every business deserves access to sophisticated, scalable SEO strategies 
              that drive exponential organic growth through programmatic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
                onClick={() => {
                  const element = document.getElementById('our-mission');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Our Story
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold"
                onClick={() => {
                  const element = document.getElementById('our-values');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors">
                  <div className="text-blue-600">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="our-mission" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  To democratize access to enterprise-level SEO strategies by making programmatic SEO 
                  accessible to businesses of all sizes. We believe every company deserves the opportunity 
                  to compete in the digital landscape with sophisticated, scalable SEO solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Proven methodologies backed by data</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Scalable solutions for every business size</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">Transparent results and reporting</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop" 
                    alt="Team collaboration"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold text-blue-600">500%</div>
                  <div className="text-sm text-gray-600">Average Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="our-values" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                The principles that guide every decision we make and every strategy we implement
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="group-hover:scale-110 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {value.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" 
                    alt="Code and analytics"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
                  <div className="text-2xl font-bold">10M+</div>
                  <div className="text-sm opacity-90">Pages Created</div>
                </div>
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                  What We Do
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We specialize in creating thousands of high-quality, SEO-optimized pages that target 
                  long-tail keywords and drive qualified traffic to your business. Our programmatic approach 
                  allows us to scale content creation while maintaining quality and relevance.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Monitoring</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-2">99.9%</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Scale Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join hundreds of businesses that have transformed their online presence with our programmatic SEO strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() => navigate('/free-strategy')}
            >
              Get Started Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
              onClick={() => navigate('/results')}
            >
              View Case Studies
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
