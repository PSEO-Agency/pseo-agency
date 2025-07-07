
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BlogVerification } from "@/components/BlogVerification";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BlogVerificationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-16">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Blog Posts Verification</h1>
          <BlogVerification />
          
          <div className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold">Test Links:</h2>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/blog/saas-programmatic-seo-10000-landing-pages" 
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Test SaaS Programmatic SEO Post
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog/ecommerce-programmatic-seo-scale-product-pages" 
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Test E-commerce SEO Post
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  View All Blog Posts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogVerificationPage;
