import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, Plus, Edit, Trash2, Save, Download, Copy } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface Resource {
  id: string;
  title: string;
  slug: string;
  type: string;
  description: string | null;
  download_url: string | null;
  file_size: string | null;
  duration: string | null;
  difficulty_level: string | null;
  download_count: number;
  is_gated: boolean;
  is_featured: boolean;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

interface FormData {
  title: string;
  slug: string;
  type: string;
  description: string;
  download_url: string;
  file_size: string;
  duration: string;
  difficulty_level: string;
  is_gated: boolean;
  is_featured: boolean;
  sort_order: number;
  is_published: boolean;
}

const RESOURCE_TYPES = ['guide', 'ebook', 'tool', 'webinar', 'checklist', 'template'];
const DIFFICULTY_LEVELS = ['beginner', 'intermediate', 'advanced'];

export const ResourcesManager = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [resources, setResources] = useState<Resource[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingResource, setEditingResource] = useState<Resource | null>(null);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    slug: '',
    type: 'guide',
    description: '',
    download_url: '',
    file_size: '',
    duration: '',
    difficulty_level: 'beginner',
    is_gated: false,
    is_featured: false,
    sort_order: 0,
    is_published: true
  });

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate('/admin/login');
      return;
    }
    fetchResources();
  }, [user, isAdmin, navigate]);

  const fetchResources = async () => {
    try {
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      setResources(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch resources: " + error.message,
        variant: "destructive"
      });
    }
  };

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const dataToSubmit = {
        ...formData,
        slug: formData.slug || generateSlug(formData.title)
      };

      if (editingResource) {
        const { error } = await supabase
          .from('resources')
          .update({
            ...dataToSubmit,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingResource.id);
        
        if (error) throw error;
        toast({ title: "Success", description: "Resource updated successfully" });
      } else {
        const { error } = await supabase
          .from('resources')
          .insert([dataToSubmit]);
        
        if (error) throw error;
        toast({ title: "Success", description: "Resource created successfully" });
      }
      
      setIsEditing(false);
      setEditingResource(null);
      setFormData({
        title: '',
        slug: '',
        type: 'guide',
        description: '',
        download_url: '',
        file_size: '',
        duration: '',
        difficulty_level: 'beginner',
        is_gated: false,
        is_featured: false,
        sort_order: 0,
        is_published: true
      });
      fetchResources();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleEdit = (resource: Resource) => {
    setEditingResource(resource);
    setFormData({
      title: resource.title,
      slug: resource.slug,
      type: resource.type,
      description: resource.description || '',
      download_url: resource.download_url || '',
      file_size: resource.file_size || '',
      duration: resource.duration || '',
      difficulty_level: resource.difficulty_level || 'beginner',
      is_gated: resource.is_gated,
      is_featured: resource.is_featured,
      sort_order: resource.sort_order,
      is_published: resource.is_published
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this resource?')) return;
    
    try {
      const { error } = await supabase
        .from('resources')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      toast({ title: "Success", description: "Resource deleted successfully" });
      fetchResources();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleDuplicate = async (resource: Resource) => {
    try {
      const { id, created_at, updated_at, download_count, ...resourceData } = resource;
      
      // Create a new resource with modified title and slug
      const duplicatedResource = {
        ...resourceData,
        title: `${resource.title} (Copy)`,
        slug: `${resource.slug}-copy`,
        sort_order: resource.sort_order + 1,
        is_published: false, // Set duplicated resources as drafts
        download_count: 0, // Reset download count for duplicated resource
      };

      const { error } = await supabase
        .from('resources')
        .insert([duplicatedResource]);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Resource duplicated successfully",
      });
      fetchResources();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to duplicate resource: " + error.message,
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
            <h1 className="text-3xl font-bold text-gray-900">Resources Manager</h1>
          </div>
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Resource
          </Button>
        </div>

        {isEditing && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingResource ? 'Edit Resource' : 'Create New Resource'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <Input
                      value={formData.title}
                      onChange={(e) => {
                        const title = e.target.value;
                        setFormData({ 
                          ...formData, 
                          title,
                          slug: formData.slug || generateSlug(title)
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Type</label>
                    <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {RESOURCE_TYPES.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Difficulty Level</label>
                    <Select value={formData.difficulty_level} onValueChange={(value) => setFormData({ ...formData, difficulty_level: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {DIFFICULTY_LEVELS.map((level) => (
                          <SelectItem key={level} value={level}>
                            {level.charAt(0).toUpperCase() + level.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
                
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={3}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Download URL</label>
                    <Input
                      value={formData.download_url}
                      onChange={(e) => setFormData({ ...formData, download_url: e.target.value })}
                      placeholder="https://..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">File Size</label>
                    <Input
                      value={formData.file_size}
                      onChange={(e) => setFormData({ ...formData, file_size: e.target.value })}
                      placeholder="e.g., 2.5 MB"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Duration</label>
                    <Input
                      value={formData.duration}
                      onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                      placeholder="e.g., 30 minutes"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={formData.is_gated}
                      onCheckedChange={(checked) => setFormData({ ...formData, is_gated: checked })}
                    />
                    <label className="text-sm font-medium">Gated</label>
                  </div>
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
                </div>
                
                <div className="flex space-x-2">
                  <Button type="submit">
                    <Save className="h-4 w-4 mr-2" />
                    {editingResource ? 'Update' : 'Create'} Resource
                  </Button>
                  <Button type="button" variant="outline" onClick={() => {
                    setIsEditing(false);
                    setEditingResource(null);
                    setFormData({
                      title: '',
                      slug: '',
                      type: 'guide',
                      description: '',
                      download_url: '',
                      file_size: '',
                      duration: '',
                      difficulty_level: 'beginner',
                      is_gated: false,
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
          {resources.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-gray-500 mb-4">No resources found</p>
                <Button onClick={() => setIsEditing(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Resource
                </Button>
              </CardContent>
            </Card>
          ) : (
            resources.map((resource) => (
              <Card key={resource.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{resource.title}</CardTitle>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant={resource.is_published ? "default" : "secondary"}>
                          {resource.is_published ? "Published" : "Draft"}
                        </Badge>
                        <Badge variant="outline">{resource.type}</Badge>
                        {resource.difficulty_level && <Badge variant="outline">{resource.difficulty_level}</Badge>}
                        {resource.is_featured && <Badge variant="outline">Featured</Badge>}
                        {resource.is_gated && <Badge variant="outline">Gated</Badge>}
                        <span className="text-sm text-gray-500">Downloads: {resource.download_count}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDuplicate(resource)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(resource)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(resource.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                {resource.description && (
                  <CardContent>
                    <p className="text-gray-600 mb-4">{resource.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      {resource.file_size && <span>Size: {resource.file_size}</span>}
                      {resource.duration && <span>Duration: {resource.duration}</span>}
                      {resource.download_url && (
                        <a href={resource.download_url} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </a>
                      )}
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      Created: {new Date(resource.created_at).toLocaleDateString()}
                      {resource.updated_at !== resource.created_at && (
                        <span> • Updated: {new Date(resource.updated_at).toLocaleDateString()}</span>
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
