
import React, { useState } from 'react';
import { HelpCircle, Plus, Save } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AdminTable } from '@/components/admin/AdminTable';
import { useEntityManagement } from '@/hooks/useEntityManagement';
import { useEntityDuplication } from '@/hooks/useEntityDuplication';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { supabase } from '@/integrations/supabase/client';

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
  const { toast } = useToast();
  const { entities: faqs, loading, fetchEntities, deleteEntity, toggleEntityStatus } = useEntityManagement({
    tableName: 'faqs',
    orderBy: 'sort_order',
    orderDirection: 'asc'
  });
  const { handleDuplicate } = useEntityDuplication('faqs', { titleField: 'question', visibleField: 'is_visible' });

  const [isEditing, setIsEditing] = useState(false);
  const [editingFaq, setEditingFaq] = useState<FAQ | null>(null);
  const [formData, setFormData] = useState<FormData>({
    question: '',
    answer: '',
    category: '',
    sort_order: 0,
    is_visible: true
  });

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
      fetchEntities();
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

  const handleAdd = () => {
    setIsEditing(true);
  };

  const columns = [
    {
      key: 'status',
      label: 'Status',
      render: (value: any, item: FAQ) => (
        <Badge variant={item.is_visible ? "default" : "secondary"}>
          {item.is_visible ? "Visible" : "Hidden"}
        </Badge>
      )
    },
    {
      key: 'category',
      label: 'Category',
      render: (value: string) => value ? <Badge variant="outline">{value}</Badge> : null
    },
    {
      key: 'sort_order',
      label: 'Order',
      render: (value: number) => <span className="text-sm text-gray-500">Order: {value}</span>
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <AdminLayout
      title="FAQs Manager"
      icon={<HelpCircle className="h-6 w-6 text-yellow-600" />}
      onAdd={handleAdd}
      addButtonText="Add FAQ"
    >
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

      <AdminTable
        data={faqs}
        columns={columns}
        onEdit={handleEdit}
        onDelete={(faq) => deleteEntity(faq.id)}
        onDuplicate={(faq) => handleDuplicate(faq, fetchEntities)}
        onToggleStatus={(faq) => toggleEntityStatus(faq.id, faq.is_visible, 'is_visible')}
        statusField="is_visible"
        emptyStateIcon={<HelpCircle className="h-12 w-12 text-gray-400 mx-auto" />}
        emptyStateText="No FAQs found"
        onAdd={handleAdd}
        addButtonText="Create Your First FAQ"
      />
    </AdminLayout>
  );
};
