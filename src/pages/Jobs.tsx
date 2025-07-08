
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Building, DollarSign, Star, Users, Zap, Globe, Heart, Award, Rocket } from "lucide-react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";

interface Job {
  id: string;
  title: string;
  slug: string;
  description?: string;
  department?: string;
  location?: string;
  employment_type?: string;
  salary_range?: string;
  requirements?: string[];
  responsibilities?: string[];
  benefits?: string[];
  is_featured?: boolean;
  created_at: string;
}

const Jobs = () => {
  const navigate = useNavigate();
  
  const { data: jobs, isLoading } = useQuery({
    queryKey: ['jobs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .eq('is_published', true)
        .order('is_featured', { ascending: false })
        .order('sort_order')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Job[];
    },
  });

  const featuredJobs = jobs?.filter(job => job.is_featured) || [];
  const regularJobs = jobs?.filter(job => !job.is_featured) || [];

  const benefits = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Remote-First Culture",
      description: "Work from anywhere with flexible hours and a strong focus on work-life balance."
    },
    {
      icon: <Zap className="h-8 w-8 text-green-600" />,
      title: "Cutting-Edge Technology",
      description: "Work with the latest SEO automation tools, AI technologies, and scalable platforms."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-purple-600" />,
      title: "Competitive Package",
      description: "Comprehensive health coverage, equity options, professional development budget, and more."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Amazing Team",
      description: "Join a collaborative team of experts who are passionate about programmatic SEO innovation."
    },
    {
      icon: <Rocket className="h-8 w-8 text-red-600" />,
      title: "Career Growth",
      description: "Clear advancement paths, mentorship programs, and opportunities to lead groundbreaking projects."
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-600" />,
      title: "Work-Life Balance",
      description: "Unlimited PTO, mental health support, and a culture that values your personal time."
    }
  ];

  const perks = [
    { icon: <Award className="h-5 w-5" />, text: "Industry-Leading Compensation" },
    { icon: <Globe className="h-5 w-5" />, text: "100% Remote Flexibility" },
    { icon: <Zap className="h-5 w-5" />, text: "Latest Technology Stack" },
    { icon: <Users className="h-5 w-5" />, text: "Collaborative Culture" }
  ];

  const scrollToAllJobs = () => {
    const element = document.getElementById('all-open-positions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-32">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>SEO Careers & Jobs | Join Our Programmatic SEO Team | pSEO</title>
        <meta name="description" content="Join the future of programmatic SEO. Explore exciting remote-first career opportunities in automated content, enterprise SEO, AI-powered strategies, and scalable optimization." />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400/20 rounded-full blur-xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {perks.map((perk, index) => (
                <Badge key={index} className="bg-white/10 text-white border-white/20 px-3 py-1 flex items-center gap-2">
                  {perk.icon}
                  {perk.text}
                </Badge>
              ))}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Shape the Future of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                Programmatic SEO
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join a team that's revolutionizing SEO through automation, AI, and scalable content strategies. 
              Help enterprise clients achieve exponential organic growth while advancing your career.
            </p>
            <div className="flex justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
                onClick={scrollToAllJobs}
              >
                View Open Positions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      {featuredJobs.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Featured Opportunities
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  High-impact roles that are defining the future of programmatic SEO and automation
                </p>
              </div>
              
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {featuredJobs.map((job) => (
                  <Card key={job.id} className="border-2 border-blue-200 shadow-xl hover:shadow-2xl transition-all duration-300 relative group overflow-hidden min-h-[400px] flex flex-col">
                    <div className="absolute top-3 left-6">
                      <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 flex items-center gap-1 shadow-lg">
                        <Star className="h-3 w-3" />
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-bl-full"></div>
                    <CardHeader className="pb-4 pt-12 flex-1">
                      <CardTitle className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                        {job.title}
                      </CardTitle>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.department && (
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Building className="h-3 w-3" />
                            {job.department}
                          </Badge>
                        )}
                        {job.location && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </Badge>
                        )}
                        {job.employment_type && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {job.employment_type}
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-gray-600 leading-relaxed flex-1">
                        {job.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0 pb-6">
                      {job.salary_range && (
                        <div className="flex items-center gap-2 mb-4 p-3 bg-green-50 rounded-lg">
                          <DollarSign className="h-4 w-4 text-green-600" />
                          <span className="font-semibold text-green-700">{job.salary_range}</span>
                        </div>
                      )}
                      <Button 
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg"
                        onClick={() => navigate('/contact')}
                      >
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* All Jobs */}
      <section className="py-20 bg-white" id="all-open-positions">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                All Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore career opportunities across programmatic SEO, automation, data science, and enterprise solutions
              </p>
            </div>
            
            {regularJobs.length > 0 ? (
              <div className="grid gap-6 lg:grid-cols-2">
                {regularJobs.map((job) => (
                  <Card key={job.id} className="hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                    <CardHeader>
                      <div className="flex justify-between items-start mb-3">
                        <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {job.title}
                        </CardTitle>
                        {job.salary_range && (
                          <Badge className="bg-green-100 text-green-800">
                            {job.salary_range}
                          </Badge>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.department && (
                          <Badge variant="secondary" className="flex items-center gap-1">
                            <Building className="h-3 w-3" />
                            {job.department}
                          </Badge>
                        )}
                        {job.location && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {job.location}
                          </Badge>
                        )}
                        {job.employment_type && (
                          <Badge variant="outline" className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {job.employment_type}
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="text-gray-600 line-clamp-2 leading-relaxed">
                        {job.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Button 
                        variant="outline" 
                        className="w-full hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all"
                        onClick={() => navigate('/contact')}
                      >
                        Learn More & Apply
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card className="text-center py-16 shadow-xl border-0">
                <CardContent>
                  <Building className="h-16 w-16 text-gray-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">No Open Positions</h3>
                  <p className="text-gray-600 mb-8 max-w-md mx-auto">
                    We're not currently hiring, but we're always looking for exceptional talent. 
                    Send us your resume and we'll keep you in mind for future opportunities.
                  </p>
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => navigate('/contact')}
                  >
                    Send Resume
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Why Join Our Team?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're building the future of SEO automation, and we believe in taking care of the people who make it possible
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join a team that's transforming how businesses approach SEO at scale. 
              Your expertise could be the key to unlocking exponential growth for our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
                onClick={() => navigate('/contact')}
              >
                Apply Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
                onClick={() => navigate('/about')}
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;
