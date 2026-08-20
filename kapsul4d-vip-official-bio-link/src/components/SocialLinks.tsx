import React from 'react';
import { Send, MessageSquare, Phone, Globe, Shield } from 'lucide-react';
import { SocialLink } from '../types';

export const socialList: SocialLink[] = [
  {
    id: 'wa',
    name: 'WhatsApp VIP',
    url: 'https://wa.me/',
    iconName: 'Phone',
    label: 'CS WhatsApp',
  },
  {
    id: 'tele',
    name: 'Telegram Resmi',
    url: 'https://t.me/',
    iconName: 'Send',
    label: 'Channel Telegram',
  },
  {
    id: 'livechat-icon',
    name: 'Live Chat 24/7',
    url: 'https://kapsul4dvip.com/livechat',
    iconName: 'MessageSquare',
    label: 'Live Chat',
  },
  {
    id: 'web',
    name: 'Website Resmi',
    url: 'https://kapsul4dvip.com',
    iconName: 'Send',
    label: 'Web Portal',
  },
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="w-full mt-4 mb-2">
      <div className="flex items-center justify-center gap-2 mb-2.5">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent flex-1" />
        <span className="text-[11px] font-bold tracking-widest text-cyan-400/80 uppercase">
          KONTAK RESMI & KOMUNITAS
        </span>
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent flex-1" />
      </div>

      <div className="grid grid-cols-4 gap-2">
        {socialList.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 hover:bg-cyan-950/40 text-slate-300 hover:text-cyan-300 transition-all duration-200 active:scale-95 group shadow-sm"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-800/80 group-hover:bg-cyan-500/20 flex items-center justify-center mb-1 text-cyan-400 transition-colors">
              {item.id === 'wa' && <Phone className="w-4 h-4" />}
              {item.id === 'tele' && <Send className="w-4 h-4" />}
              {item.id === 'livechat-icon' && <MessageSquare className="w-4 h-4" />}
              {item.id === 'web' && <Globe className="w-4 h-4" />}
            </div>
            <span className="text-[10px] font-semibold text-center leading-tight truncate w-full">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
