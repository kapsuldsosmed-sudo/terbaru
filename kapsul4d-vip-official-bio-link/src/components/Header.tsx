import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, Share2, Copy, Check, Sparkles, Wifi } from 'lucide-react';

interface HeaderProps {
  onShare?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onShare }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full text-center flex flex-col items-center pt-2 pb-2">
      {/* Top Action Bar (Share & Live Status) */}
      <div className="w-full flex items-center justify-between px-1 mb-3">
        {/* Status Pill */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-[11px] font-semibold backdrop-blur-md shadow-[0_0_12px_rgba(6,182,212,0.2)]">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="w-2 h-2 rounded-full bg-emerald-400 -ml-3" />
          <span className="tracking-wide">SERVER VIP AKTIF</span>
          <span className="text-slate-500">•</span>
          <span className="text-emerald-400 font-mono text-[10px]">12ms</span>
        </div>

        {/* Share Button */}
        <button
          onClick={handleCopyLink}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 text-[11px] font-medium transition-all duration-200 active:scale-95 shadow-sm"
          title="Salin Link Bio Resmi"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-emerald-400 font-bold">Tersalin!</span>
            </>
          ) : (
            <>
              <Share2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Bagikan</span>
            </>
          )}
        </button>
      </div>

      {/* Logo without circular frame/table */}
      <div className="relative mb-3 flex flex-col items-center justify-center">
        <div className="relative max-w-[220px] sm:max-w-[260px] flex items-center justify-center group">
          {/* Subtle Ambient Glow behind logo */}
          <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
          
          <img
            src="https://ik.imagekit.io/8btthcfrf/Uploud/KAPSUL4D_shine_bubbles.gif?updatedAt=1786252273564"
            alt="KAPSUL4D VIP Official Logo"
            className="relative z-10 w-auto max-h-24 sm:max-h-28 object-contain drop-shadow-[0_0_20px_rgba(6,182,212,0.6)] transform transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback text if image cannot be loaded
              const target = e.currentTarget;
              target.style.display = 'none';
              const fallback = document.getElementById('logo-fallback-text');
              if (fallback) fallback.style.display = 'flex';
            }}
            referrerPolicy="no-referrer"
          />

          {/* Fallback Graphic if needed */}
          <div
            id="logo-fallback-text"
            style={{ display: 'none' }}
            className="flex items-center justify-center py-3 px-6"
          >
            <span className="text-2xl font-black text-cyan-300 tracking-wider">KAPSUL4D</span>
          </div>
        </div>
      </div>

      {/* Title & Verified Info */}
      <div className="flex items-center justify-center gap-1.5">
        <h1 className="text-xl sm:text-2xl font-black tracking-wider text-white drop-shadow-[0_0_15px_rgba(6,182,212,0.4)]">
          KAPSUL4D VIP OFFICIAL
        </h1>
        <ShieldCheck className="w-5 h-5 text-cyan-400" />
      </div>

      <p className="text-xs sm:text-sm text-cyan-200/90 font-medium max-w-sm mt-1 mb-2 px-4 leading-relaxed">
        Portal Resmi Akses Cepat • Layanan Prioritas 24 Jam Nonstop • Bebas Blokir & Terpercaya
      </p>
    </div>
  );
};
