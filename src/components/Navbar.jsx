import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Home, Trophy, Mail } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Achievements', path: '/achievements' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? 'bg-[#0B1220]/80 backdrop-blur-xl border-theme-border py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
            : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Pranav</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 bg-white/5 border border-theme-border px-6 py-2.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm font-semibold transition-colors ${
                  isActive(link.path) ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="mailto:pranavkhaire@example.com" 
              className="text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 hover:opacity-80 transition-opacity"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors bg-white/5 rounded-lg border border-theme-border"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(20px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            className="fixed inset-0 z-[100] bg-[#050816]/95 flex flex-col items-center justify-center"
          >
            <button 
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white bg-white/5 rounded-full border border-theme-border transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-3xl font-bold ${
                    isActive(link.path) ? 'text-white' : 'text-gray-500 hover:text-white'
                  } transition-colors`}
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="mailto:pranavkhaire@example.com" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mt-4"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Premium Mobile Bottom Navigation Dock */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-sm">
        <div className="bg-[#1a1f35]/70 backdrop-blur-xl border border-theme-border rounded-full px-6 py-4 flex justify-between items-center shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
          {navLinks.map((link) => {
            let Icon = Code2;
            if (link.name === 'Home') Icon = Home;
            if (link.name === 'Achievements') Icon = Trophy;
            
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex flex-col items-center gap-1 transition-all ${
                  isActive(link.path) 
                    ? 'text-indigo-400 scale-110 drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]' 
                    : 'text-gray-400 hover:text-white hover:scale-105'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-[10px] font-semibold">{link.name}</span>
              </Link>
            )
          })}
          
          <a
            href="mailto:pranavkhaire@example.com"
            className="flex flex-col items-center gap-1 text-gray-400 hover:text-white hover:scale-105 transition-all"
          >
            <Mail className="w-6 h-6" />
            <span className="text-[10px] font-semibold">Contact</span>
          </a>
        </div>
      </div>
    </>
  );
}
