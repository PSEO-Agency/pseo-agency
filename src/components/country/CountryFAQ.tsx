import { Country } from "@/hooks/useCountries";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

interface CountryFAQProps {
  country: Country;
}

export const CountryFAQ = ({ country }: CountryFAQProps) => {
  if (!country.faqs || country.faqs.length === 0) return null;
  
  // Schema markup for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": country.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  
  return (
    <section className="py-16 bg-white">
      {/* Schema markup */}
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 mb-4">
              <HelpCircle className="w-7 h-7 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Common questions about Programmatic SEO in {country.name.split('(')[0].trim()}
            </p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            {country.faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-gray-50 border border-gray-200 rounded-xl px-6 data-[state=open]:bg-white data-[state=open]:shadow-lg data-[state=open]:border-blue-300 transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
