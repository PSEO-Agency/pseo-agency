
import { CheckCircle, Target, Zap, TrendingUp, BarChart3 } from "lucide-react";
import { Json } from "@/integrations/supabase/types";

interface IndustryOverviewProps {
  industry: {
    name: string;
    solutions?: Json;
    [key: string]: any;
  };
}

export const IndustryOverview = ({ industry }: IndustryOverviewProps) => {
  const defaultSolutions = [
    "Industry-specific keyword research and content mapping",
    "Automated content generation for product/service variations",
    "Local SEO optimization for multiple locations",
    "Competitor analysis and gap identification"
  ];

  // Safely convert Json to string array
  const solutions = Array.isArray(industry.solutions) ? industry.solutions as string[] : defaultSolutions;

  const industryIcons = [Target, Zap, TrendingUp, BarChart3];

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
            <span className="text-blue-700 text-sm font-bold">INDUSTRY SOLUTIONS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
            How We Drive Results for <span className="webfx-text-gradient">{industry.name}</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our specialized approach combines deep {industry.name.toLowerCase()} industry knowledge with cutting-edge programmatic SEO techniques to deliver exceptional results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.slice(0, 4).map((solution, index) => {
            const IconComponent = industryIcons[index] || CheckCircle;
            const colors = [
              "from-blue-500 to-blue-600",
              "from-purple-500 to-purple-600", 
              "from-green-500 to-green-600",
              "from-orange-500 to-red-500"
            ];
            
            return (
              <div key={index} className="webfx-card p-6 group hover:scale-105 transition-all duration-300 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${colors[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {solution}
                </h3>
                <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
