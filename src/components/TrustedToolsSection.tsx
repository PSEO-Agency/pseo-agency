

export const TrustedToolsSection = () => {
  const tools = [
    {
      name: "Google",
      image: "/lovable-uploads/414e96b1-37fd-4391-a0eb-1deb075c2e4d.png",
      alt: "Google logo"
    },
    {
      name: "OpenAI",
      image: "/lovable-uploads/5d1e9eac-202a-4a61-98b0-dadf91e52b45.png",
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
      image: "/lovable-uploads/af3bd7d9-e2fe-4e23-98b5-486f85f51534.png",
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
    <section className="py-16 bg-white">
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
                className="object-contain transition-all duration-300"
                style={{ 
                  maxHeight: '24px', 
                  maxWidth: '80px',
                  width: 'auto',
                  height: 'auto'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
