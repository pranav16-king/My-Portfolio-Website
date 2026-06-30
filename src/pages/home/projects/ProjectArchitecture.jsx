import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Network, Database, Cpu, User, Bot, Zap, ShieldCheck } from 'lucide-react';

const ICONS = {
  user: User,
  agent: Bot,
  database: Database,
  input: Zap,
  output: ShieldCheck
};

export default function ProjectArchitecture({ project }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const pathLength = useTransform(scrollYProgress, [0.2, 0.6], [0, 1]);
  const opacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen bg-[#02040A] flex flex-col items-center justify-center py-24 overflow-hidden border-t border-theme-border"
    >
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay" />
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center">
        <motion.div style={{ opacity }} className="text-center mb-20 max-w-3xl">
          <h3 className="text-sm font-bold tracking-widest uppercase text-indigo-400 mb-4 flex items-center justify-center gap-2">
            <Network className="w-5 h-5" /> System Architecture
          </h3>
          <h2 className="text-4xl md:text-5xl font-extrabold text-theme-text tracking-tight">
            Multi-Agent Neural Workflow
          </h2>
        </motion.div>

        {/* Animated Node Graph Simulation */}
        <div className="relative w-full max-w-5xl h-[600px] bg-black/20 border border-theme-border rounded-3xl backdrop-blur-md p-8 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl">
          
          {/* Simulated Nodes (Static for now, but visually premium) */}
          <div className="flex flex-col gap-12 z-10 relative">
            <Node icon={User} label="User Input" gradient="from-blue-500 to-cyan-400" />
          </div>

          <div className="flex flex-col gap-8 z-10 relative">
            <Node icon={Cpu} label="AI Router" gradient="from-indigo-500 to-purple-500" />
            <Node icon={Database} label="Vector Memory" gradient="from-emerald-500 to-teal-500" />
          </div>

          <div className="flex flex-col gap-6 z-10 relative">
            <Node icon={Bot} label="Planner Agent" gradient="from-purple-500 to-pink-500" />
            <Node icon={Bot} label="Execution Agent" gradient="from-purple-500 to-pink-500" />
            <Node icon={Bot} label="Validation Agent" gradient="from-purple-500 to-pink-500" />
          </div>

          <div className="flex flex-col gap-12 z-10 relative">
            <Node icon={ShieldCheck} label="Decision Output" gradient="from-green-500 to-emerald-400" />
          </div>

          {/* Animated Connecting Lines SVG (Absolute Background of the Box) */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ filter: 'drop-shadow(0 0 8px rgba(99,102,241,0.5))' }}>
            <motion.path
              d="M 150 300 C 250 300, 300 150, 400 150"
              fill="transparent"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeDasharray="10 10"
              style={{ pathLength }}
              className="animate-[dash_20s_linear_infinite]"
            />
            <motion.path
              d="M 150 300 C 250 300, 300 450, 400 450"
              fill="transparent"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeDasharray="10 10"
              style={{ pathLength }}
              className="animate-[dash_20s_linear_infinite]"
            />
            <motion.path
              d="M 500 150 C 600 150, 650 150, 750 150"
              fill="transparent"
              stroke="url(#gradient)"
              strokeWidth="3"
              style={{ pathLength }}
            />
            <motion.path
              d="M 500 450 C 600 450, 650 300, 750 300"
              fill="transparent"
              stroke="url(#gradient)"
              strokeWidth="3"
              style={{ pathLength }}
            />
            
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(59, 130, 246, 0.5)" />
                <stop offset="50%" stopColor="rgba(139, 92, 246, 1)" />
                <stop offset="100%" stopColor="rgba(236, 72, 153, 0.5)" />
              </linearGradient>
            </defs>
          </svg>

        </div>
      </div>
    </section>
  );
}

function Node({ icon: Icon, label, gradient }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="relative flex flex-col items-center gap-3 group cursor-default"
    >
      <div className={`absolute inset-0 bg-gradient-to-tr ${gradient} blur-xl opacity-30 group-hover:opacity-70 transition-opacity duration-500`} />
      <div className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-black border border-theme-border flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
        <Icon className="w-8 h-8 text-theme-text" />
      </div>
      <span className="text-sm font-semibold text-theme-muted whitespace-nowrap bg-black/50 px-3 py-1 rounded-full border border-theme-border">
        {label}
      </span>
    </motion.div>
  );
}
