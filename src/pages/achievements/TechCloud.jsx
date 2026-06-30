import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
 'React', 'Flutter', 'FastAPI', 'MongoDB', 
 'PostgreSQL', 'Docker', 'Python', 'TensorFlow', 
 'Firebase', 'OpenAI', 'Groq'
];

export default function TechCloud() {
 return (
 <section className="py-24 relative z-10 overflow-hidden bg-gradient-to-b from-transparent via-theme-bg to-transparent">
 <div className="container mx-auto px-6 text-center">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="mb-12"
 >
 <h2 className="text-3xl font-bold text-theme-text mb-4 tracking-tight">Powered By</h2>
 <p className="text-theme-muted max-w-2xl mx-auto">Modern technologies enabling our award-winning solutions.</p>
 </motion.div>

 <div className="grid grid-rows-2 grid-flow-col md:flex md:flex-wrap overflow-x-auto md:overflow-visible justify-start md:justify-center gap-3 md:gap-4 px-6 md:px-0 -mx-6 md:mx-auto max-w-4xl pb-6 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory">
 {techStack.map((tech, idx) => (
 <motion.div
 key={tech}
 initial={{ opacity: 0, scale: 0.8 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true, margin: "-50px" }}
 transition={{ duration: 0.4, delay: idx * 0.05 }}
 whileHover={{ 
 scale: 1.1, 
 rotate: Math.random() > 0.5 ? 2 : -2,
 boxShadow: "0px 0px 20px rgba(99, 102, 241, 0.4)" 
 }}
 className="flex-shrink-0 snap-center px-5 py-2.5 md:px-6 md:py-3 bg-theme-card backdrop-blur-md border border-theme-border rounded-xl md:rounded-2xl cursor-default transition-all duration-300 flex items-center justify-center"
 >
 <span className="text-theme-muted font-medium hover:text-theme-text transition-colors text-sm md:text-base whitespace-nowrap">{tech}</span>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}