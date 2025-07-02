import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Clock, Users, TrendingUp, Target, Zap, Star, Award, Download, BookOpen, Video } from "lucide-react";
import { useState } from "react";
import { AuditModal } from "@/components/AuditModal";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useNavigate } from "react-router-dom";

const FreeStrategy = () => {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuditModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <Award className="h-5 w-5 text-yellow-400 mr-2" />
              <span className="text-blue-200 font-semibold">Free Comprehensive SEO Strategy</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-black leading-tight mb-6">
              Get Your Custom
              <span className="block webfx-text-gradient mt-2">pSEO Growth Strategy</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Discover exactly how to scale your organic traffic with a personalized programmatic SEO roadmap, 
              tailored specifically for your business and industry.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
                <Input
                  type="url"
                  placeholder="Enter your website URL"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="bg-transparent border-none text-white placeholder:text-blue-200 h-14 text-lg focus:ring-0 focus-visible:ring-0"
                  required
                />
                <Button type="submit" size="lg" className="webfx-button-primary h-14 text-lg font-bold">
                  Get My Free Strategy
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>

            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center">
                <CheckCircle2 className="h-4 w-4 mr-2 text-green-400" />
                <span className="text-blue-200">No credit card required</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-green-400" />
                <span className="text-blue-200">Results in 24 hours</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-green-400" />
                <span className="text-blue-200">Used by 2,500+ businesses</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Get Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              What's Included in Your Free Strategy
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a comprehensive analysis and actionable roadmap to transform your SEO performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="webfx-card hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Keyword Opportunity Analysis</CardTitle>
                <CardDescription>
                  Discover high-volume, low-competition keywords your competitors are missing
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />500+ keyword opportunities</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />Search volume analysis</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />Difficulty scoring</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="webfx-card hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Competitor Gap Analysis</CardTitle>
                <CardDescription>
                  See exactly what your top competitors are doing and how to outrank them
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />Top 10 competitor analysis</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />Content gap identification</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />Link building opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="webfx-card hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Technical SEO Audit</CardTitle>
                <CardDescription>
                  Identify and prioritize the technical issues holding back your rankings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />Site speed analysis</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />Mobile optimization check</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />Core Web Vitals report</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="webfx-card hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Content Strategy Blueprint</CardTitle>
                <CardDescription>
                  Get a detailed plan for creating content that ranks and converts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />Content calendar template</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />Topic clusters mapping</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />Content optimization guide</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="webfx-card hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <Download className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Implementation Roadmap</CardTitle>
                <CardDescription>
                  Step-by-step action plan with timelines and priority rankings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />90-day action plan</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />Priority task list</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />ROI projections</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="webfx-card hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">Video Walkthrough</CardTitle>
                <CardDescription>
                  Personal video explanation of your strategy with our SEO experts
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />30-minute walkthrough</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />Q&A session</li>
                  <li className="flex items-center"><CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />Implementation tips</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how businesses like yours achieved incredible results with our strategies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="webfx-card text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-blue-600 mb-2">847%</CardTitle>
                <CardDescription className="text-lg font-semibold">Traffic Increase</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">E-commerce client saw 8x traffic growth in 6 months using our programmatic SEO strategy</p>
              </CardContent>
            </Card>

            <Card className="webfx-card text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-green-600 mb-2">45,000+</CardTitle>
                <CardDescription className="text-lg font-semibold">Keywords Ranking</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">SaaS company now ranks for 45K+ keywords, generating $2M+ in additional revenue</p>
              </CardContent>
            </Card>

            <Card className="webfx-card text-center">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-3xl font-bold text-purple-600 mb-2">312%</CardTitle>
                <CardDescription className="text-lg font-semibold">Lead Generation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">B2B service provider tripled their qualified leads through strategic content scaling</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Ready to Scale Your SEO?
          </h2>
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of businesses that have transformed their organic growth with our proven strategies
          </p>
          
          <Button 
            onClick={() => navigate('/contact')}
            size="lg" 
            className="webfx-button-primary text-xl px-12 py-6 h-auto font-bold shadow-xl hover:shadow-2xl"
          >
            Get Your Free Strategy Now
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          
          <p className="text-blue-200 text-lg mt-6">
            No commitment • Results guaranteed • Expert consultation included
          </p>
        </div>
      </section>

      <Footer />
      
      <AuditModal 
        isOpen={isAuditModalOpen} 
        onClose={() => setIsAuditModalOpen(false)} 
      />
    </div>
  );
};

export default FreeStrategy;
