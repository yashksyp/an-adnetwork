import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  FileText, 
  UserCheck, 
  ShieldAlert, 
  // Removed the invalid Advertiser export from lucide-react
  Layout, 
  Wallet, 
  Ban, 
  Power,
  CheckCircle2,
  AlertTriangle
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
      className="bg-[#0a0a0a] border border-white/5 rounded-[40px] p-10 lg:p-12 shadow-2xl relative overflow-hidden group hover:border-blue-500/20 transition-all"
    >
      <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
        <Icon size={200} />
      </div>
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-10">
           <div className="p-3 bg-blue-600/10 text-blue-500 rounded-2xl group-hover:scale-110 transition-transform">
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

const TermsOfService: React.FC = () => {
  const sections = [
    { id: 'agreement', label: '1. The Agreement' },
    { id: 'eligibility', label: '2. Eligibility' },
    { id: 'accounts', label: '3. Account Security' },
    { id: 'advertiser', label: '4. Advertiser Terms' },
    { id: 'publisher', label: '5. Publisher Terms' },
    { id: 'payments', label: '6. Payments & Billing' },
    { id: 'prohibited', label: '7. Prohibited Uses' },
    { id: 'termination', label: '8. Termination' }
  ];

  return (
    <LegalLayout title="Terms of Service" lastUpdated="October 24, 2024" sections={sections}>
      <PolicyCard id="agreement" title="1. The Agreement" icon={FileText}>
        <p>
          These Terms of Service ("Agreement") govern your access to and use of the <span className="text-white font-bold">PixelVisionAds</span> network and services. By creating an account or using any of our services, you agree to be bound by these terms. 
        </p>
        <div className="p-6 bg-blue-600/5 border border-blue-500/10 rounded-3xl">
           <p className="text-sm text-blue-400 font-bold">This Agreement constitutes a legally binding contract between you (the "Partner") and PixelVisionAds.</p>
        </div>
      </PolicyCard>

      <PolicyCard id="eligibility" title="2. Eligibility" icon={UserCheck}>
        <p>
          You must be at least <span className="text-white">18 years old</span> or the legal age of majority in your jurisdiction to use our services. By using PixelVisionAds, you represent and warrant that you have the full power and authority to enter into this Agreement.
        </p>
        <ul className="space-y-4">
           {[
             "Full legal capacity to bind your business entity.",
             "Compliance with local regional advertising laws.",
             "Not currently prohibited from digital trade by international sanctions."
           ].map((item, i) => (
             <li key={i} className="flex items-center gap-3 text-sm">
                <CheckCircle2 size={16} className="text-emerald-500" /> {item}
             </li>
           ))}
        </ul>
      </PolicyCard>

      <PolicyCard id="accounts" title="3. Account Security" icon={ShieldAlert}>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials. Any activities that occur under your account are your sole responsibility.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
           <div className="flex-1 p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
              <h4 className="text-white font-bold text-sm mb-2">MFA Required</h4>
              <p className="text-xs text-gray-500">We strongly recommend enabling Multi-Factor Authentication for all high-volume accounts.</p>
           </div>
           <div className="flex-1 p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
              <h4 className="text-white font-bold text-sm mb-2">Unauthorized Access</h4>
              <p className="text-xs text-gray-500">Notify our security team immediately at security@pixelvisionads.com if you detect breach.</p>
           </div>
        </div>
      </PolicyCard>

      <PolicyCard id="advertiser" title="4. Advertiser Terms" icon={Layout}>
        <p>Advertisers are solely responsible for the content of their advertisements and the landing pages to which they link.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          <div className="space-y-2">
            <p className="text-blue-500 font-black text-xs uppercase tracking-widest">Compliance</p>
            <p className="text-sm">All creatives must comply with our Creative Guidelines and Prohibited Content Policy.</p>
          </div>
          <div className="space-y-2">
            <p className="text-blue-500 font-black text-xs uppercase tracking-widest">Tracking</p>
            <p className="text-sm">Must implement valid tracking (S2S or Pixel) to ensure accurate billing.</p>
          </div>
        </div>
      </PolicyCard>

      <PolicyCard id="publisher" title="5. Publisher Terms" icon={CheckCircle2}>
        <p>Publishers represent and warrant that they own or have the legal right to monetize the traffic from the properties submitted.</p>
        <ul className="space-y-4 pt-4">
           <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
              <p className="text-sm"><span className="text-white font-bold">Traffic Quality:</span> No artificial traffic using bots or scripts.</p>
           </li>
           <li className="flex gap-4">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
              <p className="text-sm"><span className="text-white font-bold">Ad Placement:</span> Must not overlap with or obscure critical site content.</p>
           </li>
        </ul>
      </PolicyCard>

      <PolicyCard id="payments" title="6. Payments & Billing" icon={Wallet}>
        <p>PixelVisionAds operates on a NET-7 payment schedule for Publishers and a pre-paid basis for Advertisers.</p>
        <div className="bg-[#050505] p-8 rounded-3xl border border-white/5 space-y-6">
           <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-xs font-bold text-gray-500">Min. Payout (Pub)</span>
              <span className="text-xl font-black text-white">$50.00</span>
           </div>
           <div className="flex justify-between items-center border-b border-white/5 pb-4">
              <span className="text-xs font-bold text-gray-500">Processing Fee (Refunds)</span>
              <span className="text-xl font-black text-red-500">5%</span>
           </div>
           <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-gray-500">Tax Responsibility</span>
              <span className="text-xs font-black text-blue-500 uppercase">Self-Reporting</span>
           </div>
        </div>
      </PolicyCard>

      <PolicyCard id="prohibited" title="7. Prohibited Uses" icon={Ban}>
        <p>Partners shall not use the service for any illegal purpose. Prohibited activities include:</p>
        <div className="grid grid-cols-2 gap-4 pt-4">
           {["Malware distribution", "Copyright Piracy", "Click Fraud", "Misleading Offers"].map(item => (
             <div key={item} className="px-4 py-3 bg-red-500/5 border border-red-500/10 rounded-xl flex items-center gap-3">
                <AlertTriangle size={14} className="text-red-500" />
                <span className="text-[10px] font-black text-red-200 uppercase tracking-widest">{item}</span>
             </div>
           ))}
        </div>
      </PolicyCard>

      <PolicyCard id="termination" title="8. Termination" icon={Power}>
        <p>
          We reserve the right to terminate your access to the network at any time. In the event of a material breach (such as click fraud), all pending balances may be forfeited as liquidated damages.
        </p>
      </PolicyCard>
    </LegalLayout>
  );
};

export default TermsOfService;