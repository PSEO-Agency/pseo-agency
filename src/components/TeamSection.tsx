
import { Link } from "react-router-dom";

export const TeamSection = () => {
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
            <div className="text-lg font-semibold text-gray-900 mb-4">SEO Experts</div>
            <p className="text-gray-600">
              Our diverse team brings expertise from top agencies and in-house roles, 
              ensuring your campaigns benefit from the latest industry insights.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link to="/jobs">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Jobs
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};
