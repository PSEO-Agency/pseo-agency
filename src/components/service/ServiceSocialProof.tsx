
import { Star, Quote } from "lucide-react";
import { Json } from "@/integrations/supabase/types";

interface ServiceSocialProofProps {
  service: {
    title: string;
    case_study_ids?: Json;
    [key: string]: any;
  };
}

export const ServiceSocialProof = ({ service }: ServiceSocialProofProps) => {
  // Default testimonials for demonstration
  const testimonials = [
    {
      content: "The results exceeded our expectations. Our traffic increased by 400% within 6 months.",
      client_name: "Sarah Johnson",
      company: "TechFlow Solutions",
      rating: 5
    },
    {
      content: "Professional team with incredible expertise. They delivered exactly what they promised.",
      client_name: "Michael Chen",
      company: "GrowthCorp",
      rating: 5
    },
    {
      content: "Best investment we've made for our business. The ROI has been phenomenal.",
      client_name: "Emily Rodriguez",
      company: "Digital Dynamics",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-yellow-50 rounded-full px-6 py-3 mb-8 border border-yellow-100">
            <Star className="h-5 w-5 text-yellow-600 mr-2" />
            <span className="text-yellow-700 text-sm font-bold">CLIENT SUCCESS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
            What Our Clients Say About Our
            <span className="webfx-text-gradient block mt-2">{service.title}</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. See what our satisfied clients have to say about our results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="webfx-card p-8 group hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-blue-200" />
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-gray-900">{testimonial.client_name}</div>
                <div className="text-blue-600 font-medium">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
