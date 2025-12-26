
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Play, 
  Pause, 
  Edit2, 
  Copy, 
  Trash2,
  BarChart2,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

const CAMPAIGNS_DATA = [
  { id: '1', name: 'Premium Push - US Mobile', status: 'active', format: 'Push', geo: 'US, CA', bid: '$0.85', spend: '$120.40', ctr: '2.4%', budget: '$50/Day' },
  { id: '2', name: 'Global Pop - Entertainment', status: 'paused', format: 'Popunder', geo: 'WW', bid: '$1.20', spend: '$45.10', ctr: '1.8%', budget: '$100/Day' },
  { id: '3', name: 'Native BFCM Sale 2024', status: 'pending', format: 'Native', geo: 'UK, DE, FR', bid: '$0.40', spend: '$0.00', ctr: '0.0%', budget: '$200/Total' },
  { id: '4', name: 'Inter_Sweepstakes_IOS', status: 'active', format: 'Interstitial', geo: 'US', bid: '$3.50', spend: '$342.90', ctr: '5.2%', budget: '$500/Day' },
  { id: '5', name: 'Sidebar_Banner_Gadgets', status: 'active', format: 'Banner', geo: 'US, UK', bid: '$0.25', spend: '$62.10', ctr: '0.6%', budget: '$30/Day' },
  { id: '6', name: 'Performance_Text_Main', status: 'active', format: 'Text Ad', geo: 'Global', bid: '$0.12', spend: '$18.40', ctr: '1.4%', budget: '$20/Day' },
];

const Campaigns: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="space-y-8">
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-3xl font-black mb-2">My Campaigns</h1>
          <p className="text-gray-400">Launch and manage your traffic sources across 190+ countries.</p>
        </div>
        <Link 
          to="/dashboard/campaigns/create" 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-2xl text-sm font-bold shadow-lg shadow-blue-600/20 transition-all flex items-center gap-2 group"
        >
          <Plus size={18} className="group-hover:rotate-90 transition-transform" /> 
          Create New Campaign
        </Link>
      </header>

      {/* Stats Quick Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Active', val: '14', color: 'green' },
          { label: 'Paused', val: '4', color: 'gray' },
          { label: 'Pending', val: '1', color: 'yellow' },
          { label: 'Total Spend', val: '$2.6K', color: 'blue' }
        ].map(stat => (
          <div key={stat.label} className="bg-white/5 border border-white/10 rounded-2xl p-4">
             <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
             <p className={`text-xl font-black text-${stat.color}-500`}>{stat.val}</p>
          </div>
        ))}
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
        <div className="p-4 border-b border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 bg-white/5">
          <div className="flex bg-[#050505] p-1 rounded-xl border border-white/10 overflow-hidden">
            {['all', 'active', 'paused', 'pending'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold uppercase transition-all ${
                  activeTab === tab ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input 
              type="text" 
              placeholder="Filter by name or ID..."
              className="w-full bg-[#050505] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-xs font-bold focus:outline-none focus:border-blue-500 transition-colors"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left">
            <thead className="bg-white/[0.02] text-gray-500 text-[10px] uppercase font-black tracking-widest">
              <tr>
                <th className="px-8 py-5">Status</th>
                <th className="px-8 py-5">Campaign Name</th>
                <th className="px-8 py-5">Format</th>
                <th className="px-8 py-5">GEO</th>
                <th className="px-8 py-5">Bid / Budget</th>
                <th className="px-8 py-5">Spend (MTD)</th>
                <th className="px-8 py-5">CTR</th>
                <th className="px-8 py-5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {CAMPAIGNS_DATA.filter(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())).map((campaign, i) => (
                <motion.tr 
                  key={campaign.id} 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-white/[0.02] transition-colors group"
                >
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                       <div className={`w-2 h-2 rounded-full ${
                         campaign.status === 'active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]' :
                         campaign.status === 'paused' ? 'bg-gray-600' : 'bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.6)]'
                       }`}></div>
                       <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{campaign.status}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-white group-hover:text-blue-500 transition-colors cursor-pointer">{campaign.name}</span>
                      <span className="text-[10px] font-bold text-gray-600">ID: #{campaign.id}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-bold text-gray-400">{campaign.format}</span>
                  </td>
                  <td className="px-8 py-6">
                    <span className="text-[10px] font-bold text-gray-400">{campaign.geo}</span>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <span className="text-xs font-black text-blue-500">{campaign.bid}</span>
                      <span className="text-[10px] font-bold text-gray-500">{campaign.budget}</span>
                    </div>
                  </td>
                  <td className="px-8 py-6 font-mono text-xs font-bold text-gray-300">{campaign.spend}</td>
                  <td className="px-8 py-6">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-green-500">{campaign.ctr}</span>
                      <div className="h-1 w-12 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500/50" style={{ width: campaign.ctr }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all" title="View Stats">
                        <BarChart2 size={16} />
                      </button>
                      <button className="p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-lg transition-all" title="Edit">
                        <Edit2 size={16} />
                      </button>
                      <div className="h-4 w-px bg-white/5 mx-1"></div>
                      <button className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
