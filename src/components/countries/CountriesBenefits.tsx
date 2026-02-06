import { Globe, Target, Users, Languages } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Scalable Landing Pages for Every Market",
    description: "Deploy thousands of localized pages targeting high-intent keywords in any country or region.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Globe,
    title: "Local Intent + Global Automation",
    description: "Combine local market knowledge with automated content systems for maximum impact.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Partner-Supported Execution",
    description: "Work with trusted local partners who understand your market and can execute on the ground.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: Languages,
    title: "Multilingual & Multi-Region Expansion",
    description: "Expand into new languages and regions with content that resonates with local audiences.",
    color: "from-orange-500 to-orange-600",
  },
];

export const CountriesBenefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Programmatic SEO Wins Globally
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our proven approach scales across borders, languages, and markets
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
