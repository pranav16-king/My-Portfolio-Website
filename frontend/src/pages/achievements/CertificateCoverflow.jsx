import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Download, ExternalLink, X, Maximize2, ShieldCheck, Hash, Calendar, Tag } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { competitions, extraCertificates } from '../../data/achievementsData';

// Aggregate all certificates
const certificates = [
 ...competitions
 .filter(c => c.images.certificate)
 .map((c, i) => ({
 id: `comp-${i}`,
 title: c.title || 'Competition Certificate',
 issuer: c.event || 'Hackathon / Event',
 date: c.date || '2025',
 credentialId: `CERT-${i}`,
 image: c.images.certificate,
 category: 'Competition',
 link: '#'
 })),
 ...extraCertificates.map((cert, i) => ({
 id: `extra-${i}`,
 title: cert.title || 'Professional Certificate',
 issuer: 'Verified Issuer',
 date: '2025',
 credentialId: `EXTRA-${i}`,
 image: cert.image,
 category: 'Certification',
 link: '#'
 }))
];

export default function CertificateCoverflow() {
 const [selectedCert, setSelectedCert] = useState(null);

 // Lock body scroll when modal is open
 useEffect(() => {
 if (selectedCert) {
 document.body.style.overflow = 'hidden';
 } else {
 document.body.style.overflow = 'unset';
 }
 return () => {
 document.body.style.overflow = 'unset';
 };
 }, [selectedCert]);

 return (
 <section className={`py-24 relative overflow-hidden bg-theme-bg-secondary ${selectedCert ? 'z-50' : 'z-10'}`}>
 <div className="container mx-auto px-6">
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="mb-16 text-center"
 >
 <h2 className="text-4xl md:text-5xl font-bold text-theme-text mb-4">Certificates & Recognition</h2>
 <p className="text-theme-muted max-w-2xl mx-auto">Verified credentials from global institutions.</p>
 </motion.div>

 <div className="max-w-[1400px] mx-auto certificate-swiper">
 <Swiper
 effect={'coverflow'}
 grabCursor={true}
 centeredSlides={true}
 slidesPerView={'auto'}
 loop={true}
 autoplay={{
 delay: 3500,
 disableOnInteraction: false,
 pauseOnMouseEnter: true
 }}
 breakpoints={{
 320: {
 coverflowEffect: {
 rotate: 0,
 stretch: -20,
 depth: 200,
 modifier: 2,
 slideShadows: true,
 }
 },
 768: {
 coverflowEffect: {
 rotate: 0,
 stretch: 0,
 depth: 300,
 modifier: 2.5,
 slideShadows: true,
 }
 }
 }}
 modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
 className="w-full py-10"
 >
 {certificates.map((cert) => (
 <SwiperSlide key={cert.id} className="!w-[260px] sm:!w-[340px] md:!w-[620px] relative group transition-all duration-300">
 {({ isActive }) => (
 <div className={`relative rounded-xl md:rounded-[32px] overflow-hidden shadow-theme-shadow transition-all duration-500 ${isActive ? 'ring-2 ring-indigo-500 ring-offset-4 ring-offset-[#0B1220] scale-100 filter-none' : 'scale-90 blur-[2px] opacity-60'}`}>
 <div className="aspect-[4/3] w-full bg-theme-bg">
 <img loading="lazy" 
 src={cert.image} 
 alt={cert.title}
 className="w-full h-full object-cover"
 />
 </div>
 
 {/* Hover Action */}
 {isActive && (
 <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 md:p-8">
 <button 
 onClick={() => setSelectedCert(cert)}
 className="flex items-center justify-center gap-1.5 md:gap-2 w-full py-2.5 md:py-4 bg-indigo-500 hover:bg-indigo-600 rounded-lg md:rounded-xl text-theme-text text-xs md:text-base font-bold transition-colors shadow-[0_0_20px_rgba(99,102,241,0.5)]"
 >
 <Maximize2 className="w-3.5 h-3.5 md:w-5 md:h-5" /> 
 <span className="hidden sm:inline">View Fullscreen & Meta</span>
 <span className="sm:hidden">View Details</span>
 </button>
 </div>
 )}
 </div>
 )}
 </SwiperSlide>
 ))}
 </Swiper>
 </div>

 {/* Premium Lightbox */}
 <AnimatePresence>
 {selectedCert && (
 <motion.div 
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 exit={{ opacity: 0 }}
 className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-theme-bg/95 backdrop-blur-2xl overflow-y-auto"
 onClick={() => setSelectedCert(null)}
 >
 <button 
 className="absolute top-6 right-6 p-2 bg-theme-card hover:bg-theme-card-hover border border-theme-border rounded-full text-theme-text transition-colors z-[110]"
 onClick={() => setSelectedCert(null)}
 >
 <X className="w-6 h-6" />
 </button>

 <motion.div 
 initial={{ scale: 0.95, y: 20 }}
 animate={{ scale: 1, y: 0 }}
 exit={{ scale: 0.95, y: 20 }}
 onClick={(e) => e.stopPropagation()}
 className="bg-theme-bg-secondary rounded-[32px] overflow-hidden border border-theme-border flex flex-col lg:flex-row max-w-7xl w-full shadow-[0_0_100px_rgba(0,0,0,0.8)] my-auto"
 >
 {/* Image Section */}
 <div className="flex-1 bg-theme-card/50 p-6 md:p-10 flex items-center justify-center relative">
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent opacity-50" />
 <img loading="lazy" 
 src={selectedCert.image} 
 alt={selectedCert.title} 
 className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-theme-shadow relative z-10 ring-1 ring-white/10"
 />
 </div>
 
 {/* Meta Section */}
 <div className="w-full lg:w-[400px] p-8 md:p-10 bg-gradient-to-b from-[#0B1220] to-[#050816] flex flex-col justify-between border-l border-theme-border/5">
 <div>
 <h3 className="text-3xl font-bold text-theme-text mb-8">{selectedCert.title}</h3>
 
 <div className="space-y-6">
 <div className="flex items-start gap-4">
 <div className="p-2.5 bg-indigo-500/10 rounded-lg text-indigo-400 mt-1"><ShieldCheck className="w-5 h-5"/></div>
 <div>
 <p className="text-xs text-theme-disabled font-bold uppercase tracking-wider mb-1">Issued By</p>
 <p className="text-theme-text font-medium">{selectedCert.issuer}</p>
 </div>
 </div>
 
 <div className="flex items-start gap-4">
 <div className="p-2.5 bg-purple-500/10 rounded-lg text-purple-400 mt-1"><Hash className="w-5 h-5"/></div>
 <div>
 <p className="text-xs text-theme-disabled font-bold uppercase tracking-wider mb-1">Credential ID</p>
 <p className="text-theme-muted font-mono text-sm">{selectedCert.credentialId}</p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="p-2.5 bg-blue-500/10 rounded-lg text-blue-400 mt-1"><Calendar className="w-5 h-5"/></div>
 <div>
 <p className="text-xs text-theme-disabled font-bold uppercase tracking-wider mb-1">Issue Date</p>
 <p className="text-theme-muted font-medium">{selectedCert.date}</p>
 </div>
 </div>

 <div className="flex items-start gap-4">
 <div className="p-2.5 bg-emerald-500/10 rounded-lg text-emerald-400 mt-1"><Tag className="w-5 h-5"/></div>
 <div>
 <p className="text-xs text-theme-disabled font-bold uppercase tracking-wider mb-1">Category</p>
 <p className="text-theme-muted font-medium">{selectedCert.category}</p>
 </div>
 </div>
 </div>
 </div>
 
 <div className="flex flex-col gap-3 mt-10">
 <a href={selectedCert.image} download className="flex items-center justify-center gap-2 w-full py-3.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl font-medium transition-colors shadow-[0_0_15px_rgba(99,102,241,0.4)]">
 <Download className="w-4 h-4" /> Download PDF
 </a>
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