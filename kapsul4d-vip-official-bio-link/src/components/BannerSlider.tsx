import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { BannerItem } from '../types';

interface BannerSliderProps {
  banners: BannerItem[];
  onUpdateBanners?: (banners: BannerItem[]) => void;
}

export const defaultBanners: BannerItem[] = [
  {
    id: '1',
    title: 'KAPSUL4D VIP OFFICIAL',
    subtitle: 'Akses Prioritas 24 Jam Nonstop & Garansi Kecepatan Tinggi',
    badge: 'RESMI & TERPERCAYA',
    url: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80',
    linkUrl: '#daftar',
  },
  {
    id: '2',
    title: 'PROMO BONUS HARIAN VIP',
    subtitle: 'Nikmati Layanan Eksklusif dengan Rasio Kemenangan Terbaik',
    badge: 'EVENT SPESIAL',
    url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=80',
    linkUrl: '#login',
  },
  {
    id: '3',
    title: 'SERVER ULTRA SPEED 2026',
    subtitle: 'Enkripsi SSL 256-Bit & Jalur Akses Bebas Blokir',
    badge: 'FAST RESPONSE',
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    linkUrl: '#livechat',
  },
];

export const BannerSlider: React.FC<BannerSliderProps> = ({ banners: initialBanners }) => {
  const [banners] = useState<BannerItem[]>(initialBanners.length > 0 ? initialBanners : defaultBanners);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-slide effect (lightweight timer)
  useEffect(() => {
    if (isHovered || banners.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [banners.length, isHovered]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  const currentBanner = banners[currentIndex] || banners[0];

  return (
    <div className="w-full relative my-3">
      {/* Banner Container with Seamless Adaptive Framing */}
      <div
        className="group relative w-full aspect-[16/8] sm:aspect-[16/7] rounded-2xl overflow-hidden border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.25)] bg-slate-950 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          key={currentBanner.id + '-' + currentIndex}
          src={currentBanner.url}
          alt={currentBanner.title}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="eager"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/40 pointer-events-none" />
        <div className="absolute inset-0 border border-cyan-400/20 rounded-2xl pointer-events-none" />

        {/* Banner Content Overlay */}
        <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between pointer-events-none">
          <div className="flex items-center justify-between w-full">
            {currentBanner.badge && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-cyan-950/80 text-cyan-300 border border-cyan-500/50 backdrop-blur-md shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
                {currentBanner.badge}
              </span>
            )}
          </div>

          <div className="space-y-0.5 sm:space-y-1">
            <h3 className="text-sm sm:text-lg font-black text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] leading-tight">
              {currentBanner.title}
            </h3>
            {currentBanner.subtitle && (
              <p className="text-[11px] sm:text-xs text-cyan-100/90 font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] line-clamp-1">
                {currentBanner.subtitle}
              </p>
            )}
          </div>
        </div>

        {banners.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/70 text-cyan-300 border border-cyan-500/40 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 active:scale-95 shadow-lg"
              aria-label="Previous Banner"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900/70 text-cyan-300 border border-cyan-500/40 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-cyan-500 hover:text-slate-950 active:scale-95 shadow-lg"
              aria-label="Next Banner"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {banners.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 mt-2">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? 'w-6 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.8)]'
                  : 'w-1.5 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
