import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Building2, Clock } from "lucide-react";
import { Country } from "@/hooks/useCountries";

interface CountryCardProps {
  country: Country;
}

export const CountryCard = ({ country }: CountryCardProps) => {
  const isHeadquarters = country.slug === 'netherlands';
  const isComingSoon = !country.is_featured;
  
  return (
    <div className={`group relative bg-white rounded-2xl border p-6 transition-all duration-300 overflow-hidden ${
      isComingSoon 
        ? 'border-gray-200 opacity-75 hover:opacity-90' 
        : 'border-gray-200 hover:shadow-xl hover:border-blue-300'
    }`}>
      {/* Headquarters badge */}
      {isHeadquarters && (
        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
          <Building2 className="w-3 h-3 mr-1" />
          Headquarters
        </Badge>
      )}

      {/* Coming Soon badge */}
      {isComingSoon && !isHeadquarters && (
        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-gray-400 to-gray-500 text-white border-0">
          <Clock className="w-3 h-3 mr-1" />
          Coming Soon
        </Badge>
      )}
      
      {/* Flag and country name */}
      <div className="flex items-start gap-4 mb-4">
        <span className="text-4xl">{country.flag_emoji}</span>
        <div>
          <h3 className={`text-xl font-bold transition-colors ${
            isComingSoon ? 'text-gray-500' : 'text-gray-900 group-hover:text-blue-600'
          }`}>
            {country.name}
          </h3>
          <p className="text-sm text-gray-500">{country.region}</p>
        </div>
      </div>
      
      {/* Partner info */}
      {country.partner_name && !isComingSoon && (
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-700">Partner:</span> {country.partner_name}
          </p>
        </div>
      )}
      
      {/* Description preview */}
      <p className={`text-sm mb-4 line-clamp-2 ${isComingSoon ? 'text-gray-400' : 'text-gray-600'}`}>
        {country.hero_description || `Scale programmatic SEO in ${country.name} with our trusted local partner.`}
      </p>
      
      {/* Industries preview - only for active */}
      {!isComingSoon && country.industries && country.industries.length > 0 && (
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
      {isComingSoon ? (
        <Button disabled className="w-full bg-gray-100 text-gray-400 cursor-not-allowed border-0">
          Coming Soon
        </Button>
      ) : (
        <Link to={`/countries/${country.slug}`}>
          <Button className="w-full webfx-button-primary group-hover:shadow-lg transition-all">
            Explore {country.name.split('(')[0].trim()}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      )}
      
      {/* Hover gradient overlay - only for active */}
      {!isComingSoon && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none rounded-2xl" />
      )}
    </div>
  );
};
