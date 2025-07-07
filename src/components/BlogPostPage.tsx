
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { AuditModal } from "@/components/AuditModal";
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import { 
  Clock, 
  ArrowLeft, 
  Share2, 
  BookOpen,
  ArrowRight,
  Calendar,
  User,
  Eye,
  TrendingUp,
  Star,
  CheckCircle,
  Lightbulb,
  Target,
  BarChart3
} from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

interface BlogPostPageProps {
  slug?: string;
}

const BlogPostPage = ({ slug: propSlug }: BlogPostPageProps) => {
  const { slug: paramSlug } = useParams();
  const slug = propSlug || paramSlug;
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

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

  const { data: relatedPosts } = useQuery({
    queryKey: ['related-posts', post?.category],
    queryFn: async () => {
      if (!post?.category) return [];
      
      const { data, error } = await supabase
        .from('blog_posts')
        .select('title, slug, excerpt, read_time, category, is_featured')
        .eq('is_published', true)
        .neq('slug', slug)
        .limit(3);
      
      if (error) throw error;
      return data;
    },
    enabled: !!post?.category,
  });

  // Reading progress tracker
  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setReadingProgress(Math.min(100, Math.max(0, progress)));
    };

    window.addEventListener('scroll', updateReadingProgress);
    return () => window.removeEventListener('scroll', updateReadingProgress);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-8"></div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-24 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                <BookOpen className="h-12 w-12 text-gray-400" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
              <p className="text-lg text-gray-600 mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
            </div>
            <Link to="/blog">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const metaTitle = (post as any).meta_title || post.title;
  const metaDescription = (post as any).meta_description || post.excerpt;

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
      </Helmet>

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-8 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                {post.category}
              </Badge>
              {post.is_featured && (
                <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                  <Star className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 mb-8">
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="h-5 w-5 mr-2 text-blue-600" />
                <span>{new Date(post.published_at).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="h-5 w-5 mr-2 text-green-600" />
                <span>{post.read_time}</span>
              </div>
              <button 
                onClick={handleShare}
                className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/90 transition-colors"
              >
                <Share2 className="h-5 w-5 mr-2 text-purple-600" />
                <span>Share</span>
              </button>
            </div>

            {/* Key Highlights */}
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-blue-100">
                <TrendingUp className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-600">Industry Insights</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-green-100">
                <Target className="h-6 w-6 text-green-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-600">Actionable Strategies</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-purple-100">
                <BarChart3 className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-gray-600">Real Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <style jsx>{`
                .programmatic-seo-content {
                  line-height: 1.8;
                }
                .programmatic-seo-content h2 {
                  font-size: 2.25rem;
                  font-weight: 700;
                  color: #1f2937;
                  margin: 3rem 0 1.5rem 0;
                  position: relative;
                  padding-left: 1rem;
                  border-left: 4px solid #3b82f6;
                }
                .programmatic-seo-content h3 {
                  font-size: 1.75rem;
                  font-weight: 600;
                  color: #374151;
                  margin: 2.5rem 0 1rem 0;
                  display: flex;
                  align-items: center;
                  gap: 0.5rem;
                }
                .programmatic-seo-content h3::before {
                  content: "→";
                  color: #3b82f6;
                  font-weight: 700;
                }
                .programmatic-seo-content h4 {
                  font-size: 1.25rem;
                  font-weight: 600;
                  color: #4b5563;
                  margin: 2rem 0 1rem 0;
                  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
                  padding: 0.75rem 1rem;
                  border-radius: 0.5rem;
                  border-left: 3px solid #10b981;
                }
                .programmatic-seo-content p {
                  font-size: 1.125rem;
                  line-height: 1.8;
                  color: #374151;
                  margin: 1.5rem 0;
                }
                .programmatic-seo-content ul {
                  margin: 1.5rem 0;
                }
                .programmatic-seo-content li {
                  font-size: 1.125rem;
                  line-height: 1.7;
                  color: #374151;
                  margin: 0.75rem 0;
                  position: relative;
                  padding-left: 1.5rem;
                }
                .programmatic-seo-content li::before {
                  content: "✓";
                  position: absolute;
                  left: 0;
                  color: #10b981;
                  font-weight: 700;
                }
                .programmatic-seo-content strong {
                  color: #1f2937;
                  font-weight: 600;
                }
                .stats-highlight {
                  background: linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%);
                  border: 2px solid #3b82f6;
                  border-radius: 1rem;
                  padding: 2rem;
                  margin: 2rem 0;
                  box-shadow: 0 10px 25px rgba(59, 130, 246, 0.1);
                }
                .stats-highlight h3 {
                  color: #1e40af;
                  margin-top: 0;
                  font-size: 1.5rem;
                  display: flex;
                  align-items: center;
                  gap: 0.5rem;
                }
                .stats-highlight h3::before {
                  content: "";
                }
                .template-structure, .category-structure, .data-structure, .matrix-example, .url-examples, .ai-capabilities, .pipeline-steps, .legal-matrix, .property-page-elements, .neighborhood-content, .legal-page-structure {
                  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
                  border: 1px solid #e2e8f0;
                  border-radius: 1rem;
                  padding: 2rem;
                  margin: 2rem 0;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
                }
                .cta-section {
                  background: linear-gradient(135deg, #1e40af 0%, #7c3aed 100%);
                  color: white;
                  border-radius: 1rem;
                  padding: 3rem 2rem;
                  margin: 3rem 0;
                  text-align: center;
                  box-shadow: 0 20px 40px rgba(30, 64, 175, 0.3);
                }
                .cta-section h2 {
                  color: white;
                  border: none;
                  padding-left: 0;
                  margin-bottom: 1rem;
                }
                .cta-section p {
                  color: rgba(255, 255, 255, 0.9);
                  font-size: 1.25rem;
                  margin-bottom: 0;
                }
              `}</style>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </div>
      </section>

      {/* Key Takeaways Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Key Takeaways</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">Programmatic SEO can scale content creation from hundreds to thousands of pages</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">Template-based approaches ensure consistency while maintaining uniqueness</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">Quality control is essential when scaling content at this level</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">Data-driven content strategies outperform manual approaches</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Implement These Strategies?</h2>
            <p className="text-xl lg:text-2xl mb-10 opacity-90 leading-relaxed">
              Get a free consultation and see how programmatic SEO can transform your business with our proven strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4"
                onClick={() => setIsAuditModalOpen(true)}
              >
                Get Free Strategy Session
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
                asChild
              >
                <Link to="/blog">
                  Read More Articles
                  <BookOpen className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts && relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Continue Reading</h2>
                <p className="text-lg text-gray-600">Explore more programmatic SEO strategies and insights</p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} to={`/blog/${relatedPost.slug}`}>
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group border-0 shadow-lg hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="flex items-center justify-between mb-4">
                          <Badge variant="outline" className="border-blue-200 text-blue-700">
                            {relatedPost.category}
                          </Badge>
                          {relatedPost.is_featured && (
                            <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                        <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-4 leading-tight">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                          {relatedPost.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{relatedPost.read_time}</span>
                          </div>
                          <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <TrustedToolsSection />
      <Footer />
      
      <AuditModal 
        isOpen={isAuditModalOpen} 
        onClose={() => setIsAuditModalOpen(false)} 
      />

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0);
          background-size: 20px 20px;
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

export default BlogPostPage;
