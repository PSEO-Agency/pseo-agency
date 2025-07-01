
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const { data: testimonials, isLoading } = useQuery({
    queryKey: ['testimonials'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_featured', true)
        .order('sort_order', { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <div className="animate-pulse space-y-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl p-8 h-64"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!testimonials || testimonials.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
            <Star className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm font-bold">CLIENT SUCCESS STORIES</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
            Trusted by Industry Leaders
            <span className="webfx-text-gradient block mt-2">Across Every Sector</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how our programmatic SEO strategies have transformed businesses across diverse industries, 
            delivering exceptional results and sustainable growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="webfx-card p-8 group hover:scale-105 transition-all duration-300 relative">
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="h-12 w-12 text-blue-600" />
              </div>
              
              <div className="flex text-yellow-400 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-gray-700 mb-8 leading-relaxed text-lg relative z-10">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 ${
                  index === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600' :
                  index === 1 ? 'bg-gradient-to-br from-green-500 to-green-600' :
                  'bg-gradient-to-br from-purple-500 to-purple-600'
                }`}>
                  {testimonial.client_name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">{testimonial.client_name}</div>
                  <div className="text-blue-600 font-medium">{testimonial.company}</div>
                  {testimonial.category && (
                    <div className="text-sm text-gray-500 capitalize">{testimonial.category} Industry</div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
