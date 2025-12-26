
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Code2, 
  Copy, 
  Check, 
  ChevronRight, 
  Layers, 
  MousePointer2, 
  Bell, 
  Layout,
  Globe,
  X,
  Target,
  Smartphone,
  ArrowRight,
  Type
} from 'lucide-react';
import GlassCard from '../../../components/GlassCard';

const AD_UNITS = [
  { id: 'Z-842', name: 'Main Sidebar Banner', website: 'techblogworld.com', format: 'Banner', ecpm: '$1.45', revenue: '$420.12', status: 'active' },
  { id: 'Z-845', name: 'Global Pop Zone', website: 'gamerforum.net', format: 'Popunder', ecpm: '$4.20', revenue: '$1,240.50', status: 'active' },
  { id: 'Z-850', name: 'Push Monetization', website: 'gamerforum.net', format: 'Push', ecpm: '$0.85', revenue: '$14.20', status: 'inactive' },
  { id: 'Z-855', name: 'Mobile Interstitial', website: 'techblogworld.com', format: 'Interstitial', ecpm: '$3.50', revenue: '$95.20', status: 'active' },
];

const CreateUnitModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [step, setStep] = useState(1);
  const [format, setFormat] = useState('push');
  const [name, setName] = useState('');
  const [site, setSite] = useState('');

  const handleCreate = () => {
    // Simulated creation logic
    setStep(4);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-[#050505]/90 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-2xl bg-[#0a0a0a] border border-white/10 rounded-[40px] shadow-2xl overflow-hidden"
      >
        <div className="p-8 border-b border-white/5 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-black">Create Ad Unit</h2>
            <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Step {step} of 4</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full text-gray-500 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-8 lg:p-12 min-h-[400px]">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <h3 className="text-xl font-bold">Select Ad Format</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: 'push', title: 'Push Notification', icon: <Bell size={20} /> },
                    { id: 'pop', title: 'Popunder', icon: <MousePointer2 size={20} /> },
                    { id: 'native', title: 'Native Ads', icon: <Layout size={20} /> },
                    { id: 'inter', title: 'Interstitial', icon: <Smartphone size={20} /> },
                    { id: 'banner', title: 'Display Banner', icon: <Layers size={20} /> },
                    { id: 'text', title: 'Text Ad', icon: <Type size={20} /> },
                  ].map(f => (
                    <button 
                      key={f.id}
                      onClick={() => setFormat(f.id)}
                      className={`p-6 rounded-3xl border text-left transition-all flex items-center gap-4 ${
                        format === f.id ? 'bg-blue-600/10 border-blue-500' : 'bg-white/5 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <div className={`p-3 rounded-2xl ${format === f.id ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-500'}`}>
                        {f.icon}
                      </div>
                      <span className="font-bold text-sm">{f.title}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-6">
                <h3 className="text-xl font-bold">Unit Details</h3>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Ad Unit Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g., Sidebar Top Banner"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-blue-500 outline-none font-bold"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Select Website</label>
                    <select 
                      value={site}
                      onChange={(e) => setSite(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-blue-500 outline-none font-bold appearance-none"
                    >
                      <option value="">Choose a property...</option>
                      <option value="1">techblogworld.com</option>
                      <option value="3">gamerforum.net</option>
                    </select>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-[28px] flex items-center justify-center mx-auto mb-6">
                  <Check size={40} strokeWidth={3} />
                </div>
                <h3 className="text-3xl font-black mb-4">Unit Created!</h3>
                <p className="text-gray-400 mb-8 max-w-xs mx-auto">Your ad unit is ready. Copy the code below and paste it before the closing &lt;/body&gt; tag.</p>
                <div className="bg-[#050505] p-4 rounded-2xl border border-white/10 font-mono text-[10px] text-blue-400 text-left break-all mb-8">
                  &lt;script src="https://pixelvisionads.com/sdk/pva.js" data-zone="PVA-{Math.floor(Math.random()*9000)}"&gt;&lt;/script&gt;
                </div>
                <button onClick={onClose} className="w-full py-4 bg-white text-black rounded-2xl font-black">Close & View List</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {step < 4 && (
          <div className="p-8 border-t border-white/5 flex justify-between">
            <button 
              onClick={() => step > 1 ? setStep(step - 1) : onClose()} 
              className="text-gray-500 font-bold hover:text-white"
            >
              {step === 1 ? 'Cancel' : 'Back'}
            </button>
            <button 
              onClick={() => step === 2 ? handleCreate() : setStep(step + 1)}
              disabled={step === 2 && (!name || !site)}
              className="px-8 py-3 bg-blue-600 disabled:opacity-50 rounded-2xl font-black text-white flex items-center gap-2"
            >
              {step === 2 ? 'Create Ad Unit' : 'Next Step'} <ArrowRight size={18} />
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

const AdUnits: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const getCode = (id: string) => {
    const code = `<script src="https://pixelvisionads.com/sdk/zone.js" data-zone="${id}"></script>`;
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-black mb-2">Ad Units & Zones</h1>
          <p className="text-gray-400">Create monetization codes for your approved websites and apps.</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="px-8 py-4 bg-purple-600 hover:bg-purple-500 rounded-2xl text-sm font-bold shadow-lg shadow-purple-600/20 transition-all flex items-center gap-2 group"
        >
          <Plus size={18} className="group-hover:rotate-90 transition-transform" /> 
          Create Ad Unit
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { label: 'Push', icon: <Bell size={18} />, color: 'blue' },
          { label: 'Popunder', icon: <MousePointer2 size={18} />, color: 'green' },
          { label: 'Native', icon: <Layout size={18} />, color: 'purple' },
          { label: 'Interstitial', icon: <Smartphone size={18} />, color: 'rose' },
          { label: 'Banners', icon: <Layers size={18} />, color: 'yellow' },
          { label: 'Text Ads', icon: <Type size={18} />, color: 'amber' }
        ].map(fmt => (
          <GlassCard key={fmt.label}>
             <div className={`p-2 bg-${fmt.color}-500/10 text-${fmt.color}-500 rounded-lg w-fit mb-4`}>
               {fmt.icon}
             </div>
             <h4 className="text-sm font-bold">{fmt.label}</h4>
             <button className="text-[10px] font-black uppercase text-blue-500 mt-2 hover:underline">Setup Guide</button>
          </GlassCard>
        ))}
      </div>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/[0.02] text-gray-500 text-[10px] uppercase font-black tracking-widest border-b border-white/5">
              <tr>
                <th className="px-8 py-5">Ad Unit Name</th>
                <th className="px-8 py-5">Website</th>
                <th className="px-8 py-5">Format</th>
                <th className="px-8 py-5">eCPM</th>
                <th className="px-8 py-5">Revenue</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {AD_UNITS.map((unit, i) => (
                <motion.tr 
                  key={unit.id} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-white/[0.02] transition-colors"
                >
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white">{unit.name}</span>
                      <span className="text-[10px] font-bold text-gray-600">ZONE ID: {unit.id}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400">
                      <Globe size={14} /> {unit.website}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase text-gray-300">
                      {unit.format}
                    </span>
                  </td>
                  <td className="px-8 py-6 font-mono text-xs text-blue-500 font-bold">{unit.ecpm}</td>
                  <td className="px-8 py-6 font-mono text-sm font-black text-green-500">{unit.revenue}</td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end gap-2">
                       <button 
                         onClick={() => getCode(unit.id)}
                         className={`flex items-center gap-2 px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${
                           copiedCode === unit.id ? 'bg-green-500/20 text-green-500 border border-green-500/20' : 'bg-blue-600/10 text-blue-500 border border-blue-500/10 hover:bg-blue-600 hover:text-white'
                         }`}
                       >
                         {copiedCode === unit.id ? <Check size={12} /> : <Code2 size={12} />}
                         {copiedCode === unit.id ? 'Copied' : 'Get Code'}
                       </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <CreateUnitModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default AdUnits;
