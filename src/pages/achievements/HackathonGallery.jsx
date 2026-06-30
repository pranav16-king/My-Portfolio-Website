import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolioData.json';

export default function HackathonGallery() {
  const { competitions } = portfolioData;

  return (
    <section className="py-12 bg-theme-bg">
      <div className="container mx-auto px-6 lg:px-12">
        <h2 className="text-3xl font-bold mb-12 text-center text-theme-text">Competitions & Hackathons</h2>
        
        <div className="flex flex-col gap-16">
          {competitions.map((comp, index) => (
            <motion.div 
              key={comp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-8 rounded-3xl bg-theme-card border border-theme-border shadow-xl"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-theme-text mb-4">{comp.title}</h3>
              {comp.description && (
                <p className="text-theme-muted mb-8 max-w-4xl">{comp.description}</p>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Team Images */}
                {comp.teamImages.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-indigo-400 mb-4">Team Photos</h4>
                    <div className="grid grid-cols-2 gap-4">
                      {comp.teamImages.map((img, i) => (
                        <div key={i} className="rounded-xl overflow-hidden border border-theme-border aspect-video">
                          <img loading="lazy" src={img} alt="Team" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Competition Certificates */}
                {comp.certificates.length > 0 && (
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-widest text-amber-400 mb-4">Event Certificates</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {comp.certificates.map((cert, i) => (
                        <div key={i} className="rounded-xl overflow-hidden border border-theme-border aspect-[4/3]">
                          <img loading="lazy" src={cert} alt="Certificate" className="w-full h-full object-cover hover:scale-105 transition-transform" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}