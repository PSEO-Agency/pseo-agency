import { Country } from "@/hooks/useCountries";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Search, Target } from "lucide-react";

interface CountryWhyItWorksProps {
  country: Country;
}

export const CountryWhyItWorks = ({ country }: CountryWhyItWorksProps) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Programmatic SEO Works in {country.name.split('(')[0].trim()}
            </h2>
            <p className="text-gray-600 text-lg">
              Capture high-intent searches and dominate your market with scalable SEO
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Target Industries */}
            {country.industries && country.industries.length > 0 && (
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">Target Industries</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {country.name.split('(')[0].trim()} has strong demand in:
                </p>
                <div className="flex flex-wrap gap-2">
                  {country.industries.map((industry, index) => (
                    <Badge 
                      key={index}
                      className="bg-blue-100 text-blue-700 hover:bg-blue-200"
                    >
                      {industry}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            
            {/* Market Opportunity */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Market Opportunity</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Programmatic SEO helps companies capture thousands of high-intent searches 
                in {country.name.split('(')[0].trim()}, from product comparisons to location-based queries.
              </p>
            </div>
          </div>
          
          {/* Example Keywords */}
          {country.keywords && country.keywords.length > 0 && (
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <Search className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Example Target Keywords</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Programmatic SEO helps you rank for searches like:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {country.keywords.map((keyword, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg px-4 py-3 border border-purple-100 text-gray-700 text-sm font-medium"
                  >
                    "{keyword}"
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
