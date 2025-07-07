
import { Search, TrendingUp, Target, Globe } from "lucide-react";

interface IndustryKeywordsProps {
  industry: {
    name: string;
    [key: string]: any;
  };
}

export const IndustryKeywords = ({ industry }: IndustryKeywordsProps) => {
  // Industry-specific keyword strategies
  const getKeywordStrategies = () => {
    const industryName = industry.name.toLowerCase();
    
    if (industryName === 'saas') {
      return {
        primary: [
          "best [software category] software",
          "[competitor] alternatives",
          "[software category] comparison",
          "[software category] reviews",
          "top [software category] tools",
          "[software category] pricing",
          "[software category] features",
          "[software category] vs [competitor]"
        ],
        secondary: [
          "[software category] for [industry]",
          "[software category] integration",
          "[software category] API",
          "free [software category] tools",
          "[software category] templates",
          "[software category] tutorials",
          "how to choose [software category]",
          "[software category] benefits"
        ],
        longTail: [
          "best [software category] for small business",
          "[software category] with [specific feature]",
          "affordable [software category] solutions",
          "[software category] free trial",
          "[competitor] vs [competitor] comparison",
          "[software category] implementation guide",
          "[industry] [software category] requirements",
          "[software category] ROI calculator"
        ]
      };
    } else if (industryName === 'e-commerce') {
      return {
        primary: [
          "best [product category]",
          "[product name] reviews",
          "buy [product name] online",
          "[product category] deals",
          "cheap [product name]",
          "[brand name] [product]",
          "[product name] price comparison",
          "[product category] sale"
        ],
        secondary: [
          "[product name] discount code",
          "[product category] free shipping",
          "[product name] customer reviews",
          "best [product category] brands",
          "[product name] specifications",
          "[product category] buying guide",
          "[product name] warranty",
          "[product category] return policy"
        ],
        longTail: [
          "best [product name] under $[price]",
          "[product name] vs [competitor product]",
          "[product category] for [specific use case]",
          "where to buy [product name] online",
          "[product name] black friday deals",
          "[brand] [product] customer service",
          "[product category] with free returns",
          "authentic [brand] [product] store"
        ]
      };
    } else if (industryName === 'real estate') {
      return {
        primary: [
          "homes for sale [city]",
          "real estate [city]",
          "[city] property listings",
          "houses for sale near me",
          "[neighborhood] homes",
          "real estate agent [city]",
          "property values [city]",
          "[city] housing market"
        ],
        secondary: [
          "luxury homes [city]",
          "first time home buyer [city]",
          "real estate investment [city]",
          "commercial real estate [city]",
          "property management [city]",
          "home appraisal [city]",
          "mortgage rates [city]",
          "rent vs buy [city]"
        ],
        longTail: [
          "best neighborhoods in [city] for families",
          "[city] real estate market trends 2024",
          "how much house can I afford in [city]",
          "top rated real estate agent [neighborhood]",
          "[city] property tax rates by neighborhood",
          "new construction homes [city] [price range]",
          "condos for sale [city] under [price]",
          "[city] real estate forecast next 5 years"
        ]
      };
    } else if (industryName === 'healthcare') {
      return {
        primary: [
          "[medical condition] treatment",
          "[specialist] near me",
          "[medical procedure] cost",
          "best [medical specialty] [city]",
          "[symptom] causes",
          "[medical test] preparation",
          "[condition] symptoms",
          "emergency [medical service]"
        ],
        secondary: [
          "[medical condition] prevention",
          "[treatment] side effects",
          "[medical procedure] recovery time",
          "telemedicine [specialty]",
          "[condition] diet plan",
          "[medical device] reviews",
          "health insurance [procedure]",
          "[specialty] clinic [city]"
        ],
        longTail: [
          "best [specialist] for [condition] in [city]",
          "how to prepare for [medical procedure]",
          "[condition] treatment options without surgery",
          "cost of [medical procedure] with insurance",
          "[symptom] when to see a doctor",
          "[medical condition] natural treatment options",
          "recovery timeline for [medical procedure]",
          "[specialty] second opinion [city]"
        ]
      };
    } else if (industryName === 'finance') {
      return {
        primary: [
          "best [financial product]",
          "[loan type] rates",
          "financial advisor near me",
          "[investment type] returns",
          "credit score improvement",
          "retirement planning",
          "mortgage calculator",
          "personal loan approval"
        ],
        secondary: [
          "[financial product] comparison",
          "how to invest in [asset]",
          "tax planning strategies",
          "[insurance type] quotes",
          "debt consolidation options",
          "emergency fund calculator",
          "401k rollover guide",
          "[financial service] fees"
        ],
        longTail: [
          "best [financial product] for [specific situation]",
          "how much should I save for retirement at [age]",
          "[loan type] approval with [credit score]",
          "[investment strategy] for beginners guide",
          "cost of [financial service] in [city]",
          "[financial product] requirements and qualifications",
          "difference between [product A] and [product B]",
          "[financial goal] planning calculator"
        ]
      };
    } else if (industryName === 'local business') {
      return {
        primary: [
          "[service] near me",
          "[service] in [city]",
          "best [service] [city]",
          "[service] [city] reviews",
          "local [service] provider",
          "[service] [neighborhood]",
          "24/7 [service] [city]",
          "emergency [service] [city]"
        ],
        secondary: [
          "[service] cost [city]",
          "[service] companies [city]",
          "residential [service] [city]",
          "commercial [service] [city]",
          "[service] estimate [city]",
          "[service] contractors [city]",
          "licensed [service] [city]",
          "[service] repair [city]"
        ],
        longTail: [
          "affordable [service] in [city]",
          "[service] [city] same day",
          "best rated [service] [neighborhood]",
          "[service] [city] free quote",
          "[specific service type] [city]",
          "[service] near [landmark]",
          "[service] [city] [specific need]",
          "professional [service] [area]"
        ]
      };
    } else if (industryName === 'accounting firm') {
      return {
        primary: [
          "CPA near me",
          "tax preparation [city]",
          "accounting services [city]",
          "bookkeeping services",
          "tax accountant [city]",
          "business tax services",
          "personal tax preparation",
          "certified public accountant"
        ],
        secondary: [
          "small business accounting",
          "tax planning services",
          "payroll services [city]",
          "financial statement preparation",
          "IRS audit representation",
          "business consulting services",
          "QuickBooks setup",
          "tax resolution services"
        ],
        longTail: [
          "best CPA for small business [city]",
          "tax preparation cost [city]",
          "business accounting services near me",
          "individual tax return preparation",
          "[industry] accounting specialist",
          "tax deadline extension services",
          "business startup accounting help",
          "nonprofit accounting services [city]"
        ]
      };
    } else if (industryName === 'law firm') {
      return {
        primary: [
          "[practice area] lawyer",
          "[practice area] attorney",
          "law firm [city]",
          "[practice area] law firm",
          "legal services [city]",
          "[practice area] consultation",
          "attorney near me",
          "[practice area] legal advice"
        ],
        secondary: [
          "[practice area] case evaluation",
          "[practice area] lawyer cost",
          "free legal consultation",
          "[practice area] settlement",
          "[practice area] court representation",
          "experienced [practice area] attorney",
          "[practice area] legal help",
          "[practice area] law office"
        ],
        longTail: [
          "best [practice area] lawyer [city]",
          "[practice area] attorney free consultation",
          "[specific legal issue] lawyer help",
          "[practice area] lawyer near me reviews",
          "affordable [practice area] attorney",
          "[practice area] lawyer [city] experience",
          "[specific case type] legal representation",
          "[practice area] attorney [city] results"
        ]
      };
    } else if (industryName === 'automotive') {
      return {
        primary: [
          "[car make model] for sale",
          "used cars [city]",
          "car dealership near me",
          "[service type] [city]",
          "auto repair shop",
          "[car part] replacement",
          "car maintenance [city]",
          "automotive service center"
        ],
        secondary: [
          "[car make] certified pre-owned",
          "car financing options",
          "auto insurance quotes",
          "[service] cost estimate",
          "brake repair [city]",
          "oil change near me",
          "transmission repair",
          "car inspection services"
        ],
        longTail: [
          "best [car make] dealer in [city]",
          "reliable used cars under [price]",
          "[specific car problem] repair cost",
          "automotive service [city] reviews",
          "[car make model] maintenance schedule",
          "certified mechanic [city] area",
          "[service type] near me open now",
          "car parts [make model] [year]"
        ]
      };
    }
    
    // Fallback for any other industries
    return {
      primary: [
        "[industry] solutions",
        "best [industry] services",
        "[industry] consulting",
        "[industry] experts",
        "[industry] strategy",
        "[industry] optimization",
        "[industry] management",
        "[industry] specialists"
      ],
      secondary: [
        "[industry] best practices",
        "[industry] case studies",
        "[industry] ROI",
        "[industry] implementation",
        "[industry] trends",
        "[industry] analysis",
        "[industry] tools",
        "[industry] services cost"
      ],
      longTail: [
        "best [industry] company for [specific need]",
        "[industry] services in [location]",
        "affordable [industry] solutions",
        "[industry] consulting near me",
        "[industry] expert advice",
        "[industry] service provider",
        "[industry] strategy development",
        "[industry] performance optimization"
      ]
    };
  };

  const keywordStrategies = getKeywordStrategies();

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
          {keywordCategories.map((category, index) => {
            const IconComponent = category.icon;
            
            return (
              <div key={index} className="webfx-card p-8 group hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {category.keywords.slice(0, 6).map((keyword, keywordIndex) => (
                    <div key={keywordIndex} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 group/keyword">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover/keyword:bg-blue-600"></div>
                      <span className="text-gray-700 text-sm font-medium group-hover/keyword:text-blue-700">
                        {keyword}
                      </span>
                    </div>
                  ))}
                  <div className="text-center pt-2">
                    <span className="text-blue-600 text-sm font-medium">
                      +{category.keywords.length - 6} more keywords
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Keyword Implementation Strategy */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Strategy</h3>
            <p className="text-gray-600">How we implement these keywords at scale for {industry.name.toLowerCase()} businesses</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">Research & Analysis</div>
              <div className="text-sm text-gray-600">Identify high-value keyword opportunities</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Globe className="h-6 w-6 text-green-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">Content Mapping</div>
              <div className="text-sm text-gray-600">Map keywords to relevant page types</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Search className="h-6 w-6 text-purple-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">Scale Creation</div>
              <div className="text-sm text-gray-600">Generate thousands of optimized pages</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">Performance Tracking</div>
              <div className="text-sm text-gray-600">Monitor and optimize keyword performance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
