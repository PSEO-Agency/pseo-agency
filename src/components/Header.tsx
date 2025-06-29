import { Button } from "@/components/ui/button";
import { Menu, Phone, ChevronDown, Star } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useState } from "react";
import { AuditModal } from "./AuditModal";

export const Header = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <header className="bg-white/98 backdrop-blur-xl border-b border-gray-200/60 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/ba592c92-0d43-4888-adec-c4b937d2a5b7.png" 
              alt="pSEO" 
              className="h-12 w-auto hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Enhanced Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-800 hover:text-blue-600 font-semibold text-lg px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-200">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-6 p-10 w-[800px] grid-cols-2 bg-white shadow-2xl rounded-3xl border border-gray-100">
                    <div className="space-y-6">
                      <h4 className="font-bold text-gray-900 text-xl border-b border-gray-100 pb-3">SEO Services</h4>
                      <a href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-4 rounded-xl transition-all duration-200 font-semibold group">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 group-hover:bg-blue-600"></div>
                          Programmatic SEO
                        </div>
                      </a>
                      <a href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-4 rounded-xl transition-all duration-200 font-semibold group">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3 group-hover:bg-green-600"></div>
                          Technical SEO
                        </div>
                      </a>
                      <a href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-4 rounded-xl transition-all duration-200 font-semibold group">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:bg-purple-600"></div>
                          Content at Scale
                        </div>
                      </a>
                      <a href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-4 rounded-xl transition-all duration-200 font-semibold group">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 group-hover:bg-orange-600"></div>
                          Link Building
                        </div>
                      </a>
                    </div>
                    <div className="space-y-6">
                      <h4 className="font-bold text-gray-900 text-xl border-b border-gray-100 pb-3">Analytics & Strategy</h4>
                      <a href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-4 rounded-xl transition-all duration-200 font-semibold group">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3 group-hover:bg-red-600"></div>
                          SEO Audit
                        </div>
                      </a>
                      <a href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-4 rounded-xl transition-all duration-200 font-semibold group">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3 group-hover:bg-yellow-600"></div>
                          Keyword Research
                        </div>
                      </a>
                      <a href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-4 rounded-xl transition-all duration-200 font-semibold group">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 group-hover:bg-indigo-600"></div>
                          Competitor Analysis
                        </div>
                      </a>
                      <a href="#" className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 p-4 rounded-xl transition-all duration-200 font-semibold group">
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
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium text-lg px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-4 p-8 w-[600px] grid-cols-2 bg-white shadow-2xl rounded-2xl border border-gray-100">
                    <div className="space-y-4">
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">E-commerce</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">SaaS</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">Healthcare</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">Real Estate</a>
                    </div>
                    <div className="space-y-4">
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">Finance</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">Travel</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">Education</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">Legal</a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#" className="text-gray-800 hover:text-blue-600 font-semibold text-lg px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-200">Results</a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium text-lg px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-4 p-8 w-[500px] bg-white shadow-2xl rounded-2xl border border-gray-100">
                    <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">Blog</a>
                    <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">Case Studies</a>
                    <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">SEO Tools</a>
                    <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">Guides & eBooks</a>
                    <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">Webinars</a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#" className="text-gray-800 hover:text-blue-600 font-semibold text-lg px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-200">About</a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#" className="text-gray-800 hover:text-blue-600 font-semibold text-lg px-6 py-3 rounded-xl hover:bg-blue-50 transition-all duration-200">Contact</a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Enhanced CTA Section */}
          <div className="flex items-center space-x-6">
            {/* Enhanced phone section */}
            <div className="hidden lg:flex items-center space-x-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl px-6 py-3 border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600 font-medium">Call Us Now:</div>
                <div className="font-bold text-gray-900 text-sm">1-888-601-5359</div>
              </div>
            </div>

            {/* Trust indicator */}
            <div className="hidden md:flex items-center space-x-2 bg-yellow-50 rounded-xl px-4 py-2 border border-yellow-200">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-current" />
                ))}
              </div>
              <span className="text-yellow-700 text-xs font-bold">4.9/5 Rating</span>
            </div>

            <Button 
              className="webfx-button-primary px-10 py-4 text-lg font-bold shadow-xl hover:shadow-2xl"
              onClick={() => setIsAuditModalOpen(true)}
            >
              Get Free Strategy Call
            </Button>
            <Menu className="h-8 w-8 lg:hidden cursor-pointer text-gray-800 hover:text-blue-600 transition-colors duration-200" />
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
