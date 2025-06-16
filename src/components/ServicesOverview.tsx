
import { Search, BarChart3, FileText, Target, Code, Users } from "lucide-react";

export const ServicesOverview = () => {
  const services = [
    {
      icon: Search,
      title: "Keyword Research & Strategy",
      description: "Deep keyword analysis to identify high-volume, low-competition opportunities for programmatic content creation."
    },
    {
      icon: Code,
      title: "Technical SEO Automation",
      description: "Advanced technical implementation ensuring your programmatic pages are perfectly optimized for search engines."
    },
    {
      icon: FileText,
      title: "Content Generation at Scale",
      description: "Automated content creation systems that produce unique, valuable pages targeting thousands of keyword variations."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Real-time tracking and optimization of your programmatic SEO campaigns with detailed performance insights."
    },
    {
      icon: Target,
      title: "Conversion Optimization",
      description: "Strategic optimization of landing pages to maximize conversions from your increased organic traffic."
    },
    {
      icon: Users,
      title: "Competitor Analysis",
      description: "In-depth analysis of competitor strategies to identify gaps and opportunities in your market."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How We <span className="text-blue-600">Drive Revenue</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive programmatic SEO approach combines cutting-edge technology with proven strategies 
            to scale your organic presence and drive measurable business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
