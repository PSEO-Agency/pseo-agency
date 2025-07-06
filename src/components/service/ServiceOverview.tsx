
import { CheckCircle, Target, Zap, TrendingUp, Shield, Globe, Users, BarChart3 } from "lucide-react";
import { Json } from "@/integrations/supabase/types";

interface ServiceOverviewProps {
  service: {
    title: string;
    description?: string | null;
    features?: Json;
    [key: string]: any;
  };
}

export const ServiceOverview = ({ service }: ServiceOverviewProps) => {
  const defaultFeatures = [
    "Comprehensive analysis and strategy development",
    "Custom implementation tailored to your business",
    "Ongoing optimization and performance monitoring",
    "Detailed reporting and insights"
  ];

  // Safely convert Json to string array
  const features = Array.isArray(service.features) && service.features.length > 0 
    ? service.features as string[] 
    : defaultFeatures;

  const serviceIcons = [Target, Zap, TrendingUp, CheckCircle, Shield, Globe, Users, BarChart3];

  const getIconForIndex = (index: number) => {
    return serviceIcons[index % serviceIcons.length];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
            <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm font-bold">SERVICE OVERVIEW</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
            How Our <span className="webfx-text-gradient">{service.title}</span> Works
          </h2>
          
          {service.description && (
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {service.description}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = getIconForIndex(index);
            const colors = [
              "from-blue-500 to-blue-600",
              "from-purple-500 to-purple-600", 
              "from-green-500 to-green-600",
              "from-orange-500 to-red-500",
              "from-indigo-500 to-indigo-600",
              "from-pink-500 to-pink-600",
              "from-teal-500 to-teal-600",
              "from-yellow-500 to-orange-500"
            ];
            
            return (
              <div key={index} className="webfx-card p-6 group hover:scale-105 transition-all duration-300 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${colors[index % colors.length]} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 leading-snug">
                  {feature}
                </h3>
                <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
              </div>
            );
          })}
        </div>

        {/* Additional service benefits */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Our {service.title}?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Proven Results</h4>
                <p className="text-gray-600 text-sm">Track record of delivering measurable improvements</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Expert Team</h4>
                <p className="text-gray-600 text-sm">Dedicated specialists with years of experience</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Custom Approach</h4>
                <p className="text-gray-600 text-sm">Tailored strategies for your specific goals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
