
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Briefcase, 
  Coins, 
  ChevronRight, 
  Send, 
  CheckCircle2, 
  FileText,
  Zap,
  Globe,
  Sparkles,
  Cpu,
  ShieldCheck,
  Rocket,
  Target,
  Terminal,
  Layers
} from 'lucide-react';

const JOBS_DATA: Record<string, any> = {
  'senior-yield-engineer': {
    title: "Senior Yield Engineer",
    location: "London / Remote",
    type: "Full-Time",
    dept: "Engineering",
    salary: "$120k - $160k",
    mission: "Architecting the heartbeat of global real-time bidding infrastructure.",
    description: "You'll build and optimize high-concurrency auction logic processing billions of requests in milliseconds. This isn't just coding; it's high-stakes digital architecture.",
    responsibilities: [
      { title: "RTB Logic", desc: "Maintain high-performance bidding algorithms with Go/Rust." },
      { title: "Data Pipelines", desc: "Optimize streams processing 5B+ daily events." },
      { title: "Neural Bidding", desc: "Implement machine learning models for yield management." },
      { title: "System Resilience", desc: "Ensure 99.99% uptime for mission-critical nodes." }
    ],
    requirements: [
      "5+ years of low-latency systems experience.",
      "Expertise in OpenRTB and auction theory.",
      "Deep knowledge of Kafka, ClickHouse, and Redis.",
      "Passion for sub-millisecond execution."
    ],
    techStack: ["Golang", "Rust", "Kafka", "ClickHouse", "Redis", "Terraform", "Kubernetes", "gRPC"]
  },
  'strategic-account-manager': {
    title: "Strategic Account Manager",
    location: "New York",
    type: "Full-Time",
    dept: "Sales",
    salary: "$90k - $130k + Bonus",
    mission: "Scaling ROI for the world's most ambitious brands.",
    description: "Join our elite sales team to manage high-volume advertiser partnerships. You'll act as a strategic consultant, helping brands scale their ROI globally.",
    responsibilities: [
      { title: "Portfolio Growth", desc: "Manage top-tier advertiser accounts and scale spend." },
      { title: "ROI Analysis", desc: "Provide data-driven insights to improve client performance." },
      { title: "Strategic Upsell", desc: "Identify and capture new growth opportunities." },
      { title: "Global Events", desc: "Represent PVA at industry summits worldwide." }
    ],
    requirements: [
      "3+ years in Ad Tech or Performance Marketing.",
      "Proven history of managing $1M+ annual portfolios.",
      "Excellent data storytelling and client relation skills.",
      "Deep understanding of CPA, CPC, and CPM models."
    ],
    techStack: ["Salesforce", "Tableau", "Looker", "LinkedIn Navigator", "Slack", "G-Suite"]
  },
  'junior-data-scientist': {
    title: "Junior Data Scientist",
    location: "Singapore",
    type: "Full-Time",
    dept: "Data & AI",
    salary: "$70k - $95k",
    mission: "Decoding patterns in the chaos of global ad traffic.",
    description: "Perfect for a brilliant mind eager to tackle 'big data' for real. You'll work on fraud detection and user behavior modeling.",
    responsibilities: [
      { title: "SIVT Detection", desc: "Build models to identify sophisticated invalid traffic." },
      { title: "User Profiling", desc: "Develop interest profiles based on browsing metadata." },
      { title: "Auto-Reporting", desc: "Automate intelligence pipelines for yield teams." },
      { title: "AI Deployment", desc: "Assist in rolling out Guardian AI 3.0 updates." }
    ],
    requirements: [
      "Degree in Math, Stats, or Computer Science.",
      "Proficiency in Python, SQL, and PyTorch.",
      "Curiosity about behavioral economics.",
      "Ability to iterate fast in a high-growth environment."
    ],
    techStack: ["Python", "PyTorch", "SQL", "BigQuery", "Scikit-learn", "Pandas", "AWS SageMaker"]
  }
};

const JobDetails: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();
  const navigate = useNavigate();
  const [activeStage, setActiveStage] = useState(0); // 0: Overview, 1: Impact, 2: Stack, 3: Apply
  const [isApplied, setIsApplied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const job = jobId ? JOBS_DATA[jobId] : null;

  if (!job) {
    return (
      <div className="min-h-screen pt-40 text-center bg-[#050505]">
        <h2 className="text-4xl font-black mb-4">Job Not Found</h2>
        <Link to="/careers" className="text-blue-500 font-bold hover:underline">Back to Careers</Link>
      </div>
    );
  }

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsApplied(true);
    }, 2000);
  };

  const stages = [
    { label: "The Role", icon: <Briefcase size={16} /> },
    { label: "The Impact", icon: <Target size={16} /> },
    { label: "The Stack", icon: <Terminal size={16} /> },
    { label: "Join Us", icon: <Rocket size={16} /> },
  ];

  const slideVariants: Variants = {
    initial: { opacity: 0, x: 50, filter: 'blur(10px)' },
    animate: { opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, x: -50, filter: 'blur(10px)', transition: { duration: 0.4 } }
  };

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-40 selection:bg-blue-600/30 overflow-hidden">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-1/4 -left-1/4 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[160px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 h-full">
        {/* Breadcrumb */}
        <Link 
          to="/careers" 
          className="inline-flex items-center gap-2 text-xs font-black text-gray-600 hover:text-white uppercase tracking-widest transition-colors mb-10 group"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to HQ
        </Link>

        {/* Header Branding */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
           <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-[10px] font-black text-blue-400 uppercase bg-blue-400/10 rounded border border-blue-400/20">
                <Sparkles size={12} className="animate-pulse" /> Mission Briefing
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9]">
                {job.title}
              </h1>
           </div>
           <div className="flex gap-4">
              <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl">
                 <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Status</p>
                 <p className="text-xs font-bold text-blue-500 uppercase">Priority Hire</p>
              </div>
              <div className="px-5 py-3 bg-white/5 border border-white/10 rounded-2xl">
                 <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Compensation</p>
                 <p className="text-xs font-bold text-white uppercase">{job.salary}</p>
              </div>
           </div>
        </div>

        {/* Main Immersive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Stage Navigator (Left) */}
          <aside className="lg:col-span-3 space-y-4">
             {stages.map((stage, idx) => (
               <button
                 key={idx}
                 onClick={() => setActiveStage(idx)}
                 className={`w-full flex items-center justify-between p-6 rounded-[32px] border transition-all duration-500 group relative overflow-hidden ${
                   activeStage === idx 
                   ? 'bg-blue-600 border-blue-500 shadow-3xl shadow-blue-600/20' 
                   : 'bg-white/[0.02] border-white/5 hover:border-white/20'
                 }`}
               >
                 {activeStage === idx && (
                   <motion.div layoutId="btnGlow" className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
                 )}
                 <div className="flex items-center gap-4 relative z-10">
                    <div className={`p-2 rounded-xl ${activeStage === idx ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-500 group-hover:text-blue-500 transition-colors'}`}>
                       {stage.icon}
                    </div>
                    <span className={`text-sm font-black uppercase tracking-widest ${activeStage === idx ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                       {stage.label}
                    </span>
                 </div>
                 <ChevronRight className={`transition-all duration-500 ${activeStage === idx ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} size={16} />
               </button>
             ))}

             <div className="mt-8 p-8 bg-blue-600/5 border border-blue-500/10 rounded-[40px] space-y-4">
                <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">Context</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400">
                    <MapPin size={14} /> {job.location}
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400">
                    <Clock size={14} /> {job.type}
                  </div>
                  <div className="flex items-center gap-3 text-[11px] font-bold text-gray-400">
                    <Layers size={14} /> {job.dept}
                  </div>
                </div>
             </div>
          </aside>

          {/* Main Stage (Right) */}
          <main className="lg:col-span-9 bg-[#0a0a0a] border border-white/5 rounded-[60px] p-8 lg:p-20 shadow-3xl relative overflow-hidden min-h-[600px]">
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                <Zap size={400} />
             </div>
             
             <AnimatePresence mode="wait">
               {activeStage === 0 && (
                 <motion.div 
                   key="role" variants={slideVariants} initial="initial" animate="animate" exit="exit"
                   className="space-y-12"
                 >
                    <div className="space-y-6">
                      <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1]">
                        The <span className="text-blue-500">Mission.</span>
                      </h2>
                      <p className="text-2xl font-bold text-gray-300 italic max-w-3xl border-l-4 border-blue-600 pl-8 leading-relaxed">
                        "{job.mission}"
                      </p>
                    </div>
                    <div className="space-y-6 text-xl text-gray-500 leading-relaxed font-medium max-w-2xl">
                       <p>{job.description}</p>
                       <p>We are looking for a visionary who understands that every microsecond of latency is lost opportunity.</p>
                    </div>
                    <button 
                      onClick={() => setActiveStage(1)}
                      className="px-10 py-5 bg-white text-black rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl"
                    >
                      Explore the Impact
                    </button>
                 </motion.div>
               )}

               {activeStage === 1 && (
                 <motion.div 
                   key="impact" variants={slideVariants} initial="initial" animate="animate" exit="exit"
                   className="space-y-12"
                 >
                    <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1]">
                      Your <span className="text-emerald-500">Impact.</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       {job.responsibilities.map((r: any, idx: number) => (
                         <motion.div 
                           key={idx}
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.1 } }}
                           className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px] group hover:border-emerald-500/30 transition-all"
                         >
                            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                               <CheckCircle2 size={24} />
                            </div>
                            <h4 className="text-xl font-black text-white mb-2">{r.title}</h4>
                            <p className="text-sm text-gray-500 font-bold leading-relaxed">{r.desc}</p>
                         </motion.div>
                       ))}
                    </div>
                    <div className="p-10 bg-white/5 border border-white/10 rounded-[40px] space-y-6">
                       <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 flex items-center gap-2">
                          <ShieldCheck size={16} className="text-emerald-500" /> Success Metrics
                       </h4>
                       <div className="flex flex-wrap gap-8">
                          {job.requirements.map((req: string, i: number) => (
                            <div key={i} className="flex items-center gap-3 text-xs font-bold text-gray-300">
                               <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {req}
                            </div>
                          ))}
                       </div>
                    </div>
                 </motion.div>
               )}

               {activeStage === 2 && (
                 <motion.div 
                   key="stack" variants={slideVariants} initial="initial" animate="animate" exit="exit"
                   className="space-y-12"
                 >
                    <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1]">
                      The <span className="text-purple-500">Stack.</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl font-medium">
                      Our ecosystem is built for scale. We leverage the fastest technologies to ensure zero bottlenecks in our global RTB network.
                    </p>
                    <div className="flex flex-wrap gap-4">
                       {job.techStack.map((tech: string, i: number) => (
                         <motion.div
                           key={tech}
                           initial={{ opacity: 0, scale: 0.8 }}
                           animate={{ opacity: 1, scale: 1, transition: { delay: i * 0.05 } }}
                           whileHover={{ y: -5, scale: 1.05 }}
                           className="px-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm font-black text-gray-300 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all cursor-default"
                         >
                            {tech}
                         </motion.div>
                       ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t border-white/5">
                       <div className="space-y-4">
                          <h4 className="text-xs font-black text-purple-500 uppercase tracking-widest">Environment</h4>
                          <ul className="space-y-3">
                             {["Git-driven workflow", "CI/CD automated deployment", "Microservices architecture", "Event-driven design"].map(e => (
                               <li key={e} className="text-sm font-bold text-gray-400 flex items-center gap-3">
                                  <Cpu size={14} className="text-gray-600" /> {e}
                               </li>
                             ))}
                          </ul>
                       </div>
                       <div className="space-y-4">
                          <h4 className="text-xs font-black text-purple-500 uppercase tracking-widest">Learning</h4>
                          <p className="text-sm font-bold text-gray-500 leading-relaxed">
                            We offer an unlimited learning budget. If a tool or conference makes you a better engineer, we'll fund it.
                          </p>
                       </div>
                    </div>
                 </motion.div>
               )}

               {activeStage === 3 && (
                 <motion.div 
                   key="apply" variants={slideVariants} initial="initial" animate="animate" exit="exit"
                   className="h-full"
                 >
                    <AnimatePresence mode="wait">
                      {!isApplied ? (
                        <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-12">
                           <div className="text-center md:text-left">
                              <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] mb-6">
                                Ready for <span className="text-blue-500">Takeoff?</span>
                              </h2>
                              <p className="text-xl text-gray-500 font-medium">Start your journey with PixelVisionAds in under 2 minutes.</p>
                           </div>

                           <form onSubmit={handleApply} className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
                              <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] px-1">Full Name</label>
                                <input required type="text" placeholder="Identity" className="w-full bg-[#050505] border border-white/10 rounded-3xl py-5 px-8 outline-none focus:border-blue-500 transition-all text-sm font-bold placeholder-gray-800" />
                              </div>
                              <div className="space-y-2">
                                <label className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] px-1">Email Terminal</label>
                                <input required type="email" placeholder="reach@company.com" className="w-full bg-[#050505] border border-white/10 rounded-3xl py-5 px-8 outline-none focus:border-blue-500 transition-all text-sm font-bold placeholder-gray-800" />
                              </div>
                              <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] font-black uppercase text-gray-500 tracking-[0.2em] px-1">Portfolio / Resume / Evidence URL</label>
                                <input required type="url" placeholder="https://..." className="w-full bg-[#050505] border border-white/10 rounded-3xl py-5 px-8 outline-none focus:border-blue-500 transition-all text-sm font-bold placeholder-gray-800" />
                              </div>
                              
                              <div className="md:col-span-2 pt-6">
                                 <button 
                                   disabled={isSubmitting}
                                   className="w-full md:w-fit px-16 py-6 bg-blue-600 rounded-[32px] font-black text-white shadow-3xl shadow-blue-600/20 hover:bg-blue-500 transition-all flex items-center justify-center gap-4 group disabled:opacity-50"
                                 >
                                   {isSubmitting ? 'Transmitting...' : 'Send Application'} 
                                   <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                 </button>
                                 <p className="mt-6 text-[9px] text-gray-600 uppercase font-black tracking-widest">
                                    By clicking transmit, you agree to our recruitment data protocols.
                                 </p>
                              </div>
                           </form>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                          className="flex flex-col items-center justify-center text-center space-y-8 py-20"
                        >
                           <div className="w-24 h-24 bg-emerald-500 text-white rounded-[32px] flex items-center justify-center shadow-3xl shadow-emerald-500/30">
                              <CheckCircle2 size={48} />
                           </div>
                           <h3 className="text-5xl font-black text-white tracking-tighter">Mission Received.</h3>
                           <p className="text-xl text-gray-400 font-medium max-w-md">
                             Your data has been successfully stored in our hiring mainframe for the <span className="text-white font-black">{job.title}</span> role. Expect a briefing within 48 hours.
                           </p>
                           <button 
                             onClick={() => navigate('/careers')}
                             className="px-12 py-5 bg-white text-emerald-900 rounded-3xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform"
                           >
                             Return to Careers Hub
                           </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </motion.div>
               )}
             </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
