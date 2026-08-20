export interface BannerItem {
  id: string;
  url: string;
  title: string;
  subtitle?: string;
  badge?: string;
  linkUrl?: string;
}

export interface LinkButton {
  id: string;
  title: string;
  subtitle: string;
  iconName: 'Zap' | 'ShieldCheck' | 'MessageCircle' | 'TrendingUp' | 'Key' | 'Sparkles' | 'Flame' | 'Globe';
  url: string;
  badge?: string;
  colorScheme: 'cyan' | 'blue' | 'gold' | 'emerald';
  isPrimary?: boolean;
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  iconName: 'Send' | 'MessageSquare' | 'Instagram' | 'Phone';
  label: string;
}
