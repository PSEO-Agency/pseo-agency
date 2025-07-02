
import { useToast } from "@/hooks/use-toast";
import { supabase } from '@/integrations/supabase/client';

interface DuplicateOptions {
  titleField?: string;
  slugField?: string;
  publishedField?: string;
  visibleField?: string;
  sortOrderField?: string;
}

export const useEntityDuplication = (tableName: string, options: DuplicateOptions = {}) => {
  const { toast } = useToast();
  const {
    titleField = 'title',
    slugField = 'slug',
    publishedField = 'is_published',
    visibleField = 'is_visible',
    sortOrderField = 'sort_order'
  } = options;

  const handleDuplicate = async (entity: any, onSuccess?: () => void) => {
    try {
      const { id, created_at, updated_at, ...entityData } = entity;
      
      const duplicatedEntity = {
        ...entityData,
        [titleField]: entity[titleField] ? `${entity[titleField]} (Copy)` : undefined,
        [slugField]: entity[slugField] ? `${entity[slugField]}-copy` : undefined,
        [publishedField]: false,
        [visibleField]: false,
        [sortOrderField]: entity[sortOrderField] ? entity[sortOrderField] + 1 : undefined,
      };

      // Remove undefined values
      Object.keys(duplicatedEntity).forEach(key => {
        if (duplicatedEntity[key] === undefined) {
          delete duplicatedEntity[key];
        }
      });

      const { error } = await supabase
        .from(tableName)
        .insert([duplicatedEntity]);

      if (error) throw error;
      
      toast({
        title: "Success",
        description: `${tableName.slice(0, -1)} duplicated successfully`,
      });
      
      if (onSuccess) onSuccess();
    } catch (error: any) {
      toast({
        title: "Error",
        description: `Failed to duplicate ${tableName.slice(0, -1)}: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  return { handleDuplicate };
};
