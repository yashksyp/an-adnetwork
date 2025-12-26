
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ChevronRight, 
  MousePointer2, 
  ShieldCheck, 
  Zap, 
  Target, 
  TrendingUp, 
  Monitor, 
  Smartphone, 
  Cpu, 
  Globe, 
  MessageCircle, 
  BarChart3,
  Layers,
  Activity,
  CheckCircle
} from 'lucide-react';
import StatCounter from '../components/StatCounter';
import { AD_FORMATS, STATS } from '../constants';

const Home: React.FC = () => {
  const [activeFormat, setActiveFormat] = useState(0);

  const stats = [
    { value: "280", suffix: "M", label: "unique users daily" },
    { value: "195", label: "Countries served" },
    { value: "18", suffix: "Y", label: "of Industry Presence" },
  ];

  const advertiserFeatures = [
    { title: "Fast campaign creation", desc: "Launch in minutes" },
    { title: "Integrated anti-fraud tech", desc: "Guardian 2.0 protection" },
    { title: "Advanced targeting & tracking", desc: "Granular precision" },
    { title: "Engaging multidevice ads", desc: "Desktop, Mobile, Tablet" },
    { title: "Automated ROI optimization", desc: "AI-driven bidding" },
    { title: "Real-time statistics", desc: "Millisecond accuracy" },
  ];

  const solutions = [
    { title: "ACTIONABLE ANALYTICS", desc: "Measure your results live and get significant insights about your ad performance.", icon: <BarChart3 /> },
    { title: "INNOVATIVE AD TECH", desc: "Campaign budget fraud protection and ad-block bypassing for bigger earnings.", icon: <Cpu /> },
    { title: "SMART OPTIMIZATION", desc: "Our smart bidding tools and automated monetization tags do the heavy lifting for you.", icon: <Target /> },
  ];

  return (
    <div className="bg-[#050505] text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-40 grayscale"
            alt="Global Network"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs md:text-sm font-black uppercase tracking-[0.4em] text-gray-400 mb-6"
          >
            Global Advertising Platform
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-none"
          >
            ADVERTISE <span className="text-[#d9f99d]">SMARTER</span> <br />
            EARN <span className="text-[#3b82f6]">FASTER</span>
          </motion.h1>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 md:gap-12">
            <button className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest hover:text-[#d9f99d] transition-colors">
              Advertise <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
            <button className="group flex items-center gap-3 text-sm font-black uppercase tracking-widest hover:text-[#3b82f6] transition-colors">
              Monetize <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-black uppercase tracking-widest text-gray-600">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-gray-600 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Global Reach Stats */}
      <section className="py-32 px-4 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
              REACH <br /> AUDIENCES <br /> <span className="text-[#d9f99d]">WORLDWIDE</span>
            </h2>
          </div>
          <div className="lg:w-1/2 space-y-16">
            {stats.map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-8 group"
              >
                <div className="relative">
                  <div className="text-6xl md:text-8xl font-black tracking-tighter transition-colors group-hover:text-[#d9f99d]">
                    {stat.value}{stat.suffix}
                  </div>
                  {i === 0 && (
                    <div className="absolute -inset-4 border-2 border-[#d9f99d]/20 rounded-full scale-110 -rotate-6" />
                  )}
                </div>
                <p className="text-sm font-bold uppercase tracking-widest text-gray-500 max-w-[120px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advertiser / Publisher Split Sections */}
      <section className="bg-[#111111]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
          {/* Advertisers Block */}
          <div className="p-8 md:p-20 space-y-12">
            <div>
              <span className="text-[#d9f99d] font-black text-xs uppercase tracking-widest italic mb-2 block">#ADVERTISE</span>
              <h3 className="text-3xl font-bold text-gray-400 mb-1">PIXELVISIONADS FOR</h3>
              <h4 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">ADVERTISERS</h4>
              <p className="text-gray-500 mt-4 max-w-sm">Reach your target audience with performance-driven campaigns.</p>
            </div>
            
            <button className="px-10 py-5 bg-[#d9f99d] text-black rounded-none font-black text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center gap-4 group">
              CREATE A CAMPAIGN <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 border-t border-white/5 pt-12">
              {advertiserFeatures.map((f, i) => (
                <div key={i}>
                  <h5 className="font-black text-sm text-white mb-2">{f.title}</h5>
                  <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Publishers Block */}
          <div className="p-8 md:p-20 flex flex-col justify-center space-y-12 bg-white/[0.02]">
            <div className="space-y-4">
              <button className="px-10 py-5 bg-[#d9f99d] text-black rounded-none font-black text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center gap-4 group">
                MONETIZE YOUR TRAFFIC <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <div className="flex gap-12 pt-6">
                <div>
                  <h5 className="font-black text-sm text-white mb-1">Live statistics</h5>
                  <div className="h-0.5 w-12 bg-white/10" />
                </div>
                <div>
                  <h5 className="font-black text-sm text-white mb-1">Fast payments</h5>
                  <div className="h-0.5 w-12 bg-white/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engaging Ad Formats */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
              ENGAGING <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>AD FORMATS</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">Our high-performing ad formats have you covered.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-20 items-start">
            {/* Format List */}
            <div className="w-full lg:w-1/3 space-y-2">
              {AD_FORMATS.map((fmt, i) => (
                <button 
                  key={i}
                  onMouseEnter={() => setActiveFormat(i)}
                  className={`w-full text-left p-6 border-b border-white/5 transition-all flex items-center justify-between group ${activeFormat === i ? 'bg-white/5 border-[#d9f99d]' : 'opacity-40 hover:opacity-100'}`}
                >
                  <span className="text-sm font-black uppercase tracking-widest">{i + 1}. {fmt.title}</span>
                  <ChevronRight className={`transition-transform ${activeFormat === i ? 'translate-x-0' : '-translate-x-4 opacity-0'}`} />
                </button>
              ))}
            </div>

            {/* Preview Section */}
            <div className="w-full lg:w-1/3 flex justify-center">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeFormat}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.1 }}
                  className="relative"
                >
                  <div className="w-[300px] h-[400px] bg-[#111] rounded-[40px] border-[12px] border-[#222] overflow-hidden relative shadow-2xl">
                    <img src={AD_FORMATS[activeFormat].image} className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4/5 h-1/2 bg-[#d9f99d]/90 flex items-center justify-center p-6 text-center text-black font-black uppercase text-xs rounded-2xl">
                        {AD_FORMATS[activeFormat].title} Preview
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-[-20px] right-[-40px] w-[140px] h-[260px] bg-[#111] rounded-[30px] border-[8px] border-[#222] overflow-hidden shadow-2xl hidden md:block">
                    <img src={AD_FORMATS[activeFormat].image} className="w-full h-full object-cover opacity-60" />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Features List */}
            <div className="w-full lg:w-1/3 space-y-12">
              {[
                { title: "Massive Impact", desc: "Movement, sound, and action stick. Ads aren't just seen - they're remembered and acted on." },
                { title: "Sky-High ROI", desc: "Heighten audience engagement, boost brand awareness, and grow trust in your product." },
                { title: "Ad-Blocker Resistant", desc: "Bypass frustrating ad blockers so you can know your message is being heard loud and clear." }
              ].map((item, i) => (
                <div key={i} className="space-y-2">
                  <h4 className="text-2xl font-black text-white">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Yellow Highlight Section */}
      <section className="bg-[#d9f99d] py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black text-black leading-tight">
            Utilizing cutting-edge technology, <br />
            <span className="underline decoration-4">we boost the lead gen and <br /> monetization goals</span> of media <br />
            buyers, affiliates, ad networks, <br />
            and publishers to deliver results.
          </h2>
        </div>
      </section>

      {/* Unparalleled Performance Solutions */}
      <section className="py-40 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[#d9f99d] font-black text-xs uppercase tracking-widest block mb-4">UNPARALLELED</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
              <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>PERFORMANCE</span> SOLUTIONS
            </h2>
          </div>

          <div className="relative mb-24">
            <motion.div 
              initial={{ rotateX: 20, y: 50, opacity: 0 }}
              whileInView={{ rotateX: 0, y: 0, opacity: 1 }}
              className="max-w-4xl mx-auto perspective-1000"
            >
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-auto rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] border border-white/5"
                alt="Dashboard Preview"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/5 pt-16">
            {solutions.map((s, i) => (
              <div key={i} className="space-y-4">
                <div className="h-0.5 w-full bg-[#d9f99d] mb-8" />
                <h4 className="text-2xl font-black text-white">{s.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated To Success Section */}
      <section className="py-40 px-4 bg-[#111]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-24 uppercase tracking-tighter">
            DEDICATED TO <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>YOUR SUCCESS</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: <MessageCircle className="text-[#d9f99d]" size={40} />, title: "24/7 ONLINE SUPPORT", desc: "Day or night, our team can help you with anything you need." },
              { icon: <Activity className="text-[#d9f99d]" size={40} />, title: "NO HIDDEN FEES", desc: "Transparency is at the core of everything we do at PVA." },
              { icon: <TrendingUp className="text-[#d9f99d]" size={40} />, title: "ACCOUNT MANAGEMENT", desc: "Multilingual account management services from our elite team." }
            ].map((item, i) => (
              <div key={i} className="space-y-6">
                {item.icon}
                <h4 className="text-2xl font-black text-white">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
