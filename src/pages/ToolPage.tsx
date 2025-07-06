
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import NotFound from "./NotFound";
import { SoftwareHero } from "@/components/software/SoftwareHero";
import { SoftwareFeatures } from "@/components/software/SoftwareFeatures";
import { SoftwarePricing } from "@/components/software/SoftwarePricing";
import { SoftwareSpecs } from "@/components/software/SoftwareSpecs";
import { RelatedSoftware } from "@/components/software/RelatedSoftware";
import { Badge } from "@/components/ui/badge";
import { useToolBySlug, useRelatedTools } from "@/hooks/useTools";
import { useRelatedSoftware } from "@/hooks/useSoftware";

const ToolPage = () => {
  const { slug } = useParams();

  const { data: tool, isLoading, error } = useToolBySlug(slug!);
  const { data: relatedTools } = useRelatedTools(slug!, tool?.category);
  const { data: relatedSoftware } = useRelatedSoftware(slug!, tool?.category);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="flex items-center justify-center min-h-[50vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600"></div>
        </div>
        <TrustedToolsSection />
        <Footer />
      </div>
    );
  }

  if (error || !tool) {
    return <NotFound />;
  }

  // Properly type and validate features data
  const features = Array.isArray(tool.features) 
    ? tool.features.filter((feature): feature is { name: string; description: string } => 
        typeof feature === 'object' && 
        feature !== null && 
        typeof (feature as any).name === 'string' && 
        typeof (feature as any).description === 'string'
      )
    : [];

  const tags = Array.isArray(tool.tags) ? tool.tags : [];
  
  // Type guard for pricing info
  const pricingInfo = tool.pricing_info && typeof tool.pricing_info === 'object' && !Array.isArray(tool.pricing_info) 
    ? tool.pricing_info as Record<string, any>
    : {};

  // Transform data for SoftwareSpecs component
  const toolSpecsData = {
    user_rating: tool.user_rating,
    review_count: tool.review_count,
    popularity_score: tool.popularity_score,
    difficulty_level: tool.difficulty_level,
    setup_time: tool.setup_time,
    target_audience: tool.target_audience,
    integration_capabilities: Array.isArray(tool.integration_capabilities) 
      ? tool.integration_capabilities 
      : [],
    use_cases: Array.isArray(tool.use_cases) 
      ? tool.use_cases 
      : [],
    technical_specs: tool.technical_specs && typeof tool.technical_specs === 'object' && !Array.isArray(tool.technical_specs)
      ? tool.technical_specs as Record<string, any>
      : {},
  };

  const breadcrumbItems = [
    { label: "Tools", href: "/tools" },
    { label: tool.title }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{tool.meta_title || `${tool.title} - Professional SEO Tool`}</title>
        <meta name="description" content={tool.meta_description || tool.description || `Learn about ${tool.title} - professional SEO tool for optimization and analysis.`} />
      </Helmet>
      
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      
      <main>
        <SoftwareHero software={tool} />
        <SoftwareFeatures features={features} />
        <SoftwareSpecs software={toolSpecsData} />

        {/* Content Section */}
        {tool.content && (
          <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
              <div className="max-w-4xl mx-auto">
                <div 
                  className="prose prose-lg prose-emerald max-w-none"
                  dangerouslySetInnerHTML={{ __html: tool.content }}
                />
              </div>
            </div>
          </section>
        )}

        <SoftwarePricing pricingInfo={pricingInfo} />

        {/* Related Tools */}
        {relatedTools && relatedTools.length > 0 && (
          <RelatedSoftware 
            items={relatedTools}
            title="Related Tools"
            subtitle="Other essential SEO tools for comprehensive optimization"
          />
        )}

        {/* Related Software */}
        {relatedSoftware && relatedSoftware.length > 0 && (
          <RelatedSoftware 
            items={relatedSoftware}
            title="Recommended Software"
            subtitle="Software platforms that integrate well with this tool"
          />
        )}

        {/* Tags Section */}
        {tags.length > 0 && (
          <section className="py-16 bg-white border-t border-gray-100">
            <div className="container mx-auto px-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Categories</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {tags.map((tag: string, index: number) => (
                    <Badge key={index} variant="outline" className="px-4 py-2 text-base border-emerald-200 text-emerald-700 hover:bg-emerald-50">
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

export default ToolPage;
