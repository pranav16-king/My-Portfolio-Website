import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingSpinner from '../components/LoadingSpinner';

// Initial render components (above fold)
import HeroSection from './home/HeroSection';
import EngineeringDNA from './home/engineering-dna/EngineeringDNA';
import EngineeringTimeline from './home/EngineeringTimeline';
import ProjectShowcase from './home/ProjectShowcase';
import AIAgenticSystems from './home/AIAgenticSystems';
import HackathonPreview from './home/HackathonPreview';
import CertificateCoverflow from './achievements/CertificateCoverflow';

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
      
      {/* 5. Featured Projects */}
        <ProjectShowcase />
        
        {/* 8. Hackathons & Achievements */}
        <HackathonPreview />
        
        {/* 10. Certificates */}
        <section className="bg-theme-bg">
          <CertificateCoverflow />
        </section>
      
      <Footer />
    </div>
  );
}
