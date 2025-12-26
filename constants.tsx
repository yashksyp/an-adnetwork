
import React from 'react';
import { 
  Zap, 
  Target, 
  BarChart3, 
  Globe, 
  MousePointer2, 
  Bell, 
  Layers, 
  Layout, 
  ShieldCheck,
  Rocket,
  Cpu,
  Smartphone,
  TrendingUp,
  Type,
  ImageIcon,
  BookOpen
} from 'lucide-react';

export const COLORS = {
  primary: '#3b82f6', // Electric Blue
  secondary: '#10b981', // Neon Green
  accent: '#a855f7', // Purple
  bg: '#050505',
  card: 'rgba(255, 255, 255, 0.03)',
};

export const NAVIGATION = [
  { name: 'Advertisers', path: '/advertisers' },
  { name: 'Publishers', path: '/publishers' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Ad Formats', path: '/formats' },
  { name: 'Resources', path: '/resources' },
];

export const PARTNER_LOGOS = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/b/b8/Adidas_Logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png"
];

export const AD_FORMATS = [
  {
    id: 'push',
    title: 'Push Notifications',
    description: 'Direct messages sent to the user\'s device even when they aren\'t browsing. High CTR and instant delivery.',
    icon: <Bell className="w-6 h-6 text-blue-500" />,
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    features: ['100% Ad Visibility', 'Bypass Ad-blockers', 'Real-time Delivery'],
  },
  {
    id: 'pop',
    title: 'On-Click (Popunder)',
    description: 'Premium full-page ads that appear behind the active browser window. Ideal for aggressive scaling.',
    icon: <MousePointer2 className="w-6 h-6 text-emerald-500" />,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    features: ['Infinite Traffic Volume', 'High Conversion Rates', 'Low Entry Bid'],
  },
  {
    id: 'native',
    title: 'Native Ads',
    description: 'Contextual widgets that adapt to the surrounding content. Perfect for brand-safe, long-term ROI.',
    icon: <Layout className="w-6 h-6 text-purple-500" />,
    image: 'https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=800',
    features: ['Seamless Integration', 'Premium Publisher Sites', 'User-Friendly Experience'],
  },
  {
    id: 'inter',
    title: 'Interstitials',
    description: 'Immersive full-screen ads shown during natural content breaks. Maximizes mobile user engagement.',
    icon: <Smartphone className="w-6 h-6 text-rose-500" />,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
    features: ['Mobile & Desktop', 'Engaging Interactive UI', 'Top-tier Performance'],
  },
  {
    id: 'banner',
    title: 'Display Banners',
    description: 'Classic display placements in standard sizes like 300x250. High brand recall and cross-device support.',
    icon: <Layers className="w-6 h-6 text-cyan-500" />,
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800',
    features: ['High Brand Impact', 'Universal Compatibility', 'Multi-Size Support'],
  },
  {
    id: 'text',
    title: 'Text Ads',
    description: 'Lightweight, distraction-free text links. Delivers high intent traffic with zero creative fatigue.',
    icon: <Type className="w-6 h-6 text-amber-500" />,
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
    features: ['Instant Load Speed', 'Contextual Relevance', 'Pure Performance'],
  }
];

export const STATS = [
  { label: 'Daily Impressions', value: '5', suffix: 'B+' },
  { label: 'Verified Publishers', value: '250', suffix: 'K+' },
  { label: 'Active Advertisers', value: '18', suffix: 'K+' },
  { label: 'GEOs Covered', value: '190', suffix: '+' },
];

export const FEATURES = [
  {
    icon: <Cpu />,
    title: "AI-Powered Bidding",
    text: "Automated bidding system that optimizes for your target CPA in real-time using machine learning.",
    color: "blue"
  },
  {
    icon: <ShieldCheck />,
    title: "Anti-Fraud 2.0",
    text: "Multi-layered bot detection that ensures 100% human traffic and protects your advertising budget.",
    color: "emerald"
  },
  {
    icon: <Target />,
    title: "Granular Targeting",
    text: "Target by OS version, connection type, specific ISP, browser language, and even local city.",
    color: "purple"
  },
  {
    icon: <TrendingUp />,
    title: "Real-Time Stats",
    text: "Watch your campaign scale with millisecond reporting accuracy and dynamic data visualization.",
    color: "cyan"
  }
];
