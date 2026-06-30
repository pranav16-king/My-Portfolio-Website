import React from 'react';

const projects = [
  {
    id: "blueCarbon",
    title: "Blue Carbon MRV System",
    emoji: "🌊",
    desc: "Advanced Carbon Monitoring Flask App",
    thumbnail: "/video/Blue_carbon_mrv.mp4",
    type: "video",
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "AI"],
    github: "https://github.com/pranav16-king/Blue-Carbon-MRV."
  },
  {
    id: "lunabot",
    title: "Lunabot",
    emoji: "🚀",
    desc: "Space Robotics & Terrain AI",
    thumbnail: "/video/lunabot.mp4",
    type: "video",
    tech: ["Python", "Robotics", "Sensors"],
    github: "https://github.com/pranav16-king/practice"
  },
  {
    id: "school",
    title: "School Counseling System",
    emoji: "🎓",
    desc: "Education Performance Platform",
    thumbnail: "/images/school.png",
    type: "image",
    tech: ["Python", "Flask", "MongoDB"],
    github: "https://github.com/pranav16-king/school-counseling-app"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#e9f0ff] py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-16 font-poppins tracking-wide">
          My
          <span className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 bg-clip-text text-transparent ml-3">
            Projects
          </span>
        </h2>

        <div id="projectContainer" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 overflow-y-auto" style={{ maxHeight: '750px' }}>
          {projects.map((p) => (
            <div key={p.id} className="bg-white shadow-xl rounded-3xl p-7 hover:shadow-2xl hover:-translate-y-1 transition-all duration-400">
              <div className="text-2xl font-bold flex items-center gap-2 mb-3">
                <span>{p.emoji}</span> {p.title}
              </div>

              <p className="text-gray-700 mb-3 text-lg">{p.desc}</p>

              {p.type === "video" ? (
                <video src={p.thumbnail} controls className="w-full h-52 rounded-2xl shadow object-cover"></video>
              ) : (
                <img loading="lazy" src={p.thumbnail} className="w-full h-52 rounded-2xl shadow object-cover" alt={p.title} />
              )}

              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 bg-teal-200 text-[#111b32] rounded-lg font-semibold text-sm">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 mt-5">
                <a href={p.github} target="_blank" rel="noreferrer" className="btn-github w-full text-center p-2 rounded text-theme-text bg-gray-800">GitHub</a>
                <button className="btn-details w-full bg-blue-500 text-theme-text rounded p-2">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
