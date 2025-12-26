
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  Target, 
  MousePointer2, 
  ArrowUpRight, 
  ChevronRight,
  Filter,
  DollarSign,
  Globe,
  Wallet,
  PlayCircle,
  Sparkles,
  Copy,
  Check,
  Monitor,
  Smartphone,
  Tablet,
  Layout,
  Cpu,
  Apple,
  Chrome,
  Terminal,
  /* Added missing Zap icon import */
  Zap
} from 'lucide-react';
import GlassCard from '../../components/GlassCard';
import { useAuth } from '../../contexts/AuthContext';

const Overview: React.FC = () => {
  const { user } = useAuth();
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const todayStats = [
    { label: 'Impressions', value: '0', color: 'text-orange-500' },
    { label: 'Clicks', value: '0', color: 'text-blue-500' },
    { label: 'Cost', value: '$0', color: 'text-white' },
    { label: 'CTR', value: '0%', color: 'text-white' },
  ];

  const offers = [
    { code: 'GET10', label: 'Extra 10% on Deposits of $100 or more.' },
    { code: 'RAIN15', label: 'FLAT 15% Extra on $500 or above - Max Bonus $300' }
  ];

  const topCampaigns = [
    { name: 'SmartPush_US_Main', clicks: 1240, imps: '45.2K', cost: '$38.40' },
    { name: 'Global_Pop_Entertainment', clicks: 850, imps: '210.5K', cost: '$21.05' },
    { name: 'Native_BFCM_Scale', clicks: 0, imps: '0', cost: '$0.00' },
  ];

  return (
    <div className="space-y-8 pb-20">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-4xl font-black mb-2 leading-none">Welcome to <span className="text-blue-500">PixelVisionAds</span></h1>
          <p className="text-gray-400 font-medium">Reach your right audience with PVA High-Performance Advertising Network.</p>
        </div>
        <button className="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-xs font-bold text-gray-300 hover:text-white transition-all">
          <Filter size={16} /> Today <ChevronRight size={16} />
        </button>
      </header>

      {/* Primary Grid: Stats, Tutorial, Offers */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Ads Overview Card */}
        <div className="lg:col-span-6 bg-[#0a0a0a] border border-white/5 rounded-[40px] p-8 lg:p-10 shadow-2xl relative overflow-hidden group">
           <div className="flex justify-between items-center mb-10">
              <div>
                <h2 className="text-2xl font-black">Ads Overview</h2>
                <p className="text-xs text-gray-500 mt-1 uppercase font-bold tracking-widest">This section displays your real-time performance</p>
              </div>
              <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-black uppercase text-gray-400 hover:text-white transition-colors">Today's Insights</button>
           </div>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {todayStats.map((s, i) => (
                <div key={i} className="space-y-2">
                   <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest">{s.label}</p>
                   <p className={`text-4xl font-black ${s.color}`}>{s.value}</p>
                </div>
              ))}
           </div>

           {/* Placeholder Chart Background */}
           <div className="absolute bottom-0 left-0 w-full h-24 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
              <TrendingUp size={400} strokeWidth={1} />
           </div>
        </div>

        {/* Tutorial Module */}
        <div className="lg:col-span-3 bg-[#0a0a0a] border border-white/5 rounded-[40px] p-8 flex flex-col justify-between group overflow-hidden relative shadow-2xl">
           <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles size={24} className="animate-pulse" />
              </div>
              <h3 className="text-xl font-black mb-3">How To Create Campaigns | Step-by-Step Tutorial</h3>
              <p className="text-xs text-gray-500 leading-relaxed font-medium">In this guide, we walk you through everything you need to know to get started scaling effectively.</p>
           </div>
           <div className="relative mt-8 rounded-3xl overflow-hidden aspect-video border border-white/5 group-hover:border-blue-500/30 transition-all">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-700" alt="tutorial" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-3xl shadow-blue-600/40 transform group-hover:scale-110 transition-transform cursor-pointer">
                    <PlayCircle size={40} fill="white" />
                 </div>
              </div>
           </div>
        </div>

        {/* Exclusive Offers Module */}
        <div className="lg:col-span-3 space-y-4">
           <div className="bg-blue-600 text-white p-6 rounded-t-[40px] rounded-b-xl flex items-center justify-between">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em]">Exclusive Offers</h3>
              <Zap size={14} fill="white" />
           </div>
           {offers.map((offer, i) => (
             <div key={i} className="bg-[#0a0a0a] border border-white/5 p-6 rounded-[32px] flex items-center justify-between gap-4 group shadow-xl">
                <p className="text-[11px] font-bold text-gray-400 leading-relaxed">
                   Enjoy an <span className="text-emerald-500 font-black">Extra 10%</span> on Deposits of <span className="text-emerald-500 font-black">$100 or more.</span> Grab Now!
                </p>
                <div className="flex shrink-0 border border-blue-500/20 rounded-xl overflow-hidden">
                   <div className="px-3 py-2 bg-blue-600/5 text-blue-400 font-mono font-black text-xs border-r border-blue-500/20">
                      {offer.code}
                   </div>
                   <button 
                     onClick={() => handleCopy(offer.code)}
                     className="px-3 py-2 bg-blue-600 text-white text-[10px] font-black uppercase hover:bg-blue-500 transition-colors"
                   >
                     {copiedCode === offer.code ? <Check size={12} /> : 'Copy'}
                   </button>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Secondary Grid: Top Campaigns, Countries, Devices, OS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Top 5 Campaigns */}
        <div className="lg:col-span-8 bg-[#0a0a0a] border border-white/5 rounded-[40px] overflow-hidden shadow-2xl">
           <div className="p-8 border-b border-white/5 flex justify-between items-center">
              <h3 className="text-xl font-black">Top 5 Campaigns</h3>
              <button className="text-blue-500 text-[10px] font-black uppercase tracking-widest hover:underline">View All</button>
           </div>
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest">
                    <tr>
                       <th className="px-8 py-4">Campaigns</th>
                       <th className="px-8 py-4">Clicks</th>
                       <th className="px-8 py-4">Impressions</th>
                       <th className="px-8 py-4 text-right">Cost</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5">
                    {topCampaigns.map((c, i) => (
                      <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                         <td className="px-8 py-5 text-sm font-bold text-white">{c.name}</td>
                         <td className="px-8 py-5 font-mono text-xs text-blue-500">{c.clicks}</td>
                         <td className="px-8 py-5 font-mono text-xs text-gray-400">{c.imps}</td>
                         <td className="px-8 py-5 font-mono text-xs text-emerald-500 text-right">{c.cost}</td>
                      </tr>
                    ))}
                    {topCampaigns.length === 0 && (
                      <tr>
                        <td colSpan={4} className="px-8 py-20 text-center text-gray-600 uppercase text-[10px] font-black tracking-widest">No Active Campaign Data</td>
                      </tr>
                    )}
                 </tbody>
              </table>
           </div>
        </div>

        {/* Traffic by Countries */}
        <div className="lg:col-span-4 bg-[#0a0a0a] border border-white/5 rounded-[40px] overflow-hidden shadow-2xl">
           <div className="p-8 border-b border-white/5">
              <h3 className="text-xl font-black">Traffic by Countries</h3>
           </div>
           <div className="p-0">
              <div className="bg-blue-600 text-white px-8 py-4 flex justify-between text-[10px] font-black uppercase tracking-widest">
                 <span>Country</span>
                 <span>Traffic</span>
              </div>
              <div className="divide-y divide-white/5">
                 {[
                   { name: 'United States', flag: '🇺🇸', val: '45%' },
                   { name: 'United Kingdom', flag: '🇬🇧', val: '18%' },
                   { name: 'Germany', flag: 'DE', val: '12%' },
                   { name: 'Canada', flag: 'CA', val: '8%' },
                 ].map((geo, i) => (
                   <div key={i} className="px-8 py-4 flex justify-between items-center group hover:bg-white/[0.02] transition-colors cursor-default">
                      <div className="flex items-center gap-3">
                         <span className="text-lg">{geo.flag}</span>
                         <span className="text-xs font-bold text-gray-300 group-hover:text-white transition-colors">{geo.name}</span>
                      </div>
                      <span className="text-xs font-black text-blue-500">{geo.val}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Traffic by Devices */}
        <div className="lg:col-span-6 bg-[#0a0a0a] border border-white/5 rounded-[40px] p-8 lg:p-10 shadow-2xl">
           <h3 className="text-xl font-black mb-12">Traffic by Devices</h3>
           <div className="grid grid-cols-3 gap-8">
              {[
                { label: 'Desktop', icon: <Monitor className="text-blue-500" />, val: '0%' },
                { label: 'Mobile', icon: <Smartphone className="text-orange-500" />, val: '0%' },
                { label: 'Tablet', icon: <Tablet className="text-yellow-500" />, val: '0%' }
              ].map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-4 group">
                   <div className="p-5 bg-white/5 border border-white/10 rounded-3xl group-hover:border-blue-500/30 transition-all group-hover:scale-110">
                      {d.icon}
                   </div>
                   <div className="text-center">
                      <p className="text-[10px] font-black text-gray-600 uppercase mb-1">{d.label}</p>
                      <p className="text-2xl font-black text-white">{d.val}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Traffic by Operating Systems */}
        <div className="lg:col-span-6 bg-[#0a0a0a] border border-white/5 rounded-[40px] p-8 lg:p-10 shadow-2xl">
           <h3 className="text-xl font-black mb-12">Traffic by Operating Systems</h3>
           <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'Windows', icon: <Layout className="text-blue-400" />, val: '0%' },
                { label: 'iOS/macOS', icon: <Apple className="text-gray-300" />, val: '0%' },
                { label: 'Linux', icon: <Terminal className="text-gray-500" />, val: '0%' },
                { label: 'Android', icon: <Smartphone className="text-emerald-500" />, val: '0%' }
              ].map((os, i) => (
                <div key={i} className="flex flex-col items-center gap-4 group">
                   <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:border-blue-500/30 transition-all group-hover:scale-110">
                      {os.icon}
                   </div>
                   <div className="text-center">
                      <p className="text-[10px] font-black text-gray-600 uppercase mb-1">{os.label}</p>
                      <p className="text-lg font-black text-white">{os.val}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
