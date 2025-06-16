
export const ImpactSection = () => {
  const stats = [
    {
      number: "800%",
      label: "Average organic traffic increase",
      subtext: "within 12 months"
    },
    {
      number: "45,000",
      label: "Keywords ranking on page 1",
      subtext: "across all client accounts"
    },
    {
      number: "$2.4B",
      label: "Revenue generated for clients",
      subtext: "through programmatic SEO"
    },
    {
      number: "2,500+",
      label: "Businesses trust our expertise",
      subtext: "worldwide"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Uncover The Impact of Programmatic SEO on Revenue
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our data-driven approach to programmatic SEO has helped thousands of businesses 
            achieve unprecedented growth in organic traffic and revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.subtext}</div>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Ready to 10x your organic traffic with programmatic SEO?
              </h3>
              <p className="text-blue-100 mb-6">
                Our team of SEO experts will create a custom programmatic strategy that scales 
                your content, increases your rankings, and drives qualified traffic to your business.
              </p>
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Your Free SEO Audit
              </button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="text-2xl font-bold text-green-300 mb-2">ROI Calculator</div>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Current Monthly Traffic:</span>
                    <span className="font-semibold">10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Projected Traffic Increase:</span>
                    <span className="font-semibold text-green-300">+800%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Additional Monthly Revenue:</span>
                    <span className="font-semibold text-green-300">$45,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
