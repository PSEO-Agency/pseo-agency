
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Building, DollarSign, Star } from "lucide-react";
import { Helmet } from "react-helmet";

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>SEO Jobs & Careers | Programmatic SEO Opportunities | pSEO</title>
        <meta name="description" content="Join our programmatic SEO team. Find exciting career opportunities in automated content, enterprise SEO, AI-powered strategies, and scalable optimization." />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
            Join the Future of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              Programmatic SEO
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Be part of a team that's revolutionizing SEO through automation, AI, and scalable content strategies. 
            Help enterprise clients achieve exponential organic growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Badge variant="outline" className="text-blue-200 border-blue-300 bg-blue-800/50 px-4 py-2">
              Remote-First Culture
            </Badge>
            <Badge variant="outline" className="text-blue-200 border-blue-300 bg-blue-800/50 px-4 py-2">
              Cutting-Edge Technology
            </Badge>
            <Badge variant="outline" className="text-blue-200 border-blue-300 bg-blue-800/50 px-4 py-2">
              Growth Opportunities
            </Badge>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      {featuredJobs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Featured Opportunities
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                High-impact roles that are shaping the future of programmatic SEO
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredJobs.map((job) => (
                <Card key={job.id} className="border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 relative">
                  <div className="absolute -top-3 left-4">
                    <Badge className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3 py-1 flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      Featured
                    </Badge>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-gray-900 mb-2">
                      {job.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-2 mb-3">
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
                    </div>
                    <CardDescription className="text-gray-600 line-clamp-3">
                      {job.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        {job.employment_type && (
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.employment_type}
                          </span>
                        )}
                        {job.salary_range && (
                          <span className="flex items-center gap-1">
                            <DollarSign className="h-4 w-4" />
                            {job.salary_range}
                          </span>
                        )}
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Jobs */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              All Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore all career opportunities in programmatic SEO, automation, and enterprise optimization
            </p>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-2">
            {regularJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-all duration-300 bg-white">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg font-bold text-gray-900">
                      {job.title}
                    </CardTitle>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
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
                  <CardDescription className="text-gray-600 line-clamp-2">
                    {job.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="outline" className="w-full hover:bg-blue-50 hover:border-blue-300">
                    Learn More & Apply
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {jobs && jobs.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Open Positions</h3>
              <p className="text-gray-600 mb-6">
                We're not currently hiring, but we're always looking for talented people. 
                Check back soon or send us your resume.
              </p>
              <Button variant="outline">
                Send Resume
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join a team that's at the forefront of SEO innovation and automation
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Remote-First Culture</h3>
              <p className="text-gray-600">
                Work from anywhere with flexible hours and a strong focus on work-life balance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cutting-Edge Technology</h3>
              <p className="text-gray-600">
                Work with the latest SEO automation tools, AI technologies, and scalable platforms.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Benefits</h3>
              <p className="text-gray-600">
                Comprehensive health coverage, equity options, professional development budget, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Jobs;
