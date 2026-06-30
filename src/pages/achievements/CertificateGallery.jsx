import React from 'react';
import { motion } from 'framer-motion';
import portfolioData from '../../data/portfolioData.json';

export default function CertificateGallery() {
  const { mainCertificates } = portfolioData;

  if (!mainCertificates || mainCertificates.length === 0) return null;

  return (
    <section className="py-24 bg-theme-bg">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-theme-text mb-4">Professional Certifications</h2>
          <p className="text-theme-muted">A showcase of ongoing learning and industry-recognized certifications.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mainCertificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative rounded-2xl overflow-hidden border border-theme-border bg-theme-card shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img loading="lazy" 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-theme-text font-bold text-sm truncate">{cert.title.replace(/_|-|page-0001/gi, ' ')}</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}