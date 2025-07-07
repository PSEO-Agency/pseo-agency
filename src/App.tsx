
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Results from "./pages/Results";
import FreeStrategy from "./pages/FreeStrategy";
import Jobs from "./pages/Jobs";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import ServicesCollection from "./pages/ServicesCollection";
import ServicePage from "./pages/ServicePage";
import IndustriesCollection from "./pages/IndustriesCollection";
import IndustryPage from "./pages/IndustryPage";
import ResourcesCollection from "./pages/ResourcesCollection";
import Resource from "./pages/Resource";
import SoftwareCollection from "./pages/SoftwareCollection";
import SoftwarePage from "./pages/SoftwarePage";
import ToolsCollection from "./pages/ToolsCollection";
import ToolPage from "./pages/ToolPage";
import CaseStudy from "./pages/CaseStudy";
import DynamicPage from "./pages/DynamicPage";
import ProgrammaticSEOGuide from "./pages/ProgrammaticSEOGuide";
import NotFound from "./pages/NotFound";
import { AdminLogin } from "./pages/AdminLogin";
import { AdminDashboard } from "./pages/AdminDashboard";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import { BlogManager } from "./pages/admin/BlogManager";
import { ServicesManager } from "./pages/admin/ServicesManager";
import { IndustriesManager } from "./pages/admin/IndustriesManager";
import { CaseStudiesManager } from "./pages/admin/CaseStudiesManager";
import { ResourcesManager } from "./pages/admin/ResourcesManager";
import { TeamManager } from "./pages/admin/TeamManager";
import JobsManager from "./pages/admin/JobsManager";
import { FAQsManager } from "./pages/admin/FAQsManager";
import { PageManager } from "./pages/admin/PageManager";
import { SiteSettingsManager } from "./pages/admin/SiteSettingsManager";
import SocialMediaVisualsManager from "./pages/admin/SocialMediaVisualsManager";
import { ScrollToTop } from "@/components/ScrollToTop";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/results" element={<Results />} />
              <Route path="/free-strategy" element={<FreeStrategy />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/services" element={<ServicesCollection />} />
              <Route path="/services/:slug" element={<ServicePage />} />
              <Route path="/industries" element={<IndustriesCollection />} />
              <Route path="/industries/:slug" element={<IndustryPage />} />
              <Route path="/resources" element={<ResourcesCollection />} />
              <Route path="/resources/:slug" element={<Resource />} />
              <Route path="/software" element={<SoftwareCollection />} />
              <Route path="/software/:slug" element={<SoftwarePage />} />
              <Route path="/tools" element={<ToolsCollection />} />
              <Route path="/tools/:slug" element={<ToolPage />} />
              <Route path="/case-studies/:slug" element={<CaseStudy />} />
              <Route path="/programmatic-seo-guide" element={<ProgrammaticSEOGuide />} />
              
              {/* Admin Routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin" element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              <Route path="/admin/blog" element={
                <ProtectedRoute>
                  <BlogManager />
                </ProtectedRoute>
              } />
              <Route path="/admin/services" element={
                <ProtectedRoute>
                  <ServicesManager />
                </ProtectedRoute>
              } />
              <Route path="/admin/industries" element={
                <ProtectedRoute>
                  <IndustriesManager />
                </ProtectedRoute>
              } />
              <Route path="/admin/case-studies" element={
                <ProtectedRoute>
                  <CaseStudiesManager />
                </ProtectedRoute>
              } />
              <Route path="/admin/resources" element={
                <ProtectedRoute>
                  <ResourcesManager />
                </ProtectedRoute>
              } />
              <Route path="/admin/team" element={
                <ProtectedRoute>
                  <TeamManager />
                </ProtectedRoute>
              } />
              <Route path="/admin/jobs" element={
                <ProtectedRoute>
                  <JobsManager />
                </ProtectedRoute>
              } />
              <Route path="/admin/faqs" element={
                <ProtectedRoute>
                  <FAQsManager />
                </ProtectedRoute>
              } />
              <Route path="/admin/pages" element={
                <ProtectedRoute>
                  <PageManager />
                </ProtectedRoute>
              } />
              <Route path="/admin/settings" element={
                <ProtectedRoute>
                  <SiteSettingsManager />
                </ProtectedRoute>
              } />
              <Route path="/admin/social-visuals" element={
                <ProtectedRoute>
                  <SocialMediaVisualsManager />
                </ProtectedRoute>
              } />
              
              {/* Dynamic pages from CMS */}
              <Route path="/:slug" element={<DynamicPage />} />
              
              {/* 404 page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
