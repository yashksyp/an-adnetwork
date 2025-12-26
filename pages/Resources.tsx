
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  BookOpen, 
  FileText, 
  Video, 
  Code2, 
  HelpCircle, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Zap, 
  Globe, 
  Clock, 
  Sparkles,
  ChevronRight,
  Download,
  Terminal,
  ExternalLink
} from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Content' },
    { id: 'guides', label: 'Guides' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'blog', label: 'Network Blog' },
    { id: 'dev', label: 'Developer API' }
  ];

  const blogPosts = [
    {
      id: 1,
      category: 'blog',
      tag: 'Market Trends',
      title: "The 2024 State of Push Advertising: Key Insights",
      desc: "An in-depth look at how OS changes are reshaping push delivery and what it means for your ROI.",
      image: "https://images.unsplash.com/photo-1551288049-bbdac8a28a1e?auto=format&fit=crop&q=80&w=800",
      author: "Alex Rivera",
      date: "Oct 12, 2024"
    },
    {
      id: 2,
      category: 'case-studies',
      tag: 'Success Story',
      title: "How a Tier 2 E-commerce Brand Scaled 450% via Popunder",
      desc: "See the exact targeting settings and bidding strategy used to dominate the Brazilian market.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      author: "Sarah Chen",
      date: "Oct 10, 2024"
    },
    {
      id: 3,
      category: 'guides',
      tag: 'Optimization',
      title: "Mastering Native Widget Creatives for High CTR",
      desc: "The psychology behind winning headlines and how to blend seamlessly with premium publisher content.",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
      author: "Marcus Thorne",
      date: "Oct 08, 2024"
    }
  ];

  const filteredPosts = blogPosts.filter(p => 
    (activeCategory === 'all' || p.category === activeCategory) &&
    (p.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-[#050505] selection:bg-blue-600/30 min-h-screen">
      {/* Search Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden px-4">
        <div className="absolute inset-0 z-0">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/5 rounded-full blur-[160px]"></div>
           <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase bg-blue-400/5 rounded-lg border border-blue-400/20">
              <Sparkles size={14} className="animate-pulse" /> Knowledge Is Revenue
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-12 leading-[0.9] tracking-tighter">
              PixelVision <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-200 to-emerald-400 text-7xl md:text-9xl">Resource Hub.</span>
            </h1>
            
            <div className="relative group max-w-2xl mx-auto">
               <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-[30px] blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
               <div className="relative flex items-center bg-[#0a0a0a] border border-white/10 rounded-[28px] overflow-hidden p-2">
                 <Search className="ml-6 text-gray-500" size={24} />
                 <input 
                   type="text" 
                   placeholder="Search guides, case studies, or API docs..."
                   className="w-full bg-transparent border-none py-5 px-6 text-lg font-bold focus:outline-none focus:ring-0 text-white placeholder-gray-600"
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                 />
                 <button className="mr-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl text-sm font-black uppercase tracking-widest transition-all">
                    Search
                 </button>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Filters */}
      <section className="sticky top-20 z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-4 px-4">
         <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
            {categories.map(cat => ( activeCategory === cat.id ? 
              <motion.button 
                key={cat.id}
                layoutId="activeTab"
                onClick={() => setActiveCategory(cat.id)}
                className="px-8 py-3 bg-blue-600 rounded-xl text-xs font-black uppercase tracking-widest text-white shadow-lg shadow-blue-600/20 transition-all"
              >
                {cat.label}
              </motion.button>
              :
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className="px-8 py-3 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-black uppercase tracking-widest text-gray-500 hover:text-white transition-all border border-white/5"
              >
                {cat.label}
              </button>
            ))}
         </div>
      </section>

      {/* Featured Insight Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, i) => (
                <motion.div
                  key={post.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <GlassCard className="!p-0 border-white/5 group hover:border-blue-500/30 overflow-hidden">
                    <div className="relative h-64 overflow-hidden">
                       <img src={post.image} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
                       <div className="absolute top-6 left-6 px-3 py-1 bg-blue-600 rounded-lg text-[10px] font-black uppercase tracking-widest text-white">
                          {post.tag}
                       </div>
                    </div>
                    <div className="p-8">
                       <div className="flex items-center gap-4 mb-6">
                         <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center font-black text-[10px] text-blue-400">
                           {post.author.charAt(0)}
                         </div>
                         <div>
                            <p className="text-[10px] font-black text-white uppercase tracking-tighter leading-none">{post.author}</p>
                            <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest mt-1">{post.date}</p>
                         </div>
                       </div>
                       <h3 className="text-2xl font-black mb-4 leading-tight group-hover:text-blue-500 transition-colors">{post.title}</h3>
                       <p className="text-sm text-gray-500 leading-relaxed mb-8 line-clamp-2">{post.desc}</p>
                       <button className="flex items-center gap-2 text-xs font-black text-white uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                          Read Full Article <ArrowRight size={14} className="text-blue-500" />
                       </button>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Developer API Spotlight */}
      <section className="py-32 px-4 bg-[#080808] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
           <Terminal size={400} />
        </div>
        
        <div className="max-w-7xl mx-auto">
           <div className="flex flex-col lg:flex-row items-center gap-20">
              <div className="flex-1">
                 <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-[10px] font-black text-emerald-500 uppercase bg-emerald-500/10 rounded-md border border-emerald-500/20">
                    <Code2 size={12} /> RESTful Infrastructure
                 </div>
                 <h2 className="text-5xl font-black mb-8 leading-tight">Built For <br/><span className="text-emerald-500">Automation.</span></h2>
                 <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl">
                   Programmatically manage your campaigns, pull real-time statistics, and optimize bids via our clean, high-concurrency API.
                 </p>
                 
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                    {[
                      { icon: <Zap size={20} />, title: "Low Latency", desc: "Global edge network ensures <50ms response times." },
                      { icon: <Terminal size={20} />, title: "JSON Standard", desc: "Seamless integration with any stack." },
                      { icon: <Globe size={20} />, title: "Webhooks", desc: "Real-time notifications for conversion events." },
                      { icon: <Users size={20} />, title: "Multi-User", desc: "Fine-grained permissions for team access." }
                    ].map((item, i) => (
                      <div key={i} className="space-y-3">
                         <div className="text-emerald-500">{item.icon}</div>
                         <h4 className="font-bold text-white uppercase text-xs tracking-widest">{item.title}</h4>
                         <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                 </div>
                 
                 <button className="px-10 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-xl">
                    View API Documentation
                 </button>
              </div>

              <div className="flex-1 relative w-full">
                 <div className="p-1 bg-gradient-to-br from-emerald-500/20 to-transparent rounded-[40px] shadow-3xl overflow-hidden">
                    <div className="bg-[#0a0a0a] p-8 rounded-[39px] font-mono text-sm">
                       <div className="flex gap-2 mb-8">
                          <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                          <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                       </div>
                       <div className="space-y-4">
                          <p className="text-emerald-500 font-bold">// Fetch Campaign Analytics</p>
                          <p className="text-gray-400">
                            <span className="text-blue-400">GET</span> /v2/stats/campaigns <br/>
                            <span className="text-gray-600">Authorization: Bearer PV_KEY_8293...</span>
                          </p>
                          <div className="bg-black/50 p-6 rounded-2xl border border-white/5 text-xs text-gray-300">
                             <pre>
{`{
  "status": "success",
  "data": {
    "impressions": 1420500,
    "clicks": 42050,
    "ctr": "2.96%",
    "conversions": 1240,
    "roi": "142%"
  }
}`}
                             </pre>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Resource Quick Categories */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <HelpCircle />, title: "Help Center", count: "140+ Articles", color: "blue" },
              { icon: <Video />, title: "Video Tutorials", count: "24 Webinars", color: "emerald" },
              { icon: <FileText />, title: "Product Roadmap", count: "Updated Monthly", color: "purple" },
              { icon: <BookOpen />, title: "Glossary", count: "100+ Definitions", color: "amber" }
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white/5 border border-white/10 rounded-[40px] hover:border-blue-500/30 transition-all group cursor-pointer text-center">
                 <div className={`w-16 h-16 bg-${item.color}-500/10 text-${item.color}-500 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform`}>
                    {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
                 </div>
                 <h3 className="text-xl font-black mb-2">{item.title}</h3>
                 <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">{item.count}</p>
                 <ChevronRight className="mx-auto mt-6 text-gray-600 group-hover:text-blue-500 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Stay Updated CTA */}
      <section className="py-40 px-4">
        <div className="max-w-5xl mx-auto">
           <div className="relative p-16 lg:p-24 bg-blue-600 rounded-[80px] text-center overflow-hidden shadow-3xl">
              <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                 <Users size={500} strokeWidth={0.5} color="white" />
              </div>
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-black mb-8 text-white tracking-tighter">Stay Ahead <br/>Of The Curve.</h2>
                <p className="text-xl text-blue-100 mb-12 max-w-xl mx-auto font-medium leading-relaxed">
                  Get our monthly yield reports and network updates delivered directly to your inbox. No spam, just performance.
                </p>
                
                <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    type="email" 
                    placeholder="Enter your work email"
                    className="flex-1 bg-white/10 border border-white/20 rounded-2xl py-5 px-8 outline-none focus:border-white transition-all text-white placeholder-blue-200 font-bold"
                  />
                  <button className="px-10 py-5 bg-white text-blue-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl">
                    Subscribe
                  </button>
                </form>
                
                <p className="text-[10px] text-blue-200 mt-8 font-black uppercase tracking-[0.2em] opacity-60">
                   Join 140,000+ top affiliates and webmasters.
                </p>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;
