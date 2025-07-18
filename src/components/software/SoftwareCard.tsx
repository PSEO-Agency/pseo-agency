
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Users, Clock, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Import official brand logos
import wordpressLogo from "/lovable-uploads/b4f410f1-af20-4b7e-ae16-8101508b404c.png";
import webflowLogo from "/lovable-uploads/fa25f460-907e-4f70-8915-7562025914b9.png";
import ahrefsLogo from "/lovable-uploads/0f066707-7e1a-4e4c-b05c-b214c23387de.png";
import nextjsLogo from "/lovable-uploads/4d23c728-c369-4186-929c-28700ba2da22.png";
import screamingFrogLogo from "/lovable-uploads/c6810a8c-a409-44c8-86c1-faa8d94ffaf1.png";
import googleSearchConsoleLogo from "/lovable-uploads/a8963a99-1d15-4a97-9b9b-23233418627e.png";
import semrushLogo from "/lovable-uploads/40d526b8-0676-4044-9ef4-3111c6f880d7.png";

interface SoftwareCardProps {
  software: {
    id: string;
    title: string;
    description: string | null;
    slug: string;
    image_url: string | null;
    category: string | null;
    user_rating: number | null;
    popularity_score: number | null;
    difficulty_level: string | null;
    setup_time: string | null;
    tags: any;
    type: string | null;
  };
  featured?: boolean;
}

export const SoftwareCard = ({ software, featured = false }: SoftwareCardProps) => {
  const tags = Array.isArray(software.tags) ? software.tags : [];
  
  // Map software slugs to official brand logos
  const getBrandLogo = (slug: string) => {
    const logoMap: Record<string, string> = {
      'wordpress': wordpressLogo,
      'webflow': webflowLogo,
      'ahrefs': ahrefsLogo,
      'nextjs': nextjsLogo,
      'screaming-frog': screamingFrogLogo,
      'google-search-console': googleSearchConsoleLogo,
      'semrush': semrushLogo,
    };
    return logoMap[slug] || software.image_url;
  };

  const brandLogo = getBrandLogo(software.slug);
  
  // Determine the correct URL based on the type
  const getItemUrl = () => {
    if (software.type === 'tool') {
      return `/tools/${software.slug}`;
    }
    return `/software/${software.slug}`;
  };

  return (
    <Card className={`group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${featured ? 'border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50' : 'hover:shadow-lg'}`}>
      <CardContent className="p-0">
        <Link to={getItemUrl()} className="block">
          {/* Image */}
          <div className="relative overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-50 to-purple-50 h-48">
            {brandLogo ? (
              <div className="w-full h-full flex items-center justify-center p-8">
                <img 
                  src={brandLogo} 
                  alt={`${software.title} logo`}
                  className="max-w-24 max-h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white" />
                </div>
              </div>
            )}
            {featured && (
              <div className="absolute top-3 right-3">
                <Badge className="bg-yellow-500 text-white border-0 font-bold">
                  Featured
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="mb-3">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                {software.title}
              </h3>
              {software.category && (
                <Badge variant="outline" className="text-xs text-blue-600 border-blue-200">
                  {software.category}
                </Badge>
              )}
            </div>

            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
              {software.description || 'Professional tool for optimization and analysis.'}
            </p>

            {/* Stats Row */}
            <div className="flex items-center justify-between text-xs text-gray-500 mb-4 space-x-4">
              {software.user_rating && (
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{software.user_rating}</span>
                </div>
              )}
              {software.popularity_score && (
                <div className="flex items-center space-x-1">
                  <Users className="h-3 w-3" />
                  <span>{software.popularity_score}k</span>
                </div>
              )}
              {software.setup_time && (
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{software.setup_time}</span>
                </div>
              )}
            </div>

            {/* Tags */}
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {tags.slice(0, 3).map((tag: string, index: number) => (
                  <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                    {tag}
                  </Badge>
                ))}
                {tags.length > 3 && (
                  <Badge variant="secondary" className="text-xs px-2 py-1">
                    +{tags.length - 3}
                  </Badge>
                )}
              </div>
            )}
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};
