
import { Brain, Database, Code, BarChart3, Search, Zap } from "lucide-react";

export const ExpertiseSection = () => {
  const expertiseAreas = [
    {
      icon: Search,
      title: "Technical SEO Mastery",
      description: "Deep expertise in crawlability, indexation, and site architecture optimization at scale.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Database,
      title: "Data Architecture",
      description: "Advanced database design and API integration for seamless content automation.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Code,
      title: "Development Integration",
      description: "Full-stack development capabilities for custom pSEO implementations and tools.",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Leveraging artificial intelligence for content optimization and keyword research.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive tracking and performance measurement across thousands of pages.",
      color: "from-teal-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Automation Systems",
      description: "Building robust workflows that scale content production without manual intervention.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Unmatched Expertise <span className="webfx-text-gradient">Driving Results</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our team of SEO specialists with deep expertise in pSEO, dynamic data sets and content automation
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Battle-tested strategies that have generated billions in revenue through systematic programmatic approaches
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div key={index} className="webfx-card p-8 group hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${area.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{area.title}</h3>
                <p className="text-gray-600 leading-relaxed">{area.description}</p>
              </div>
            );
          })}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black webfx-text-gradient mb-2">15+</div>
              <div className="text-gray-700 font-medium">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl font-black webfx-text-gradient mb-2">100+</div>
              <div className="text-gray-700 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-black webfx-text-gradient mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Support & Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
