
import { Search, TrendingUp, Target, Zap } from "lucide-react";

interface IndustryKeywordsProps {
  industry: {
    name: string;
    [key: string]: any;
  };
}

export const IndustryKeywords = ({ industry }: IndustryKeywordsProps) => {
  // Generate industry-specific keyword examples
  const generateKeywordExamples = (industryName: string) => {
    const base = industryName.toLowerCase();
    return [
      `${base} services near me`,
      `best ${base} companies`,
      `${base} solutions`,
      `${base} pricing`,
      `${base} reviews`,
      `${base} consultation`,
      `${base} software`,
      `${base} tools`,
      `${base} trends 2024`,
      `${base} best practices`,
      `${base} case studies`,
      `${base} ROI calculator`
    ];
  };

  const keywordExamples = generateKeywordExamples(industry.name);

  const keywordCategories = [
    {
      title: "High-Intent Keywords",
      description: `Commercial keywords with high conversion potential specific to ${industry.name.toLowerCase()} businesses.`,
      count: "2,500+",
      examples: keywordExamples.slice(0, 3),
      icon: Target,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Long-Tail Opportunities",
      description: `Specific, low-competition keywords that drive qualified traffic to ${industry.name.toLowerCase()} websites.`,
      count: "15,000+",
      examples: keywordExamples.slice(3, 6),
      icon: Search,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Trending Keywords",
      description: `Emerging search terms and trending topics in the ${industry.name.toLowerCase()} space.`,
      count: "5,000+",
      examples: keywordExamples.slice(6, 9),
      icon: TrendingUp,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Local Search Terms",
      description: `Location-based keywords optimized for ${industry.name.toLowerCase()} businesses targeting local markets.`,
      count: "8,000+",
      examples: keywordExamples.slice(9, 12),
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
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
            <Search className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm font-bold">KEYWORD RESEARCH</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
            <span className="webfx-text-gradient">{industry.name}</span> Keyword Opportunities
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover untapped keyword opportunities specifically researched for {industry.name.toLowerCase()} businesses to dominate search results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {keywordCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <div key={index} className="webfx-card p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {category.title}
                      </h3>
                      <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {category.description}
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-700 mb-2">Example Keywords:</div>
                      {category.examples.map((keyword, idx) => (
                        <div key={idx} className="text-sm text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mr-2 mb-2">
                          {keyword}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Keyword Performance Preview */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Keyword Performance Potential</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-4xl font-black text-green-300 mb-4">30,000+</div>
                <div className="text-blue-200">Total Keywords Researched</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-green-300 mb-4">85%</div>
                <div className="text-blue-200">Low Competition Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-green-300 mb-4">400%</div>
                <div className="text-blue-200">Average Traffic Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
