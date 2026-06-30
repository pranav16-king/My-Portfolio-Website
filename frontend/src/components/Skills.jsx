import React from 'react';

export default function Skills() {
  return (
    <>
      <section id="skills" className="relative py-20 overflow-hidden white-bg section-transition">

    {/*  Soft Gradient Background Lights  */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute w-72 h-72 bg-cyan-400/20 blur-[90px] rounded-full top-10 left-5"></div>
      <div className="absolute w-80 h-80 bg-purple-500/20 blur-[100px] rounded-full bottom-10 right-5"></div>
    </div>

    <div className="container-wide px-4">

      {/*  Heading  */}
      <h2 className="text-center text-4xl md:text-5xl font-poppins font-bold fade-up" style={{ animationDelay: '0.1s' }}>
        My <span className="accent-gradient">Skills 🚀</span>
      </h2>

      <p className="text-center text-gray-600 text-lg mt-3 mb-12 fade-up" style={{ animationDelay: '0.2s' }}>
        A polished list of my technical strengths, tools & creative abilities ✨
      </p>

      {/*  GRID  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 fade-up" style={{ animationDelay: '0.3s' }}>

        {/*  CARD TEMPLATE  */}
        {/*  FRONTEND  */}
        <div
          className="card-bg rounded-3xl shadow-lg p-6 hover:glow-hover hover:-translate-y-2 transition-all duration-300 section-transition">
          <h3 className="text-xl font-bold font-poppins mb-3 flex items-center gap-2">
            💻 Frontend Development
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Crafting modern, smooth & responsive user interfaces for all devices.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-cyan-400 text-[#111b32] font-semibold rounded-full text-sm">HTML 🌐</span>
            <span className="px-3 py-1 bg-cyan-400 text-[#111b32] font-semibold rounded-full text-sm">CSS 🎨</span>
            <span className="px-3 py-1 bg-cyan-400 text-[#111b32] font-semibold rounded-full text-sm">JavaScript ⚡</span>
            <span className="px-3 py-1 bg-cyan-400 text-[#111b32] font-semibold rounded-full text-sm">Tailwind 🌈</span>
            <span className="px-3 py-1 bg-cyan-400 text-[#111b32] font-semibold rounded-full text-sm">UI Components
              🧩</span>
            <span className="px-3 py-1 bg-cyan-400 text-[#111b32] font-semibold rounded-full text-sm">Responsive 📱</span>
          </div>
        </div>

        {/*  BACKEND  */}
        <div
          className="card-bg rounded-3xl shadow-lg p-6 hover:glow-hover hover:-translate-y-2 transition-all duration-300 section-transition">
          <h3 className="text-xl font-bold font-poppins mb-3 flex items-center gap-2">
            ⚙️ Backend & System Development
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Building powerful, scalable & secure backend systems.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-400 text-[#111b32] font-semibold rounded-full text-sm">Python 🐍</span>
            <span className="px-3 py-1 bg-purple-400 text-[#111b32] font-semibold rounded-full text-sm">Flask 🔥</span>
            <span className="px-3 py-1 bg-purple-400 text-[#111b32] font-semibold rounded-full text-sm">API Design 🔗</span>
            <span className="px-3 py-1 bg-purple-400 text-[#111b32] font-semibold rounded-full text-sm">Auth 🔐</span>
          </div>
        </div>

        {/*  DATA SCIENCE  */}
        <div
          className="card-bg rounded-3xl shadow-lg p-6 hover:glow-hover hover:-translate-y-2 transition-all duration-300 section-transition">
          <h3 className="text-xl font-bold font-poppins mb-3 flex items-center gap-2">
            📊 Data Science & Analysis
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Working with datasets to create insights & data-driven decisions.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-cyan-400 text-[#111b32] font-semibold rounded-full text-sm">NumPy 🔢</span>
            <span className="px-3 py-1 bg-cyan-400 text-[#111b32] font-semibold rounded-full text-sm">Pandas 🐼</span>
            <span className="px-3 py-1 bg-cyan-400 text-[#111b32] font-semibold rounded-full text-sm">Matplotlib 📈</span>
            <span className="px-3 py-1 bg-cyan-400 text-[#111b32] font-semibold rounded-full text-sm">Data Cleaning
              🧼</span>
          </div>
        </div>

        {/*  AI ML  */}
        <div
          className="card-bg rounded-3xl shadow-lg p-6 hover:glow-hover hover:-translate-y-2 transition-all duration-300 section-transition">
          <h3 className="text-xl font-bold font-poppins mb-3 flex items-center gap-2">
            🤖 AI & Machine Learning
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Building & experimenting with smart, learning-based models.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-400 text-[#111b32] font-semibold rounded-full text-sm">ML Models 🤖</span>
            <span className="px-3 py-1 bg-purple-400 text-[#111b32] font-semibold rounded-full text-sm">Deep Learning
              🧬</span>
            <span className="px-3 py-1 bg-purple-400 text-[#111b32] font-semibold rounded-full text-sm">Neural Nets
              🧠</span>
            <span className="px-3 py-1 bg-purple-400 text-[#111b32] font-semibold rounded-full text-sm">AI Algorithms
              💡</span>
          </div>
        </div>

        {/*  DESIGN  */}
        <div
          className="card-bg rounded-3xl shadow-lg p-6 hover:glow-hover hover:-translate-y-2 transition-all duration-300 section-transition">
          <h3 className="text-xl font-bold font-poppins mb-3 flex items-center gap-2">
            🎨 UI/UX & Visual Design
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Creating intuitive, clean & beautiful user-centered designs.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-cyan-400 text-[#111b32] font-semibold rounded-full text-sm">UI/UX 🎨</span>
            <span className="px-3 py-1 bg-cyan-400 text-[#111b32] font-semibold rounded-full text-sm">Wireframes ✏️</span>
            <span className="px-3 py-1 bg-cyan-400 text-[#111b32] font-semibold rounded-full text-sm">Prototypes 🧪</span>
            <span className="px-3 py-1 bg-cyan-400 text-[#111b32] font-semibold rounded-full text-sm">Visual Design
              👁️</span>
          </div>
        </div>

        {/*  GIT & DEVOPS  */}
        <div
          className="card-bg rounded-3xl shadow-lg p-6 hover:glow-hover hover:-translate-y-2 transition-all duration-300 section-transition">
          <h3 className="text-xl font-bold font-poppins mb-3 flex items-center gap-2">
            🔗 Git, GitHub & Project Deployment
          </h3>

          <p className="text-gray-600 text-sm mb-4">
            Managing code versions & deploying apps efficiently.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-400 text-[#111b32] font-semibold rounded-full text-sm">Git 🧲</span>
            <span className="px-3 py-1 bg-purple-400 text-[#111b32] font-semibold rounded-full text-sm">GitHub 🐙</span>
            <span className="px-3 py-1 bg-purple-400 text-[#111b32] font-semibold rounded-full text-sm">Cloud ☁️</span>
            <span className="px-3 py-1 bg-purple-400 text-[#111b32] font-semibold rounded-full text-sm">Deployment 🚀</span>
          </div>
        </div>

      </div>
    </div>
  </section>
    </>
  );
}
