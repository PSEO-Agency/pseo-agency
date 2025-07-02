
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useSoftware = () => {
  return useQuery({
    queryKey: ['software'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('software')
        .select('*')
        .eq('is_published', true)
        .eq('type', 'software')
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });
};

export const useFeaturedSoftware = () => {
  return useQuery({
    queryKey: ['featured-software'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('software')
        .select('*')
        .eq('is_published', true)
        .eq('type', 'software')
        .eq('is_featured', true)
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });
};

export const useSoftwareBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['software', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('software')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .eq('type', 'software')
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });
};

// New hook for related software
export const useRelatedSoftware = (currentSlug: string, category?: string) => {
  return useQuery({
    queryKey: ['related-software', currentSlug, category],
    queryFn: async () => {
      let query = supabase
        .from('software')
        .select('*')
        .eq('is_published', true)
        .eq('type', 'software')
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
