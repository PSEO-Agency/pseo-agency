
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Plus } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AdminTable } from '@/components/admin/AdminTable';
import { useEntityManagement } from '@/hooks/useEntityManagement';
import { useEntityDuplication } from '@/hooks/useEntityDuplication';
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string | null;
  category: string | null;
  read_time: string | null;
  is_published: boolean;
  slug: string;
  content: string | null;
  created_at: string;
  updated_at: string;
}

export const BlogManager = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { entities: posts, loading, fetchEntities, deleteEntity, toggleEntityStatus } = useEntityManagement<BlogPost>({
    tableName: 'blog_posts',
    orderBy: 'created_at',
    orderDirection: 'desc'
  });
  const { handleDuplicate } = useEntityDuplication('blog_posts');

  const handleEdit = (post: BlogPost) => {
    toast({
      title: "Coming Soon",
      description: "Blog post editing will be available soon",
    });
  };

  const handleAdd = () => {
    toast({
      title: "Coming Soon",
      description: "Blog post creation will be available soon",
    });
  };

  const columns = [
    {
      key: 'status',
      label: 'Status',
      render: (value: any, item: BlogPost) => (
        <Badge variant={item.is_published ? "default" : "secondary"}>
          {item.is_published ? "Published" : "Draft"}
        </Badge>
      )
    },
    {
      key: 'category',
      label: 'Category',
      render: (value: string) => value ? <Badge variant="outline">{value}</Badge> : null
    },
    {
      key: 'read_time',
      label: 'Read Time',
      render: (value: string) => value ? <span className="text-sm text-gray-500">{value}</span> : null
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
      title="Blog Manager"
      icon={<BookOpen className="h-6 w-6 text-pink-600" />}
      onAdd={handleAdd}
      addButtonText="New Post"
    >
      <AdminTable
        data={posts}
        columns={columns}
        onEdit={handleEdit}
        onDelete={(post) => deleteEntity(post.id)}
        onDuplicate={(post) => handleDuplicate(post, fetchEntities)}
        onToggleStatus={(post) => toggleEntityStatus(post.id, post.is_published, 'is_published')}
        statusField="is_published"
        emptyStateIcon={<BookOpen className="h-12 w-12 text-gray-400 mx-auto" />}
        emptyStateText="No blog posts found"
        onAdd={handleAdd}
        addButtonText="Create Your First Post"
      />
    </AdminLayout>
  );
};
