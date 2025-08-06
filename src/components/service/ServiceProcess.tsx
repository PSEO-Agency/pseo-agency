
import { 
  Search, Palette, Database, Target, Zap, Users, BarChart3, Globe,
  Brain, Bot, Rocket, Mic, PhoneCall, MessageCircle, CheckCircle, Activity
} from "lucide-react";
import { Json } from "@/integrations/supabase/types";

interface ServiceProcessProps {
  service: {
    title: string;
    process_steps?: Json;
    [key: string]: any;
  };
}

export const ServiceProcess = ({ service }: ServiceProcessProps) => {
  const defaultSteps = [
    { 
      title: "Discovery & Analysis", 
      description: "We analyze your current situation and identify opportunities for improvement.",
      icon: Search 
    },
    { 
      title: "Strategy Development", 
      description: "We create a customized strategy tailored to your specific needs and goals.",
      icon: Palette 
    },
    { 
      title: "Implementation", 
      description: "We execute the strategy with precision and attention to detail.",
      icon: Database 
    },
    { 
      title: "Optimization & Results", 
      description: "We continuously optimize and track results to maximize your ROI.",
      icon: Target 
    }
  ];

  // Parse process steps from database
  let processSteps;
  if (Array.isArray(service.process_steps) && service.process_steps.length > 0) {
    processSteps = service.process_steps.map((step: any, index: number) => {
      // Check if step is already an object with title, description, icon
      if (typeof step === 'object' && step.title && step.description) {
        // Get the icon component based on the icon name
        const iconName = step.icon;
        let IconComponent;
        
        // Map icon names to components
        const iconMap: { [key: string]: any } = {
          Brain: Brain,
          Bot: Bot,
          Zap: Zap,
          Target: Target,
          Rocket: Rocket,
          Mic: Mic,
          PhoneCall: PhoneCall,
          MessageCircle: MessageCircle,
          CheckCircle: CheckCircle,
          Activity: Activity,
          Search: Search,
          Database: Database,
          Users: Users,
          BarChart3: BarChart3,
          Globe: Globe,
          Palette: Palette
        };
        
        IconComponent = iconMap[iconName] || getIconForIndex(index);
        
        return {
          title: step.title,
          description: step.description,
          icon: IconComponent
        };
      }
      
      // Legacy format: step is a string
      if (typeof step === 'string') {
        const colonIndex = step.indexOf(':');
        if (colonIndex > 0) {
          const title = step.substring(0, colonIndex).trim();
          const description = step.substring(colonIndex + 1).trim();
          return { title, description, icon: getIconForIndex(index) };
        }
        return { 
          title: step, 
          description: "Professional implementation of this step with attention to detail and best practices.",
          icon: getIconForIndex(index)
        };
      }
      
      // Fallback
      return {
        title: "Step " + (index + 1),
        description: "Professional implementation with attention to detail and best practices.",
        icon: getIconForIndex(index)
      };
    });
  } else {
    processSteps = defaultSteps;
  }

  function getIconForIndex(index: number) {
    const icons = [Search, Zap, Users, Target, BarChart3, Database, Globe, Palette];
    return icons[index % icons.length];
  }

  const stepColors = [
    "from-blue-500 to-blue-600",
    "from-purple-500 to-purple-600",
    "from-green-500 to-green-600",
    "from-orange-500 to-red-500",
    "from-indigo-500 to-indigo-600",
    "from-pink-500 to-pink-600",
    "from-teal-500 to-teal-600",
    "from-yellow-500 to-orange-500"
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
          <div className="inline-flex items-center bg-purple-50 rounded-full px-6 py-3 mb-8 border border-purple-100">
            <Target className="h-5 w-5 text-purple-600 mr-2" />
            <span className="text-purple-700 text-sm font-bold">OUR PROCESS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-8 leading-tight text-balance">
            How We Deliver
            <span className="webfx-text-gradient block mt-2">{service.title} Results</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our proven methodology ensures consistent, measurable results for every client.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              const colorClass = stepColors[index % stepColors.length];
              
              return (
                <div key={index} className="flex items-start space-x-6 group">
                  <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${colorClass} rounded-2xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 relative`}>
                    <IconComponent className="h-8 w-8 text-white" />
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center text-xs font-bold text-green-900">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="webfx-card p-6">
                      <h4 className="font-bold text-gray-900 mb-3 text-xl">{step.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Process Highlights</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Timeline:</span>
                  <span className="font-bold text-gray-900">30-90 days</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Dedicated Support:</span>
                  <span className="font-bold text-blue-600">24/7 Available</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Progress Updates:</span>
                  <span className="font-bold text-green-600">Weekly Reports</span>
                </div>
                <div className="flex items-center justify-between py-3">
                  <span className="text-gray-600">Success Rate:</span>
                  <span className="font-bold text-green-600 text-xl">95%+</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100">
                <h4 className="font-bold text-gray-900 mb-2">What's Included:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Dedicated project manager
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Regular progress meetings
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Detailed documentation
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Post-launch support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
