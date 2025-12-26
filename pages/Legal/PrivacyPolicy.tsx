
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  Database, 
  Eye, 
  Share2, 
  Clock, 
  Fingerprint, 
  Lock,
  CheckCircle2,
  Info
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
      className="bg-[#0a0a0a] border border-white/5 rounded-[40px] p-10 lg:p-12 shadow-2xl relative overflow-hidden group hover:border-emerald-500/20 transition-all"
    >
      <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
        <Icon size={200} />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-10">
           <div className="p-3 bg-emerald-600/10 text-emerald-500 rounded-2xl group-hover:scale-110 transition-transform">
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

const PrivacyPolicy: React.FC = () => {
  const sections = [
    { id: 'data-collection', label: '1. Data Collection' },
    { id: 'how-we-use', label: '2. Usage of Data' },
    { id: 'data-sharing', label: '3. Data Sharing' },
    { id: 'retention', label: '4. Data Retention' },
    { id: 'rights', label: '5. Your Rights (GDPR/CCPA)' },
    { id: 'security', label: '6. Security Measures' }
  ];

  return (
    <LegalLayout title="Privacy Policy" lastUpdated="October 24, 2024" sections={sections}>
      <PolicyCard id="data-collection" title="1. Data Collection" icon={Database}>
        <p>We collect information to provide better advertising services. This includes:</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
           {[
             { label: "Account Info", desc: "Name, email, billing address." },
             { label: "Technical Data", desc: "IP, browser, device ID, OS." },
             { label: "Activity Data", desc: "Impressions, clicks, conversions." }
           ].map(item => (
             <div key={item.label} className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                <h4 className="text-white font-black text-xs uppercase mb-2 tracking-widest">{item.label}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
             </div>
           ))}
        </div>
      </PolicyCard>

      <PolicyCard id="how-we-use" title="2. Usage of Data" icon={Eye}>
        <p>PixelVisionAds uses the collected data for the following mission-critical purposes:</p>
        <ul className="space-y-4">
           {[
             "To serve targeted advertisements based on user interests.",
             "To prevent fraud and ensure 100% human traffic delivery.",
             "To process payments and generate performance reports.",
             "To improve our neural-bidding algorithms."
           ].map((text, i) => (
             <li key={i} className="flex items-center gap-4 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {text}
             </li>
           ))}
        </ul>
      </PolicyCard>

      <PolicyCard id="data-sharing" title="3. Data Sharing" icon={Share2}>
        <p>We do not sell your personal data. We share information only with trusted entities:</p>
        <div className="p-8 bg-emerald-600/5 border border-emerald-500/10 rounded-[32px] space-y-4">
           <div className="flex gap-4">
              <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
              <p className="text-sm"><span className="text-white font-bold">Service Providers:</span> Payment processors and hosting partners.</p>
           </div>
           <div className="flex gap-4">
              <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
              <p className="text-sm"><span className="text-white font-bold">Legal Compliance:</span> If required by law to protect rights.</p>
           </div>
        </div>
      </PolicyCard>

      <PolicyCard id="retention" title="4. Data Retention" icon={Clock}>
        <p>
          We retain personal information as long as your account is active. Technical logs used for frequency capping are typically purged after <span className="text-white font-bold uppercase tracking-widest">90 Days</span>.
        </p>
      </PolicyCard>

      <PolicyCard id="rights" title="5. Your Rights" icon={Fingerprint}>
        <p>You have fundamental rights regarding your personal information, regardless of your global location:</p>
        <div className="grid grid-cols-2 gap-4 pt-4">
           {["Access Request", "Data Portability", "Account Deletion", "Opt-Out of Ads"].map(right => (
             <div key={right} className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-black uppercase text-gray-300 tracking-tighter">
               {right}
             </div>
           ))}
        </div>
      </PolicyCard>

      <PolicyCard id="security" title="6. Security Measures" icon={Lock}>
        <div className="flex flex-col md:flex-row gap-8 items-center">
           <div className="flex-1 space-y-4">
              <p>We implement AES-256 encryption and multi-factor authentication (MFA) to protect your data integrity.</p>
              <div className="flex items-center gap-3 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                 ISO 27001 Certified Data Centers
              </div>
           </div>
           <div className="p-8 bg-[#050505] rounded-3xl border border-white/5">
              <Lock size={48} className="text-emerald-500" />
           </div>
        </div>
      </PolicyCard>
    </LegalLayout>
  );
};

export default PrivacyPolicy;
