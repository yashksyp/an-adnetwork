
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Cookie, 
  Activity, 
  Settings, 
  ShieldCheck,
  MousePointer2,
  Target
} from 'lucide-react';
import LegalLayout from './LegalLayout';

const PolicyCard = ({ id, title, icon: Icon, children }: any) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.section 
      id={id} 
      variants={cardVariants}
      className="bg-[#0a0a0a] border border-white/5 rounded-[40px] p-10 lg:p-12 shadow-2xl relative overflow-hidden group hover:border-purple-500/20 transition-all"
    >
      <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
        <Icon size={200} />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-10">
           <div className="p-3 bg-purple-600/10 text-purple-500 rounded-2xl group-hover:scale-110 transition-transform">
             <Icon size={24} />
           </div>
           <h2 className="text-3xl font-black text-white tracking-tighter">{title}</h2>
        </div>
        <div className="space-y-6 text-gray-400 font-medium leading-relaxed text-lg">
          {children}
        </div>
      </div>
    </motion.section>
  );
};

const CookiePolicy: React.FC = () => {
  const sections = [
    { id: 'what-are', label: '1. What are Cookies' },
    { id: 'how-we-use', label: '2. Our Usage' },
    { id: 'types', label: '3. Types of Cookies' },
    { id: 'management', label: '4. Management' }
  ];

  return (
    <LegalLayout title="Cookie Policy" lastUpdated="October 24, 2024" sections={sections}>
      <PolicyCard id="what-are" title="1. What are Cookies?" icon={Cookie}>
        <p>Cookies are small text files placed on your device to make websites work more efficiently and provide information to the owners of the site.</p>
      </PolicyCard>

      <PolicyCard id="how-we-use" title="2. How We Use Them" icon={Activity}>
        <p>PixelVisionAds uses cookies and local storage technologies to:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           {[
             { title: "Authentication", icon: <ShieldCheck size={16} /> },
             { title: "Conversion Tracking", icon: <Target size={16} /> },
             { title: "Frequency Capping", icon: <MousePointer2 size={16} /> },
             { title: "Performance Metrics", icon: <Activity size={16} /> }
           ].map(item => (
             <div key={item.title} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center gap-4">
                <div className="text-purple-500">{item.icon}</div>
                <span className="text-xs font-black uppercase text-gray-300 tracking-widest">{item.title}</span>
             </div>
           ))}
        </div>
      </PolicyCard>

      <PolicyCard id="types" title="3. Cookie Categories" icon={Settings}>
        <div className="space-y-6">
           <div className="p-8 bg-purple-600/5 border border-purple-500/10 rounded-[32px]">
              <h4 className="text-white font-black text-sm uppercase mb-2">Essential Cookies</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Necessary for the operation of our dashboard, including login sessions and security tokens.</p>
           </div>
           <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[32px]">
              <h4 className="text-white font-black text-sm uppercase mb-2">Advertising Cookies</h4>
              <p className="text-xs text-gray-500 leading-relaxed">Used by our RTB engine to deliver relevant ads to users across our publisher network.</p>
           </div>
        </div>
      </PolicyCard>

      <PolicyCard id="management" title="4. Management" icon={Settings}>
        <p>Most web browsers allow some control of most cookies through the settings. You can opt-out of interest-based advertising at any time.</p>
        <button className="px-8 py-3 bg-purple-600 rounded-xl text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-purple-600/20">Global Opt-Out Link</button>
      </PolicyCard>
    </LegalLayout>
  );
};

export default CookiePolicy;
