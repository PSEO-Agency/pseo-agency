import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { ArrowRight, Building2 } from "lucide-react";

export const IndustriesSection = () => {
  const { data: industries, isLoading } = useQuery({
    queryKey: ['industries-featured'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('industries')
        .select('*')
        .eq('is_published', true)
        .order('sort_order')
        .limit(8);
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Helping Businesses <span className="webfx-text-gradient">Across All Industries</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From e-commerce to SaaS, healthcare to finance - our programmatic SEO strategies 
            are tailored to deliver results in any vertical.
          </p>
        </div>

        {industries && industries.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industries.map((industry) => (
              <Link
                key={industry.id}
                to={`/industries/${industry.slug}`}
                className="webfx-card p-6 text-center group hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {industry.name}
                </h3>
                {industry.description && (
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {industry.description}
                  </p>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <Building2 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Industries content coming soon...</p>
          </div>
        )}

        <div className="text-center">
          <Link
            to="/industries"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 text-lg group"
          >
            View All Industries
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </section>
  );
};
