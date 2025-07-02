
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, FileText, Play, Star, Download } from "lucide-react";
import NotFound from "./NotFound";

const SoftwarePage = () => {
  const { slug } = useParams();

  const { data: software, isLoading, error } = useQuery({
    queryKey: ['software', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('software')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();
      
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

  if (error || !software) {
    return <NotFound />;
  }

  const features = Array.isArray(software.features) ? software.features : [];
  const tags = Array.isArray(software.tags) ? software.tags : [];
  
  // Type guard for pricing info
  const pricingInfo = software.pricing_info && typeof software.pricing_info === 'object' && !Array.isArray(software.pricing_info) 
    ? software.pricing_info as Record<string, any>
    : {};

  const breadcrumbItems = [
    { label: "Software", href: "/software" },
    { label: software.title }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{software.meta_title || `${software.title} - Software`}</title>
        <meta name="description" content={software.meta_description || software.description || `Learn about ${software.title} - innovative software solution.`} />
      </Helmet>
      
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      
      <main className="pt-8">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  {software.category && (
                    <Badge variant="secondary" className="text-blue-600 bg-blue-100">
                      {software.category}
                    </Badge>
                  )}
                  {software.is_featured && (
                    <Badge className="bg-yellow-100 text-yellow-800">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  {software.title}
                </h1>
                
                {software.description && (
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {software.description}
                  </p>
                )}
                
                <div className="flex flex-wrap gap-4">
                  {software.demo_url && (
                    <Button className="webfx-button-primary">
                      <Play className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                  )}
                  {software.github_url && (
                    <Button variant="outline" asChild>
                      <a href={software.github_url} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View Source
                      </a>
                    </Button>
                  )}
                  {software.documentation_url && (
                    <Button variant="outline" asChild>
                      <a href={software.documentation_url} target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4 mr-2" />
                        Documentation
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              
              {software.image_url && (
                <div className="lg:order-first">
                  <img
                    src={software.image_url}
                    alt={software.title}
                    className="w-full h-96 object-cover rounded-xl shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features Section */}
        {features.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Key Features
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature: any, index: number) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {feature.name || feature.title || `Feature ${index + 1}`}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description || feature.content || 'Feature description'}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Content Section */}
        {software.content && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div 
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: software.content }}
                />
              </div>
            </div>
          </section>
        )}

        {/* Pricing Section */}
        {pricingInfo && Object.keys(pricingInfo).length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Pricing
              </h2>
              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardContent className="p-8 text-center">
                    {pricingInfo.price && (
                      <div className="mb-4">
                        <span className="text-4xl font-bold text-gray-900">
                          {pricingInfo.price}
                        </span>
                        {pricingInfo.period && (
                          <span className="text-gray-600">/{pricingInfo.period}</span>
                        )}
                      </div>
                    )}
                    {pricingInfo.description && (
                      <p className="text-gray-600 mb-6">{pricingInfo.description}</p>
                    )}
                    {pricingInfo.features && Array.isArray(pricingInfo.features) && (
                      <ul className="text-left space-y-2 mb-6">
                        {pricingInfo.features.map((feature: string, index: number) => (
                          <li key={index} className="flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {/* Tags Section */}
        {tags.length > 0 && (
          <section className="py-8 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default SoftwarePage;
