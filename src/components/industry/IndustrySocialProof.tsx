
import { Star, Quote, Building, TrendingUp } from "lucide-react";

interface IndustrySocialProofProps {
  industry: {
    name: string;
    [key: string]: any;
  };
}

export const IndustrySocialProof = ({ industry }: IndustrySocialProofProps) => {
  // Generate industry-specific testimonials
  const testimonials = [
    {
      content: `Our ${industry.name.toLowerCase()} business saw a 400% increase in organic traffic within 6 months. The programmatic approach was exactly what we needed to scale.`,
      client_name: "Sarah Johnson",
      company: `${industry.name} Solutions Inc.`,
      rating: 5,
      result: "400% traffic increase"
    },
    {
      content: `The industry expertise shown by the team was exceptional. They understood our ${industry.name.toLowerCase()} market and delivered results that exceeded our expectations.`,
      client_name: "Michael Chen",
      company: `Elite ${industry.name} Services`,
      rating: 5,
      result: "300% lead increase"
    },
    {
      content: `Best investment we've made for our ${industry.name.toLowerCase()} company. The ROI has been phenomenal and the ongoing support is outstanding.`,
      client_name: "Emily Rodriguez",
      company: `${industry.name} Dynamics LLC`,
      rating: 5,
      result: "$500K+ revenue boost"
    }
  ];

  const industryMetrics = [
    {
      icon: Building,
      value: "150+",
      label: `${industry.name} Clients Served`,
      color: "text-blue-600"
    },
    {
      icon: TrendingUp,
      value: "89%",
      label: `${industry.name} Success Rate`,
      color: "text-green-600"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: `${industry.name} Client Rating`,
      color: "text-yellow-600"
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
            What <span className="webfx-text-gradient">{industry.name}</span> Leaders Say
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Don't just take our word for it. See what successful {industry.name.toLowerCase()} businesses have to say about our results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
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
                <div className="text-blue-600 font-medium mb-2">{testimonial.company}</div>
                <div className="text-sm text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                  {testimonial.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry-specific trust indicators */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{industry.name} Industry Recognition</h3>
            <p className="text-gray-600">Our proven track record in the {industry.name.toLowerCase()} sector</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {industryMetrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <IconComponent className={`h-8 w-8 ${metric.color}`} />
                  </div>
                  <div className="text-3xl font-black text-gray-900 mb-2">{metric.value}</div>
                  <div className="text-gray-600 font-medium">{metric.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
