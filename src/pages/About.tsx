
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>About Us - pSEO</title>
        <meta name="description" content="Learn about pSEO and our mission to help businesses scale through programmatic SEO strategies." />
      </Helmet>
      
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About pSEO</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              We are a leading programmatic SEO agency dedicated to helping businesses scale their organic traffic 
              and revenue through innovative, data-driven content strategies.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              To democratize access to enterprise-level SEO strategies by making programmatic SEO accessible 
              to businesses of all sizes. We believe every company deserves the opportunity to compete in 
              the digital landscape with sophisticated, scalable SEO solutions.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What We Do</h2>
            <p className="text-gray-600 mb-6">
              We specialize in creating thousands of high-quality, SEO-optimized pages that target 
              long-tail keywords and drive qualified traffic to your business. Our programmatic approach 
              allows us to scale content creation while maintaining quality and relevance.
            </p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why Choose Us</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Proven track record of generating millions in additional revenue for our clients</li>
              <li>Cutting-edge technology and data-driven methodologies</li>
              <li>Experienced team of SEO specialists and content strategists</li>
              <li>Transparent reporting and measurable results</li>
              <li>Customized solutions for every industry and business size</li>
            </ul>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
