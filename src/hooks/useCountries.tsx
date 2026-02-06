import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface Country {
  id: string;
  name: string;
  slug: string;
  region: string | null;
  flag_emoji: string | null;
  partner_name: string | null;
  partner_logo_url: string | null;
  partner_description: string | null;
  partner_contact_url: string | null;
  hero_headline: string | null;
  hero_description: string | null;
  meta_title: string | null;
  meta_description: string | null;
  industries: string[];
  keywords: string[];
  services: Array<{ title: string; icon: string; description?: string }>;
  use_cases: Array<{ title: string; icon: string; description?: string }>;
  process_steps: Array<{ step: number; title: string; description: string }>;
  faqs: Array<{ question: string; answer: string }>;
  is_published: boolean;
  is_featured: boolean;
  sort_order: number;
  created_at: string;
  updated_at: string;
}

export const useCountries = () => {
  return useQuery({
    queryKey: ['countries'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('countries')
        .select('*')
        .eq('is_published', true)
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data as Country[];
    },
  });
};

export const useCountry = (slug: string) => {
  return useQuery({
    queryKey: ['country', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('countries')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();
      
      if (error) throw error;
      return data as Country;
    },
    enabled: !!slug,
  });
};

export const useFeaturedCountries = () => {
  return useQuery({
    queryKey: ['featured-countries'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('countries')
        .select('*')
        .eq('is_published', true)
        .eq('is_featured', true)
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data as Country[];
    },
  });
};
