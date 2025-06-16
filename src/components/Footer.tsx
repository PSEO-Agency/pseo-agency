
import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/ba592c92-0d43-4888-adec-c4b937d2a5b7.png" 
              alt="pSEO" 
              className="h-8 w-auto mb-4 invert"
            />
            <p className="text-gray-400 mb-6 max-w-md">
              Leading programmatic SEO agency helping businesses scale their organic traffic 
              and revenue through data-driven content strategies.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Linkedin className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Programmatic SEO</a></li>
              <li><a href="#" className="hover:text-white">Technical SEO</a></li>
              <li><a href="#" className="hover:text-white">Content Strategy</a></li>
              <li><a href="#" className="hover:text-white">SEO Audits</a></li>
              <li><a href="#" className="hover:text-white">Analytics & Reporting</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Case Studies</a></li>
              <li><a href="#" className="hover:text-white">SEO Tools</a></li>
              <li><a href="#" className="hover:text-white">Guides</a></li>
              <li><a href="#" className="hover:text-white">Webinars</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-gray-400 text-sm">
              © 2024 pSEO. All rights reserved. | 
              <span className="ml-1">Call us: 1-888-601-5359</span>
            </div>
            <div className="text-right">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
