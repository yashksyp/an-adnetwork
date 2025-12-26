
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Briefcase,
  Layers,
  Code2
} from 'lucide-react';
import GlassCard from '../../components/GlassCard';

const Partners: React.FC = () => {
  const tiers = [
    {
      title: "Technology Partners",
      desc: "Integrate your SaaS or tracking tool with our RTB environment to offer seamless solutions to mutual clients.",
      icon: <Cpu className="text-blue-500" />,
      benefits: ["API Direct Integration", "Joint Marketing", "Technical Sandbox Access"]
    },
    {
      title: "Agency Partnerships",
      desc: "Get exclusive whitelists and dedicated management for your brand's massive-scale campaigns.",
      icon: <Briefcase className="text-purple-500" />,
      benefits: ["VIP Support Channel", "Volume Rebates", "Strategic Planning Calls"]
    },
    {
      title: "Strategic Publishers",
      desc: "For content owners with over 100M monthly impressions looking for custom monetization scripts.",
      icon: <Globe className="text-emerald-500" />,
      benefits: ["Private Ad Server", "Higher Rev Share", "Custom Integration Tags"]
    }
  ];

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-20 overflow-hidden selection:bg-blue-600/30">
      <section className="max-w-7xl mx-auto px-4 mb-32 relative text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/5 rounded-full blur-[160px]"></div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-black text-blue-500 uppercase bg-blue-500/10 rounded-md border border-blue-500/20">
            <Handshake size={12} /> Partner Ecosystem
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-white">Scale <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-emerald-400">Stronger, Together.</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Join the PixelVisionAds partner network and unlock the power of a global advertising infrastructure built for the elite.
          </p>
        </motion.div>
      </section>

      {/* Ecosystem Visual */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
        {tiers.map((tier, i) => (
          <GlassCard key={i} className="flex flex-col group hover:border-blue-500/50">
             <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-10 group-hover:scale-110 transition-transform">
                {tier.icon}
             </div>
             <h3 className="text-2xl font-black mb-4">{tier.title}</h3>
             <p className="text-sm text-gray-500 leading-relaxed mb-10 flex-grow">{tier.desc}</p>
             <div className="space-y-4 mb-10">
                {tier.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-[10px] font-black uppercase text-gray-400">
                    <div className="w-1 h-1 bg-blue-500 rounded-full"></div> {b}
                  </div>
                ))}
             </div>
             <button className="w-full py-4 bg-white/5 border border-white/10 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all">
                Become a Partner
             </button>
          </GlassCard>
        ))}
      </section>

      {/* Integration Showcase */}
      <section className="py-32 px-4 bg-[#080808] border-y border-white/5 mb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
           <div className="flex-1">
              <h2 className="text-5xl font-black mb-8 leading-tight text-white">Deep Tech <br/><span className="text-blue-500">Integrations.</span></h2>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                We play well with everyone. Whether you're a tracking platform, a DMP, or an affiliate network, our high-concurrency S2S postbacks ensure 100% data sync.
              </p>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { label: "S2S Postback", icon: <Layers size={16} /> },
                   { label: "Restful API", icon: <Code2 size={16} /> },
                   { label: "Pixel Sync", icon: <Zap size={16} /> },
                   { label: "Fraud Score", icon: <ShieldCheck size={16} /> },
                 ].map((item, idx) => (
                   <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/10">
                      <div className="text-blue-500">{item.icon}</div>
                      <span className="text-[10px] font-black uppercase text-gray-300">{item.label}</span>
                   </div>
                 ))}
              </div>
           </div>
           <div className="flex-1 relative">
              <div className="p-10 bg-blue-600/5 border border-blue-500/20 rounded-[60px] text-center">
                 <div className="w-20 h-20 bg-blue-600 text-white rounded-[28px] flex items-center justify-center mx-auto mb-8 shadow-3xl shadow-blue-600/30">
                    <Handshake size={36} />
                 </div>
                 <h4 className="text-3xl font-black mb-4">Official Tracking Partners</h4>
                 <div className="flex flex-wrap justify-center gap-6 opacity-40 grayscale group-hover:grayscale-0 transition-all mt-10">
                    {/* Simplified partner text logos for demo */}
                    {["Voluum", "Binom", "Keitaro", "RedTrack", "Bemob"].map(p => (
                      <span key={p} className="text-xl font-black tracking-tighter text-white">{p}</span>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Final Partners CTA */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="relative p-20 bg-blue-600 rounded-[80px] text-center overflow-hidden shadow-3xl">
           <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              {/* Fix: Changed lowercase 'handshake' to capitalized 'Handshake' to reference the imported Lucide icon component */}
              <Handshake size={500} color="white" />
           </div>
           <div className="relative z-10">
              <h2 className="text-5xl font-black mb-8 text-white tracking-tighter">Ready to join the <br/>PVA Ecosystem?</h2>
              <p className="text-xl text-blue-100 mb-12 max-w-xl mx-auto font-medium">
                Let's discuss how we can grow together. Join 140+ strategic partners scaling global digital business.
              </p>
              <button className="px-12 py-6 bg-white text-blue-600 rounded-3xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
                 Contact Partner Management
              </button>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
