
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Helmet } from "react-helmet";
import NotFound from "./NotFound";

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
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{industry.meta_title || industry.title}</title>
        <meta name="description" content={industry.meta_description || industry.description} />
      </Helmet>
      
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{industry.title}</h1>
          {industry.description && (
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg text-gray-600">{industry.description}</p>
            </div>
          )}
          
          {industry.solutions && Array.isArray(industry.solutions) && industry.solutions.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solutions</h2>
              <ul className="list-disc list-inside space-y-2">
                {industry.solutions.map((solution: string, index: number) => (
                  <li key={index} className="text-gray-700">{solution}</li>
                ))}
              </ul>
            </div>
          )}
          
          {industry.pain_points && Array.isArray(industry.pain_points) && industry.pain_points.length > 0 && (
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenges We Address</h2>
              <ul className="list-disc list-inside space-y-2">
                {industry.pain_points.map((point: string, index: number) => (
                  <li key={index} className="text-gray-700">{point}</li>
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

export default IndustryPage;
