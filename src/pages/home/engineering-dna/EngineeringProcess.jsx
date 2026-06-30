import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Lightbulb, Search, Network, Box, TerminalSquare, ShieldCheck, Rocket, RefreshCcw } from 'lucide-react';

const PROCESS_STEPS = [
  { name: 'Idea', icon: <Lightbulb className="w-5 h-5 md:w-6 md:h-6" />, color: 'from-amber-400 to-orange-500', shadow: 'rgba(245,158,11,0.5)' },
  { name: 'Research', icon: <Search className="w-5 h-5 md:w-6 md:h-6" />, color: 'from-blue-400 to-indigo-500', shadow: 'rgba(99,102,241,0.5)' },
  { name: 'Architecture', icon: <Network className="w-5 h-5 md:w-6 md:h-6" />, color: 'from-indigo-400 to-purple-500', shadow: 'rgba(139,92,246,0.5)' },
  { name: 'Prototype', icon: <Box className="w-5 h-5 md:w-6 md:h-6" />, color: 'from-purple-400 to-pink-500', shadow: 'rgba(236,72,153,0.5)' },
  { name: 'Development', icon: <TerminalSquare className="w-5 h-5 md:w-6 md:h-6" />, color: 'from-cyan-400 to-blue-500', shadow: 'rgba(6,182,212,0.5)' },
  { name: 'Testing', icon: <ShieldCheck className="w-5 h-5 md:w-6 md:h-6" />, color: 'from-emerald-400 to-green-500', shadow: 'rgba(16,185,129,0.5)' },
  { name: 'Deployment', icon: <Rocket className="w-5 h-5 md:w-6 md:h-6" />, color: 'from-rose-400 to-red-500', shadow: 'rgba(244,63,94,0.5)' },
  { name: 'Iteration', icon: <RefreshCcw className="w-5 h-5 md:w-6 md:h-6" />, color: 'from-teal-400 to-emerald-500', shadow: 'rgba(20,184,166,0.5)' }
];

export default function EngineeringProcess() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate the spark position
  const sparkPosition = useTransform(scaleX, [0, 1], ["0%", "100%"]);

  return (
    <div className="mb-32 max-w-7xl mx-auto px-6 overflow-hidden" ref={containerRef}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
          My Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Process</span>
        </h3>
        <p className="text-gray-400 text-lg">From concept to production-ready scalable software.</p>
      </motion.div>

      <div className="relative py-12">
        {/* Background Track Line */}
        <div className="absolute top-1/2 left-0 w-full h-1.5 bg-white/5 -translate-y-1/2 rounded-full hidden md:block" />
        
        {/* Animated Progress Line */}
        <motion.div 
          className="absolute top-1/2 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 -translate-y-1/2 rounded-full origin-left hidden md:block z-0"
          style={{ scaleX }}
        />

        {/* Traveling Spark */}
        <motion.div 
          className="absolute top-1/2 -translate-y-1/2 -ml-2 w-4 h-4 bg-white rounded-full hidden md:block z-10 shadow-[0_0_20px_rgba(255,255,255,1)]"
          style={{ left: sparkPosition }}
        />

        <div className="flex flex-row justify-start md:justify-between items-center gap-6 md:gap-0 overflow-x-auto md:overflow-visible pb-8 md:pb-0 px-6 md:px-0 -mx-6 md:mx-0 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] relative z-10">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div 
              key={step.name}
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, type: "spring", bounce: 0.4 }}
              className="flex flex-col items-center gap-4 md:gap-5 group flex-shrink-0 snap-center w-28 md:w-auto relative"
            >
              <motion.div 
                whileHover={{ scale: 1.15, y: -10 }}
                className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl p-[2px] cursor-pointer"
              >
                {/* Gradient Border Background that lights up on hover */}
                <div className={`absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-br ${step.color} opacity-40 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-black m-[2px]" />
                
                {/* Inner Content */}
                <div 
                  className="relative w-full h-full rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-xl flex items-center justify-center text-gray-400 group-hover:text-white transition-all duration-300 z-10"
                  style={{ '--hover-shadow': step.shadow }}
                >
                  <div className="group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all">
                    {step.icon}
                  </div>
                </div>

                {/* External Glowing Drop Shadow */}
                <div 
                  className="absolute inset-0 rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
                  style={{ backgroundColor: step.shadow.replace('0.5', '0.8') }}
                />
              </motion.div>
              
              <span className="font-bold text-xs md:text-sm text-gray-500 group-hover:text-gray-200 transition-colors text-center bg-black/50 px-3 py-1 rounded-full border border-theme-border group-hover:border-theme-border">
                {step.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
