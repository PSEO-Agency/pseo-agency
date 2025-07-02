
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { Json } from "@/integrations/supabase/types";

interface ServiceFAQProps {
  service: {
    title: string;
    faq_ids?: Json;
    [key: string]: any;
  };
}

export const ServiceFAQ = ({ service }: ServiceFAQProps) => {
  // Default FAQs for demonstration
  const faqs = [
    {
      question: `How long does it take to see results from ${service.title}?`,
      answer: "Most clients see initial improvements within 30-60 days, with significant results typically visible within 3-6 months. The exact timeline depends on your current situation and industry competitiveness."
    },
    {
      question: `What makes your ${service.title} different from competitors?`,
      answer: "Our approach combines cutting-edge technology with proven strategies, personalized attention, and transparent reporting. We focus on delivering measurable ROI rather than just vanity metrics."
    },
    {
      question: `Do you offer ongoing support after implementation?`,
      answer: "Yes, we provide comprehensive ongoing support including regular monitoring, optimization, monthly reports, and strategic adjustments to ensure continued success."
    },
    {
      question: `What kind of businesses benefit most from this service?`,
      answer: "Our service works well for businesses of all sizes, from startups to enterprise companies. We customize our approach based on your specific industry, goals, and budget."
    },
    {
      question: `How do you measure success?`,
      answer: "We track key performance indicators relevant to your goals, including traffic growth, conversion rates, revenue impact, and ROI. You'll receive detailed monthly reports with actionable insights."
    },
    {
      question: `What's included in your service package?`,
      answer: "Our service includes strategy development, implementation, ongoing optimization, regular reporting, dedicated account management, and 24/7 support access."
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
            Common Questions About Our
            <span className="webfx-text-gradient block mt-2">{service.title}</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Get answers to the most common questions about our service and process.
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
