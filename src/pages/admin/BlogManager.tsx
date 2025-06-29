
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from '@/integrations/supabase/client';
import { Plus, Edit, Eye, Trash2, ArrowLeft } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  read_time: string;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export const BlogManager = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error",
        description: "Failed to fetch blog posts",
        variant: "destructive",
      });
    } else {
      setPosts(data || []);
    }
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;

    const { error } = await supabase
      .from('blog_posts')
      .delete()
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to delete blog post",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: "Blog post deleted successfully",
      });
      fetchPosts();
    }
  };

  const togglePublish = async (id: string, currentStatus: boolean) => {
    const { error } = await supabase
      .from('blog_posts')
      .update({ is_published: !currentStatus })
      .eq('id', id);

    if (error) {
      toast({
        title: "Error",
        description: "Failed to update blog post",
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success",
        description: `Blog post ${!currentStatus ? 'published' : 'unpublished'} successfully`,
      });
      fetchPosts();
    }
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
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
            <h1 className="text-3xl font-bold text-gray-900">Blog Manager</h1>
          </div>
          <Button onClick={() => navigate('/admin/blog/new')}>
            <Plus className="h-4 w-4 mr-2" />
            New Post
          </Button>
        </div>

        <div className="grid gap-6">
          {posts.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-gray-500 mb-4">No blog posts found</p>
                <Button onClick={() => navigate('/admin/blog/new')}>
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
                        onClick={() => navigate(`/admin/blog/edit/${post.id}`)}
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
