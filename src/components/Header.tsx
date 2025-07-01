
import { Button } from "@/components/ui/button";
import { Menu, Phone, ChevronDown, Settings } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { AuditModal } from "./AuditModal";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white/98 backdrop-blur-xl border-b border-gray-200/60 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img 
              src="/lovable-uploads/68267ce2-fd99-4216-8f3a-6afa830af03a.png" 
              alt="pSEO" 
              className="h-8 lg:h-12 w-auto hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Enhanced Navigation - Hidden on mobile */}
          <NavigationMenu className="hidden xl:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-800 hover:text-blue-600 font-semibold text-base px-4 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-6 p-8 w-[700px] grid-cols-2 bg-white shadow-2xl rounded-3xl border border-gray-100">
                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-900 text-lg border-b border-gray-100 pb-2">SEO Services</h4>
                      <a href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-xl transition-all duration-200 font-medium group">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600"></div>
                          Programmatic SEO
                        </div>
                      </a>
                      <a href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-xl transition-all duration-200 font-medium group">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-green-600"></div>
                          Technical SEO
                        </div>
                      </a>
                      <a href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-xl transition-all duration-200 font-medium group">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:bg-purple-600"></div>
                          Content at Scale
                        </div>
                      </a>
                      <a href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-xl transition-all duration-200 font-medium group">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:bg-orange-600"></div>
                          Link Building
                        </div>
                      </a>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-900 text-lg border-b border-gray-100 pb-2">Analytics & Strategy</h4>
                      <a href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-xl transition-all duration-200 font-medium group">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:bg-red-600"></div>
                          SEO Audit
                        </div>
                      </a>
                      <a href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-xl transition-all duration-200 font-medium group">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:bg-yellow-600"></div>
                          Keyword Research
                        </div>
                      </a>
                      <a href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-xl transition-all duration-200 font-medium group">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 group-hover:bg-indigo-600"></div>
                          Competitor Analysis
                        </div>
                      </a>
                      <a href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-xl transition-all duration-200 font-medium group">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mr-3 group-hover:bg-pink-600"></div>
                          Performance Tracking
                        </div>
                      </a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium text-base px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-4 p-6 w-[500px] grid-cols-2 bg-white shadow-2xl rounded-2xl border border-gray-100">
                    <div className="space-y-3">
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium">E-commerce</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium">SaaS</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium">Healthcare</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium">Real Estate</a>
                    </div>
                    <div className="space-y-3">
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium">Finance</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium">Travel</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium">Education</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium">Legal</a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#" className="text-gray-800 hover:text-blue-600 font-semibold text-base px-4 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200">Results</a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium text-base px-3 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px] bg-white shadow-2xl rounded-2xl border border-gray-100">
                    <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium">Blog</a>
                    <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium">Case Studies</a>
                    <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium">SEO Tools</a>
                    <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium">Guides & eBooks</a>
                    <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-all duration-200 font-medium">Webinars</a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#" className="text-gray-800 hover:text-blue-600 font-semibold text-base px-4 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200">About</a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#" className="text-gray-800 hover:text-blue-600 font-semibold text-base px-4 py-2 rounded-xl hover:bg-blue-50 transition-all duration-200">Contact</a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Enhanced CTA Section */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            {/* Admin Access Button - Hidden on mobile */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/admin/login')}
              className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-blue-600"
            >
              <Settings className="h-4 w-4" />
              <span className="text-xs">Admin</span>
            </Button>

            {/* Enhanced phone section - Responsive */}
            <div className="hidden lg:flex items-center space-x-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl px-4 py-2 border border-gray-200 shadow-sm">
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
            <div className="flex lg:hidden items-center space-x-2 bg-blue-50 rounded-lg px-3 py-2">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="text-blue-700 font-bold text-sm">Call Now</span>
            </div>

            <Button 
              className="webfx-button-primary px-4 lg:px-8 py-2 lg:py-3 text-sm lg:text-base font-bold shadow-lg hover:shadow-xl"
              onClick={() => setIsAuditModalOpen(true)}
            >
              <span className="hidden sm:inline">Get Free Strategy Call</span>
              <span className="sm:hidden">Free Call</span>
            </Button>
            
            <Menu className="h-6 w-6 xl:hidden cursor-pointer text-gray-800 hover:text-blue-600 transition-colors duration-200" />
          </div>
        </div>
      </div>

      <AuditModal 
        isOpen={isAuditModalOpen} 
        onClose={() => setIsAuditModalOpen(false)} 
      />
    </header>
  );
};
