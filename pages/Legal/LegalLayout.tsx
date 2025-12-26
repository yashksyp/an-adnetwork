
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Shield, ChevronRight, Scale } from 'lucide-react';

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  sections: { id: string; label: string }[];
  children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, lastUpdated, sections, children }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-40 px-4 selection:bg-blue-600/30">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[160px]"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[160px]"></div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        {/* Sidebar TOC */}
        <aside className="lg:w-80 shrink-0">
          <div className="sticky top-32 space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black text-blue-500 uppercase bg-blue-500/10 rounded-md border border-blue-500/20">
                <Scale size={12} /> Legal Framework
              </div>
              <h1 className="text-4xl font-black text-white leading-none mb-4 tracking-tighter">{title}</h1>
              <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                Updated: {lastUpdated}
              </div>
            </motion.div>

            <nav className="space-y-1">
              <p className="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] mb-4 px-4">Navigation</p>
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="w-full flex items-center justify-between px-4 py-4 rounded-2xl text-sm font-bold text-gray-500 hover:text-white hover:bg-white/5 transition-all text-left group"
                >
                  {section.label}
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </nav>

            <div className="p-8 bg-blue-600/5 border border-blue-500/10 rounded-[32px] space-y-4">
              <h4 className="text-xs font-black text-blue-500 uppercase tracking-widest">Legal Assistance</h4>
              <p className="text-xs text-gray-400 leading-relaxed font-medium">
                Need specific legal clarification? Contact our compliance department.
              </p>
              <button className="text-[10px] font-black uppercase text-white hover:text-blue-500 transition-colors">legal@pixelvisionads.com</button>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <motion.main 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 space-y-10"
        >
          {children}
        </motion.main>
      </div>
    </div>
  );
};

export default LegalLayout;
