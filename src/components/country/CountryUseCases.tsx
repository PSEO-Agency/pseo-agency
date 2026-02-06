import { Country } from "@/hooks/useCountries";
import { 
  Target, Database, Zap, Settings, BarChart3, Globe, TrendingUp, 
  MapPin, Languages, Users, Briefcase, Scale, Home, DollarSign,
  ShoppingCart, GraduationCap, Rocket, Building, Plane, Heart,
  LucideIcon
} from "lucide-react";

interface CountryUseCasesProps {
  country: Country;
}

// Map of icon names to components
const iconMap: Record<string, LucideIcon> = {
  Target, Database, Zap, Settings, BarChart3, Globe, TrendingUp,
  MapPin, Languages, Users, Briefcase, Scale, Home, DollarSign,
  ShoppingCart, GraduationCap, Rocket, Building, Plane, Heart,
};

// Helper to get icon component from string name
const getIconComponent = (iconName: string): LucideIcon => {
  return iconMap[iconName] || Target;
};

export const CountryUseCases = ({ country }: CountryUseCasesProps) => {
  if (!country.use_cases || country.use_cases.length === 0) return null;
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Common Programmatic SEO Plays in {country.name.split('(')[0].trim()}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Proven use cases that drive organic traffic in this market
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {country.use_cases.map((useCase, index) => {
            const IconComponent = getIconComponent(useCase.icon);
            
            return (
              <div 
                key={index}
                className="group flex items-center gap-3 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-indigo-50 rounded-xl px-5 py-4 border border-gray-200 hover:border-blue-300 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {useCase.title}
                  </span>
                  {useCase.description && (
                    <p className="text-sm text-gray-500">{useCase.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
