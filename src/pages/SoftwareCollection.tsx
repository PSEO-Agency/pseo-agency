
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Github, ExternalLink, FileText } from "lucide-react";

const SoftwareCollection = () => {
  const { data: software, isLoading } = useQuery({
    queryKey: ['software-collection'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('software')
        .select('*')
        .eq('is_published', true)
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });

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

  const featuredSoftware = software?.filter(item => item.is_featured) || [];
  const regularSoftware = software?.filter(item => !item.is_featured) || [];

  const breadcrumbItems = [
    { label: "Software" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Software & Tools - Programmatic SEO Agency</title>
        <meta name="description" content="Explore our collection of powerful SEO software and tools designed to accelerate your digital marketing success." />
      </Helmet>
      
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Software & Tools
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Powerful software solutions and tools to accelerate your SEO and digital marketing success.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Software */}
        {featuredSoftware.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Featured Software
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredSoftware.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      {item.image_url && (
                        <div className="mb-4 overflow-hidden rounded-lg">
                          <img 
                            src={item.image_url} 
                            alt={item.title}
                            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between mb-4">
                        {item.category && (
                          <Badge variant="secondary" className="text-blue-600 bg-blue-100">
                            {item.category}
                          </Badge>
                        )}
                        <Badge className="bg-yellow-100 text-yellow-800">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      
                      {item.description && (
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {item.description}
                        </p>
                      )}
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.demo_url && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={item.demo_url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Demo
                            </a>
                          </Button>
                        )}
                        {item.github_url && (
                          <Button size="sm" variant="outline" asChild>
                            <a href={item.github_url} target="_blank" rel="noopener noreferrer">
                              <Github className="h-3 w-3 mr-1" />
                              GitHub
                            </a>
                          </Button>
                        )}
                      </div>
                      
                      <Link 
                        to={`/software/${item.slug}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-200"
                      >
                        Learn More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Software */}
        <section className={`py-16 ${featuredSoftware.length > 0 ? 'bg-gray-50' : ''}`}>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {featuredSoftware.length > 0 ? 'All Software' : 'Our Software'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(featuredSoftware.length > 0 ? regularSoftware : software || []).map((item) => (
                <Card key={item.id} className="hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    {item.image_url && (
                      <div className="mb-4 overflow-hidden rounded-lg">
                        <img 
                          src={item.image_url} 
                          alt={item.title}
                          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    
                    {item.category && (
                      <Badge variant="secondary" className="text-blue-600 bg-blue-100 mb-4">
                        {item.category}
                      </Badge>
                    )}
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    
                    {item.description && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {item.description}
                      </p>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.demo_url && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={item.demo_url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {item.github_url && (
                        <Button size="sm" variant="outline" asChild>
                          <a href={item.github_url} target="_blank" rel="noopener noreferrer">
                            <Github className="h-3 w-3 mr-1" />
                            GitHub
                          </a>
                        </Button>
                      )}
                    </div>
                    
                    <Link 
                      to={`/software/${item.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group-hover:translate-x-1 transition-transform duration-200"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
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

export default SoftwareCollection;
