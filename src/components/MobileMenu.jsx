import React from 'react';
import { Link } from 'react-router-dom';

export default function MobileMenu() {
  return (
    <>
      <div id="mobile-menu" className="fixed top-0 left-0 w-full h-full bg-[#111b32]/90 flex flex-col items-center justify-center 
         z-50 hidden">

    {/*  Close Button (Black Emoji)  */}
    <button id="close-mobile-menu" className="absolute top-6 right-6 text-3xl p-2 text-black"
      aria-label="Close mobile menu">
      ❌
    </button>

    {/*  Mobile Menu Links  */}
    <ul className="flex flex-col gap-6 text-2xl font-semibold text-theme-text font-inter mt-10 text-center">

      <li><a href="#home" onClick="closeMobileMenu()">🏠 Home</a></li>
      <li><a href="#about" onClick="closeMobileMenu()">👤 About</a></li>
      <li><a href="#skills" onClick="closeMobileMenu()">🧠 Skills</a></li>
      <li><a href="#projects" onClick="closeMobileMenu()">💼 Projects</a></li>
      <li><a href="#certificates" onClick="closeMobileMenu()">🎓 Certificates</a></li>
      <li><Link to="/achievements" className="hover:text-cyan-500 transition">🏅 Achievements</Link></li>
      <li><a href="#contact" onClick="closeMobileMenu()">📬 Contact</a></li>

    </ul>
  </div>

  {/*  Hero Section (Dark Version)  */}
  
    </>
  );
}
