
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Zap, Target, Code, Globe } from "lucide-react";
import { SoftwareCard } from "@/components/software/SoftwareCard";

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

  const categories = software ? [...new Set(software.map(item => item.category).filter(Boolean))] : [];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Programmatic SEO Software & Tools - Scale Your Content Strategy</title>
        <meta name="description" content="Discover powerful programmatic SEO software and automation tools. WordPress plugins, APIs, and SaaS platforms to scale your content generation and SEO strategy." />
      </Helmet>
      
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-500 rounded-full blur-3xl"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
                <Code className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-blue-700 text-sm font-bold">PROGRAMMATIC SEO TOOLS</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-8 leading-tight">
                Software & Tools for <span className="webfx-text-gradient">Scalable SEO</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-12">
                Powerful automation tools, WordPress plugins, APIs, and SaaS platforms designed to scale your programmatic SEO efforts and accelerate organic growth.
              </p>

              {/* Category badges */}
              {categories.length > 0 && (
                <div className="flex flex-wrap justify-center gap-3 mb-8">
                  {categories.map((category, index) => {
                    const icons = [Zap, Target, Code, Globe];
                    const IconComponent = icons[index % icons.length];
                    return (
                      <Badge key={category} variant="outline" className="px-4 py-2 text-base border-blue-200 text-blue-700 hover:bg-blue-50">
                        <IconComponent className="h-4 w-4 mr-2" />
                        {category}
                      </Badge>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Featured Software */}
        {featuredSoftware.length > 0 && (
          <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                <div className="inline-flex items-center bg-yellow-50 rounded-full px-6 py-3 mb-8 border border-yellow-100">
                  <Zap className="h-5 w-5 text-yellow-600 mr-2" />
                  <span className="text-yellow-700 text-sm font-bold">FEATURED TOOLS</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                  Top-Rated <span className="webfx-text-gradient">SEO Software</span>
                </h2>
                
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Hand-picked tools that deliver exceptional results for programmatic SEO campaigns.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredSoftware.map((item) => (
                  <SoftwareCard key={item.id} software={item} featured={true} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Software */}
        <section className={`py-20 ${featuredSoftware.length > 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
                {featuredSoftware.length > 0 ? 'All SEO Tools' : 'Our Software Collection'}
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Complete suite of programmatic SEO tools to automate and scale your content strategy.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(featuredSoftware.length > 0 ? regularSoftware : software || []).map((item) => (
                <SoftwareCard key={item.id} software={item} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="7" cy="7" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-black text-white mb-8 leading-tight">
                Ready to Scale Your SEO Strategy?
              </h2>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get started with our programmatic SEO tools and see how automation can transform your organic growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-50 transition-colors duration-200 shadow-lg">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors duration-200">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SoftwareCollection;
