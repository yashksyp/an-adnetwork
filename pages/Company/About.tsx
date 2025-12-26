
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Zap, 
  Globe, 
  ShieldCheck, 
  TrendingUp, 
  Cpu,
  Award,
  History
} from 'lucide-react';
import GlassCard from '../../components/GlassCard';

const About: React.FC = () => {
  const values = [
    { icon: <Target className="text-blue-500" />, title: "Precision First", desc: "We believe in data-driven decisions. Every impression counts towards your ultimate KPI." },
    { icon: <ShieldCheck className="text-emerald-500" />, title: "Trust & Safety", desc: "Our proprietary Guardian AI ensures a 100% brand-safe environment for all partners." },
    { icon: <Zap className="text-purple-500" />, title: "Velocity", desc: "In the fast-paced world of RTB, we provide sub-millisecond bidding and real-time stats." },
    { icon: <Cpu className="text-cyan-500" />, title: "Innovation", desc: "We don't follow industry standards; we set them with our AI-powered yield engine." },
  ];

  const milestones = [
    { year: "2018", title: "The Genesis", desc: "PixelVisionAds founded in London with a team of 3 yield engineers." },
    { year: "2020", title: "Global Expansion", desc: "Launched our North American and APAC infrastructure hubs." },
    { year: "2022", title: "Guardian AI 1.0", desc: "Released our first proprietary anti-fraud system, blocking 90% of bot traffic." },
    { year: "2024", title: "Market Leader", desc: "Serving 5B+ daily impressions to 18,000 active global partners." },
  ];

  const team = [
    { name: "Erik Vance", role: "CEO & Founder", img: "https://i.pravatar.cc/300?u=erik" },
    { name: "Sofia Chen", role: "Chief Yield Officer", img: "https://i.pravatar.cc/300?u=sofia" },
    { name: "Marcus Thorne", role: "VP of Engineering", img: "https://i.pravatar.cc/300?u=marcus" },
    { name: "Lila Rossi", role: "Head of Partnerships", img: "https://i.pravatar.cc/300?u=lila" },
  ];

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-20 overflow-hidden selection:bg-blue-600/30">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 mb-32 relative">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-black text-blue-500 uppercase bg-blue-500/10 rounded-md border border-blue-500/20">
            <Users size={12} /> Our Story
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-white leading-none">
            Architects of <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-emerald-400">Digital Growth.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Since 2018, we've been bridging the gap between premium advertisers and high-performance publishers with cutting-edge ad technology.
          </p>
        </motion.div>
      </section>

      {/* Stats Quick Grid */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 mb-32">
        {[
          { label: "Founded", val: "2018" },
          { label: "Global Offices", val: "6" },
          { label: "Team Members", val: "120+" },
          { label: "Uptime", val: "99.99%" }
        ].map((s, i) => (
          <div key={i} className="p-8 bg-white/5 border border-white/5 rounded-3xl text-center">
             <p className="text-3xl font-black text-white mb-1">{s.val}</p>
             <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Values Grid */}
      <section className="py-32 px-4 bg-[#080808] border-y border-white/5 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">Our Core Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto">The principles that drive our engineering and partnership philosophy every day.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <GlassCard key={i} className="text-center group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-5xl mx-auto px-4 mb-40">
        <h2 className="text-4xl font-black mb-20 text-center">Our Evolution</h2>
        <div className="relative border-l border-white/10 ml-6 pl-12 space-y-20">
          {milestones.map((m, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="absolute -left-[61px] top-0 w-6 h-6 bg-blue-600 rounded-full border-4 border-[#050505] shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
              <span className="text-4xl font-black text-blue-500 mb-4 block leading-none">{m.year}</span>
              <h4 className="text-2xl font-bold mb-4">{m.title}</h4>
              <p className="text-gray-400 leading-relaxed max-w-lg">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leadership Team */}
      <section className="max-w-7xl mx-auto px-4 mb-40">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black mb-4 text-white">The Minds Behind PVA</h2>
          <p className="text-gray-500">A global team of ad tech veterans, data scientists, and creative thinkers.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((person, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative rounded-[40px] overflow-hidden border border-white/10 mb-6 aspect-square grayscale group-hover:grayscale-0 transition-all duration-700">
                <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60"></div>
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{person.name}</h4>
              <p className="text-xs text-blue-500 font-bold uppercase tracking-widest">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4 text-center">
        <div className="p-16 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-[60px] border border-white/5">
           <Award size={48} className="text-blue-500 mx-auto mb-6" />
           <h2 className="text-4xl font-black mb-6">Want to be part of our story?</h2>
           <p className="text-gray-400 mb-10 max-w-sm mx-auto">We're always looking for brilliant minds to join our global engineering and sales teams.</p>
           <button className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-blue-600/20">View Open Positions</button>
        </div>
      </section>
    </div>
  );
};

export default About;
