import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Zap, Star, Shield, Award, ArrowUpRight } from 'lucide-react';
import { competitions } from '../../data/achievementsData';

const icons = [Trophy, Zap, Star, Shield, Award];
const colors = [
  'from-[#ffb347] to-[#ffcc33]', // Gold 1
  'from-[#00c6ff] to-[#0072ff]', // Cyan/Blue
  'from-[#f12711] to-[#f5af19]', // Fire
  'from-[#8E2DE2] to-[#4A00E0]', // Purple/Indigo
  'from-[#11998e] to-[#38ef7d]'  // Emerald
];

const layouts = [
  { colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
  { colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' }
];

const winningKeywords = ['1st', 'first', 'winner', 'champion', 'sankalpana', 'honeywell'];
const winningComps = competitions.filter(comp => {
  const t = comp.title.toLowerCase();
  return winningKeywords.some(kw => t.includes(kw));
});

const bentoItems = winningComps.slice(0, 5).map((comp, idx) => ({
  title: comp.title || 'Competition',
  badge: (comp.title.toLowerCase().includes('winner') || comp.title.toLowerCase().includes('1st') || comp.title.toLowerCase().includes('first') || comp.title.toLowerCase().includes('champion')) ? '🏆 Champion' : '🏅 Honors',
  year: comp.date.split(' ').pop() || '2025',
  event: comp.event || 'National Level Event',
  colSpan: layouts[idx % 5].colSpan,
  rowSpan: layouts[idx % 5].rowSpan,
  icon: icons[idx % 5],
  color: colors[idx % 5],
  image: comp.images.certificate || comp.images.team || (comp.images.project[0] || '/images/school.png')
}));

export default function BentoHighlights() {
  const [expandedIdx, setExpandedIdx] = useState(0);

  return (
    <section className="py-24 md:py-32 relative z-10 bg-theme-bg">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-theme-accent-primary/10 via-[#02040A] to-[#02040A] z-0" />
      
      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-20 text-center flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-semibold text-xs md:text-sm mb-4 md:mb-6">
            <Star className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" /> The Hall of Fame
          </div>
          <h2 className="text-4xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-theme-text via-theme-text/80 to-theme-muted mb-4 md:mb-6 tracking-tight">
            Defining Moments
          </h2>
          <p className="text-base md:text-xl text-theme-muted max-w-2xl font-light">
            A curated showcase of our most prestigious victories, national-level triumphs, and groundbreaking innovations.
          </p>
        </motion.div>

        {/* Mobile Accordion & Desktop Bento */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-8 md:auto-rows-[280px]">
          {bentoItems.map((item, idx) => {
            const isExpanded = expandedIdx === idx;
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 100 }}
                onClick={() => setExpandedIdx(idx)}
                className={`relative overflow-hidden rounded-[24px] md:rounded-[40px] bg-theme-card border border-theme-border group cursor-pointer shadow-2xl hover:shadow-[0_0_80px_rgba(99,102,241,0.15)] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                  ${item.colSpan} ${item.rowSpan} 
                  ${isExpanded ? 'h-[260px] md:h-full' : 'h-[72px] md:h-full'}
                `}
              >
                {/* Dynamic Image Background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img loading="lazy" 
                    src={item.image} 
                    alt={item.title} 
                    className={`w-full h-full object-cover mix-blend-screen filter saturate-[1.2] transition-all duration-1000 ease-out 
                      ${isExpanded ? 'opacity-40 scale-100 md:opacity-30' : 'opacity-10 scale-110 md:opacity-30'}
                      md:group-hover:opacity-60 md:group-hover:scale-105
                    `}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-theme-card via-theme-card/80 to-theme-card/20 transition-opacity duration-700`} />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} mix-blend-overlay transition-opacity duration-700
                    ${isExpanded ? 'opacity-30' : 'opacity-10 md:opacity-20'} md:group-hover:opacity-40
                  `} />
                </div>

                {/* Glowing Inner Border */}
                <div className="absolute inset-0 z-10 border border-theme-border md:group-hover:border-theme-border rounded-[24px] md:rounded-[40px] transition-colors duration-700 pointer-events-none" />

                {/* Collapsed Mobile Title */}
                <div className={`absolute left-5 right-20 top-1/2 -translate-y-1/2 z-20 md:hidden transition-all duration-500 delay-100
                  ${isExpanded ? 'opacity-0 -translate-x-4 pointer-events-none' : 'opacity-100 translate-x-0'}
                `}>
                  <h3 className="text-theme-text font-bold text-sm truncate">{item.title}</h3>
                </div>

                {/* Content Overlay */}
                <div className="relative z-20 h-full p-5 md:p-10 flex flex-col justify-between">
                  <div className="flex justify-between items-center md:items-start w-full">
                    {/* Badge (Hidden on mobile when collapsed) */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-widest bg-white/10 backdrop-blur-md border border-theme-border text-theme-text shadow-xl md:group-hover:scale-105 transition-all duration-500
                      ${isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 md:opacity-100 md:translate-y-0'}
                    `}>
                      {item.badge}
                    </div>
                    
                    {/* Icon (Always visible) */}
                    <div className={`w-10 h-10 md:w-12 md:h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-theme-card backdrop-blur-xl border border-theme-border transition-all duration-500
                      ${isExpanded ? 'bg-white/20 scale-110 md:bg-theme-card md:scale-100 md:group-hover:rotate-12' : 'scale-90 md:scale-100'}
                    `}>
                      <item.icon className="w-4 h-4 md:w-6 md:h-6 text-theme-text" />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <div className={`transform transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] 
                    ${isExpanded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 md:translate-y-4 md:group-hover:translate-y-0 md:opacity-100'}
                  `}>
                    <p className="text-indigo-400 font-semibold tracking-wide text-[10px] md:text-sm mb-1.5 md:mb-3 uppercase flex items-center gap-2">
                      {item.year} <span className="w-1 h-1 rounded-full bg-indigo-500 opacity-50" /> {item.event}
                    </p>
                    <h3 className={`font-bold text-theme-text tracking-tight leading-tight line-clamp-2 md:line-clamp-none ${idx === 0 ? 'text-2xl md:text-5xl' : 'text-lg md:text-3xl'}`}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}