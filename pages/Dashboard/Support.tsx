
import React from 'react';
import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Plus, 
  HelpCircle, 
  BookOpen, 
  Mail, 
  Search, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import GlassCard from '../../components/GlassCard';

const Support: React.FC = () => {
  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-black mb-2">Help & Support</h1>
          <p className="text-gray-400">Our experts are here to help you maximize your results.</p>
        </div>
        <button className="px-8 py-4 bg-blue-600 hover:bg-blue-500 rounded-2xl text-sm font-bold shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2 group">
          <Plus size={18} className="group-hover:rotate-90 transition-transform" /> 
          Open Support Ticket
        </button>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           {/* FAQ Search */}
           <div className="bg-[#0a0a0a] border border-white/10 rounded-[40px] p-8 lg:p-12 relative overflow-hidden">
             <div className="relative z-10 max-w-xl">
               <h2 className="text-2xl font-bold mb-4">Knowledge Base</h2>
               <p className="text-gray-400 mb-8">Search our documentation for quick answers to common questions.</p>
               <div className="relative">
                 <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
                 <input 
                  type="text" 
                  placeholder="How to setup postback tracking..."
                  className="w-full bg-white/5 border border-white/10 rounded-[20px] py-5 pl-16 pr-6 text-sm font-bold outline-none focus:border-blue-500 transition-all"
                 />
               </div>
             </div>
             <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
               <HelpCircle size={300} />
             </div>
           </div>

           {/* Active Tickets Table */}
           <div className="bg-[#0a0a0a] border border-white/10 rounded-[32px] overflow-hidden">
              <div className="p-8 border-b border-white/5 flex justify-between items-center">
                <h3 className="text-xl font-bold">Active Tickets</h3>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Showing 1 of 1</span>
              </div>
              <div className="p-8 text-center py-20">
                <div className="w-16 h-16 bg-white/5 text-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageSquare size={32} />
                </div>
                <h4 className="text-lg font-bold text-gray-300">No active tickets found</h4>
                <p className="text-sm text-gray-500 max-w-xs mx-auto mt-2">If you have a problem or question, please open a ticket and our team will get back to you within 24 hours.</p>
              </div>
           </div>
        </div>

        {/* Sidebar Cards */}
        <div className="space-y-6">
          <GlassCard>
            <h3 className="text-sm font-bold mb-6 uppercase tracking-widest text-gray-500">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl h-fit"><Mail size={20} /></div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-600 tracking-tighter">Email Support</p>
                  <p className="text-sm font-bold">support@pixelvisionads.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl h-fit"><MessageSquare size={20} /></div>
                <div>
                  <p className="text-[10px] font-black uppercase text-gray-600 tracking-tighter">Live Chat</p>
                  <p className="text-sm font-bold">Available Mon-Fri</p>
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-3xl border border-white/10 space-y-4">
             <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl w-fit"><BookOpen size={24} /></div>
             <h4 className="text-xl font-bold">Compliance Guide</h4>
             <p className="text-xs text-gray-400 leading-relaxed">Ensure your creatives follow our policies to avoid rejections and account suspension.</p>
             <button className="text-blue-500 text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:underline">
                Read Policies <ExternalLink size={14} />
             </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;