
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Bell, 
  MousePointer2, 
  Layout, 
  Layers, 
  Smartphone, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  BarChart3, 
  PenTool, 
  Users,
  MessageSquare,
  Type,
  Image as ImageIcon
} from 'lucide-react';

const AdFormats: React.FC = () => {
  const formats = [
    {
      id: 'push',
      title: "Push Notifications",
      tag: "Direct Reach",
      desc: "Deliver your message directly to the user's device, even when they aren't browsing. These ads bypass ad-blockers and ensure 100% viewability.",
      metrics: { ctr: "2.5% - 5.0%", volume: "2.2B+ Daily", start: "$0.003 CPC" },
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
      features: ["Direct Device Delivery", "Browser Independent", "High Conversion for Utilities"],
      color: "blue"
    },
    {
      id: 'pop',
      title: "On-Click (Popunder)",
      tag: "Massive Volume",
      desc: "The powerhouse of scaling. These ads appear in a new tab behind the active window, capturing full user attention without immediate disruption.",
      metrics: { ctr: "N/A (100% View)", volume: "5.8B+ Daily", start: "$0.55 CPM" },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
      features: ["Low Entry Cost", "Unbeatable Scale", "Works for All Verticals"],
      color: "emerald"
    },
    {
      id: 'native',
      title: "Native Widgets",
      tag: "Premium Quality",
      desc: "Ads that blend seamlessly with the website content. Perfect for content arbitrage and long-term brand building in premium environments.",
      metrics: { ctr: "0.8% - 1.5%", volume: "950M+ Daily", start: "$0.12 CPC" },
      image: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=1200",
      features: ["Contextual Relevance", "Higher User Trust", "Deep Integration"],
      color: "purple"
    },
    {
      id: 'inter',
      title: "Interstitials",
      tag: "Max Engagement",
      desc: "Full-screen interactive ads that appear between page loads or during natural breaks in mobile apps. Maximum impact for gaming and apps.",
      metrics: { ctr: "5.0% - 12.0%", volume: "420M+ Daily", start: "$3.20 CPM" },
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1200",
      features: ["Full Screen Canvas", "Rich Media Support", "Mobile-First Experience"],
      color: "rose"
    },
    {
      id: 'banner',
      title: "Display Banners",
      tag: "Classic Reach",
      desc: "The timeless foundation of display advertising. High-impact placements in standard sizes like 300x250 and 728x90 across premium networks.",
      metrics: { ctr: "0.4% - 0.8%", volume: "1.5B+ Daily", start: "$0.20 CPM" },
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1200",
      features: ["High Brand Recall", "Cross-Device Support", "Visual Storytelling"],
      color: "cyan"
    },
    {
      id: 'text',
      title: "Text Ads",
      tag: "Pure Performance",
      desc: "Lightweight, distraction-free, and hyper-contextual. Text ads deliver high intent and load faster than any other format on the market.",
      metrics: { ctr: "1.2% - 2.5%", volume: "1.2B+ Daily", start: "$0.05 CPC" },
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200",
      features: ["Instant Load Time", "Contextual Matching", "Low Creative Fatigue"],
      color: "amber"
    }
  ];

  const specs = [
    { format: "Push", icon: "192x192px", title: "30 Chars", desc: "Body: 45 Chars" },
    { format: "Popunder", icon: "URL Only", title: "Responsive", desc: "Landing Page" },
    { format: "Native", icon: "1200x627px", title: "60 Chars", desc: "Desc: 90 Chars" },
    { format: "Interstitial", icon: "320x480px", title: "HTML5/JS", desc: "Full Screen" },
    { format: "Banner", icon: "300x250px", title: "Standard", desc: "Multi-size" },
    { format: "Text", icon: "No Image", title: "25 Chars", desc: "Desc: 70 Chars" }
  ];

  return (
    <div className="bg-[#050505] selection:bg-blue-600/30">
      {/* Dynamic Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[160px]"></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase bg-blue-400/5 rounded-lg border border-blue-400/20">
              <Sparkles size={14} className="animate-pulse" /> The Full Ad Stack
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter">
              6 Powerful <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-emerald-400">Ad Formats.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
              A comprehensive arsenal of advertising technology. Designed for every vertical, optimized for every device, and engineered for maximum ROI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Formats Showcase */}
      <section className="py-20 px-4 space-y-40">
        {formats.map((fmt, idx) => (
          <div key={fmt.id} className="max-w-7xl mx-auto">
            <div className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20`}>
              {/* Visual Side */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-1 relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-600/20 to-transparent rounded-[60px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative rounded-[50px] overflow-hidden border border-white/10 shadow-3xl aspect-[4/3] bg-[#0a0a0a]">
                  <img src={fmt.image} alt={fmt.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute top-8 right-8 p-6 bg-black/60 backdrop-blur-xl border border-white/10 rounded-3xl">
                     <p className="text-[10px] font-black text-blue-400 uppercase mb-1 tracking-widest">Avg. CTR</p>
                     <p className="text-2xl font-black">{fmt.metrics.ctr}</p>
                  </div>
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div 
                initial={{ opacity: 0, x: idx % 2 === 0 ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-black text-blue-500 uppercase bg-blue-500/10 rounded-md border border-blue-500/20">
                   {fmt.tag}
                </div>
                <h2 className="text-5xl font-black mb-8 leading-none">{fmt.title}</h2>
                <p className="text-lg text-gray-400 mb-10 leading-relaxed font-medium">{fmt.desc}</p>
                
                <div className="grid grid-cols-2 gap-8 mb-12">
                   <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                      <p className="text-[10px] font-black text-gray-600 uppercase mb-2 tracking-widest">Global Reach</p>
                      <p className="text-2xl font-black text-white">{fmt.metrics.volume}</p>
                   </div>
                   <div className="p-6 bg-white/5 border border-white/10 rounded-3xl">
                      <p className="text-[10px] font-black text-gray-600 uppercase mb-2 tracking-widest">Market Entry</p>
                      <p className="text-2xl font-black text-emerald-500">{fmt.metrics.start}</p>
                   </div>
                </div>

                <div className="space-y-4 mb-12">
                   {fmt.features.map(f => (
                     <div key={f} className="flex items-center gap-4 text-sm font-black text-gray-300 uppercase tracking-widest">
                        <CheckCircle2 size={18} className="text-blue-500" /> {f}
                     </div>
                   ))}
                </div>

                <button className="px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl active:scale-95">
                  Launch {fmt.title} Campaign
                </button>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* Technical Specs Grid */}
      <section className="py-32 px-4 bg-[#080808] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-24">
             <h2 className="text-5xl font-black mb-6">Technical Specifications</h2>
             <p className="text-gray-400 max-w-2xl mx-auto">Full technical requirements for your design team. Optimized for maximum compatibility.</p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {specs.map((s, i) => (
               <div key={i} className="p-10 bg-[#0a0a0a] border border-white/5 rounded-[40px] hover:border-blue-500/30 transition-all group">
                  <div className="flex justify-between items-start mb-8">
                    <h4 className="text-xl font-black text-blue-500">{s.format}</h4>
                    <Zap size={16} className="text-white/20 group-hover:text-blue-500 transition-colors" />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] font-black text-gray-600 uppercase mb-1 tracking-widest">Dimensions</p>
                      <p className="text-sm font-bold text-gray-300">{s.icon}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-600 uppercase mb-1 tracking-widest">Title Limit</p>
                      <p className="text-sm font-bold text-gray-300">{s.title}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-600 uppercase mb-1 tracking-widest">Description</p>
                      <p className="text-sm font-bold text-gray-300">{s.desc}</p>
                    </div>
                  </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Premium Managed Service - THE ELITE PLAN */}
      <section className="py-40 px-4 relative overflow-hidden" id="premium">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto">
          <div className="relative p-12 lg:p-24 bg-[#0a0a0a] border border-purple-500/20 rounded-[80px] overflow-hidden shadow-3xl">
            <div className="absolute top-0 right-0 p-16 opacity-5 pointer-events-none group-hover:scale-110 transition-transform">
               <Sparkles size={500} className="text-purple-500" />
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row gap-20 items-center">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] font-black tracking-[0.2em] text-purple-400 uppercase bg-purple-400/10 rounded-full border border-purple-400/30">
                  <Cpu size={14} /> PixelVision Elite Managed
                </div>
                <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                  We Build. We Manage. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">You Scale.</span>
                </h2>
                <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl">
                  Stop worrying about creatives and bidding logic. Our Elite Plan provides full-service ad management, custom creative production, and priority traffic access.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-16">
                   {[
                     { icon: <PenTool size={24} />, title: "Custom Creatives", desc: "Our in-house studio designs all your banners and headlines for maximum CTR." },
                     { icon: <BarChart3 size={24} />, title: "Full Management", desc: "Dedicated expert managers handle your daily bidding, white-listing, and scaling." },
                     { icon: <Users size={24} />, title: "Private Whitelists", desc: "Get exclusive access to high-performance traffic segments not available to others." },
                     { icon: <Zap size={24} />, title: "24/7 Priority Support", desc: "A direct Slack or Telegram channel with your personal yield engineering team." }
                   ].map((item, i) => (
                     <div key={i} className="space-y-4">
                        <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl w-fit">{item.icon}</div>
                        <h4 className="text-lg font-bold text-white">{item.title}</h4>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                     </div>
                   ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-8">
                   <button className="w-full sm:w-auto px-12 py-6 bg-purple-600 hover:bg-purple-500 rounded-3xl font-black text-white transition-all shadow-3xl shadow-purple-600/30 flex items-center justify-center gap-3 active:scale-95 group">
                      Contact Now <MessageSquare className="group-hover:translate-x-1 transition-transform" />
                   </button>
                   <div className="text-left">
                     <p className="text-sm font-bold text-gray-200">Starting at $5,000 / mo</p>
                     <p className="text-xs text-gray-500">Minimum monthly ad spend applies.</p>
                   </div>
                </div>
              </div>

              <div className="lg:w-1/3 relative hidden lg:block">
                 <div className="p-12 bg-gradient-to-br from-purple-500/20 to-purple-900/40 rounded-[60px] border border-purple-500/30 shadow-3xl transform rotate-3 hover:rotate-0 transition-all duration-1000">
                    <div className="space-y-10">
                       <div className="flex justify-between items-center">
                          <p className="text-[10px] font-black uppercase text-purple-200 tracking-[0.2em]">Portfolio Growth</p>
                          <TrendingUp size={24} className="text-purple-400" />
                       </div>
                       <div className="space-y-2">
                          <p className="text-6xl font-black text-white">+245%</p>
                          <p className="text-xs font-bold text-purple-300 uppercase tracking-widest">Avg. Client ROI Lift</p>
                       </div>
                       <div className="pt-10 border-t border-white/10">
                          <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden mb-4">
                             <motion.div initial={{ width: 0 }} whileInView={{ width: '92%' }} transition={{ duration: 1.5 }} className="h-full bg-gradient-to-r from-purple-500 to-pink-500" />
                          </div>
                          <p className="text-[10px] font-black uppercase text-purple-400 tracking-widest text-center">Managed by PixelVision Experts</p>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Performance CTA */}
      <section className="py-40 px-4">
        <div className="max-w-5xl mx-auto">
           <div className="relative p-20 lg:p-32 bg-blue-600 rounded-[80px] text-center overflow-hidden shadow-3xl">
              <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                 <Layers size={500} strokeWidth={0.5} color="white" />
              </div>
              <div className="relative z-10">
                <h2 className="text-5xl md:text-8xl font-black mb-10 text-white leading-[0.9] tracking-tighter">Your Success <br/>Is Our Priority.</h2>
                <p className="text-xl text-blue-100 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
                  Join 18,000+ top marketers and publishers already dominating their verticals. From classic banners to AI-driven push, we have the format for you.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-8">
                  <button className="px-12 py-6 bg-white text-blue-600 rounded-[32px] font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
                    Get Started Free
                  </button>
                  <button className="px-12 py-6 bg-blue-800 text-white rounded-[32px] font-black text-xs uppercase tracking-widest border border-blue-400/30 hover:bg-blue-900 transition-all">
                    Talk to Sales
                  </button>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

// Internal icon for TrendingUp since it was missing in imports but used in UI
const TrendingUp = ({ size, className }: { size: number, className: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

export default AdFormats;
