import { Country } from "@/hooks/useCountries";

interface CountryProcessProps {
  country: Country;
}

export const CountryProcess = ({ country }: CountryProcessProps) => {
  if (!country.process_steps || country.process_steps.length === 0) return null;
  
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Deliver Programmatic SEO in {country.name.split('(')[0].trim()}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our proven process for scaling organic traffic
            {country.partner_name && (
              <span className="block mt-2 text-blue-600 font-medium">
                Delivered jointly with {country.partner_name}
              </span>
            )}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 hidden md:block" />
            
            <div className="space-y-6">
              {country.process_steps.map((step, index) => (
                <div key={index} className="relative flex gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg z-10 shadow-lg shadow-blue-500/30">
                    {step.step}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 webfx-card p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
