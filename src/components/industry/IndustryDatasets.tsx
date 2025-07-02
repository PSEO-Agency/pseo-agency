
import { Database, FileText, BarChart3, Search } from "lucide-react";

interface IndustryDatasetsProps {
  industry: {
    name: string;
    [key: string]: any;
  };
}

export const IndustryDatasets = ({ industry }: IndustryDatasetsProps) => {
  const datasets = [
    {
      title: `${industry.name} Product Database`,
      description: `Comprehensive database of ${industry.name.toLowerCase()} products, services, and variations for automated content generation.`,
      size: "50,000+ entries",
      icon: Database,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: `${industry.name} Keyword Research`,
      description: `Extensive keyword research covering all ${industry.name.toLowerCase()} sub-niches, long-tail keywords, and search patterns.`,
      size: "25,000+ keywords",
      icon: Search,
      color: "from-green-500 to-green-600"
    },
    {
      title: `${industry.name} Content Templates`,
      description: `Pre-built content templates optimized for ${industry.name.toLowerCase()} businesses, including product pages, service descriptions, and landing pages.`,
      size: "200+ templates",
      icon: FileText,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: `${industry.name} Market Data`,
      description: `Industry-specific market data, trends, and analytics to inform content strategy and optimization decisions.`,
      size: "Real-time data",
      icon: BarChart3,
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-50 rounded-full px-6 py-3 mb-8 border border-green-100">
            <Database className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-green-700 text-sm font-bold">DATA RESOURCES</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
            Comprehensive <span className="webfx-text-gradient">{industry.name}</span> Data Assets
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our extensive {industry.name.toLowerCase()} data resources power intelligent content automation and ensure maximum relevance and effectiveness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {datasets.map((dataset, index) => {
            const IconComponent = dataset.icon;
            
            return (
              <div key={index} className="webfx-card p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${dataset.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {dataset.title}
                      </h3>
                      <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {dataset.size}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {dataset.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
