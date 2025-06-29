
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from '@/integrations/supabase/client';
import { Plus, Edit, Eye, Trash2, ArrowLeft, Copy, BookOpen } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '@/contexts/AuthContext';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string | null;
  category: string | null;
  read_time: string | null;
  is_published: boolean;
  slug: string;
  content: string | null;
  created_at: string;
  updated_at: string;
}

export const BlogManager = () => {
  const { user, isAdmin } = useAuth();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate('/admin/login');
      return;
    }
    fetchPosts();
  }, [user, isAdmin, navigate]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch blog posts: " + error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Blog post deleted successfully",
      });
      fetchPosts();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to delete blog post: " + error.message,
        variant: "destructive",
      });
    }
  };

  const handleDuplicate = async (post: BlogPost) => {
    try {
      const { id, created_at, updated_at, ...postData } = post;
      
      // Create a new post with modified title and slug
      const duplicatedPost = {
        ...postData,
        title: `${post.title} (Copy)`,
        slug: `${post.slug}-copy`,
        is_published: false, // Set duplicated posts as drafts
      };

      const { error } = await supabase
        .from('blog_posts')
        .insert([duplicatedPost]);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Blog post duplicated successfully",
      });
      fetchPosts();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to duplicate blog post: " + error.message,
        variant: "destructive",
      });
    }
  };

  const togglePublish = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ is_published: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: `Blog post ${!currentStatus ? 'published' : 'unpublished'} successfully`,
      });
      fetchPosts();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to update blog post: " + error.message,
        variant: "destructive",
      });
    }
  };

  if (!user || !isAdmin) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="outline" onClick={() => navigate('/admin')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-6 w-6 text-pink-600" />
              <h1 className="text-3xl font-bold text-gray-900">Blog Manager</h1>
            </div>
          </div>
          <Button onClick={() => {
            toast({
              title: "Coming Soon",
              description: "Blog post creation will be available soon",
            });
          }}>
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </div>

        <div className="grid gap-6">
          {posts.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">No blog posts found</p>
                <Button onClick={() => {
                  toast({
                    title: "Coming Soon",
                    description: "Blog post creation will be available soon",
                  });
                }}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Post
                </Button>
              </CardContent>
            </Card>
          ) : (
            posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant={post.is_published ? "default" : "secondary"}>
                          {post.is_published ? "Published" : "Draft"}
                        </Badge>
                        {post.category && <Badge variant="outline">{post.category}</Badge>}
                        {post.read_time && <span className="text-sm text-gray-500">{post.read_time}</span>}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => togglePublish(post.id, post.is_published)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        {post.is_published ? "Unpublish" : "Publish"}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDuplicate(post)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          toast({
                            title: "Coming Soon",
                            description: "Blog post editing will be available soon",
                          });
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(post.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                {post.excerpt && (
                  <CardContent>
                    <p className="text-gray-600">{post.excerpt}</p>
                    <div className="mt-4 text-sm text-gray-500">
                      Created: {new Date(post.created_at).toLocaleDateString()}
                      {post.updated_at !== post.created_at && (
                        <span> • Updated: {new Date(post.updated_at).toLocaleDateString()}</span>
                      )}
                    </div>
                  </CardContent>
                )}
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
