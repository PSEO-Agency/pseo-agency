
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { TrustedToolsSection } from "@/components/TrustedToolsSection";
import { 
  FileText, 
  Users, 
  MessageSquare, 
  Settings, 
  Wrench,
  Building,
  BookOpen,
  HelpCircle,
  Briefcase,
  Share2
} from "lucide-react";

export const AdminDashboard = () => {
  const navigate = useNavigate();

  const adminSections = [
    {
      title: "Pages",
      description: "Manage website pages and content",
      icon: FileText,
      path: "/admin/pages",
      color: "bg-blue-500"
    },
    {
      title: "Services", 
      description: "Manage service offerings and features",
      icon: Wrench,
      path: "/admin/services",
      color: "bg-green-500"
    },
    {
      title: "Industries",
      description: "Manage industry-specific content",
      icon: Building,
      path: "/admin/industries", 
      color: "bg-purple-500"
    },
    {
      title: "Case Studies",
      description: "Manage client success stories",
      icon: BookOpen,
      path: "/admin/case-studies",
      color: "bg-orange-500"
    },
    {
      title: "Resources",
      description: "Manage downloadable resources and guides",
      icon: FileText,
      path: "/admin/resources",
      color: "bg-cyan-500"
    },
    {
      title: "Team",
      description: "Manage team members and profiles", 
      icon: Users,
      path: "/admin/team",
      color: "bg-indigo-500"
    },
    {
      title: "Blog",
      description: "Manage blog posts and articles",
      icon: MessageSquare,
      path: "/admin/blog",
      color: "bg-pink-500"
    },
    {
      title: "Jobs",
      description: "Manage job postings and career opportunities",
      icon: Briefcase,
      path: "/admin/jobs",
      color: "bg-emerald-500"
    },
    {
      title: "Social Visuals",
      description: "Create and manage social media visual templates",
      icon: Share2,
      path: "/admin/social-visuals",
      color: "bg-rose-500"
    },
    {
      title: "FAQs",
      description: "Manage frequently asked questions",
      icon: HelpCircle,
      path: "/admin/faqs",
      color: "bg-yellow-500"
    },
    {
      title: "Site Settings",
      description: "Configure global site settings",
      icon: Settings,
      path: "/admin/settings",
      color: "bg-gray-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Admin Dashboard</h1>
          <p className="text-gray-600">Manage your website content and settings</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {adminSections.map((section) => {
            const IconComponent = section.icon;
            return (
              <Card key={section.path} className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <CardHeader className="pb-3">
                  <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{section.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    {section.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button 
                    onClick={() => navigate(section.path)}
                    className="w-full"
                    variant="outline"
                  >
                    Manage {section.title}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      <TrustedToolsSection />
    </div>
  );
};
