
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import { Helmet } from "react-helmet";
import NotFound from "./NotFound";
import { IndustryHero } from "@/components/industry/IndustryHero";
import { IndustryOverview } from "@/components/industry/IndustryOverview";
import { IndustryStrategies } from "@/components/industry/IndustryStrategies";
import { IndustryDatasets } from "@/components/industry/IndustryDatasets";
import { IndustryKeywords } from "@/components/industry/IndustryKeywords";
import { IndustryTemplates } from "@/components/industry/IndustryTemplates";
import { IndustryImpact } from "@/components/industry/IndustryImpact";
import { IndustrySocialProof } from "@/components/industry/IndustrySocialProof";
import { IndustryFAQ } from "@/components/industry/IndustryFAQ";
import { IndustryCTA } from "@/components/industry/IndustryCTA";

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: industry, isLoading, error } = useQuery({
    queryKey: ['industry', slug],
    queryFn: async () => {
      if (!slug) throw new Error('No slug provided');
      
      const { data, error } = await supabase
        .from('industries')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
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
        <TrustedToolsSection />
        <Footer />
      </div>
    );
  }

  if (error || !industry) {
    return <NotFound />;
  }

  const breadcrumbItems = [
    { label: "Industries", href: "/industries" },
    { label: industry.name }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{industry.meta_title || `${industry.title} - Programmatic SEO Services`}</title>
        <meta name="description" content={industry.meta_description || `Specialized programmatic SEO services for ${industry.name} businesses. Scale your organic presence with industry-specific strategies.`} />
      </Helmet>
      
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      
      <main>
        <IndustryHero industry={industry} />
        <IndustryOverview industry={industry} />
        <IndustryStrategies industry={industry} />
        <IndustryDatasets industry={industry} />
        <IndustryKeywords industry={industry} />
        <IndustryTemplates industry={industry} />
        <IndustryImpact industry={industry} />
        <IndustrySocialProof industry={industry} />
        <IndustryFAQ industry={industry} />
        <IndustryCTA industry={industry} />
      </main>
      
      <TrustedToolsSection />
      <Footer />
    </div>
  );
};

export default IndustryPage;
