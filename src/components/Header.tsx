
import { Button } from "@/components/ui/button";
import { Phone, Settings } from "lucide-react";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { useState } from "react";
import { AuditModal } from "./AuditModal";
import { MobileMenu } from "./MobileMenu";
import { useNavigate, Link } from "react-router-dom";
import { useServices, useIndustries, useResources } from "@/hooks/useNavigation";

export const Header = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const { data: services } = useServices();
  const { data: industries } = useIndustries();
  const { data: resources } = useResources();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 lg:h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/lovable-uploads/0d07af3b-9627-4d89-b2a7-0972d8195b23.png" 
              alt="pSEO" 
              className="h-5 lg:h-7 w-auto hover:scale-105 transition-transform duration-200 cursor-pointer" 
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
                  <div className="grid gap-6 p-8 w-[700px] grid-cols-2 bg-white shadow-2xl rounded-3xl border border-gray-100">
                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-900 text-lg border-b border-gray-100 pb-2">SEO Services</h4>
                      {services?.filter(service => service.slug).slice(0, 4).map((service) => (
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
                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-900 text-lg border-b border-gray-100 pb-2">Analytics & Strategy</h4>
                      <Link 
                        to="/free-strategy"
                        className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-xl transition-all duration-200 font-medium group"
                      >
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:bg-red-600"></div>
                          Free SEO Strategy
                        </div>
                      </Link>
                      {services?.filter(service => service.slug).slice(4, 7).map((service) => (
                        <Link 
                          key={service.id}
                          to={`/services/${service.slug}`} 
                          className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-xl transition-all duration-200 font-medium group"
                        >
                          <div className="flex items-center">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:bg-yellow-600"></div>
                            {service.title}
                          </div>
                        </Link>
                      ))}
                    </div>
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
                  <div className="grid gap-3 p-6 w-[400px] bg-white shadow-2xl rounded-2xl border border-gray-100">
                    <Link 
                      to="/free-strategy"
                      className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium"
                    >
                      Free SEO Strategy
                    </Link>
                    <Link 
                      to="/blog" 
                      className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium"
                    >
                      Blog
                    </Link>
                    <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium">Case Studies</a>
                    {resources?.slice(0, 2).map((resource) => (
                      <Link 
                        key={resource.id}
                        to={`/resources/${resource.slug}`} 
                        className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium"
                      >
                        {resource.title}
                      </Link>
                    ))}
                    <Link 
                      to="/software"
                      className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium"
                    >
                      Software & Tools
                    </Link>
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
            {/* Admin Access Button - Hidden on mobile */}
            <Button variant="ghost" size="sm" onClick={() => navigate('/admin/login')} className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-blue-600">
              <Settings className="h-4 w-4" />
              <span className="text-xs">Admin</span>
            </Button>

            {/* Phone section - Responsive */}
            <div className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl px-3 py-2 border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <Phone className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600 font-medium">Call Now:</div>
                <div className="font-bold text-gray-900 text-sm">1-888-601-5359</div>
              </div>
            </div>

            {/* Mobile phone display */}
            <div className="flex lg:hidden items-center space-x-2 bg-blue-50 rounded-lg px-2 py-1">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="text-blue-700 font-bold text-xs">Call</span>
            </div>

            <Button className="hidden sm:flex webfx-button-primary px-3 lg:px-6 py-2 text-xs lg:text-sm font-bold shadow-lg hover:shadow-xl" onClick={() => setIsAuditModalOpen(true)}>
              <span className="hidden md:inline">Get Free Strategy Call</span>
              <span className="md:hidden">Free Call</span>
            </Button>
            
            {/* Mobile CTA - Only visible on mobile */}
            <Button className="sm:hidden webfx-button-primary px-2 py-2 text-xs font-bold" onClick={() => setIsAuditModalOpen(true)}>
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
