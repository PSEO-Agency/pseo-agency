
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditModal = ({ isOpen, onClose }: AuditModalProps) => {
  // Load the external script when modal opens
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://link.wellplan.io/js/form_embed.js';
      script.type = 'text/javascript';
      document.head.appendChild(script);

      return () => {
        // Clean up script when modal closes
        const existingScript = document.querySelector('script[src="https://link.wellplan.io/js/form_embed.js"]');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] sm:w-full h-[90vh] sm:h-[85vh] p-0 flex flex-col m-4 sm:m-auto">
        <DialogHeader className="p-4 sm:p-6 pb-3 sm:pb-4 flex-shrink-0">
          <DialogTitle className="text-lg sm:text-2xl font-bold text-center">
            Schedule Your Free Strategy Call
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="flex-1 px-3 sm:px-6 pb-4 sm:pb-6">
          <div className="h-[500px] sm:h-[600px]">
            <iframe 
              src="https://link.wellplan.io/widget/booking/s1GbtEZEDEXUXu4tzp6v" 
              style={{ 
                width: '100%', 
                height: '100%',
                border: 'none',
                minHeight: '500px'
              }}
              scrolling="yes" 
              id="bKAl24PDR3noNJT090eh_1751355683694"
              title="Schedule Strategy Call"
            />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
