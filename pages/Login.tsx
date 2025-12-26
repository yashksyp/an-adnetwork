
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Zap, ArrowRight, Github, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const [role, setRole] = useState<'advertiser' | 'publisher'>('advertiser');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, isAuthenticated, isVerified } = useAuth();
  const navigate = useNavigate();

  // Handle redirect after login state updates
  useEffect(() => {
    if (isAuthenticated) {
      if (isVerified) {
        navigate('/dashboard');
      } else {
        navigate('/verify');
      }
    }
  }, [isAuthenticated, isVerified, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password, role);
  };

  return (
    <div className="min-h-screen pt-20 flex items-stretch overflow-hidden bg-[#050505]">
      {/* Visual Side */}
      <div className="hidden lg:flex flex-1 relative items-center justify-center p-12 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="relative z-10 max-w-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(37,99,235,0.4)]"
          >
            <Zap className="text-white w-8 h-8 fill-current" />
          </motion.div>
          <h2 className="text-5xl font-black mb-6 leading-tight">Welcome Back to <span className="text-blue-500">PVA</span></h2>
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Manage your {role === 'publisher' ? 'ad units' : 'campaigns'}, track {role === 'publisher' ? 'earnings' : 'revenue'}, and scale your reach with our AI-powered performance tools.
          </p>
          <div className="space-y-4">
             {[
               role === 'publisher' ? "High eCPM Rates" : "Real-time ROI Tracking",
               "Premium Traffic Sources",
               "24/7 Expert Support"
             ].map((text, i) => (
               <div key={i} className="flex items-center gap-3 text-gray-300">
                 <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                 {text}
               </div>
             ))}
          </div>
        </div>
      </div>

      {/* Form Side */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12 relative">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-2xl">
            <h1 className="text-3xl font-bold mb-2">Log In</h1>
            <p className="text-gray-400 mb-8 text-sm">Select your account type and enter your credentials.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <button 
                  type="button"
                  onClick={() => setRole('advertiser')}
                  className={`p-4 rounded-2xl border transition-all text-left relative ${role === 'advertiser' ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                >
                  <span className={`block font-bold text-sm ${role === 'advertiser' ? 'text-blue-400' : 'text-gray-300'}`}>Advertiser</span>
                  <span className="text-[10px] text-gray-500">Buy Traffic</span>
                  {role === 'advertiser' && <CheckCircle2 className="absolute top-2 right-2 text-blue-500" size={14} />}
                </button>
                <button 
                  type="button"
                  onClick={() => setRole('publisher')}
                  className={`p-4 rounded-2xl border transition-all text-left relative ${role === 'publisher' ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-white/5 hover:bg-white/10'}`}
                >
                  <span className={`block font-bold text-sm ${role === 'publisher' ? 'text-blue-400' : 'text-gray-300'}`}>Publisher</span>
                  <span className="text-[10px] text-gray-500">Sell Traffic</span>
                  {role === 'publisher' && <CheckCircle2 className="absolute top-2 right-2 text-blue-500" size={14} />}
                </button>
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
                <div className="flex justify-between">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider px-1">Password</label>
                  <button type="button" className="text-xs text-blue-500 hover:underline">Forgot password?</button>
                </div>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-500 transition-colors" size={18} />
                  <input 
                    type="password" 
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-blue-500/50 transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-500 py-4 rounded-2xl font-bold text-white transition-all transform active:scale-95 shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
              >
                Log In as {role === 'publisher' ? 'Publisher' : 'Advertiser'} <ArrowRight size={18} />
              </button>
            </form>

            <div className="my-8 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10"></div>
              <span className="text-xs text-gray-500 font-bold uppercase">Or continue with</span>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors text-sm font-medium">
                <Github size={18} /> GitHub
              </button>
              <button className="flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors text-sm font-medium">
                Google
              </button>
            </div>

            <p className="mt-8 text-center text-sm text-gray-400">
              Don't have an account? <Link to="/signup" className="text-blue-500 font-bold hover:underline">Sign Up</Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
