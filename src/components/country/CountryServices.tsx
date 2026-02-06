import { Country } from "@/hooks/useCountries";
import { 
  Target, Database, Zap, Settings, BarChart3, Globe, TrendingUp, 
  MapPin, Languages, Users, Briefcase, Scale, Home, DollarSign,
  ShoppingCart, GraduationCap, Rocket, Building, Plane, Heart,
  LucideIcon
} from "lucide-react";

interface CountryServicesProps {
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
  return iconMap[iconName] || Zap;
};

export const CountryServices = ({ country }: CountryServicesProps) => {
  if (!country.services || country.services.length === 0) return null;
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Programmatic SEO Services in {country.name.split('(')[0].trim()}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Full-stack programmatic SEO delivered in partnership with our local team
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {country.services.map((service, index) => {
            const IconComponent = getIconComponent(service.icon);
            
            return (
              <div 
                key={index}
                className="group webfx-card p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
