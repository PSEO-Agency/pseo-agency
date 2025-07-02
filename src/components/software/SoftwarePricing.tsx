
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from "lucide-react";

interface SoftwarePricingProps {
  pricingInfo: {
    price?: string;
    period?: string;
    description?: string;
    features?: string[];
  };
}

export const SoftwarePricing = ({ pricingInfo }: SoftwarePricingProps) => {
  if (!pricingInfo || !Object.keys(pricingInfo).length) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-50 rounded-full px-6 py-3 mb-8 border border-green-100">
            <Star className="h-5 w-5 text-green-600 mr-2" />
            <span className="text-green-700 text-sm font-bold">TRANSPARENT PRICING</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight">
            Start Scaling Your <span className="webfx-text-gradient">SEO Today</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started with our powerful programmatic SEO tools and see results immediately.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="webfx-card border-0 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            <CardContent className="p-12 text-center">
              <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-6">
                Professional Plan
              </Badge>
              
              {pricingInfo.price && (
                <div className="mb-6">
                  <span className="text-6xl font-black text-gray-900">
                    {pricingInfo.price}
                  </span>
                  {pricingInfo.period && (
                    <span className="text-2xl text-gray-600 ml-2">
                      /{pricingInfo.period}
                    </span>
                  )}
                </div>
              )}
              
              {pricingInfo.description && (
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  {pricingInfo.description}
                </p>
              )}
              
              {pricingInfo.features && Array.isArray(pricingInfo.features) && (
                <div className="mb-8">
                  <ul className="space-y-4 max-w-md mx-auto">
                    {pricingInfo.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-center text-left">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <Button size="lg" className="webfx-button-primary px-12 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300">
                Get Started Now
              </Button>
              
              <p className="text-sm text-gray-500 mt-4">
                30-day money-back guarantee • Cancel anytime
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
