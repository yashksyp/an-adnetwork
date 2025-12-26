
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Heart, 
  Coffee, 
  Monitor, 
  Globe, 
  Zap, 
  ArrowRight, 
  Cpu,
  Star,
  Plus
} from 'lucide-react';
import GlassCard from '../../components/GlassCard';

const Careers: React.FC = () => {
  const perks = [
    { icon: <Monitor className="text-blue-500" />, title: "Hybrid / Remote", desc: "Work from one of our global hubs or from the comfort of your home." },
    { icon: <Coffee className="text-amber-500" />, title: "Unlimited Fuel", desc: "Free specialty coffee, snacks, and healthy lunches at our offices." },
    { icon: <Heart className="text-rose-500" />, title: "Wellness Focus", desc: "Comprehensive health insurance and gym membership reimbursement." },
    { icon: <Cpu className="text-cyan-500" />, title: "Tech Allowance", desc: "Get the latest Apple hardware and a budget for your home office setup." },
  ];

  const jobs = [
    { id: 'senior-yield-engineer', title: "Senior Yield Engineer", location: "London / Remote", type: "Full-Time", dept: "Engineering" },
    { id: 'strategic-account-manager', title: "Strategic Account Manager", location: "New York", type: "Full-Time", dept: "Sales" },
    { id: 'junior-data-scientist', title: "Junior Data Scientist", location: "Singapore", type: "Full-Time", dept: "Data & AI" },
    { id: 'content-moderation-lead', title: "Content Moderation Lead", location: "Limassol", type: "Full-Time", dept: "Operations" },
  ];

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-20 overflow-hidden selection:bg-blue-600/30">
      <section className="max-w-7xl mx-auto px-4 mb-32 relative text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-600/5 rounded-full blur-[160px]"></div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-black text-purple-500 uppercase bg-purple-500/10 rounded-md border border-purple-500/20">
            <Rocket size={12} /> Work at PixelVision
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-white">Build the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Future of Ad Tech.</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We're a team of high-performers solving complex high-concurrency challenges. Join us in building the world's most transparent advertising ecosystem.
          </p>
        </motion.div>
      </section>

      {/* Perks Section */}
      <section className="py-32 px-4 bg-[#080808] border-y border-white/5 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">Why You'll Love It Here</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Beyond the code and the campaigns, we invest in our people's happiness and growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {perks.map((p, i) => (
              <GlassCard key={i} className="text-center group">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
                  {p.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="max-w-5xl mx-auto px-4 mb-40">
        <div className="flex justify-between items-end mb-16">
           <div>
              <h2 className="text-4xl font-black mb-4">Open Positions</h2>
              <p className="text-gray-500">Showing {jobs.length} current openings across 4 locations.</p>
           </div>
           <div className="hidden md:flex gap-2">
              <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase text-gray-500">All Departments</button>
              <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase text-gray-500">All Locations</button>
           </div>
        </div>

        <div className="space-y-4">
          {jobs.map((job, i) => (
            <Link key={job.id} to={`/careers/${job.id}`}>
              <motion.div 
                whileHover={{ x: 10 }}
                className="group bg-white/[0.02] border border-white/5 p-8 rounded-[32px] flex flex-col md:flex-row justify-between items-center gap-6 hover:border-purple-500/30 transition-all cursor-pointer mb-4"
              >
                <div>
                    <span className="text-[10px] font-black text-purple-500 uppercase tracking-widest block mb-2">{job.dept}</span>
                    <h4 className="text-2xl font-black text-white">{job.title}</h4>
                </div>
                <div className="flex flex-col md:items-end text-center md:text-right gap-2">
                    <div className="flex gap-4">
                      <span className="text-xs font-bold text-gray-500 flex items-center gap-1"><Globe size={14} /> {job.location}</span>
                      <span className="text-xs font-bold text-gray-500 flex items-center gap-1"><Star size={14} /> {job.type}</span>
                    </div>
                    <div className="text-purple-500 transition-opacity flex items-center gap-2 font-black text-[10px] uppercase">
                      View Details <ArrowRight size={14} />
                    </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white/5 border border-white/5 rounded-3xl text-center">
           <p className="text-sm text-gray-400">Don't see a role that fits? We're always looking for talent. Send an open application to <span className="text-purple-500 font-bold">careers@pixelvisionads.com</span></p>
        </div>
      </section>

      {/* Culture Image / Bottom */}
      <section className="max-w-7xl mx-auto px-4 mb-40">
        <div className="relative rounded-[60px] overflow-hidden aspect-[21/9] border border-white/10">
           <img 
             src="https://images.unsplash.com/photo-1522071823991-b9671f9911be?auto=format&fit=crop&q=80&w=2000" 
             className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
             alt="Team Culture"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
           <div className="absolute bottom-12 left-12">
              <h3 className="text-4xl font-black text-white">Join the Revolution.</h3>
              <p className="text-gray-400 font-bold mt-2">Diversity. Ambition. Excellence.</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
