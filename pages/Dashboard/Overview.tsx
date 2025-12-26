
import React from 'react';
import { motion } from 'framer-motion';
// Added Wallet to the imports to fix the "Cannot find name 'Wallet'" error
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
  Wallet
} from 'lucide-react';
import GlassCard from '../../components/GlassCard';
import { useAuth } from '../../contexts/AuthContext';

const StatCard = ({ label, value, trend, icon, color }: any) => (
  <GlassCard>
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl bg-${color}-500/10 text-${color}-500 border border-${color}-500/10`}>
        {icon}
      </div>
      <div className={`flex items-center gap-1 text-[10px] font-bold ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'} bg-white/5 px-2 py-1 rounded-lg`}>
        {trend}
      </div>
    </div>
    <h3 className="text-3xl font-black mb-1">{value}</h3>
    <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">{label}</p>
  </GlassCard>
);

const Overview: React.FC = () => {
  const { user } = useAuth();
  const isPublisher = user?.role === 'publisher';

  if (isPublisher) {
    return (
      <div className="space-y-8">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-black mb-2">Earnings Overview</h1>
            <p className="text-gray-400">Monetization health and traffic performance.</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/10 transition-colors">
              <Filter size={14} /> Today
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard label="Today Earnings" value="$145.20" trend="+15.3%" icon={<DollarSign size={24} />} color="green" />
          <StatCard label="Yesterday" value="$128.45" trend="+2.1%" icon={<TrendingUp size={24} />} color="blue" />
          <StatCard label="Last 7 Days" value="$1,042.80" trend="+8.4%" icon={<Wallet size={24} />} color="purple" />
          <StatCard label="Lifetime" value="$14,230.15" trend="+102%" icon={<Target size={24} />} color="cyan" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Chart Card */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8">
            <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-bold">Revenue Graph</h3>
              <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-lg">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-[10px] font-bold text-green-500">Daily Revenue</span>
              </div>
            </div>

            <div className="h-72 flex items-end justify-between gap-3 px-2">
              {[30, 45, 35, 55, 60, 40, 75, 50, 65, 80, 70, 95].map((h, i) => (
                <motion.div 
                  key={i} 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, duration: 1 }}
                  className="flex-1 bg-gradient-to-t from-green-600/20 to-green-500 rounded-lg"
                />
              ))}
            </div>
            <div className="flex justify-between mt-4 px-2">
              {['1 Oct', '3 Oct', '5 Oct', '7 Oct', '9 Oct', '11 Oct'].map(t => (
                <span key={t} className="text-[10px] font-bold text-gray-600 tracking-widest">{t}</span>
              ))}
            </div>
          </div>

          {/* Traffic Snapshot */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col h-full">
            <h3 className="text-xl font-bold mb-8">Traffic Snapshot</h3>
            <div className="space-y-8 flex-1">
              {[
                { label: 'Impressions', value: '450.2K', trend: '+12%', color: 'blue' },
                { label: 'Clicks', value: '12.4K', trend: '+5%', color: 'purple' },
                { label: 'Avg. CTR', value: '2.75%', trend: '-0.2%', color: 'yellow' },
                { label: 'Avg. eCPM', value: '$3.22', trend: '+8%', color: 'green' },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <p className="text-[10px] font-black uppercase text-gray-500 mb-1">{item.label}</p>
                    <p className="text-xl font-black">{item.value}</p>
                  </div>
                  <div className={`text-[10px] font-bold ${item.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'} bg-white/5 px-2 py-1 rounded`}>
                    {item.trend}
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-xs font-black uppercase transition-all">
              Full Traffic Report
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Advertiser Dashboard (Original)
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-black mb-2">Performance Overview</h1>
          <p className="text-gray-400">Real-time data visualization of your current campaigns.</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-white/10 transition-colors">
            <Filter size={14} /> Last 7 Days
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Total Spend" value="$452.12" trend="+12.5%" icon={<TrendingUp size={24} />} color="blue" />
        <StatCard label="Impressions" value="1.2M" trend="+4.2%" icon={<Users size={24} />} color="purple" />
        <StatCard label="Total Clicks" value="24.5K" trend="-2.1%" icon={<MousePointer2 size={24} />} color="green" />
        <StatCard label="Conversions" value="482" trend="+18.7%" icon={<Target size={24} />} color="cyan" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <TrendingUp size={200} />
          </div>
          <div className="flex justify-between items-center mb-10">
            <div>
              <h3 className="text-xl font-bold">Campaign Delivery</h3>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Impressions vs Conversions</p>
            </div>
          </div>
          <div className="h-72 flex items-end justify-between gap-3 px-2">
            {[65, 45, 75, 55, 90, 70, 85, 40, 60, 95, 80, 50].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end gap-1 group/bar h-full">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.05, duration: 1, ease: "easeOut" }}
                  className="w-full bg-gradient-to-t from-blue-600/20 to-blue-500 rounded-lg relative"
                />
                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${Math.random() * 100}%` }}
                    className="h-full bg-purple-500"
                   />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 px-2">
            {['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'].map(t => (
              <span key={t} className="text-[10px] font-bold text-gray-600 tracking-widest">{t}</span>
            ))}
          </div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col h-full">
          <h3 className="text-xl font-bold mb-8">Top Regions</h3>
          <div className="space-y-6 flex-1">
            {[
              { name: 'United States', code: 'US', share: 45, spend: '$240' },
              { name: 'United Kingdom', code: 'GB', share: 18, spend: '$112' },
              { name: 'Germany', code: 'DE', share: 12, spend: '$85' },
            ].map((geo, i) => (
              <div key={geo.code} className="space-y-2">
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-gray-500 bg-white/5 px-2 py-1 rounded">{geo.code}</span>
                    <span className="text-sm font-bold text-gray-200">{geo.name}</span>
                  </div>
                  <span className="text-xs font-bold text-white">{geo.spend}</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${geo.share}%` }} className="h-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
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
