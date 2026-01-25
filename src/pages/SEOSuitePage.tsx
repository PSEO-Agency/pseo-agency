import { Helmet } from "react-helmet";
import { getCanonicalUrl } from "@/lib/canonical";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  BarChart3, 
  Zap, 
  Globe, 
  FileText, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Target,
  Layers,
  RefreshCw
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const SEOSuitePage = () => {
  useEffect(() => {
    window.prerenderReady = true;
  }, []);

  const features = [
    {
      icon: Search,
      title: "Keyword Discovery",
      description: "Uncover thousands of high-intent keywords automatically using AI-powered research tools."
    },
    {
      icon: FileText,
      title: "Content Generation",
      description: "Generate SEO-optimized content at scale with templates and dynamic data integration."
    },
    {
      icon: Globe,
      title: "Page Builder",
      description: "Create thousands of landing pages programmatically with custom templates and schemas."
    },
    {
      icon: BarChart3,
      title: "Analytics & Tracking",
      description: "Monitor rankings, traffic, and conversions across all your programmatic pages."
    },
    {
      icon: Zap,
      title: "Automation Engine",
      description: "Set up automated workflows to publish, update, and optimize pages continuously."
    },
    {
      icon: TrendingUp,
      title: "Performance Insights",
      description: "Get actionable insights on page performance and opportunities for improvement."
    }
  ];

  const capabilities = [
    "Generate 10,000+ pages in minutes",
    "AI-powered content optimization",
    "Dynamic schema markup",
    "Automatic internal linking",
    "Multi-language support",
    "API integrations",
    "Real-time indexing status",
    "Bulk editing tools"
  ];

  return (
    <div className="bg-white min-h-screen">
      <Helmet>
        <title>Programmatic SEO Suite - Professional SEO Tool | Programmatic SEO Agency</title>
        <meta name="description" content="Everything you need to scale SEO. Comprehensive tools and features designed to automate keyword research, content generation, and page creation at scale." />
        <link rel="canonical" href={getCanonicalUrl('/seo-suite')} />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-400/30 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Professional SEO Tool
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              Programmatic SEO Suite
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
              Everything You Need to Scale SEO. Comprehensive tools and features designed to automate keyword research, content generation, and page creation at scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="webfx-button-primary text-lg px-8 py-6" asChild>
                <Link to="/free-strategy">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6" asChild>
                <Link to="/contact">
                  Schedule Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              Core Features
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Tools for Scalable SEO
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our suite combines automation, AI, and data to help you dominate search results at scale.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                <Target className="w-4 h-4 mr-2" />
                Capabilities
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Built for Enterprise-Scale SEO
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're managing hundreds or hundreds of thousands of pages, our suite provides the infrastructure and tools you need.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {capabilities.map((capability, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                    <Layers className="w-10 h-10 mb-4 text-blue-200" />
                    <div className="text-3xl font-bold mb-1">10M+</div>
                    <div className="text-blue-200 text-sm">Pages Generated</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                    <TrendingUp className="w-10 h-10 mb-4 text-green-300" />
                    <div className="text-3xl font-bold mb-1">500%</div>
                    <div className="text-blue-200 text-sm">Avg. Traffic Increase</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                    <RefreshCw className="w-10 h-10 mb-4 text-yellow-300" />
                    <div className="text-3xl font-bold mb-1">24/7</div>
                    <div className="text-blue-200 text-sm">Automated Updates</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                    <Globe className="w-10 h-10 mb-4 text-purple-300" />
                    <div className="text-3xl font-bold mb-1">50+</div>
                    <div className="text-blue-200 text-sm">Languages Supported</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Scale Your SEO?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Join hundreds of companies using our Programmatic SEO Suite to dominate search results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6" asChild>
              <Link to="/free-strategy">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6" asChild>
              <Link to="/contact">
                Talk to Sales
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SEOSuitePage;
