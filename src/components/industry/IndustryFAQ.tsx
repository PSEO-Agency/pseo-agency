
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

interface IndustryFAQProps {
  industry: {
    name: string;
    [key: string]: any;
  };
}

export const IndustryFAQ = ({ industry }: IndustryFAQProps) => {
  // Generate industry-specific FAQs
  const faqs = [
    {
      question: `How long does it take to see results from programmatic SEO for ${industry.name.toLowerCase()} businesses?`,
      answer: `Most ${industry.name.toLowerCase()} clients see initial improvements within 30-60 days, with significant results typically visible within 3-6 months. The exact timeline depends on your current ${industry.name.toLowerCase()} market position and competition level.`
    },
    {
      question: `What makes your programmatic SEO different for ${industry.name} companies?`,
      answer: `Our approach combines deep ${industry.name.toLowerCase()} industry knowledge with cutting-edge programmatic SEO technology. We understand the unique challenges, customer behavior, and market dynamics specific to ${industry.name.toLowerCase()} businesses.`
    },
    {
      question: `Do you have experience with ${industry.name.toLowerCase()} compliance and regulations?`,
      answer: `Yes, we have extensive experience working with ${industry.name.toLowerCase()} businesses and understand the industry-specific compliance requirements, regulations, and best practices that affect SEO strategy.`
    },
    {
      question: `What kind of ${industry.name.toLowerCase()} businesses benefit most from programmatic SEO?`,
      answer: `Our programmatic SEO works well for ${industry.name.toLowerCase()} businesses of all sizes, from local service providers to enterprise companies. We customize our approach based on your specific ${industry.name.toLowerCase()} niche, goals, and target market.`
    },
    {
      question: `How do you measure success for ${industry.name.toLowerCase()} SEO campaigns?`,
      answer: `We track ${industry.name.toLowerCase()}-specific KPIs including organic traffic growth, keyword rankings for industry terms, lead quality, conversion rates, and revenue impact. You'll receive detailed monthly reports with actionable insights.`
    },
    {
      question: `What's included in your ${industry.name.toLowerCase()} SEO service package?`,
      answer: `Our service includes ${industry.name.toLowerCase()}-specific keyword research, content strategy development, programmatic content creation, technical SEO optimization, ongoing monitoring, and dedicated account management with industry expertise.`
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-50 rounded-full px-6 py-3 mb-8 border border-blue-100">
            <HelpCircle className="h-5 w-5 text-blue-600 mr-2" />
            <span className="text-blue-700 text-sm font-bold">FREQUENTLY ASKED</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
            Common Questions About
            <span className="webfx-text-gradient block mt-2">{industry.name} SEO</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get answers to the most common questions about programmatic SEO for {industry.name.toLowerCase()} businesses.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="webfx-card p-0 border-0">
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-blue-50 transition-colors duration-200 rounded-t-2xl data-[state=open]:bg-blue-50">
                  <span className="text-lg font-bold text-gray-900 pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 text-gray-600 leading-relaxed">
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
