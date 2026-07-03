import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { internships } from '../../data/achievementsData';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function Internships() {
  if (!internships || internships.length === 0) return null;

  return (
    <section className="py-24 relative z-10 bg-theme-bg" id="internships">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-4">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wider uppercase">Professional Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-theme-text mb-4">Internships & Work</h2>
          <p className="text-theme-muted max-w-2xl mx-auto">Real-world experience building scalable applications and driving innovation in industry settings.</p>
        </motion.div>

        {/* Internship Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <motion.div 
              key={internship.id || index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-theme-card border border-theme-border rounded-[2rem] p-8 lg:p-10 hover:shadow-2xl hover:border-indigo-500/30 transition-all duration-300 group"
            >
              <div className="flex flex-col h-full">
                {/* Header: Role & Company */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-theme-text mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all">
                    {internship.role}
                  </h3>
                  <div className="flex items-center flex-wrap gap-4 text-theme-muted">
                    <div className="flex items-center gap-1.5 font-medium text-indigo-400">
                      <Briefcase className="w-4 h-4" />
                      {internship.company}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm">
                      <Calendar className="w-4 h-4" />
                      {internship.duration}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-theme-text/80 mb-8 leading-relaxed flex-grow">
                  {internship.description}
                </p>

                {/* Certificates / Proof */}
                {internship.certificates && internship.certificates.length > 0 && (
                  <div className="mt-auto">
                    <h4 className="text-sm font-semibold text-theme-muted uppercase tracking-wider mb-4">Certificates & Proof of Work</h4>
                    <PhotoProvider speed={() => 300}>
                      <div className="flex flex-wrap gap-4">
                        {internship.certificates.map((cert, i) => (
                          <PhotoView key={i} src={cert}>
                            <motion.div 
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="relative h-24 w-32 rounded-xl overflow-hidden cursor-pointer border border-theme-border group/img"
                            >
                              <img 
                                src={cert} 
                                alt={`${internship.company} Certificate ${i+1}`}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                                <ChevronRight className="w-6 h-6 text-white" />
                              </div>
                            </motion.div>
                          </PhotoView>
                        ))}
                      </div>
                    </PhotoProvider>
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
