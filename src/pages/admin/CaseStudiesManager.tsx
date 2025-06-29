import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, Plus, Edit, Trash2, Save, Eye, Copy } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client_name: string;
  industry: string | null;
  challenge: string | null;
  solution: string | null;
  results: string | null;
  is_featured: boolean;
  sort_order: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

interface FormData {
  title: string;
  slug: string;
  client_name: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string;
  is_featured: boolean;
  sort_order: number;
  is_published: boolean;
}

export const CaseStudiesManager = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingCaseStudy, setEditingCaseStudy] = useState<CaseStudy | null>(null);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    slug: '',
    client_name: '',
    industry: '',
    challenge: '',
    solution: '',
    results: '',
    is_featured: false,
    sort_order: 0,
    is_published: true
  });

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate('/admin/login');
      return;
    }
    fetchCaseStudies();
  }, [user, isAdmin, navigate]);

  const fetchCaseStudies = async () => {
    try {
      const { data, error } = await supabase
        .from('case_studies')
        .select('*')
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      setCaseStudies(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch case studies: " + error.message,
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

      if (editingCaseStudy) {
        const { error } = await supabase
          .from('case_studies')
          .update({
            ...dataToSubmit,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingCaseStudy.id);
        
        if (error) throw error;
        toast({ title: "Success", description: "Case study updated successfully" });
      } else {
        const { error } = await supabase
          .from('case_studies')
          .insert([dataToSubmit]);
        
        if (error) throw error;
        toast({ title: "Success", description: "Case study created successfully" });
      }
      
      setIsEditing(false);
      setEditingCaseStudy(null);
      setFormData({
        title: '',
        slug: '',
        client_name: '',
        industry: '',
        challenge: '',
        solution: '',
        results: '',
        is_featured: false,
        sort_order: 0,
        is_published: true
      });
      fetchCaseStudies();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleEdit = (caseStudy: CaseStudy) => {
    setEditingCaseStudy(caseStudy);
    setFormData({
      title: caseStudy.title,
      slug: caseStudy.slug,
      client_name: caseStudy.client_name,
      industry: caseStudy.industry || '',
      challenge: caseStudy.challenge || '',
      solution: caseStudy.solution || '',
      results: caseStudy.results || '',
      is_featured: caseStudy.is_featured,
      sort_order: caseStudy.sort_order,
      is_published: caseStudy.is_published
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this case study?')) return;
    
    try {
      const { error } = await supabase
        .from('case_studies')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      toast({ title: "Success", description: "Case study deleted successfully" });
      fetchCaseStudies();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const togglePublish = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('case_studies')
        .update({ is_published: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: `Case study ${!currentStatus ? 'published' : 'unpublished'} successfully`,
      });
      fetchCaseStudies();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to update case study: " + error.message,
        variant: "destructive",
      });
    }
  };

  const handleDuplicate = async (caseStudy: CaseStudy) => {
    try {
      const { id, created_at, updated_at, ...caseStudyData } = caseStudy;
      
      // Create a new case study with modified title and slug
      const duplicatedCaseStudy = {
        ...caseStudyData,
        title: `${caseStudy.title} (Copy)`,
        slug: `${caseStudy.slug}-copy`,
        sort_order: caseStudy.sort_order + 1,
        is_published: false, // Set duplicated case studies as drafts
      };

      const { error } = await supabase
        .from('case_studies')
        .insert([duplicatedCaseStudy]);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Case study duplicated successfully",
      });
      fetchCaseStudies();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to duplicate case study: " + error.message,
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
            <h1 className="text-3xl font-bold text-gray-900">Case Studies Manager</h1>
          </div>
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Case Study
          </Button>
        </div>

        {isEditing && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingCaseStudy ? 'Edit Case Study' : 'Create New Case Study'}</CardTitle>
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Client Name</label>
                    <Input
                      value={formData.client_name}
                      onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Industry</label>
                    <Input
                      value={formData.industry}
                      onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Challenge</label>
                  <Textarea
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Solution</label>
                  <Textarea
                    value={formData.solution}
                    onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Results</label>
                  <Textarea
                    value={formData.results}
                    onChange={(e) => setFormData({ ...formData, results: e.target.value })}
                    rows={3}
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
                    {editingCaseStudy ? 'Update' : 'Create'} Case Study
                  </Button>
                  <Button type="button" variant="outline" onClick={() => {
                    setIsEditing(false);
                    setEditingCaseStudy(null);
                    setFormData({
                      title: '',
                      slug: '',
                      client_name: '',
                      industry: '',
                      challenge: '',
                      solution: '',
                      results: '',
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
          {caseStudies.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-gray-500 mb-4">No case studies found</p>
                <Button onClick={() => setIsEditing(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Case Study
                </Button>
              </CardContent>
            </Card>
          ) : (
            caseStudies.map((caseStudy) => (
              <Card key={caseStudy.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant={caseStudy.is_published ? "default" : "secondary"}>
                          {caseStudy.is_published ? "Published" : "Draft"}
                        </Badge>
                        {caseStudy.is_featured && <Badge variant="outline">Featured</Badge>}
                        {caseStudy.industry && <Badge variant="outline">{caseStudy.industry}</Badge>}
                        <span className="text-sm text-gray-500">Client: {caseStudy.client_name}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => togglePublish(caseStudy.id, caseStudy.is_published)}
                      >
                        <Eye className="h-4 w-4 mr-1" />
                        {caseStudy.is_published ? "Unpublish" : "Publish"}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDuplicate(caseStudy)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(caseStudy)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(caseStudy.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                {(caseStudy.challenge || caseStudy.solution || caseStudy.results) && (
                  <CardContent>
                    {caseStudy.challenge && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-1">Challenge:</h4>
                        <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
                      </div>
                    )}
                    {caseStudy.solution && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-1">Solution:</h4>
                        <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
                      </div>
                    )}
                    {caseStudy.results && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-sm mb-1">Results:</h4>
                        <p className="text-gray-600 text-sm">{caseStudy.results}</p>
                      </div>
                    )}
                    <div className="text-sm text-gray-500">
                      Created: {new Date(caseStudy.created_at).toLocaleDateString()}
                      {caseStudy.updated_at !== caseStudy.created_at && (
                        <span> • Updated: {new Date(caseStudy.updated_at).toLocaleDateString()}</span>
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
