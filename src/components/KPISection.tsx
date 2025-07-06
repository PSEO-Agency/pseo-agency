
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Award, Target } from "lucide-react";

export const KPISection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    domain: ""
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to free strategy page with pre-filled data
    const params = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      domain: formData.domain
    });
    navigate(`/free-strategy?${params.toString()}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: KPI Stats */}
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-8">
              Boost your website traffic and <span className="webfx-text-gradient">visibility</span>
            </h2>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <div className="text-3xl font-black text-white mb-2">800%</div>
                <div className="text-blue-200 font-medium">Traffic Growth</div>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <Target className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <div className="text-3xl font-black text-white mb-2">45K+</div>
                <div className="text-blue-200 font-medium">Keywords</div>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <Award className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
                <div className="text-3xl font-black text-white mb-2">Top 3</div>
                <div className="text-blue-200 font-medium">Rankings</div>
              </div>
              
              <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-black text-white mb-2">$2.4B+</div>
                <div className="text-blue-200 font-medium">Revenue</div>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Get Your Free SEO Audit</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 h-12"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 h-12"
                  required
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="domain"
                  placeholder="Domain (e.g., example.com)"
                  value={formData.domain}
                  onChange={handleInputChange}
                  className="bg-white/20 border-white/30 text-white placeholder:text-blue-200 h-12"
                  required
                />
              </div>
              <Button 
                type="submit"
                className="w-full webfx-button-primary h-12 text-lg font-bold"
              >
                Get My Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
            <p className="text-blue-200 text-sm mt-4 text-center">
              Free audit • No commitment • Report in 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
