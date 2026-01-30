
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { getCanonicalUrl } from "@/lib/canonical";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Download, Clock, BarChart } from "lucide-react";
import { useEffect } from "react";

const ResourcesCollection = () => {
  const { data: resources, isLoading } = useQuery({
    queryKey: ['resources-collection'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .eq('is_published', true)
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });

  // Tell Prerender.io the page is ready once data is loaded
  useEffect(() => {
    if (!isLoading && resources) {
      window.prerenderReady = true;
    }
  }, [isLoading, resources]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  const featuredResources = resources?.filter(resource => resource.is_featured) || [];
  const regularResources = resources?.filter(resource => !resource.is_featured) || [];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Resources - Programmatic SEO Agency</title>
        <meta name="description" content="Access our comprehensive library of SEO resources, guides, templates, and tools to boost your digital marketing efforts." />
        <link rel="canonical" href={getCanonicalUrl('resources')} />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                SEO Resources
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Comprehensive library of guides, templates, and tools to accelerate your SEO success.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Resources */}
        {featuredResources.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Featured Resources
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredResources.map((resource) => (
                  <Card key={resource.id} className="hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      {resource.thumbnail_url && (
                        <div className="mb-4 overflow-hidden rounded-lg">
                          <img 
                            src={resource.thumbnail_url} 
                            alt={resource.title}
                            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="secondary" className="text-blue-600 bg-blue-100">
                          {resource.type}
                        </Badge>
                        <Badge className="bg-yellow-100 text-yellow-800">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {resource.title}
                      </h3>
                      
                      {resource.description && (
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {resource.description}
                        </p>
                      )}
                      
                      <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                        {resource.duration && (
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {resource.duration}
                          </div>
                        )}
                        {resource.difficulty_level && (
                          <div className="flex items-center">
                            <BarChart className="h-4 w-4 mr-1" />
                            {resource.difficulty_level}
                          </div>
                        )}
                        {resource.download_count && resource.download_count > 0 && (
                          <div className="flex items-center">
                            <Download className="h-4 w-4 mr-1" />
                            {resource.download_count}
                          </div>
                        )}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <Link 
                          to={`/resources/${resource.slug}`}
                          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-200"
                        >
                          View Resource
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Link>
                        
                        {resource.download_url && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={resource.download_url} target="_blank" rel="noopener noreferrer">
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Resources */}
        <section className={`py-16 ${featuredResources.length > 0 ? 'bg-gray-50' : ''}`}>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {featuredResources.length > 0 ? 'All Resources' : 'Our Resources'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(featuredResources.length > 0 ? regularResources : resources || []).map((resource) => (
                <Card key={resource.id} className="hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    {resource.thumbnail_url && (
                      <div className="mb-4 overflow-hidden rounded-lg">
                        <img 
                          src={resource.thumbnail_url} 
                          alt={resource.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    
                    <Badge variant="secondary" className="text-blue-600 bg-blue-100 mb-4">
                      {resource.type}
                    </Badge>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {resource.title}
                    </h3>
                    
                    {resource.description && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {resource.description}
                      </p>
                    )}
                    
                    <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                      {resource.duration && (
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {resource.duration}
                        </div>
                      )}
                      {resource.difficulty_level && (
                        <div className="flex items-center">
                          <BarChart className="h-4 w-4 mr-1" />
                          {resource.difficulty_level}
                        </div>
                      )}
                      {resource.download_count && resource.download_count > 0 && (
                        <div className="flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          {resource.download_count}
                        </div>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <Link 
                        to={`/resources/${resource.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-200"
                      >
                        View Resource
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                      
                      {resource.download_url && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={resource.download_url} target="_blank" rel="noopener noreferrer">
                            <Download className="h-3 w-3 mr-1" />
                            Download
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResourcesCollection;
