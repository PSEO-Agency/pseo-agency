
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, TrendingUp, BookOpen, Lightbulb, Target } from "lucide-react";

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          team_members:author_id (
            name,
            slug
          )
        `)
        .eq('is_published', true)
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data;
    },
  });

  const categories = [
    { name: "SEO Strategy", icon: <Target className="h-5 w-5" />, count: 12 },
    { name: "Content Marketing", icon: <BookOpen className="h-5 w-5" />, count: 8 },
    { name: "Analytics", icon: <TrendingUp className="h-5 w-5" />, count: 6 },
    { name: "Best Practices", icon: <Lightbulb className="h-5 w-5" />, count: 10 }
  ];

  const featuredTopics = [
    {
      title: "Programmatic SEO",
      description: "Master the art of scaling content with automation",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Content Strategy",
      description: "Build comprehensive content frameworks that convert",
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Technical SEO",
      description: "Optimize your site architecture for maximum performance",
      color: "from-purple-500 to-violet-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>SEO Blog & Insights - pSEO | Programmatic SEO Strategies</title>
        <meta name="description" content="Stay updated with the latest programmatic SEO insights, strategies, and trends. Expert guides, case studies, and actionable tips for scaling your organic growth." />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-blue-100 text-blue-800 mb-6 px-4 py-2 text-sm font-semibold">
              Expert SEO Insights
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Master the Art of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Programmatic SEO
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Stay ahead of the curve with expert insights, proven strategies, and actionable tips 
              from our team of programmatic SEO specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold">
                Browse Articles
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg font-semibold">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Topics</h2>
              <p className="text-lg text-gray-600">Dive deep into the strategies that drive results</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredTopics.map((topic, index) => (
                <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border-0">
                  <div className={`h-2 bg-gradient-to-r ${topic.color}`}></div>
                  <CardContent className="p-8 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600">{topic.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
              <p className="text-lg text-gray-600">Find exactly what you're looking for</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4 group-hover:bg-blue-200 transition-colors">
                      <div className="text-blue-600">
                        {category.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600">{category.count} articles</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Latest Articles</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Fresh insights and proven strategies to help you master programmatic SEO
              </p>
            </div>
            
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, index) => (
                  <Card key={index} className="overflow-hidden animate-pulse border-0 shadow-lg">
                    <div className="w-full h-48 bg-gray-200"></div>
                    <CardContent className="p-6 space-y-4">
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                      <div className="space-y-2">
                        <div className="h-3 bg-gray-200 rounded"></div>
                        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : posts && posts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <Card key={post.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group border-0">
                    {post.image_url && (
                      <div className="relative overflow-hidden">
                        <img 
                          src={post.image_url} 
                          alt={post.featured_image_alt || post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    )}
                    
                    <CardContent className="p-6">
                      {post.category && (
                        <Badge className="bg-blue-100 text-blue-800 mb-3 hover:bg-blue-200 transition-colors">
                          {post.category}
                        </Badge>
                      )}
                      
                      <CardTitle className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                        <Link to={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                      
                      {post.excerpt && (
                        <CardDescription className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                          {post.excerpt}
                        </CardDescription>
                      )}
                      
                      <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4">
                          {post.team_members && (
                            <div className="flex items-center space-x-1">
                              <User className="h-4 w-4" />
                              <span>{post.team_members.name}</span>
                            </div>
                          )}
                          
                          {post.published_at && (
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{new Date(post.published_at).toLocaleDateString()}</span>
                            </div>
                          )}
                        </div>
                        
                        {post.read_time && (
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{post.read_time}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="text-center py-16 border-0 shadow-lg">
                <CardContent>
                  <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No Blog Posts Yet</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    We're working on creating amazing content for you. Check back soon for expert insights and strategies!
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Subscribe for Updates
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Stay Ahead of the Curve</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get the latest programmatic SEO insights, case studies, and strategies delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 font-semibold">
                Subscribe
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-4">No spam. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;
