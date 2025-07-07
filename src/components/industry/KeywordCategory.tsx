
import { LucideIcon } from "lucide-react";

interface KeywordCategoryProps {
  title: string;
  description: string;
  keywords: string[];
  icon: LucideIcon;
  color: string;
}

export const KeywordCategory = ({ title, description, keywords, icon: IconComponent, color }: KeywordCategoryProps) => {
  return (
    <div className="webfx-card p-8 group hover:scale-105 transition-all duration-300">
      <div className="text-center mb-6">
        <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
          <IconComponent className="h-8 w-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mb-6">
          {description}
        </p>
      </div>

      <div className="space-y-3">
        {keywords.slice(0, 6).map((keyword, keywordIndex) => (
          <div key={keywordIndex} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-200 group/keyword">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover/keyword:bg-blue-600"></div>
            <span className="text-gray-700 text-sm font-medium group-hover/keyword:text-blue-700">
              {keyword}
            </span>
          </div>
        ))}
        <div className="text-center pt-2">
          <span className="text-blue-600 text-sm font-medium">
            +{keywords.length - 6} more keywords
          </span>
        </div>
      </div>
    </div>
  );
};
