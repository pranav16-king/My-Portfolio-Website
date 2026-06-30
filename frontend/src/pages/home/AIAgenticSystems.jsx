import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { User, Network, Brain, Database, Wrench, MessageSquare, ShieldCheck, Search } from 'lucide-react';

import AICore from './ai-architecture/AICore';
import AgentNode from './ai-architecture/AgentNode';
import ConnectionLines from './ai-architecture/ConnectionLines';
import AgentHoverPanel from './ai-architecture/AgentHoverPanel';
import TechBadges from './ai-architecture/TechBadges';

const WORKFLOW_STEPS = [
  'user',
  'router',
  'planning',
  'research',
  'tool',
  'reasoning',
  'critic',
  'response'
];

const AGENTS = [
  { 
    id: 'user', 
    icon: <User className="w-6 h-6" />, 
    label: 'User Query', 
    x: '10%', y: '50%', 
    color: 'border-blue-500 text-blue-400',
    purpose: 'Entry point for external requests.',
    input: 'Natural Language',
    output: 'Structured Query',
    tech: ['React', 'Next.js'],
    latency: '45ms',
    confidence: '100%',
    memory: '2MB',
    tokens: '124'
  },
  { 
    id: 'router', 
    icon: <Network className="w-6 h-6" />, 
    label: 'Semantic Router', 
    x: '25%', y: '50%', 
    color: 'border-purple-500 text-purple-400',
    purpose: 'Classifies intent and routes to correct agent.',
    input: 'Structured Query',
    output: 'Routing Decision',
    tech: ['FastAPI', 'Sentence Transformers'],
    latency: '120ms',
    confidence: '98.5%',
    memory: '120MB',
    tokens: '450'
  },
  { 
    id: 'planning', 
    icon: <Brain className="w-6 h-6" />, 
    label: 'Planning Agent', 
    x: '40%', y: '20%', 
    color: 'border-indigo-500 text-indigo-400',
    purpose: 'Breaks complex tasks into executable sub-steps.',
    input: 'Complex Goal',
    output: 'Execution Graph',
    tech: ['LangGraph', 'OpenAI'],
    latency: '850ms',
    confidence: '94.2%',
    memory: '512MB',
    tokens: '2.4K'
  },
  { 
    id: 'research', 
    icon: <Search className="w-6 h-6" />, 
    label: 'RAG Agent', 
    x: '40%', y: '80%', 
    color: 'border-cyan-500 text-cyan-400',
    purpose: 'Retrieves external context and documentation.',
    input: 'Search Query',
    output: 'Context Chunks',
    tech: ['Vector DB', 'OpenAI Embeddings'],
    latency: '340ms',
    confidence: '92.1%',
    memory: '2.1GB',
    tokens: '8.5K'
  },
  { 
    id: 'tool', 
    icon: <Wrench className="w-6 h-6" />, 
    label: 'Tool Execution', 
    x: '75%', y: '80%', 
    color: 'border-pink-500 text-pink-400',
    purpose: 'Interacts with external APIs safely.',
    input: 'Function Call',
    output: 'JSON Result',
    tech: ['Model Context Protocol', 'Docker'],
    latency: '1.2s',
    confidence: '99.9%',
    memory: '64MB',
    tokens: '850'
  },
  { 
    id: 'critic', 
    icon: <ShieldCheck className="w-6 h-6" />, 
    label: 'Critic Agent', 
    x: '75%', y: '20%', 
    color: 'border-rose-500 text-rose-400',
    purpose: 'Evaluates intermediate outputs for correctness.',
    input: 'Draft Output',
    output: 'Pass/Fail + Feedback',
    tech: ['GPT-4o', 'Prompt Engineering'],
    latency: '950ms',
    confidence: '89.4%',
    memory: '256MB',
    tokens: '1.2K'
  },
  { 
    id: 'response', 
    icon: <MessageSquare className="w-6 h-6" />, 
    label: 'Synthesis', 
    x: '90%', y: '50%', 
    color: 'border-emerald-500 text-emerald-400',
    purpose: 'Generates the final human-readable response.',
    input: 'Aggregated Results',
    output: 'Final Markdown',
    tech: ['Groq', 'Llama 3'],
    latency: '220ms',
    confidence: '97.8%',
    memory: '1.2GB',
    tokens: '1.8K'
  }
];

const CONNECTIONS = [
  { stepId: 'user', path: "M 10% 50% L 25% 50%" },
  { stepId: 'router', path: "M 25% 50% Q 30% 20% 40% 20%" }, // to planner
  { stepId: 'planning', path: "M 40% 20% Q 45% 50% 50% 50%" }, // planner to core
  { stepId: 'research', path: "M 50% 50% Q 45% 80% 40% 80%" }, // core to RAG
  { stepId: 'tool', path: "M 40% 80% Q 50% 90% 75% 80%" }, // RAG to tools
  { stepId: 'reasoning', path: "M 75% 80% Q 65% 50% 50% 50%" }, // Tools to core
  { stepId: 'critic', path: "M 50% 50% Q 65% 20% 75% 20%" }, // core to critic
  { stepId: 'response', path: "M 75% 20% Q 85% 50% 90% 50%" } // critic to response
];

export default function AIAgenticSystems() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [hoveredAgentId, setHoveredAgentId] = useState(null);

  // Auto-simulate workflow
  useEffect(() => {
    if (hoveredAgentId) return; // Pause if user is exploring

    const interval = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % WORKFLOW_STEPS.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [hoveredAgentId]);

  const activeStep = WORKFLOW_STEPS[activeStepIndex];
  
  // Determine which agent is currently highlighted by the active step
  const activeAgent = AGENTS.find(a => a.id === activeStep) || null;
  const displayAgent = hoveredAgentId ? AGENTS.find(a => a.id === hoveredAgentId) : activeAgent;

  return (
    <section className="py-32 bg-theme-bg relative overflow-hidden">
      {/* Cinematic Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/10 via-theme-bg dark:via-[#050816] to-theme-bg dark:to-[#050816] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] dark:mix-blend-overlay pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.5 }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-bold tracking-widest uppercase mb-6 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></span>
            Live Simulation
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-theme-text mb-6 tracking-tight">
            AI Swarm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Intelligence</span>
          </h2>
          <p className="text-xl text-theme-muted font-medium">
            Watch autonomous AI agents collaborate, reason, retrieve knowledge, execute tools, and generate intelligent solutions in real time.
          </p>
        </motion.div>

        {/* Live Architecture Visualization */}
        <div className="relative w-full h-[700px] bg-theme-card/80/80 backdrop-blur-3xl rounded-[3rem] border border-theme-border shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden hidden md:block">
          
          <TechBadges />
          <ConnectionLines connections={CONNECTIONS} activeStep={activeStep} />
          
          {/* AI Core placed exactly at 50%, 50% */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
            <AICore />
          </div>

          {/* Agents */}
          {AGENTS.map((agent) => (
            <AgentNode 
              key={agent.id}
              {...agent}
              position={{ x: agent.x, y: agent.y }}
              isActive={activeStep === agent.id || hoveredAgentId === agent.id}
              onHover={setHoveredAgentId}
            />
          ))}

          {/* Floating Hover Panel */}
          <AgentHoverPanel agent={displayAgent} />

        </div>

        {/* Mobile Fallback */}
        <div className="md:hidden flex flex-col gap-6">
          <div className="p-6 bg-theme-card border border-theme-border rounded-3xl text-center mb-8">
            <AICore />
          </div>
          {AGENTS.map((agent) => (
            <div key={agent.id} className="p-6 rounded-3xl bg-theme-card border border-theme-border flex gap-4 items-start">
              <div className={`p-4 rounded-2xl bg-theme-bg border border-theme-border ${agent.color}`}>
                {agent.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-theme-text mb-1">{agent.label}</h3>
                <p className="text-sm text-theme-muted">{agent.purpose}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
