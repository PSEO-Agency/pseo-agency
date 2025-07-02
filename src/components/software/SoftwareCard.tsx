
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Github, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface SoftwareCardProps {
  software: {
    id: string;
    title: string;
    slug: string;
    description?: string;
    category?: string;
    image_url?: string;
    is_featured: boolean;
    demo_url?: string;
    github_url?: string;
  };
  featured?: boolean;
}

export const SoftwareCard = ({ software, featured = false }: SoftwareCardProps) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg bg-white">
      <CardContent className="p-0">
        {software.image_url && (
          <div className="relative overflow-hidden rounded-t-lg">
            <img 
              src={software.image_url} 
              alt={software.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {software.is_featured && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Featured
                </Badge>
              </div>
            )}
          </div>
        )}
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            {software.category && (
              <Badge variant="secondary" className="text-blue-600 bg-blue-100 border-blue-200">
                {software.category}
              </Badge>
            )}
            {!software.image_url && software.is_featured && (
              <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
                <Star className="h-3 w-3 mr-1 fill-current" />
                Featured
              </Badge>
            )}
          </div>
          
          <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200 ${featured ? 'text-2xl' : 'text-xl'}`}>
            {software.title}
          </h3>
          
          {software.description && (
            <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
              {software.description}
            </p>
          )}
          
          <div className="flex flex-wrap gap-2 mb-6">
            {software.demo_url && (
              <Button size="sm" variant="outline" asChild>
                <a href={software.demo_url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Demo
                </a>
              </Button>
            )}
            {software.github_url && (
              <Button size="sm" variant="outline" asChild>
                <a href={software.github_url} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3 mr-1" />
                  GitHub
                </a>
              </Button>
            )}
          </div>
          
          <Link 
            to={`/software/${software.slug}`}
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-all duration-200"
          >
            Learn More
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
