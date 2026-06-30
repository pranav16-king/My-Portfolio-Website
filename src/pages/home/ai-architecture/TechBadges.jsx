import React from 'react';
import { motion } from 'framer-motion';

const BADGES = [
  { name: 'LangGraph', x: '10%', y: '15%', delay: 0 },
  { name: 'MCP', x: '85%', y: '20%', delay: 0.2 },
  { name: 'OpenAI', x: '5%', y: '75%', delay: 0.4 },
  { name: 'FastAPI', x: '75%', y: '90%', delay: 0.8 },
  { name: 'Vector DB', x: '20%', y: '90%', delay: 1.0 },
];

export default function TechBadges() {
  return (
    <div className="absolute inset-0 pointer-events-none z-30 hidden md:block">
      {BADGES.map((badge, i) => (
        <motion.div
          key={badge.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: badge.delay,
            duration: 1,
            type: "spring"
          }}
          className="absolute"
          style={{ left: badge.x, top: badge.y }}
        >
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
            className="px-3 py-1.5 rounded-full bg-theme-glass/5 border border-theme-border backdrop-blur-md shadow-lg"
          >
            <span className="text-theme-muted font-bold text-[10px] uppercase tracking-widest">{badge.name}</span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
