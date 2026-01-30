
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import { Helmet } from "react-helmet";
import { getCanonicalUrl } from "@/lib/canonical";
import NotFound from "./NotFound";
import { useEffect } from "react";

const CaseStudy = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: caseStudy, isLoading, error } = useQuery({
    queryKey: ['case-study', slug],
    queryFn: async () => {
      if (!slug) throw new Error('No slug provided');
      
      const { data, error } = await supabase
        .from('case_studies')
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
    if (!isLoading && caseStudy) {
      window.prerenderReady = true;
    }
  }, [isLoading, caseStudy]);

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

  if (error || !caseStudy) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{caseStudy.title} | Case Study</title>
        <meta name="description" content={`Case study: ${caseStudy.title} - ${caseStudy.client_name}`} />
        <link rel="canonical" href={getCanonicalUrl(`case-studies/${slug}`)} />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{caseStudy.title}</h1>
            <p className="text-xl text-gray-600">Client: {caseStudy.client_name}</p>
            {caseStudy.industry && (
              <p className="text-lg text-gray-500">Industry: {caseStudy.industry}</p>
            )}
          </header>
          
          {caseStudy.challenge && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h2>
              <p className="text-gray-700">{caseStudy.challenge}</p>
            </section>
          )}
          
          {caseStudy.solution && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
              <p className="text-gray-700">{caseStudy.solution}</p>
            </section>
          )}
          
          {caseStudy.results && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Results</h2>
              <p className="text-gray-700">{caseStudy.results}</p>
            </section>
          )}
        </div>
      </main>
      
      <TrustedToolsSection />
      <Footer />
    </div>
  );
};

export default CaseStudy;
