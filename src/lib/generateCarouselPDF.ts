import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

// LinkedIn carousel dimensions (4:5 aspect ratio)
const SLIDE_WIDTH = 1080;
const SLIDE_HEIGHT = 1350;

export interface CarouselSlide {
  slide_number: number;
  title: string;
  subtitle?: string;
  bullets?: string[];
  type: 'hook' | 'inputs' | 'engine' | 'results' | 'cta';
  icon?: string;
  visual_notes?: string;
}

export const generateCarouselPDF = async (
  slideElements: HTMLElement[],
  filename: string = 'linkedin-carousel.pdf'
): Promise<void> => {
  // Create PDF with custom page size (1080x1350 in mm approximation)
  // Using 72 DPI as base, convert pixels to points (1 point = 1/72 inch)
  const pxToMm = 0.264583; // 1 pixel = 0.264583 mm
  const pageWidth = SLIDE_WIDTH * pxToMm;
  const pageHeight = SLIDE_HEIGHT * pxToMm;

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: [pageWidth, pageHeight],
  });

  for (let i = 0; i < slideElements.length; i++) {
    const element = slideElements[i];
    
    // Capture the slide as canvas
    const canvas = await html2canvas(element, {
      scale: 2, // Higher quality
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      width: SLIDE_WIDTH,
      height: SLIDE_HEIGHT,
    });

    // Add new page for slides after the first
    if (i > 0) {
      pdf.addPage([pageWidth, pageHeight]);
    }

    // Convert canvas to image and add to PDF
    const imgData = canvas.toDataURL('image/png', 1.0);
    pdf.addImage(imgData, 'PNG', 0, 0, pageWidth, pageHeight);
  }

  // Download the PDF
  pdf.save(filename);
};

export const downloadSlideAsImage = async (
  element: HTMLElement,
  filename: string = 'linkedin-slide.png',
  width: number = 1200,
  height: number = 627
): Promise<void> => {
  const canvas = await html2canvas(element, {
    scale: 2,
    useCORS: true,
    allowTaint: true,
    backgroundColor: null,
    width,
    height,
  });

  // Create download link
  const link = document.createElement('a');
  link.download = filename;
  link.href = canvas.toDataURL('image/png', 1.0);
  link.click();
};
