
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
      <DialogContent className="max-w-4xl w-full h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-center">
            Schedule Your Free Strategy Call
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex-1 p-6 pt-4">
          <iframe 
            src="https://link.wellplan.io/widget/booking/s1GbtEZEDEXUXu4tzp6v" 
            style={{ 
              width: '100%', 
              height: '100%',
              border: 'none',
              overflow: 'hidden'
            }}
            scrolling="no" 
            id="bKAl24PDR3noNJT090eh_1751355683694"
            title="Schedule Strategy Call"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
