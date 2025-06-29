import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from '@/integrations/supabase/client';
import { 
  Users, 
  FileText, 
  Settings, 
  LogOut, 
  BarChart3,
  Briefcase,
  Building,
  BookOpen,
  HelpCircle,
  Download,
  Wrench
} from 'lucide-react';

interface Stats {
  pages: number;
  services: number;
  team_members: number;
  blog_posts: number;
  industries: number;
  case_studies: number;
  resources: number;
  faqs: number;
}

export const AdminDashboard = () => {
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState<Stats>({
    pages: 0,
    services: 0,
    team_members: 0,
    blog_posts: 0,
    industries: 0,
    case_studies: 0,
    resources: 0,
    faqs: 0
  });

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate('/admin/login');
      return;
    }
    fetchStats();
  }, [user, isAdmin, navigate]);

  const fetchStats = async () => {
    const newStats: any = {};

    try {
      // Fetch each table count individually to avoid TypeScript issues
      const [
        pagesResult,
        servicesResult,
        teamMembersResult,
        blogPostsResult,
        industriesResult,
        caseStudiesResult,
        resourcesResult,
        faqsResult
      ] = await Promise.all([
        supabase.from('pages').select('*', { count: 'exact', head: true }),
        supabase.from('services').select('*', { count: 'exact', head: true }),
        supabase.from('team_members').select('*', { count: 'exact', head: true }),
        supabase.from('blog_posts').select('*', { count: 'exact', head: true }),
        supabase.from('industries').select('*', { count: 'exact', head: true }),
        supabase.from('case_studies').select('*', { count: 'exact', head: true }),
        supabase.from('resources').select('*', { count: 'exact', head: true }),
        supabase.from('faqs').select('*', { count: 'exact', head: true })
      ]);

      newStats.pages = pagesResult.count || 0;
      newStats.services = servicesResult.count || 0;
      newStats.team_members = teamMembersResult.count || 0;
      newStats.blog_posts = blogPostsResult.count || 0;
      newStats.industries = industriesResult.count || 0;
      newStats.case_studies = caseStudiesResult.count || 0;
      newStats.resources = resourcesResult.count || 0;
      newStats.faqs = faqsResult.count || 0;

      if (pagesResult.error) console.error('Error fetching pages count:', pagesResult.error);
      if (servicesResult.error) console.error('Error fetching services count:', servicesResult.error);
      if (teamMembersResult.error) console.error('Error fetching team_members count:', teamMembersResult.error);
      if (blogPostsResult.error) console.error('Error fetching blog_posts count:', blogPostsResult.error);
      if (industriesResult.error) console.error('Error fetching industries count:', industriesResult.error);
      if (caseStudiesResult.error) console.error('Error fetching case_studies count:', caseStudiesResult.error);
      if (resourcesResult.error) console.error('Error fetching resources count:', resourcesResult.error);
      if (faqsResult.error) console.error('Error fetching faqs count:', faqsResult.error);
    } catch (error) {
      console.error('Error fetching stats:', error);
      // Set all counts to 0 if there's an error
      newStats.pages = 0;
      newStats.services = 0;
      newStats.team_members = 0;
      newStats.blog_posts = 0;
      newStats.industries = 0;
      newStats.case_studies = 0;
      newStats.resources = 0;
      newStats.faqs = 0;
    }

    setStats(newStats);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  if (!user || !isAdmin) {
    return null;
  }

  const managementCards = [
    {
      title: "Pages",
      description: "Manage website pages and content structure",
      icon: FileText,
      count: stats.pages,
      path: "/admin/pages",
      color: "text-blue-600"
    },
    {
      title: "Services", 
      description: "Manage service offerings and descriptions",
      icon: Briefcase,
      count: stats.services,
      path: "/admin/services",
      color: "text-green-600"
    },
    {
      title: "Industries",
      description: "Manage industry-specific landing pages",
      icon: Building,
      count: stats.industries,
      path: "/admin/industries",
      color: "text-purple-600"
    },
    {
      title: "Case Studies",
      description: "Showcase client success stories",
      icon: BarChart3,
      count: stats.case_studies,
      path: "/admin/case-studies",
      color: "text-orange-600"
    },
    {
      title: "Resources",
      description: "Manage guides, tools, and downloadable content",
      icon: Download,
      count: stats.resources,
      path: "/admin/resources",
      color: "text-teal-600"
    },
    {
      title: "Team Members",
      description: "Manage team profiles and information",
      icon: Users,
      count: stats.team_members,
      path: "/admin/team",
      color: "text-indigo-600"
    },
    {
      title: "Blog Posts",
      description: "Create and manage blog content",
      icon: BookOpen,
      count: stats.blog_posts,
      path: "/admin/blog",
      color: "text-pink-600"
    },
    {
      title: "FAQs",
      description: "Manage frequently asked questions",
      icon: HelpCircle,
      count: stats.faqs,
      path: "/admin/faqs",
      color: "text-cyan-600"
    },
    {
      title: "Site Settings",
      description: "Configure global site settings and preferences",
      icon: Wrench,
      count: Object.keys(stats).length,
      path: "/admin/settings",
      color: "text-gray-600"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back, {user.email}</p>
          </div>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {managementCards.map((card) => {
            const IconComponent = card.icon;
            return (
              <Card key={card.title} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(card.path)}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <IconComponent className={`h-6 w-6 ${card.color}`} />
                      <CardTitle className="text-lg">{card.title}</CardTitle>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{card.count}</div>
                  </div>
                  <CardDescription>{card.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full" variant="outline">
                    Manage {card.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="h-5 w-5" />
              <span>Quick Actions</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button onClick={() => navigate('/admin/pages')} className="justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Add New Page
              </Button>
              <Button onClick={() => navigate('/admin/blog')} className="justify-start">
                <BookOpen className="h-4 w-4 mr-2" />
                Write Blog Post
              </Button>
              <Button onClick={() => navigate('/admin/case-studies')} className="justify-start">
                <BarChart3 className="h-4 w-4 mr-2" />
                Add Case Study
              </Button>
              <Button onClick={() => navigate('/admin/settings')} className="justify-start">
                <Wrench className="h-4 w-4 mr-2" />
                Site Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
