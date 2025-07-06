
export const TrustedToolsSection = () => {
  const tools = [
    {
      name: "Google",
      image: "/lovable-uploads/414e96b1-37fd-4391-a0eb-1deb075c2e4d.png",
      alt: "Google logo"
    },
    {
      name: "OpenAI",
      image: "/lovable-uploads/17d3db48-1aec-44c5-b92d-88f98d05b57f.png",
      alt: "OpenAI logo"
    },
    {
      name: "ChatGPT",
      image: "/lovable-uploads/b89a7a45-1ea5-4543-acf9-86dca7ef5531.png",
      alt: "ChatGPT logo"
    },
    {
      name: "N8n",
      image: "/lovable-uploads/6ea09309-bc85-4217-b4a0-fcef768a6271.png",
      alt: "N8n logo"
    },
    {
      name: "Make",
      image: "/lovable-uploads/36296636-cb8a-4052-8643-0f76251eb312.png",
      alt: "Make logo"
    },
    {
      name: "Ahrefs",
      image: "/lovable-uploads/6d1bbc9b-7982-47e0-96cc-6916119aa54a.png",
      alt: "Ahrefs logo"
    },
    {
      name: "Screaming Frog",
      image: "/lovable-uploads/2c14b3a1-4fbc-42ae-994a-65ebd0594a25.png",
      alt: "Screaming Frog logo"
    },
    {
      name: "Semrush",
      image: "/lovable-uploads/f6a164d7-491b-4d15-b016-80fa9a14e190.png",
      alt: "Semrush logo"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Powered by Industry-Leading Tools
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We leverage the best tools and technologies to deliver exceptional programmatic SEO results
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-20 w-full"
            >
              <img
                src={tool.image}
                alt={tool.alt}
                className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
