
export const TeamSection = () => {
  const teamMembers = [
    { name: "Sarah Johnson", role: "Head of SEO Strategy", image: "/api/placeholder/150/150" },
    { name: "Mike Chen", role: "Technical SEO Lead", image: "/api/placeholder/150/150" },
    { name: "Emily Rodriguez", role: "Content Operations Manager", image: "/api/placeholder/150/150" },
    { name: "David Kim", role: "Data Analytics Director", image: "/api/placeholder/150/150" },
    { name: "Lisa Thompson", role: "Client Success Manager", image: "/api/placeholder/150/150" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Inside <span className="text-blue-600">pSEO</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the expert team behind your programmatic SEO success. Our dedicated professionals 
            bring years of experience and proven results to every campaign.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Life at pSEO</h3>
            <p className="text-lg text-gray-600 mb-6">
              We're passionate about helping businesses achieve extraordinary growth through 
              innovative SEO strategies. Our team combines technical expertise with creative 
              problem-solving to deliver results that exceed expectations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Remote-first culture with global talent</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Continuous learning and development</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-gray-700">Data-driven approach to everything we do</span>
              </div>
            </div>
          </div>
          <div className="bg-blue-100 rounded-lg p-8 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-lg font-semibold text-gray-900 mb-4">SEO Experts</div>
            <p className="text-gray-600">
              Our diverse team brings expertise from top agencies and in-house roles, 
              ensuring your campaigns benefit from the latest industry insights.
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-8 mb-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-2 mx-auto"></div>
              <div className="text-sm font-semibold text-gray-900">{member.name}</div>
              <div className="text-xs text-gray-600">{member.role}</div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-600 mb-6">
            Your world-class team, hand-curated ranking agency with 
            over <strong>2,500 happy client partners</strong>
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Meet Your Team
          </button>
        </div>
      </div>
    </section>
  );
};
