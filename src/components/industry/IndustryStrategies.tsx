
import { Lightbulb, Target, Zap, BarChart3 } from "lucide-react";

interface IndustryStrategiesProps {
  industry: {
    name: string;
    [key: string]: any;
  };
}

export const IndustryStrategies = ({ industry }: IndustryStrategiesProps) => {
  const strategies = [
    {
      title: "Content Scaling Strategy",
      description: `Automated content generation for thousands of ${industry.name.toLowerCase()}-specific landing pages targeting long-tail keywords and product variations.`,
      icon: Lightbulb,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Local Market Penetration",
      description: `Location-based content automation to dominate local search results in every market where ${industry.name.toLowerCase()} businesses operate.`,
      icon: Target,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Competitive Intelligence",
      description: `Advanced competitor analysis to identify content gaps and keyword opportunities specific to the ${industry.name.toLowerCase()} market.`,
      icon: BarChart3,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Conversion Optimization",
      description: `Industry-specific conversion rate optimization using proven ${industry.name.toLowerCase()} customer behavior patterns and preferences.`,
      icon: Zap,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-50 rounded-full px-6 py-3 mb-8 border border-purple-100">
            <Lightbulb className="h-5 w-5 text-purple-600 mr-2" />
            <span className="text-purple-700 text-sm font-bold">STRATEGIC APPROACH</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
            Proven Strategies for 
            <span className="webfx-text-gradient block mt-2">{industry.name} Growth</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our battle-tested methodologies are specifically designed to address the unique challenges and opportunities in the {industry.name.toLowerCase()} industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {strategies.map((strategy, index) => {
            const IconComponent = strategy.icon;
            
            return (
              <div key={index} className="webfx-card p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${strategy.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                      {strategy.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {strategy.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
