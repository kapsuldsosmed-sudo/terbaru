import React from 'react';
import {
  Zap,
  ShieldCheck,
  MessageCircle,
  TrendingUp,
  Key,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Flame,
  ArrowUpRight,
} from 'lucide-react';
import { LinkButton } from '../types';

interface ActionButtonsProps {
  onActionClick?: (button: LinkButton) => void;
}

export const primaryActionButtons: LinkButton[] = [
  {
    id: 'daftar',
    title: 'DAFTAR AKUN VIP',
    subtitle: 'Registrasi Cepat & Dapatkan Akses Server Prioritas',
    iconName: 'Zap',
    url: 'https://cepatakses.info/login-kapsul4d',
    badge: 'PRIORITAS 100%',
    colorScheme: 'cyan',
    isPrimary: true,
  },
  {
    id: 'login',
    title: 'LOGIN LINK RESMI',
    subtitle: 'Masuk Langsung ke Akun Resmi KAPSUL4D',
    iconName: 'Key',
    url: 'https://cepatakses.info/login-kapsul4d',
    badge: 'BEBAS BLOKIR',
    colorScheme: 'blue',
  },
  {
    id: 'livechat',
    title: 'LIVECHAT 24 JAM NONSTOP',
    subtitle: 'Layanan Customer Service Ramah, Cepat & Terpercaya',
    iconName: 'MessageCircle',
    url: 'https://cepatakses.info/login-kapsul4d',
    badge: 'ONLINE 24/7',
    colorScheme: 'emerald',
  },
  {
    id: 'rtp',
    title: 'JADWAL & PREDIKSI BOLA TOGEL',
    subtitle: 'Update Persentase Winrate Tertinggi Hari Ini',
    iconName: 'TrendingUp',
    url: 'https://shortq.org/bolakapsul',
    badge: 'UPDATE REALTIME',
    colorScheme: 'gold',
  },
];

export const ActionButtons: React.FC<ActionButtonsProps> = ({ onActionClick }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 fill-cyan-400/20" />;
      case 'Key':
        return <Key className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400" />;
      default:
        return <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />;
    }
  };

  const getColorClasses = (scheme: string, isPrimary?: boolean) => {
    switch (scheme) {
      case 'blue':
        return {
          wrapper:
            'bg-gradient-to-r from-blue-950/80 via-slate-900/90 to-blue-950/70 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.25)] hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]',
          badge: 'bg-blue-500/30 text-blue-300 border border-blue-400/50 shadow-[0_0_8px_rgba(59,130,246,0.4)]',
          title: 'text-blue-300 drop-shadow-[0_0_8px_rgba(59,130,246,0.4)]',
          iconBg: 'bg-blue-500/20 border border-blue-400/50 shadow-[0_0_12px_rgba(59,130,246,0.35)]',
          shimmerColor: 'via-blue-400/20',
          arrowHover: 'group-hover:bg-blue-500 group-hover:border-blue-400',
        };
      case 'emerald':
        return {
          wrapper:
            'bg-gradient-to-r from-emerald-950/80 via-slate-900/90 to-emerald-950/70 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]',
          badge: 'bg-emerald-500/30 text-emerald-300 border border-emerald-400/50 shadow-[0_0_8px_rgba(16,185,129,0.4)]',
          title: 'text-emerald-300 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]',
          iconBg: 'bg-emerald-500/20 border border-emerald-400/50 shadow-[0_0_12px_rgba(16,185,129,0.35)]',
          shimmerColor: 'via-emerald-400/20',
          arrowHover: 'group-hover:bg-emerald-500 group-hover:border-emerald-400',
        };
      case 'gold':
        return {
          wrapper:
            'bg-gradient-to-r from-amber-950/80 via-slate-900/90 to-amber-950/70 border-amber-500/50 shadow-[0_0_20px_rgba(245,158,11,0.25)] hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.5)]',
          badge: 'bg-amber-500/30 text-amber-300 border border-amber-400/50 shadow-[0_0_8px_rgba(245,158,11,0.4)]',
          title: 'text-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]',
          iconBg: 'bg-amber-500/20 border border-amber-400/50 shadow-[0_0_12px_rgba(245,158,11,0.35)]',
          shimmerColor: 'via-amber-400/20',
          arrowHover: 'group-hover:bg-amber-500 group-hover:border-amber-400',
        };
      case 'cyan':
      default:
        return {
          wrapper:
            'bg-gradient-to-r from-cyan-950/90 via-slate-900/90 to-blue-950/80 border-cyan-400/70 shadow-[0_0_22px_rgba(6,182,212,0.3)] hover:border-cyan-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.6)]',
          badge: 'bg-cyan-500 text-slate-950 font-black shadow-[0_0_10px_rgba(6,182,212,0.8)]',
          title: 'text-cyan-300 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]',
          iconBg: 'bg-cyan-500/20 border border-cyan-400/50 shadow-[0_0_12px_rgba(6,182,212,0.4)]',
          shimmerColor: 'via-cyan-400/25',
          arrowHover: 'group-hover:bg-cyan-500 group-hover:border-cyan-400',
        };
    }
  };

  return (
    <div className="w-full space-y-3.5 my-3">
      {primaryActionButtons.map((btn, index) => {
        const colors = getColorClasses(btn.colorScheme, btn.isPrimary);

        return (
          <a
            key={btn.id}
            href={btn.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              if (onActionClick) {
                onActionClick(btn);
              }
            }}
            className={`group relative block w-full rounded-2xl p-4 sm:p-4.5 border transition-all duration-300 backdrop-blur-xl active:scale-[0.985] cursor-pointer overflow-hidden ${colors.wrapper}`}
            style={{
              animationDelay: `${index * 0.4}s`,
            }}
          >
            {/* Synchronized Lightning Shimmer Animation on ALL buttons */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
              <div
                className={`w-1/2 h-full bg-gradient-to-r from-transparent ${colors.shimmerColor} to-transparent animate-shimmer`}
                style={{
                  animationDelay: `${index * 0.6}s`,
                }}
              />
            </div>

            <div className="relative flex items-center justify-between gap-3">
              {/* Left: Icon */}
              <div
                className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${colors.iconBg}`}
              >
                {getIcon(btn.iconName)}
              </div>

              {/* Center: Title & Subtitle */}
              <div className="flex-1 text-left min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className={`text-sm sm:text-base font-black tracking-wide leading-snug ${colors.title}`}>
                    {btn.title}
                  </h4>
                  {btn.badge && (
                    <span
                      className={`text-[9px] sm:text-[10px] font-black uppercase px-2 py-0.5 rounded-full tracking-wider whitespace-nowrap flex-shrink-0 ${colors.badge}`}
                    >
                      {btn.badge}
                    </span>
                  )}
                </div>
                <p className="text-[11px] sm:text-xs text-slate-300 font-normal line-clamp-1">
                  {btn.subtitle}
                </p>
              </div>

              {/* Right: Arrow */}
              <div className="flex-shrink-0 pl-1">
                <div className={`w-8 h-8 rounded-full bg-slate-800/80 border border-slate-700/80 flex items-center justify-center text-slate-300 transition-all duration-300 group-hover:text-slate-950 group-hover:translate-x-0.5 ${colors.arrowHover}`}>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  );
};
