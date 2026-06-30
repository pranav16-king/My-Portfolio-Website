import React from 'react';
import EngineeringValues from './EngineeringValues';
import EngineeringProcess from './EngineeringProcess';
import TechEcosystem from './TechEcosystem';

export default function EngineeringDNA() {
 return (
 <section className="py-24 bg-theme-bg relative overflow-hidden">
 {/* Global Background Elements */}
 <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:mix-blend-overlay pointer-events-none" />
 <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

 <div className="container mx-auto px-6 lg:px-12 relative z-10">
 
 {/* Modular Components */}
 <EngineeringValues />
 <EngineeringProcess />
 <TechEcosystem />
 
 </div>
 </section>
 );
}
