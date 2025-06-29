
import { Search, BarChart3, FileText, Target, Code, Users, CheckCircle } from "lucide-react";

export const ServicesOverview = () => {
  const services = [
    {
      icon: Search,
      title: "Keyword Research & Strategy",
      description: "Deep keyword analysis to identify high-volume, low-competition opportunities for programmatic content creation.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Code,
      title: "Technical SEO Automation",
      description: "Advanced technical implementation ensuring your programmatic pages are perfectly optimized for search engines.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: FileText,
      title: "Content Generation at Scale",
      description: "Automated content creation systems that produce unique, valuable pages targeting thousands of keyword variations.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time tracking and optimization of your programmatic SEO campaigns with detailed performance insights.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Target,
      title: "Conversion Optimization",
      description: "Strategic optimization of landing pages to maximize conversions from your increased organic traffic.",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Users,
      title: "Competitor Analysis",
      description: "In-depth analysis of competitor strategies to identify gaps and opportunities in your market.",
      color: "from-teal-500 to-teal-600"
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
            <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm font-bold">COMPREHENSIVE SERVICES</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight text-balance">
            How We <span className="webfx-text-gradient">Drive Revenue</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our comprehensive programmatic SEO approach combines cutting-edge technology with proven strategies 
            to scale your organic presence and drive measurable business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="webfx-card p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">{service.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
