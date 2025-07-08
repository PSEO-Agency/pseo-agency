
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import { Helmet } from "react-helmet";
import NotFound from "./NotFound";
import { ServiceHero } from "@/components/service/ServiceHero";
import { ServiceOverview } from "@/components/service/ServiceOverview";
import { ServiceImpact } from "@/components/service/ServiceImpact";
import { ServiceProcess } from "@/components/service/ServiceProcess";
import { ServiceSocialProof } from "@/components/service/ServiceSocialProof";
import { ServiceFAQ } from "@/components/service/ServiceFAQ";
import { ServiceCTA } from "@/components/service/ServiceCTA";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const { data: service, isLoading, error } = useQuery({
    queryKey: ['service', slug],
    queryFn: async () => {
      if (!slug) throw new Error('No slug provided');
      
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('slug', slug)
        .single();
      
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="flex justify-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
          </div>
        </div>
        <TrustedToolsSection />
        <Footer />
      </div>
    );
  }

  if (error || !service) {
    return <NotFound />;
  }

  const breadcrumbItems = [
    { label: "Services", href: "/services" },
    { label: service.title }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{service.title} | Drive 10x Traffic Growth | pSEO Agency</title>
        <meta name="description" content={service.description || `Boost your organic traffic with our ${service.title} service. Expert pSEO strategies that deliver measurable results and exponential growth.`} />
        <meta property="og:title" content={`${service.title} | Drive 10x Traffic Growth | pSEO Agency`} />
        <meta property="og:description" content={service.description || `Boost your organic traffic with our ${service.title} service. Expert pSEO strategies that deliver measurable results and exponential growth.`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${service.title} | Drive 10x Traffic Growth | pSEO Agency`} />
        <meta name="twitter:description" content={service.description || `Boost your organic traffic with our ${service.title} service. Expert pSEO strategies that deliver measurable results.`} />
        <link rel="canonical" href={`https://yourdomain.com/services/${service.slug}`} />
      </Helmet>
      
      <Header />
      <Breadcrumbs items={breadcrumbItems} />
      
      <main>
        <ServiceHero service={service} />
        <ServiceOverview service={service} />
        <ServiceImpact service={service} />
        <ServiceProcess service={service} />
        <ServiceSocialProof service={service} />
        <ServiceFAQ service={service} />
        <ServiceCTA service={service} />
      </main>
      
      <TrustedToolsSection />
      <Footer />
    </div>
  );
};

export default ServicePage;
