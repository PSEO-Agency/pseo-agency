
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import NotFound from "./NotFound";
import { SoftwareHero } from "@/components/software/SoftwareHero";
import { SoftwareFeatures } from "@/components/software/SoftwareFeatures";
import { SoftwarePricing } from "@/components/software/SoftwarePricing";

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

  // Properly type and validate features data
  const features = Array.isArray(software.features) 
    ? software.features.filter((feature): feature is { name: string; description: string } => 
        typeof feature === 'object' && 
        feature !== null && 
        typeof (feature as any).name === 'string' && 
        typeof (feature as any).description === 'string'
      )
    : [];

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
        <title>{software.meta_title || `${software.title} - Programmatic SEO Software`}</title>
        <meta name="description" content={software.meta_description || software.description || `Learn about ${software.title} - powerful programmatic SEO software solution.`} />
      </Helmet>
      
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      
      <main>
        <SoftwareHero software={software} />
        <SoftwareFeatures features={features} />

        {/* Content Section */}
        {software.content && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div 
                  className="prose prose-lg prose-blue max-w-none"
                  dangerouslySetInnerHTML={{ __html: software.content }}
                />
              </div>
            </div>
          </section>
        )}

        <SoftwarePricing pricingInfo={pricingInfo} />

        {/* Tags Section */}
        {tags.length > 0 && (
          <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Technologies</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="outline" className="px-4 py-2 text-base border-blue-200 text-blue-700 hover:bg-blue-50">
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
