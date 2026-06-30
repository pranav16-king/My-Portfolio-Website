import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HackathonPreview() {
 return (
 <section className="py-24 bg-theme-bg relative overflow-hidden">
 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 dark:mix-blend-overlay pointer-events-none" />
 
 <div className="container mx-auto px-6 lg:px-12 relative z-10">
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-center max-w-4xl mx-auto"
 >
 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-bold tracking-wide uppercase mb-6">
 <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
 Competitive Programming
 </div>
 <h2 className="text-4xl md:text-6xl font-extrabold text-theme-text mb-6 tracking-tight">
 Hackathons & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">Achievements</span>
 </h2>
 <p className="text-lg text-theme-muted mb-10 max-w-2xl mx-auto">
 I thrive under pressure. From 24-hour sprints to national level hackathons, I lead teams to build innovative solutions that win awards.
 </p>
 
 <div className="flex justify-center">
 <Link to="/achievements" className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-theme-text transition-all duration-300 bg-amber-500 rounded-2xl hover:bg-amber-600 hover:scale-105 shadow-[0_0_30px_rgba(245,158,11,0.3)] hover:shadow-[0_0_50px_rgba(245,158,11,0.5)]">
 <Trophy className="w-5 h-5 mr-2" />
 View Full Achievements Gallery
 <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
 </Link>
 </div>
 </motion.div>
 </div>
 </section>
 );
}
