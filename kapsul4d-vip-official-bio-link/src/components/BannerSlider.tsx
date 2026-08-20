import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { BannerItem } from '../types';

interface BannerSliderProps {
  banners: BannerItem[];
  onUpdateBanners?: (banners: BannerItem[]) => void;
}

const defaultBanners: BannerItem[] = [
  {
    id: '1',
    title: 'PROMO MEMBER BARU BONUS 100%',
    subtitle: 'Klaim Bonus Tanpa Ribet • Layanan Prioritas 24 Jam Nonstop',
    url: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80',
    link: 'https://directlink-register.com',
    badge: 'HOT PROMO',
  },
  {
    id: '2',
    title: 'EVENT PETIR MERAH & BOM EMAS',
    subtitle: 'Sensasi Kemenangan Maksimal Setiap Putaran Hari Ini',
    url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    link: 'https://directlink-login.com',
    badge: 'POPULER',
  },
  {
    id: '3',
    title: 'DEPOSIT QRIS INSTAN & KILAT',
    subtitle: 'Proses Otomatis Hitungan Detik Tanpa Potongan 24 Jam',
    url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    link: 'https://directlink-register.com',
    badge: 'TERCEPAT',
  },
];

export const BannerSlider: React.FC<BannerSliderProps> = ({ banners: initialBanners }) => {
  const [banners] = useState<BannerItem[]>(initialBanners.length > 0 ? initialBanners : defaultBanners);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered, banners.length]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const currentBanner = banners[currentIndex] || banners[0];

  return (
    <div
      id="banner-slider"
      className="relative w-full overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-900/60 shadow-[0_0_25px_rgba(6,182,212,0.15)] group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 16:9 Aspect Ratio Container */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[300px] overflow-hidden bg-slate-950 flex items-center justify-center">
        {/* Background Image */}
        <img
          src={currentBanner.url}
          alt={currentBanner.title}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Ambient Dark Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />

        {/* Content Overlay */}
        <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between z-10 pointer-events-none">
          {/* Top Badge */}
          <div className="flex items-center justify-between">
            {currentBanner.badge && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 backdrop-blur-md shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
                {currentBanner.badge}
              </span>
            )}
          </div>

          {/* Bottom Title & Subtitle */}
          <div className="space-y-1 sm:space-y-1.5 max-w-xl">
            <h3 className="text-base sm:text-lg md:text-xl font-black text-white tracking-wide uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] line-clamp-1">
              {currentBanner.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 font-medium drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] line-clamp-1">
              {currentBanner.subtitle}
            </p>
          </div>
        </div>

        {/* Clickable full banner action */}
        {currentBanner.link && (
          <a
            href={currentBanner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-15"
            aria-label={currentBanner.title}
          />
        )}
      </div>

      {/* Navigation Arrows */}
      {banners.length > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-950/70 border border-cyan-500/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-cyan-500 hover:text-slate-950 hover:scale-110 active:scale-95 shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next Slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-slate-950/70 border border-cyan-500/30 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-cyan-500 hover:text-slate-950 hover:scale-110 active:scale-95 shadow-md"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {banners.length > 1 && (
        <div className="absolute bottom-2.5 right-4 z-20 flex items-center gap-1.5 bg-slate-950/60 backdrop-blur-sm px-2 py-1 rounded-full border border-slate-800">
          {banners.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(index);
              }}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'w-5 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]'
                  : 'w-1.5 bg-slate-600 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
