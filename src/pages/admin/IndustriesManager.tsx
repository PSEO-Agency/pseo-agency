import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, Plus, Edit, Trash2, Save, Copy } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface Industry {
  id: string;
  name: string;
  slug: string;
  title: string;
  meta_title: string | null;
  meta_description: string | null;
  description: string | null;
  icon: string | null;
  is_featured: boolean;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

interface FormData {
  name: string;
  slug: string;
  title: string;
  meta_title: string;
  meta_description: string;
  description: string;
  icon: string;
  is_featured: boolean;
  sort_order: number;
  is_published: boolean;
}

export const IndustriesManager = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndustry, setEditingIndustry] = useState<Industry | null>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    slug: '',
    title: '',
    meta_title: '',
    meta_description: '',
    description: '',
    icon: '',
    is_featured: false,
    sort_order: 0,
    is_published: true
  });

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate('/admin/login');
      return;
    }
    fetchIndustries();
  }, [user, isAdmin, navigate]);

  const fetchIndustries = async () => {
    try {
      const { data, error } = await supabase
        .from('industries')
        .select('*')
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      setIndustries(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch industries: " + error.message,
        variant: "destructive"
      });
    }
  };

  const generateSlug = (name: string) => {
    return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const dataToSubmit = {
        ...formData,
        slug: formData.slug || generateSlug(formData.name)
      };

      if (editingIndustry) {
        const { error } = await supabase
          .from('industries')
          .update({
            ...dataToSubmit,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingIndustry.id);
        
        if (error) throw error;
        toast({ title: "Success", description: "Industry updated successfully" });
      } else {
        const { error } = await supabase
          .from('industries')
          .insert([dataToSubmit]);
        
        if (error) throw error;
        toast({ title: "Success", description: "Industry created successfully" });
      }
      
      setIsEditing(false);
      setEditingIndustry(null);
      setFormData({
        name: '',
        slug: '',
        title: '',
        meta_title: '',
        meta_description: '',
        description: '',
        icon: '',
        is_featured: false,
        sort_order: 0,
        is_published: true
      });
      fetchIndustries();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleEdit = (industry: Industry) => {
    setEditingIndustry(industry);
    setFormData({
      name: industry.name,
      slug: industry.slug,
      title: industry.title,
      meta_title: industry.meta_title || '',
      meta_description: industry.meta_description || '',
      description: industry.description || '',
      icon: industry.icon || '',
      is_featured: industry.is_featured,
      sort_order: industry.sort_order,
      is_published: industry.is_published
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this industry?')) return;
    
    try {
      const { error } = await supabase
        .from('industries')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      toast({ title: "Success", description: "Industry deleted successfully" });
      fetchIndustries();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleDuplicate = async (industry: Industry) => {
    try {
      const { id, created_at, updated_at, ...industryData } = industry;
      
      // Create a new industry with modified name and slug
      const duplicatedIndustry = {
        ...industryData,
        name: `${industry.name} (Copy)`,
        slug: `${industry.slug}-copy`,
        title: `${industry.title} (Copy)`,
        sort_order: industry.sort_order + 1,
        is_published: false, // Set duplicated industries as drafts
      };

      const { error } = await supabase
        .from('industries')
        .insert([duplicatedIndustry]);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Industry duplicated successfully",
      });
      fetchIndustries();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to duplicate industry: " + error.message,
        variant: "destructive",
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
            <h1 className="text-3xl font-bold text-gray-900">Industries Manager</h1>
          </div>
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Industry
          </Button>
        </div>

        {isEditing && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingIndustry ? 'Edit Industry' : 'Create New Industry'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => {
                        const name = e.target.value;
                        setFormData({ 
                          ...formData, 
                          name,
                          slug: formData.slug || generateSlug(name)
                        });
                      }}
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
                  <label className="block text-sm font-medium mb-2">Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Meta Title</label>
                    <Input
                      value={formData.meta_title}
                      onChange={(e) => setFormData({ ...formData, meta_title: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Icon</label>
                    <Input
                      value={formData.icon}
                      onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                      placeholder="e.g., Cloud, ShoppingCart, Home"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Meta Description</label>
                  <Textarea
                    value={formData.meta_description}
                    onChange={(e) => setFormData({ ...formData, meta_description: e.target.value })}
                    rows={2}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={formData.is_featured}
                      onCheckedChange={(checked) => setFormData({ ...formData, is_featured: checked })}
                    />
                    <label className="text-sm font-medium">Featured</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={formData.is_published}
                      onCheckedChange={(checked) => setFormData({ ...formData, is_published: checked })}
                    />
                    <label className="text-sm font-medium">Published</label>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Sort Order</label>
                    <Input
                      type="number"
                      value={formData.sort_order}
                      onChange={(e) => setFormData({ ...formData, sort_order: parseInt(e.target.value) || 0 })}
                    />
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <Button type="submit">
                    <Save className="h-4 w-4 mr-2" />
                    {editingIndustry ? 'Update' : 'Create'} Industry
                  </Button>
                  <Button type="button" variant="outline" onClick={() => {
                    setIsEditing(false);
                    setEditingIndustry(null);
                    setFormData({
                      name: '',
                      slug: '',
                      title: '',
                      meta_title: '',
                      meta_description: '',
                      description: '',
                      icon: '',
                      is_featured: false,
                      sort_order: 0,
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
          {industries.map((industry) => (
            <Card key={industry.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{industry.name}</h3>
                    <p className="text-sm text-gray-600">/{industry.slug}</p>
                    <p className="text-sm text-gray-500 mt-1">{industry.description}</p>
                    <div className="flex items-center mt-2 space-x-2">
                      {industry.is_featured && (
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                          Featured
                        </span>
                      )}
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        industry.is_published 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-800'
                      }`}>
                        {industry.is_published ? 'Published' : 'Draft'}
                      </span>
                      <span className="text-xs text-gray-500">
                        Sort: {industry.sort_order}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDuplicate(industry)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleEdit(industry)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(industry.id)}>
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
