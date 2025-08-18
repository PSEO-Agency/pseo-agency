export const SEOCastSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            CEO guest on SEOCast
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Listen to our CEO on the #1 Dutch SEO Podcast: SEOCast
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <iframe 
              data-testid="embed-iframe" 
              style={{borderRadius: '12px'}} 
              src="https://open.spotify.com/embed/episode/5sEUTqjeUqlfACqVvzs7W5?utm_source=generator&theme=0" 
              width="100%" 
              height="152" 
              frameBorder="0" 
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="SEOCast Podcast Episode with CEO"
            />
          </div>
        </div>
      </div>
    </section>
  );
};