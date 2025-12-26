
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Check, 
  Target, 
  Globe, 
  MousePointer2, 
  DollarSign, 
  Layout, 
  Monitor,
  Zap,
  Info,
  Type,
  ImageIcon,
  Layers
} from 'lucide-react';

const steps = [
  { id: 1, title: 'Ad Format', icon: <Layout size={20} />, description: 'Choose your format' },
  { id: 2, title: 'Targeting', icon: <Globe size={20} />, description: 'Reach your audience' },
  { id: 3, title: 'Creatives', icon: <Monitor size={20} />, description: 'Upload your ads' },
  { id: 4, title: 'Budget', icon: <DollarSign size={20} />, description: 'Set your limits' },
];

const CreateCampaign: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [format, setFormat] = useState('push');
  const navigate = useNavigate();

  const handleNext = () => currentStep < 4 && setCurrentStep(s => s + 1);
  const handlePrev = () => currentStep > 1 && setCurrentStep(s => s - 1);

  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <header className="flex items-center gap-6">
        <button 
          onClick={() => navigate('/dashboard/campaigns')}
          className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-gray-400 hover:text-white transition-all"
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="text-3xl font-black">Launch Campaign</h1>
          <p className="text-gray-400">Step {currentStep} of 4: {steps[currentStep-1].title}</p>
        </div>
      </header>

      {/* Stepper Header */}
      <div className="flex justify-between items-center relative">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/5 -translate-y-1/2 z-0"></div>
        {steps.map((step) => (
          <div key={step.id} className="relative z-10 flex flex-col items-center">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${
              currentStep === step.id ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/30' : 
              currentStep > step.id ? 'bg-green-500 border-green-500 text-white' : 'bg-[#0a0a0a] border-white/10 text-gray-600'
            }`}>
              {currentStep > step.id ? <Check size={20} /> : step.icon}
            </div>
            <span className={`text-[10px] font-black uppercase tracking-widest mt-3 transition-colors ${
              currentStep === step.id ? 'text-white' : 'text-gray-600'
            }`}>{step.title}</span>
          </div>
        ))}
      </div>

      {/* Step Content Wrapper */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-[40px] p-8 lg:p-12 min-h-[500px] flex flex-col shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
          <Zap size={300} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex-1"
          >
            {currentStep === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Select Ad Format</h2>
                  <p className="text-gray-400">Choose the delivery method that fits your goals.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'push', title: 'Push Notification', desc: 'Direct desktop & mobile notifications', icon: '🔔' },
                    { id: 'pop', title: 'On-Click (Popunder)', desc: 'Full page exposure behind browsing', icon: '👆' },
                    { id: 'native', title: 'Native Widget', desc: 'Seamlessly integrated with content', icon: '🖼️' },
                    { id: 'inter', title: 'Interstitial', desc: 'High-impact full screen transitions', icon: '📱' },
                    { id: 'banner', title: 'Display Banner', desc: 'Classic display ads in standard sizes', icon: '🎴' },
                    { id: 'text', title: 'Text Ad', desc: 'Pure performance text link format', icon: '✍️' },
                  ].map(f => (
                    <button
                      key={f.id}
                      onClick={() => setFormat(f.id)}
                      className={`p-6 text-left rounded-3xl border transition-all flex items-start gap-4 group ${
                        format === f.id ? 'bg-blue-600/10 border-blue-500' : 'bg-white/5 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className="text-3xl bg-white/5 w-14 h-14 rounded-2xl flex items-center justify-center shrink-0">{f.icon}</div>
                      <div>
                        <h4 className="font-bold text-white mb-1">{f.title}</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500">Target Countries</label>
                    <div className="relative">
                      <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                      <input 
                        type="text" 
                        placeholder="Search regions..."
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm font-bold focus:border-blue-500 outline-none transition-all"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                       {['US', 'UK', 'CA', 'DE'].map(tag => (
                         <span key={tag} className="px-3 py-1 bg-blue-600/20 text-blue-500 text-[10px] font-black rounded-lg border border-blue-500/20 flex items-center gap-1">
                           {tag} <span className="cursor-pointer">×</span>
                         </span>
                       ))}
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <label className="text-xs font-black uppercase tracking-widest text-gray-500">Device Types</label>
                    <div className="grid grid-cols-2 gap-3">
                       {['Mobile', 'Desktop', 'Tablet', 'Smart TV'].map(dev => (
                         <button key={dev} className="p-4 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold hover:bg-blue-600/10 transition-all text-left flex items-center gap-2">
                           <div className="w-4 h-4 rounded border border-white/20"></div> {dev}
                         </button>
                       ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-8">
                {format !== 'text' && (
                  <div className="bg-white/5 border-2 border-dashed border-white/10 rounded-[32px] p-12 text-center group hover:border-blue-500/50 transition-all cursor-pointer">
                    <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                        <Layout size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Drop your creatives here</h3>
                    <p className="text-sm text-gray-500 mb-6">Support for PNG, JPG and WEBP (Max 2MB)</p>
                    <button className="px-8 py-3 bg-white text-black rounded-xl font-bold text-sm">Choose Files</button>
                  </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Destination URL</label>
                    <input type="text" placeholder="https://yourlink.com?click_id={clickid}" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm outline-none focus:border-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Ad Title</label>
                    <input type="text" placeholder="Winning headline here..." className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm outline-none focus:border-blue-500" />
                  </div>
                  {format === 'text' && (
                    <div className="md:col-span-2 space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Ad Body (Description)</label>
                      <textarea placeholder="Enter your high-performance ad copy..." className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-sm outline-none focus:border-blue-500 min-h-[100px]" />
                    </div>
                  )}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-10 max-w-xl mx-auto text-center py-6">
                 <div>
                    <h3 className="text-4xl font-black mb-4">Set Your Limits</h3>
                    <p className="text-gray-400">Total control over your advertising expenditure.</p>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-8">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Daily Budget</label>
                     <div className="relative">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                        <input type="number" defaultValue="50" className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-12 pr-6 text-3xl font-black outline-none focus:border-blue-500 text-center" />
                     </div>
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-gray-500">Target { (format === 'native' || format === 'text') ? 'CPC' : 'CPM' } Bid</label>
                     <div className="relative">
                        <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                        <input type="number" defaultValue="0.25" step="0.01" className="w-full bg-white/5 border border-white/10 rounded-2xl py-6 pl-12 pr-6 text-3xl font-black outline-none focus:border-blue-500 text-center" />
                     </div>
                   </div>
                 </div>

                 <div className="p-6 bg-blue-600/5 rounded-[32px] border border-blue-500/20 flex gap-4 text-left">
                    <Info className="text-blue-500 shrink-0 mt-1" />
                    <p className="text-xs text-gray-400 leading-relaxed">
                      Your current bid is <span className="text-blue-500 font-bold">competitive</span> for US/UK. Estimated daily impressions: <span className="text-white font-bold">250K - 400K</span>.
                    </p>
                 </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Action Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex justify-between">
           <button 
             onClick={handlePrev}
             disabled={currentStep === 1}
             className="px-8 py-3 text-gray-500 font-bold hover:text-white disabled:opacity-0 transition-all"
           >
             Previous
           </button>
           <button 
             onClick={currentStep === 4 ? () => navigate('/dashboard/campaigns') : handleNext}
             className="px-10 py-4 bg-blue-600 rounded-2xl font-black text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all flex items-center gap-3"
           >
             {currentStep === 4 ? 'Launch Campaign' : 'Next Step'} <ArrowRight size={20} />
           </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCampaign;
