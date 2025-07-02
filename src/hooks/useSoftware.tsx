
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
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });
};
