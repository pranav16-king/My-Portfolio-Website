import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, ExternalLink, HeartPulse, Stethoscope } from 'lucide-react';

const FEATURED_PROJECTS = [
  {
    title: "OverthinkAI",
    subtitle: "A Structured Debate System",
    description: "A four-agent deliberation engine that acts as a structured debate system rather than a standard chatbot. It orchestrates a debate between a Realist, Visionary, Ethicist, and an Adversarial Auditor.",
    features: ["Multi-agent debate engine", "Live web search", "Adversarial gating"],
    techStack: ["FastAPI", "Gemini", "Groq", "LangGraph", "Next.js", "Python"],
    images: ["/assets/projects/overthinkai/overthinkai.jpg", "/assets/projects/overthinkai/overthinkai 1.jpg", "/assets/projects/overthinkai/overthinkai 2.jpg", "/assets/projects/overthinkai/overthinkai 3.jpg"],
    gradient: "from-orange-600/40 to-amber-500/40",
    icon: <Code className="w-8 h-8 text-orange-400" />
  },
  {
    title: "Zerocarbonix",
    subtitle: "Carbon Credit MRV & Trading System",
    description: "An end-to-end ClimateTech platform that digitizes the complete carbon credit lifecycle using AI and blockchain. Automates Measurement, Reporting & Verification (MRV), enabling secure trading.",
    features: ["AI-powered MRV", "Blockchain ledger", "Scope 1-3 monitoring"],
    techStack: ["AI/ML", "FastAPI", "React", "PostgreSQL", "Blockchain", "Docker"],
    images: ["/assets/projects/zerocarbonix/zerocarbnix (1).png", "/assets/projects/zerocarbonix/zerocarbnix (2).png", "/assets/projects/zerocarbonix/zerocarbnix (3).png", "/assets/projects/zerocarbonix/zerocarbnix (4).png"],
    gradient: "from-emerald-600/40 to-teal-500/40",
    icon: <Code className="w-8 h-8 text-emerald-400" />
  },
  {
    title: "Training Intelligence",
    subtitle: "Enterprise Learning Management",
    description: "An enterprise-grade platform designed to streamline corporate learning. Provides role-based dashboards, live quizzes with OTP verification, attendance tracking, and automated certificates.",
    features: ["Role-based Dashboards", "Live OTP Quiz Engine", "Automated Certificates"],
    techStack: ["React", "Vite", "Tailwind CSS", "FastAPI", "MongoDB", "Firebase"],
    images: ["/assets/projects/training/training-1.png", "/assets/projects/training/training-2.png"],
    gradient: "from-sky-600/40 to-indigo-500/40",
    icon: <Code className="w-8 h-8 text-sky-400" />
  },
  {
    title: "HealthSpire",
    subtitle: "AI Emergency Healthcare Platform",
    description: "An intelligent healthcare emergency management system connecting patients, ambulances, hospitals, emergency responders, and AI into a unified ecosystem.",
    features: ["One-Tap SOS", "Live Tracking", "AI First Aid Assistant"],
    techStack: ["React", "Node.js", "AI Integrations", "Maps API"],
    images: [
      "/assets/projects/healthspire.png",
      "/assets/projects/healthspire-1.png",
      "/assets/projects/healthspire-2.png",
      "/assets/projects/healthspire-3.png"
    ],
    gradient: "from-blue-600/40 to-cyan-500/40",
    icon: <HeartPulse className="w-8 h-8 text-cyan-400" />
  },
  {
    title: "SentinelRx AI",
    subtitle: "Complete Healthcare & Pharmacy",
    description: "An AI-powered, multi-role healthcare ecosystem combining pharmacy e-commerce, doctor appointments, hospital management, and NGO operations.",
    features: ["AI Order Agent", "Smart Refills", "Multilingual Voice Chat"],
    techStack: ["React", "Python", "Voice AI", "E-Commerce APIs"],
    images: [
      "/assets/projects/sentinelrx.png",
      "/assets/projects/sentinelrx-1.png",
      "/assets/projects/sentinelrx-2.png"
    ],
    gradient: "from-purple-600/40 to-indigo-500/40",
    icon: <Stethoscope className="w-8 h-8 text-indigo-400" />
  },
  {
    title: "Cogni-Sphere",
    subtitle: "Technical Project",
    description: "An innovative technical project built for the Cogni-Sphere 2025 competition, recognized for excellence in problem-solving and complex technical implementation.",
    features: ["Innovative Architecture", "Problem Solving", "Technical Excellence"],
    techStack: ["React", "Node.js", "MongoDB", "Express"],
    images: [
      "/assets/projects/cogni-sphere.png"
    ],
    gradient: "from-rose-600/40 to-pink-500/40",
    icon: <Code className="w-8 h-8 text-rose-400" />
  }
];

const ProjectCard = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-scroll logic for images
  useEffect(() => {
    if (project.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
    }, 3000 + (index * 500)); // Stagger the intervals slightly
    return () => clearInterval(interval);
  }, [project.images.length, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col h-full bg-theme-bg-secondary border border-theme-border rounded-2xl overflow-hidden hover:border-indigo-500/30 transition-all duration-300 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] group"
    >
      {/* Image Container */}
      <div className="relative w-full aspect-video bg-black overflow-hidden border-b border-theme-border shrink-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={project.images[currentImageIndex]}
            alt={`${project.title} screenshot`}
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        </AnimatePresence>
        
        {/* Floating Icon Badge */}
        <div className="absolute top-3 right-3 w-10 h-10 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg">
          {React.cloneElement(project.icon, { className: 'w-5 h-5' })}
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col flex-1 p-6 md:p-8 bg-theme-bg/50">
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold text-theme-text mb-1 tracking-tight">{project.title}</h3>
          <p className="text-sm md:text-base font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{project.subtitle}</p>
        </div>

        {/* Unclamped Description for full context */}
        <p className="text-sm text-theme-muted leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Tech Stack Representation */}
        <div className="mb-5">
          <p className="text-xs font-semibold text-theme-text/60 uppercase tracking-wider mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack?.map(tech => (
              <span key={tech} className="px-2 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-md text-[11px] font-semibold text-indigo-400">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features - Scrollable Row */}
        <div className="mb-6">
           <p className="text-xs font-semibold text-theme-text/60 uppercase tracking-wider mb-2">Key Features</p>
           <div className="flex flex-wrap gap-2">
             {project.features.map(feature => (
               <span key={feature} className="px-2.5 py-1 bg-theme-bg border border-theme-border rounded-md text-[11px] font-medium text-theme-text/80">
                 {feature}
               </span>
             ))}
           </div>
        </div>

      </div>
    </motion.div>
  );
};

export default function ProjectShowcase() {
  return (
    <section className="py-24 md:py-32 bg-theme-bg relative" id="projects">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1400px]">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-medium text-xs mb-4"
          >
            <Code className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-theme-text mb-4 tracking-tight"
          >
            My Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-theme-muted max-w-2xl mx-auto"
          >
            A showcase of complex architectures, scalable systems, and national-level award-winning solutions.
          </motion.p>
        </div>

        {/* Enterprise 3x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
