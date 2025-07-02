
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from "@/hooks/use-toast";

interface UseEntityManagementOptions {
  tableName: string;
  orderBy?: string;
  orderDirection?: 'asc' | 'desc';
}

export const useEntityManagement = <T extends Record<string, any>>({
  tableName,
  orderBy = 'created_at',
  orderDirection = 'desc'
}: UseEntityManagementOptions) => {
  const [entities, setEntities] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchEntities = async () => {
    try {
      const { data, error } = await supabase
        .from(tableName)
        .select('*')
        .order(orderBy, { ascending: orderDirection === 'asc' });

      if (error) throw error;
      setEntities(data || []);
    } catch (error: any) {
      toast({
        title: "Error",
        description: `Failed to fetch ${tableName}: ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const deleteEntity = async (id: string) => {
    if (!confirm(`Are you sure you want to delete this ${tableName.slice(0, -1)}?`)) return;

    try {
      const { error } = await supabase
        .from(tableName)
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: `${tableName.slice(0, -1)} deleted successfully`,
      });
      fetchEntities();
    } catch (error: any) {
      toast({
        title: "Error",
        description: `Failed to delete ${tableName.slice(0, -1)}: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  const toggleEntityStatus = async (id: string, currentStatus: boolean, statusField: string) => {
    try {
      const { error } = await supabase
        .from(tableName)
        .update({ [statusField]: !currentStatus })
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: `${tableName.slice(0, -1)} ${!currentStatus ? 'enabled' : 'disabled'} successfully`,
      });
      fetchEntities();
    } catch (error: any) {
      toast({
        title: "Error",
        description: `Failed to update ${tableName.slice(0, -1)}: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    fetchEntities();
  }, []);

  return {
    entities,
    loading,
    fetchEntities,
    deleteEntity,
    toggleEntityStatus
  };
};
