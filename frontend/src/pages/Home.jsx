import React, { useEffect, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';

// Initial render components (above fold)
import HeroSection from './home/HeroSection';
import EngineeringDNA from './home/engineering-dna/EngineeringDNA';
import EngineeringTimeline from './home/EngineeringTimeline';

// Lazy-loaded components (below fold)
const ProjectShowcase = React.lazy(() => import('./home/ProjectShowcase'));
const AIAgenticSystems = React.lazy(() => import('./home/AIAgenticSystems'));
const HackathonPreview = React.lazy(() => import('./home/HackathonPreview'));
const CertificateCoverflow = React.lazy(() => import('./achievements/CertificateCoverflow'));


export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-theme-bg min-h-screen text-theme-text font-sans">
      <Navbar />
      
      {/* 1. Hero */}
      <HeroSection />
      
      {/* 2. Engineering DNA (Replaces About) */}
      <EngineeringDNA />
      
      {/* 3. Engineering Journey */}
      <EngineeringTimeline />
      
      <Suspense fallback={<div className="py-20 flex justify-center"><LoadingSpinner /></div>}>
        {/* 5. Featured Projects */}
        <ProjectShowcase />
        
        {/* 8. Hackathons & Achievements */}
        <HackathonPreview />
        
        {/* 10. Certificates */}
        <section className="bg-theme-bg">
          <CertificateCoverflow />
        </section>
      </Suspense>
      
      <Footer />
    </div>
  );
}
