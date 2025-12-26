
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Globe, 
  Search, 
  MoreVertical, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  ExternalLink,
  Smartphone,
  Info
} from 'lucide-react';
import GlassCard from '../../../components/GlassCard';

const PROPERTIES = [
  { id: '1', name: 'TechBlog World', url: 'techblogworld.com', type: 'Website', category: 'Tech/Gadgets', status: 'approved', traffic: '50K+', created: '12 Oct 2024' },
  { id: '2', name: 'Fitness-App-IOS', url: 'com.fittrack.ios', type: 'Mobile App', category: 'Health', status: 'pending', traffic: '10K+', created: '14 Oct 2024' },
  { id: '3', name: 'GamerForum', url: 'gamerforum.net', type: 'Website', category: 'Gaming', status: 'approved', traffic: '200K+', created: '01 Oct 2024' },
];

const Websites: React.FC = () => {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-black mb-2">Websites & Apps</h1>
          <p className="text-gray-400">Manage your digital properties and monetization status.</p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-2xl text-sm font-bold shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2 group"
        >
          <Plus size={18} className="group-hover:rotate-90 transition-transform" /> 
          Add New Property
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Properties', val: '3', color: 'blue' },
          { label: 'Approved', val: '2', color: 'green' },
          { label: 'Avg. eCPM', val: '$2.85', color: 'purple' }
        ].map(stat => (
          <GlassCard key={stat.label}>
             <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
             <p className={`text-2xl font-black text-${stat.color}-500`}>{stat.val}</p>
          </GlassCard>
        ))}
      </div>

      <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-4 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 bg-white/5">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input 
              type="text" 
              placeholder="Filter by name..."
              className="w-full bg-[#050505] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-xs font-bold focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-white/[0.02] text-gray-500 text-[10px] uppercase font-black tracking-widest">
              <tr>
                <th className="px-8 py-5">Property</th>
                <th className="px-8 py-5">Type / Category</th>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Traffic (Mo)</th>
                <th className="px-8 py-5">Date Added</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {PROPERTIES.map((prop, i) => (
                <motion.tr 
                  key={prop.id} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-white/[0.02] transition-colors group"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-3">
                       <div className="p-2 bg-white/5 rounded-lg border border-white/10 text-gray-500">
                         {prop.type === 'Website' ? <Globe size={18} /> : <Smartphone size={18} />}
                       </div>
                       <div className="flex flex-col">
                         <span className="text-sm font-bold text-white">{prop.name}</span>
                         <span className="text-[10px] font-bold text-blue-500 hover:underline cursor-pointer flex items-center gap-1">
                           {prop.url} <ExternalLink size={10} />
                         </span>
                       </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-gray-400">{prop.type}</span>
                      <span className="text-[10px] font-bold text-gray-600">{prop.category}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                       {prop.status === 'approved' ? (
                         <div className="flex items-center gap-1 text-[10px] font-black uppercase text-green-500">
                           <CheckCircle2 size={14} /> Approved
                         </div>
                       ) : prop.status === 'pending' ? (
                         <div className="flex items-center gap-1 text-[10px] font-black uppercase text-yellow-500">
                           <Clock size={14} /> Pending Review
                         </div>
                       ) : (
                         <div className="flex items-center gap-1 text-[10px] font-black uppercase text-red-500">
                           <XCircle size={14} /> Rejected
                         </div>
                       )}
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-xs font-black text-gray-300">{prop.traffic}</span>
                  </td>
                  <td className="px-8 py-6 text-xs text-gray-500 font-mono">{prop.created}</td>
                  <td className="px-8 py-6 text-right">
                    <button className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all">
                      <MoreVertical size={16} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Info Card */}
      <div className="bg-blue-600/5 border border-blue-500/20 p-6 rounded-3xl flex gap-4">
        <Info className="text-blue-500 shrink-0 mt-1" />
        <p className="text-xs text-gray-400 leading-relaxed">
          <span className="text-white font-bold block mb-1">Approval Process:</span>
          Most properties are reviewed within 4-12 hours. Ensure your domain is accessible and contains original content. Traffic from proxies or bot-farms will lead to permanent rejection.
        </p>
      </div>
    </div>
  );
};

export default Websites;
