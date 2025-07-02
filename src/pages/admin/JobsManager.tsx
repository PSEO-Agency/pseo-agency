
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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { Trash2, Edit, Plus, Save, X, Building, MapPin, Clock, Star } from "lucide-react";

interface Job {
  id: string;
  title: string;
  slug: string;
  description?: string;
  department?: string;
  location?: string;
  employment_type?: string;
  salary_range?: string;
  requirements?: string[];
  responsibilities?: string[];  
  benefits?: string[];
  meta_title?: string;
  meta_description?: string;
  is_published?: boolean;
  is_featured?: boolean;
  sort_order?: number;
  created_at: string;
  updated_at: string;
}

const JobsManager = () => {
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const queryClient = useQueryClient();

  const { data: jobs, isLoading } = useQuery({
    queryKey: ['admin-jobs'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('jobs')
        .select('*')
        .order('sort_order')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Job[];
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('jobs').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-jobs'] });
      toast.success("Job deleted successfully");
    },
    onError: (error) => {
      toast.error("Failed to delete job: " + error.message);
    },
  });

  const upsertMutation = useMutation({
    mutationFn: async (job: Partial<Job>) => {
      const { id, created_at, updated_at, ...jobData } = job;
      
      if (id) {
        const { error } = await supabase.from('jobs').update(jobData).eq('id', id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from('jobs').insert([jobData]);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-jobs'] });
      setEditingJob(null);
      setIsCreating(false);
      toast.success(editingJob ? "Job updated successfully" : "Job created successfully");
    },
    onError: (error) => {
      toast.error("Failed to save job: " + error.message);
    },
  });

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this job?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleSave = (job: Partial<Job> & { id?: string }) => {
    upsertMutation.mutate(job);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  if (isLoading) {
    return <div className="flex justify-center p-8"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div></div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Jobs Manager</h1>
          <p className="text-gray-600 mt-1">Manage job postings and career opportunities</p>
        </div>
        <Button onClick={() => setIsCreating(true)} className="flex items-center gap-2">
          <Plus className="h-4 w-4" />
          Add New Job
        </Button>
      </div>

      <div className="grid gap-6">
        {jobs?.map((job) => (
          <Card key={job.id} className="relative">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                    {job.is_featured && (
                      <Badge className="bg-yellow-500 text-white flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        Featured
                      </Badge>
                    )}
                    {!job.is_published && (
                      <Badge variant="secondary">Draft</Badge>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {job.department && (
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Building className="h-3 w-3" />
                        {job.department}
                      </Badge>
                    )}
                    {job.location && (
                      <Badge variant="outline" className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {job.location}
                      </Badge>
                    )}
                    {job.employment_type && (
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {job.employment_type}
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="line-clamp-2">
                    {job.description}
                  </CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setEditingJob(job)}
                    className="flex items-center gap-1"
                  >
                    <Edit className="h-4 w-4" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(job.id)}
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

        {(!jobs || jobs.length === 0) && (
          <Card>
            <CardContent className="text-center py-12">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600 mb-4">Create your first job posting to get started.</p>
              <Button onClick={() => setIsCreating(true)}>
                Add New Job
              </Button>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Edit/Create Job Dialog */}
      <Dialog open={editingJob !== null || isCreating} onOpenChange={() => {
        setEditingJob(null);
        setIsCreating(false);
      }}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {editingJob ? 'Edit Job' : 'Create New Job'}
            </DialogTitle>
            <DialogDescription>
              {editingJob ? 'Update job details and settings' : 'Add a new job posting'}
            </DialogDescription>
          </DialogHeader>
          
          <JobForm
            job={editingJob}
            onSave={handleSave}
            onCancel={() => {
              setEditingJob(null);
              setIsCreating(false);
            }}
            generateSlug={generateSlug}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

interface JobFormProps {
  job: Job | null;
  onSave: (job: Partial<Job> & { id?: string }) => void;
  onCancel: () => void;
  generateSlug: (title: string) => string;
}

const JobForm = ({ job, onSave, onCancel, generateSlug }: JobFormProps) => {
  const [formData, setFormData] = useState({
    title: job?.title || '',
    slug: job?.slug || '',
    description: job?.description || '',
    department: job?.department || '',
    location: job?.location || 'Remote',
    employment_type: job?.employment_type || 'full-time',
    salary_range: job?.salary_range || '',
    requirements: job?.requirements || [],
    responsibilities: job?.responsibilities || [],
    benefits: job?.benefits || [],
    meta_title: job?.meta_title || '',
    meta_description: job?.meta_description || '',
    is_published: job?.is_published ?? true,
    is_featured: job?.is_featured ?? false,
    sort_order: job?.sort_order ?? 0,
  });

  const [arrayInputs, setArrayInputs] = useState({
    requirements: job?.requirements?.join('\n') || '',
    responsibilities: job?.responsibilities?.join('\n') || '',
    benefits: job?.benefits?.join('\n') || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const jobData = {
      ...formData,
      requirements: arrayInputs.requirements.split('\n').filter(item => item.trim()),
      responsibilities: arrayInputs.responsibilities.split('\n').filter(item => item.trim()),
      benefits: arrayInputs.benefits.split('\n').filter(item => item.trim()),
    };

    if (job?.id) {
      jobData.id = job.id;
    }

    onSave(jobData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="details">Job Details</TabsTrigger>
          <TabsTrigger value="seo">SEO & Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Job Title *</Label>
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
            <Label htmlFor="description">Job Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={4}
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                value={formData.department}
                onChange={(e) => setFormData(prev => ({ ...prev, department: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="employment_type">Employment Type</Label>
              <Select
                value={formData.employment_type}
                onValueChange={(value) => setFormData(prev => ({ ...prev, employment_type: value }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-time</SelectItem>
                  <SelectItem value="part-time">Part-time</SelectItem>
                  <SelectItem value="contract">Contract</SelectItem>
                  <SelectItem value="freelance">Freelance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="salary_range">Salary Range</Label>
            <Input
              id="salary_range"
              value={formData.salary_range}
              onChange={(e) => setFormData(prev => ({ ...prev, salary_range: e.target.value }))}
              placeholder="e.g., $80,000 - $120,000"
            />
          </div>
        </TabsContent>

        <TabsContent value="details" className="space-y-4">
          <div>
            <Label htmlFor="requirements">Requirements (one per line)</Label>
            <Textarea
              id="requirements"
              value={arrayInputs.requirements}
              onChange={(e) => setArrayInputs(prev => ({ ...prev, requirements: e.target.value }))}
              rows={6}
              placeholder="3+ years experience in SEO&#10;Strong analytical skills&#10;Knowledge of automation tools"
            />
          </div>

          <div>
            <Label htmlFor="responsibilities">Responsibilities (one per line)</Label>
            <Textarea
              id="responsibilities"
              value={arrayInputs.responsibilities}
              onChange={(e) => setArrayInputs(prev => ({ ...prev, responsibilities: e.target.value }))}
              rows={6}
              placeholder="Manage SEO campaigns&#10;Develop content strategies&#10;Analyze performance metrics"
            />
          </div>

          <div>
            <Label htmlFor="benefits">Benefits (one per line)</Label>
            <Textarea
              id="benefits"
              value={arrayInputs.benefits}
              onChange={(e) => setArrayInputs(prev => ({ ...prev, benefits: e.target.value }))}
              rows={6}
              placeholder="Competitive salary&#10;Remote work&#10;Health insurance&#10;Professional development budget"
            />
          </div>
        </TabsContent>

        <TabsContent value="seo" className="space-y-4">
          <div>
            <Label htmlFor="meta_title">Meta Title</Label>
            <Input
              id="meta_title"
              value={formData.meta_title}
              onChange={(e) => setFormData(prev => ({ ...prev, meta_title: e.target.value }))}
              placeholder="SEO optimized title for search results"
            />
          </div>

          <div>
            <Label htmlFor="meta_description">Meta Description</Label>
            <Textarea
              id="meta_description"
              value={formData.meta_description}
              onChange={(e) => setFormData(prev => ({ ...prev, meta_description: e.target.value }))}
              rows={3}
              placeholder="Brief description for search results (155 characters max)"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Switch
                id="is_published"
                checked={formData.is_published}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_published: checked }))}
              />
              <Label htmlFor="is_published">Published</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="is_featured"
                checked={formData.is_featured}
                onCheckedChange={(checked) => setFormData(prev => ({ ...prev, is_featured: checked }))}
              />
              <Label htmlFor="is_featured">Featured</Label>
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
          {job ? 'Update Job' : 'Create Job'}
        </Button>
      </div>
    </form>
  );
};

export default JobsManager;
