
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Menu, X, ChevronDown, Phone, Globe } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link } from "react-router-dom";
import { useServices, useIndustries } from "@/hooks/useNavigation";
import { useSoftware } from "@/hooks/useSoftware";
import { useTools } from "@/hooks/useTools";
import { useCountries } from "@/hooks/useCountries";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface MobileMenuProps {
  onAuditModalOpen: () => void;
}

export const MobileMenu = ({ onAuditModalOpen }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [countriesOpen, setCountriesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  
  const { data: services } = useServices();
  const { data: industries } = useIndustries();
  const { data: software } = useSoftware();
  const { data: tools } = useTools();
  const { data: countries } = useCountries();

  // Fetch featured blog posts for Resources section
  const { data: featuredBlogPosts } = useQuery({
    queryKey: ['featured-blog-posts-mobile'],
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
  };

  // Combine manual guide with database posts
  const allFeaturedPosts = [programmaticSeoGuide, ...(featuredBlogPosts || [])].slice(0, 3);

  const handleAuditClick = () => {
    setIsOpen(false);
    onAuditModalOpen();
  };

  const handleCloseClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="sm" className="xl:hidden">
          <Menu className="h-5 w-5 text-gray-800" />
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[90vh]">
        <DrawerHeader className="text-left border-b">
          <DrawerTitle className="flex items-center justify-between">
            <span>Navigation</span>
            <Button variant="ghost" size="sm" onClick={handleCloseClick}>
              <X className="h-5 w-5" />
            </Button>
          </DrawerTitle>
        </DrawerHeader>
        
        <div className="flex flex-col p-4 space-y-4 overflow-y-auto">
          {/* Services Section */}
          <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-3 pt-2">
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 text-sm">SEO Services</h4>
                {services?.filter(service => service.slug).map((service) => (
                  <Link 
                    key={service.id}
                    to={`/services/${service.slug}`} 
                    className="block text-gray-600 py-2 text-sm hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Industries Section */}
          <Collapsible open={industriesOpen} onOpenChange={setIndustriesOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              Industries
              <ChevronDown className={`h-4 w-4 transition-transform ${industriesOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-2 pt-2">
              {industries?.map((industry) => (
                <Link 
                  key={industry.id}
                  to={`/industries/${industry.slug}`} 
                  className="block text-gray-600 py-2 text-sm hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {industry.name}
                </Link>
              ))}
            </CollapsibleContent>
          </Collapsible>

          {/* Countries Section */}
          <Collapsible open={countriesOpen} onOpenChange={setCountriesOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              <span className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                Countries
              </span>
              <ChevronDown className={`h-4 w-4 transition-transform ${countriesOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-2 pt-2">
              {countries?.filter(c => c.is_featured).map((country) => (
                <Link 
                  key={country.id}
                  to={`/countries/${country.slug}`} 
                  className="flex items-center gap-2 text-gray-600 py-2 text-sm hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{country.flag_emoji}</span>
                  {country.name}
                </Link>
              ))}
              {countries?.some(c => !c.is_featured) && (
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider pt-2">Coming Soon</p>
              )}
              {countries?.filter(c => !c.is_featured).map((country) => (
                <span 
                  key={country.id}
                  className="flex items-center gap-2 text-gray-400 py-2 text-sm cursor-default"
                >
                  <span>{country.flag_emoji}</span>
                  {country.name}
                </span>
              ))}
              <Link 
                to="/countries" 
                className="block text-blue-600 py-2 text-sm font-medium hover:text-blue-700"
                onClick={() => setIsOpen(false)}
              >
                View All Countries →
              </Link>
            </CollapsibleContent>
          </Collapsible>

          {/* Direct Links */}
          <Link to="/results" className="block py-3 font-semibold text-gray-800 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
            Results
          </Link>

          {/* Resources Section */}
          <Collapsible open={resourcesOpen} onOpenChange={setResourcesOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              Resources
              <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-3 pt-2">
              {/* Content & Guides */}
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 text-sm">Content & Guides</h4>
                {allFeaturedPosts.map((post) => (
                  <Link 
                    key={post.id}
                    to={post.id === 'programmatic-seo-guide' ? '/programmatic-seo-guide' : `/blog/${post.slug}`}
                    className="block text-gray-600 py-2 text-sm hover:text-blue-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {post.title}
                  </Link>
                ))}
                <Link to="/blog" className="block text-gray-600 py-2 text-sm hover:text-blue-600" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
              </div>

              {/* Software & Tools */}
              <div className="space-y-2 pt-4 border-t border-gray-100">
                <h4 className="font-medium text-gray-900 text-sm">Software & Tools</h4>
                <Link 
                  to="/software" 
                  className="block text-gray-600 py-2 text-sm hover:text-blue-600 font-medium" 
                  onClick={() => setIsOpen(false)}
                >
                  Software Platforms
                </Link>
                <Link 
                  to="/tools" 
                  className="block text-gray-600 py-2 text-sm hover:text-emerald-600 font-medium" 
                  onClick={() => setIsOpen(false)}
                >
                  SEO Tools
                </Link>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <Link to="/about" className="block py-3 font-semibold text-gray-800 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
            About
          </Link>
          
          <Link to="/jobs" className="block py-3 font-semibold text-gray-800 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
            Jobs
          </Link>
          
          <Link to="/contact" className="block py-3 font-semibold text-gray-800 hover:text-blue-600 transition-colors" onClick={() => setIsOpen(false)}>
            Contact
          </Link>

          {/* CTA Button */}
          <Button 
            onClick={handleAuditClick}
            className="webfx-button-primary w-full py-4 text-base font-bold mt-4"
          >
            Get Free Strategy Call
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
