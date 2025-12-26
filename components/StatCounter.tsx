
import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface StatCounterProps {
  value: string;
  label: string;
  suffix?: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ value, label, suffix = '' }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);

  useEffect(() => {
    const numericValue = parseFloat(value);
    const controls = animate(count, numericValue, { 
      duration: 2, 
      ease: "easeOut",
      delay: 0.5 
    });
    return controls.stop;
  }, [value, count]);

  return (
    <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-colors group">
      <div className="flex justify-center items-baseline mb-2">
        <motion.span className="text-4xl md:text-5xl font-black text-white group-hover:text-blue-500 transition-colors">
          {rounded}
        </motion.span>
        <span className="text-3xl md:text-4xl font-bold text-blue-500">{suffix}</span>
      </div>
      <p className="text-gray-400 text-sm font-medium uppercase tracking-wider">{label}</p>
    </div>
  );
};

export default StatCounter;
