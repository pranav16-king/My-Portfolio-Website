import React from 'react';

export default function About() {
  return (
    <>
      <section id="about" className=" section-transition py-20 relative overflow-hidden">

    {/*  Background lighting  */}
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <div className="absolute w-72 h-72 bg-cyan-400/20 blur-[85px] rounded-full top-5 left-5"></div>
      <div className="absolute w-80 h-80 bg-purple-500/20 blur-[95px] rounded-full bottom-5 right-5"></div>
    </div>

    <div className="container-wide px-4">

      {/*  Section Title  */}
      <h2 className="text-center text-4xl md:text-5xl font-poppins font-bold fade-up text-black"
        style={{ animationDelay: '0.1s' }}>
        About <span className="accent-gradient">Me</span> ✨
      </h2>

      {/*  NEW FLEX GRID WITH SAME HEIGHT CONTAINERS  */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

        {/*  LEFT PANEL  */}
        <div className="card-bg rounded-3xl shadow-lg p-8 section-transition flex flex-col justify-between fade-up"
          style={{ animationDelay: '0.2s' }}>

          <div>
            <h3 className="text-3xl font-poppins font-bold text-black mb-4 leading-snug">
              Hello, I'm Pranav 👋
              <span className="text-cyan-500">Tech Learner & Creator</span>
            </h3>

            <p className="font-inter text-black text-lg leading-relaxed">
              I am pursuing my B.Tech in Computer Science and Design at
              MIT Chhatrapati Sambhaji Nagar. I focus on blending creativity with
              technology to build powerful, useful, and beautiful digital experiences.
            </p>

            <p className="font-inter text-black text-lg leading-relaxed mt-4">
              My journey began with frontend development where I mastered
              HTML, CSS, JavaScript, Tailwind CSS, responsive layouts, and
              modern UI architecture. Later, I expanded into Python and
              backend development using the Flask framework.
            </p>

            <p className="font-inter text-black text-lg leading-relaxed mt-4">
              Currently, I'm exploring Data Science while preparing to take deeper
              steps into AI, Machine Learning, and Deep Learning.
              My long-term aim is to build intelligent, scalable, and
              real-world applications that create real impact.
            </p>
          </div>

          <div className="mt-6">
            <h4 className="text-xl font-poppins font-semibold text-black mb-3">My Upcoming Path :</h4>
            <ul className="text-lg font-inter text-black space-y-2">
              <li>🧠 Artificial Intelligence</li>
              <li>🤖 Machine Learning</li>
              <li>🧬 Deep Learning</li>
              <li>🌐 AI-powered Full Stack Applications</li>
            </ul>
          </div>
        </div>

        {/*  RIGHT PANEL (Timeline)  */}
        <div className="card-bg rounded-3xl shadow-lg p-8 section-transition flex flex-col justify-between fade-up"
          style={{ animationDelay: '0.3s' }}>

          <h3 className="text-2xl font-bold font-poppins text-black mb-6">
            My Learning Timeline 📅
          </h3>

          <div className="space-y-5">

            {/*  Completed  */}
            <div className="rounded-2xl p-5 border-l-4 border-cyan-500 card-bg shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3 text-lg text-black font-inter">
                💻 Frontend Development
              </div>
              <span className="text-cyan-500 font-bold">Completed</span>
            </div>

            <div className="rounded-2xl p-5 border-l-4 border-cyan-500 card-bg shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3 text-lg text-black font-inter">
                🐍 Python Programming
              </div>
              <span className="text-cyan-500 font-bold">Completed</span>
            </div>

            <div className="rounded-2xl p-5 border-l-4 border-cyan-500 card-bg shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3 text-lg text-black font-inter">
                ⚡ Flask Development
              </div>
              <span className="text-cyan-500 font-bold">Completed</span>
            </div>

            <div className="rounded-2xl p-5 border-l-4 border-cyan-500 card-bg shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3 text-lg text-black font-inter">
                🎨 Figma & UI Design
              </div>
              <span className="text-cyan-500 font-bold">Completed</span>
            </div>

            {/*  In Progress  */}
            <div
              className="rounded-2xl p-5 border-l-4 border-purple-500 card-bg shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3 text-lg text-black font-inter">
                📊 Data Science
              </div>
              <span className="text-purple-500 font-bold">In Progress</span>
            </div>

            {/*  Upcoming  */}
            <div className="rounded-2xl p-5 border-l-4 border-gray-500 card-bg shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3 text-lg text-black font-inter">
                🧠 Machine Learning
              </div>
              <span className="text-theme-muted font-bold">Upcoming</span>
            </div>

            <div className="rounded-2xl p-5 border-l-4 border-gray-500 card-bg shadow-md flex items-center justify-between">
              <div className="flex items-center gap-3 text-lg text-black font-inter">
                🧬 Deep Learning
              </div>
              <span className="text-theme-muted font-bold">Upcoming</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
    </>
  );
}
