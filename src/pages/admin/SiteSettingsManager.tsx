
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { supabase } from '@/integrations/supabase/client';
import { ArrowLeft, Plus, Edit, Trash2, Save, Settings } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface SiteSetting {
  id: string;
  key: string;
  value: string | null;
  type: string;
  category: string;
  description: string | null;
  is_public: boolean;
  created_at: string;
  updated_at: string;
}

interface FormData {
  key: string;
  value: string;
  type: string;
  category: string;
  description: string;
  is_public: boolean;
}

const SETTING_TYPES = ['text', 'number', 'boolean', 'json'];
const CATEGORIES = ['general', 'contact', 'tracking', 'seo', 'social', 'api', 'appearance'];

export const SiteSettingsManager = () => {
  const { user, isAdmin } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [settings, setSettings] = useState<SiteSetting[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingSetting, setEditingSetting] = useState<SiteSetting | null>(null);
  const [activeCategory, setActiveCategory] = useState('general');
  const [formData, setFormData] = useState<FormData>({
    key: '',
    value: '',
    type: 'text',
    category: 'general',
    description: '',
    is_public: false
  });

  useEffect(() => {
    if (!user || !isAdmin) {
      navigate('/admin/login');
      return;
    }
    fetchSettings();
  }, [user, isAdmin, navigate]);

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .order('category', { ascending: true })
        .order('key', { ascending: true });
      
      if (error) throw error;
      setSettings(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to fetch site settings: " + error.message,
        variant: "destructive"
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingSetting) {
        const { error } = await supabase
          .from('site_settings')
          .update({
            ...formData,
            updated_at: new Date().toISOString()
          })
          .eq('id', editingSetting.id);
        
        if (error) throw error;
        toast({ title: "Success", description: "Setting updated successfully" });
      } else {
        const { error } = await supabase
          .from('site_settings')
          .insert([formData]);
        
        if (error) throw error;
        toast({ title: "Success", description: "Setting created successfully" });
      }
      
      setIsEditing(false);
      setEditingSetting(null);
      setFormData({
        key: '',
        value: '',
        type: 'text',
        category: 'general',
        description: '',
        is_public: false
      });
      fetchSettings();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const handleEdit = (setting: SiteSetting) => {
    setEditingSetting(setting);
    setFormData({
      key: setting.key,
      value: setting.value || '',
      type: setting.type,
      category: setting.category,
      description: setting.description || '',
      is_public: setting.is_public
    });
    setIsEditing(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this setting?')) return;
    
    try {
      const { error } = await supabase
        .from('site_settings')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      toast({ title: "Success", description: "Setting deleted successfully" });
      fetchSettings();
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      });
    }
  };

  const getSettingsByCategory = (category: string) => {
    return settings.filter(setting => setting.category === category);
  };

  const renderSettingValue = (setting: SiteSetting) => {
    if (setting.type === 'boolean') {
      return setting.value === 'true' ? 'Yes' : 'No';
    }
    if (setting.type === 'json') {
      try {
        return JSON.stringify(JSON.parse(setting.value || '{}'), null, 2);
      } catch {
        return setting.value || '';
      }
    }
    return setting.value || '';
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
            <h1 className="text-3xl font-bold text-gray-900">Site Settings</h1>
          </div>
          <Button onClick={() => setIsEditing(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Add Setting
          </Button>
        </div>

        {isEditing && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{editingSetting ? 'Edit Setting' : 'Create New Setting'}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Key</label>
                    <Input
                      value={formData.key}
                      onChange={(e) => setFormData({ ...formData, key: e.target.value })}
                      placeholder="e.g., site_name, contact_email"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Category</label>
                    <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORIES.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Type</label>
                    <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {SETTING_TYPES.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type.charAt(0).toUpperCase() + type.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center space-x-2 pt-6">
                    <Switch
                      checked={formData.is_public}
                      onCheckedChange={(checked) => setFormData({ ...formData, is_public: checked })}
                    />
                    <label className="text-sm font-medium">Public (accessible via API)</label>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Value</label>
                  {formData.type === 'json' ? (
                    <Textarea
                      value={formData.value}
                      onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                      rows={4}
                      placeholder='{"key": "value"}'
                    />
                  ) : formData.type === 'boolean' ? (
                    <Select value={formData.value} onValueChange={(value) => setFormData({ ...formData, value: value })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="true">True</SelectItem>
                        <SelectItem value="false">False</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <Input
                      type={formData.type === 'number' ? 'number' : 'text'}
                      value={formData.value}
                      onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                    />
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <Input
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Brief description of what this setting controls"
                  />
                </div>
                
                <div className="flex space-x-2">
                  <Button type="submit">
                    <Save className="h-4 w-4 mr-2" />
                    {editingSetting ? 'Update' : 'Create'} Setting
                  </Button>
                  <Button type="button" variant="outline" onClick={() => {
                    setIsEditing(false);
                    setEditingSetting(null);
                    setFormData({
                      key: '',
                      value: '',
                      type: 'text',
                      category: 'general',
                      description: '',
                      is_public: false
                    });
                  }}>
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        <Tabs value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
            {CATEGORIES.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {CATEGORIES.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid gap-4">
                {getSettingsByCategory(category).length === 0 ? (
                  <Card>
                    <CardContent className="text-center py-12">
                      <Settings className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-500 mb-4">No {category} settings found</p>
                      <Button onClick={() => {
                        setFormData({ ...formData, category });
                        setIsEditing(true);
                      }}>
                        <Plus className="h-4 w-4 mr-2" />
                        Add {category.charAt(0).toUpperCase() + category.slice(1)} Setting
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  getSettingsByCategory(category).map((setting) => (
                    <Card key={setting.id}>
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="text-lg font-semibold">{setting.key}</h3>
                              <Badge variant={setting.is_public ? "default" : "secondary"}>
                                {setting.is_public ? "Public" : "Private"}
                              </Badge>
                              <Badge variant="outline">{setting.type}</Badge>
                            </div>
                            {setting.description && (
                              <p className="text-sm text-gray-600 mb-2">{setting.description}</p>
                            )}
                            <div className="mt-2">
                              <span className="text-sm font-medium text-gray-700">Value:</span>
                              <div className="mt-1 p-2 bg-gray-50 rounded border text-sm font-mono">
                                {renderSettingValue(setting)}
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2 ml-4">
                            <Button variant="outline" size="sm" onClick={() => handleEdit(setting)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="outline" size="sm" onClick={() => handleDelete(setting.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};
