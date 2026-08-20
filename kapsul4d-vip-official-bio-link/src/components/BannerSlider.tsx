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
    url: 'https://ik.imagekit.io/8btthcfrf/Uploud/e6a972c6-4920-468c-80d6-aefa22558ede_11zon.png?updatedAt=1786668230036',
    linkUrl: 'https://cepatakses.info/login-kapsul4d',
  },
  {
    id: '2',
    title: 'PROMO BONUS HARIAN VIP',
    subtitle: 'Nikmati Layanan Eksklusif dengan Rasio Kemenangan Terbaik',
    badge: 'EVENT SPESIAL',
    url: 'https://ik.imagekit.io/8btthcfrf/Uploud/4_11zon.png?updatedAt=1786431905606',
    linkUrl: 'https://cepatakses.info/login-kapsul4d',
  },
  {
    id: '3',
    title: 'SERVER ULTRA SPEED 2026',
    subtitle: 'Enkripsi SSL 256-Bit & Jalur Akses Bebas Blokir',
    badge: 'FAST RESPONSE',
    url: 'https://ik.imagekit.io/8btthcfrf/Uploud/image%20(10).png?updatedAt=1787119174898',
    linkUrl: 'https://cepatakses.info/login-kapsul4d',
  },
];

  return (
    <div className="w-full relative my-3">
      {/* Banner Container with Seamless Adaptive Framing */}
      <div
        className="group relative w-full aspect-[16/8] sm:aspect-[16/7] rounded-2xl overflow-hidden border border-cyan-500/40 shadow-[0_0_20px_rgba(6,182,212,0.25)] bg-slate-950 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* The Image itself with full responsive auto-fit & seamless edge blending */}
        <img
          key={currentBanner.id + '-' + currentIndex}
          src={currentBanner.url}
          alt={currentBanner.title}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="eager"
        />

        {/* Gradient Overlay to seamlessly blend any photo into the dark neon theme */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/40 pointer-events-none" />

        {/* Subtle Cyber Grid & Neon Edge Highlights */}
        <div className="absolute inset-0 border border-cyan-400/20 rounded-2xl pointer-events-none" />

        {/* Banner Content Overlay */}
        <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between pointer-events-none">
          {/* Top Badge */}
          <div className="flex items-center justify-between w-full">
            {currentBanner.badge && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider uppercase bg-cyan-950/80 text-cyan-300 border border-cyan-500/50 backdrop-blur-md shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse" />
                {currentBanner.badge}
              </span>
            )}
            
            {/* Quick Photo Switcher Trigger (Compact & Lightweight) */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowPhotoModal(true);
              }}
              className="pointer-events-auto opacity-80 hover:opacity-100 transition-opacity flex items-center gap-1 px-2 py-1 rounded-lg text-[11px] font-medium bg-slate-900/80 text-slate-200 border border-cyan-500/30 hover:border-cyan-400 hover:text-cyan-300 backdrop-blur-md shadow-sm active:scale-95"
              title="Ganti Foto Banner / Masukkan Foto Anda"
            >
              <ImageIcon className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden xs:inline">Ganti Foto</span>
            </button>
          </div>

          {/* Bottom Title & Subtitle */}
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

        {/* Navigation Arrows (Visible on hover or touch) */}
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

      {/* Bullet Indicators (Compact & Sleek) */}
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
             {/* Lightweight Modal to insert custom photo & verify responsive auto-fit */}
      {showPhotoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="w-full max-w-md bg-slate-900 border border-cyan-500/50 rounded-2xl p-5 shadow-[0_0_35px_rgba(6,182,212,0.3)] space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-cyan-400" />
                <h4 className="text-base font-bold text-white">Masukkan Foto Banner</h4>
              </div>
              <button
                onClick={() => setShowPhotoModal(false)}
                className="text-slate-400 hover:text-white text-sm font-semibold p-1"
              >
                ✕
              </button>
            </div>
 
      <p className="text-xs text-slate-300">
              Foto dalam ukuran apapun (portrait, square, atau landscape) akan{' '}
              <span className="text-cyan-400 font-semibold">langsung menyatu otomatis</span> dan responsif menyesuaikan frame tanpa distorsi.
            </p>

            {uploadFeedback && (
              <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-400/50 text-cyan-300 text-xs font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span>{uploadFeedback}</span>
              </div>
            )}

            {/* Option 1: File Upload */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                1. Upload Foto dari Galeri / Komputer
              </label>
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-2.5 px-4 rounded-xl border border-dashed border-cyan-500/50 hover:border-cyan-400 bg-cyan-950/30 hover:bg-cyan-950/50 text-cyan-300 text-xs font-medium flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <Upload className="w-4 h-4" />
                Pilih File Foto (JPG / PNG / WebP / GIF)
              </button>
            </div>

            {/* Option 2: Image URL */}
            <form onSubmit={handleUrlSubmit} className="space-y-2">
              <label className="block text-xs font-semibold text-slate-300">
                2. Atau Tempelkan Link / URL Foto
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://contoh.com/foto-banner.jpg"
                  value={inputUrl}
                  onChange={(e) => setInputUrl(e.target.value)}
                  className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs rounded-xl transition-all shadow-[0_0_12px_rgba(6,182,212,0.4)] active:scale-95"
                >
                  Terapkan
                </button>
              </div>
            </form>

            {/* Reset Button */}
            <div className="flex justify-between items-center pt-2 border-t border-slate-800">
              <button
                type="button"
                onClick={handleResetBanners}
                className="text-xs text-slate-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Kembalikan Banner Default
              </button>
              <button
                type="button"
                onClick={() => setShowPhotoModal(false)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white text-xs"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
