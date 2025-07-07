
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Plus, ExternalLink } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AdminTable } from '@/components/admin/AdminTable';
import { useEntityManagement } from '@/hooks/useEntityManagement';
import { useEntityDuplication } from '@/hooks/useEntityDuplication';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string | null;
  category: string | null;
  read_time: string | null;
  is_published: boolean;
  is_featured: boolean;
  slug: string;
  content: string | null;
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

export const BlogManager = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { entities: posts, loading, fetchEntities, deleteEntity, toggleEntityStatus } = useEntityManagement({
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

  const handleViewPost = (post: BlogPost) => {
    window.open(`/blog/${post.slug}`, '_blank');
  };

  const columns = [
    {
      key: 'title',
      label: 'Title',
      render: (value: string, item: BlogPost) => (
        <div className="max-w-xs">
          <div className="font-medium text-gray-900 truncate">{value}</div>
          {item.excerpt && (
            <div className="text-sm text-gray-500 truncate mt-1">{item.excerpt}</div>
          )}
        </div>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (value: any, item: BlogPost) => (
        <div className="flex items-center gap-2">
          <Badge variant={item.is_published ? "default" : "secondary"}>
            {item.is_published ? "Published" : "Draft"}
          </Badge>
          {item.is_featured && (
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
              Featured
            </Badge>
          )}
        </div>
      )
    },
    {
      key: 'category',
      label: 'Category',
      render: (value: string) => value ? <Badge variant="outline">{value}</Badge> : <span className="text-gray-400">No category</span>
    },
    {
      key: 'read_time',
      label: 'Read Time',
      render: (value: string) => value ? <span className="text-sm text-gray-500">{value}</span> : <span className="text-gray-400">-</span>
    },
    {
      key: 'published_at',
      label: 'Published',
      render: (value: string) => value ? (
        <span className="text-sm text-gray-500">
          {new Date(value).toLocaleDateString()}
        </span>
      ) : <span className="text-gray-400">Not published</span>
    },
    {
      key: 'actions',
      label: 'Actions',
      render: (value: any, item: BlogPost) => (
        <div className="flex items-center gap-2">
          {item.is_published && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleViewPost(item)}
              className="h-8 px-2"
            >
              <ExternalLink className="h-3 w-3" />
            </Button>
          )}
        </div>
      )
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
      <div className="mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <BookOpen className="h-5 w-5 text-blue-600 mt-0.5" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Blog Posts Status
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>You have <strong>{posts.length}</strong> blog posts total.</p>
                <p>Published: <strong>{posts.filter((p: BlogPost) => p.is_published).length}</strong></p>
                <p>Featured: <strong>{posts.filter((p: BlogPost) => p.is_featured).length}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
