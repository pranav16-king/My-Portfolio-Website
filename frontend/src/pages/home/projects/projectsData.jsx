import React from 'react';
import { HeartPulse, Stethoscope, Activity, FileText, Search, Brain, Zap, Shield, Bot, Database, Workflow, ShieldCheck, Network, Camera, Layers, Terminal } from 'lucide-react';

export const ADVANCED_PROJECTS = [
  {
    id: "healthspire",
    title: "HealthSpire",
    subtitle: "AI-Powered Emergency Healthcare Response Platform",
    tagline: "Autonomous emergency routing and real-time medical intelligence.",
    gradient: "from-blue-600 to-cyan-500",
    glowColor: "rgba(6, 182, 212, 0.5)",
    icon: <HeartPulse className="w-8 h-8 text-cyan-400" />,
    metrics: [
      { label: "Active AI Agents", value: "40", suffix: "+" },
      { label: "Prediction Accuracy", value: "95", suffix: "%" },
      { label: "Avg Response", value: "350", suffix: "ms" },
      { label: "Integrated APIs", value: "12", suffix: "+" }
    ],
    capabilities: [
      { title: "Multi-Agent System", icon: <Bot />, desc: "Coordinating ambulance dispatch, hospital beds, and drones simultaneously." },
      { title: "Long-Term Memory", icon: <Brain />, desc: "Maintains patient history context across distributed emergency nodes." },
      { title: "Real-Time Processing", icon: <Zap />, desc: "Sub-second streaming analytics for live patient vitals." },
      { title: "Predictive Triage", icon: <Activity />, desc: "Machine Learning models prioritize patients based on severity scores." }
    ],
    architecture: {
      nodes: [
        { id: 'user', label: 'Patient SOS', type: 'input' },
        { id: 'router', label: 'AI Router', type: 'agent' },
        { id: 'dispatch', label: 'Dispatch Agent', type: 'agent' },
        { id: 'medical', label: 'Medical Agent', type: 'agent' },
        { id: 'drone', label: 'Drone Control', type: 'agent' },
        { id: 'db', label: 'Vector DB', type: 'database' },
        { id: 'output', label: 'Emergency Response', type: 'output' }
      ],
      connections: [
        ['user', 'router'],
        ['router', 'dispatch'],
        ['router', 'medical'],
        ['dispatch', 'drone'],
        ['medical', 'db'],
        ['dispatch', 'output'],
        ['drone', 'output'],
        ['medical', 'output']
      ]
    },
    images: [
      "/assets/projects/healthspire-1.png",
      "/assets/projects/healthspire-2.png",
      "/assets/projects/healthspire-3.png"
    ],
    techStack: [
      { name: "React", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "TensorFlow", category: "AI/ML" },
      { name: "LangChain", category: "AI/ML" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Redis", category: "Cache" }
    ],
    badges: ["Production Ready", "Microservices", "GPU Optimized", "HIPAA Compliant"]
  },
  {
    id: "sentinelrx",
    title: "SentinelRx AI",
    subtitle: "Unified Healthcare & Pharmacy Intelligence",
    tagline: "End-to-end medical supply chain automation and AI diagnostics.",
    gradient: "from-purple-600 to-indigo-500",
    glowColor: "rgba(129, 140, 248, 0.5)",
    icon: <Stethoscope className="w-8 h-8 text-indigo-400" />,
    metrics: [
      { label: "Automation Flows", value: "150", suffix: "+" },
      { label: "Processed Records", value: "1", suffix: "M+" },
      { label: "Availability", value: "99.9", suffix: "%" },
      { label: "Saved Time", value: "40", suffix: "%" }
    ],
    capabilities: [
      { title: "RAG Search", icon: <Search />, desc: "Semantic retrieval across millions of medical documents and prescriptions." },
      { title: "Workflow Automation", icon: <Workflow />, desc: "Automated NGO supply routing and smart inventory refills." },
      { title: "Tool Calling", icon: <Terminal />, desc: "LLMs natively execute database queries and external API actions." },
      { title: "Vector Database", icon: <Database />, desc: "High-dimensional embeddings for rapid symptom-to-disease matching." }
    ],
    architecture: {
      nodes: [
        { id: 'doctor', label: 'Doctor/Patient', type: 'input' },
        { id: 'gateway', label: 'API Gateway', type: 'agent' },
        { id: 'llm', label: 'LLM Engine', type: 'agent' },
        { id: 'rag', label: 'RAG Pipeline', type: 'database' },
        { id: 'inventory', label: 'Inventory Agent', type: 'agent' },
        { id: 'ngo', label: 'NGO Routing', type: 'agent' },
        { id: 'delivery', label: 'Fulfillment', type: 'output' }
      ],
      connections: [
        ['doctor', 'gateway'],
        ['gateway', 'llm'],
        ['llm', 'rag'],
        ['llm', 'inventory'],
        ['inventory', 'ngo'],
        ['ngo', 'delivery'],
        ['inventory', 'delivery']
      ]
    },
    images: [
      "/assets/projects/sentinelrx-1.png",
      "/assets/projects/sentinelrx-2.png"
    ],
    techStack: [
      { name: "Next.js", category: "Frontend" },
      { name: "FastAPI", category: "Backend" },
      { name: "PyTorch", category: "AI/ML" },
      { name: "Pinecone", category: "Database" },
      { name: "Docker", category: "DevOps" },
      { name: "AWS", category: "Cloud" }
    ],
    badges: ["Cloud Native", "CI/CD", "Vector Search", "Real-Time WebSockets"]
  }
];
