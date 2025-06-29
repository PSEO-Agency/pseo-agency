
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, Plus, Edit, Trash2, Save } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface Page {
  id: string;
  title: string;
  slug: string;
  meta_title: string | null;
  meta_description: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

interface FormData {
  title: string;
  slug: string;
  meta_title: string;
  meta_description: string;
  is_published: boolean;
}

export const PageManager = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [pages, setPages] = useState<Page[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingPage, setEditingPage] = useState<Page | null>(null);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    slug: '',
    meta_title: '',
    meta_description: '',
    is_published: true
  });

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate('/admin/login');
      return;
    }
    fetchPages();
  }, [user, isAdmin, navigate]);

  const fetchPages = async () => {
    try {
      const { data, error } = await supabase
        .from('pages')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setPages(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch pages: " + error.message,
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingPage) {
        const { error } = await supabase
          .from('pages')
          .update({
            ...formData,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingPage.id);
        
        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Page updated successfully"
        });
      } else {
        const { error } = await supabase
          .from('pages')
          .insert([formData]);
        
        if (error) throw error;
        
        toast({
          title: "Success",
          description: "Page created successfully"
        });
      }
      
      setIsEditing(false);
      setEditingPage(null);
      setFormData({
        title: '',
        slug: '',
        meta_title: '',
        meta_description: '',
        is_published: true
      });
      fetchPages();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleEdit = (page: Page) => {
    setEditingPage(page);
    setFormData({
      title: page.title,
      slug: page.slug,
      meta_title: page.meta_title || '',
      meta_description: page.meta_description || '',
      is_published: page.is_published
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this page?')) return;
    
    try {
      const { error } = await supabase
        .from('pages')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Page deleted successfully"
      });
      fetchPages();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" onClick={() => navigate('/admin')}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
            <h1 className="text-3xl font-bold text-gray-900">Page Manager</h1>
          </div>
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Page
          </Button>
        </div>

        {isEditing && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingPage ? 'Edit Page' : 'Create New Page'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Slug</label>
                    <Input
                      value={formData.slug}
                      onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Meta Title</label>
                  <Input
                    value={formData.meta_title}
                    onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Meta Description</label>
                  <Textarea
                    value={formData.meta_description}
                    onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                    rows={3}
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={formData.is_published}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_published: checked })}
                  />
                  <label className="text-sm font-medium">Published</label>
                </div>
                
                <div className="flex space-x-2">
                  <Button type="submit">
                    <Save className="h-4 w-4 mr-2" />
                    {editingPage ? 'Update' : 'Create'} Page
                  </Button>
                  <Button type="button" variant="outline" onClick={() => {
                    setIsEditing(false);
                    setEditingPage(null);
                    setFormData({
                      title: '',
                      slug: '',
                      meta_title: '',
                      meta_description: '',
                      is_published: true
                    });
                  }}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <div className="grid gap-6">
          {pages.map((page) => (
            <Card key={page.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{page.title}</h3>
                    <p className="text-sm text-gray-600">/{page.slug}</p>
                    <p className="text-sm text-gray-500 mt-1">{page.meta_description}</p>
                    <div className="flex items-center mt-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        page.is_published 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {page.is_published ? 'Published' : 'Draft'}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(page)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(page.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
