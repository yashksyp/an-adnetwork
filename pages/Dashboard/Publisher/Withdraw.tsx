
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowDownLeft, 
  CreditCard, 
  Banknote, 
  Bitcoin, 
  History, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import GlassCard from '../../../components/GlassCard';

const WITHDRAWALS = [
  { id: 'W-9284', date: '01 Oct 2024', amount: '$1,200.00', method: 'PayPal', status: 'completed' },
  { id: 'W-9310', date: '08 Oct 2024', amount: '$850.40', method: 'BTC Wallet', status: 'processing' },
  { id: 'W-9352', date: '14 Oct 2024', amount: '$450.00', method: 'Wire Transfer', status: 'pending' },
];

const Withdraw: React.FC = () => {
  const [amount, setAmount] = useState('50');
  const [method, setMethod] = useState('paypal');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1500);
  };

  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-black mb-2">Withdraw Funds</h1>
        <p className="text-gray-400">Cash out your earnings to your preferred payment method.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <GlassCard className="!p-8">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ArrowDownLeft className="text-blue-500" /> New Payout Request
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Withdrawal Amount</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold">$</span>
                    <input 
                      type="number" 
                      min="50"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-10 pr-4 text-xl font-black focus:border-blue-500 outline-none"
                    />
                  </div>
                  <p className="text-[10px] text-gray-600">Min: $50.00 | Max: $5,000.00</p>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Payment Method</label>
                  <select 
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-4 font-bold text-sm focus:border-blue-500 outline-none appearance-none"
                  >
                    <option value="paypal">PayPal (support@pixelvisionads.com)</option>
                    <option value="crypto">USDT / BTC Wallet</option>
                    <option value="bank">Local Bank Transfer</option>
                  </select>
                </div>
              </div>

              <div className="p-4 bg-blue-600/5 border border-blue-500/20 rounded-2xl flex gap-3">
                <ShieldCheck className="text-blue-500 shrink-0" size={18} />
                <p className="text-[10px] text-gray-400 leading-relaxed uppercase tracking-tighter">
                  Payouts are processed within 24-48 business hours. Your account is currently on <span className="text-blue-500 font-bold">NET-7</span> terms.
                </p>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 rounded-2xl font-black text-white shadow-lg shadow-blue-600/20 transition-all transform active:scale-95 flex items-center justify-center gap-2"
              >
                {isSubmitting ? 'Processing...' : 'Request Payout Now'}
              </button>
            </form>
          </GlassCard>

          <div className="bg-[#0a0a0a] border border-white/10 rounded-[32px] overflow-hidden">
             <div className="p-8 border-b border-white/5 flex items-center gap-3">
                <History className="text-gray-500" size={20} />
                <h3 className="text-xl font-bold">Payout History</h3>
             </div>
             <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead className="bg-white/[0.01] text-[10px] text-gray-600 font-black uppercase tracking-widest">
                    <tr>
                      <th className="px-8 py-5">Request ID</th>
                      <th className="px-8 py-5">Amount</th>
                      <th className="px-8 py-5">Method</th>
                      <th className="px-8 py-5">Status</th>
                      <th className="px-8 py-5">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {WITHDRAWALS.map((w, i) => (
                      <motion.tr 
                        key={w.id} 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="hover:bg-white/[0.01] transition-colors"
                      >
                        <td className="px-8 py-5 text-xs font-bold text-gray-500">{w.id}</td>
                        <td className="px-8 py-5 font-black text-white">{w.amount}</td>
                        <td className="px-8 py-5 text-xs font-bold text-gray-400">{w.method}</td>
                        <td className="px-8 py-5">
                          <div className={`flex items-center gap-1 text-[10px] font-black uppercase ${
                            w.status === 'completed' ? 'text-green-500' : w.status === 'processing' ? 'text-blue-500' : 'text-yellow-500'
                          }`}>
                            {w.status === 'completed' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                            {w.status}
                          </div>
                        </td>
                        <td className="px-8 py-5 text-xs text-gray-600 font-mono">{w.date}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
             </div>
           </div>
        </div>

        <div className="space-y-6">
           <div className="bg-blue-600/10 border border-blue-500/20 p-8 rounded-[40px] text-center">
              <div className="w-16 h-16 bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <AlertCircle size={32} />
              </div>
              <h4 className="font-bold mb-2">Before you withdraw</h4>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Ensure your payment settings are verified. Any changes to payment details within 24 hours of a request will trigger a security hold.
              </p>
              <button className="text-blue-500 text-xs font-black uppercase tracking-widest hover:underline">
                View Policy
              </button>
           </div>

           <GlassCard>
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-4">Support</h4>
              <p className="text-xs text-gray-400 mb-4">Facing issues with your payout?</p>
              <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[10px] font-black uppercase transition-all">
                Contact Billing
              </button>
           </GlassCard>
        </div>
      </div>

      <AnimatePresence>
        {showSuccess && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-10 right-10 z-[100] bg-green-500 text-white p-6 rounded-3xl shadow-2xl flex items-center gap-4 border border-white/20"
          >
            <CheckCircle2 size={32} />
            <div>
              <p className="font-black">Request Submitted!</p>
              <p className="text-xs text-green-100 font-bold uppercase tracking-tighter">Reference: PVA-WD-{Math.floor(Math.random()*10000)}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Withdraw;
