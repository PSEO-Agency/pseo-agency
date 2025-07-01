
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Menu, X, ChevronDown, Phone, Settings } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useNavigate } from "react-router-dom";

interface MobileMenuProps {
  onAuditModalOpen: () => void;
}

export const MobileMenu = ({ onAuditModalOpen }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const navigate = useNavigate();

  const handleAuditClick = () => {
    setIsOpen(false);
    onAuditModalOpen();
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
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
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
                <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">Programmatic SEO</a>
                <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">Technical SEO</a>
                <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">Content at Scale</a>
                <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">Link Building</a>
              </div>
              <div className="space-y-2 pt-3 border-t border-gray-100">
                <h4 className="font-medium text-gray-900 text-sm">Analytics & Strategy</h4>
                <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">SEO Audit</a>
                <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">Keyword Research</a>
                <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">Competitor Analysis</a>
                <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">Performance Tracking</a>
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
              <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">E-commerce</a>
              <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">SaaS</a>
              <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">Healthcare</a>
              <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">Real Estate</a>
              <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">Finance</a>
              <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">Travel</a>
              <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">Education</a>
              <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">Legal</a>
            </CollapsibleContent>
          </Collapsible>

          {/* Direct Links */}
          <a href="#" className="block py-3 font-semibold text-gray-800 hover:text-blue-600 transition-colors">Results</a>

          {/* Resources Section */}
          <Collapsible open={resourcesOpen} onOpenChange={setResourcesOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full py-3 text-left font-semibold text-gray-800 hover:text-blue-600 transition-colors">
              Resources
              <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="pl-4 space-y-2 pt-2">
              <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">Blog</a>
              <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">Case Studies</a>
              <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">SEO Tools</a>
              <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">Guides & eBooks</a>
              <a href="#" className="block text-gray-600 py-2 text-sm hover:text-blue-600">Webinars</a>
            </CollapsibleContent>
          </Collapsible>

          <a href="#" className="block py-3 font-semibold text-gray-800 hover:text-blue-600 transition-colors">About</a>
          <a href="#" className="block py-3 font-semibold text-gray-800 hover:text-blue-600 transition-colors">Contact</a>

          {/* Admin Access */}
          <Button 
            variant="ghost" 
            onClick={() => {
              setIsOpen(false);
              navigate('/admin/login');
            }} 
            className="justify-start p-3 text-gray-600 hover:text-blue-600"
          >
            <Settings className="h-4 w-4 mr-2" />
            Admin Access
          </Button>

          {/* Contact Info */}
          <div className="pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-3 bg-blue-50 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <Phone className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <div className="text-xs text-gray-600 font-medium">Call Now:</div>
                <div className="font-bold text-gray-900 text-sm">1-888-601-5359</div>
              </div>
            </div>
          </div>

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
