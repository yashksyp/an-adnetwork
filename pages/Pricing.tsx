
import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Filter, 
  ArrowUpRight, 
  Calculator, 
  Globe, 
  TrendingUp, 
  Zap, 
  DollarSign,
  Activity,
  Layers,
  MousePointer2,
  Users,
  Eye,
  Target,
  Info
} from 'lucide-react';

const Pricing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [calcMode, setCalcMode] = useState<'advertiser' | 'publisher'>('publisher');
  const [calcFormat, setCalcFormat] = useState<'push' | 'pop' | 'native' | 'inter' | 'banner' | 'text'>('pop');
  const [calcGeo, setCalcGeo] = useState('US');
  const [calcVolume, setCalcVolume] = useState(100000);
  const [calcCtr, setCalcCtr] = useState(1.5); // Percentage
  const [userBid, setUserBid] = useState(0.5);

  const rates = [
    { country: 'United States', code: 'US', tier: 'Tier 1', push: 0.85, pop: 1.20, native: 0.45, inter: 3.50, banner: 0.25, text: 0.15, trend: 'up' },
    { country: 'United Kingdom', code: 'GB', tier: 'Tier 1', push: 0.72, pop: 1.05, native: 0.40, inter: 3.10, banner: 0.22, text: 0.12, trend: 'stable' },
    { country: 'Germany', code: 'DE', tier: 'Tier 1', push: 0.65, pop: 0.95, native: 0.38, inter: 2.80, banner: 0.20, text: 0.10, trend: 'up' },
    { country: 'Canada', code: 'CA', tier: 'Tier 1', push: 0.68, pop: 0.90, native: 0.35, inter: 2.90, banner: 0.21, text: 0.11, trend: 'stable' },
    { country: 'France', code: 'FR', tier: 'Tier 1', push: 0.55, pop: 0.85, native: 0.30, inter: 2.50, banner: 0.18, text: 0.09, trend: 'up' },
    { country: 'Brazil', code: 'BR', tier: 'Tier 2', push: 0.15, pop: 0.25, native: 0.12, inter: 0.80, banner: 0.08, text: 0.04, trend: 'down' },
    { country: 'India', code: 'IN', tier: 'Tier 3', push: 0.08, pop: 0.15, native: 0.05, inter: 0.40, banner: 0.04, text: 0.02, trend: 'up' },
  ];

  const filteredRates = rates.filter(r => 
    r.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get current market rate for selected GEO/Format
  const marketRate = useMemo(() => {
    const selected = rates.find(r => r.code === calcGeo) || rates[0];
    return selected[calcFormat] || 0.1;
  }, [calcGeo, calcFormat]);

  // Sync user bid with market rate when GEO/Format changes
  useEffect(() => {
    setUserBid(marketRate);
  }, [marketRate]);

  // Comprehensive Calculator Logic
  const stats = useMemo(() => {
    const clicks = Math.round(calcVolume * (calcCtr / 100));
    
    // Logic for Advertiser (Cost)
    // Pop/Push/Inter/Banner usually CPM, Native/Text usually CPC in our simulator logic
    let totalCost = 0;
    const isCPC = calcFormat === 'native' || calcFormat === 'text';
    if (isCPC) {
      totalCost = clicks * userBid;
    } else {
      totalCost = (calcVolume / 1000) * userBid;
    }

    // Logic for Publisher (Revenue)
    // Publishers get a 80% share of the market rate
    const revShare = 0.8;
    const publisherRevenue = isCPC ? (clicks * marketRate * revShare) : ((calcVolume / 1000) * marketRate * revShare);

    return {
      clicks,
      totalCost,
      publisherRevenue,
      marketRate,
      recommendedBid: marketRate * 1.1 // Suggesting a 10% higher bid for winning auctions
    };
  }, [calcVolume, calcCtr, userBid, calcFormat, marketRate]);

  const bidStatus = userBid >= stats.recommendedBid ? 'Optimal' : userBid >= marketRate ? 'Competitive' : 'Low';

  return (
    <div className="bg-[#050505] selection:bg-blue-600/30 min-h-screen">
      {/* Premium Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden px-4">
        <div className="absolute inset-0 z-0 opacity-10">
           <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-[10px] font-black tracking-[0.2em] text-blue-400 uppercase bg-blue-400/5 rounded-lg border border-blue-400/20">
              <Activity size={14} className="animate-pulse" /> Real-Time Yield Engine
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
              Bidding <br/>Intelligence <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-200">Suite.</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Analyze market depth, calculate conversion costs, and predict revenue outcomes with our advanced simulator covering all 6 ad formats.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Advanced Yield & Cost Analyzer */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[60px] overflow-hidden shadow-3xl">
            <div className="bg-[#0a0a0a]/95 backdrop-blur-3xl rounded-[59px] p-8 lg:p-16">
               <div className="flex flex-col lg:flex-row gap-16">
                  {/* Controls Side */}
                  <div className="flex-1 space-y-10">
                    <div className="flex justify-between items-center">
                       <h2 className="text-3xl font-black flex items-center gap-4">
                         <Calculator className="text-blue-500" /> Simulator v2.0
                       </h2>
                       <div className="flex bg-white/5 p-1 rounded-2xl border border-white/5">
                          <button 
                            onClick={() => setCalcMode('publisher')}
                            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase transition-all ${calcMode === 'publisher' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
                          >
                            Publisher
                          </button>
                          <button 
                            onClick={() => setCalcMode('advertiser')}
                            className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase transition-all ${calcMode === 'advertiser' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
                          >
                            Advertiser
                          </button>
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                       <div className="space-y-4">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                            <Globe size={12} /> Target GEO
                          </label>
                          <select 
                            value={calcGeo} 
                            onChange={(e) => setCalcGeo(e.target.value)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-blue-500 outline-none appearance-none font-bold text-white transition-colors"
                          >
                            {rates.map(r => <option key={r.code} value={r.code} className="bg-black">{r.country} ({r.tier})</option>)}
                          </select>
                       </div>
                       <div className="space-y-4">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-2">
                            <Layers size={12} /> Ad Format
                          </label>
                          <select 
                            value={calcFormat} 
                            onChange={(e) => setCalcFormat(e.target.value as any)}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:border-blue-500 outline-none appearance-none font-bold text-white transition-colors"
                          >
                            <option value="pop" className="bg-black">Popunder (CPM)</option>
                            <option value="push" className="bg-black">Push Notification (CPM)</option>
                            <option value="native" className="bg-black">Native Widget (CPC)</option>
                            <option value="inter" className="bg-black">Interstitial (CPM)</option>
                            <option value="banner" className="bg-black">Display Banner (CPM)</option>
                            <option value="text" className="bg-black">Text Ads (CPC)</option>
                          </select>
                       </div>
                    </div>

                    <div className="space-y-6">
                      <div className="flex justify-between items-end">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Total Impressions</label>
                        <span className="text-xl font-black text-white">{calcVolume.toLocaleString()}</span>
                      </div>
                      <input 
                        type="range" min="1000" max="5000000" step="5000" 
                        value={calcVolume} 
                        onChange={(e) => setCalcVolume(parseInt(e.target.value))}
                        className="w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer accent-blue-600"
                      />
                    </div>

                    <div className="space-y-6">
                      <div className="flex justify-between items-end">
                        <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Estimated CTR (%)</label>
                        <span className="text-xl font-black text-blue-500">{calcCtr}%</span>
                      </div>
                      <input 
                        type="range" min="0.1" max="10" step="0.1" 
                        value={calcCtr} 
                        onChange={(e) => setCalcCtr(parseFloat(e.target.value))}
                        className="w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer accent-blue-600"
                      />
                    </div>

                    {calcMode === 'advertiser' && (
                      <div className="space-y-6">
                        <div className="flex justify-between items-end">
                          <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Your Bid ({ (calcFormat === 'native' || calcFormat === 'text') ? 'CPC' : 'CPM' })</label>
                          <div className="flex items-center gap-2">
                             <span className={`text-[10px] font-black px-2 py-1 rounded-md uppercase ${
                               bidStatus === 'Optimal' ? 'bg-emerald-500/20 text-emerald-500' :
                               bidStatus === 'Competitive' ? 'bg-blue-500/20 text-blue-500' : 'bg-red-500/20 text-red-500'
                             }`}>{bidStatus}</span>
                             <span className="text-xl font-black text-white">${userBid.toFixed(3)}</span>
                          </div>
                        </div>
                        <input 
                          type="range" min="0.01" max="10.0" step="0.01" 
                          value={userBid} 
                          onChange={(e) => setUserBid(parseFloat(e.target.value))}
                          className="w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer accent-blue-600"
                        />
                      </div>
                    )}
                  </div>

                  {/* Results Side */}
                  <div className="lg:w-[400px] flex flex-col gap-6">
                     <div className="p-10 bg-blue-600 rounded-[48px] text-white relative overflow-hidden shadow-2xl shadow-blue-600/30 group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
                           <TrendingUp size={160} />
                        </div>
                        <div className="relative z-10">
                           <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-2">
                              {calcMode === 'advertiser' ? 'Estimated Total Cost' : 'Monthly Revenue Share'}
                           </p>
                           <h3 className="text-6xl font-black mb-8 leading-none">
                              ${(calcMode === 'advertiser' ? stats.totalCost : stats.publisherRevenue * 30).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                           </h3>
                           <div className="space-y-4 pt-8 border-t border-white/10">
                              <div className="flex justify-between text-xs font-bold">
                                 <span className="opacity-60">Total Clicks</span>
                                 <span>{stats.clicks.toLocaleString()}</span>
                              </div>
                              <div className="flex justify-between text-xs font-bold">
                                 <span className="opacity-60">Recommended Bid</span>
                                 <span>${stats.recommendedBid.toFixed(3)}</span>
                              </div>
                              <div className="flex justify-between text-xs font-bold">
                                 <span className="opacity-60">Market Average</span>
                                 <span>${stats.marketRate.toFixed(3)}</span>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div className="flex-1 p-8 bg-white/5 border border-white/10 rounded-[40px] space-y-6">
                        <h4 className="text-sm font-black uppercase tracking-widest text-gray-500">Live Insights</h4>
                        <div className="space-y-4">
                           <div className="flex gap-4">
                              <div className="p-2 bg-blue-500/10 text-blue-500 rounded-lg h-fit"><Info size={16} /></div>
                              <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
                                 {calcMode === 'advertiser' 
                                   ? `Based on your bid of $${userBid}, you will compete for premium placements in ${calcGeo} using ${calcFormat}.`
                                   : `Publishers in ${calcGeo} are currently seeing a 100% fill rate for ${calcFormat} formats.`}
                              </p>
                           </div>
                           <div className="flex gap-4">
                              <div className="p-2 bg-emerald-500/10 text-emerald-500 rounded-lg h-fit"><Target size={16} /></div>
                              <p className="text-[10px] text-gray-400 font-medium leading-relaxed">
                                 Expected CPC equivalent: <span className="text-white font-bold">${(stats.totalCost / (stats.clicks || 1)).toFixed(3)}</span>
                              </p>
                           </div>
                        </div>
                        <button className="w-full py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl">
                           {calcMode === 'advertiser' ? 'Launch Campaign' : 'Start Monetizing'}
                        </button>
                     </div>
                  </div>
               </div>

               {/* Metrics Output Grid */}
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/5">
                  <div className="text-center">
                    <div className="flex justify-center mb-3 text-blue-500"><Eye size={24} /></div>
                    <p className="text-[10px] font-black text-gray-600 uppercase mb-1">Reach</p>
                    <p className="text-2xl font-black text-white">{calcVolume.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-3 text-emerald-500"><MousePointer2 size={24} /></div>
                    <p className="text-[10px] font-black text-gray-600 uppercase mb-1">Clicks</p>
                    <p className="text-2xl font-black text-white">{stats.clicks.toLocaleString()}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-3 text-purple-500"><Target size={24} /></div>
                    <p className="text-[10px] font-black text-gray-600 uppercase mb-1">CTR</p>
                    <p className="text-2xl font-black text-white">{calcCtr}%</p>
                  </div>
                  <div className="text-center">
                    <div className="flex justify-center mb-3 text-amber-500"><DollarSign size={24} /></div>
                    <p className="text-[10px] font-black text-gray-600 uppercase mb-1">{ (calcFormat === 'native' || calcFormat === 'text') ? 'CPC' : 'CPM' }</p>
                    <p className="text-2xl font-black text-white">${(calcMode === 'advertiser' ? userBid : marketRate).toFixed(2)}</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Traffic Rates & Estimates */}
      <section className="py-20 px-4 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">Traffic Rates & Estimates</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Transparent pricing based on real-time market bidding for all premium formats.
            </p>
          </header>

          <div className="bg-[#0a0a0a] border border-white/10 rounded-[40px] overflow-hidden shadow-2xl">
            <div className="p-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 bg-white/[0.02]">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="text" 
                  placeholder="Search countries..."
                  className="w-full bg-[#050505] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors font-bold"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black uppercase hover:bg-white/10 transition-colors">
                  <Filter size={14} /> Filter Formats
                </button>
                <button className="flex items-center gap-2 px-6 py-4 bg-blue-600 rounded-2xl text-[10px] font-black uppercase text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/20">
                  Export CSV Data
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white/[0.03] text-gray-500 text-[10px] uppercase font-black tracking-widest">
                  <tr>
                    <th className="px-10 py-6">GEO / Tier</th>
                    <th className="px-10 py-6">Push CPM</th>
                    <th className="px-10 py-6">Pop CPM</th>
                    <th className="px-10 py-6">Native CPC</th>
                    <th className="px-10 py-6">Interstitial CPM</th>
                    <th className="px-10 py-6">Banner CPM</th>
                    <th className="px-10 py-6">Text CPC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredRates.map((rate, i) => (
                    <motion.tr 
                      key={rate.code} 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-white/[0.02] transition-colors group"
                    >
                      <td className="px-10 py-8 font-black flex items-center gap-4">
                         <div className="w-10 h-8 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-[10px] text-gray-400 font-black">
                           {rate.code}
                         </div>
                         <div className="flex flex-col">
                           <span className="text-white group-hover:text-blue-500 transition-colors">{rate.country}</span>
                           <span className="text-[9px] text-gray-600 font-black uppercase tracking-widest">{rate.tier}</span>
                         </div>
                      </td>
                      <td className="px-10 py-8 text-blue-400 font-mono font-black">${rate.push.toFixed(2)}</td>
                      <td className="px-10 py-8 text-emerald-400 font-mono font-black">${rate.pop.toFixed(2)}</td>
                      <td className="px-10 py-8 text-purple-400 font-mono font-black">${rate.native.toFixed(2)}</td>
                      <td className="px-10 py-8 text-rose-400 font-mono font-black">${rate.inter.toFixed(2)}</td>
                      <td className="px-10 py-8 text-cyan-400 font-mono font-black">${rate.banner.toFixed(2)}</td>
                      <td className="px-10 py-8 text-amber-400 font-mono font-black">${rate.text.toFixed(2)}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-40 px-4">
        <div className="max-w-5xl mx-auto">
           <div className="relative p-20 lg:p-32 bg-blue-600 rounded-[80px] text-center overflow-hidden shadow-3xl">
              <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                 <DollarSign size={500} strokeWidth={0.5} color="white" />
              </div>
              <div className="relative z-10">
                <h2 className="text-5xl md:text-7xl font-black mb-10 text-white tracking-tighter">Ready to Scale?</h2>
                <p className="text-xl text-blue-100 mb-16 max-w-2xl mx-auto font-medium leading-relaxed">
                  Join 18,000+ marketers and publishers using PixelVisionAds to dominate their verticals with transparent market rates across all 6 formats.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-8">
                  <button className="px-12 py-6 bg-white text-blue-600 rounded-[32px] font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl">
                    Create Campaign
                  </button>
                  <button className="px-12 py-6 bg-blue-800 text-white rounded-[32px] font-black text-xs uppercase tracking-widest border border-blue-400/30 hover:bg-blue-900 transition-all">
                    Talk to Yield Expert
                  </button>
                </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
