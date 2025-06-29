
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute } from "@/components/admin/ProtectedRoute";
import Index from "./pages/Index";
import { AdminLogin } from "./pages/AdminLogin";
import { AdminDashboard } from "./pages/AdminDashboard";
import { PageManager } from "./pages/admin/PageManager";
import { ServicesManager } from "./pages/admin/ServicesManager";
import { TeamManager } from "./pages/admin/TeamManager";
import { BlogManager } from "./pages/admin/BlogManager";
import { IndustriesManager } from "./pages/admin/IndustriesManager";
import { CaseStudiesManager } from "./pages/admin/CaseStudiesManager";
import { ResourcesManager } from "./pages/admin/ResourcesManager";
import { FAQsManager } from "./pages/admin/FAQsManager";
import { SiteSettingsManager } from "./pages/admin/SiteSettingsManager";
import { NotFound } from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            <Route path="/admin/pages" element={
              <ProtectedRoute>
                <PageManager />
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
            <Route path="/admin/blog" element={
              <ProtectedRoute>
                <BlogManager />
              </ProtectedRoute>
            } />
            <Route path="/admin/faqs" element={
              <ProtectedRoute>
                <FAQsManager />
              </ProtectedRoute>
            } />
            <Route path="/admin/settings" element={
              <ProtectedRoute>
                <SiteSettingsManager />
              </ProtectedRoute>
            } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
