
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal = ({ isOpen, onClose }: AuditModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    industry: "",
    monthlyTraffic: "",
    currentChallenges: "",
    goals: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.website) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would submit to your backend
    console.log("Audit request submitted:", formData);
    
    toast({
      title: "Audit Request Submitted!",
      description: "We'll analyze your website and send you a comprehensive SEO audit within 24 hours.",
    });

    // Reset form and close modal
    setFormData({
      name: "",
      email: "",
      company: "",
      website: "",
      industry: "",
      monthlyTraffic: "",
      currentChallenges: "",
      goals: ""
    });
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-blue-900">
            Get Your Free SEO Audit
          </DialogTitle>
          <p className="text-center text-gray-600 mt-2">
            Discover how programmatic SEO can transform your business. Get a comprehensive analysis of your website's SEO potential.
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="john@company.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                placeholder="Your Company"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="website">Website URL *</Label>
              <Input
                id="website"
                type="url"
                value={formData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
                placeholder="https://yourwebsite.com"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="industry">Industry</Label>
              <Select onValueChange={(value) => handleInputChange("industry", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your industry" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="saas">SaaS</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="realestate">Real Estate</SelectItem>
                  <SelectItem value="travel">Travel & Tourism</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="legal">Legal</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="traffic">Monthly Website Traffic</Label>
              <Select onValueChange={(value) => handleInputChange("monthlyTraffic", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select traffic range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under1k">Under 1,000</SelectItem>
                  <SelectItem value="1k-10k">1,000 - 10,000</SelectItem>
                  <SelectItem value="10k-50k">10,000 - 50,000</SelectItem>
                  <SelectItem value="50k-100k">50,000 - 100,000</SelectItem>
                  <SelectItem value="100k-500k">100,000 - 500,000</SelectItem>
                  <SelectItem value="500k-1m">500,000 - 1M</SelectItem>
                  <SelectItem value="over1m">Over 1M</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="challenges">Current SEO Challenges</Label>
            <Textarea
              id="challenges"
              value={formData.currentChallenges}
              onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
              placeholder="Tell us about your current SEO challenges and pain points..."
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="goals">Business Goals</Label>
            <Textarea
              id="goals"
              value={formData.goals}
              onChange={(e) => handleInputChange("goals", e.target.value)}
              placeholder="What are your main business goals? (e.g., increase leads, improve rankings, scale content)"
              rows={3}
            />
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">What You'll Get:</h4>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>✓ Complete technical SEO analysis</li>
              <li>✓ Programmatic SEO opportunity assessment</li>
              <li>✓ Competitor analysis and gaps identification</li>
              <li>✓ Custom strategy roadmap</li>
              <li>✓ Revenue growth projections</li>
            </ul>
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
            Get My Free SEO Audit
          </Button>

          <p className="text-xs text-gray-500 text-center">
            By submitting this form, you agree to receive marketing communications from us. 
            We respect your privacy and will never share your information.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
