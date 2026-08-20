import React, { useState } from 'react';
import { fireLightweightConfetti } from './utils/confetti';
import { Header } from './components/Header';
import { BannerSlider, defaultBanners } from './components/BannerSlider';
import { MarqueeTicker } from './components/MarqueeTicker';
import { ActionButtons } from './components/ActionButtons';
import { SocialLinks } from './components/SocialLinks';
import { Lock, Award, CheckCircle } from 'lucide-react';
import { BannerItem, LinkButton } from './types';

export default function App() {
  const [banners, setBanners] = useState<BannerItem[]>(defaultBanners);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleActionClick = (btn: LinkButton) => {
    if (btn.isPrimary) {
      fireLightweightConfetti();
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-start p-3 sm:p-4 selection:bg-cyan-500 selection:text-slate-950 relative overflow-hidden">
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[480px] h-[350px] bg-gradient-to-b from-cyan-600/15 via-blue-700/10 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[250px] bg-gradient-to-t from-blue-600/10 via-cyan-900/10 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="w-full max-w-md mx-auto flex flex-col items-center relative z-10">
        <Header />
        <BannerSlider banners={banners} onUpdateBanners={setBanners} />
        <MarqueeTicker />
        <ActionButtons onActionClick={handleActionClick} />
        <SocialLinks />

        <footer className="w-full mt-4 pt-4 border-t border-slate-800/80 text-center space-y-2.5 pb-8">
          <div className="flex items-center justify-center gap-3 text-[11px] font-medium text-slate-400">
            <span className="flex items-center gap-1 text-cyan-400">
              <Lock className="w-3.5 h-3.5" />
              SSL 256-Bit
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <CheckCircle className="w-3.5 h-3.5" />
              Cloudflare Protected
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-blue-400">
              <Award className="w-3.5 h-3.5" />
              VIP Certified
            </span>
          </div>

          <p className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
            © 2026 KAPSUL4D VIP OFFICIAL. Seluruh Hak Cipta Dilindungi.
          </p>
        </footer>
      </div>

      {toastMessage && (
        <div className="fixed bottom-5 z-50 px-4 py-2.5 rounded-xl bg-cyan-950/95 border border-cyan-400 text-cyan-200 text-xs font-semibold shadow-[0_0_20px_rgba(6,182,212,0.4)] backdrop-blur-md">
          {toastMessage}
        </div>
      )}
    </main>
  );
}
