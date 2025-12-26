
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  Target, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  MousePointer2,
  ShieldCheck,
  TrendingUp,
  Cpu,
  Globe2,
  Layers,
  Smartphone,
  BarChart3,
  MessageSquare,
  Star,
  Plus,
  Minus,
  HelpCircle,
  Activity,
  Rocket
} from 'lucide-react';
import StatCounter from '../components/StatCounter';
import GlassCard from '../components/GlassCard';
import { AD_FORMATS, STATS, PARTNER_LOGOS, FEATURES } from '../constants';

const Home: React.FC = () => {
  const [activeFormat, setActiveFormat] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const verticals = [
    { name: "E-commerce", growth: "+120%", icon: <Layers size={20} /> },
    { name: "Mobile Apps", growth: "+85%", icon: <Smartphone size={20} /> },
    { name: "Finance", growth: "+40%", icon: <Activity size={20} /> },
    { name: "Gaming", growth: "+210%", icon: <Rocket size={20} /> },
    { name: "Sweepstakes", growth: "+95%", icon: <Zap size={20} /> },
    { name: "Entertainment", growth: "+60%", icon: <Globe2 size={20} /> },
  ];

  const workflow = [
    { step: "01", title: "Target", desc: "Select from 190+ GEOs and granular targeting options." },
    { step: "02", title: "Creative", icon: <Layers />, desc: "Upload high-converting assets optimized for our network." },
    { step: "03", title: "Optimize", icon: <Cpu />, desc: "Our Neural AI manages bids for maximum ROI in real-time." },
    { step: "04", title: "Scale", icon: <TrendingUp />, desc: "Expand your reach across billions of daily impressions." },
  ];

  const testimonials = [
    { name: "Sarah J.", company: "Growth Media", text: "PVA transformed our scaling strategy. The popunder quality is the best in the industry.", rating: 5 },
    { name: "Marcus V.", company: "AppNexus Partner", text: "The API is developer-friendly and the real-time stats are actually real-time. Unheard of.", rating: 5 },
    { name: "Elena R.", company: "Global Pubs", text: "Highest eCPMs we've ever seen for our tier-2 traffic. Payments are always on time.", rating: 5 },
  ];

  const faqs = [
    { q: "How fast can I start running traffic?", a: "Most campaigns are reviewed and approved within 15-30 minutes. Once approved, traffic starts flowing instantly." },
    { q: "What is the minimum deposit?", a: "Our entry barrier is low. You can start with just $50 using any of our supported payment methods." },
    { q: "Do you have a managed service?", a: "Yes, for high-volume advertisers ($5k+ monthly spend), we offer dedicated account managers and creative support." },
    { q: "Which formats have the highest CTR?", a: "Push Notifications and Interstitials typically see the highest engagement, with CTRs ranging from 2% to 12% depending on the offer." }
  ];

  return (
    <div className="relative overflow-hidden bg-[#050505] selection:bg-blue-600/30">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-blue-600/10 rounded-full blur-[160px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 25, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 rounded-full blur-[140px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 lg:pt-64 lg:pb-32 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-left relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-10 text-[10px] font-black tracking-[0.3em] text-blue-400 uppercase bg-blue-400/5 rounded-full border border-blue-400/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              THE FUTURE OF AD PERFORMANCE
            </div>
            <h1 className="text-7xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter text-white">
              Direct <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-emerald-400">Traffic.</span> <br/>Total Scale.
            </h1>
            <p className="text-xl text-gray-400 max-w-xl mb-12 leading-relaxed">
              Unlock the power of direct supply with PixelVisionAds. We bridge the gap between global publishers and ambitious brands using AI-driven yield technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <button className="w-full sm:w-auto px-12 py-6 bg-blue-600 hover:bg-blue-500 rounded-3xl text-sm font-black uppercase tracking-widest text-white shadow-3xl shadow-blue-600/30 transition-all flex items-center justify-center gap-3 group active:scale-95">
                Join the Network <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
              <div className="flex items-center gap-4">
                 <div className="flex -space-x-3">
                   {[1, 2, 3].map(i => (
                     <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-800 flex items-center justify-center overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?u=${i*10}`} alt="user" />
                     </div>
                   ))}
                 </div>
                 <div className="flex flex-col">
                    <span className="text-sm font-black text-white leading-none">18.4K+</span>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Partners Active</span>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Abstract Floating UI Elements */}
          <div className="flex-1 relative hidden lg:block h-[600px]">
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-[450px] p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[60px] shadow-3xl overflow-hidden backdrop-blur-3xl border border-white/5"
            >
               <div className="bg-[#0a0a0a]/90 p-10">
                  <div className="flex justify-between items-center mb-12">
                     <div className="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                     <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">LIVE YIELD MONITOR</span>
                  </div>
                  <div className="space-y-10">
                     <div className="flex items-end gap-3 h-32">
                        {[40, 70, 45, 90, 65, 80, 50, 60, 85].map((h, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ height: 0 }} 
                            animate={{ height: `${h}%` }} 
                            transition={{ delay: 0.5 + i * 0.1 }}
                            className="flex-1 bg-gradient-to-t from-blue-600/20 to-blue-500 rounded-t-lg" 
                          />
                        ))}
                     </div>
                     <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/5">
                        <div>
                           <p className="text-[10px] font-black text-gray-500 uppercase mb-1">Weekly Profit</p>
                           <p className="text-3xl font-black text-white">$42,840.12</p>
                        </div>
                        <div className="text-right">
                           <p className="text-[10px] font-black text-gray-500 uppercase mb-1">Network ROI</p>
                           <p className="text-3xl font-black text-emerald-500">+142.5%</p>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 30, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 left-0 p-6 bg-white/5 backdrop-blur-2xl rounded-[32px] border border-white/10 flex items-center gap-6 shadow-2xl"
            >
               <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
                  <Target size={24} />
               </div>
               <div>
                  <p className="text-xs font-bold text-gray-400">Winning Bid in US</p>
                  <p className="text-xl font-black text-white">$1.45 CPM</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-20 border-y border-white/5 bg-[#080808]/40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
           <p className="text-center text-[10px] font-black text-gray-600 uppercase tracking-[0.4em] mb-12">DOMINATING THE AD TECH LANDSCAPE SINCE 2018</p>
           <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
             {PARTNER_LOGOS.map((logo, i) => (
               <img key={i} src={logo} alt="partner" className="h-6 md:h-10" />
             ))}
           </div>
        </div>
      </section>

      {/* Why PVA? Bento Grid Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter leading-none">
              Built for <span className="text-blue-500">Unstoppable</span> <br/>Performance.
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">Proprietary technology engineered for the world's most demanding marketers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className="md:col-span-2 p-10 bg-white/5 rounded-[48px] border border-white/5 overflow-hidden group relative">
               <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:scale-110 transition-transform">
                  <Cpu size={300} />
               </div>
               <div className="relative z-10 max-w-md">
                 <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-8">
                    <Cpu size={24} />
                 </div>
                 <h3 className="text-4xl font-black mb-4">Neural Bidding Engine</h3>
                 <p className="text-gray-400 text-lg leading-relaxed">Our AI calculates the optimal bid for every impression in under 5ms, ensuring you win the highest intent traffic without overpaying.</p>
               </div>
            </motion.div>
            
            <motion.div whileHover={{ y: -5 }} className="p-10 bg-gradient-to-br from-emerald-600/20 to-transparent rounded-[48px] border border-emerald-500/20 group">
               <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center mb-8">
                  <ShieldCheck size={24} />
               </div>
               <h3 className="text-3xl font-black mb-4">Guardian AI 2.0</h3>
               <p className="text-gray-400">100% Fraud-free traffic. Multi-layered bot detection that preserves your budget with surgical precision.</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="p-10 bg-white/5 rounded-[48px] border border-white/5 group">
               <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center mb-8">
                  <BarChart3 size={24} />
               </div>
               <h3 className="text-3xl font-black mb-4">Atomic Analytics</h3>
               <p className="text-gray-400">Micro-second data refresh. Track every click, conversion, and event with absolute accuracy in real-time.</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className="md:col-span-2 p-10 bg-white/5 rounded-[48px] border border-white/5 overflow-hidden group relative">
               <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:rotate-12 transition-transform">
                  <Globe2 size={300} />
               </div>
               <div className="relative z-10 max-w-md">
                 <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-8">
                    <Globe2 size={24} />
                 </div>
                 <h3 className="text-4xl font-black mb-4">Global Hub Network</h3>
                 <p className="text-gray-400 text-lg">Direct inventory from 250,000+ premium publishers across 190+ countries. Local traffic, global impact.</p>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ad Formats Interactive Showcase (Refined) */}
      <section className="py-32 px-4 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
            <div className="max-w-3xl">
               <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Your Conversion <br/><span className="text-blue-500">Toolkit.</span></h2>
               <p className="text-xl text-gray-500 font-medium">Multiple high-engagement formats designed for every campaign objective.</p>
            </div>
            <button className="px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
               View All Formats
            </button>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 space-y-3">
               {AD_FORMATS.map((format, idx) => (
                 <button
                   key={idx}
                   onMouseEnter={() => setActiveFormat(idx)}
                   className={`w-full text-left p-10 rounded-[40px] border transition-all duration-500 flex items-start gap-8 group ${
                     activeFormat === idx ? 'bg-white/10 border-blue-500/50 scale-[1.03] shadow-3xl' : 'bg-transparent border-white/5 opacity-40 hover:opacity-100 grayscale hover:grayscale-0'
                   }`}
                 >
                    <div className={`p-5 rounded-3xl transition-colors duration-500 ${activeFormat === idx ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-500 group-hover:text-blue-500'}`}>
                       {format.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-black mb-3">{format.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed font-bold">{format.description}</p>
                    </div>
                 </button>
               ))}
            </div>

            <div className="w-full lg:w-1/2 relative">
               <AnimatePresence mode="wait">
                 <motion.div
                   key={activeFormat}
                   initial={{ opacity: 0, scale: 0.9, x: 20 }}
                   animate={{ opacity: 1, scale: 1, x: 0 }}
                   exit={{ opacity: 0, scale: 1.1, x: -20 }}
                   transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                   className="relative rounded-[60px] overflow-hidden border border-white/10 shadow-[0_0_100px_rgba(37,99,235,0.15)] aspect-[4/5] lg:aspect-square"
                 >
                    <img src={AD_FORMATS[activeFormat].image} alt="preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                    <div className="absolute bottom-12 left-12 right-12">
                       <div className="flex flex-wrap gap-3">
                          {AD_FORMATS[activeFormat].features.map(f => (
                            <span key={f} className="px-5 py-2.5 bg-blue-600/80 backdrop-blur-xl rounded-2xl text-[10px] font-black uppercase tracking-widest text-white">{f}</span>
                          ))}
                       </div>
                    </div>
                 </motion.div>
               </AnimatePresence>
               {/* Decorative Gradient Orb */}
               <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Performance Verticals Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div>
                <h2 className="text-5xl font-black mb-6">Optimized for <br/><span className="text-blue-500">Every Vertical.</span></h2>
                <p className="text-gray-500 max-w-lg font-bold">Direct supply specifically curated for high-ROI industry segments.</p>
              </div>
           </div>

           <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
              {verticals.map((v, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -10 }}
                  className="p-8 bg-white/5 border border-white/5 rounded-[40px] text-center hover:border-blue-500/30 transition-all group"
                >
                   <div className="w-14 h-14 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      {v.icon}
                   </div>
                   <h4 className="text-xs font-black uppercase tracking-widest text-white mb-2">{v.name}</h4>
                   <p className="text-xl font-black text-emerald-500">{v.growth}</p>
                   <p className="text-[8px] font-bold text-gray-600 uppercase mt-1">ROI Potential</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* The PVA Workflow Section */}
      <section className="py-32 px-4 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-24">
              <h2 className="text-5xl font-black mb-6">How We Scale You.</h2>
              <p className="text-gray-500">Four simple steps to dominate your market.</p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
              <div className="hidden lg:block absolute top-12 left-0 w-full h-px bg-white/5"></div>
              {workflow.map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                   <div className="w-24 h-24 bg-[#050505] border border-blue-500/20 rounded-full flex items-center justify-center mb-10 shadow-3xl text-blue-500 font-black text-2xl group hover:border-blue-500 transition-all">
                      {item.step}
                   </div>
                   <h3 className="text-2xl font-black text-white mb-4">{item.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed px-4 font-medium">{item.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Global Statistics Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <StatCounter key={idx} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof Section */}
      <section className="py-32 px-4 relative">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-24">
             <h2 className="text-5xl font-black mb-6">Voices of <span className="text-blue-500">Success.</span></h2>
             <p className="text-gray-500">Join 18,000+ top-tier partners already using PVA.</p>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {testimonials.map((t, i) => (
                <GlassCard key={i} className="!p-12 group hover:border-blue-500/40">
                   <div className="flex gap-1 mb-8">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={16} className="text-blue-500 fill-current" />
                      ))}
                   </div>
                   <p className="text-xl font-medium text-gray-300 mb-10 leading-relaxed italic">"{t.text}"</p>
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500 font-black">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                         <p className="text-sm font-black text-white">{t.name}</p>
                         <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{t.company}</p>
                      </div>
                   </div>
                </GlassCard>
              ))}
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4 bg-[#080808]">
        <div className="max-w-3xl mx-auto">
           <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black text-blue-400 uppercase bg-blue-400/5 rounded-md border border-blue-400/20">
                <HelpCircle size={12} /> Support Hub
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Your Questions, <span className="text-blue-500">Answered.</span></h2>
           </div>
           
           <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-white/5 rounded-[32px] bg-white/[0.02] overflow-hidden group hover:border-blue-500/20 transition-all">
                  <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full p-8 flex items-center justify-between text-left transition-colors"
                  >
                    <span className="text-lg font-black text-gray-200 group-hover:text-white transition-colors">{faq.q}</span>
                    <div className={`p-2 rounded-xl transition-all ${activeFaq === i ? 'bg-blue-600 text-white rotate-180' : 'bg-white/5 text-gray-500 group-hover:text-blue-500'}`}>
                       <Plus size={20} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {activeFaq === i && (
                      <motion.div 
                        initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="p-8 pt-0 text-gray-400 leading-relaxed font-medium">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Global Reach - World Map Visualization */}
      <section className="py-40 px-4 relative overflow-hidden">
         <div className="max-w-7xl mx-auto text-center relative z-10">
            <h2 className="text-6xl md:text-8xl font-black mb-16 tracking-tighter">Scale Without <br/><span className="text-blue-500">Boundaries.</span></h2>
            <div className="relative mx-auto max-w-5xl group">
               <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
               <img 
                 src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                 alt="World Map" 
                 className="w-full opacity-30 rounded-[80px] grayscale brightness-50 border border-white/5 group-hover:opacity-50 transition-opacity duration-1000"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
               
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-2 md:grid-cols-4 gap-8 w-full px-12">
                  {[
                    { label: 'Europe', val: '1.2B' },
                    { label: 'Americas', val: '980M' },
                    { label: 'Asia-Pacific', val: '2.1B' },
                    { label: 'Other', val: '720M' }
                  ].map((region, idx) => (
                    <motion.div 
                      key={region.label} 
                      whileHover={{ scale: 1.05 }}
                      className="p-8 bg-[#050505]/60 backdrop-blur-2xl border border-white/10 rounded-[40px] shadow-3xl"
                    >
                       <p className="text-[10px] font-black text-blue-500 uppercase mb-2 tracking-[0.2em]">{region.label}</p>
                       <p className="text-4xl font-black text-white">{region.val}</p>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Explosive Final CTA */}
      <section className="py-40 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, y: 50 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="relative p-20 lg:p-32 bg-blue-600 rounded-[100px] text-center overflow-hidden shadow-[0_0_120px_rgba(37,99,235,0.4)]"
          >
             <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none group-hover:scale-110 transition-transform">
                <Zap size={600} fill="white" />
             </div>
             <div className="relative z-10">
                <h2 className="text-6xl md:text-9xl font-black mb-10 text-white tracking-tighter leading-none">Ready for <br/>Takeoff?</h2>
                <p className="text-xl md:text-2xl text-blue-100 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
                  Join the world's highest performance ad network and start scaling your digital empire today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-8">
                  <button className="px-16 py-8 bg-white text-blue-600 rounded-[32px] font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-3xl">
                    Get Started Free
                  </button>
                  <button className="px-16 py-8 bg-blue-700 text-white rounded-[32px] font-black text-sm uppercase tracking-widest border border-blue-400/30 hover:bg-blue-800 transition-all flex items-center justify-center gap-3">
                    Contact Sales <MessageSquare size={20} />
                  </button>
                </div>
             </div>
             {/* Visual Aura */}
             <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-white/10 rounded-full blur-[120px]"></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
