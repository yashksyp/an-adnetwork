
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, CheckCircle, XCircle, Info, FileText, ChevronRight } from 'lucide-react';

const Policies: React.FC = () => {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-black mb-2">Network Policies</h1>
        <p className="text-gray-400">Rules and guidelines to ensure high traffic quality and brand safety.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-2">
           {['Advertiser Terms', 'Content Policy', 'Refund Policy', 'Traffic Quality'].map(p => (
             <button key={p} className={`w-full flex justify-between items-center px-6 py-4 rounded-2xl font-bold text-sm text-left transition-all ${
               p === 'Content Policy' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white hover:bg-white/5'
             }`}>
               {p} <ChevronRight size={16} />
             </button>
           ))}
        </div>

        <div className="lg:col-span-3">
          <div className="bg-[#0a0a0a] border border-white/10 rounded-[40px] p-8 lg:p-12 shadow-2xl space-y-10">
            <section className="space-y-4">
               <h2 className="text-2xl font-bold text-white">Prohibited Content</h2>
               <p className="text-gray-400 leading-relaxed">
                 The following categories of content are strictly forbidden on our network. Violation of these policies will result in immediate account termination.
               </p>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    'Illegal drug paraphernalia',
                    'Copyrighted material (Piracy)',
                    'Malware or phishing links',
                    'Misleading/Scam offers',
                    'Violent or extremist content',
                    'Adult/NSFW content in non-adult formats'
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3 p-4 bg-red-500/5 border border-red-500/10 rounded-2xl text-red-500 text-xs font-bold">
                       <XCircle size={16} /> {item}
                    </div>
                  ))}
               </div>
            </section>

            <section className="space-y-4 pt-10 border-t border-white/5">
               <h2 className="text-2xl font-bold text-white">Creative Guidelines</h2>
               <p className="text-gray-400 leading-relaxed">To maintain high CTR and user engagement, follow these best practices:</p>
               <div className="space-y-4 mt-6">
                 {[
                   { label: 'Image Quality', desc: 'Use clear, high-resolution images. Blurred or pixelated assets will be rejected.' },
                   { label: 'Honest Copy', desc: 'Headlines must reflect the landing page content. No "clickbait" false promises.' },
                   { label: 'Landing Page', desc: 'Pages must load within 3 seconds and have a clear exit path (no back-button hijacking).' }
                 ].map(guideline => (
                    <div key={guideline.label} className="flex gap-4 p-6 bg-white/[0.02] rounded-3xl border border-white/5">
                       <div className="p-3 bg-green-500/10 text-green-500 rounded-xl h-fit"><CheckCircle size={20} /></div>
                       <div>
                         <h4 className="font-bold text-gray-200 mb-1">{guideline.label}</h4>
                         <p className="text-xs text-gray-500 leading-relaxed">{guideline.desc}</p>
                       </div>
                    </div>
                 ))}
               </div>
            </section>

            <div className="p-8 bg-blue-600/5 border border-blue-500/20 rounded-[32px] flex flex-col md:flex-row items-center gap-6">
               <div className="p-4 bg-blue-600/10 text-blue-500 rounded-2xl"><FileText size={32} /></div>
               <div className="flex-1">
                 <h4 className="font-bold mb-1">Download Full Advertiser Pack</h4>
                 <p className="text-xs text-gray-500">PDF includes full legal definitions and compliance checklist.</p>
               </div>
               <button className="px-8 py-3 bg-blue-600 rounded-xl text-xs font-bold whitespace-nowrap">Download PDF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
