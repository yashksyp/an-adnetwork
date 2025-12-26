
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, Lock, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Signup: React.FC = () => {
  const [role, setRole] = useState<'advertiser' | 'publisher'>('advertiser');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signup(email, name, role);
    // Redirect to verification instead of dashboard
    navigate('/verify');
  };

  return (
    <div className="min-h-screen pt-20 flex items-stretch overflow-hidden bg-[#050505]">
      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 relative">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-xl"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
            <h1 className="text-3xl font-bold mb-2">Create Account</h1>
            <p className="text-gray-400 mb-8 text-sm">Join the network and start growing your digital presence.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <button 
                  type="button"
                  onClick={() => setRole('advertiser')}
                  className={`p-4 rounded-2xl border transition-all text-left relative ${role === 'advertiser' ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                >
                  <span className={`block font-bold text-sm ${role === 'advertiser' ? 'text-blue-400' : 'text-gray-300'}`}>Advertiser</span>
                  <span className="text-[10px] text-gray-500">I want to buy traffic</span>
                  {role === 'advertiser' && <CheckCircle2 className="absolute top-4 right-4 text-blue-500" size={16} />}
                </button>
                <button 
                  type="button"
                  onClick={() => setRole('publisher')}
                  className={`p-4 rounded-2xl border transition-all text-left relative ${role === 'publisher' ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                >
                  <span className={`block font-bold text-sm ${role === 'publisher' ? 'text-blue-400' : 'text-gray-300'}`}>Publisher</span>
                  <span className="text-[10px] text-gray-500">I want to sell traffic</span>
                  {role === 'publisher' && <CheckCircle2 className="absolute top-4 right-4 text-blue-500" size={16} />}
                </button>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <input 
                    type="text" 
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-all"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <input 
                    type="password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-all"
                    placeholder="Min. 8 characters"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-bold text-white transition-all transform active:scale-95 shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
              >
                Create Free Account <ArrowRight size={18} />
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-gray-400">
              Already have an account? <Link to="/login" className="text-blue-500 font-bold hover:underline">Log In</Link>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Visual Side */}
      <div className="hidden lg:flex flex-1 relative items-center justify-center p-12 bg-gradient-to-bl from-purple-900/20 via-transparent to-blue-900/20 border-l border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
        <div className="relative z-10 max-w-md text-right">
          <div className="flex justify-end mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(147,51,234,0.4)]"
            >
              <Zap className="text-white w-8 h-8 fill-current" />
            </motion.div>
          </div>
          <h2 className="text-5xl font-black mb-6 leading-tight">Scale Without <span className="text-purple-500">Limits</span></h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Gain access to billions of daily impressions and advanced optimization tools used by the world's top affiliates.
          </p>
          <div className="flex flex-col items-end space-y-4">
             {[
               "Auto-Optimization Tools",
               "Dynamic Macro Support",
               "Direct Postback Integration"
             ].map((text, i) => (
               <div key={i} className="flex items-center gap-3 text-gray-300">
                 {text}
                 <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
