
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe2, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  DollarSign, 
  Users, 
  ArrowRight, 
  Cpu, 
  Layers, 
  Smartphone, 
  Layout, 
  MousePointer2,
  CheckCircle2,
  Clock,
  Code2,
  Lock
} from 'lucide-react';

const Publishers: React.FC = () => {
  const yieldFeatures = [
    { 
      icon: <Cpu size={24} />, 
      title: "AI-Driven Optimization", 
      desc: "Our neural engine predicts user behavior to serve the highest-paying ad for every single visit." 
    },
    { 
      icon: <Globe2 size={24} />, 
      title: "100% Global Fill Rate", 
      desc: "Monetize traffic from every corner of the world with our massive pool of 18k+ advertisers." 
    },
    { 
      icon: <ShieldCheck size={24} />, 
      title: "Brand Safe Inventory", 
      desc: "Strict automated and manual moderation ensures your site only shows premium, non-intrusive ads." 
    },
    { 
      icon: <Zap size={24} />, 
      title: "Lightweight Ad Tech", 
      desc: "Our tags are engineered for speed, ensuring zero impact on your site's core web vitals and SEO." 
    },
    { 
      icon: <Clock size={24} />, 
      title: "Weekly Net-7 Payouts", 
      desc: "Get paid like clockwork every week via Wire, PayPal, USDT, or Bitcoin with a low $50 threshold." 
    },
    { 
      icon: <Users size={24} />, 
      title: "Dedicated Yield Manager", 
      desc: "Expert consultation to help you optimize your ad placements and maximize revenue potential." 
    },
  ];

  const integrationSteps = [
    {
      title: "Direct JS Tag",
      desc: "Standard copy-paste integration. Perfect for blogs and standard websites.",
      code: "<script src='https://pva.io/sdk.js' data-zone='8293'></script>"
    },
    {
      title: "Advanced API",
      desc: "Full programmatic control for mobile apps and high-performance platforms.",
      code: "GET /v1/ads?format=push&geo=us&os=ios"
    }
  ];

  return (
    <div className="bg-[#050505] selection:bg-emerald-600/30">
      {/* Immersive Hero Section */}
      <section className="relative pt-40 pb-32 overflow-hidden px-4">
        {/* Dynamic Abstract Background */}
        <div className="absolute inset-0 z-0 opacity-20">
           <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(16,185,129,0.1),transparent_70%)]"></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-overlay"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-[10px] font-black tracking-[0.2em] text-emerald-400 uppercase bg-emerald-400/5 rounded-lg border border-emerald-400/20">
                <TrendingUp size={14} className="animate-bounce" /> Highest Yield Optimization
              </div>
              <h1 className="text-6xl md:text-[5.5rem] font-black mb-8 leading-[0.9] tracking-tighter">
                Turn Every <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-emerald-200 to-emerald-400">Impression</span> <br/>Into Profit.
              </h1>
              <p className="text-xl text-gray-400 max-w-xl mb-12 leading-relaxed font-medium">
                Access the world's highest-paying demand sources. Our proprietary Smart Auction technology ensures you always receive the top market eCPMs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                 <button className="px-12 py-6 bg-emerald-600 rounded-3xl font-black text-white hover:bg-emerald-500 transition-all flex items-center justify-center gap-3 group active:scale-95 shadow-[0_0_60px_rgba(16,185,129,0.25)]">
                    Start Monetizing <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                 </button>
                 <button className="px-12 py-6 bg-white/5 border border-white/10 rounded-3xl font-black text-white hover:bg-white/10 transition-all">
                    Calculate Earnings
                 </button>
              </div>
            </motion.div>

            {/* Performance Visualizer */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 hidden lg:block"
            >
              <div className="relative p-1 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-[60px] shadow-3xl overflow-hidden backdrop-blur-3xl border border-white/5">
                 <div className="bg-[#0a0a0a]/90 rounded-[59px] p-10">
                    <div className="flex justify-between items-center mb-12">
                      <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/20"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/10"></div>
                      </div>
                      <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Revenue Forecast // Active Inventory</span>
                    </div>
                    
                    <div className="space-y-8">
                       {[
                         { label: 'Tier 1 Traffic', val: '$8.42 eCPM', w: '90%' },
                         { label: 'Mobile Apps', val: '$5.12 eCPM', w: '65%' },
                         { label: 'Direct Display', val: '$3.28 eCPM', w: '40%' }
                       ].map((item, idx) => (
                         <div key={idx} className="space-y-3">
                           <div className="flex justify-between text-xs font-black uppercase text-gray-400">
                             <span>{item.label}</span>
                             <span className="text-emerald-500">{item.val}</span>
                           </div>
                           <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden">
                              <motion.div initial={{ width: 0 }} animate={{ width: item.w }} transition={{ delay: 1 + idx*0.1, duration: 1 }} className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                           </div>
                         </div>
                       ))}
                    </div>
                    
                    <div className="mt-12 pt-10 border-t border-white/5 grid grid-cols-2 gap-8">
                       <div>
                         <p className="text-[10px] font-black text-gray-600 uppercase mb-2 tracking-widest">Weekly Payout</p>
                         <p className="text-3xl font-black text-white">$4,820.00</p>
                       </div>
                       <div className="text-right">
                         <p className="text-[10px] font-black text-gray-600 uppercase mb-2 tracking-widest">Network Fill</p>
                         <p className="text-3xl font-black text-emerald-500">100.0%</p>
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Yield Features Matrix */}
      <section className="py-32 px-4 bg-[#080808]/50 relative border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black mb-6">Built to Outperform</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Our infrastructure is engineered specifically for publishers who refuse to compromise on speed or revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {yieldFeatures.map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 bg-[#0a0a0a] border border-white/5 rounded-[48px] hover:border-emerald-500/30 transition-all group shadow-2xl"
              >
                 <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-3xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform group-hover:bg-emerald-600 group-hover:text-white">
                    {feature.icon}
                 </div>
                 <h3 className="text-2xl font-black mb-4">{feature.title}</h3>
                 <p className="text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Showcase */}
      <section className="py-40 px-4 relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-24">
           <div className="flex-1">
             <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-black text-blue-400 uppercase bg-blue-400/10 rounded-md border border-blue-400/20">
                <Code2 size={12} /> Developer Ready
             </div>
             <h2 className="text-5xl font-black mb-8 leading-tight">One Tag. <br/>Infinite Possibilities.</h2>
             <p className="text-gray-400 text-lg mb-10 leading-relaxed">
               Monetizing shouldn't be a technical hurdle. Whether you need a simple JS tag or a complex API-first integration, we provide the cleanest tools in the advertising industry.
             </p>
             <div className="space-y-8">
               {integrationSteps.map((step, idx) => (
                 <div key={idx} className="space-y-4">
                    <h4 className="text-xl font-bold flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-600/10 text-emerald-500 rounded-lg flex items-center justify-center text-xs">0{idx+1}</div>
                      {step.title}
                    </h4>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                    <div className="bg-[#0a0a0a] border border-white/10 p-5 rounded-2xl font-mono text-[10px] text-emerald-400/80 overflow-x-auto whitespace-nowrap">
                       {step.code}
                    </div>
                 </div>
               ))}
             </div>
           </div>

           <div className="flex-1 relative">
             <div className="p-12 bg-white/5 rounded-[64px] border border-white/10 relative z-10">
                <div className="aspect-square bg-gradient-to-br from-emerald-500/20 to-emerald-900/20 rounded-[48px] flex items-center justify-center border border-emerald-500/10 overflow-hidden relative">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800')] opacity-30 mix-blend-overlay"></div>
                   <div className="relative text-center p-10">
                      <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-3xl shadow-emerald-500/50">
                         <Zap size={48} className="text-white fill-current" />
                      </div>
                      <h4 className="text-3xl font-black mb-4">Speed is Revenue.</h4>
                      <p className="text-gray-400 font-medium">Our tags load 4x faster than the industry average.</p>
                   </div>
                </div>
             </div>
             <div className="absolute -inset-10 bg-emerald-500/5 rounded-full blur-[120px] -z-10"></div>
           </div>
        </div>
      </section>

      {/* Payment Security Trust Section */}
      <section className="py-32 px-4 bg-[#0a0a0a] relative border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-20">
             <div className="flex-1 order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-4">
                   {[
                     { name: 'Wire Transfer', icon: <DollarSign /> },
                     { name: 'USDT (TRC20)', icon: <Layers /> },
                     { name: 'PayPal', icon: <ArrowRight /> },
                     { name: 'Bitcoin', icon: <Cpu /> }
                   ].map(m => (
                     <div key={m.name} className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center text-center gap-4 group hover:border-emerald-500/30 transition-all">
                        <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-2xl group-hover:scale-110 transition-transform">{m.icon}</div>
                        <p className="text-sm font-black text-gray-300 uppercase tracking-widest">{m.name}</p>
                     </div>
                   ))}
                </div>
             </div>
             
             <div className="flex-1 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-black text-emerald-500 uppercase bg-emerald-500/10 rounded-md border border-emerald-500/20">
                   <Lock size={12} /> Guaranteed Weekly Payouts
                </div>
                <h2 className="text-5xl font-black mb-8 leading-tight">Reliable Cashflow. <br/><span className="text-emerald-500">No Excuses.</span></h2>
                <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                  We understand that capital is the fuel for your content. That's why we've automated our payout pipeline to ensure your earnings reach your wallet every Monday, without fail.
                </p>
                <div className="space-y-6">
                   {[
                     "Minimum Withdrawal: $50",
                     "Automatic Net-7 Calculations",
                     "Transparent Transaction Logs",
                     "Zero Processing Fees on Crypto"
                   ].map(item => (
                     <div key={item} className="flex items-center gap-4 text-sm font-black text-gray-300 uppercase tracking-widest">
                        <CheckCircle2 className="text-emerald-500" size={20} /> {item}
                     </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Global Supply CTA */}
      <section className="py-40 px-4 relative">
        <div className="max-w-5xl mx-auto">
           <div className="relative p-20 lg:p-32 bg-emerald-600 rounded-[80px] text-center overflow-hidden shadow-[0_0_100px_rgba(16,185,129,0.3)]">
              <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                 <Globe2 size={600} strokeWidth={0.5} color="white" />
              </div>
              <div className="relative z-10">
                <h2 className="text-5xl md:text-8xl font-black mb-10 text-white leading-[0.9] tracking-tighter">Your Traffic <br/>Is Worth More.</h2>
                <p className="text-xl text-emerald-100 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
                  Stop leaving money on the table with outdated ad networks. Join the AI-first monetization platform designed for modern publishers.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-8">
                  <button className="px-12 py-6 bg-white text-emerald-700 rounded-[32px] font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl">
                    Create Publisher Account
                  </button>
                  <button className="px-12 py-6 bg-emerald-700 text-white rounded-[32px] font-black text-xs uppercase tracking-widest border border-emerald-400/30 hover:bg-emerald-800 transition-all">
                    Consult Optimization
                  </button>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Publishers;
