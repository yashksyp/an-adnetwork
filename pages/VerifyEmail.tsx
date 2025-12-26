
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowRight, ShieldCheck, RefreshCw } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const VerifyEmail: React.FC = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const { verifyOtp, user, isAuthenticated, isVerified } = useAuth();
  const navigate = useNavigate();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (!isAuthenticated) navigate('/signup');
    if (isAuthenticated && isVerified) navigate('/dashboard');
  }, [isAuthenticated, isVerified, navigate]);

  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    setError(false);

    // Move to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    const code = otp.join('');
    if (code.length !== 6) return;

    setIsVerifying(true);
    await new Promise(r => setTimeout(r, 1000)); // Simulate network

    const success = verifyOtp(code);
    if (success) {
      navigate('/dashboard');
    } else {
      setError(true);
      setIsVerifying(false);
      setOtp(['', '', '', '', '', '']);
      inputRefs.current[0]?.focus();
    }
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center p-6 bg-[#050505] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 backdrop-blur-xl shadow-2xl text-center">
          <div className="w-16 h-16 bg-blue-600/20 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-blue-500/20">
            <Mail size={32} />
          </div>

          <h1 className="text-3xl font-bold mb-4">Verify Your Email</h1>
          <p className="text-gray-400 mb-8 text-sm leading-relaxed">
            We've sent a 6-digit verification code to <span className="text-white font-bold">{user?.email || 'your email'}</span>. 
            Check your inbox (and spam) to continue.
          </p>

          <div className="flex justify-between gap-2 mb-8">
            {otp.map((digit, idx) => (
              <input
                key={idx}
                // Wrapped the assignment in a block to return void instead of the element
                ref={el => { inputRefs.current[idx] = el; }}
                type="text"
                maxLength={1}
                value={digit}
                onChange={e => handleChange(idx, e.target.value)}
                onKeyDown={e => handleKeyDown(idx, e)}
                className={`w-full h-14 bg-[#0a0a0a] border ${error ? 'border-red-500' : 'border-white/10 focus:border-blue-500'} rounded-xl text-center text-xl font-bold text-white transition-all outline-none`}
              />
            ))}
          </div>

          <AnimatePresence>
            {error && (
              <motion.p 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="text-red-500 text-xs font-bold mb-6"
              >
                Invalid verification code. Please try again.
              </motion.p>
            )}
          </AnimatePresence>

          <button
            onClick={handleVerify}
            disabled={otp.some(d => !d) || isVerifying}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:cursor-not-allowed py-4 rounded-2xl font-bold text-white transition-all flex items-center justify-center gap-2 mb-6"
          >
            {isVerifying ? <RefreshCw className="animate-spin" size={20} /> : 'Verify Account'}
          </button>

          <div className="flex flex-col gap-4 items-center">
            <button className="text-xs font-bold text-gray-500 hover:text-white transition-colors flex items-center gap-2">
              Didn't receive code? <span className="text-blue-500">Resend</span>
            </button>
            <div className="flex items-center gap-2 text-[10px] text-gray-600 uppercase tracking-widest font-bold">
              <ShieldCheck size={12} /> Secure Verification
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VerifyEmail;
