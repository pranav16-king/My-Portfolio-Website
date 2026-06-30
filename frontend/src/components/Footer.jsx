import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Code, Briefcase, MessageCircle, Mail, Camera } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-theme-bg pt-20 pb-10 border-t border-theme-border">
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand / About Section */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all">
                <Code2 className="w-6 h-6 text-theme-text" />
              </div>
              <span className="text-2xl font-bold text-theme-text tracking-tight">Pranav</span>
            </Link>
            <p className="text-theme-muted leading-relaxed max-w-sm">
              AI Engineer & Full Stack Developer dedicated to architecting scalable, intelligent, and award-winning digital experiences. Let’s build something amazing together!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-theme-text mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link to="/" className="text-theme-muted hover:text-indigo-400 transition-colors font-medium">Home</Link>
              </li>
              <li>
                <Link to="/achievements" className="text-theme-muted hover:text-indigo-400 transition-colors font-medium">Achievements</Link>
              </li>
              <li>
                <a href="mailto:pranavkhaire53@example.com" className="text-theme-muted hover:text-indigo-400 transition-colors font-medium">Contact</a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-bold text-theme-text mb-6">Connect with Me</h3>
            <div className="flex gap-4 flex-wrap">
              <a href="https://github.com/pranav16-king" target="_blank" rel="noopener noreferrer" className="p-3 bg-theme-card rounded-xl border border-theme-border hover:border-indigo-500/50 hover:bg-indigo-500/10 text-theme-muted hover:text-indigo-400 transition-all hover:-translate-y-1">
                <Code className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/pranav-khaire-732793338/" target="_blank" rel="noopener noreferrer" className="p-3 bg-theme-card rounded-xl border border-theme-border hover:border-blue-500/50 hover:bg-blue-500/10 text-theme-muted hover:text-blue-400 transition-all hover:-translate-y-1">
                <Briefcase className="w-5 h-5" />
              </a>
              <a href="mailto:pranavkhaire53@example.com" className="p-3 bg-theme-card rounded-xl border border-theme-border hover:border-rose-500/50 hover:bg-rose-500/10 text-theme-muted hover:text-rose-400 transition-all hover:-translate-y-1">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://twitter.com/PranavKhaire16" target="_blank" rel="noopener noreferrer" className="p-3 bg-theme-card rounded-xl border border-theme-border hover:border-sky-500/50 hover:bg-sky-500/10 text-theme-muted hover:text-sky-400 transition-all hover:-translate-y-1">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/pranav_khaire___/" target="_blank" rel="noopener noreferrer" className="p-3 bg-theme-card rounded-xl border border-theme-border hover:border-pink-500/50 hover:bg-pink-500/10 text-theme-muted hover:text-pink-400 transition-all hover:-translate-y-1">
                <Camera className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-theme-border flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-theme-muted text-sm">
            &copy; {new Date().getFullYear()} <span className="text-theme-muted font-semibold">Pranav Samadhan Khaire</span>. All rights reserved.
          </p>
          <p className="text-theme-muted text-sm">
            Built with React, Tailwind CSS & Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
