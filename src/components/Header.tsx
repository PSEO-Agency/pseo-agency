
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
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/ba592c92-0d43-4888-adec-c4b937d2a5b7.png" 
              alt="pSEO" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation with Mega Menu */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[600px] grid-cols-2">
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">SEO Services</h4>
                      <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Programmatic SEO</a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Technical SEO</a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Content at Scale</a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Link Building</a>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-gray-900">Analytics & Strategy</h4>
                      <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">SEO Audit</a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Keyword Research</a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Competitor Analysis</a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Performance Tracking</a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[500px] grid-cols-2">
                    <div className="space-y-3">
                      <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">E-commerce</a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">SaaS</a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Healthcare</a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Real Estate</a>
                    </div>
                    <div className="space-y-3">
                      <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Finance</a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Travel</a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Education</a>
                      <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Legal</a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">Results</a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-blue-600 font-medium">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid gap-3 p-6 w-[400px]">
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Blog</a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Case Studies</a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">SEO Tools</a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Guides & eBooks</a>
                    <a href="#" className="block text-sm text-gray-600 hover:text-blue-600">Webinars</a>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">About</a>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">Contact</a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Section */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="text-gray-700">Call Us:</span>
              <span className="font-semibold text-gray-900">1-888-601-5359</span>
            </div>
            <Button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
              onClick={() => setIsAuditModalOpen(true)}
            >
              Get My Free Proposal
            </Button>
            <Menu className="h-6 w-6 lg:hidden cursor-pointer" />
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
