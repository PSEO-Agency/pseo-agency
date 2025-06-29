
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from '@/integrations/supabase/client';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut,
  Plus,
  Edit,
  Eye
} from 'lucide-react';

export const AdminDashboard = () => {
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    pages: 0,
    sections: 0,
    blogPosts: 0,
    teamMembers: 0,
    services: 0,
    testimonials: 0
  });

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate('/admin/login');
      return;
    }

    // Fetch dashboard stats
    const fetchStats = async () => {
      const [
        pagesResult,
        sectionsResult,
        blogPostsResult,
        teamMembersResult,
        servicesResult,
        testimonialsResult
      ] = await Promise.all([
        supabase.from('pages').select('id', { count: 'exact' }),
        supabase.from('sections').select('id', { count: 'exact' }),
        supabase.from('blog_posts').select('id', { count: 'exact' }),
        supabase.from('team_members').select('id', { count: 'exact' }),
        supabase.from('services').select('id', { count: 'exact' }),
        supabase.from('testimonials').select('id', { count: 'exact' })
      ]);

      setStats({
        pages: pagesResult.count || 0,
        sections: sectionsResult.count || 0,
        blogPosts: blogPostsResult.count || 0,
        teamMembers: teamMembersResult.count || 0,
        services: servicesResult.count || 0,
        testimonials: testimonialsResult.count || 0
      });
    };

    fetchStats();
  }, [user, isAdmin, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  const menuItems = [
    { icon: FileText, label: 'Pages', href: '/admin/pages', count: stats.pages },
    { icon: Users, label: 'Team Members', href: '/admin/team', count: stats.teamMembers },
    { icon: MessageSquare, label: 'Blog Posts', href: '/admin/blog', count: stats.blogPosts },
    { icon: Settings, label: 'Services', href: '/admin/services', count: stats.services },
    { icon: MessageSquare, label: 'Testimonials', href: '/admin/testimonials', count: stats.testimonials },
  ];

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <LayoutDashboard className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user.email}</span>
              <Button variant="outline" onClick={handleSignOut} className="flex items-center space-x-2">
                <LogOut className="h-4 w-4" />
                <span>Sign Out</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card key={item.label} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate(item.href)}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{item.label}</CardTitle>
                  <IconComponent className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{item.count}</div>
                  <p className="text-xs text-muted-foreground">
                    Total {item.label.toLowerCase()}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={() => navigate('/admin/blog/new')} className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Create New Blog Post
              </Button>
              <Button onClick={() => navigate('/admin/team/new')} variant="outline" className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Add Team Member
              </Button>
              <Button onClick={() => navigate('/admin/services/new')} variant="outline" className="w-full justify-start">
                <Plus className="h-4 w-4 mr-2" />
                Add Service
              </Button>
              <Button onClick={() => navigate('/')} variant="outline" className="w-full justify-start">
                <Eye className="h-4 w-4 mr-2" />
                View Live Site
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest content updates</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm">Dashboard initialized</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm">CMS system configured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm">Admin access granted</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
