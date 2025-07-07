
import { Search, TrendingUp, Target } from "lucide-react";
import { getKeywordStrategies } from "@/data/keywordStrategies";
import { KeywordCategory } from "./KeywordCategory";
import { ImplementationStrategy } from "./ImplementationStrategy";

interface IndustryKeywordsProps {
  industry: {
    name: string;
    [key: string]: any;
  };
}

export const IndustryKeywords = ({ industry }: IndustryKeywordsProps) => {
  const keywordStrategies = getKeywordStrategies(industry.name);

  const keywordCategories = [
    {
      title: "Primary Keywords",
      description: "High-volume, high-intent keywords that drive qualified traffic",
      keywords: keywordStrategies.primary,
      icon: Target,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Secondary Keywords", 
      description: "Supporting keywords that capture different search intents",
      keywords: keywordStrategies.secondary,
      icon: TrendingUp,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Long-tail Keywords",
      description: "Specific, lower-competition keywords with high conversion potential",
      keywords: keywordStrategies.longTail,
      icon: Search,
      color: "from-purple-500 to-purple-600"
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
          <div className="inline-flex items-center bg-green-50 rounded-full px-6 py-3 mb-8 border border-green-100">
            <Search className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-green-700 text-sm font-bold">KEYWORD STRATEGY</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
            <span className="webfx-text-gradient">{industry.name}</span> Keyword Opportunities
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Target the right keywords to dominate search results in the {industry.name.toLowerCase()} industry. 
            Our programmatic approach scales keyword targeting across thousands of relevant terms.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {keywordCategories.map((category, index) => (
            <KeywordCategory
              key={index}
              title={category.title}
              description={category.description}
              keywords={category.keywords}
              icon={category.icon}
              color={category.color}
            />
          ))}
        </div>

        <ImplementationStrategy industryName={industry.name} />
      </div>
    </section>
  );
};
