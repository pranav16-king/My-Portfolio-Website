import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Code2, Briefcase, FileText, ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-32 relative z-10 bg-theme-bg-secondary overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="relative rounded-[40px] p-10 md:p-20 text-center group"
        >
          {/* Animated Glow Border */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-500 rounded-[40px] opacity-20 group-hover:opacity-40 transition-opacity duration-700 blur-md" />
          
          {/* Glass Container */}
          <div className="absolute inset-[2px] bg-theme-bg/90 backdrop-blur-2xl rounded-[38px]" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-theme-text mb-6 tracking-tight">
              Interested in <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Collaborating?</span>
            </h2>
            <p className="text-xl text-theme-muted mb-12 max-w-2xl mx-auto">
              Let's build the next innovation together. I am always open to discussing new projects, research opportunities, or agentic AI architectures.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-4">
              <a 
                href="mailto:pranavkhaire53@example.com"
                className="group relative flex items-center gap-2 px-8 py-4 bg-white text-[#050816] rounded-2xl font-bold overflow-hidden transition-transform hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Mail className="w-5 h-5 relative z-10" /> 
                <span className="relative z-10">Get In Touch</span>
                <ArrowRight className="w-4 h-4 ml-1 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="https://github.com/pranav16-king" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-theme-card hover:bg-theme-card-hover border border-theme-border text-theme-text rounded-2xl font-medium transition-all hover:scale-105 hover:border-theme-border backdrop-blur-md"
              >
                <Code2 className="w-5 h-5" /> GitHub
              </a>
              
              <a 
                href="https://www.linkedin.com/in/pranav-khaire-732793338/" 
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-theme-card hover:bg-theme-card-hover border border-theme-border text-theme-text rounded-2xl font-medium transition-all hover:scale-105 hover:border-theme-border backdrop-blur-md"
              >
                <Briefcase className="w-5 h-5" /> LinkedIn
              </a>
              
              <a 
                href="/pranav-Resume_2025.pdf"
                target="_blank"
                className="flex items-center gap-2 px-8 py-4 bg-theme-card hover:bg-theme-card-hover border border-theme-border text-theme-text rounded-2xl font-medium transition-all hover:scale-105 hover:border-theme-border backdrop-blur-md"
              >
                <FileText className="w-5 h-5" /> Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}