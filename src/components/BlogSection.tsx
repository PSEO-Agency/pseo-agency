
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const BlogSection = () => {
  const { data: blogPosts, isLoading } = useQuery({
    queryKey: ['featured-blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .eq('is_featured', true)
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data;
    },
  });

  // Manual entry for Programmatic SEO Guide
  const programmaticSeoGuide = {
    id: 'programmatic-seo-guide',
    title: 'The Complete Programmatic SEO Guide',
    slug: 'programmatic-seo-guide',
    excerpt: 'Master programmatic SEO with our comprehensive guide. Learn strategies, tools, and implementation techniques to scale your organic traffic exponentially.',
    category: 'Guide',
    read_time: '25 min read',
    image_url: null,
    featured_image_alt: null,
    is_featured: true,
    is_published: true
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  // Combine manual guide with database posts, limiting to 3 total
  const allFeaturedPosts = [programmaticSeoGuide, ...(blogPosts || [])].slice(0, 3);

  if (allFeaturedPosts.length === 0) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From the pSEO Blog
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Stay updated with the latest programmatic SEO strategies, case studies, and industry insights.
            </p>
            <p className="text-gray-500">No featured blog posts available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From the pSEO Blog
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest programmatic SEO strategies, case studies, and industry insights.
            </p>
          </div>
          <Link to="/blog" className="text-blue-600 font-semibold hover:text-blue-700 flex items-center">
            View All Posts <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {allFeaturedPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden border border-gray-100">
              {post.image_url && (
                <div className="h-48 bg-gray-200 mb-4 overflow-hidden">
                  <img 
                    src={post.image_url} 
                    alt={post.featured_image_alt || post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  {post.category && (
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  )}
                  {post.read_time && (
                    <span className="text-sm text-gray-500">{post.read_time}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
                <Link 
                  to={post.id === 'programmatic-seo-guide' ? `/programmatic-seo-guide` : `/blog/${post.slug}`}
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center"
                >
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
