
import React from 'react';
import { Briefcase, Plus } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { AdminLayout } from '@/components/admin/AdminLayout';
import { AdminTable } from '@/components/admin/AdminTable';
import { useEntityManagement } from '@/hooks/useEntityManagement';
import { useEntityDuplication } from '@/hooks/useEntityDuplication';
import { Badge } from "@/components/ui/badge";

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
  const { toast } = useToast();
  const { entities: services, loading, fetchEntities, deleteEntity, toggleEntityStatus } = useEntityManagement<Service>({
    tableName: 'services',
    orderBy: 'sort_order',
    orderDirection: 'asc'
  });
  const { handleDuplicate } = useEntityDuplication('services', { sortOrderField: 'sort_order' });

  const handleEdit = (service: Service) => {
    toast({
      title: "Coming Soon",
      description: "Service editing will be available soon",
    });
  };

  const handleAdd = () => {
    toast({
      title: "Coming Soon",
      description: "Service creation will be available soon",
    });
  };

  const columns = [
    {
      key: 'status',
      label: 'Status',
      render: (value: any, item: Service) => (
        <Badge variant={item.is_featured ? "default" : "secondary"}>
          {item.is_featured ? "Featured" : "Standard"}
        </Badge>
      )
    },
    {
      key: 'sort_order',
      label: 'Order',
      render: (value: number) => <span className="text-sm text-gray-500">Order: {value}</span>
    },
    {
      key: 'slug',
      label: 'Slug',
      render: (value: string) => value ? <Badge variant="outline">{value}</Badge> : null
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
      title="Services Manager"
      icon={<Briefcase className="h-6 w-6 text-green-600" />}
      onAdd={handleAdd}
      addButtonText="New Service"
    >
      <AdminTable
        data={services}
        columns={columns}
        onEdit={handleEdit}
        onDelete={(service) => deleteEntity(service.id)}
        onDuplicate={(service) => handleDuplicate(service, fetchEntities)}
        onToggleStatus={(service) => toggleEntityStatus(service.id, service.is_featured, 'is_featured')}
        statusField="is_featured"
        emptyStateIcon={<Briefcase className="h-12 w-12 text-gray-400 mx-auto" />}
        emptyStateText="No services found"
        onAdd={handleAdd}
        addButtonText="Create Your First Service"
      />
    </AdminLayout>
  );
};
