

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AutomationSection } from "@/components/AutomationSection";
import { ServicesOverview } from "@/components/ServicesOverview";
// import { ImpactSection } from "@/components/ImpactSection"; // Hidden for now
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { RevenueProof } from "@/components/RevenueProof";
import { IndustriesSection } from "@/components/IndustriesSection";
import { KPISection } from "@/components/KPISection";
import { TeamSection } from "@/components/TeamSection";
import { BlogSection } from "@/components/BlogSection";
import { SEOCastSection } from "@/components/SEOCastSection";
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import { ServiceSocialProof } from "@/components/service/ServiceSocialProof";
import { Footer } from "@/components/Footer";

const Index = () => {
  // Create a service object for the social proof section
  const programmticSeoService = {
    title: "Programmatic SEO",
    case_study_ids: null
  };

  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <AutomationSection />
      <ServicesOverview />
      {/* <ImpactSection /> Hidden as requested - "Inside pSEO" section */}
      <ExpertiseSection />
      <RevenueProof />
      <ServiceSocialProof service={programmticSeoService} />
      <IndustriesSection />
      <KPISection />
      <TeamSection />
      <BlogSection />
      <SEOCastSection />
      <TrustedToolsSection />
      <Footer />
    </div>
  );
};

export default Index;

