
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Target, Globe, MousePointer2, DollarSign, Layout, Monitor, Zap, Info, Type,
  ImageIcon, Layers, Smartphone, CheckCircle2, Plus, Trash2, Calendar, ShieldCheck,
  Cpu, Globe2, Clock, ExternalLink, ChevronRight, PlusCircle, FileText, Settings2,
  // Added missing MessageSquare import
  Upload, X, Copy, Check, Filter, AlertTriangle, Radio, MessageSquare
} from 'lucide-react';

const CreateCampaign: React.FC = () => {
  const navigate = useNavigate();
  
  // Basic Settings
  const [trafficType, setTrafficType] = useState('Mainstream + Adult');
  const [adUnit, setAdUnit] = useState('popunder');
  const [pricingModel, setPricingModel] = useState('CPM');
  const [startTime, setStartTime] = useState('instant');
  const [landingUrl, setLandingUrl] = useState('');
  
  // Targeting Logic
  const [activeTargetingTab, setActiveTargetingTab] = useState('OS');
  const [osRules, setOsRules] = useState([{ id: 1, type: 'Android', rule: 'Include', version: 'All' }]);
  const [browserRules, setBrowserRules] = useState([{ id: 1, type: 'Chrome', rule: 'Include', version: 'All' }]);
  const [languageRules, setLanguageRules] = useState([{ id: 1, type: 'English', rule: 'Include' }]);
  
  // UI Helpers
  const [showMacroTool, setShowMacroTool] = useState(false);
  const [copiedMacro, setCopiedMacro] = useState<string | null>(null);

  const adUnits = [
    { id: 'popunder', title: 'Popunder', badge: 'POPULAR', icon: <MousePointer2 size={24} /> },
    { id: 'socialbar', title: 'Social Bar', badge: 'BEST CHOICE', icon: <Layers size={24} /> },
    { id: 'native', title: 'Native Banner', badge: '', icon: <ImageIcon size={24} /> },
    { id: 'inpage', title: 'In-Page Push', badge: 'HIGH CTR', icon: <Zap size={24} /> },
    { id: 'inter', title: 'Interstitial', badge: 'NEW', icon: <Smartphone size={24} /> },
  ];

  const macros = [
    { code: '{clickid}', desc: 'Unique Click Identifier' },
    { code: '{placement_id}', desc: 'Source/Zone ID' },
    { code: '{geo}', desc: '2-letter Country Code' },
    { code: '{os}', desc: 'Operating System' },
    { code: '{browser}', desc: 'Browser Name' },
    { code: '{bid}', desc: 'Winning Bid Amount' },
    { code: '{carrier}', desc: 'ISP/Carrier Name' },
  ];

  const handleCopyMacro = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedMacro(code);
    setTimeout(() => setCopiedMacro(null), 2000);
  };

  const addRule = (type: string) => {
    if (type === 'OS') setOsRules([...osRules, { id: Date.now(), type: 'Android', rule: 'Include', version: 'All' }]);
    if (type === 'BROWSER') setBrowserRules([...browserRules, { id: Date.now(), type: 'Chrome', rule: 'Include', version: 'All' }]);
    if (type === 'LANGUAGE') setLanguageRules([...languageRules, { id: Date.now(), type: 'English', rule: 'Include' }]);
  };

  const removeRule = (type: string, id: number) => {
    if (type === 'OS') setOsRules(osRules.filter(r => r.id !== id));
    if (type === 'BROWSER') setBrowserRules(browserRules.filter(r => r.id !== id));
    if (type === 'LANGUAGE') setLanguageRules(languageRules.filter(r => r.id !== id));
  };

  return (
    <div className="max-w-[1600px] mx-auto pb-40 px-4">
      {/* Dynamic Header */}
      <header className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => navigate('/dashboard/campaigns')}
            className="p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-gray-400 hover:text-white transition-all group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>
          <div>
            <h1 className="text-4xl font-black tracking-tighter">Create campaign</h1>
            <p className="text-gray-400 font-bold text-sm">Design your strategy for global scaling.</p>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full lg:w-auto">
           <button className="flex-1 lg:flex-none px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center gap-2">
             <Layers size={14} /> Create A/B Test
           </button>
           <button className="flex-1 lg:flex-none px-10 py-4 bg-blue-600 rounded-2xl font-black text-[10px] uppercase tracking-widest text-white shadow-3xl shadow-blue-600/30 hover:bg-blue-500 transition-all active:scale-95">
             Proceed to Review
           </button>
        </div>
      </header>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* LEFT: FORM AREA */}
        <div className="xl:col-span-8 space-y-8">
          
          {/* Section 1: Required Settings */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-[48px] p-8 lg:p-12 shadow-2xl space-y-12">
            <div className="flex items-center gap-3 pb-6 border-b border-white/5">
               <div className="p-2.5 bg-blue-600/10 text-blue-500 rounded-xl border border-blue-500/20"><Settings2 size={20} /></div>
               <h2 className="text-2xl font-black">Required Settings*</h2>
            </div>

            <div className="grid grid-cols-1 gap-10">
              {/* General Settings */}
              <div className="space-y-8">
                <h3 className="text-[10px] font-black uppercase text-gray-600 tracking-[0.2em] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> General
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-gray-400 px-1">Campaign name *</label>
                    <input type="text" placeholder="e.g. SmartPush_Global_Tier1_Q4" className="w-full bg-[#050505] border border-white/10 rounded-2xl py-5 px-8 focus:border-blue-500 outline-none text-white font-bold transition-all placeholder-gray-800" />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-gray-600 tracking-widest px-1">Device format</label>
                      <select className="w-full bg-[#050505] border border-white/10 rounded-2xl py-4 px-6 text-sm font-bold text-white outline-none focus:border-blue-500 appearance-none cursor-pointer">
                        <option>Desktop + Mobile (All)</option>
                        <option>Desktop Only</option>
                        <option>Mobile + Tablet</option>
                        <option>Mobile Only</option>
                        <option>Tablet Only</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-gray-600 tracking-widest px-1">Traffic type</label>
                      <select 
                        value={trafficType}
                        onChange={(e) => setTrafficType(e.target.value)}
                        className="w-full bg-[#050505] border border-white/10 rounded-2xl py-4 px-6 text-sm font-bold text-white outline-none focus:border-blue-500 appearance-none cursor-pointer"
                      >
                        <option>Mainstream + Adult (All)</option>
                        <option>Mainstream Only</option>
                        <option>Adult Content Only (18+)</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-gray-600 tracking-widest px-1">Connection type</label>
                      <select className="w-full bg-[#050505] border border-white/10 rounded-2xl py-4 px-6 text-sm font-bold text-white outline-none focus:border-blue-500 appearance-none cursor-pointer">
                        <option>All Connections</option>
                        <option>Wi-Fi Only</option>
                        <option>Cellular (3G/4G/5G)</option>
                        <option>Proxy / VPN Detected</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ad Format Selector */}
              <div className="space-y-8">
                <h3 className="text-[10px] font-black uppercase text-gray-600 tracking-[0.2em] flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Ad Unit & Pricing
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {adUnits.map((unit) => (
                    <button
                      key={unit.id}
                      onClick={() => setAdUnit(unit.id)}
                      className={`p-6 rounded-[36px] border transition-all text-center flex flex-col items-center gap-4 relative group ${
                        adUnit === unit.id ? 'bg-blue-600/10 border-blue-500' : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      {unit.badge && (
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-[8px] font-black rounded-lg text-white shadow-lg whitespace-nowrap z-10">
                          {unit.badge}
                        </span>
                      )}
                      <div className={`p-4 rounded-2xl transition-all ${adUnit === unit.id ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-600 group-hover:text-blue-400'}`}>
                        {unit.icon}
                      </div>
                      <span className="text-[10px] font-black uppercase text-gray-400 group-hover:text-gray-200 transition-colors">{unit.title}</span>
                    </button>
                  ))}
                </div>

                <div className="flex gap-4 p-2 bg-white/5 border border-white/5 rounded-2xl w-fit">
                   {['CPM', 'CPA', 'CPC'].map((model) => (
                     <button 
                       key={model}
                       onClick={() => setPricingModel(model)}
                       className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                        pricingModel === model ? 'bg-blue-600 text-white shadow-xl' : 'text-gray-500 hover:text-gray-300'
                       }`}
                     >
                        {model}
                     </button>
                   ))}
                </div>
              </div>

              {/* URL & Creative Section */}
              <div className="space-y-8">
                 <h3 className="text-[10px] font-black uppercase text-gray-600 tracking-[0.2em] flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Landing URL & Creatives
                 </h3>
                 <div className="space-y-8">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center px-1">
                        <label className="text-xs font-black text-gray-400">Target URL *</label>
                        <button 
                          onClick={() => setShowMacroTool(!showMacroTool)}
                          className="text-[10px] font-black text-blue-500 uppercase flex items-center gap-2 hover:underline"
                        >
                          {showMacroTool ? <X size={12} /> : <Plus size={12} />} Macro Tool
                        </button>
                      </div>
                      
                      <AnimatePresence>
                        {showMacroTool && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mb-4"
                          >
                             <div className="p-6 bg-blue-600/5 border border-blue-500/10 rounded-[32px] grid grid-cols-2 md:grid-cols-4 gap-3">
                                {macros.map(m => (
                                  <button 
                                    key={m.code} 
                                    onClick={() => handleCopyMacro(m.code)}
                                    className="p-3 bg-[#050505] border border-white/10 rounded-xl text-left group hover:border-blue-500/40 transition-all"
                                  >
                                    <div className="flex justify-between items-center mb-1">
                                       <code className="text-[10px] font-mono text-blue-400">{m.code}</code>
                                       {copiedMacro === m.code ? <Check size={10} className="text-emerald-500" /> : <Copy size={10} className="text-gray-600 opacity-0 group-hover:opacity-100" />}
                                    </div>
                                    <p className="text-[8px] text-gray-600 font-bold uppercase tracking-tighter">{m.desc}</p>
                                  </button>
                                ))}
                             </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <input 
                        type="url" 
                        value={landingUrl}
                        onChange={(e) => setLandingUrl(e.target.value)}
                        placeholder="https://mysite.com/?cid={clickid}&zone={placement_id}" 
                        className="w-full bg-[#050505] border border-white/10 rounded-2xl py-5 px-8 focus:border-blue-500 outline-none text-white font-mono text-sm transition-all placeholder-gray-800" 
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="p-8 border-2 border-dashed border-white/10 rounded-[40px] text-center hover:border-blue-500/40 transition-all group cursor-pointer bg-white/[0.01]">
                          <div className="w-14 h-14 bg-white/5 text-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:text-blue-500 transition-all">
                             <Upload size={24} />
                          </div>
                          <h4 className="text-sm font-black mb-1">Creative Assets</h4>
                          <p className="text-[10px] text-gray-500 font-medium px-4">Upload main image and icon (JPG/PNG, Max 2MB).</p>
                       </div>
                       <div className="p-8 border-2 border-dashed border-white/10 rounded-[40px] text-center hover:border-emerald-500/40 transition-all group cursor-pointer bg-white/[0.01]">
                          <div className="w-14 h-14 bg-white/5 text-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:text-emerald-500 transition-all">
                             <Monitor size={24} />
                          </div>
                          <h4 className="text-sm font-black mb-1">Verify Preview</h4>
                          <p className="text-[10px] text-gray-500 font-medium px-4">Generate dynamic preview of your landing page assets.</p>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Geo & Bid */}
              <div className="space-y-8 pt-8 border-t border-white/5">
                 <h3 className="text-[10px] font-black uppercase text-gray-600 tracking-[0.2em] flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Countries & Rates
                 </h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex gap-6 mb-2">
                        <label className="flex items-center gap-2 cursor-pointer group">
                          <div className="w-4 h-4 rounded-full border-2 border-blue-500 flex items-center justify-center">
                            <div className="w-2 h-2 bg-blue-500 rounded-full" />
                          </div>
                          <span className="text-[10px] font-black uppercase text-white tracking-widest">Select One</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer group opacity-30">
                          <div className="w-4 h-4 rounded-full border-2 border-gray-600" />
                          <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">Bulk Input</span>
                        </label>
                      </div>
                      <select className="w-full bg-[#050505] border border-white/10 rounded-2xl py-4 px-6 font-bold text-white outline-none focus:border-blue-500 appearance-none cursor-pointer">
                        <option>USA - United States (Tier 1)</option>
                        <option>GBR - United Kingdom (Tier 1)</option>
                        <option>DEU - Germany (Tier 1)</option>
                        <option>CAN - Canada (Tier 1)</option>
                        <option>FRA - France (Tier 1)</option>
                        <option>IND - India (Tier 3)</option>
                      </select>
                    </div>
                    
                    <div className="flex items-end gap-4">
                      <div className="flex-1 space-y-2">
                        <label className="text-[10px] font-black uppercase text-gray-600 tracking-widest px-1">Price per {pricingModel}</label>
                        <div className="relative group">
                          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-blue-500 font-black">$</span>
                          <input type="number" step="0.001" placeholder="0.850" className="w-full bg-[#050505] border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-xl font-black text-white outline-none focus:border-blue-500 transition-all" />
                        </div>
                      </div>
                      <button className="px-6 py-4 bg-white/5 border border-white/10 rounded-2xl font-black text-[10px] uppercase text-gray-500 hover:text-white transition-all whitespace-nowrap active:scale-95">Add GEO</button>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Section 2: Optional Settings */}
          <div className="bg-[#0a0a0a] border border-white/5 rounded-[48px] p-8 lg:p-12 shadow-2xl space-y-12">
            <div className="flex items-center gap-3 pb-6 border-b border-white/5">
               <div className="p-2.5 bg-purple-600/10 text-purple-500 rounded-xl border border-purple-500/20"><Filter size={20} /></div>
               <h2 className="text-2xl font-black">Optional Targeting</h2>
            </div>

            <div className="space-y-10">
               {/* Targeting Tabs */}
               <div className="flex border-b border-white/5 overflow-x-auto no-scrollbar scroll-smooth">
                  {['OS', 'BROWSER', 'LANGUAGE', 'DAY OF WEEK', 'TIME RANGE', 'CARRIER'].map(tab => (
                    <button 
                      key={tab} 
                      onClick={() => setActiveTargetingTab(tab)}
                      className={`px-8 py-5 text-[10px] font-black uppercase tracking-[0.2em] transition-all relative whitespace-nowrap ${
                        activeTargetingTab === tab ? 'text-blue-500' : 'text-gray-600 hover:text-gray-400'
                      }`}
                    >
                      {tab}
                      {activeTargetingTab === tab && <motion.div layoutId="tabUnderline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />}
                    </button>
                  ))}
               </div>

               {/* Rule Builder Container */}
               <div className="min-h-[200px]">
                  <AnimatePresence mode="wait">
                    {activeTargetingTab === 'OS' && (
                      <motion.div key="os" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-4">
                        {osRules.map(rule => (
                          <div key={rule.id} className="flex flex-wrap items-end gap-4 p-8 bg-[#050505] border border-white/10 rounded-[32px] group hover:border-blue-500/20 transition-all">
                             <div className="flex-1 min-w-[150px] space-y-2">
                                <label className="text-[10px] font-black text-gray-700 uppercase">Operating System</label>
                                <select className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl py-3 px-4 text-xs font-black text-white outline-none">
                                   <option>Android (All)</option>
                                   <option>iOS (iPhone/iPad)</option>
                                   <option>Windows Desktop</option>
                                   <option>macOS</option>
                                   <option>Linux</option>
                                </select>
                             </div>
                             <div className="w-32 space-y-2">
                                <label className="text-[10px] font-black text-gray-700 uppercase">Action</label>
                                <select className="w-full bg-blue-600/10 border border-blue-500/20 rounded-xl py-3 px-4 text-[10px] font-black uppercase text-blue-400 outline-none">
                                   <option>Include</option>
                                   <option>Exclude</option>
                                </select>
                             </div>
                             <div className="flex-1 min-w-[150px] space-y-2">
                                <label className="text-[10px] font-black text-gray-700 uppercase">Min. Version</label>
                                <select className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl py-3 px-4 text-xs font-black text-white outline-none">
                                   <option>Any Version</option>
                                   <option>Android 14.0 (Upside Down Cake)</option>
                                   <option>Android 13.0 (Tiramisu)</option>
                                   <option>iOS 17.0+</option>
                                   <option>iOS 16.0+</option>
                                   <option>Windows 11</option>
                                </select>
                             </div>
                             <button onClick={() => removeRule('OS', rule.id)} className="p-3 bg-red-500/5 text-red-500/40 hover:text-red-500 rounded-xl transition-colors">
                                <Trash2 size={18} />
                             </button>
                          </div>
                        ))}
                      </motion.div>
                    )}

                    {activeTargetingTab === 'BROWSER' && (
                      <motion.div key="browser" initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="space-y-4">
                        {browserRules.map(rule => (
                          <div key={rule.id} className="flex flex-wrap items-end gap-4 p-8 bg-[#050505] border border-white/10 rounded-[32px] group hover:border-blue-500/20 transition-all">
                             <div className="flex-1 min-w-[150px] space-y-2">
                                <label className="text-[10px] font-black text-gray-700 uppercase">Select Browser</label>
                                <select className="w-full bg-[#0a0a0a] border border-white/5 rounded-xl py-3 px-4 text-xs font-black text-white outline-none">
                                   <option>Chrome (Desktop & Mobile)</option>
                                   <option>Safari / WebKit</option>
                                   <option>Firefox (Gecko)</option>
                                   <option>Edge (Chromium)</option>
                                   <option>Samsung Browser</option>
                                   <option>In-App WebView</option>
                                </select>
                             </div>
                             <div className="w-32 space-y-2">
                                <label className="text-[10px] font-black text-gray-700 uppercase">Action</label>
                                <select className="w-full bg-blue-600/10 border border-blue-500/20 rounded-xl py-3 px-4 text-[10px] font-black uppercase text-blue-400 outline-none">
                                   <option>Include</option>
                                   <option>Exclude</option>
                                </select>
                             </div>
                             <button onClick={() => removeRule('BROWSER', rule.id)} className="p-3 bg-red-500/5 text-red-500/40 hover:text-red-500 rounded-xl transition-colors">
                                <Trash2 size={18} />
                             </button>
                          </div>
                        ))}
                      </motion.div>
                    )}
                    
                    {/* Placeholder for other tabs - logic remains the same */}
                    {['LANGUAGE', 'DAY OF WEEK', 'TIME RANGE', 'CARRIER'].includes(activeTargetingTab) && (
                      <motion.div key="coming" className="flex flex-col items-center justify-center py-10 opacity-50">
                        <Zap size={32} className="text-gray-700 mb-4 animate-pulse" />
                        <p className="text-[10px] font-black uppercase text-gray-600 tracking-widest">Detailed {activeTargetingTab} Options Loading...</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <button 
                    onClick={() => addRule(activeTargetingTab)}
                    className="mt-6 flex items-center gap-3 px-8 py-4 bg-white/[0.02] border border-white/5 rounded-2xl text-blue-500 hover:text-blue-400 font-black text-[10px] uppercase tracking-widest transition-all"
                  >
                    <PlusCircle size={18} /> New {activeTargetingTab} Rule
                  </button>
               </div>
            </div>

            {/* Limits Section */}
            <div className="pt-12 border-t border-white/5">
               <h3 className="text-[10px] font-black uppercase text-gray-600 tracking-[0.2em] mb-10 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Cappings & Safeguards
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <h4 className="text-sm font-black text-gray-300">Impression Capping</h4>
                       <div className="flex items-center gap-3">
                          <span className="text-[10px] font-black text-gray-600 uppercase">Auto-Scale</span>
                          <div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
                       </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-2">
                          <label className="text-[8px] font-black text-gray-600 uppercase">Hourly Cap</label>
                          <input type="number" placeholder="No Limit" className="w-full bg-[#050505] border border-white/5 rounded-xl py-3 px-4 text-xs text-white" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[8px] font-black text-gray-600 uppercase">Daily Cap</label>
                          <input type="number" placeholder="No Limit" className="w-full bg-[#050505] border border-white/5 rounded-xl py-3 px-4 text-xs text-white" />
                       </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                       <h4 className="text-sm font-black text-gray-300">Financial Limits</h4>
                       <div className="flex items-center gap-3">
                          <span className="text-[10px] font-black text-gray-600 uppercase">Hard Stop</span>
                          <div className="w-10 h-5 bg-blue-600 rounded-full relative cursor-pointer"><div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div></div>
                       </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="space-y-2">
                          <label className="text-[8px] font-black text-gray-600 uppercase">Daily Budget ($)</label>
                          <input type="number" placeholder="50.00" className="w-full bg-[#050505] border border-white/5 rounded-xl py-3 px-4 text-xs text-white font-bold" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[8px] font-black text-gray-600 uppercase">Total Budget ($)</label>
                          <input type="number" placeholder="500.00" className="w-full bg-[#050505] border border-white/5 rounded-xl py-3 px-4 text-xs text-white font-bold" />
                       </div>
                    </div>
                  </div>
               </div>
            </div>

            {/* Advanced Section */}
            <div className="pt-12 border-t border-white/5">
               <h3 className="text-[10px] font-black uppercase text-gray-600 tracking-[0.2em] mb-10 flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" /> Advanced Command Suite
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px] space-y-6 group hover:border-blue-500/30 transition-all cursor-pointer">
                     <div className="w-10 h-10 bg-blue-600/10 text-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <FileText size={18} />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Source Filter</p>
                        <h4 className="text-sm font-black text-white">White/Black Lists</h4>
                     </div>
                     <p className="text-[10px] text-gray-600 leading-relaxed font-bold">Upload TXT or CSV with placement IDs to include or exclude specific inventory sources.</p>
                     <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-black text-[9px] uppercase text-gray-400 group-hover:text-blue-400 group-hover:border-blue-500/20 transition-all">Create Logic List</button>
                  </div>

                  <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px] space-y-6 group hover:border-emerald-500/30 transition-all cursor-pointer">
                     <div className="w-10 h-10 bg-emerald-600/10 text-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Globe size={18} />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Infrastructure</p>
                        <h4 className="text-sm font-black text-white">IP Range Targeting</h4>
                     </div>
                     <p className="text-[10px] text-gray-600 leading-relaxed font-bold">Target specific subnets, proxy servers, or data centers for high-security offer fulfillment.</p>
                     <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-black text-[9px] uppercase text-gray-400 group-hover:text-emerald-400 group-hover:border-emerald-500/20 transition-all">Configure IP Sync</button>
                  </div>

                  <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[40px] space-y-6 group hover:border-purple-500/30 transition-all cursor-pointer">
                     <div className="w-10 h-10 bg-purple-600/10 text-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Target size={18} />
                     </div>
                     <div>
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-1">Yield Control</p>
                        <h4 className="text-sm font-black text-white">Custom Bid Logic</h4>
                     </div>
                     <p className="text-[10px] text-gray-600 leading-relaxed font-bold">Set different bid amounts per Zone ID to dominate specific premium placements in real-time.</p>
                     <button className="w-full py-4 bg-white/5 border border-white/10 rounded-2xl font-black text-[9px] uppercase text-gray-400 group-hover:text-purple-400 group-hover:border-blue-500/20 transition-all">Open Bid Manager</button>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* RIGHT: STICKY ESTIMATOR SIDEBAR */}
        <aside className="xl:col-span-4 h-fit sticky top-28 space-y-6">
           <div className="bg-[#0a0a0a] border border-white/5 rounded-[48px] p-8 lg:p-10 shadow-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none group-hover:scale-110 duration-700">
                 <Target size={300} />
              </div>
              
              <div className="relative z-10">
                 <div className="flex items-center gap-4 mb-10">
                    <div className="p-3 bg-emerald-600/10 text-emerald-500 rounded-2xl border border-emerald-500/20"><Activity size={20} /></div>
                    <div>
                       <h3 className="text-xl font-black">Smart Estimator</h3>
                       <p className="text-[8px] font-black text-gray-600 uppercase tracking-widest mt-1">Real-time Traffic Pipeline</p>
                    </div>
                 </div>
                 
                 <div className="space-y-8">
                    <div className="p-6 bg-white/[0.01] border border-white/5 rounded-[32px] space-y-6">
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Est. Daily Reach</span>
                          <div className="flex items-center gap-2">
                             <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                             <span className="text-lg font-black text-white">420,000+</span>
                          </div>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Auction Intensity</span>
                          <div className="flex gap-1.5">
                             {[1,2,3,4,5].map(i => <div key={i} className={`w-6 h-1.5 rounded-full transition-all duration-1000 ${i <= 3 ? 'bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.4)]' : 'bg-white/5'}`} />)}
                          </div>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-[10px] font-black text-gray-600 uppercase tracking-widest">Recommended Bid</span>
                          <span className="text-lg font-black text-emerald-500">$0.852</span>
                       </div>
                    </div>

                    <div className="bg-yellow-600/5 border border-yellow-500/20 p-6 rounded-[32px] flex gap-4">
                       <AlertTriangle className="text-yellow-500 shrink-0" size={18} />
                       <p className="text-[10px] text-yellow-500/80 font-bold leading-relaxed uppercase tracking-tighter">
                         Based on your <span className="text-white">Tier-1 GEO</span> selection and <span className="text-white">Popunder</span> format, a bid under <span className="text-white">$0.65</span> may result in lower winning frequency.
                       </p>
                    </div>

                    <button className="w-full py-5 bg-blue-600 rounded-[28px] font-black text-white text-[11px] uppercase tracking-widest hover:bg-blue-500 transition-all shadow-xl active:scale-95">
                       Refresh Forecast
                    </button>
                 </div>
              </div>
           </div>

           {/* Priority Support Widget */}
           <div className="bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[48px] p-10 text-white shadow-3xl shadow-blue-600/20 relative overflow-hidden group">
              <div className="absolute top-[-40px] right-[-40px] w-60 h-60 bg-white/10 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-1000" />
              <div className="relative z-10">
                 <h4 className="text-2xl font-black mb-4 leading-tight">Need Expert Optimization?</h4>
                 <p className="text-blue-100 text-xs mb-10 leading-relaxed font-bold uppercase tracking-wide opacity-80">
                   Our yield engineers can assist with your macro configuration and whitelist segmentation.
                 </p>
                 <button className="w-full py-5 bg-white text-blue-900 rounded-[24px] font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-all shadow-2xl flex items-center justify-center gap-3">
                    Contact My Manager <MessageSquare size={16} />
                 </button>
              </div>
           </div>
        </aside>
      </div>

      {/* MOBILE ONLY: FLOATING ACTION BAR */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-6 bg-[#050505]/90 backdrop-blur-2xl border-t border-white/10 xl:hidden">
         <div className="flex gap-4">
            <button className="flex-1 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-gray-400 text-xs uppercase tracking-widest">Draft</button>
            <button className="flex-[2] py-5 bg-blue-600 rounded-2xl font-black text-white text-xs uppercase tracking-widest shadow-3xl">Launch Now</button>
         </div>
      </div>
    </div>
  );
};

// Internal icon for Activity since it was missing in original imports
const Activity = ({ size, className }: { size: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
  </svg>
);

export default CreateCampaign;
