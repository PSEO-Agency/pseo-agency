
export const KPISection = () => {
  const kpis = [
    { label: "Traffic", value: "800%", description: "Average increase" },
    { label: "Leads", value: "450%", description: "More qualified leads" },
    { label: "CTR", value: "25%", description: "Click-through rate" },
    { label: "Rankings", value: "Page 1", description: "Average position" },
    { label: "Revenue", value: "300%", description: "ROI improvement" },
    { label: "Conversion", value: "15%", description: "Rate increase" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Improve the KPIs That Matter Most to Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our programmatic SEO strategies are designed to impact the metrics that directly 
            contribute to your bottom line and business growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {kpis.map((kpi, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">{kpi.value}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{kpi.label}</div>
              <div className="text-sm text-gray-600">{kpi.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Boost your website traffic and visibility
              </h3>
              <p className="text-gray-200 mb-6">
                Our comprehensive programmatic SEO audit will identify exactly how to improve your 
                organic performance and scale your content strategy for maximum impact.
              </p>
              <div className="space-y-2 text-sm text-gray-300">
                <div>✓ Complete technical SEO analysis</div>
                <div>✓ Keyword opportunity assessment</div>
                <div>✓ Competitor gap analysis</div>
                <div>✓ Content scalability roadmap</div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Get Your Free SEO Audit</h4>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="url"
                  placeholder="Website URL"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get My Free Audit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
