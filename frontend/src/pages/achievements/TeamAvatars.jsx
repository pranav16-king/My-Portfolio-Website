import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Briefcase, Globe, X, FolderGit2, Trophy, Award } from 'lucide-react';

import { teamMembers } from '../../data/teamData';

// Reorder array: Pranav first, others randomized
const reorderedTeam = (() => {
  const pranav = teamMembers.find(m => m.name.toLowerCase().includes('pranav'));
  
  const others = teamMembers.filter(m => 
    !m.name.toLowerCase().includes('pranav') && 
    !m.name.toLowerCase().includes('satydeep')
  );
  
  // Simple random shuffle for the rest
  for (let i = others.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [others[i], others[j]] = [others[j], others[i]];
  }
  
  return [pranav, ...others].filter(Boolean); // Filter out any undefined just in case
})();

export default function TeamAvatars() {
  const [selectedMember, setSelectedMember] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMember]);

  // Helper to determine which avatar to use
  const getAvatar = (name) => {
    const n = name.toLowerCase();
    if (n.includes('pranav')) return '/assets/avatars/pranav.webp';
    if (['sakshi', 'jaya', 'mitali', 'shravani'].some(fem => n.includes(fem))) return '/assets/avatars/female.avif';
    return '/assets/avatars/male.avif';
  };

  return (
    <section className={`py-24 relative bg-theme-bg ${selectedMember ? 'z-50' : 'z-10'}`}>
      <div className="container mx-auto px-6 text-center max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-theme-text mb-4">Meet The Team</h2>
          <p className="text-theme-muted">The brilliant minds behind these award-winning projects.</p>
        </motion.div>

        <div className="flex overflow-x-auto snap-x snap-mandatory md:flex-wrap justify-start md:justify-center gap-6 md:gap-14 lg:gap-16 pb-8 px-6 -mx-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {reorderedTeam.map((member, idx) => (
            <motion.div 
              key={member.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -12, scale: 1.02 }}
              onClick={() => setSelectedMember(member)}
              className="flex-shrink-0 snap-center flex flex-col items-center cursor-pointer group w-36 md:w-48 relative"
            >
              {/* Avatar Container */}
              <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-[32px] md:rounded-full p-[2px] bg-gradient-to-br from-white/10 to-white/5 group-hover:from-indigo-500 group-hover:via-purple-500 group-hover:to-pink-500 mb-4 md:mb-6 transition-all duration-500 shadow-theme-shadow group-hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]">
                <div className="w-full h-full bg-theme-bg rounded-[30px] md:rounded-full overflow-hidden p-1 relative z-10">
                  <img loading="lazy" 
                    src={getAvatar(member.name)} 
                    alt={member.name} 
                    className="w-full h-full object-cover rounded-[28px] md:rounded-full filter grayscale-[0.8] contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500"
                  />
                  {/* Inner glow on hover */}
                  <div className="absolute inset-0 rounded-[28px] md:rounded-full bg-indigo-500/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-500" />
                </div>
              </div>

              {/* Details Wrapper */}
              <div className="bg-theme-card backdrop-blur-md border border-theme-border rounded-2xl w-full md:w-[115%] p-3 md:p-4 text-center group-hover:bg-theme-card-hover transition-all duration-500 group-hover:border-indigo-500/30">
                <h3 className="text-[15px] md:text-xl font-bold text-theme-text mb-1 group-hover:text-indigo-400 transition-colors tracking-tight line-clamp-1">{member.name}</h3>
                <p className="text-[10px] md:text-xs text-indigo-200/80 font-medium uppercase tracking-wider line-clamp-2 leading-tight">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-theme-card/80 backdrop-blur-md overflow-y-auto"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-theme-bg-secondary border border-theme-border rounded-[32px] p-6 md:p-10 max-w-4xl w-full relative shadow-theme-shadow my-auto mt-16 md:mt-auto"
              >
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-theme-card hover:bg-theme-card-hover rounded-full text-theme-text transition-colors"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
                
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 mb-6 md:mb-10 text-center md:text-left">
                  <img loading="lazy" 
                    src={getAvatar(selectedMember.name)} 
                    alt={selectedMember.name} 
                    className="w-24 h-24 md:w-40 md:h-40 rounded-full object-cover ring-4 ring-indigo-500/30 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                  />
                  <div>
                    <h3 className="text-2xl md:text-4xl font-bold text-theme-text mb-1 md:mb-2">{selectedMember.name}</h3>
                    <p className="text-indigo-400 font-medium text-sm md:text-lg mb-3 md:mb-4">{selectedMember.role}</p>
                    <p className="text-theme-muted text-sm md:text-base leading-relaxed max-w-xl">{selectedMember.about}</p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-4 mt-4 md:mt-6">
                      <a href={selectedMember.links.github} className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-theme-card rounded-full hover:bg-theme-card-hover transition text-theme-muted hover:text-theme-text text-xs md:text-sm font-medium border border-theme-border">
                        <Code className="w-3.5 h-3.5 md:w-4 md:h-4" /> GitHub
                      </a>
                      <a href={selectedMember.links.linkedin} className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-theme-card rounded-full hover:bg-theme-card-hover transition text-theme-muted hover:text-theme-text text-xs md:text-sm font-medium border border-theme-border">
                        <Briefcase className="w-3.5 h-3.5 md:w-4 md:h-4" /> LinkedIn
                      </a>
                      <a href={selectedMember.links.portfolio} className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-theme-card rounded-full hover:bg-theme-card-hover transition text-theme-muted hover:text-theme-text text-xs md:text-sm font-medium border border-theme-border">
                        <Globe className="w-3.5 h-3.5 md:w-4 md:h-4" /> Portfolio
                      </a>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-theme-disabled font-bold mb-3">Responsibilities</h4>
                      <p className="text-theme-muted text-sm leading-relaxed">{selectedMember.responsibilities}</p>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-theme-disabled font-bold mb-3">Core Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.skills.map(skill => (
                          <span key={skill} className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-lg">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 bg-theme-card/20 p-6 rounded-2xl border border-theme-border/5">
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-indigo-500 font-bold mb-3 flex items-center gap-2"><FolderGit2 className="w-4 h-4"/> Projects Together</h4>
                      <ul className="space-y-2">
                        {selectedMember.projectsTogether.map(p => <li key={p} className="text-sm text-theme-muted">• {p}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-indigo-500 font-bold mb-3 flex items-center gap-2"><Trophy className="w-4 h-4"/> Competitions Together</h4>
                      <ul className="space-y-2">
                        {selectedMember.competitionsTogether.map(c => <li key={c} className="text-sm text-theme-muted">• {c}</li>)}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-widest text-indigo-500 font-bold mb-3 flex items-center gap-2"><Award className="w-4 h-4"/> Shared Achievements</h4>
                      <ul className="space-y-2">
                        {selectedMember.achievements.map(a => <li key={a} className="text-sm text-theme-muted">• {a}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}