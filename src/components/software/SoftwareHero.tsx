
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, ExternalLink, Github, FileText } from "lucide-react";

interface SoftwareHeroProps {
  software: {
    title: string;
    description: string;
    category?: string;
    is_featured: boolean;
    image_url?: string;
    demo_url?: string;
    github_url?: string;
    documentation_url?: string;
  };
}

export const SoftwareHero = ({ software }: SoftwareHeroProps) => {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              {software.category && (
                <Badge variant="secondary" className="text-blue-600 bg-blue-100 border-blue-200">
                  {software.category}
                </Badge>
              )}
              {software.is_featured && (
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg">
                  <Star className="h-3 w-3 mr-1 fill-current" />
                  Featured Tool
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {software.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {software.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              {software.demo_url && (
                <Button size="lg" className="webfx-button-primary shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                  <a href={software.demo_url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              )}
              {software.github_url && (
                <Button size="lg" variant="outline" className="border-2 hover:bg-gray-50" asChild>
                  <a href={software.github_url} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View Source
                  </a>
                </Button>
              )}
              {software.documentation_url && (
                <Button size="lg" variant="outline" className="border-2 hover:bg-gray-50" asChild>
                  <a href={software.documentation_url} target="_blank" rel="noopener noreferrer">
                    <FileText className="h-4 w-4 mr-2" />
                    Documentation
                  </a>
                </Button>
              )}
            </div>
          </div>
          
          {software.image_url && (
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl blur-2xl opacity-20"></div>
              <img
                src={software.image_url}
                alt={software.title}
                className="w-full h-96 object-cover rounded-2xl shadow-2xl relative z-10 border border-white/20"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
