
import { Button } from "@/components/ui/button";
import { Menu, Phone } from "lucide-react";

export const Header = () => {
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

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Industries</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Results</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Resources</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </nav>

          {/* CTA Section */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="text-gray-700">Call Us:</span>
              <span className="font-semibold text-gray-900">1-888-601-5359</span>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              Get My Free Proposal
            </Button>
            <Menu className="h-6 w-6 lg:hidden cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};
