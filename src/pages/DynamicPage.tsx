
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Helmet } from "react-helmet";
import NotFound from "./NotFound";

const DynamicPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: page, isLoading, error } = useQuery({
    queryKey: ['page', slug],
    queryFn: async () => {
      if (!slug) throw new Error('No slug provided');
      
      const { data, error } = await supabase
        .from('pages')
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

  if (error || !page) {
    return <NotFound />;
  }

  const breadcrumbItems = [
    { label: page.title }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{page.meta_title || page.title}</title>
        <meta name="description" content={page.meta_description || `${page.title} page`} />
      </Helmet>
      
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{page.title}</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600">
              This is a dynamic page managed through the CMS. Content for "{page.title}" can be managed through the admin panel.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DynamicPage;
