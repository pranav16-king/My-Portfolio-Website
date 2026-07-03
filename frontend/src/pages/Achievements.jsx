import React, { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

// Import newly created modular components
import HeroSection from './achievements/HeroSection';
import BentoHighlights from './achievements/BentoHighlights';
import Timeline from './achievements/Timeline';
import TeamAvatars from './achievements/TeamAvatars';
import CompetitionGallery from './achievements/CompetitionGallery';
import CertificateCoverflow from './achievements/CertificateCoverflow';
import LazySection from '../components/LazySection';


export default function Achievements() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-theme-bg min-h-screen text-theme-text selection:bg-indigo-500/30 overflow-hidden font-sans">
      
      {/* Top Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Floating Back Button */}
      <Link 
        to="/"
        className="fixed top-6 left-6 z-50 flex items-center gap-2 px-4 py-2 bg-theme-card hover:bg-theme-card-hover backdrop-blur-md border border-theme-border rounded-full text-sm font-medium transition-colors group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Portfolio
      </Link>

      <main>
        <HeroSection />
        <BentoHighlights />
        <LazySection minHeight="800px">
          <Timeline />
        </LazySection>
        <LazySection minHeight="400px">
          <TeamAvatars />
        </LazySection>
        <LazySection minHeight="600px">
          <CertificateCoverflow />
        </LazySection>
        <LazySection minHeight="800px">
          <CompetitionGallery />
        </LazySection>
      </main>
    </div>
  );
}