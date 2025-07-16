import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const StrategyCall = () => {
  // Load the external script for the calendar
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.wellplan.io/js/form_embed.js';
    script.type = 'text/javascript';
    document.head.appendChild(script);

    return () => {
      // Clean up script when component unmounts
      const existingScript = document.querySelector('script[src="https://link.wellplan.io/js/form_embed.js"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="mx-auto" style={{ maxWidth: '1200px' }}>
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Schedule Your Free Strategy Call
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Book a personalized strategy session with our SEO experts. We'll analyze your current situation and provide actionable insights to grow your organic traffic.
              </p>
            </div>
            
            <div className="bg-card rounded-lg border p-6 shadow-sm">
              <div className="h-[700px] md:h-[800px]">
                <iframe 
                  src="https://link.wellplan.io/widget/booking/s1GbtEZEDEXUXu4tzp6v" 
                  style={{ 
                    width: '100%', 
                    height: '100%',
                    border: 'none',
                    minHeight: '500px'
                  }}
                  scrolling="yes" 
                  id="strategy_call_calendar"
                  title="Schedule Strategy Call"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};