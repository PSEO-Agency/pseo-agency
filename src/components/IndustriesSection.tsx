
export const IndustriesSection = () => {
  const industries = [
    "E-commerce", "SaaS", "Real Estate", "Healthcare", "Finance", "Education",
    "Travel", "Automotive", "Legal", "Manufacturing", "Technology", "Retail"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Helping Businesses in <span className="text-blue-600">200+ Different Industries</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our programmatic SEO expertise spans across every major industry, 
            delivering tailored strategies that drive results regardless of your sector.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sm font-semibold text-gray-800">{industry}</div>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Boost Your Business Goals
              </h3>
              <p className="text-blue-100 mb-6">
                Whether you're looking to increase brand awareness, generate more leads, 
                or drive direct sales, our programmatic SEO strategies are designed to meet your specific objectives.
              </p>
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Speak with a Strategist
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-300">95%</div>
                <div className="text-sm text-blue-100">Client Satisfaction</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-yellow-300">24/7</div>
                <div className="text-sm text-blue-100">Support Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-purple-300">90+</div>
                <div className="text-sm text-blue-100">Net Promoter Score</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-300">5-Star</div>
                <div className="text-sm text-blue-100">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
