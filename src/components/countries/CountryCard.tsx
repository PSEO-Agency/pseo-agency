import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import { Country } from "@/hooks/useCountries";

interface CountryCardProps {
  country: Country;
}

export const CountryCard = ({ country }: CountryCardProps) => {
  // Get first industry as a preview
  const previewIndustry = country.industries?.[0] || null;
  
  return (
    <div className="group relative bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-blue-300 transition-all duration-300 overflow-hidden">
      {/* Featured badge */}
      {country.is_featured && (
        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0">
          <Star className="w-3 h-3 mr-1 fill-current" />
          Featured
        </Badge>
      )}
      
      {/* Flag and country name */}
      <div className="flex items-start gap-4 mb-4">
        <span className="text-4xl">{country.flag_emoji}</span>
        <div>
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
            {country.name}
          </h3>
          <p className="text-sm text-gray-500">{country.region}</p>
        </div>
      </div>
      
      {/* Partner info */}
      {country.partner_name && (
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">Partner:</span> {country.partner_name}
          </p>
        </div>
      )}
      
      {/* Description preview */}
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
        {country.hero_description || `Scale programmatic SEO in ${country.name} with our trusted local partner.`}
      </p>
      
      {/* Industries preview */}
      {country.industries && country.industries.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {country.industries.slice(0, 3).map((industry, index) => (
            <Badge key={index} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
              {industry}
            </Badge>
          ))}
          {country.industries.length > 3 && (
            <Badge variant="secondary" className="bg-gray-100 text-gray-600">
              +{country.industries.length - 3} more
            </Badge>
          )}
        </div>
      )}
      
      {/* CTA Button */}
      <Link to={`/countries/${country.slug}`}>
        <Button className="w-full webfx-button-primary group-hover:shadow-lg transition-all">
          Explore {country.name.split('(')[0].trim()}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>
      
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none rounded-2xl" />
    </div>
  );
};
