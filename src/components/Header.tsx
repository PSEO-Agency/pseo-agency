
import { Button } from "@/components/ui/button";
import { Menu, Phone, ChevronDown } from "lucide-react";
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
    <header className="bg-white/95 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/ba592c92-0d43-4888-adec-c4b937d2a5b7.png" 
              alt="pSEO" 
              className="h-10 w-auto hover:scale-105 transition-transform duration-200"
            />
          </div>

          {/* Enhanced Navigation with Mega Menu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium text-lg px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-4 p-8 w-[700px] grid-cols-2 bg-white shadow-2xl rounded-2xl border border-gray-100">
                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-900 text-lg border-b border-gray-100 pb-2">SEO Services</h4>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">Programmatic SEO</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">Technical SEO</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">Content at Scale</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">Link Building</a>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-bold text-gray-900 text-lg border-b border-gray-100 pb-2">Analytics & Strategy</h4>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">SEO Audit</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">Keyword Research</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">Competitor Analysis</a>
                      <a href="#" className="block text-gray-600 hover:text-blue-600 hover:bg-blue-50 p-3 rounded-lg transition-all duration-200 font-medium">Performance Tracking</a>
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
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-lg px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200">Results</a>
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
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-lg px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200">About</a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium text-lg px-4 py-2 rounded-lg hover:bg-blue-50 transition-all duration-200">Contact</a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Enhanced CTA Section */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-3 bg-gray-50 rounded-full px-4 py-2 border border-gray-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="text-gray-700 text-sm">Call Us:</span>
              <span className="font-bold text-gray-900 text-sm">1-888-601-5359</span>
            </div>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsAuditModalOpen(true)}
            >
              Get My Free Proposal
            </Button>
            <Menu className="h-7 w-7 lg:hidden cursor-pointer text-gray-700 hover:text-blue-600 transition-colors duration-200" />
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
