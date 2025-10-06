
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import NotFound from "./NotFound";
import { useEffect } from "react";

const Resource = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: resource, isLoading, error } = useQuery({
    queryKey: ['resource', slug],
    queryFn: async () => {
      if (!slug) throw new Error('No slug provided');
      
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  // Tell Prerender.io the page is ready once data is loaded
  useEffect(() => {
    if (!isLoading && resource) {
      window.prerenderReady = true;
    }
  }, [isLoading, resource]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </div>
        <TrustedToolsSection />
        <Footer />
      </div>
    );
  }

  if (error || !resource) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{resource.title} | Resources</title>
        <meta name="description" content={resource.description || `Download ${resource.title}`} />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{resource.title}</h1>
            {resource.description && (
              <p className="text-xl text-gray-600 mb-4">{resource.description}</p>
            )}
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>Type: {resource.type}</span>
              {resource.duration && <span>Duration: {resource.duration}</span>}
              {resource.file_size && <span>Size: {resource.file_size}</span>}
            </div>
          </header>
          
          {resource.content && (
            <div className="prose prose-lg max-w-none mb-8">
              <div dangerouslySetInnerHTML={{ __html: resource.content }} />
            </div>
          )}
          
          {resource.download_url && (
            <div className="text-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                <a href={resource.download_url} target="_blank" rel="noopener noreferrer">
                  <Download className="h-5 w-5 mr-2" />
                  Download {resource.title}
                </a>
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <TrustedToolsSection />
      <Footer />
    </div>
  );
};

export default Resource;
