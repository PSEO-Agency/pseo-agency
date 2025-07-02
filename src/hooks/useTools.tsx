
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

// New hook for related tools
export const useRelatedTools = (currentSlug: string, category?: string) => {
  return useQuery({
    queryKey: ['related-tools', currentSlug, category],
    queryFn: async () => {
      let query = supabase
        .from('software')
        .select('*')
        .eq('is_published', true)
        .eq('type', 'tool')
        .neq('slug', currentSlug)
        .limit(3);

      if (category) {
        query = query.eq('category', category);
      }

      const { data, error } = await query.order('popularity_score', { ascending: false });
      
      if (error) throw error;
      return data;
    },
    enabled: !!currentSlug,
  });
};
