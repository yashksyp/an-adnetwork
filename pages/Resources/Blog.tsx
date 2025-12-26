
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ArrowRight, 
  Clock, 
  User, 
  Tag, 
  TrendingUp,
  MessageSquare,
  ChevronRight,
  Filter
} from 'lucide-react';
import GlassCard from '../../components/GlassCard';

const Blog: React.FC = () => {
  const [activeCat, setActiveCat] = useState('All');

  const categories = ['All', 'Industry News', 'Optimization', 'Case Studies', 'Product Updates'];

  const posts = [
    {
      id: 1,
      title: "The Future of Native Advertising in 2025",
      cat: "Industry News",
      img: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=800",
      date: "Oct 14, 2024",
      author: "Alex Rivera",
      readTime: "6 min read"
    },
    {
      id: 2,
      title: "5 Bidding Strategies for Maximum Reach",
      cat: "Optimization",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      date: "Oct 12, 2024",
      author: "Sarah Chen",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Introducing SmartLink: Automated Payouts",
      cat: "Product Updates",
      img: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
      date: "Oct 10, 2024",
      author: "Marcus Thorne",
      readTime: "4 min read"
    },
    {
      id: 4,
      title: "Scaling Push Campaigns in Tier-2 Regions",
      cat: "Optimization",
      img: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800",
      date: "Oct 08, 2024",
      author: "Alex Rivera",
      readTime: "10 min read"
    }
  ];

  const filteredPosts = activeCat === 'All' ? posts : posts.filter(p => p.cat === activeCat);

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-20 px-4">
      {/* Blog Hero */}
      <section className="max-w-7xl mx-auto mb-20 text-center lg:text-left">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">Vision <span className="text-blue-500">Blog.</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            Latest trends, technical guides, and insider network updates from the PixelVision yield engineering team.
          </p>
        </motion.div>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto mb-16 overflow-x-auto no-scrollbar py-4 border-b border-white/5">
        <div className="flex gap-4 min-w-max">
           <div className="flex items-center gap-2 px-4 py-2 text-gray-500 font-black text-[10px] uppercase tracking-widest border-r border-white/10 mr-4">
              <Filter size={14} /> Filter by:
           </div>
           {categories.map(cat => (
             <button
               key={cat}
               onClick={() => setActiveCat(cat)}
               className={`px-6 py-2.5 rounded-xl text-xs font-bold transition-all ${
                 activeCat === cat ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-500 hover:text-white'
               }`}
             >
               {cat}
             </button>
           ))}
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post, i) => (
            <motion.div 
              key={post.id} 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: i * 0.05 }}
            >
              <GlassCard className="!p-0 overflow-hidden group hover:border-blue-500/30">
                <div className="relative h-56 overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 rounded-lg text-[9px] font-black uppercase tracking-widest text-white">{post.cat}</div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 mb-4 uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.date}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-700"></span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-black mb-6 leading-tight group-hover:text-blue-500 transition-colors">{post.title}</h3>
                  <div className="flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-black text-xs text-blue-400">{post.author[0]}</div>
                        <span className="text-xs font-bold text-gray-300">{post.author}</span>
                     </div>
                     <button className="text-blue-500 hover:translate-x-2 transition-transform"><ArrowRight size={20} /></button>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      {/* Pagination */}
      <section className="max-w-7xl mx-auto flex justify-center items-center gap-4">
         <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-all opacity-50 cursor-not-allowed">
            <ChevronRight className="rotate-180" size={20} />
         </button>
         <div className="flex gap-2">
            {[1, 2, 3].map(p => (
              <button key={p} className={`w-12 h-12 rounded-xl border font-bold text-sm transition-all ${p === 1 ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white/5 border-white/10 text-gray-500 hover:text-white'}`}>
                {p}
              </button>
            ))}
         </div>
         <button className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-all">
            <ChevronRight size={20} />
         </button>
      </section>
    </div>
  );
};

export default Blog;
