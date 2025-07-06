
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import { Helmet } from "react-helmet";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['blog-post', slug],
    queryFn: async () => {
      if (!slug) throw new Error('No slug provided');
      
      const { data, error } = await supabase
        .from('blog_posts')
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

  if (error || !post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt || `Read our blog post about ${post.title}`} />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            {post.excerpt && (
              <p className="text-xl text-gray-600 mb-4">{post.excerpt}</p>
            )}
            <div className="flex items-center text-sm text-gray-500">
              {post.published_at && (
                <time dateTime={post.published_at}>
                  {new Date(post.published_at).toLocaleDateString()}
                </time>
              )}
              {post.read_time && (
                <>
                  <span className="mx-2">•</span>
                  <span>{post.read_time}</span>
                </>
              )}
            </div>
          </header>
          
          {post.content && (
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          )}
        </article>
      </main>
      
      <TrustedToolsSection />
      <Footer />
    </div>
  );
};

export default BlogPost;
