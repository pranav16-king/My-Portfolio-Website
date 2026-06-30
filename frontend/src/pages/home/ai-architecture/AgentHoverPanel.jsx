import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Clock, Zap, Database, ArrowRight } from 'lucide-react';

export default function AgentHoverPanel({ agent }) {
  return (
    <AnimatePresence>
      {agent && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] md:w-[600px] z-50 pointer-events-none"
        >
          <div className="p-6 md:p-8 rounded-3xl bg-theme-card/90 backdrop-blur-2xl border border-theme-border shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-6 border-b border-theme-border pb-4">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl bg-theme-bg border border-theme-border ${agent.textColor}`}>
                  {agent.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-theme-text tracking-wide">{agent.label}</h3>
                  <p className="text-sm text-theme-muted">{agent.purpose}</p>
                </div>
              </div>
              
              {/* Status Badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">Active</span>
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-theme-bg p-3 rounded-xl border border-theme-border">
                <div className="flex items-center gap-2 text-theme-muted mb-1">
                  <Clock className="w-3 h-3" />
                  <span className="text-[10px] uppercase font-bold tracking-wider">Latency</span>
                </div>
                <span className="text-theme-text font-mono text-sm">{agent.latency}</span>
              </div>
              <div className="bg-theme-bg p-3 rounded-xl border border-theme-border">
                <div className="flex items-center gap-2 text-theme-muted mb-1">
                  <Zap className="w-3 h-3" />
                  <span className="text-[10px] uppercase font-bold tracking-wider">Confidence</span>
                </div>
                <span className="text-theme-text font-mono text-sm">{agent.confidence}</span>
              </div>
              <div className="bg-theme-bg p-3 rounded-xl border border-theme-border">
                <div className="flex items-center gap-2 text-theme-muted mb-1">
                  <Database className="w-3 h-3" />
                  <span className="text-[10px] uppercase font-bold tracking-wider">Memory</span>
                </div>
                <span className="text-theme-text font-mono text-sm">{agent.memory}</span>
              </div>
              <div className="bg-theme-bg p-3 rounded-xl border border-theme-border">
                <div className="flex items-center gap-2 text-theme-muted mb-1">
                  <Activity className="w-3 h-3" />
                  <span className="text-[10px] uppercase font-bold tracking-wider">Tokens</span>
                </div>
                <span className="text-theme-text font-mono text-sm">{agent.tokens}</span>
              </div>
            </div>

            {/* I/O and Tech */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="text-theme-muted font-bold uppercase tracking-widest text-[10px] mb-2">Data Flow</h4>
                <div className="flex items-center gap-3 text-theme-muted bg-theme-bg p-3 rounded-xl border border-theme-border">
                  <span className="truncate flex-1">{agent.input}</span>
                  <ArrowRight className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="truncate flex-1 text-right">{agent.output}</span>
                </div>
              </div>
              <div>
                <h4 className="text-theme-muted font-bold uppercase tracking-widest text-[10px] mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {agent.tech.map((t, i) => (
                    <span key={i} className="px-2 py-1 bg-theme-glass/5 border border-theme-border rounded-lg text-xs text-theme-muted">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
