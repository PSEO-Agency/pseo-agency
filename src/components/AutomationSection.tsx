
import { ArrowRight, TrendingUp, Database, Zap, Target, CheckCircle } from "lucide-react";

export const AutomationSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
            <CheckCircle className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm font-semibold">PROVEN METHODOLOGY</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            How Programmatic SEO 
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent block mt-2"> Automates & Drives Revenue</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            By leveraging data-driven automation and scalable content strategies, our programmatic SEO approach helps your business 
            achieve massive organic growth. Stop managing SEO manually and start working with an agency that automates results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Enhanced process steps */}
          <div className="space-y-8">
            {/* Stage 1 */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Automate content creation</h3>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                        <span className="text-blue-700 font-medium">Dynamic Page Generation</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                        <span className="text-blue-700 font-medium">Template Optimization</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                        <span className="text-blue-700 font-medium">Data-Driven Content</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200">
                        <ArrowRight className="h-4 w-4 text-blue-600" />
                        <span className="text-blue-700 font-medium">Bulk Content Publishing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 2 */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Scale organic traffic</h3>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
                        <ArrowRight className="h-4 w-4 text-green-600" />
                        <span className="text-green-700 font-medium">Keyword Automation</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
                        <ArrowRight className="h-4 w-4 text-green-600" />
                        <span className="text-green-700 font-medium">Long-tail Targeting</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
                        <ArrowRight className="h-4 w-4 text-green-600" />
                        <span className="text-green-700 font-medium">Search Intent Matching</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-200">
                        <ArrowRight className="h-4 w-4 text-green-600" />
                        <span className="text-green-700 font-medium">SERP Feature Optimization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 3 */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Accelerate performance tracking</h3>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
                        <ArrowRight className="h-4 w-4 text-purple-600" />
                        <span className="text-purple-700 font-medium">Automated Reporting</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
                        <ArrowRight className="h-4 w-4 text-purple-600" />
                        <span className="text-purple-700 font-medium">Performance Analytics</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
                        <ArrowRight className="h-4 w-4 text-purple-600" />
                        <span className="text-purple-700 font-medium">Real-time Monitoring</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-200">
                        <ArrowRight className="h-4 w-4 text-purple-600" />
                        <span className="text-purple-700 font-medium">ROI Tracking</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stage 4 */}
            <div className="group">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Maximize revenue conversion</h3>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl transition-all duration-300">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200">
                        <ArrowRight className="h-4 w-4 text-orange-600" />
                        <span className="text-orange-700 font-medium">Conversion Optimization</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200">
                        <ArrowRight className="h-4 w-4 text-orange-600" />
                        <span className="text-orange-700 font-medium">Landing Page Automation</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200">
                        <ArrowRight className="h-4 w-4 text-orange-600" />
                        <span className="text-orange-700 font-medium">Lead Generation</span>
                      </div>
                      <div className="flex items-center space-x-2 p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors duration-200">
                        <ArrowRight className="h-4 w-4 text-orange-600" />
                        <span className="text-orange-700 font-medium">Revenue Attribution</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Enhanced results funnel */}
          <div className="relative">
            <div className="space-y-6">
              {/* Top section - largest */}
              <div className="w-full h-28 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
                <div className="text-center">
                  <div className="text-3xl font-black">10,000+</div>
                  <div className="text-sm opacity-90">Pages Generated</div>
                </div>
              </div>
              
              {/* Second section */}
              <div className="w-4/5 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg mx-auto shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
                <div className="text-center">
                  <div className="text-2xl font-black">800%</div>
                  <div className="text-sm opacity-90">Traffic Increase</div>
                </div>
              </div>
              
              {/* Third section */}
              <div className="w-3/5 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold mx-auto shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
                <div className="text-center">
                  <div className="text-xl font-black">45K+</div>
                  <div className="text-xs opacity-90">Keywords Ranking</div>
                </div>
              </div>
              
              {/* Bottom section - smallest */}
              <div className="w-2/5 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white font-bold mx-auto shadow-2xl transform hover:scale-105 transition-all duration-300 hover:shadow-3xl">
                <div className="text-center">
                  <div className="text-lg font-black">$2.4B+</div>
                  <div className="text-xs opacity-90">Revenue</div>
                </div>
              </div>
            </div>
            
            {/* Enhanced connecting arrows */}
            <div className="absolute inset-0 pointer-events-none">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                    <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <path
                  d="M15 20 L25 40 L35 60 L45 80"
                  stroke="url(#arrowGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="6,4"
                  className="animate-pulse"
                />
                <path
                  d="M85 20 L75 40 L65 60 L55 80"
                  stroke="url(#arrowGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="6,4"
                  className="animate-pulse"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
