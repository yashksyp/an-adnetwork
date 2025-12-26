
import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={`relative group h-full ${className}`}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-br from-blue-500 via-blue-400 to-purple-600 rounded-3xl blur opacity-0 group-hover:opacity-30 transition duration-700"></div>
      <div className="relative h-full bg-[#0a0a0a] border border-white/5 rounded-3xl p-8 overflow-hidden backdrop-blur-sm shadow-xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {children}
      </div>
    </motion.div>
  );
};

export default GlassCard;
