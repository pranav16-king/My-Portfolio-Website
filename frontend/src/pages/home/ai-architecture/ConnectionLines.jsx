import React from 'react';
import { motion } from 'framer-motion';

export default function ConnectionLines({ connections, activeStep }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
      <defs>
        {/* Default dimmed line gradient */}
        <linearGradient id="line-dimmed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#374151" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#1F2937" stopOpacity="0.1" />
        </linearGradient>

        {/* Active glowing line gradient */}
        <linearGradient id="line-active" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#A855F7" stopOpacity="1" />
          <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {connections.map((conn, idx) => {
        const isActive = activeStep === conn.stepId;
        
        return (
          <g key={idx}>
            {/* Base Line */}
            <path 
              d={conn.path} 
              stroke={isActive ? "url(#line-active)" : "url(#line-dimmed)"} 
              strokeWidth={isActive ? "3" : "1.5"} 
              fill="none" 
              className={isActive ? "animate-[dash_2s_linear_infinite]" : ""}
              strokeDasharray={isActive ? "10 15" : "5 10"}
              filter={isActive ? "url(#glow)" : ""}
              style={{ transition: "stroke 0.5s ease" }}
            />

            {/* Traveling Data Packet when active */}
            {isActive && (
              <circle r="4" fill="#FFFFFF" filter="url(#glow)">
                <animateMotion 
                  dur="1.5s" 
                  repeatCount="indefinite"
                  path={conn.path}
                />
              </circle>
            )}
          </g>
        );
      })}
    </svg>
  );
}
