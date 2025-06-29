
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
    const tables = ['pages', 'services', 'team_members', 'blog_posts', 'industries', 'case_studies', 'resources', 'faqs'];
    const newStats: any = {};

    for (const table of tables) {
      try {
        const { count, error } = await supabase
          .from(table)
          .select('*', { count: 'exact', head: true });
        if (error) throw error;
        newStats[table] = count || 0;
      } catch (error) {
        console.error(`Error fetching ${table} count:`, error);
        newStats[table] = 0;
      }
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
