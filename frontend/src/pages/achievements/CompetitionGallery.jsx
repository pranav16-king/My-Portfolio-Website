import React from 'react';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { MapPin, Calendar } from 'lucide-react';

import { competitions, memoryGallery } from '../../data/achievementsData';

const photos = competitions.flatMap(comp => {
  const compPhotos = [];
  if (Array.isArray(comp.images.team)) {
    comp.images.team.forEach(teamImg => {
      compPhotos.push({ src: teamImg, comp: comp.title, loc: 'India', year: comp.date.split(' ').pop() || '2025' });
    });
  } else if (comp.images.team) {
    compPhotos.push({ src: comp.images.team, comp: comp.title, loc: 'India', year: comp.date.split(' ').pop() || '2025' });
  }
  return compPhotos;
});

// Add extra memory gallery images
if (memoryGallery && memoryGallery.length > 0) {
  memoryGallery.forEach(img => {
    photos.push({ src: img, comp: 'Memories', loc: 'India', year: '2026' });
  });
}

// Randomize slightly for masonry effect
const shuffledPhotos = photos.sort(() => Math.random() - 0.5);

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

export default function CompetitionGallery() {
  return (
    <section className="py-24 relative z-10 bg-theme-bg-secondary">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-theme-text mb-4">Moments That Matter</h2>
          <p className="text-theme-muted">Capturing the energy, teamwork, and victories across global stages.</p>
        </motion.div>

        <PhotoProvider
          speed={() => 300}
          maskOpacity={0.9}
          loadingElement={<div className="text-theme-text">Loading...</div>}
        >
          {/* Desktop Masonry Gallery */}
          <div className="hidden md:block">
            <Masonry
              breakpointCols={{ default: 3, 1100: 3, 768: 2 }}
              className="flex w-auto -ml-8"
              columnClassName="pl-8 bg-clip-padding"
            >
              {shuffledPhotos.map((photo, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "50px" }}
                  transition={{ duration: 0.6, delay: (idx % 3) * 0.1, type: "spring", stiffness: 100 }}
                  whileHover={{ y: -10, rotate: idx % 2 === 0 ? 2 : -2 }}
                  className="mb-8 relative group overflow-hidden rounded-[20px] cursor-zoom-in bg-theme-card border-[8px] border-[#131b31] shadow-2xl hover:shadow-[0_20px_50px_rgba(99,102,241,0.3)] transition-all duration-500"
                >
                  <PhotoView src={photo.src}>
                    <div className="relative w-full overflow-hidden flex items-center justify-center">
                      <img 
                        loading="lazy"
                        decoding="async"
                        src={photo.src} 
                        alt={photo.comp}
                        className="w-full h-auto block filter contrast-[1.05] saturate-[1.05] transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                  </PhotoView>
                  
                  {/* Hover Meta Data Overlay */}
                  <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#050816]/90 via-[#050816]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 pointer-events-none">
                    <h4 className="text-theme-text font-bold text-lg mb-2">{photo.comp}</h4>
                    <div className="flex items-center gap-4 text-xs text-theme-muted font-medium">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {photo.loc}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {photo.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </Masonry>
          </div>

          {/* Mobile Horizontal Swipe Gallery */}
          <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 px-6 -mx-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {shuffledPhotos.map((photo, idx) => (
              <motion.div 
                key={`mobile-${idx}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 snap-center w-[85vw] max-w-[320px] relative group overflow-hidden rounded-[20px] cursor-zoom-in bg-theme-card border-4 border-[#131b31] shadow-2xl"
              >
                <PhotoView src={photo.src}>
                  <div className="relative w-full aspect-square overflow-hidden">
                    {/* Blurred background layer */}
                    <img 
                      src={photo.src} 
                      alt="Background Blur"
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover blur-xl opacity-60"
                    />
                    {/* Main Image */}
                    <img 
                      src={photo.src} 
                      alt={photo.comp}
                      loading="lazy"
                      decoding="async"
                      className="relative z-10 w-full h-full object-contain filter contrast-110 saturate-110"
                    />
                  </div>
                </PhotoView>
                
                {/* Always-on Meta Data for Mobile */}
                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#050816]/95 via-[#050816]/70 to-transparent pt-12 pb-4 px-4 pointer-events-none">
                  <h4 className="text-theme-text font-bold text-base mb-1 line-clamp-1">{photo.comp}</h4>
                  <div className="flex items-center gap-3 text-[10px] text-theme-muted font-medium">
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {photo.loc}</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {photo.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </section>
  );
}