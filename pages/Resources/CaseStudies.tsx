
import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  ArrowUpRight, 
  Users, 
  Globe, 
  BarChart3, 
  Layers,
  CheckCircle2,
  Play
} from 'lucide-react';
import GlassCard from '../../components/GlassCard';

const CaseStudies: React.FC = () => {
  const cases = [
    {
      title: "How NeoBank Scaled 300% ROI",
      vertical: "Finance",
      format: "Native Ads",
      metric: "+342%",
      metricLabel: "ROI Increase",
      img: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=800",
      desc: "By leveraging our precision Tier-1 finance segments, NeoBank achieved record-low acquisition costs in the UK market."
    },
    {
      title: "Global Gaming App: 1M Installs",
      vertical: "Gaming",
      format: "Interstitial",
      metric: "0.12$",
      metricLabel: "CPI (Avg)",
      img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
      desc: "Maximum impact full-screen creatives delivered high-intent users across the US, Canada, and Brazil during a 30-day scale phase."
    },
    {
      title: "E-comm Empire: Push Strategy",
      vertical: "E-commerce",
      format: "Push Notifications",
      metric: "12%",
      metricLabel: "Conv. Rate",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      desc: "Using retargeting via Push, this retail giant recovered 40% of abandoned carts in just two weeks."
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-20 px-4">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto text-center mb-32">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase bg-blue-400/10 rounded-full border border-blue-400/20">
             Battle-Tested Strategies
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">Results That <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-400">Speak Volumes.</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From niche startups to Fortune 500 giants, see how industry leaders dominate their markets using PixelVisionAds performance technology.
          </p>
        </motion.div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto space-y-24 mb-40">
        {cases.map((c, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`flex flex-col ${i % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
          >
            {/* Visual Part */}
            <div className="flex-1 w-full relative group">
               <div className="absolute -inset-4 bg-blue-600/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="relative rounded-[40px] overflow-hidden border border-white/5 aspect-[16/9]">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
                  <div className="absolute top-8 left-8 p-6 bg-black/60 backdrop-blur-xl rounded-3xl border border-white/10">
                     <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-1">{c.metricLabel}</p>
                     <p className="text-4xl font-black">{c.metric}</p>
                  </div>
               </div>
            </div>

            {/* Content Part */}
            <div className="flex-1 space-y-6">
               <div className="flex gap-3">
                 <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-black uppercase text-gray-400">{c.vertical}</span>
                 <span className="px-3 py-1 bg-blue-600/10 border border-blue-600/20 rounded-lg text-[10px] font-black uppercase text-blue-500">{c.format}</span>
               </div>
               <h2 className="text-4xl font-black leading-tight">{c.title}</h2>
               <p className="text-lg text-gray-400 leading-relaxed mb-8">{c.desc}</p>
               <div className="space-y-3 mb-10">
                  {['Custom Audience Whitelisting', 'Smart Bidding Automation', 'Creative Optimization Lab'].map(f => (
                    <div key={f} className="flex items-center gap-3 text-sm font-bold text-gray-200">
                      <CheckCircle2 size={16} className="text-emerald-500" /> {f}
                    </div>
                  ))}
               </div>
               <button className="px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-blue-600 hover:text-white transition-all group">
                  Read Full Case Study <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Stats Quick Look */}
      <section className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
        {[
          { label: "Avg. ROI Increase", val: "142%" },
          { label: "Fill Rate", val: "100%" },
          { label: "Campaigns Optimized", val: "50K+" },
          { label: "Market Geo's", val: "190+" }
        ].map((s, i) => (
          <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-[32px] text-center">
            <p className="text-4xl font-black text-white mb-2">{s.val}</p>
            <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Global Success CTA */}
      <section className="max-w-5xl mx-auto">
        <div className="relative p-20 bg-blue-600 rounded-[60px] text-center overflow-hidden">
           <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <TrendingUp size={400} color="white" />
           </div>
           <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 text-white">Your Success Story <br/>Starts Today.</h2>
              <button className="px-12 py-6 bg-white text-blue-600 rounded-3xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
                 Schedule Strategy Call
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
