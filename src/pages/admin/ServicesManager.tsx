
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from '@/integrations/supabase/client';
import { Plus, Edit, Trash2, ArrowLeft, Briefcase } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { useAuth } from '@/contexts/AuthContext';

interface Service {
  id: string;
  title: string;
  description: string | null;
  icon: string | null;
  features: any;
  is_featured: boolean;
  sort_order: number;
  slug: string | null;
  created_at: string;
  updated_at: string;
}

export const ServicesManager = () => {
  const { user, isAdmin } = useAuth();
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate('/admin/login');
      return;
    }
    fetchServices();
  }, [user, isAdmin, navigate]);

  const fetchServices = async () => {
    console.log('Fetching services...');
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('sort_order', { ascending: true });

      console.log('Services data:', data);
      console.log('Services error:', error);

      if (error) throw error;
      setServices(data || []);
    } catch (error: any) {
      console.error('Error fetching services:', error);
      toast({
        title: "Error",
        description: "Failed to fetch services: " + error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Service deleted successfully",
      });
      fetchServices();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to delete service: " + error.message,
        variant: "destructive",
      });
    }
  };

  const toggleFeatured = async (id: string, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('services')
        .update({ is_featured: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: `Service ${!currentStatus ? 'featured' : 'unfeatured'} successfully`,
      });
      fetchServices();
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to update service: " + error.message,
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
              <Briefcase className="h-6 w-6 text-green-600" />
              <h1 className="text-3xl font-bold text-gray-900">Services Manager</h1>
            </div>
          </div>
          <Button onClick={() => {
            toast({
              title: "Coming Soon",
              description: "Service creation will be available soon",
            });
          }}>
            <Plus className="h-4 w-4 mr-2" />
            New Service
          </Button>
        </div>

        <div className="grid gap-6">
          {services.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500 mb-4">No services found</p>
                <Button onClick={() => {
                  toast({
                    title: "Coming Soon",
                    description: "Service creation will be available soon",
                  });
                }}>
                  <Plus className="h-4 w-4 mr-2" />
                  Create Your First Service
                </Button>
              </CardContent>
            </Card>
          ) : (
            services.map((service) => (
              <Card key={service.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl flex items-center space-x-2">
                        {service.icon && <span className="text-2xl">{service.icon}</span>}
                        <span>{service.title}</span>
                      </CardTitle>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant={service.is_featured ? "default" : "secondary"}>
                          {service.is_featured ? "Featured" : "Standard"}
                        </Badge>
                        <span className="text-sm text-gray-500">Order: {service.sort_order}</span>
                        {service.slug && <Badge variant="outline">{service.slug}</Badge>}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleFeatured(service.id, service.is_featured)}
                      >
                        {service.is_featured ? "Unfeature" : "Feature"}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          toast({
                            title: "Coming Soon",
                            description: "Service editing will be available soon",
                          });
                        }}
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(service.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                {service.description && (
                  <CardContent>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    {service.features && Array.isArray(service.features) && service.features.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2">Features:</h4>
                        <ul className="list-disc list-inside space-y-1">
                          {service.features.map((feature: string, index: number) => (
                            <li key={index} className="text-sm text-gray-600">{feature}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="mt-4 text-sm text-gray-500">
                      Created: {new Date(service.created_at).toLocaleDateString()}
                      {service.updated_at !== service.created_at && (
                        <span> • Updated: {new Date(service.updated_at).toLocaleDateString()}</span>
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
