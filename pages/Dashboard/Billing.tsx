
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  CreditCard, 
  Bitcoin, 
  Banknote, 
  ArrowDownLeft, 
  ArrowUpRight,
  Download,
  ShieldCheck
} from 'lucide-react';
import GlassCard from '../../components/GlassCard';

const Billing: React.FC = () => {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-black mb-2">Billing & Funds</h1>
        <p className="text-gray-400">Manage your wallet, invoices, and payment methods securely.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Wallet Overview */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[40px] p-10 relative overflow-hidden shadow-2xl shadow-blue-600/20">
            <div className="absolute top-[-20%] right-[-20%] w-[200px] h-[200px] bg-white/10 rounded-full blur-[80px]"></div>
            <div className="relative z-10">
              <p className="text-xs font-black uppercase tracking-widest text-blue-100/60 mb-2">Available Balance</p>
              <h2 className="text-5xl font-black text-white mb-8">$1,245.80</h2>
              <div className="flex gap-4">
                <button className="flex-1 bg-white text-blue-900 py-4 rounded-2xl font-black text-sm shadow-xl hover:scale-105 transition-transform">
                  Add Funds
                </button>
                <button className="p-4 bg-blue-500/20 text-white rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                   <Download size={20} />
                </button>
              </div>
            </div>
          </div>

          <GlassCard>
            <h3 className="text-sm font-bold mb-4 uppercase tracking-wider text-gray-500">Quick Stats</h3>
            <div className="space-y-4">
               <div className="flex justify-between items-center">
                 <span className="text-xs text-gray-400">Reserved (Pending)</span>
                 <span className="text-xs font-bold">$120.00</span>
               </div>
               <div className="flex justify-between items-center">
                 <span className="text-xs text-gray-400">Spent this month</span>
                 <span className="text-xs font-bold text-red-500">-$450.25</span>
               </div>
               <div className="flex justify-between items-center">
                 <span className="text-xs text-gray-400">Auto-Refill</span>
                 <span className="text-[10px] font-black text-blue-500 bg-blue-500/10 px-2 py-1 rounded">DISABLED</span>
               </div>
            </div>
          </GlassCard>

          <div className="flex items-center gap-3 p-4 bg-green-500/5 border border-green-500/20 rounded-2xl text-[10px] font-bold text-green-500 uppercase tracking-widest">
            <ShieldCheck size={14} /> PCI-DSS Compliant Infrastructure
          </div>
        </div>

        {/* Payment Methods & Transactions */}
        <div className="lg:col-span-2 space-y-8">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
             {[
               { name: 'Credit Card', icon: <CreditCard />, bonus: '5% BONUS' },
               { name: 'Crypto', icon: <Bitcoin />, bonus: '10% BONUS' },
               { name: 'Wire Transfer', icon: <Banknote />, bonus: '0% FEES' }
             ].map(method => (
               <button key={method.name} className="bg-white/5 border border-white/10 p-6 rounded-3xl hover:border-blue-500 transition-all text-left relative group">
                 <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">{method.icon}</div>
                 <h4 className="font-bold text-sm mb-1">{method.name}</h4>
                 <p className="text-[10px] text-blue-500 font-black">{method.bonus}</p>
               </button>
             ))}
           </div>

           <div className="bg-[#0a0a0a] border border-white/10 rounded-[32px] overflow-hidden">
             <div className="p-8 border-b border-white/5">
                <h3 className="text-xl font-bold">Transaction History</h3>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead className="text-[10px] text-gray-600 font-black uppercase tracking-widest bg-white/[0.01]">
                    <tr>
                      <th className="px-8 py-4">Transaction ID</th>
                      <th className="px-8 py-4">Type</th>
                      <th className="px-8 py-4">Method</th>
                      <th className="px-8 py-4">Amount</th>
                      <th className="px-8 py-4">Date</th>
                      <th className="px-8 py-4 text-right">Invoice</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {[
                      { id: '#TRX-2401', type: 'deposit', amount: '+$500.00', method: 'Visa **4242', date: 'Oct 12, 2024' },
                      { id: '#TRX-2398', type: 'spend', amount: '-$12.45', method: 'Campaign #12', date: 'Oct 11, 2024' },
                      { id: '#TRX-2395', type: 'bonus', amount: '+$50.00', method: 'Promo: WELCOME50', date: 'Oct 10, 2024' },
                      { id: '#TRX-2390', type: 'deposit', amount: '+$1000.00', method: 'BTC Wallet', date: 'Oct 08, 2024' },
                    ].map(trx => (
                      <tr key={trx.id} className="hover:bg-white/[0.01] transition-colors">
                        <td className="px-8 py-5 text-xs font-bold text-gray-400">{trx.id}</td>
                        <td className="px-8 py-5">
                          <div className={`flex items-center gap-2 text-[10px] font-black uppercase ${
                            trx.type === 'deposit' ? 'text-green-500' : trx.type === 'spend' ? 'text-blue-400' : 'text-purple-400'
                          }`}>
                            {trx.type === 'deposit' ? <ArrowDownLeft size={12} /> : <ArrowUpRight size={12} />}
                            {trx.type}
                          </div>
                        </td>
                        <td className="px-8 py-5 text-xs font-bold text-gray-500">{trx.method}</td>
                        <td className="px-8 py-5 font-black text-sm">{trx.amount}</td>
                        <td className="px-8 py-5 text-xs text-gray-600">{trx.date}</td>
                        <td className="px-8 py-5 text-right">
                          <button className="text-blue-500 hover:text-white transition-colors">
                            <Download size={14} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
               </table>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Billing;
