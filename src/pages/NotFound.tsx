
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, ArrowLeft, FileText, Wrench, Building2, BookOpen } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const quickLinks = [
    {
      icon: <Home className="h-5 w-5" />,
      title: "Homepage",
      description: "Return to our main page",
      href: "/"
    },
    {
      icon: <Wrench className="h-5 w-5" />,
      title: "Services",
      description: "Explore our SEO services",
      href: "/services"
    },
    {
      icon: <Building2 className="h-5 w-5" />,
      title: "Industries",
      description: "Industry-specific solutions",
      href: "/industries"
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Resources",
      description: "Guides and tools",
      href: "/resources"
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Blog",
      description: "Latest SEO insights",
      href: "/blog"
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "Free Strategy",
      description: "Get your free consultation",
      href: "/free-strategy"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Page Not Found - Programmatic SEO Agency</title>
        <meta name="description" content="The page you're looking for doesn't exist. Find what you need with our helpful navigation links." />
      </Helmet>
      
      <Header />
      
      <main className="pt-20">
        <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <div className="mb-8">
                <h1 className="text-9xl font-bold text-blue-600 mb-4">404</h1>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Oops! Page Not Found
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  The page you're looking for doesn't exist or may have been moved. 
                  Let's help you find what you need.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button asChild className="webfx-button-primary">
                  <Link to="/">
                    <Home className="h-4 w-4 mr-2" />
                    Go Home
                  </Link>
                </Button>
                <Button variant="outline" onClick={() => window.history.back()}>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Go Back
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Links Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Popular Pages
              </h3>
              <p className="text-gray-600">
                Quick links to help you find what you're looking for
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {quickLinks.map((link, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                  <CardContent className="p-6">
                    <Link to={link.href} className="block">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-200">
                          <div className="text-blue-600">
                            {link.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-200">
                            {link.title}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Help Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Still Need Help?
              </h3>
              <p className="text-gray-600 mb-8">
                Can't find what you're looking for? Our team is here to help you navigate 
                to the right solution for your SEO needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="webfx-button-primary">
                  <Link to="/contact">
                    Contact Support
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/free-strategy">
                    Get Free Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <TrustedToolsSection />
      <Footer />
    </div>
  );
};

export default NotFound;
