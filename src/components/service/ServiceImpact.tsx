
import { TrendingUp, Target, DollarSign, Users, CheckCircle2 } from "lucide-react";

interface ServiceImpactProps {
  service: {
    title: string;
  };
}

export const ServiceImpact = ({ service }: ServiceImpactProps) => {
  const stats = [
    {
      number: "300%",
      label: "Average improvement",
      subtext: "within 6 months",
      icon: TrendingUp,
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "95%",
      label: "Client satisfaction rate",
      subtext: "based on reviews",
      icon: Target,
      color: "from-green-500 to-green-600"
    },
    {
      number: "$500K+",
      label: "Average revenue increase",
      subtext: "per client annually",
      icon: DollarSign,
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "1000+",
      label: "Successful projects",
      subtext: "completed",
      icon: Users,
      color: "from-orange-500 to-red-500"
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
          <div className="inline-flex items-center bg-green-50 rounded-full px-6 py-3 mb-8 border border-green-100">
            <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-green-700 text-sm font-bold">PROVEN RESULTS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
            The Impact of Our
            <span className="webfx-text-gradient block mt-2">{service.title}</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            See the measurable results our {service.title.toLowerCase()} service delivers for businesses like yours.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="webfx-stats-card text-center group hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-black text-gray-900 mb-3">{stat.number}</div>
                <div className="text-lg font-bold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.subtext}</div>
              </div>
            );
          })}
        </div>

        {/* Success highlights */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">Why Choose Our {service.title}?</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <CheckCircle2 className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Expert Team</h4>
                <p className="text-blue-200">Certified specialists with years of experience</p>
              </div>
              <div className="text-center">
                <CheckCircle2 className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Proven Process</h4>
                <p className="text-blue-200">Battle-tested methodology that delivers results</p>
              </div>
              <div className="text-center">
                <CheckCircle2 className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Ongoing Support</h4>
                <p className="text-blue-200">Continuous optimization and dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
