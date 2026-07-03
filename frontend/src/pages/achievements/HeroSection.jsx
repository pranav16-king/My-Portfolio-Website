import React from 'react';
import { motion } from 'framer-motion';
import { Download, Compass } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Glowing Blobs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-theme-aurora-2/20 rounded-full blur-[150px] -z-10 mix-blend-screen pointer-events-none" />

      {/* Floating Particles (Simplified via Framer Motion) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000) 
            }}
            animate={{ 
              y: [null, Math.random() * -200],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-300 tracking-tight leading-[1.1] mb-6"
            >
              Achievements & <br/> 
              <span className="text-theme-text">Competition Journey</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-theme-muted max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light"
            >
              A journey of building innovative AI products, winning hackathons, leading teams, conducting research, and solving real-world engineering problems.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <button className="flex items-center gap-2 px-8 py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] group">
                <Compass className="w-5 h-5 group-hover:rotate-45 transition-transform" /> Explore Journey
              </button>
              
              <a href="/pranav-Resume_2025.pdf" target="_blank" className="flex items-center gap-2 px-8 py-3.5 bg-theme-card hover:bg-theme-card-hover backdrop-blur-md border border-theme-border text-theme-text rounded-full font-medium transition-colors">
                <Download className="w-5 h-5" /> Resume
              </a>
              

            </motion.div>
          </div>

          {/* Right 3D Trophy */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="flex-1 relative max-w-lg hidden md:block"
          >
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <img loading="lazy" 
                src="/images/3d-trophy.png" 
                alt="3D Glowing Trophy" 
                className="w-full h-auto drop-shadow-[0_0_50px_rgba(168,85,247,0.4)]"
              />
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}