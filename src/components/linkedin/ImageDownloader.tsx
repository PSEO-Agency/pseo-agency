import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Loader2 } from 'lucide-react';
import { CarouselSlideData } from './CarouselSlide';
import { downloadSlideAsImage } from '@/lib/generateCarouselPDF';
import seoWorkflowImage from '@/assets/images/seo-automation-workflow.jpeg';

// LinkedIn single image dimensions
const SINGLE_IMAGE_WIDTH = 1200;
const SINGLE_IMAGE_HEIGHT = 627;

// Slide type styles matching CarouselSlide.tsx
const slideTypeStyles: Record<string, { bg: string; accent: string }> = {
  hook: { bg: 'from-slate-900 via-blue-900 to-indigo-900', accent: 'text-blue-400' },
  inputs: { bg: 'from-slate-900 via-blue-900 to-blue-800', accent: 'text-sky-400' },
  engine: { bg: 'from-slate-900 via-indigo-900 to-purple-900', accent: 'text-purple-400' },
  results: { bg: 'from-slate-900 via-blue-900 to-emerald-900', accent: 'text-emerald-400' },
  cta: { bg: 'from-orange-600 via-orange-500 to-amber-500', accent: 'text-white' },
};

interface ImageDownloaderProps {
  slides: CarouselSlideData[];
  postSlug: string;
}

export const ImageDownloader: React.FC<ImageDownloaderProps> = ({ slides, postSlug }) => {
  const [downloadingIndex, setDownloadingIndex] = useState<number | null>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleDownload = async (index: number) => {
    setDownloadingIndex(index);
    try {
      const element = slideRefs.current[index];
      if (element) {
        await downloadSlideAsImage(
          element,
          `${postSlug}-image-${index + 1}.png`,
          SINGLE_IMAGE_WIDTH,
          SINGLE_IMAGE_HEIGHT
        );
      }
    } catch (error) {
      console.error('Error downloading image:', error);
    } finally {
      setDownloadingIndex(null);
    }
  };

  const getSlideStyles = (type: string) => slideTypeStyles[type] || slideTypeStyles.hook;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          LinkedIn single image format: 1200 × 627px (1.91:1 ratio)
        </p>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {slides.map((slide, index) => {
          const styles = getSlideStyles(slide.type);
          return (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-4">
                {/* Preview thumbnail */}
                <div className="relative bg-muted rounded-lg overflow-hidden mb-4">
                  <div 
                    className="transform scale-[0.25] origin-top-left"
                    style={{ 
                      width: SINGLE_IMAGE_WIDTH * 0.25, 
                      height: SINGLE_IMAGE_HEIGHT * 0.25 
                    }}
                  >
                    <div className={`w-[1200px] h-[627px] bg-gradient-to-br ${styles.bg} flex items-center justify-center p-12 relative overflow-hidden`}>
                      {/* Background image for hook slide */}
                      {slide.type === 'hook' && (
                        <>
                          <div 
                            className="absolute inset-0 bg-cover bg-center opacity-30"
                            style={{ backgroundImage: `url(${seoWorkflowImage})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-indigo-900/80" />
                        </>
                      )}
                      
                      {/* Gradient orbs */}
                      <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
                      <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
                      
                      <div className="relative z-10 text-center text-white max-w-4xl">
                        <div className="text-6xl mb-4">{slide.icon}</div>
                        <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
                        {slide.subtitle && (
                          <p className={`text-2xl ${styles.accent}`}>{slide.subtitle}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Slide {index + 1}: {slide.type}</p>
                    <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                      {slide.title}
                    </p>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDownload(index)}
                    disabled={downloadingIndex === index}
                  >
                    {downloadingIndex === index ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Download className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Hidden full-size images for download */}
      <div className="fixed left-[-9999px] top-0">
        {slides.map((slide, index) => {
          const styles = getSlideStyles(slide.type);
          return (
            <div
              key={index}
              ref={(el) => { slideRefs.current[index] = el; }}
              className={`w-[1200px] h-[627px] bg-gradient-to-br ${styles.bg} flex items-center justify-center p-12 relative overflow-hidden`}
              style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
            >
              {/* Background image for hook slide */}
              {slide.type === 'hook' && (
                <>
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30"
                    style={{ backgroundImage: `url(${seoWorkflowImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-indigo-900/80" />
                </>
              )}
              
              {/* Gradient orbs */}
              <div className="absolute -top-16 -right-16 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 text-center text-white max-w-4xl">
                <div className="text-8xl mb-6">{slide.icon}</div>
                <h3 className="text-5xl font-bold mb-4">{slide.title}</h3>
                {slide.subtitle && (
                  <p className={`text-3xl font-medium ${styles.accent}`}>{slide.subtitle}</p>
                )}
                {slide.bullets && (
                  <ul className="text-left mt-8 space-y-3 text-xl">
                    {slide.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-4">
                        <span className={`w-3 h-3 rounded-full ${slide.type === 'cta' ? 'bg-white' : 'bg-blue-400'}`} />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="absolute bottom-6 left-0 right-0 text-white/40 text-lg">
                  pSEO Agency • programmaticseo.agency
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageDownloader;
