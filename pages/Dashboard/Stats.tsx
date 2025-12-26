
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Calendar, 
  Download, 
  Filter, 
  Search, 
  ChevronDown,
  ArrowUpRight,
  RefreshCw
} from 'lucide-react';

const STATS_ROWS = [
  { date: '2024-10-14', campaign: 'Push-US-Main', imps: '45,200', clicks: '1,240', conv: '42', spend: '$38.40', roi: '142%' },
  { date: '2024-10-14', campaign: 'Pop-Global-All', imps: '210,500', clicks: '4,500', conv: '12', spend: '$21.05', roi: '-12%' },
  { date: '2024-10-13', campaign: 'Native-Finance-UK', imps: '12,400', clicks: '310', conv: '8', spend: '$12.40', roi: '85%' },
  { date: '2024-10-13', campaign: 'Push-US-Main', imps: '48,100', clicks: '1,310', conv: '38', spend: '$41.20', roi: '120%' },
  { date: '2024-10-12', campaign: 'Pop-Global-All', imps: '198,000', clicks: '4,200', conv: '15', spend: '$19.80', roi: '5%' },
];

const Stats: React.FC = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-black mb-2">Detailed Statistics</h1>
          <p className="text-gray-400">Deep dive into your campaign performance logs.</p>
        </div>
        <div className="flex gap-3">
          <button onClick={handleRefresh} className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all">
            <RefreshCw className={isRefreshing ? 'animate-spin' : ''} size={18} />
          </button>
          <button className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/10 transition-all flex items-center gap-2">
            <Calendar size={16} /> Oct 10 - Oct 14
          </button>
          <button className="px-6 py-3 bg-blue-600 rounded-xl text-xs font-bold hover:bg-blue-500 transition-all flex items-center gap-2 shadow-lg shadow-blue-600/20">
            <Download size={16} /> Export CSV
          </button>
        </div>
      </header>

      {/* Filters Bar */}
      <div className="bg-white/5 border border-white/10 p-6 rounded-[32px] flex flex-wrap gap-4 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
          <input 
            type="text" 
            placeholder="Search campaigns..."
            className="w-full bg-[#050505] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-xs font-bold focus:border-blue-500 outline-none transition-all"
          />
        </div>
        
        {['All Formats', 'All Countries', 'Desktop & Mobile'].map(filter => (
          <button key={filter} className="px-4 py-3 bg-[#050505] border border-white/10 rounded-xl text-xs font-bold text-gray-400 flex items-center gap-6 hover:border-white/20 transition-all">
            {filter} <ChevronDown size={14} />
          </button>
        ))}
        
        <button className="px-4 py-3 bg-blue-500/10 text-blue-500 border border-blue-500/20 rounded-xl text-xs font-bold flex items-center gap-2">
          <Filter size={16} /> Advanced Filters
        </button>
      </div>

      {/* Stats Table */}
      <div className="bg-[#0a0a0a] border border-white/10 rounded-[32px] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left">
            <thead className="bg-white/[0.02] text-gray-500 text-[10px] uppercase font-black tracking-widest border-b border-white/5">
              <tr>
                <th className="px-8 py-6">Date</th>
                <th className="px-8 py-6">Campaign</th>
                <th className="px-8 py-6">Impressions</th>
                <th className="px-8 py-6">Clicks</th>
                <th className="px-8 py-6">Conversions</th>
                <th className="px-8 py-6">Spend</th>
                <th className="px-8 py-6">ROI</th>
                <th className="px-8 py-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {STATS_ROWS.map((row, i) => (
                <motion.tr 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-white/[0.01] transition-colors"
                >
                  <td className="px-8 py-5 text-xs font-bold text-gray-500">{row.date}</td>
                  <td className="px-8 py-5">
                    <span className="text-sm font-bold text-white hover:text-blue-500 cursor-pointer">{row.campaign}</span>
                  </td>
                  <td className="px-8 py-5 font-mono text-xs">{row.imps}</td>
                  <td className="px-8 py-5 font-mono text-xs">{row.clicks}</td>
                  <td className="px-8 py-5 font-mono text-xs">{row.conv}</td>
                  <td className="px-8 py-5 font-black text-sm text-blue-500">{row.spend}</td>
                  <td className="px-8 py-5">
                    <span className={`text-xs font-black ${row.roi.startsWith('-') ? 'text-red-500' : 'text-green-500'}`}>
                      {row.roi}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 hover:bg-white/5 rounded-lg text-gray-500 hover:text-white transition-all">
                      <ArrowUpRight size={16} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Placeholder */}
        <div className="p-6 bg-white/[0.01] border-t border-white/5 flex justify-between items-center">
           <p className="text-xs text-gray-600 font-bold uppercase tracking-wider">Showing 1 to 5 of 128 results</p>
           <div className="flex gap-2">
             <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold opacity-50 cursor-not-allowed">Previous</button>
             <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold hover:bg-white/10 transition-all">Next</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
