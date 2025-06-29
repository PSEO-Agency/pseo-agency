
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
import type { Json } from '@/integrations/supabase/types';

interface Service {
  id: string;
  title: string;
  description: string | null;
  icon: string | null;
  features: Json | null;
  is_featured: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

interface FormData {
  title: string;
  description: string;
  icon: string;
  features: Json;
  is_featured: boolean;
  sort_order: number;
}

export const ServicesManager = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [services, setServices] = useState<Service[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    icon: '',
    features: [],
    is_featured: false,
    sort_order: 0
  });

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate('/admin/login');
      return;
    }
    fetchServices();
  }, [user, isAdmin, navigate]);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      setServices(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch services: " + error.message,
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingService) {
        const { error } = await supabase
          .from('services')
          .update({
            ...formData,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingService.id);
        
        if (error) throw error;
        toast({ title: "Success", description: "Service updated successfully" });
      } else {
        const { error } = await supabase
          .from('services')
          .insert([formData]);
        
        if (error) throw error;
        toast({ title: "Success", description: "Service created successfully" });
      }
      
      setIsEditing(false);
      setEditingService(null);
      setFormData({
        title: '',
        description: '',
        icon: '',
        features: [],
        is_featured: false,
        sort_order: 0
      });
      fetchServices();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      title: service.title,
      description: service.description || '',
      icon: service.icon || '',
      features: service.features || [],
      is_featured: service.is_featured,
      sort_order: service.sort_order
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;
    
    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      toast({ title: "Success", description: "Service deleted successfully" });
      fetchServices();
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
            <h1 className="text-3xl font-bold text-gray-900">Services Manager</h1>
          </div>
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Service
          </Button>
        </div>

        {isEditing && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingService ? 'Edit Service' : 'Create New Service'}</CardTitle>
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
                    <label className="block text-sm font-medium mb-2">Icon</label>
                    <Input
                      value={formData.icon}
                      onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                      placeholder="e.g., search, chart, settings"
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch
                      checked={formData.is_featured}
                      onCheckedChange={(checked) => setFormData({ ...formData, is_featured: checked })}
                    />
                    <label className="text-sm font-medium">Featured Service</label>
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
                    {editingService ? 'Update' : 'Create'} Service
                  </Button>
                  <Button type="button" variant="outline" onClick={() => {
                    setIsEditing(false);
                    setEditingService(null);
                    setFormData({
                      title: '',
                      description: '',
                      icon: '',
                      features: [],
                      is_featured: false,
                      sort_order: 0
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
          {services.map((service) => (
            <Card key={service.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                    <div className="flex items-center mt-2 space-x-2">
                      {service.is_featured && (
                        <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">
                          Featured
                        </span>
                      )}
                      <span className="text-xs text-gray-500">
                        Sort: {service.sort_order}
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" onClick={() => handleEdit(service)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleDelete(service.id)}>
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
