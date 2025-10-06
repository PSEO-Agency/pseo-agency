
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import NotFound from "./NotFound";
import { SoftwareHero } from "@/components/software/SoftwareHero";
import { SoftwareFeatures } from "@/components/software/SoftwareFeatures";

import { SoftwareSpecs } from "@/components/software/SoftwareSpecs";
import { RelatedSoftware } from "@/components/software/RelatedSoftware";
import { SoftwareScreenshots } from "@/components/software/SoftwareScreenshots";
import { SoftwareImplementation } from "@/components/software/SoftwareImplementation";
import { useSoftwareBySlug, useRelatedSoftware } from "@/hooks/useSoftware";
import { useRelatedTools } from "@/hooks/useTools";
import { useEffect } from "react";

const SoftwarePage = () => {
  const { slug } = useParams();

  const { data: software, isLoading, error } = useSoftwareBySlug(slug!);
  const { data: relatedSoftware } = useRelatedSoftware(slug!, software?.category);
  const { data: relatedTools } = useRelatedTools(slug!, software?.category);

  // Tell Prerender.io the page is ready once data is loaded
  useEffect(() => {
    if (!isLoading && software) {
      window.prerenderReady = true;
    }
  }, [isLoading, software]);

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

  // Transform data for SoftwareSpecs component
  const softwareSpecsData = {
    user_rating: software.user_rating,
    review_count: software.review_count,
    popularity_score: software.popularity_score,
    difficulty_level: software.difficulty_level,
    setup_time: software.setup_time,
    target_audience: software.target_audience,
    integration_capabilities: Array.isArray(software.integration_capabilities) 
      ? software.integration_capabilities 
      : [],
    use_cases: Array.isArray(software.use_cases) 
      ? software.use_cases 
      : [],
    technical_specs: software.technical_specs && typeof software.technical_specs === 'object' && !Array.isArray(software.technical_specs)
      ? software.technical_specs as Record<string, any>
      : {},
  };

  // Transform screenshots data with proper type checking
  const screenshots = Array.isArray(software.screenshots) 
    ? software.screenshots.filter((screenshot): screenshot is {
        url: string;
        title: string;
        description: string;
        category: string;
      } => 
        typeof screenshot === 'object' && 
        screenshot !== null && 
        typeof (screenshot as any).url === 'string' &&
        typeof (screenshot as any).title === 'string' &&
        typeof (screenshot as any).description === 'string' &&
        typeof (screenshot as any).category === 'string'
      )
    : [];
  
  // Transform implementation data with proper type checking
  const implementationExamples = Array.isArray(software.implementation_examples) 
    ? software.implementation_examples.filter((example): example is {
        title: string;
        description: string;
        code: string;
        complexity: 'Beginner' | 'Intermediate' | 'Advanced';
        timeEstimate: string;
      } => 
        typeof example === 'object' && 
        example !== null && 
        typeof (example as any).title === 'string' &&
        typeof (example as any).description === 'string' &&
        typeof (example as any).code === 'string' &&
        ['Beginner', 'Intermediate', 'Advanced'].includes((example as any).complexity) &&
        typeof (example as any).timeEstimate === 'string'
      )
    : [];
    
  const supportResources = software.support_resources && typeof software.support_resources === 'object' && !Array.isArray(software.support_resources)
    ? software.support_resources as Record<string, any>
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
        
        {/* Screenshots Section */}
        {screenshots.length > 0 && (
          <SoftwareScreenshots screenshots={screenshots} title={software.title} />
        )}
        
        <SoftwareSpecs software={softwareSpecsData} />

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

        

        {/* Implementation Guide */}
        {(software.setup_guide || implementationExamples.length > 0) && (
          <SoftwareImplementation 
            setupGuide={software.setup_guide || "Setup guide coming soon..."}
            implementationExamples={implementationExamples}
            migrationGuide={software.migration_guide}
            supportResources={supportResources}
          />
        )}

        {/* Related Software */}
        {relatedSoftware && relatedSoftware.length > 0 && (
          <RelatedSoftware 
            items={relatedSoftware}
            title="Related Software"
            subtitle="Discover other software platforms that complement your SEO strategy"
          />
        )}

        {/* Related Tools */}
        {relatedTools && relatedTools.length > 0 && (
          <RelatedSoftware 
            items={relatedTools}
            title="Recommended Tools"
            subtitle="Essential SEO tools that work great with this software platform"
          />
        )}

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
      
      <TrustedToolsSection />
      <Footer />
    </div>
  );
};

export default SoftwarePage;
