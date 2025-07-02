
import { FileText, Layout, Smartphone, Globe } from "lucide-react";

interface IndustryTemplatesProps {
  industry: {
    name: string;
    [key: string]: any;
  };
}

export const IndustryTemplates = ({ industry }: IndustryTemplatesProps) => {
  const templates = [
    {
      title: `${industry.name} Landing Pages`,
      description: `High-converting landing page templates designed specifically for ${industry.name.toLowerCase()} businesses with proven conversion elements.`,
      count: "50+ templates",
      preview: "Product showcase, testimonials, CTA optimization",
      icon: Layout,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: `${industry.name} Service Pages`,
      description: `Comprehensive service page templates that highlight ${industry.name.toLowerCase()} expertise and drive qualified leads.`,
      count: "30+ templates",
      preview: "Service details, pricing, case studies",
      icon: FileText,
      color: "from-green-500 to-green-600"
    },
    {
      title: `${industry.name} Location Pages`,
      description: `Location-specific page templates optimized for local SEO and ${industry.name.toLowerCase()} market penetration.`,
      count: "25+ templates",
      preview: "Local info, contact details, service areas",
      icon: Globe,
      color: "from-purple-500 to-purple-600"
    },
    {
      title: `${industry.name} Mobile Pages`,
      description: `Mobile-optimized templates ensuring perfect user experience across all devices for ${industry.name.toLowerCase()} customers.`,
      count: "40+ templates",
      preview: "Mobile-first design, touch optimization",
      icon: Smartphone,
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
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
            <Layout className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm font-bold">PAGE TEMPLATES</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
            Ready-to-Use <span className="webfx-text-gradient">{industry.name}</span> Templates
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Pre-built, conversion-optimized page templates specifically designed for {industry.name.toLowerCase()} businesses to accelerate your programmatic SEO deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {templates.map((template, index) => {
            const IconComponent = template.icon;
            
            return (
              <div key={index} className="webfx-card p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${template.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        {template.title}
                      </h3>
                      <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {template.count}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {template.description}
                    </p>
                    <div className="text-sm text-blue-600 bg-blue-50 px-4 py-2 rounded-lg">
                      <strong>Includes:</strong> {template.preview}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Template Features */}
        <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Template Features</h3>
            <p className="text-gray-600">Every template includes these essential elements for {industry.name.toLowerCase()} success</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">SEO Optimized</div>
              <div className="text-sm text-gray-600">Built-in SEO best practices</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Smartphone className="h-6 w-6 text-green-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">Mobile Ready</div>
              <div className="text-sm text-gray-600">Responsive design included</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Layout className="h-6 w-6 text-purple-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">Conversion Focused</div>
              <div className="text-sm text-gray-600">Optimized for conversions</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Globe className="h-6 w-6 text-orange-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">Brand Customizable</div>
              <div className="text-sm text-gray-600">Easy brand integration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
