
import { Target, Zap, TrendingUp, Users, BarChart3, Globe, Search, Building } from "lucide-react";

interface IndustryStrategiesProps {
  industry: {
    name: string;
    [key: string]: any;
  };
}

export const IndustryStrategies = ({ industry }: IndustryStrategiesProps) => {
  // Industry-specific strategies
  const getStrategies = () => {
    const industryName = industry.name.toLowerCase();
    
    if (industryName === 'saas') {
      return [
        {
          title: "Feature-Based Content Strategy",
          description: "Create comprehensive content around individual product features, use cases, and integrations to capture feature-specific searches.",
          icon: Target,
          color: "from-blue-500 to-blue-600",
          benefits: ["Capture feature-specific traffic", "Showcase product capabilities", "Drive trial conversions"]
        },
        {
          title: "Competitor Comparison Hub",
          description: "Build extensive comparison and alternative pages to capture users researching competitors and switching solutions.",
          icon: BarChart3,
          color: "from-green-500 to-green-600",
          benefits: ["Intercept competitor traffic", "Position as better alternative", "Higher conversion intent"]
        },
        {
          title: "Integration Marketplace SEO",
          description: "Develop content around every integration and API connection to dominate integration-related searches.",
          icon: Globe,
          color: "from-purple-500 to-purple-600",
          benefits: ["Capture integration searches", "Showcase compatibility", "Technical SEO value"]
        },
        {
          title: "Use Case Content Scaling",
          description: "Create targeted content for every possible use case, industry application, and user persona.",
          icon: Users,
          color: "from-orange-500 to-red-500",
          benefits: ["Address diverse user needs", "Industry-specific targeting", "Educational content value"]
        }
      ];
    } else if (industryName === 'local business') {
      return [
        {
          title: "Hyperlocal SEO Strategy",
          description: "Create location-specific pages for every service area, neighborhood, and city within your coverage zone.",
          icon: Globe,
          color: "from-blue-500 to-blue-600",
          benefits: ["Dominate local searches", "Capture 'near me' traffic", "Geographic expansion"]
        },
        {
          title: "Service + Location Matrix",
          description: "Build comprehensive pages combining every service with every location for maximum local search coverage.",
          icon: Target,
          color: "from-green-500 to-green-600",
          benefits: ["Complete market coverage", "Long-tail local keywords", "Service area optimization"]
        },
        {
          title: "Local Content Authority",
          description: "Develop location-specific guides, tips, and resources that establish local expertise and authority.",
          icon: Search,
          color: "from-purple-500 to-purple-600",
          benefits: ["Build local authority", "Educational content value", "Community engagement"]
        },
        {
          title: "Review & Reputation SEO",
          description: "Create review-focused content and reputation management pages that leverage social proof for local SEO.",
          icon: Users,
          color: "from-orange-500 to-red-500",
          benefits: ["Leverage social proof", "Build trust signals", "Local ranking factors"]
        }
      ];
    } else if (industryName === 'accounting firm') {
      return [
        {
          title: "Seasonal Content Strategy",
          description: "Build comprehensive seasonal content around tax deadlines, quarterly filings, and year-end planning.",
          icon: TrendingUp,
          color: "from-blue-500 to-blue-600",
          benefits: ["Capture seasonal traffic", "Tax season optimization", "Planning content value"]
        },
        {
          title: "Service Specialization Pages",
          description: "Create detailed pages for every accounting service, tax type, and business specialization you offer.",
          icon: Target,
          color: "from-green-500 to-green-600",
          benefits: ["Service-specific targeting", "Professional expertise", "Qualified lead generation"]
        },
        {
          title: "Industry-Specific Accounting",
          description: "Develop content targeting specific industries and their unique accounting and tax requirements.",
          icon: Building,
          color: "from-purple-500 to-purple-600",
          benefits: ["Industry specialization", "Niche market capture", "Higher value clients"]
        },
        {
          title: "CPA Authority Content",
          description: "Build educational content around tax law changes, accounting best practices, and financial planning.",
          icon: BarChart3,
          color: "from-orange-500 to-red-500",
          benefits: ["Establish expertise", "Educational SEO value", "Trust building content"]
        }
      ];
    } else if (industryName === 'law firm') {
      return [
        {
          title: "Practice Area Domination",
          description: "Create comprehensive content covering every aspect of your practice areas with legal expertise and case examples.",
          icon: Target,
          color: "from-blue-500 to-blue-600",
          benefits: ["Practice area authority", "Legal expertise showcase", "Case-specific targeting"]
        },
        {
          title: "Legal Question Hub",
          description: "Build extensive FAQ and legal question content to capture informational searches and convert to consultations.",
          icon: Search,
          color: "from-green-500 to-green-600",
          benefits: ["Answer legal questions", "Educational authority", "Consultation conversions"]
        },
        {
          title: "Case Type Specialization",
          description: "Develop specific content for different case types, legal situations, and client circumstances within your practice.",
          icon: BarChart3,
          color: "from-purple-500 to-purple-600",
          benefits: ["Case-specific SEO", "Qualified lead targeting", "Legal specialization"]
        },
        {
          title: "Attorney Expertise Showcase",
          description: "Create detailed attorney profiles and expertise pages that build trust and showcase legal credentials.",
          icon: Users,
          color: "from-orange-500 to-red-500",
          benefits: ["Attorney authority", "Trust building", "Professional credibility"]
        }
      ];
    }
    
    // Default strategies for other industries
    return [
      {
        title: "Content Scale Strategy",
        description: `Systematic approach to creating thousands of relevant pages targeting ${industry.name.toLowerCase()} specific keywords and search patterns.`,
        icon: Zap,
        color: "from-blue-500 to-blue-600",
        benefits: ["Massive content scale", "Keyword coverage", "Search visibility"]
      },
      {
        title: "Authority Building",
        description: `Establish domain authority through comprehensive ${industry.name.toLowerCase()} expertise and thought leadership content.`,
        icon: TrendingUp,
        color: "from-green-500 to-green-600",
        benefits: ["Domain authority", "Industry expertise", "Trust signals"]
      },
      {
        title: "Conversion Optimization",
        description: `Optimize every page for ${industry.name.toLowerCase()} specific conversion goals and user journeys.`,
        icon: Target,
        color: "from-purple-500 to-purple-600",
        benefits: ["Higher conversions", "User experience", "ROI optimization"]
      },
      {
        title: "Competitive Advantage",
        description: `Leverage programmatic SEO to outscale competitors in the ${industry.name.toLowerCase()} space.`,
        icon: BarChart3,
        color: "from-orange-500 to-red-500",
        benefits: ["Competitive edge", "Market dominance", "Scale advantage"]
      }
    ];
  };

  const strategies = getStrategies();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-50 rounded-full px-6 py-3 mb-8 border border-purple-100">
            <Target className="h-5 w-5 text-purple-600 mr-2" />
            <span className="text-purple-700 text-sm font-bold">STRATEGIC APPROACH</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
            Winning Strategies for <span className="webfx-text-gradient">{industry.name}</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our battle-tested programmatic SEO strategies specifically designed to dominate search results 
            in the {industry.name.toLowerCase()} industry.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {strategies.map((strategy, index) => {
            const IconComponent = strategy.icon;
            
            return (
              <div key={index} className="webfx-card p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${strategy.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                      {strategy.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {strategy.description}
                    </p>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-900 mb-3">Key Benefits:</div>
                      {strategy.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-700">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Strategy Implementation */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Process</h3>
            <p className="text-gray-600">How we implement these strategies for {industry.name.toLowerCase()} success</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Search className="h-6 w-6 text-blue-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">Research & Planning</div>
              <div className="text-sm text-gray-600">Industry analysis and strategy development</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">Content Creation</div>
              <div className="text-sm text-gray-600">Scaled content production and optimization</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Globe className="h-6 w-6 text-purple-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">Deployment</div>
              <div className="text-sm text-gray-600">Technical implementation and launch</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">Optimization</div>
              <div className="text-sm text-gray-600">Performance monitoring and refinement</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
