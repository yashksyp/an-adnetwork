
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LayoutDashboard, TrendingUp, Users, DollarSign, ArrowUpRight } from 'lucide-react';
import GlassCard from '../components/GlassCard';

const Dashboard: React.FC = () => {
  const { user, isAuthenticated, isVerified } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    } else if (!isVerified) {
      navigate('/verify');
    }
  }, [isAuthenticated, isVerified, navigate]);

  if (!isAuthenticated || !isVerified) return null;

  const stats = [
    { label: 'Active Campaigns', value: '12', icon: <LayoutDashboard size={20} />, color: 'blue' },
    { label: 'Total Revenue', value: '$4,230.15', icon: <DollarSign size={20} />, color: 'green' },
    { label: 'Avg. CTR', value: '2.4%', icon: <TrendingUp size={20} />, color: 'purple' },
    { label: 'Conversions', value: '840', icon: <Users size={20} />, color: 'cyan' },
  ];

  return (
    <div className="pt-32 pb-20 px-4 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black mb-2">Welcome, {user?.name || 'Partner'}</h1>
            <p className="text-gray-400">Here's a summary of your network performance today.</p>
          </div>
          <button className="px-6 py-3 bg-blue-600 rounded-2xl text-sm font-bold shadow-lg shadow-blue-600/20 hover:bg-blue-500 transition-all flex items-center gap-2">
            Create Campaign <ArrowUpRight size={16} />
          </button>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <GlassCard key={i}>
              <div className="flex justify-between items-start mb-4">
                <div className={`p-2 rounded-xl bg-${stat.color}-500/10 text-${stat.color}-500`}>
                  {stat.icon}
                </div>
                <span className="text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full">+12.5%</span>
              </div>
              <h3 className="text-2xl font-black mb-1">{stat.value}</h3>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">{stat.label}</p>
            </GlassCard>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8">
             <div className="flex justify-between items-center mb-8">
               <h3 className="text-xl font-bold">Performance Overview</h3>
               <div className="flex gap-2">
                 {['Day', 'Week', 'Month'].map(t => (
                   <button key={t} className={`px-3 py-1 text-xs rounded-lg border border-white/10 ${t === 'Week' ? 'bg-white/10' : ''}`}>{t}</button>
                 ))}
               </div>
             </div>
             <div className="h-64 flex items-end justify-between gap-2">
                {[40, 70, 45, 90, 65, 80, 50, 60, 85, 40].map((h, i) => (
                  <motion.div 
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: i * 0.05, duration: 1 }}
                    className="flex-1 bg-gradient-to-t from-blue-600/20 to-blue-500 rounded-t-lg relative group"
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      {h}k
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
          
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">
             <h3 className="text-xl font-bold mb-6">Recent Activities</h3>
             <div className="space-y-6">
                {[
                  { title: 'New conversion', time: '2 min ago', desc: 'Campaign: SmartPush-US' },
                  { title: 'Budget reached', time: '1 hr ago', desc: 'Campaign: Global-Pop' },
                  { title: 'Billing update', time: '3 hrs ago', desc: 'Auto-refill successful' },
                ].map((act, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                    <div>
                      <p className="text-sm font-bold text-gray-200">{act.title}</p>
                      <p className="text-xs text-gray-500 mb-1">{act.desc}</p>
                      <p className="text-[10px] text-gray-600 font-mono uppercase">{act.time}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
