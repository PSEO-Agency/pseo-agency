
import { ArrowRight, TrendingUp, Database, Zap, Target } from "lucide-react";

export const AutomationSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How Programmatic SEO 
            <span className="text-blue-600"> Automates & Drives Revenue</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            By leveraging data-driven automation and scalable content strategies, our programmatic SEO approach helps your business 
            achieve massive organic growth. Stop managing SEO manually and start working with an agency that automates results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Visual funnel */}
          <div className="relative">
            <div className="space-y-8">
              {/* Stage 1 - Automate Content Creation */}
              <div className="flex items-center space-x-6">
                <div className="w-24 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Automate content creation</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center">
                        Dynamic Page Generation <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                    <div>
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center">
                        Template Optimization <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                    <div>
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center">
                        Data-Driven Content <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                    <div>
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center">
                        Bulk Content Publishing <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 2 - Scale Traffic */}
              <div className="flex items-center space-x-6">
                <div className="w-24 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Scale organic traffic</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center">
                        Keyword Automation <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                    <div>
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center">
                        Long-tail Targeting <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                    <div>
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center">
                        Search Intent Matching <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                    <div>
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center">
                        SERP Feature Optimization <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 3 - Accelerate Performance */}
              <div className="flex items-center space-x-6">
                <div className="w-24 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Accelerate performance tracking</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center">
                        Automated Reporting <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                    <div>
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center">
                        Performance Analytics <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                    <div>
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center">
                        Real-time Monitoring <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                    <div>
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center">
                        ROI Tracking <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stage 4 - Maximize Revenue */}
              <div className="flex items-center space-x-6">
                <div className="w-24 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Maximize revenue conversion</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center">
                        Conversion Optimization <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                    <div>
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center">
                        Landing Page Automation <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                    <div>
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center">
                        Lead Generation <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                    <div>
                      <span className="text-blue-600 hover:text-blue-700 cursor-pointer flex items-center">
                        Revenue Attribution <ArrowRight className="h-3 w-3 ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Funnel visualization */}
          <div className="relative">
            <div className="space-y-4">
              {/* Top section - largest */}
              <div className="w-full h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-semibold text-lg shadow-lg">
                10,000+ Pages Generated
              </div>
              
              {/* Second section */}
              <div className="w-4/5 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center text-white font-semibold mx-auto shadow-lg">
                800% Traffic Increase
              </div>
              
              {/* Third section */}
              <div className="w-3/5 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-semibold mx-auto shadow-lg">
                45K+ Keywords Ranking
              </div>
              
              {/* Bottom section - smallest */}
              <div className="w-2/5 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-semibold mx-auto shadow-lg">
                $2.4B+ Revenue
              </div>
            </div>
            
            {/* Connecting lines */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.3" />
                  </linearGradient>
                </defs>
                <path
                  d="M10 15 L20 35 L30 55 L40 75"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4,4"
                />
                <path
                  d="M90 15 L80 35 L70 55 L60 75"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="4,4"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
