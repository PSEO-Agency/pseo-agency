
import { TrendingUp, Users, Award, Target } from "lucide-react";

export const RevenueProof = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Revenue Impact of <span className="webfx-text-gradient">Programmatic SEO</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proven Track Record: 15+ years of SEO expertise delivering exponential growth for businesses worldwide
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center webfx-card p-8 group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-black text-gray-900 mb-2">$2.4B+</div>
            <div className="text-gray-600 font-medium">Revenue Generated</div>
          </div>

          <div className="text-center webfx-card p-8 group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Target className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-black text-gray-900 mb-2">45K+</div>
            <div className="text-gray-600 font-medium">Keywords Ranking</div>
          </div>

          <div className="text-center webfx-card p-8 group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-black text-gray-900 mb-2">800%</div>
            <div className="text-gray-600 font-medium">Average Traffic Growth</div>
          </div>

          <div className="text-center webfx-card p-8 group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="h-8 w-8 text-white" />
            </div>
            <div className="text-4xl font-black text-gray-900 mb-2">10M+</div>
            <div className="text-gray-600 font-medium">Pages Generated</div>
          </div>
        </div>

        {/* Case Study Preview */}
        <div className="webfx-card p-8 lg:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
              Real Results from Real Businesses
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="border-l-4 border-green-500 pl-6">
                <div className="text-3xl font-bold text-green-600 mb-2">1,200%</div>
                <div className="text-gray-700 font-medium mb-2">Traffic Increase</div>
                <div className="text-sm text-gray-600">E-commerce client in 6 months</div>
              </div>
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">25K</div>
                <div className="text-gray-700 font-medium mb-2">Pages Created</div>
                <div className="text-sm text-gray-600">SaaS platform expansion</div>
              </div>
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">$500K</div>
                <div className="text-gray-700 font-medium mb-2">Monthly Revenue</div>
                <div className="text-sm text-gray-600">Local service business</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
