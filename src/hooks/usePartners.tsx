import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const usePartners = () => {
  return useQuery({
    queryKey: ['partners'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .eq('is_published', true)
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });
};

export const usePartner = (slug: string) => {
  return useQuery({
    queryKey: ['partner', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .maybeSingle();
      
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });
};

export const usePartnersByType = (type: string) => {
  return useQuery({
    queryKey: ['partners', 'type', type],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('partners')
        .select('*')
        .eq('is_published', true)
        .eq('partner_type', type)
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data;
    },
    enabled: !!type,
  });
};
