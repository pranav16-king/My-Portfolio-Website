import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

const MILESTONES = [
 { title: "Programming", desc: "The foundation of logic and problem-solving.", color: "#4B5563" },
 { title: "Python", desc: "Mastering scripting, data manipulation, and clean syntax.", color: "#3776AB" },
 { title: "Web Development", desc: "Understanding the DOM, APIs, and client-server models.", color: "#E34F26" },
 { title: "React", desc: "Building modular, state-driven, interactive UIs.", color: "#61DAFB" },
 { title: "Flutter", desc: "Expanding to cross-platform mobile development.", color: "#02569B" },
 { title: "Backend Development", desc: "Architecting databases, APIs, and business logic.", color: "#10B981" },
 { title: "Artificial Intelligence", desc: "Diving into algorithms and statistical models.", color: "#8B5CF6" },
 { title: "Machine Learning", desc: "Training predictive models and working with datasets.", color: "#F59E0B" },
 { title: "Deep Learning", desc: "Neural networks, computer vision, and NLP.", color: "#EC4899" },
 { title: "Large Language Models", desc: "Prompt engineering, RAG, and generative AI.", color: "#14B8A6" },
 { title: "Agentic AI", desc: "Building autonomous systems that reason and execute.", color: "#FF4F00" },
 { title: "LangGraph", desc: "Orchestrating complex multi-agent workflows.", color: "#3B82F6" },
 { title: "Model Context Protocol", desc: "Connecting LLMs to dynamic external tools (MCP).", color: "#F43F5E" },
 { title: "FastAPI", desc: "Deploying high-performance asynchronous AI APIs.", color: "#009688" },
 { title: "Cloud Deployment", desc: "Containerizing with Docker and scaling on the cloud.", color: "#2496ED" },
 { title: "Hackathons", desc: "Competing globally to validate ideas under pressure.", color: "#A855F7" },
 { title: "Research", desc: "Pushing boundaries and exploring novel AI architectures.", color: "#6366F1" },
 { title: "Present", desc: "Building world-class AI products and platforms.", color: "#FFFFFF" }
];

export default function EngineeringTimeline() {
 const containerRef = useRef(null);
 
 // Track scroll for the central line
 const { scrollYProgress } = useScroll({
 target: containerRef,
 offset: ["start center", "end 80%"]
 });

 const scaleY = useSpring(scrollYProgress, {
 stiffness: 100,
 damping: 30,
 restDelta: 0.001
 });

 // Track scroll for background parallax
 const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

 return (
 <section className="py-32 bg-theme-card relative overflow-hidden" ref={containerRef}>
 
 {/* Animated Background Elements */}
 <motion.div 
 style={{ y: yParallax }}
 className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent opacity-50 pointer-events-none"
 />
 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:mix-blend-overlay pointer-events-none" />

 <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-5xl">
 <motion.div 
 initial={{ opacity: 0, y: 50, scale: 0.95 }}
 whileInView={{ opacity: 1, y: 0, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, type: "spring" }}
 className="mb-32 text-center"
 >
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-bold tracking-widest uppercase mb-8 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
 <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
 Evolution
 </div>
 <h2 className="text-5xl md:text-7xl font-extrabold text-theme-text mb-6 tracking-tight">
 Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">Journey</span>
 </h2>
 <p className="text-xl text-theme-muted max-w-2xl mx-auto font-medium">
 From basic programming to architecting advanced multi-agent AI systems.
 </p>
 </motion.div>

 <div className="relative">
 {/* Base Timeline Line (Dim) */}
 <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1.5 bg-theme-glass md:-translate-x-1/2 rounded-full" />
 
 {/* Animated Glowing Fill Line */}
 <motion.div 
 className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-1.5 bg-gradient-to-b from-cyan-400 via-indigo-500 to-purple-500 md:-translate-x-1/2 rounded-full origin-top shadow-[0_0_30px_rgba(6,182,212,0.6)]"
 style={{ scaleY }}
 />

 <div className="flex flex-col gap-16 md:gap-32">
 {MILESTONES.map((item, index) => {
 const isEven = index % 2 === 0;
 return (
 <div key={item.title} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} pl-16 md:pl-0 group`}>
 
 {/* Timeline Dot with Pulse Animation */}
 <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 z-20 flex items-center justify-center">
 <motion.div 
 initial={{ scale: 0, opacity: 0 }}
 whileInView={{ scale: 1, opacity: 1 }}
 viewport={{ once: true, margin: "-150px" }}
 transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
 className="w-5 h-5 rounded-full bg-theme-card relative z-10"
 style={{ border: `4px solid ${item.color}` }}
 >
 <motion.div 
 animate={{ 
 scale: [1, 2.5, 3],
 opacity: [0.8, 0.2, 0]
 }}
 transition={{
 duration: 2,
 repeat: Infinity,
 ease: "easeOut"
 }}
 className="absolute inset-0 rounded-full" 
 style={{ backgroundColor: item.color }} 
 />
 </motion.div>
 </div>

 {/* Connecting Line (Desktop Only) */}
 <motion.div 
 initial={{ scaleX: 0, opacity: 0 }}
 whileInView={{ scaleX: 1, opacity: 1 }}
 viewport={{ once: true, margin: "-150px" }}
 transition={{ duration: 0.5, delay: 0.3 }}
 className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-px bg-gradient-to-r ${isEven ? 'left-1/2 right-1/2 origin-left' : 'right-1/2 left-1/2 origin-right'}`}
 style={{ 
 width: 'calc(50% - 3rem)',
 marginLeft: isEven ? '20px' : '0',
 marginRight: isEven ? '0' : '20px',
 backgroundImage: `linear-gradient(to ${isEven ? 'right' : 'left'}, ${item.color}80, transparent)`
 }}
 />

 {/* Content Box */}
 <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>
 <motion.div
 initial={{ opacity: 0, x: isEven ? -80 : 80, scale: 0.9 }}
 whileInView={{ opacity: 1, x: 0, scale: 1 }}
 viewport={{ once: true, margin: "-150px" }}
 transition={{ duration: 0.7, type: "spring", bounce: 0.4 }}
 whileHover={{ 
 scale: 1.05, 
 rotateZ: isEven ? -1.5 : 1.5,
 y: -10,
 boxShadow: `0 20px 50px -10px ${item.color}40`,
 borderColor: `${item.color}60`
 }}
 className="p-8 md:p-10 rounded-3xl bg-theme-bg/80 /80 backdrop-blur-xl border border-theme-border transition-all duration-300 relative overflow-hidden"
 >
 {/* Subtle hover gradient inside the card */}
 <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" style={{ background: `linear-gradient(135deg, ${item.color}, transparent)` }} />
 
 <motion.h3 
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.4 }}
 className="text-2xl md:text-3xl font-bold text-theme-text mb-3" 
 style={{ color: item.color }}
 >
 {item.title}
 </motion.h3>
 
 <motion.p 
 initial={{ opacity: 0, y: 10 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.5 }}
 className="text-theme-muted group-hover:text-theme-muted transition-colors text-lg leading-relaxed"
 >
 {item.desc}
 </motion.p>
 </motion.div>
 </div>

 </div>
 );
 })}
 </div>
 </div>
 </div>
 </section>
 );
}
