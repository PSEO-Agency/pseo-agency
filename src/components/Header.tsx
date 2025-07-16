
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useState } from "react";
import { AuditModal } from "./AuditModal";
import { MobileMenu } from "./MobileMenu";
import { useNavigate, Link } from "react-router-dom";
import { useServices, useIndustries } from "@/hooks/useNavigation";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const Header = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const { data: services } = useServices();
  const { data: industries } = useIndustries();

  // Fetch featured blog posts for Resources dropdown
  const { data: featuredBlogPosts } = useQuery({
    queryKey: ['featured-blog-posts-nav'],
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
    excerpt: 'Master programmatic SEO with our comprehensive guide.',
    is_featured: true,
  };

  // Combine manual guide with database posts for Resources dropdown
  const allFeaturedPosts = [programmaticSeoGuide, ...(featuredBlogPosts || [])].slice(0, 3);

  // Helper function to chunk services into columns of max 4 items
  const chunkServices = (services: any[], maxPerColumn: number = 4) => {
    if (!services || services.length === 0) return [];
    
    const chunks = [];
    for (let i = 0; i < services.length; i += maxPerColumn) {
      chunks.push(services.slice(i, i + maxPerColumn));
    }
    return chunks;
  };

  const serviceColumns = chunkServices(services?.filter(service => service.slug) || []);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/lovable-uploads/6354214b-6403-4365-974c-fc958fe64e4e.png" 
              alt="Programmatic SEO Agency" 
              className="h-8 lg:h-10 w-auto hover:scale-105 transition-transform duration-200 cursor-pointer" 
              onClick={() => navigate('/')}
            />
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <NavigationMenu className="hidden xl:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-800 hover:text-blue-600 font-semibold text-sm px-3 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className={`grid gap-6 p-8 bg-white shadow-2xl rounded-3xl border border-gray-100 ${serviceColumns.length === 1 ? 'w-[400px] grid-cols-1' : serviceColumns.length === 2 ? 'w-[700px] grid-cols-2' : 'w-[900px] grid-cols-3'}`}>
                    {/* Header row */}
                    <div className="col-span-full mb-2">
                      <h4 className="font-bold text-gray-900 text-lg border-b border-gray-100 pb-2">pSEO Services</h4>
                    </div>
                    
                    {serviceColumns.map((column, columnIndex) => (
                      <div key={columnIndex} className="space-y-4">
                        {column.map((service) => (
                          <Link 
                            key={service.id}
                            to={`/services/${service.slug}`} 
                            className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-xl transition-all duration-200 font-medium group"
                          >
                            <div className="flex items-center">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600"></div>
                              {service.title}
                            </div>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium text-sm px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-4 p-6 w-[500px] grid-cols-2 bg-white shadow-2xl rounded-2xl border border-gray-100">
                    <div className="space-y-3">
                      {industries?.slice(0, 4).map((industry) => (
                        <Link 
                          key={industry.id}
                          to={`/industries/${industry.slug}`} 
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium"
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                    <div className="space-y-3">
                      {industries?.slice(4, 8).map((industry) => (
                        <Link 
                          key={industry.id}
                          to={`/industries/${industry.slug}`} 
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium"
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/results" className="text-gray-800 hover:text-blue-600 font-semibold text-sm px-3 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200">Results</Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium text-sm px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-6 p-6 w-[600px] grid-cols-2 bg-white shadow-2xl rounded-2xl border border-gray-100">
                    <div className="space-y-3">
                      <h4 className="font-bold text-gray-900 text-base border-b border-gray-100 pb-2">Content & Guides</h4>
                      {allFeaturedPosts.map((post) => (
                        <Link 
                          key={post.id}
                          to={post.id === 'programmatic-seo-guide' ? '/programmatic-seo-guide' : `/blog/${post.slug}`}
                          className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium text-sm"
                        >
                          {post.title}
                        </Link>
                      ))}
                      <Link 
                        to="/blog" 
                        className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium"
                      >
                        Blog
                      </Link>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-bold text-gray-900 text-base border-b border-gray-100 pb-2">Software & Tools</h4>
                      <Link 
                        to="/software" 
                        className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium"
                      >
                        Software Platforms
                      </Link>
                      <Link 
                        to="/tools" 
                        className="block text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 p-2 rounded-lg transition-all duration-200 font-medium"
                      >
                        SEO Tools
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about" className="text-gray-800 hover:text-blue-600 font-semibold text-sm px-3 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200">About</Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/jobs" className="text-gray-800 hover:text-blue-600 font-semibold text-sm px-3 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200">Jobs</Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact" className="text-gray-800 hover:text-blue-600 font-semibold text-sm px-3 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200">Contact</Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Section */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            {/* Phone section - Responsive */}
            <div className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl px-3 py-2 border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <Phone className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600 font-medium">Call Now:</div>
                <div className="font-bold text-gray-900 text-sm">+31 (0) 85 060 1065</div>
              </div>
            </div>


            <Button className="hidden sm:flex webfx-button-primary px-3 lg:px-6 py-2 text-xs lg:text-sm font-bold shadow-lg hover:shadow-xl" onClick={() => navigate('/strategy-call')}>
              <span className="hidden md:inline">Get Free Strategy Call</span>
              <span className="md:hidden">Free Call</span>
            </Button>
            
            {/* Mobile CTA - Only visible on mobile */}
            <Button className="sm:hidden webfx-button-primary px-2 py-2 text-xs font-bold" onClick={() => navigate('/strategy-call')}>
              Free Call
            </Button>
            
            {/* Mobile Menu */}
            <MobileMenu onAuditModalOpen={() => setIsAuditModalOpen(true)} />
          </div>
        </div>
      </div>

      <AuditModal isOpen={isAuditModalOpen} onClose={() => setIsAuditModalOpen(false)} />
    </header>
  );
};
