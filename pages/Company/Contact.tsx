
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MessageSquare, 
  MapPin, 
  Globe, 
  Send, 
  Headphones, 
  Twitter, 
  Linkedin,
  Clock,
  ChevronRight
} from 'lucide-react';
import GlassCard from '../../components/GlassCard';

const Contact: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen pt-32 pb-20 overflow-hidden selection:bg-blue-600/30">
      <section className="max-w-7xl mx-auto px-4 mb-24">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Side: Info */}
          <div className="flex-1 space-y-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-black text-blue-500 uppercase bg-blue-500/10 rounded-md border border-blue-500/20">
                <MessageSquare size={12} /> Contact Us
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-white">Let's <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Connect.</span></h1>
              <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                Have questions about scaling your campaigns or monetizing your traffic? Our global support team is ready to assist.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-500 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-white text-lg">Email Support</h4>
                   <p className="text-gray-500 text-sm mb-2">Typically responds within 4-12 hours.</p>
                   <p className="text-blue-500 font-bold">support@pixelvisionads.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-emerald-500 shrink-0">
                  <MessageSquare size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-white text-lg">Sales & Partnerships</h4>
                   <p className="text-gray-500 text-sm mb-2">Direct consultation for high-volume partners.</p>
                   <p className="text-emerald-500 font-bold">sales@pixelvisionads.com</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-purple-500 shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                   <h4 className="font-bold text-white text-lg">Working Hours</h4>
                   <p className="text-gray-500 text-sm">Mon - Fri: 08:00 - 20:00 UTC</p>
                   <p className="text-gray-500 text-sm">24/7 Monitoring for System Status</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex-1">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-[#0a0a0a] border border-white/10 rounded-[40px] p-8 lg:p-12 shadow-2xl relative"
            >
               <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
               <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest px-1">Full Name</label>
                      <input type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-blue-500 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest px-1">Email Address</label>
                      <input type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-blue-500 transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest px-1">Interested In</label>
                    <select className="w-full bg-[#050505] border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-blue-500 transition-colors appearance-none font-bold">
                      <option>Advertiser Platform</option>
                      <option>Publisher Monetization</option>
                      <option>API / Technical Help</option>
                      <option>Careers</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest px-1">Your Message</label>
                    <textarea placeholder="Tell us about your goals..." className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-blue-500 transition-colors min-h-[150px] resize-none" />
                  </div>
                  <button className="w-full py-5 bg-blue-600 rounded-2xl font-black text-white shadow-xl shadow-blue-600/20 flex items-center justify-center gap-3 group active:scale-95 transition-all">
                    Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
               </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="max-w-7xl mx-auto px-4 py-32 border-t border-white/5">
         <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">Our Global Presence</h2>
            <p className="text-gray-500">6 Strategic hubs serving traffic across every continent.</p>
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { city: "London", region: "UK HQ", status: "Operational" },
              { city: "New York", region: "North America", status: "Operational" },
              { city: "Singapore", region: "APAC Hub", status: "Operational" },
              { city: "Berlin", region: "European Operations", status: "Operational" },
              { city: "Dubai", region: "MENA Region", status: "Operational" },
              { city: "Limassol", region: "Finance & Legal", status: "Operational" },
            ].map((loc, i) => (
              <GlassCard key={i} className="!p-8 group hover:border-blue-500/30">
                 <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center">
                       <MapPin size={24} />
                    </div>
                    <div className="flex items-center gap-2 bg-green-500/10 px-2 py-1 rounded-md">
                       <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                       <span className="text-[8px] font-black text-green-500 uppercase">{loc.status}</span>
                    </div>
                 </div>
                 <h4 className="text-2xl font-black text-white mb-1">{loc.city}</h4>
                 <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">{loc.region}</p>
              </GlassCard>
            ))}
         </div>
      </section>

      {/* Social Bar */}
      <section className="max-w-5xl mx-auto px-4 text-center mt-20">
         <div className="flex justify-center gap-8 items-center text-gray-500">
            <a href="#" className="hover:text-blue-400 transition-colors flex items-center gap-2 font-bold"><Twitter size={20} /> Twitter</a>
            <span className="w-1 h-1 rounded-full bg-white/10"></span>
            <a href="#" className="hover:text-blue-600 transition-colors flex items-center gap-2 font-bold"><Linkedin size={20} /> LinkedIn</a>
            <span className="w-1 h-1 rounded-full bg-white/10"></span>
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2 font-bold"><Globe size={20} /> Network Status</a>
         </div>
      </section>
    </div>
  );
};

export default Contact;
