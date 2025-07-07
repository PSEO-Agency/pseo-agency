
import { Target, Globe, Search, TrendingUp } from "lucide-react";

interface ImplementationStrategyProps {
  industryName: string;
}

export const ImplementationStrategy = ({ industryName }: ImplementationStrategyProps) => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Strategy</h3>
        <p className="text-gray-600">How we implement these keywords at scale for {industryName.toLowerCase()} businesses</p>
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
  );
};
