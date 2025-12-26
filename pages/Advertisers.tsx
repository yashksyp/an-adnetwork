
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Zap, 
  MousePointer, 
  Shield, 
  PieChart, 
  Users, 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Monitor, 
  Wifi, 
  BarChart3, 
  Cpu,
  Layers,
  CheckCircle2,
  Lock
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Advertisers: React.FC = () => {
  const targetingOptions = [
    { icon: <Globe size={24} />, title: "Geo-Targeting", desc: "190+ Countries, Regions, and Cities." },
    { icon: <Smartphone size={24} />, title: "Mobile & OS", desc: "Target by OS version, vendor, and device model." },
    { icon: <Monitor size={24} />, title: "Browser & Language", desc: "Specific browser versions and user preferences." },
    { icon: <Wifi size={24} />, title: "Connection Type", desc: "3G/4G/5G, Wi-Fi, and specific ISP/Carriers." },
    { icon: <Target size={24} />, title: "User Interest", desc: "Behavioral targeting based on historical data." },
    { icon: <Layers size={24} />, title: "Retargeting", desc: "Reach users who already engaged with your brand." },
  ];

  const verticals = [
    { title: "Software & Utilities", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" },
    { title: "E-commerce", img: "https://images.unsplash.com/photo-1556742049-13d736c7a91d?auto=format&fit=crop&q=80&w=400" },
    { title: "Mobile Gaming", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400" },
    { title: "Finance & Fintech", img: "https://images.unsplash.com/photo-1611974714850-eb6777036029?auto=format&fit=crop&q=80&w=400" },
    { title: "Streaming & Media", img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=400" },
    { title: "Lead Generation", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" },
  ];

  return (
    <div className="bg-[#050505] selection:bg-blue-600/30">
      {/* High-End Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden px-4">
        {/* Abstract Data Mesh Background */}
        <div className="absolute inset-0 z-0 opacity-20">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)]"></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase bg-blue-400/5 rounded-lg border border-blue-400/20">
                <Cpu size={14} className="animate-pulse" /> PERFORMANCE ADVERTISING ENGINE
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.95] tracking-tighter">
                Precision <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Scaling</span> For <br/>Global Brands.
              </h1>
              <p className="text-xl text-gray-400 max-w-xl mb-12 leading-relaxed">
                Connect with billions of unique users through our direct supply. Harness machine learning for millisecond bidding and unmatched ROI.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                 <button className="px-10 py-5 bg-blue-600 rounded-2xl font-black text-white hover:bg-blue-500 transition-all flex items-center justify-center gap-3 group active:scale-95 shadow-2xl shadow-blue-600/20">
                    Start Scaling Now <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                 </button>
                 <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-white hover:bg-white/10 transition-all">
                    Talk to Expert
                 </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 hidden lg:block"
            >
              <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[60px] shadow-3xl overflow-hidden backdrop-blur-3xl border border-white/5">
                 <img 
                   src="https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=800" 
                   alt="Analytics View" 
                   className="rounded-[59px] opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                 <div className="absolute bottom-12 left-12">
                    <div className="p-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/10">
                       <p className="text-[10px] font-black text-blue-400 uppercase mb-1">LIVE TRAFFIC STREAM</p>
                       <p className="text-3xl font-black">5.4B IMP/DAY</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Targeting Engine Section */}
      <section className="py-32 px-4 bg-[#080808]/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black mb-6">The Targeting <span className="text-blue-500">Matrix</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Drill down into your specific audience profile with granular precision. Our engine processes 50+ data points for every impression.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetingOptions.map((opt, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 bg-[#0a0a0a] border border-white/5 rounded-[40px] hover:border-blue-500/30 transition-all group"
              >
                 <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform group-hover:bg-blue-600 group-hover:text-white">
                    {opt.icon}
                 </div>
                 <h3 className="text-2xl font-black mb-4">{opt.title}</h3>
                 <p className="text-gray-500 leading-relaxed font-medium">{opt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Fraud Protection Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-blue-600/5 blur-[120px] -z-10"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
           <div className="flex-1">
             <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-black text-emerald-500 uppercase bg-emerald-500/10 rounded-md border border-emerald-500/20">
                <Lock size={12} /> Military-Grade Security
             </div>
             <h2 className="text-5xl font-black mb-8 leading-tight">Guardian <br/><span className="text-emerald-500">Anti-Fraud 2.0</span></h2>
             <p className="text-gray-400 text-lg mb-10 leading-relaxed">
               Sleep easy knowing your budget is protected. Our Guardian engine uses multi-layered forensic analysis to filter bot-farms, data centers, and non-human behavior in real-time.
             </p>
             <div className="space-y-6">
                {[
                  { title: "SIVT & GIVT Filtering", desc: "Advanced sophisticated invalid traffic detection." },
                  { title: "Real-time Blacklisting", desc: "Instant IP and device fingerprinting blocklists." },
                  { title: "Proxy Detection", desc: "Filtering VPN and data center traffic automatically." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                     <div className="mt-1"><CheckCircle2 className="text-emerald-500" size={20} /></div>
                     <div>
                       <h4 className="font-bold text-white">{item.title}</h4>
                       <p className="text-sm text-gray-500">{item.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
           </div>
           
           <div className="flex-1 relative">
              <div className="p-8 bg-[#0a0a0a] rounded-[60px] border border-white/5 relative z-10">
                 <div className="space-y-4">
                    {[70, 40, 90].map((w, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[10px] font-black uppercase text-gray-600">
                          <span>Security Node {i+1}</span>
                          <span>99.9% Pure</span>
                        </div>
                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: `${w}%` }} className="h-full bg-emerald-500" />
                        </div>
                      </div>
                    ))}
                 </div>
                 <div className="mt-10 p-6 bg-emerald-500/5 border border-emerald-500/10 rounded-3xl text-center">
                    <p className="text-emerald-500 font-black text-2xl">0% BOT TOLERANCE</p>
                 </div>
              </div>
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-[70px] blur-2xl -z-10"></div>
           </div>
        </div>
      </section>

      {/* Campaign Life Cycle - Visualized */}
      <section className="py-32 px-4 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-24">
             <h2 className="text-5xl font-black mb-6">How We Scale Your <span className="text-blue-500">ROI</span></h2>
             <p className="text-gray-400">The journey of a high-performance campaign on PixelVisionAds.</p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative">
              {/* Connector Line for Desktop */}
              <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-600/0 via-blue-500 to-blue-600/0 -z-0"></div>
              
              {[
                { step: "01", title: "Smart Setup", desc: "Define your KPI, upload creatives, and set your neural-bidding parameters." },
                { step: "02", title: "Traffic Filter", desc: "Our engine scans for the best matches across 250k premium publishers." },
                { step: "03", title: "Neural Bidding", desc: "AI calculates the optimal bid to win the highest converting users." },
                { step: "04", title: "ROI Growth", desc: "Real-time auto-optimization shifts budget to winning placements." }
              ].map((step, i) => (
                <div key={i} className="relative z-10 flex flex-col items-center text-center">
                   <div className="w-24 h-24 bg-[#0a0a0a] border-2 border-blue-500/30 rounded-full flex items-center justify-center mb-8 shadow-2xl text-blue-500 font-black text-2xl group-hover:scale-110 transition-transform">
                      {step.step}
                   </div>
                   <h4 className="text-xl font-black mb-4">{step.title}</h4>
                   <p className="text-gray-500 text-sm leading-relaxed px-4">{step.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Verticals Section */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
             <div>
                <h2 className="text-5xl font-black mb-6">Expertise Across <br/><span className="text-blue-500">Every Vertical</span></h2>
                <p className="text-gray-400 text-lg">Direct supply tailored for the world's most competitive industries.</p>
             </div>
             <button className="px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                View All Verticals
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verticals.map((v, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="relative h-64 rounded-[40px] overflow-hidden group border border-white/5"
              >
                 <img src={v.img} alt={v.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent"></div>
                 <div className="absolute bottom-10 left-10">
                    <h4 className="text-2xl font-black text-white">{v.title}</h4>
                    <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mt-2">Available Capacity: 800M+/Day</p>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Footer CTA */}
      <section className="py-32 px-4 relative">
        <div className="max-w-5xl mx-auto">
           <div className="relative p-16 lg:p-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-[80px] text-center overflow-hidden shadow-3xl">
              <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                 <Zap size={500} strokeWidth={0.5} color="white" />
              </div>
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-black mb-10 text-white">Dominate the <br/>Global Market.</h2>
                <p className="text-xl text-blue-100 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
                  Join 18,000+ top-tier performance marketers scaling their businesses with PixelVisionAds. Your next breakthrough campaign starts here.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-8">
                  <button className="px-12 py-6 bg-white text-blue-600 rounded-[32px] font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl">
                    Create Campaign
                  </button>
                  <button className="px-12 py-6 bg-blue-700 text-white rounded-[32px] font-black text-xs uppercase tracking-widest border border-blue-400/30 hover:bg-blue-900 transition-all">
                    Consult Strategy
                  </button>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Advertisers;
