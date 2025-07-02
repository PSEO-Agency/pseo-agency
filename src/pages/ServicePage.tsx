
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import NotFound from "./NotFound";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: service, isLoading, error } = useQuery({
    queryKey: ['service', slug],
    queryFn: async () => {
      if (!slug) throw new Error('No slug provided');
      
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !service) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{service.title} | pSEO Services</title>
        <meta name="description" content={service.description || `Learn about our ${service.title} service`} />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{service.title}</h1>
          {service.description && (
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-600">{service.description}</p>
            </div>
          )}
          
          {service.features && Array.isArray(service.features) && service.features.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
              <ul className="list-disc list-inside space-y-2">
                {service.features.map((feature: string, index: number) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServicePage;
