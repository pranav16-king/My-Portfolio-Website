import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Activity, Zap } from 'lucide-react';

const MOCK_LOGS = [
  "[SYSTEM] Initializing Agentic Neural Router...",
  "[INFO] Loaded 3 distributed LLM endpoints",
  "[INFO] Connected to Vector DB (Latency: 12ms)",
  "[USER] Incoming query: Analyze patient vitals",
  "[AGENT] Planner Agent decomposing task...",
  "[AGENT] Medical Agent cross-referencing history",
  "[WARN] High latency detected on API Gateway",
  "[AGENT] Validation Agent checking confidence score",
  "[SUCCESS] Confidence Score: 0.98. Executing response...",
];

export default function ProjectDashboard({ project }) {
  const [logs, setLogs] = useState([]);
  const [cpuUsage, setCpuUsage] = useState(42);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < MOCK_LOGS.length) {
        setLogs(prev => [...prev, MOCK_LOGS[currentIndex]]);
        setCpuUsage(Math.floor(Math.random() * (80 - 30 + 1) + 30));
        currentIndex++;
      } else {
        currentIndex = 0;
        setLogs([]);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-[#02040A] flex flex-col items-center justify-center py-24 overflow-hidden border-t border-theme-border snap-start shrink-0">
      
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left: Live Terminal & Metrics */}
        <div className="flex flex-col gap-8 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold tracking-widest uppercase text-emerald-400 mb-4 flex items-center gap-2">
              <Terminal className="w-5 h-5" /> Live Execution Engine
            </h3>
            <h2 className="text-4xl md:text-5xl font-extrabold text-theme-text tracking-tight mb-6">
              Real-Time Inference
            </h2>
            <p className="text-theme-muted text-lg">
              Watch the multi-agent system orchestrate complex tasks, manage tokens, and route decisions autonomously.
            </p>
          </motion.div>

          {/* Simulated Terminal Window */}
          <div className="w-full bg-[#050810] border border-theme-border rounded-2xl overflow-hidden shadow-2xl font-mono text-sm shadow-emerald-500/10">
            <div className="bg-theme-card border-b border-theme-border px-4 py-3 flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="text-xs text-emerald-500/70 flex items-center gap-2">
                <Activity className="w-3 h-3 animate-pulse" />
                System Status: NOMINAL
              </div>
            </div>
            
            <div className="p-4 h-64 overflow-y-auto flex flex-col gap-2 relative">
              {logs.map((log, i) => {
                // Defensive check to avoid undefined crashes
                if (!log) return null;
                const isError = log.includes('[WARN]') || log.includes('[ERROR]');
                const isSuccess = log.includes('[SUCCESS]');
                const isAgent = log.includes('[AGENT]');
                
                return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }}
                    className="flex gap-3"
                  >
                    <span className="text-emerald-500/50 shrink-0">[{new Date().toISOString().split('T')[1].slice(0,8)}]</span>
                    <span className={`
                      ${isError ? 'text-red-400' : ''}
                      ${isSuccess ? 'text-green-400' : ''}
                      ${isAgent ? 'text-purple-400' : ''}
                      ${!isError && !isSuccess && !isAgent ? 'text-theme-muted' : ''}
                    `}>
                      {log}
                    </span>
                  </motion.div>
                );
              })}
              
              {/* Blinking Cursor */}
              <div className="w-2 h-4 bg-emerald-500 animate-pulse mt-2" />
            </div>
          </div>
          
        </div>

        {/* Right: Feature Bento Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.capabilities && project.capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 bg-theme-card border border-theme-border rounded-2xl hover:bg-theme-card-hover transition-all group"
            >
              <div className="w-12 h-12 bg-theme-card rounded-xl border border-theme-border flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-indigo-500/50 transition-all">
                <span className="text-indigo-400">{cap.icon}</span>
              </div>
              <h4 className="text-lg font-bold text-theme-text mb-2">{cap.title}</h4>
              <p className="text-sm text-theme-muted">{cap.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
