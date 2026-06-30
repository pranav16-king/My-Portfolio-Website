import React from 'react';
import { motion } from 'framer-motion';

export default function ProjectMetrics({ metrics, gradient }) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
      {metrics.map((metric, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 + idx * 0.1, duration: 0.6 }}
          className="relative p-4 rounded-2xl bg-theme-card border border-theme-border backdrop-blur-md overflow-hidden group"
        >
          {/* Subtle Hover Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
          
          <div className="relative z-10 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 mb-1 tracking-tight">
              {metric.value}{metric.suffix}
            </span>
            <span className="text-xs font-semibold text-theme-muted uppercase tracking-wider">
              {metric.label}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
