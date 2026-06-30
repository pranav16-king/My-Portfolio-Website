import React from 'react';
import { motion } from 'framer-motion';

export default function AgentNode({ 
  id, 
  icon, 
  label, 
  color, 
  isActive, 
  position, 
  onHover 
}) {
  const [colorClass, textColor] = color.split(' ');
  const bgColor = colorClass.replace('border-', 'bg-');

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`absolute flex flex-col items-center gap-3 transform -translate-x-1/2 -translate-y-1/2 z-20 ${isActive ? 'scale-110' : 'scale-100 opacity-70'} transition-all duration-500 cursor-pointer group`}
      style={{ left: position.x, top: position.y }}
      onMouseEnter={() => onHover(id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Node Glow when active */}
      {isActive && (
        <motion.div 
          layoutId="activeAgentGlow"
          className={`absolute inset-0 w-24 h-24 -left-4 -top-4 rounded-full ${bgColor} opacity-30 blur-2xl`}
        />
      )}

      {/* Node Circle */}
      <div className={`relative w-16 h-16 rounded-2xl bg-theme-card border-2 ${isActive ? colorClass : 'border-theme-border'} flex items-center justify-center shadow-lg transition-colors duration-300 z-10`}>
        <div className={`absolute inset-0 ${bgColor} opacity-10 rounded-2xl`} />
        
        {/* Pulsing ring if active */}
        {isActive && (
          <span className={`absolute inset-0 rounded-2xl border ${colorClass} animate-ping opacity-50`} />
        )}
        
        {/* Icon */}
        <div className={`${isActive ? textColor : 'text-theme-muted'} transition-colors duration-300`}>
          {icon}
        </div>
      </div>
      
      {/* Label */}
      <div className="flex flex-col items-center gap-1 z-10">
        <span className={`font-bold text-sm px-3 py-1 bg-theme-bg/80/80 rounded-full backdrop-blur-md border ${isActive ? colorClass : 'border-theme-border'} whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-theme-text' : 'text-theme-muted'}`}>
          {label}
        </span>
        {isActive && (
          <motion.span 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-[10px] uppercase font-bold tracking-widest ${textColor} animate-pulse bg-theme-bg/80/80 px-2 py-0.5 rounded-full border ${colorClass} border-opacity-50`}
          >
            Processing...
          </motion.span>
        )}
      </div>
    </motion.div>
  );
}
