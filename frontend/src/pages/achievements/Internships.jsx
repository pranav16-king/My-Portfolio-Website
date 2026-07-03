import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';
import { internships } from '../../data/achievementsData';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

export default function Internships() {
  if (!internships || internships.length === 0) return null;

  return (
    <section className="py-24 relative z-10 bg-theme-bg overflow-hidden" id="internships">
      
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(99,102,241,0.2)]">
            <Briefcase className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wider uppercase">Professional Experience</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-6">
            Internships & Work
          </h2>
          <p className="text-theme-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Real-world experience building scalable applications, applying machine learning models, and driving innovation in industry settings.
          </p>
        </motion.div>

        {/* Internship Cards */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {internships.map((internship, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div 
                key={internship.id || index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col gap-10 lg:gap-16 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full space-y-8">
                  {/* Title & Company */}
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400">
                        <Award className="w-5 h-5" />
                      </span>
                      <span className="text-indigo-400 font-bold uppercase tracking-widest text-sm">
                        {internship.company}
                      </span>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                      {internship.role}
                    </h3>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-theme-muted text-sm font-medium backdrop-blur-md">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      {internship.duration}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-transparent rounded-full" />
                    <p className="text-theme-text/80 pl-6 leading-relaxed text-lg">
                      {internship.description}
                    </p>
                  </div>

                  {/* Skills */}
                  {internship.skills && internship.skills.length > 0 && (
                    <div className="pt-2">
                      <h4 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">Core Competencies</h4>
                      <div className="flex flex-wrap gap-2.5">
                        {internship.skills.map((skill, idx) => (
                          <span 
                            key={idx} 
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-theme-text text-sm font-medium hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:text-indigo-300 transition-all cursor-default"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Certificate Side */}
                {internship.certificates && internship.certificates.length > 0 && (
                  <div className="flex-1 w-full relative group perspective-1000">
                    <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 rounded-[2rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500 blur-xl" />
                    
                    <PhotoProvider speed={() => 300}>
                      <div className="relative bg-theme-card border border-white/10 rounded-[2rem] p-4 lg:p-6 backdrop-blur-xl shadow-2xl overflow-hidden group-hover:-translate-y-2 transition-all duration-500">
                        {internship.certificates.map((cert, i) => (
                          <PhotoView key={i} src={cert}>
                            <motion.div 
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              className="relative rounded-xl overflow-hidden cursor-pointer bg-black/50 aspect-[4/3] flex items-center justify-center border border-white/5"
                            >
                              <img 
                                src={cert} 
                                alt={`${internship.company} Certificate`}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-full object-contain"
                              />
                              {/* Hover Overlay */}
                              <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                                <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-6 py-3 rounded-full text-white font-semibold transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                  <span>View Certificate</span>
                                  <ArrowUpRight className="w-5 h-5" />
                                </div>
                              </div>
                            </motion.div>
                          </PhotoView>
                        ))}
                      </div>
                    </PhotoProvider>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
