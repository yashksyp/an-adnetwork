
import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  ArrowDownLeft, 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle,
  BarChart3,
  Calendar,
  Layers,
  Globe
} from 'lucide-react';
import GlassCard from '../../../components/GlassCard';
import { useNavigate } from 'react-router-dom';

const REVENUE_BY_FORMAT = [
  { format: 'Popunder', revenue: '$1,240.50', share: 45 },
  { format: 'Push', revenue: '$420.12', share: 15 },
  { format: 'Interstitial', revenue: '$380.00', share: 14 },
  { format: 'Native', revenue: '$310.00', share: 11 },
  { format: 'Banner', revenue: '$285.50', share: 10 },
  { format: 'Text Ads', revenue: '$140.00', share: 5 },
];

const Earnings: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
          <h1 className="text-3xl font-black mb-2">Revenue Reports</h1>
          <p className="text-gray-400">Detailed breakdown of your monetization performance across all channels.</p>
        </div>
        <div className="flex gap-4">
          <button className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/10 transition-all flex items-center gap-2">
            <Calendar size={16} /> Last 30 Days
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gradient-to-br from-green-600 to-emerald-800 rounded-[40px] p-10 relative overflow-hidden shadow-2xl shadow-green-600/20">
             <div className="absolute top-[-20%] right-[-20%] w-[200px] h-[200px] bg-white/10 rounded-full blur-[80px]"></div>
             <div className="relative z-10">
               <p className="text-[10px] font-black uppercase tracking-widest text-green-100/60 mb-2">Account Balance</p>
               <h2 className="text-5xl font-black text-white mb-8">$2,840.12</h2>
               <button 
                 onClick={() => navigate('/dashboard/withdraw')}
                 className="w-full bg-white text-emerald-900 py-4 rounded-2xl font-black text-sm shadow-xl hover:scale-105 transition-transform flex items-center justify-center gap-2"
               >
                 Go to Withdrawals <ArrowDownLeft size={18} />
               </button>
             </div>
          </div>

          <GlassCard>
            <h3 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-6">Revenue Mix</h3>
            <div className="space-y-5">
               {REVENUE_BY_FORMAT.map(item => (
                 <div key={item.format} className="space-y-1.5">
                   <div className="flex justify-between items-end">
                      <span className="text-xs font-bold text-gray-300">{item.format}</span>
                      <span className="text-xs font-black text-white">{item.revenue}</span>
                   </div>
                   <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                     <motion.div initial={{ width: 0 }} animate={{ width: `${item.share}%` }} className="h-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
                   </div>
                 </div>
               ))}
            </div>
          </GlassCard>
        </div>

        <div className="lg:col-span-2 space-y-8">
           <div className="bg-[#0a0a0a] border border-white/10 rounded-[32px] p-8">
              <div className="flex justify-between items-center mb-10">
                <h3 className="text-xl font-bold">Daily Earnings Trend</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-[10px] font-bold text-gray-500">Revenue</span>
                  </div>
                </div>
              </div>
              <div className="h-72 flex items-end justify-between gap-3 px-2">
                {[30, 45, 35, 55, 60, 40, 75, 50, 65, 80, 70, 95].map((h, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 1 }}
                    className="flex-1 bg-gradient-to-t from-green-600/20 to-green-500 rounded-lg group relative"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      ${h*2}
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between mt-4 px-2">
                {['Oct 1', 'Oct 4', 'Oct 7', 'Oct 10', 'Oct 13', 'Oct 14'].map(t => (
                  <span key={t} className="text-[10px] font-bold text-gray-600 tracking-widest">{t}</span>
                ))}
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <GlassCard>
                <div className="flex items-center gap-4 mb-4">
                   <div className="p-3 bg-blue-500/10 text-blue-500 rounded-2xl"><Globe size={24} /></div>
                   <div>
                     <p className="text-[10px] font-black uppercase text-gray-500">Top GEO</p>
                     <h4 className="text-xl font-black">United States</h4>
                   </div>
                </div>
                <p className="text-xs text-gray-400">US traffic contributes 42% of your total earnings this month.</p>
              </GlassCard>
              <GlassCard>
                <div className="flex items-center gap-4 mb-4">
                   <div className="p-3 bg-purple-500/10 text-purple-500 rounded-2xl"><Layers size={24} /></div>
                   <div>
                     <p className="text-[10px] font-black uppercase text-gray-500">Best Format</p>
                     <h4 className="text-xl font-black">Popunder</h4>
                   </div>
                </div>
                <p className="text-xs text-gray-400">Popunder ads have the highest eCPM at $4.22 average across our network.</p>
              </GlassCard>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Earnings;
