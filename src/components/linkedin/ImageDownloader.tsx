import React, { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, Loader2 } from 'lucide-react';
import { CarouselSlide, CarouselSlideData } from './CarouselSlide';
import { downloadSlideAsImage } from '@/lib/generateCarouselPDF';

// LinkedIn single image dimensions
const SINGLE_IMAGE_WIDTH = 1200;
const SINGLE_IMAGE_HEIGHT = 627;

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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">
          LinkedIn single image format: 1200 × 627px (1.91:1 ratio)
        </p>
      </div>

      {/* Image grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {slides.map((slide, index) => (
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
                  <div className="w-[1200px] h-[627px] bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-8">
                    <div className="text-center text-white">
                      <div className="text-4xl mb-2">{slide.icon}</div>
                      <h3 className="text-2xl font-bold">{slide.title}</h3>
                      {slide.subtitle && (
                        <p className="text-lg text-emerald-400 mt-2">{slide.subtitle}</p>
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
        ))}
      </div>

      {/* Hidden full-size images for download */}
      <div className="fixed left-[-9999px] top-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            ref={(el) => { slideRefs.current[index] = el; }}
            className="w-[1200px] h-[627px] bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-12"
            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
          >
            <div className="text-center text-white max-w-4xl">
              <div className="text-6xl mb-4">{slide.icon}</div>
              <h3 className="text-4xl font-bold mb-4">{slide.title}</h3>
              {slide.subtitle && (
                <p className="text-2xl text-emerald-400">{slide.subtitle}</p>
              )}
              {slide.bullets && (
                <ul className="text-left mt-6 space-y-2 text-xl">
                  {slide.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-8 text-white/40 text-lg">
                pSEO Agency • programmaticseo.agency
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDownloader;
