import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import ProjectMetrics from './ProjectMetrics';

export default function ProjectHero({ project }) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#02040A] snap-start shrink-0">
      
      {/* Cinematic Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`} />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] pointer-events-none mix-blend-overlay" />
      
      {/* Glowing Mesh & Particles (Simulated via CSS) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 animate-pulse pointer-events-none"
        style={{ backgroundColor: project.glowColor || 'rgba(99, 102, 241, 0.3)' }}
      />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center pt-24 pb-12">
        
        {/* Left: Product Pitch */}
        <div className="flex flex-col gap-8 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-theme-card border border-theme-border mb-6 backdrop-blur-md">
              <span className="relative flex h-3 w-3">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${project.gradient.split(' ')[0].replace('from-', 'bg-')} opacity-75`}></span>
                <span className={`relative inline-flex rounded-full h-3 w-3 ${project.gradient.split(' ')[0].replace('from-', 'bg-')}`}></span>
              </span>
              <span className="text-sm font-medium text-theme-muted tracking-wide uppercase">Production Ready</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-extrabold text-theme-text mb-6 tracking-tight leading-tight">
              {project.title}
            </h2>
            <p className="text-xl md:text-3xl font-light text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500 mb-6">
              {project.subtitle}
            </p>
            <p className="text-lg text-theme-muted leading-relaxed max-w-xl">
              {project.tagline}
            </p>
          </motion.div>

          {/* Metrics */}
          <ProjectMetrics metrics={project.metrics} gradient={project.gradient} />
          
        </div>

        {/* Right: Floating Glass Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="relative perspective-1000 w-full aspect-[4/3]"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-white/5 to-white/10 border border-theme-border shadow-2xl backdrop-blur-3xl overflow-hidden transform hover:-translate-y-4 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-700">
            {/* Browser Header */}
            <div className="h-12 border-b border-theme-border flex items-center px-6 gap-2 bg-black/40">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="mx-auto px-4 py-1 rounded-md bg-theme-card text-xs text-theme-disabled font-mono tracking-widest">
                {project.id}.ai
              </div>
            </div>
            
            {/* App Preview */}
            <div className="relative w-full h-[calc(100%-3rem)] bg-[#050505]">
              <img 
                src={project.images[0]} 
                alt={`${project.title} Preview`}
                loading="lazy"
                className="w-full h-full object-cover opacity-80 mix-blend-lighten"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-theme-disabled flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest">System Architecture</span>
        <ArrowDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
}
