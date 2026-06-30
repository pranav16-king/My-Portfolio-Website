import React from 'react';
import { motion } from 'framer-motion';

export default function AICore() {
  return (
    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full flex items-center justify-center z-50">
      
      {/* Outer Pulse */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[-50%] bg-indigo-500/20 rounded-full blur-[40px]"
      />

      {/* Rotating Ring 1 */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-10%] rounded-full border-2 border-dashed border-indigo-400/30"
      />

      {/* Rotating Ring 2 */}
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[5%] rounded-full border border-purple-400/40"
      />

      {/* Core Orb */}
      <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_50px_rgba(99,102,241,0.8)] overflow-hidden">
        {/* Core Texture / Grid overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:mix-blend-overlay" />
        
        {/* Inner glow */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent rounded-full"
        />
      </div>

      {/* Text Overlay */}
      <div className="relative z-10 text-center flex flex-col items-center">
        <span className="text-theme-text font-extrabold text-sm md:text-xl tracking-wider drop-shadow-md">AI SWARM</span>
        <span className="text-indigo-100 font-bold text-[10px] md:text-xs tracking-widest bg-black/40 px-2 py-0.5 rounded-full mt-1 backdrop-blur-sm border border-theme-border">CORE</span>
      </div>

    </div>
  );
}
