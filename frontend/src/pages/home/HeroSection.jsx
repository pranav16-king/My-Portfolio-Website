import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Code, Briefcase, Code2, Bot, Layers, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const TYPING_WORDS = [
 "Building AI Systems",
 "Building Multi-Agent Workflows",
 "Building Intelligent Products",
 "Building Real-World Solutions"
];

const ORBIT_TECH = [
 { name: 'Python', color: '#3776AB', radius: 140, speed: 20 },
 { name: 'React', color: '#61DAFB', radius: 140, speed: -25 },
 { name: 'TensorFlow', color: '#FF6F00', radius: 200, speed: 30 },
 { name: 'FastAPI', color: '#009688', radius: 200, speed: -35 },
 { name: 'LangGraph', color: '#FF4F00', radius: 260, speed: 40 },
 { name: 'Next.js', color: '#FFFFFF', radius: 260, speed: -45 },
 { name: 'Docker', color: '#2496ED', radius: 320, speed: 50 },
 { name: 'PyTorch', color: '#EE4C2C', radius: 320, speed: -55 },
];

export default function HeroSection() {
 const [currentWordIndex, setCurrentWordIndex] = useState(0);

 useEffect(() => {
 const interval = setInterval(() => {
 setCurrentWordIndex((prev) => (prev + 1) % TYPING_WORDS.length);
 }, 4000);
 return () => clearInterval(interval);
 }, []);

 return (
 <section className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-theme-bg pt-16 md:pt-24 pb-20 md:pb-0">
 {/* Aurora & Particles Background */}
 <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
 <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-theme-aurora-1/30 blur-[120px] dark:mix-blend-screen animate-pulse" />
 <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-theme-aurora-2/20 blur-[120px] dark:mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />
 <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] rounded-full bg-theme-aurora-3/20 blur-[100px] dark:mix-blend-screen animate-pulse" style={{ animationDelay: '4s' }} />
 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] dark:mix-blend-overlay" />
 </div>

 <div className="container mx-auto px-6 relative z-10 flex flex-col h-full justify-center mt-4">
 
 {/* Mobile Profile Image (Shows at top on mobile) */}
 <motion.div 
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.8 }}
 className="lg:hidden flex justify-center items-center relative h-[200px] mb-6"
 >
 {/* Outer Rotating Dash */}
 <div className="absolute w-[180px] h-[180px] rounded-full border border-dashed border-indigo-500/30 animate-[spin_15s_linear_infinite]" />
 
 {/* Inner Gradient Ring */}
 <div className="relative z-20 w-[140px] h-[140px] rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 shadow-[0_0_40px_rgba(99,102,241,0.5)] animate-[spin_8s_linear_infinite]">
 <div className="w-full h-full rounded-full bg-theme-bg overflow-hidden animate-[spin_8s_linear_infinite_reverse]">
 <img loading="lazy" 
 src="/assets/avatars/pranav.webp" 
 alt="Pranav Khaire" 
 className="w-full h-full object-cover scale-110"
 />
 </div>
 </div>
 
 {/* Floating Orbit Node */}
 <motion.div
 className="absolute z-30"
 animate={{ rotate: 360 }}
 transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
 style={{ width: 180, height: 180 }}
 >
 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
 </motion.div>
 </motion.div>

 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
 
 {/* Left Side: Content */}
 <div className="flex flex-col gap-4 lg:gap-6 items-center lg:items-start text-center lg:text-left z-20">
 <motion.div 
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
 whileHover={{ scale: 1.05 }}
 className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 w-fit backdrop-blur-md cursor-default"
 >
 <span className="relative flex h-2.5 w-2.5">
 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
 <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 shadow-[0_0_10px_#06b6d4]"></span>
 </span>
 <span className="text-xs lg:text-sm font-medium text-indigo-300">Open for Research</span>
 </motion.div>

 <motion.h1 
 initial={{ opacity: 0, x: -30 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ duration: 0.7, type: "spring", bounce: 0.4, delay: 0.1 }}
 className="text-[32px] leading-[1.1] md:text-5xl lg:text-[5rem] font-extrabold tracking-tight text-white"
 >
 Hi, I'm <br className="hidden lg:block" />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 animate-[gradient_8s_ease_infinite] bg-[length:200%_200%]">
 Pranav Khaire
 </span>
 </motion.h1>

 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.2 }}
 className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 text-[12px] md:text-sm font-medium text-gray-400"
 >
 <motion.span whileHover={{ y: -2, color: "#818cf8" }} className="flex items-center gap-1.5 cursor-default transition-colors"><Bot className="w-4 h-4 text-indigo-400"/> AI Engineer</motion.span>
 <motion.span whileHover={{ y: -2, color: "#c084fc" }} className="flex items-center gap-1.5 cursor-default transition-colors"><Layers className="w-4 h-4 text-purple-400"/> Agentic AI</motion.span>
 <motion.span whileHover={{ y: -2, color: "#22d3ee" }} className="flex items-center gap-1.5 cursor-default transition-colors"><Code2 className="w-4 h-4 text-cyan-400"/> Full Stack</motion.span>
 </motion.div>

 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.3 }}
 className="h-[30px] lg:h-[40px] flex items-center overflow-hidden mt-2"
 >
 <AnimatePresence mode="wait">
 <motion.span
 key={currentWordIndex}
 initial={{ y: 40, opacity: 0, filter: "blur(10px)" }}
 animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
 exit={{ y: -40, opacity: 0, filter: "blur(10px)" }}
 transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
 className="text-lg md:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400"
 >
 {TYPING_WORDS[currentWordIndex]}
 </motion.span>
 </AnimatePresence>
 </motion.div>

 <motion.p 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ duration: 1, delay: 0.5 }}
 className="text-sm lg:text-lg text-gray-400 max-w-sm lg:max-w-xl leading-relaxed mt-2"
 >
 I specialize in designing intelligent AI systems, architecting multi-agent workflows, and transforming complex ideas into real-world software.
 </motion.p>

 {/* CTAs */}
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 0.5, delay: 0.6 }}
 className="flex flex-col w-full sm:w-auto sm:flex-row items-center gap-3 lg:gap-4 mt-4 lg:mt-8"
 >
 <div className="flex w-full gap-3">
 <a href="#projects" className="flex-1 lg:flex-none">
 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex justify-center items-center gap-2 px-6 py-3.5 rounded-[18px] bg-white text-[#050816] font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow">
 Projects <ArrowRight className="w-4 h-4" />
 </motion.div>
 </a>
 <a href="/pranav-Resume_2025.pdf" target="_blank" className="flex-1 lg:flex-none">
 <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex justify-center items-center gap-2 px-6 py-3.5 rounded-[18px] bg-white/5 hover:bg-white/10 border border-theme-border text-white font-medium backdrop-blur-md transition-colors">
 <Download className="w-4 h-4" /> Resume
 </motion.div>
 </a>
 </div>
 
 <div className="flex justify-center w-full gap-3 mt-2 sm:mt-0">
 <motion.a href="https://github.com" target="_blank" rel="noreferrer" whileHover={{ scale: 1.1, rotate: -5 }} whileTap={{ scale: 0.9 }} className="flex-1 sm:flex-none flex justify-center p-3.5 rounded-[18px] bg-white/5 hover:bg-white/10 border border-theme-border text-gray-400 hover:text-white backdrop-blur-md transition-colors">
 <Code className="w-5 h-5" />
 </motion.a>
 <motion.a href="https://linkedin.com" target="_blank" rel="noreferrer" whileHover={{ scale: 1.1, rotate: 5 }} whileTap={{ scale: 0.9 }} className="flex-1 sm:flex-none flex justify-center p-3.5 rounded-[18px] bg-white/5 hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50 border border-theme-border text-gray-400 hover:text-[#0077b5] backdrop-blur-md transition-colors">
 <Briefcase className="w-5 h-5" />
 </motion.a>
 </div>
 </motion.div>
 </div>

 {/* Right Side: Large Orbit Animation (Desktop Only) */}
 <motion.div 
 initial={{ opacity: 0, scale: 0.8 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 1, delay: 0.2 }}
 className="hidden lg:flex justify-center items-center relative h-[600px] group"
 >
 {/* Background Pulse */}
 <div className="absolute z-0 w-[240px] h-[240px] rounded-full bg-indigo-500/20 blur-[80px] animate-[pulse_4s_ease-in-out_infinite]" />

 {/* Center Portrait */}
 <motion.div 
 whileHover={{ scale: 1.05 }}
 className="relative z-20 w-[240px] h-[240px] rounded-full p-[3px] bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 shadow-[0_0_50px_rgba(99,102,241,0.4)] transition-transform duration-500"
 >
 {/* Rotating gradient border effect */}
 <div className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite] bg-gradient-to-tr from-transparent via-white/50 to-transparent" />
 <div className="w-full h-full rounded-full bg-theme-bg overflow-hidden relative z-10">
 <img loading="lazy" 
 src="/assets/avatars/pranav.webp" 
 alt="Pranav Khaire" 
 className="w-full h-full object-cover scale-110 hover:scale-125 transition-transform duration-700"
 />
 </div>
 </motion.div>

 {/* Orbit Rings & Tech Nodes */}
 <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
 {[
  { r: 140, dash: 'border-solid' }, 
  { r: 200, dash: 'border-dashed opacity-50 animate-[spin_30s_linear_infinite]' }, 
  { r: 260, dash: 'border-solid opacity-30' }, 
  { r: 320, dash: 'border-dashed opacity-40 animate-[spin_40s_linear_infinite_reverse]' }
 ].map((ring, i) => (
 <motion.div 
 key={i} 
 initial={{ scale: 0, opacity: 0 }}
 animate={{ scale: 1, opacity: 1 }}
 transition={{ duration: 1.2, delay: 0.2 + (i * 0.15), type: "spring", stiffness: 50 }}
 className={`absolute border border-theme-border rounded-full ${ring.dash}`} 
 style={{ width: ring.r * 2, height: ring.r * 2 }} 
 />
 ))}
 
 {ORBIT_TECH.map((tech, i) => (
 <motion.div
 key={tech.name}
 className="absolute pointer-events-none"
 animate={{ rotate: 360 }}
 transition={{ duration: Math.abs(tech.speed), repeat: Infinity, ease: "linear", direction: tech.speed > 0 ? 'normal' : 'reverse' }}
 style={{ width: tech.radius * 2, height: tech.radius * 2 }}
 >
 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
 <motion.div 
 initial={{ scale: 0 }}
 animate={{ scale: 1, rotate: -360 }}
 transition={{ 
   scale: { duration: 0.5, delay: 0.5 + (i * 0.1) },
   rotate: { duration: Math.abs(tech.speed), repeat: Infinity, ease: "linear", direction: tech.speed > 0 ? 'normal' : 'reverse' } 
 }}
 whileHover={{ scale: 1.2, boxShadow: `0 0 20px ${tech.color}80` }}
 className="px-4 py-2 rounded-full bg-theme-card/90 backdrop-blur-md border border-theme-border text-xs font-bold whitespace-nowrap cursor-pointer transition-colors hover:border-theme-border"
 style={{ color: tech.color, textShadow: `0 0 10px ${tech.color}40` }}
 >
 {tech.name}
 </motion.div>
 </div>
 </motion.div>
 ))}
 </div>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
