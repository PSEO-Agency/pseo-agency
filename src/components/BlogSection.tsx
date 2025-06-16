
export const BlogSection = () => {
  const blogPosts = [
    {
      title: "The Complete Guide to Programmatic SEO in 2024",
      excerpt: "Learn how to scale your content strategy and drive massive organic growth with programmatic SEO techniques.",
      category: "Strategy",
      readTime: "8 min read",
      image: "/api/placeholder/400/250"
    },
    {
      title: "How We Generated 10M+ Page Views with Automated Content",
      excerpt: "A detailed case study showing our step-by-step process for creating thousands of high-ranking pages.",
      category: "Case Study",
      readTime: "12 min read",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Technical SEO for Large-Scale Content Operations",
      excerpt: "Essential technical considerations when implementing programmatic SEO at enterprise scale.",
      category: "Technical",
      readTime: "6 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From the pSEO Blog
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest programmatic SEO strategies, case studies, and industry insights.
            </p>
          </div>
          <button className="text-blue-600 font-semibold hover:text-blue-700">
            View All Posts →
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              <div className="h-48 bg-gray-200 mb-4"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
