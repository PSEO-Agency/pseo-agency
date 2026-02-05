import React from 'react';
import { cn } from '@/lib/utils';

export interface CarouselSlideData {
  slide_number: number;
  title: string;
  subtitle?: string;
  bullets?: string[];
  type: 'hook' | 'inputs' | 'engine' | 'results' | 'cta';
  icon?: string;
  visual_notes?: string;
}

interface CarouselSlideProps {
  slide: CarouselSlideData;
  className?: string;
}

const slideTypeStyles: Record<string, { bg: string; accent: string }> = {
  hook: { bg: 'from-slate-900 to-slate-800', accent: 'text-emerald-400' },
  inputs: { bg: 'from-slate-900 to-blue-900', accent: 'text-blue-400' },
  engine: { bg: 'from-slate-900 to-purple-900', accent: 'text-purple-400' },
  results: { bg: 'from-slate-900 to-emerald-900', accent: 'text-emerald-400' },
  cta: { bg: 'from-orange-600 to-orange-500', accent: 'text-white' },
};

export const CarouselSlide: React.FC<CarouselSlideProps> = ({ slide, className }) => {
  const styles = slideTypeStyles[slide.type] || slideTypeStyles.hook;

  return (
    <div
      className={cn(
        'w-[1080px] h-[1350px] bg-gradient-to-br flex flex-col items-center justify-center p-16 relative overflow-hidden',
        styles.bg,
        className
      )}
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-2xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        {/* Icon */}
        {slide.icon && (
          <div className="text-8xl mb-8">{slide.icon}</div>
        )}

        {/* Slide number indicator */}
        <div className={cn('text-sm font-medium mb-6 opacity-60', styles.accent)}>
          {slide.slide_number} / 5
        </div>

        {/* Title */}
        <h2 className="text-6xl font-bold text-white mb-8 leading-tight">
          {slide.title}
        </h2>

        {/* Subtitle */}
        {slide.subtitle && (
          <p className={cn('text-3xl font-medium mb-10', styles.accent)}>
            {slide.subtitle}
          </p>
        )}

        {/* Bullets */}
        {slide.bullets && slide.bullets.length > 0 && (
          <ul className="space-y-6 text-left w-full max-w-2xl">
            {slide.bullets.map((bullet, index) => (
              <li
                key={index}
                className="flex items-start gap-4 text-2xl text-white/90"
              >
                <span className={cn('flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold', styles.accent)}>
                  {index + 1}
                </span>
                <span className="pt-0.5">{bullet}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer branding */}
      <div className="absolute bottom-12 left-0 right-0 flex justify-center">
        <div className="flex items-center gap-3 text-white/40 text-xl">
          <span className="font-semibold">pSEO Agency</span>
          <span>•</span>
          <span>programmaticseo.agency</span>
        </div>
      </div>
    </div>
  );
};

export default CarouselSlide;
