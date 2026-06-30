import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Trophy, Medal, Award, Users, Star } from 'lucide-react';

import { competitions, extraCertificates, teamMembers } from '../../data/achievementsData';

export default function Statistics() {
  const stats = [
    { icon: Trophy, value: competitions.length, suffix: '', label: 'Competitions', sub: 'Participated' },
    { icon: Medal, value: competitions.filter(c => c.title.toLowerCase().includes('winner') || c.title.toLowerCase().includes('runner') || c.title.toLowerCase().includes('prize')).length || 2, suffix: '+', label: 'Awards', sub: '& Recognitions' },
    { icon: Award, value: competitions.filter(c => c.images.certificate).length + extraCertificates.length, suffix: '', label: 'Certificates', sub: 'Earned' },
    { icon: Users, value: competitions.filter(c => c.images.project.length > 0).length || 5, suffix: '+', label: 'Team', sub: 'Projects' },
    { icon: Star, value: teamMembers.length, suffix: '', label: 'Team', sub: 'Members' }
  ];
  console.log("Trophy:", Trophy);
  console.log("CountUp:", CountUp);
  return (
    <section className="relative z-10 -mt-10 mb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-theme-bg-secondary/80 backdrop-blur-2xl border border-theme-border rounded-[32px] shadow-2xl p-8 md:p-12 flex flex-wrap justify-between items-center gap-8 relative overflow-hidden"
        >
          {/* Subtle Glow inside the card */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-purple-500/5" />

          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1 min-w-[140px] relative z-10 group">
              
              {/* Icon */}
              <div className="mb-4 p-3 bg-theme-card rounded-2xl text-indigo-400 group-hover:text-purple-400 group-hover:bg-theme-card-hover transition-colors">
                {(() => {
                  const Icon = stat.icon;
                  // Handle potential forwardRef object in React 19
                  if (Icon && typeof Icon === 'object' && Icon.render) {
                    return Icon.render({ className: "w-6 h-6" }, null);
                  }
                  return <Icon className="w-6 h-6" />;
                })()}
              </div>

              {/* Counter */}
              <div className="text-4xl md:text-5xl font-bold text-theme-text mb-1 flex items-baseline tracking-tight">
                {(() => {
                  // Handle potential CommonJS default export wrapper
                  const SafeCountUp = CountUp.default || CountUp;
                  return <SafeCountUp end={stat.value} duration={3} enableScrollSpy={true} scrollSpyOnce={true} />;
                })()}
                <span className="text-3xl text-indigo-400 ml-1">{stat.suffix}</span>
              </div>

              {/* Labels */}
              <div>
                <p className="text-theme-muted font-semibold text-sm tracking-wide">{stat.label}</p>
                <p className="text-theme-disabled text-xs">{stat.sub}</p>
              </div>

              {/* Divider for desktop */}
              {idx !== stats.length - 1 && (
                <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10" />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}