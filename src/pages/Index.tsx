
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { AutomationSection } from "@/components/AutomationSection";
import { ServicesOverview } from "@/components/ServicesOverview";
import { ImpactSection } from "@/components/ImpactSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { RevenueProof } from "@/components/RevenueProof";
import { IndustriesSection } from "@/components/IndustriesSection";
import { KPISection } from "@/components/KPISection";
import { TeamSection } from "@/components/TeamSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white m-0 p-0">
      <Header />
      <Hero />
      <AutomationSection />
      <ServicesOverview />
      <ImpactSection />
      <ExpertiseSection />
      <RevenueProof />
      <IndustriesSection />
      <KPISection />
      <TeamSection />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default Index;
