
import { Facebook, Twitter, Linkedin, Youtube, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  // Load the chat widget script when the footer component mounts
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://widgets.leadconnectorhq.com/loader.js';
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js');
    script.setAttribute('data-widget-id', '68639be981758b26193bfaba');
    document.body.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      const existingScript = document.querySelector('script[src="https://widgets.leadconnectorhq.com/loader.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Top CTA Section */}
        <div className="py-16 border-b border-white/20">
          <div className="text-center">
            <h3 className="text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Ready to Scale Your Business?
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses that trust our programmatic SEO expertise to drive their growth.
            </p>
            <Button className="webfx-button-primary text-lg px-10 py-6 h-auto">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <img 
                src="/lovable-uploads/ba592c92-0d43-4888-adec-c4b937d2a5b7.png" 
                alt="pSEO" 
                className="h-12 w-auto mb-6 invert"
              />
              <p className="text-blue-200 mb-8 max-w-md leading-relaxed text-lg">
                Leading programmatic SEO agency helping businesses scale their organic traffic 
                and revenue through data-driven content strategies.
              </p>
              
              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-200">+31 (0) 85 060 1065</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-blue-200">info@programmaticseo.agency</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-blue-400" />
                  <div className="text-blue-200">
                    <div>Euregioweg 235</div>
                    <div>7532 SM Enschede, Netherlands</div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                  <Facebook className="h-6 w-6 text-blue-300 group-hover:text-white transition-colors duration-200" />
                </div>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                  <Twitter className="h-6 w-6 text-blue-300 group-hover:text-white transition-colors duration-200" />
                </div>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                  <Linkedin className="h-6 w-6 text-blue-300 group-hover:text-white transition-colors duration-200" />
                </div>
                <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer group">
                  <Youtube className="h-6 w-6 text-blue-300 group-hover:text-white transition-colors duration-200" />
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-lg">Programmatic SEO</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-lg">Technical SEO</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-lg">Content Strategy</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-lg">SEO Audits</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-lg">Analytics & Reporting</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Resources</h4>
              <ul className="space-y-3">
                <li><Link to="/blog" className="text-blue-200 hover:text-white transition-colors duration-200 text-lg">Blog</Link></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-lg">Case Studies</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-lg">SEO Tools</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-lg">Guides</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-lg">Webinars</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-xl font-bold mb-6 text-white">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors duration-200 text-lg">About Us</Link></li>
                <li><Link to="/jobs" className="text-blue-200 hover:text-white transition-colors duration-200 text-lg">Careers</Link></li>
                <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors duration-200 text-lg">Contact</Link></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-lg">Privacy Policy</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors duration-200 text-lg">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 py-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-blue-200 text-lg">
              © 2024 Programmatic SEO B.V. All rights reserved.
            </div>
            <div className="text-right">
              <Button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
