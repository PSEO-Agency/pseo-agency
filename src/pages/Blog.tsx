import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Helmet } from "react-helmet";

const Blog = () => {
  const { data: blogPosts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching blog posts:', error);
        throw error;
      }
      console.log('Fetched blog posts:', data);
      return data;
    },
  });

  const { data: featuredPosts } = useQuery({
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

  // Combine manual guide with database posts for featured section
  const allFeaturedPosts = [programmaticSeoGuide, ...(featuredPosts || [])].slice(0, 3);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Helmet>
          <title>Programmatic SEO Blog - Expert Strategies & Case Studies</title>
          <meta name="description" content="Learn programmatic SEO strategies, case studies, and expert insights to scale your organic traffic and revenue." />
        </Helmet>
        
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Programmatic SEO Blog - Expert Strategies & Case Studies</title>
        <meta name="description" content="Learn programmatic SEO strategies, case studies, and expert insights to scale your organic traffic and revenue." />
        <meta property="og:title" content="Programmatic SEO Blog - Expert Strategies & Case Studies" />
        <meta property="og:description" content="Learn programmatic SEO strategies, case studies, and expert insights to scale your organic traffic and revenue." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Programmatic SEO <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Strategies</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
              Learn from real case studies, expert strategies, and proven tactics to scale your organic traffic exponentially
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <User className="h-4 w-4 mr-2 text-blue-600" />
                <span>Expert Insights</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="h-4 w-4 mr-2 text-green-600" />
                <span>Updated Weekly</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="h-4 w-4 mr-2 text-yellow-600" />
                <span>Case Studies</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {allFeaturedPosts && allFeaturedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
                <p className="text-lg text-gray-600">Our most popular and impactful programmatic SEO strategies</p>
              </div>
              <div className="grid lg:grid-cols-3 gap-8">
                {allFeaturedPosts.map((post) => (
                  <Link key={post.id} to={post.id === 'programmatic-seo-guide' ? `/programmatic-seo-guide` : `/blog/${post.slug}`}>
                    <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-gray-100 overflow-hidden hover:-translate-y-1">
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                            <Star className="h-3 w-3 mr-1" />
                            Featured
                          </Badge>
                          {post.category && (
                            <Badge variant="outline" className="border-blue-200 text-blue-700">
                              {post.category}
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-4 leading-tight line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.read_time || '5 min read'}</span>
                          </div>
                          <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">All Articles</h2>
              <p className="text-lg text-gray-600">Comprehensive programmatic SEO knowledge base</p>
            </div>
            
            {!blogPosts || blogPosts.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                  <User className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">No Blog Posts Found</h3>
                <p className="text-lg text-gray-600">Check back soon for new content!</p>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`}>
                    <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100 overflow-hidden">
                      <div className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          {post.category && (
                            <Badge variant="outline" className="border-blue-200 text-blue-700">
                              {post.category}
                            </Badge>
                          )}
                          {post.is_featured && (
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-4 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            {post.published_at && (
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                <time dateTime={post.published_at}>
                                  {new Date(post.published_at).toLocaleDateString('en-US', { 
                                    year: 'numeric', 
                                    month: 'short', 
                                    day: 'numeric' 
                                  })}
                                </time>
                              </div>
                            )}
                            {post.read_time && (
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{post.read_time}</span>
                              </div>
                            )}
                          </div>
                          <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      
      <TrustedToolsSection />
      <Footer />

      <style>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0);
          background-size: 20px 20px;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Blog;
