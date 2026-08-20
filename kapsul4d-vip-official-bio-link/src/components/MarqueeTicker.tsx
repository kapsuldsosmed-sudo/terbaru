import React from 'react';
import { Zap, ShieldCheck, Flame, Radio } from 'lucide-react';

interface MarqueeTickerProps {
  text?: string;
}

export const MarqueeTicker: React.FC<MarqueeTickerProps> = ({
  text = '⚡ INFO RESMI: KAPSUL4D VIP MENYEDIAKAN AKSES CEPAT 24 JAM NONSTOP • PROSES DEPOSIT & WITHDRAW KILAT • LINK BEBAS BLOKIR TERVERIFIKASI • SERVER ULTRA SPEED SECURE SSL 256-BIT • HUBUNGI CS RESMI BILA MEMBUTUHKAN BANTUAN ⚡',
}) => {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-slate-950/80 border border-cyan-500/30 backdrop-blur-md py-2 px-3 shadow-[0_0_15px_rgba(6,182,212,0.15)] flex items-center gap-2 relative">
      {/* Left Badge */}
      <div className="flex-shrink-0 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600 text-slate-950 font-black text-[10px] sm:text-xs uppercase tracking-wider shadow-[0_0_10px_rgba(6,182,212,0.5)] z-10">
        <Radio className="w-3 h-3 animate-pulse text-white" />
        <span className="text-white">LIVE</span>
      </div>

      {/* Marquee Content */}
      <div className="overflow-hidden whitespace-nowrap flex-1 mask-radial">
        <div className="animate-marquee inline-block font-semibold text-[11px] sm:text-xs text-cyan-200 tracking-wide">
          <span className="mx-4">{text}</span>
          <span className="mx-4">{text}</span>
        </div>
      </div>

      {/* Right Icon */}
      <div className="flex-shrink-0 z-10">
        <Zap className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
      </div>
    </div>
  );
};
