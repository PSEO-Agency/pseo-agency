
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
import { ArrowLeft, Plus, Edit, Trash2, Save, Eye, EyeOff } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string | null;
  sort_order: number;
  is_visible: boolean;
  created_at: string;
  updated_at: string;
}

interface FormData {
  question: string;
  answer: string;
  category: string;
  sort_order: number;
  is_visible: boolean;
}

export const FAQsManager = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);
  const [formData, setFormData] = useState<FormData>({
    question: '',
    answer: '',
    category: '',
    sort_order: 0,
    is_visible: true
  });

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate('/admin/login');
      return;
    }
    fetchFaqs();
  }, [user, isAdmin, navigate]);

  const fetchFaqs = async () => {
    try {
      const { data, error } = await supabase
        .from('faqs')
        .select('*')
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      setFaqs(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch FAQs: " + error.message,
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingFaq) {
        const { error } = await supabase
          .from('faqs')
          .update({
            ...formData,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingFaq.id);
        
        if (error) throw error;
        toast({ title: "Success", description: "FAQ updated successfully" });
      } else {
        const { error } = await supabase
          .from('faqs')
          .insert([formData]);
        
        if (error) throw error;
        toast({ title: "Success", description: "FAQ created successfully" });
      }
      
      setIsEditing(false);
      setEditingFaq(null);
      setFormData({
        question: '',
        answer: '',
        category: '',
        sort_order: 0,
        is_visible: true
      });
      fetchFaqs();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleEdit = (faq: FAQ) => {
    setEditingFaq(faq);
    setFormData({
      question: faq.question,
      answer: faq.answer,
      category: faq.category || '',
      sort_order: faq.sort_order,
      is_visible: faq.is_visible
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this FAQ?')) return;
    
    try {
      const { error } = await supabase
        .from('faqs')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      toast({ title: "Success", description: "FAQ deleted successfully" });
      fetchFaqs();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const toggleVisibility = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('faqs')
        .update({ is_visible: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: `FAQ ${!currentStatus ? 'shown' : 'hidden'} successfully`,
      });
      fetchFaqs();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to update FAQ: " + error.message,
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
            <h1 className="text-3xl font-bold text-gray-900">FAQs Manager</h1>
          </div>
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add FAQ
          </Button>
        </div>

        {isEditing && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingFaq ? 'Edit FAQ' : 'Create New FAQ'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Question</label>
                  <Input
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Answer</label>
                  <Textarea
                    value={formData.answer}
                    onChange={(e) => setFormData({ ...formData, answer: e.target.value })}
                    rows={4}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <Input
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      placeholder="e.g., General, Pricing, Technical"
                    />
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

                <div className="flex items-center space-x-2">
                  <Switch
                    checked={formData.is_visible}
                    onCheckedChange={(checked) => setFormData({ ...formData, is_visible: checked })}
                  />
                  <label className="text-sm font-medium">Visible</label>
                </div>
                
                <div className="flex space-x-2">
                  <Button type="submit">
                    <Save className="h-4 w-4 mr-2" />
                    {editingFaq ? 'Update' : 'Create'} FAQ
                  </Button>
                  <Button type="button" variant="outline" onClick={() => {
                    setIsEditing(false);
                    setEditingFaq(null);
                    setFormData({
                      question: '',
                      answer: '',
                      category: '',
                      sort_order: 0,
                      is_visible: true
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
          {faqs.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-gray-500 mb-4">No FAQs found</p>
                <Button onClick={() => setIsEditing(true)}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First FAQ
                </Button>
              </CardContent>
            </Card>
          ) : (
            faqs.map((faq) => (
              <Card key={faq.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{faq.question}</CardTitle>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant={faq.is_visible ? "default" : "secondary"}>
                          {faq.is_visible ? "Visible" : "Hidden"}
                        </Badge>
                        {faq.category && <Badge variant="outline">{faq.category}</Badge>}
                        <span className="text-sm text-gray-500">Order: {faq.sort_order}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleVisibility(faq.id, faq.is_visible)}
                      >
                        {faq.is_visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(faq)}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(faq.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{faq.answer}</p>
                  <div className="mt-4 text-sm text-gray-500">
                    Created: {new Date(faq.created_at).toLocaleDateString()}
                    {faq.updated_at !== faq.created_at && (
                      <span> • Updated: {new Date(faq.updated_at).toLocaleDateString()}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
