import React from 'react';

const ORBITS = [
  {
    radius: 'w-[200px] h-[200px] md:w-[350px] md:h-[350px]', // Orbit 1
    duration: 'animate-[spin_25s_linear_infinite]',
    reverseDuration: 'animate-[spin_25s_linear_infinite_reverse]',
    zIndex: 40,
    radiusNum: { sm: 100, md: 175 },
    items: [
      { name: 'Python', color: 'bg-yellow-400' },
      { name: 'React', color: 'bg-cyan-400' },
      { name: 'Next.js', color: 'bg-white' },
      { name: 'FastAPI', color: 'bg-emerald-500' },
      { name: 'Node.js', color: 'bg-green-500' },
      { name: 'Flutter', color: 'bg-blue-400' },
      { name: 'TypeScript', color: 'bg-blue-500' },
      { name: 'JavaScript', color: 'bg-yellow-300' },
    ]
  },
  {
    radius: 'w-[300px] h-[300px] md:w-[500px] md:h-[500px]', // Orbit 2
    duration: 'animate-[spin_35s_linear_infinite_reverse]',
    reverseDuration: 'animate-[spin_35s_linear_infinite]',
    zIndex: 30,
    radiusNum: { sm: 150, md: 250 },
    items: [
      { name: 'TensorFlow', color: 'bg-orange-500' },
      { name: 'PyTorch', color: 'bg-red-500' },
      { name: 'LangGraph', color: 'bg-indigo-400' },
      { name: 'Multi-Agent Systems', color: 'bg-purple-400' },
      { name: 'RAG', color: 'bg-teal-400' },
      { name: 'Prompt Engineering', color: 'bg-pink-400' },
      { name: 'LLM Applications', color: 'bg-rose-400' },
      { name: 'OpenCV', color: 'bg-green-400' },
      { name: 'Scikit-learn', color: 'bg-yellow-500' },
      { name: 'NLP', color: 'bg-indigo-300' },
    ]
  },
  {
    radius: 'w-[400px] h-[400px] md:w-[650px] md:h-[650px]', // Orbit 3
    duration: 'animate-[spin_45s_linear_infinite]',
    reverseDuration: 'animate-[spin_45s_linear_infinite_reverse]',
    zIndex: 20,
    radiusNum: { sm: 200, md: 325 },
    items: [
      { name: 'PostgreSQL', color: 'bg-blue-600' },
      { name: 'MongoDB', color: 'bg-green-600' },
      { name: 'Firebase', color: 'bg-orange-400' },
      { name: 'SQL', color: 'bg-blue-400' },
      { name: 'Vector Databases', color: 'bg-purple-500' },
      { name: 'Pandas', color: 'bg-gray-200' },
      { name: 'NumPy', color: 'bg-blue-300' },
      { name: 'Data Visualization', color: 'bg-pink-300' },
      { name: 'Data Analysis', color: 'bg-amber-400' },
      { name: 'Model Context Protocol', color: 'bg-cyan-500' },
    ]
  },
  {
    radius: 'w-[500px] h-[500px] md:w-[800px] md:h-[800px]', // Orbit 4
    duration: 'animate-[spin_60s_linear_infinite_reverse]',
    reverseDuration: 'animate-[spin_60s_linear_infinite]',
    zIndex: 10,
    radiusNum: { sm: 250, md: 400 },
    items: [
      { name: 'Docker', color: 'bg-blue-500' },
      { name: 'Git & GitHub', color: 'bg-gray-300' },
      { name: 'CI/CD', color: 'bg-emerald-400' },
      { name: 'REST APIs', color: 'bg-cyan-400' },
      { name: 'WebSockets', color: 'bg-rose-500' },
      { name: 'HTML & CSS', color: 'bg-orange-400' },
      { name: 'Tailwind CSS', color: 'bg-sky-400' },
      { name: 'Linux', color: 'bg-yellow-200' },
      { name: 'Autonomous Agents', color: 'bg-fuchsia-400' },
      { name: 'AI Workflows', color: 'bg-violet-400' },
      { name: 'Tool Calling', color: 'bg-emerald-300' },
    ]
  }
];

export default function TechEcosystem() {
  return (
    <div className="mb-32 overflow-hidden py-32 relative w-full flex flex-col items-center">
      <div className="text-center mb-24 relative z-50 px-6 w-full">
        <h3 className="text-3xl font-bold text-theme-text mb-4">Technology Ecosystem</h3>
        <p className="text-theme-muted max-w-xl mx-auto">An expanding galaxy of tools, frameworks, and architectural patterns I use to build scalable intelligent systems.</p>
      </div>

      <div className="relative w-[500px] h-[500px] md:w-[800px] md:h-[800px] flex items-center justify-center flex-shrink-0 scale-[0.75] sm:scale-100">
        
        {/* Center Hub */}
        <div className="absolute w-28 h-28 md:w-40 md:h-40 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center shadow-[0_0_80px_rgba(99,102,241,0.5)] z-50 border border-theme-border backdrop-blur-xl">
          <div className="text-center">
            <span className="block text-theme-text font-extrabold text-xs md:text-lg tracking-tight">My Engineering</span>
            <span className="block text-indigo-200 font-bold text-[10px] md:text-base">Stack</span>
          </div>
        </div>

        {/* Orbit Rings */}
        {ORBITS.map((orbit, orbitIndex) => (
          <div 
            key={orbitIndex}
            className={`absolute ${orbit.radius} border border-theme-border rounded-full ${orbit.duration}`} 
            style={{ zIndex: orbit.zIndex }}
          >
            {orbit.items.map((tech, i) => {
              const angle = (i * (360 / orbit.items.length)) * (Math.PI / 180);
              const radius = window.innerWidth < 768 ? orbit.radiusNum.sm : orbit.radiusNum.md;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <div 
                  key={tech.name}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
                >
                  {/* Counter Spin to keep text upright */}
                  <div className={`${orbit.reverseDuration} flex flex-col items-center`}>
                    <div className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${tech.color} shadow-[0_0_15px_currentColor] mb-1.5`} />
                    <span className="text-theme-muted text-[9px] md:text-xs font-semibold px-2 py-0.5 md:py-1 bg-theme-bg/80/80 rounded-full border border-theme-border backdrop-blur-sm whitespace-nowrap hover:text-theme-text transition-colors hover:border-theme-border cursor-default">
                      {tech.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ))}

      </div>
    </div>
  );
}
