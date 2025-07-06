
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";

const IndustriesCollection = () => {
  const { data: industries, isLoading } = useQuery({
    queryKey: ['industries-collection'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('industries')
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
        <TrustedToolsSection />
        <Footer />
      </div>
    );
  }

  const featuredIndustries = industries?.filter(industry => industry.is_featured) || [];
  const regularIndustries = industries?.filter(industry => !industry.is_featured) || [];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Industries We Serve - Programmatic SEO Agency</title>
        <meta name="description" content="Discover how our specialized SEO strategies help businesses across various industries achieve remarkable growth and online visibility." />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Specialized SEO strategies tailored to the unique needs and challenges of your industry.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Industries */}
        {featuredIndustries.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Featured Industries
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredIndustries.map((industry) => (
                  <Card key={industry.id} className="hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        {industry.icon && (
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-2xl">{industry.icon}</span>
                          </div>
                        )}
                        <Badge className="bg-yellow-100 text-yellow-800">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {industry.name}
                      </h3>
                      
                      {industry.description && (
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {industry.description}
                        </p>
                      )}
                      
                      <Link 
                        to={`/industries/${industry.slug}`}
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

        {/* All Industries */}
        <section className={`py-16 ${featuredIndustries.length > 0 ? 'bg-gray-50' : ''}`}>
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {featuredIndustries.length > 0 ? 'All Industries' : 'Industries We Serve'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(featuredIndustries.length > 0 ? regularIndustries : industries || []).map((industry) => (
                <Card key={industry.id} className="hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    {industry.icon && (
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl">{industry.icon}</span>
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {industry.name}
                    </h3>
                    
                    {industry.description && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {industry.description}
                      </p>
                    )}
                    
                    <Link 
                      to={`/industries/${industry.slug}`}
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
      
      <TrustedToolsSection />
      <Footer />
    </div>
  );
};

export default IndustriesCollection;
