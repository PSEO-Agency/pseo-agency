
import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Trash2, Edit, Plus, Save, X, Eye, Download, Image, Share2 } from "lucide-react";

interface SocialMediaVisual {
  id: string;
  title: string;
  slug: string;
  description?: string;
  format: string;
  width: number;
  height: number;
  template_data: any;
  html_variations: any[];
  generated_images?: string[];
  is_published: boolean;
  sort_order: number;
  download_count: number;
  created_at: string;
  updated_at: string;
}

const FORMATS = [
  { value: 'facebook-post', label: 'Facebook Post', width: 1200, height: 630 },
  { value: 'instagram-post', label: 'Instagram Post', width: 1080, height: 1080 },
  { value: 'instagram-story', label: 'Instagram Story', width: 1080, height: 1920 },
  { value: 'twitter-post', label: 'Twitter Post', width: 1200, height: 675 },
  { value: 'linkedin-post', label: 'LinkedIn Post', width: 1200, height: 627 },
  { value: 'youtube-thumbnail', label: 'YouTube Thumbnail', width: 1280, height: 720 },
];

const SocialMediaVisualsManager = () => {
  const [editingVisual, setEditingVisual] = useState<SocialMediaVisual | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [previewVisual, setPreviewVisual] = useState<SocialMediaVisual | null>(null);
  const queryClient = useQueryClient();

  const { data: visuals, isLoading } = useQuery({
    queryKey: ['admin-social-visuals'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('social_media_visuals')
        .select('*')
        .order('sort_order')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as SocialMediaVisual[];
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('social_media_visuals').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-social-visuals'] });
      toast.success("Visual deleted successfully");
    },
    onError: (error) => {
      toast.error("Failed to delete visual: " + error.message);
    },
  });

  const upsertMutation = useMutation({
    mutationFn: async (visual: Partial<SocialMediaVisual> & { id?: string }) => {
      const { id, created_at, updated_at, ...visualData } = visual;
      
      if (id) {
        const { error } = await supabase.from('social_media_visuals').update(visualData).eq('id', id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('social_media_visuals').insert(visualData);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-social-visuals'] });
      setEditingVisual(null);
      setIsCreating(false);
      toast.success(editingVisual ? "Visual updated successfully" : "Visual created successfully");
    },
    onError: (error) => {
      toast.error("Failed to save visual: " + error.message);
    },
  });

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this visual?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleSave = (visual: Partial<SocialMediaVisual> & { id?: string }) => {
    upsertMutation.mutate(visual);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const getFormatLabel = (format: string) => {
    return FORMATS.find(f => f.value === format)?.label || format;
  };

  if (isLoading) {
    return <div className="flex justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Social Media Visuals</h1>
          <p className="text-gray-600 mt-1">Create and manage social media visual templates</p>
        </div>
        <Button onClick={() => setIsCreating(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Create Visual
        </Button>
      </div>

      <div className="grid gap-6">
        {visuals?.map((visual) => (
          <Card key={visual.id} className="relative">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-xl">{visual.title}</CardTitle>
                    {!visual.is_published && (
                      <Badge variant="secondary">Draft</Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Share2 className="h-3 w-3" />
                      {getFormatLabel(visual.format)}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Image className="h-3 w-3" />
                      {visual.width}x{visual.height}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Download className="h-3 w-3" />
                      {visual.download_count} downloads
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {visual.description}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setPreviewVisual(visual)}
                    className="flex items-center gap-1"
                  >
                    <Eye className="h-4 w-4" />
                    Preview
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEditingVisual(visual)}
                    className="flex items-center gap-1"
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(visual.id)}
                    className="flex items-center gap-1 text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}

        {(!visuals || visuals.length === 0) && (
          <Card>
            <CardContent className="text-center py-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No visuals found</h3>
              <p className="text-gray-600 mb-4">Create your first social media visual template.</p>
              <Button onClick={() => setIsCreating(true)}>
                Create Visual
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Edit/Create Visual Dialog */}
      <Dialog open={editingVisual !== null || isCreating} onOpenChange={() => {
        setEditingVisual(null);
        setIsCreating(false);
      }}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingVisual ? 'Edit Visual' : 'Create New Visual'}
            </DialogTitle>
            <DialogDescription>
              {editingVisual ? 'Update visual template details' : 'Create a new social media visual template'}
            </DialogDescription>
          </DialogHeader>
          
          <VisualForm
            visual={editingVisual}
            onSave={handleSave}
            onCancel={() => {
              setEditingVisual(null);
              setIsCreating(false);
            }}
            generateSlug={generateSlug}
            formats={FORMATS}
          />
        </DialogContent>
      </Dialog>

      {/* Preview Dialog */}
      <Dialog open={previewVisual !== null} onOpenChange={() => setPreviewVisual(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Preview: {previewVisual?.title}</DialogTitle>
            <DialogDescription>
              Preview of the social media visual template
            </DialogDescription>
          </DialogHeader>
          
          {previewVisual && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>Format: {getFormatLabel(previewVisual.format)}</div>
                <div>Dimensions: {previewVisual.width}x{previewVisual.height}</div>
              </div>
              
              <div className="bg-gray-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Template Data:</h4>
                <pre className="text-xs overflow-auto">
                  {JSON.stringify(previewVisual.template_data, null, 2)}
                </pre>
              </div>
              
              {previewVisual.html_variations && previewVisual.html_variations.length > 0 && (
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">HTML Variations ({previewVisual.html_variations.length}):</h4>
                  <div className="text-xs">
                    HTML templates ready for generation
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

interface VisualFormProps {
  visual: SocialMediaVisual | null;
  onSave: (visual: Partial<SocialMediaVisual> & { id?: string }) => void;
  onCancel: () => void;
  generateSlug: (title: string) => string;
  formats: Array<{ value: string; label: string; width: number; height: number }>;
}

const VisualForm = ({ visual, onSave, onCancel, generateSlug, formats }: VisualFormProps) => {
  const [formData, setFormData] = useState({
    title: visual?.title || '',
    slug: visual?.slug || '',
    description: visual?.description || '',
    format: visual?.format || 'facebook-post',
    width: visual?.width || 1200,
    height: visual?.height || 630,
    template_data: visual?.template_data || {},
    html_variations: visual?.html_variations || [],
    is_published: visual?.is_published ?? true,
    sort_order: visual?.sort_order ?? 0,
  });

  const [templateDataString, setTemplateDataString] = useState(
    JSON.stringify(visual?.template_data || {
      title: "Your Title Here",
      subtitle: "Your subtitle here",
      backgroundColor: "#ffffff",
      textColor: "#000000"
    }, null, 2)
  );

  const handleFormatChange = (format: string) => {
    const formatConfig = formats.find(f => f.value === format);
    if (formatConfig) {
      setFormData(prev => ({
        ...prev,
        format,
        width: formatConfig.width,
        height: formatConfig.height
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const templateData = JSON.parse(templateDataString);
      
      const visualData = {
        ...formData,
        template_data: templateData,
        html_variations: formData.html_variations.length > 0 ? formData.html_variations : [
          `<div style="width: ${formData.width}px; height: ${formData.height}px; background: ${templateData.backgroundColor || '#ffffff'}; display: flex; flex-direction: column; justify-content: center; align-items: center; color: ${templateData.textColor || '#000000'};">
            <h1 style="font-size: 2rem; margin-bottom: 1rem;">${templateData.title || 'Title'}</h1>
            <p style="font-size: 1rem;">${templateData.subtitle || 'Subtitle'}</p>
          </div>`
        ]
      };

      const finalVisualData = visual?.id ? { ...visualData, id: visual.id } : visualData;
      onSave(finalVisualData);
    } catch (error) {
      toast.error("Invalid JSON in template data");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="template">Template</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => {
                  const title = e.target.value;
                  setFormData(prev => ({
                    ...prev,
                    title,
                    slug: generateSlug(title)
                  }));
                }}
                required
              />
            </div>
            <div>
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                value={formData.slug}
                onChange={(e) => setFormData(prev => ({ ...prev, slug: e.target.value }))}
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={3}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="format">Format *</Label>
              <Select
                value={formData.format}
                onValueChange={handleFormatChange}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {formats.map((format) => (
                    <SelectItem key={format.value} value={format.value}>
                      {format.label} ({format.width}x{format.height})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                type="number"
                value={formData.width}
                onChange={(e) => setFormData(prev => ({ ...prev, width: parseInt(e.target.value) || 0 }))}
                required
              />
            </div>
            <div>
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                type="number"
                value={formData.height}
                onChange={(e) => setFormData(prev => ({ ...prev, height: parseInt(e.target.value) || 0 }))}
                required
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="template" className="space-y-4">
          <div>
            <Label htmlFor="template_data">Template Data (JSON)</Label>
            <Textarea
              id="template_data"
              value={templateDataString}
              onChange={(e) => setTemplateDataString(e.target.value)}
              rows={10}
              className="font-mono text-sm"
              placeholder='{"title": "Your Title", "subtitle": "Your subtitle", "backgroundColor": "#ffffff", "textColor": "#000000"}'
            />
            <p className="text-sm text-gray-500 mt-1">
              Define the customizable content for this template in JSON format
            </p>
          </div>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="is_published"
              checked={formData.is_published}
              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_published: checked }))}
            />
            <Label htmlFor="is_published">Published</Label>
          </div>

          <div>
            <Label htmlFor="sort_order">Sort Order</Label>
            <Input
              id="sort_order"
              type="number"
              value={formData.sort_order}
              onChange={(e) => setFormData(prev => ({ ...prev, sort_order: parseInt(e.target.value) || 0 }))}
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end gap-2 pt-4 border-t">
        <Button type="button" variant="outline" onClick={onCancel}>
          <X className="h-4 w-4 mr-2" />
          Cancel
        </Button>
        <Button type="submit">
          <Save className="h-4 w-4 mr-2" />
          {visual ? 'Update Visual' : 'Create Visual'}
        </Button>
      </div>
    </form>
  );
};

export default SocialMediaVisualsManager;
