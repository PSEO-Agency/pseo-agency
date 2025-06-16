
import { CheckCircle, Award, Users, Clock } from "lucide-react";

export const ExpertiseSection = () => {
  const expertise = [
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Recognized as a leading programmatic SEO agency by industry experts and publications."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "50+ SEO specialists with deep expertise in technical SEO and content automation."
    },
    {
      icon: CheckCircle,
      title: "Proven Methodology",
      description: "Battle-tested strategies that have generated billions in revenue for our clients."
    },
    {
      icon: Clock,
      title: "Fast Results",
      description: "See significant traffic improvements within 90 days of campaign launch."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unmatched Expertise <span className="text-blue-600">Driving Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With years of experience in programmatic SEO, we've perfected the art and science 
            of scaling organic traffic through automated content strategies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <item.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Process</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">1</div>
                <div>
                  <div className="font-semibold text-gray-900">Audit & Strategy</div>
                  <div className="text-sm text-gray-600">Comprehensive analysis of your current SEO performance</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">2</div>
                <div>
                  <div className="font-semibold text-gray-900">Content Framework</div>
                  <div className="text-sm text-gray-600">Build scalable content templates and automation systems</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">3</div>
                <div>
                  <div className="font-semibold text-gray-900">Scale & Optimize</div>
                  <div className="text-sm text-gray-600">Launch campaigns and continuously optimize for performance</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-semibold">4</div>
                <div>
                  <div className="font-semibold text-gray-900">Monitor & Report</div>
                  <div className="text-sm text-gray-600">Track results and provide detailed performance insights</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
