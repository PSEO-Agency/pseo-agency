
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, MessageCircle, Users, Zap } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone",
      content: "1-888-601-5359",
      description: "Mon-Fri 9am-6pm EST"
    },
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: "Email",
      content: "hello@pseo.com",
      description: "We respond within 2 hours"
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-600" />,
      title: "Location",
      content: "New York, NY",
      description: "Remote team worldwide"
    }
  ];

  const features = [
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: "Fast Response",
      description: "Get a response within 2 hours during business days"
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Expert Team",
      description: "Speak directly with our SEO specialists"
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-green-600" />,
      title: "Free Consultation",
      description: "30-minute strategy session at no cost"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact Us - pSEO | Get Your Free SEO Strategy Call</title>
        <meta name="description" content="Ready to scale with programmatic SEO? Contact pSEO for a free consultation. Expert team, fast response, proven results." />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-green-100 text-green-800 mb-6 px-4 py-2 text-sm font-semibold">
              Free Strategy Session Available
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Let's Scale Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Business Together
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to unlock exponential organic growth? Our team of programmatic SEO experts 
              is here to help you dominate your market.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6 group-hover:shadow-xl transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Ready to scale your business with programmatic SEO? Let's discuss your goals and create a custom strategy.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-5 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <Card className="shadow-2xl border-0">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-gray-900">Send us a message</CardTitle>
                    <CardDescription className="text-gray-600">
                      Fill out the form below and we'll get back to you within 2 hours.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="h-12"
                            placeholder="John Doe"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="h-12"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                          Company Name
                        </label>
                        <Input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="h-12"
                          placeholder="Your Company"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          Project Details *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          placeholder="Tell us about your business, current SEO challenges, and goals..."
                        />
                      </div>
                      
                      <Button type="submit" className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg font-semibold">
                        Send Message & Get Free Consultation
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Information */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact Methods */}
                <div className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            {method.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                            <p className="text-gray-900 font-medium mb-1">{method.content}</p>
                            <p className="text-sm text-gray-600">{method.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                {/* CTA Card */}
                <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <div className="text-center">
                      <Clock className="h-12 w-12 mx-auto mb-4 opacity-90" />
                      <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
                      <p className="mb-6 opacity-90">
                        Book a free 30-minute strategy call with our team to discuss how programmatic SEO can transform your business.
                      </p>
                      <Button 
                        className="bg-white text-blue-600 hover:bg-gray-100 w-full font-semibold"
                        onClick={() => navigate('/free-strategy')}
                      >
                        Schedule Free Call
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Trust Indicators */}
                <Card className="bg-gray-50 border-0">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <h4 className="font-semibold text-gray-900 mb-3">Trusted by 500+ Businesses</h4>
                      <div className="flex justify-center space-x-2 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600">
                        Average response time: 1.5 hours
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
