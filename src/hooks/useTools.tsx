
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useTools = () => {
  return useQuery({
    queryKey: ['tools'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('software')
        .select('*')
        .eq('is_published', true)
        .eq('type', 'tool')
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });
};

export const useFeaturedTools = () => {
  return useQuery({
    queryKey: ['featured-tools'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('software')
        .select('*')
        .eq('is_published', true)
        .eq('type', 'tool')
        .eq('is_featured', true)
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });
};

export const useToolBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['tool', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('software')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .eq('type', 'tool')
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });
};
