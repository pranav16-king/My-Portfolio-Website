import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, Award, ExternalLink, Code, Search, ChevronDown, CheckCircle2 } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const filters = ['All', 'Hackathons', 'Competitions', 'Research', 'Awards', 'Innovation'];

import { competitions } from '../../data/achievementsData';

// Enriched table data provided by user
const enrichedData = [
  { keyword: "HackSphere 2025", title: "HackSphere 2025", category: "Hackathon", badge: "Participation", level: "College Level", date: "13–14 October 2025", organizer: "IETE Student Forum", location: "MIT, Chhatrapati Sambhajinagar", theme: "Software Development, Innovation & Problem Solving" },
  { keyword: "Cogni-Sphere 2025", title: "Cogni-Sphere 2025 – Project Competition", category: "Technical Project Competition", badge: "First Rank", level: "College Level", date: "13–14 October 2025", organizer: "IETE Student Forum", location: "MIT, Chhatrapati Sambhajinagar", theme: "Engineering Innovation & Technical Projects" },
  { keyword: "SANKALPANA", title: "SANKALPANA 2025", category: "Technical Project Competition", badge: "Second Prize", level: "District Level", date: "15 November 2025", organizer: "Department of Electrical Engineering", location: "MIT, Chhatrapati Sambhajinagar", theme: "Engineering & Technology Innovation" },
  { keyword: "DIPEX 2026 – Idea Presentation Round", title: "DIPEX 2026 – Idea Presentation Round", category: "Innovation / Idea Presentation", badge: "Selected for Final Round", level: "Regional Selection Round", date: "8 February 2026", organizer: "SRIJAN & DIPEX", location: "Govt Engineering College, Chhatrapati Sambhajinagar", theme: "Agricultural Technology" },
  { keyword: "Lightning Pitch", title: "Lightning Pitch 2026", category: "Startup Pitch Competition", badge: "First Place", level: "Inter-College", date: "28 February 2026", organizer: "E-Cell (Pragyaa)", location: "SGGS Institute of Engineering & Technology, Nanded", theme: "Startup Innovation & Business Pitch" },
  { keyword: "HackFusion", title: "HackFusion 3", category: "National Hackathon", badge: "Participation", level: "National Level", date: "27 February – 1 March 2026", organizer: "SWAG Dev Club & GDG On Campus", location: "SGGS Institute of Engineering & Technology, Nanded", theme: "AI, Software Development & Emerging Technologies" },
  { keyword: "State Level", title: "DIPEX 2026 – State Level Working Model Exhibition & Competition", category: "Working Model Exhibition", badge: "State Level Finalist", level: "State Level", date: "5–8 March 2026", organizer: "SRIJAN Trust & DIPEX", location: "MIT, Chhatrapati Sambhajinagar", theme: "Agricultural Technology" },
  { keyword: "Honeywell", title: "Honeywell Sustainability Innovation Challenge 2026", category: "Sustainability Innovation Challenge", badge: "Runner-Up", level: "Inter-College", date: "28 March 2026", organizer: "IIT Bombay–Honeywell Centre of Excellence", location: "MIT, Chhatrapati Sambhajinagar", theme: "Sustainable Development & Green Technology" },
  { keyword: "ZENTRIX", title: "ZENTRIX'26 – Sharkpreneur", category: "Startup Pitch Competition", badge: "Winner", level: "State Level Technical Convention", date: "28–31 March 2026", organizer: "IEEE Student Branch, IICT", location: "MGM University, Chhatrapati Sambhajinagar", theme: "Entrepreneurship, Innovation & Startup Pitch" },
  { keyword: "IGNITION", title: "IGNITION 2K26 – Inspira Idea Presentation", category: "Idea Presentation Competition", badge: "Participation", level: "College Level", date: "4 April 2026", organizer: "Department of Emerging Science & Technology", location: "MIT, Chhatrapati Sambhajinagar", theme: "Innovation & Emerging Technologies" },
  { keyword: "Build for Bharat", title: "Build for Bharat 2026", category: "National Innovation Hackathon", badge: "Qualified for Round 1", level: "National Level", date: "25 April 2026", organizer: "Dept. of Emerging Science & Technology & ECE", location: "MIT, Chhatrapati Sambhajinagar", theme: "National Innovation & Technology Solutions" }
];

// Map raw competitions data to timeline format
const timelineData = competitions.map((comp, idx) => {
  const images = [];
  if (Array.isArray(comp.images.team)) {
    images.push(...comp.images.team);
  } else if (comp.images.team) {
    images.push(comp.images.team);
  }

  // Fallback to placeholder if no team images found
  if (images.length === 0) images.push('/images/school.png');

  // Find enriched data based on title match
  const enriched = enrichedData.find(e => comp.title.includes(e.keyword)) || enrichedData[0];

  return {
    id: comp.id,
    year: enriched.date.split(' ').pop() || '2025',
    category: enriched.category,
    name: enriched.title,
    badge: enriched.badge,
    date: enriched.date,
    location: enriched.location,
    organizer: enriched.organizer,
    desc: enriched.theme,
    level: enriched.level,
    project: (() => {
      if(enriched.title.includes('DIPEX') || enriched.title.includes('IGNITION')) return 'Zerocarbonix';
      if(enriched.title.includes('Build for Bharat')) return 'HealthSpire';
      if(enriched.title.includes('HackFusion')) return 'SentinelRx AI';
      if(enriched.title.includes('Cogni-Sphere')) return 'Cogni-Sphere Project';
      if(enriched.title.includes('HackSphere')) return 'OverthinkAI';
      if(enriched.title.includes('SANKALPANA')) return 'SANKALPANA Project';
      if(enriched.title.includes('Lightning Pitch')) return 'Lightning Pitch Project';
      if(enriched.title.includes('Honeywell')) return 'Honeywell Project';
      if(enriched.title.includes('ZENTRIX')) return 'Sharkpreneur Project';
      return null;
    })(),
    role: comp.team && comp.team.length > 0 ? (comp.team.find(t => t.includes('Lead') || t.includes('Developer')) || 'Member') : 'Developer',
    tech: comp.techStack && comp.techStack.length > 0 ? comp.techStack : ['React', 'Node.js', 'AI'],
    architecture: comp.architecture || 'Frontend -> Backend -> Cloud Deployment',
    impact: comp.impact || 'Successfully completed the project within the time limit.',
    fullDate: comp.date,
    team: (() => {
      const raw = comp.team || [];
      const cleanedTeam = [];
      const knownMembers = [
        { key: 'pranav', name: 'Pranav Khaire', defaultRole: 'Team Leader', avatar: '/assets/avatars/pranav.webp' },
        { key: 'varad', name: 'Varad Deshpande', defaultRole: 'Member', avatar: '/assets/avatars/male.avif' },
        { key: 'piyush', name: 'Piyush Jaybhaye', defaultRole: 'Member', avatar: '/assets/avatars/male.avif' },
        { key: 'om bute', name: 'Om Bute', defaultRole: 'Member', avatar: '/assets/avatars/male.avif' },
        { key: 'aniket', name: 'Aniket Tambe', defaultRole: 'Member', avatar: '/assets/avatars/male.avif' },
        { key: 'jaya', name: 'Jaya Kharate', defaultRole: 'Member', avatar: '/assets/avatars/female.avif' },
        { key: 'sakshi alane', name: 'Sakshi Alane', defaultRole: 'Member', avatar: '/assets/avatars/female.avif' },
        { key: 'sakshi bamne', name: 'Sakshi Bamne', defaultRole: 'Member', avatar: '/assets/avatars/female.avif' },
        { key: 'mitali', name: 'Mitali Wadkar', defaultRole: 'Member', avatar: '/assets/avatars/female.avif' },
        { key: 'satydeep', name: 'Satydeep Kharat', defaultRole: 'Member', avatar: '/assets/avatars/male.avif' },
        { key: 'parth', name: 'Parth Kulkarni', defaultRole: 'Member', avatar: '/assets/avatars/male.avif' },
        { key: 'shravani', name: 'Shravani Kulkarni', defaultRole: 'Member', avatar: '/assets/avatars/female.avif' }
      ];

      for (let i = 0; i < raw.length; i++) {
        const str = raw[i].toLowerCase();
        
        for (const member of knownMembers) {
          if (str.includes(member.key) && !cleanedTeam.find(m => m.name === member.name)) {
            let role = member.defaultRole;
            if (i + 1 < raw.length) {
              const nextStr = raw[i+1].trim();
              if (nextStr.length < 50 && !nextStr.toLowerCase().includes('responsibilities') && !knownMembers.some(km => nextStr.toLowerCase().includes(km.key))) {
                if (!nextStr.startsWith('✅') && !nextStr.startsWith('👥') && !nextStr.startsWith('#')) {
                  role = nextStr.replace(/^(?:👑|🎨|👨‍💻|👥|👤|👨‍⚕️|🚑|🛡️|👨‍💼|✅|🏆)?\s*/g, '');
                }
              }
            }
            if (member.key === 'satydeep') role = 'Member';
            
            cleanedTeam.push({
              name: member.name,
              role: role,
              avatar: member.avatar
            });
          }
        }
      }

      return cleanedTeam.length > 0 ? cleanedTeam : [{ name: 'Pranav Khaire', role: 'Team Leader', avatar: '/assets/avatars/pranav.webp' }];
    })(),
    images: images
  };
});

export default function Timeline() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState(null);

  const filteredData = useMemo(() => {
    return timelineData.filter(item => {
      const matchesFilter = activeFilter === 'All' || item.category === activeFilter;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            item.desc.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesFilter && matchesSearch;
    }).sort((a, b) => {
      // Exact order requested by user (Oldest to Newest, then we reverse it for Newest first)
      const exactOrder = [
        "HackSphere 2025",
        "Cogni-Sphere 2025",
        "SANKALPANA",
        "DIPEX 2026 – Idea Presentation", // DIPEX Idea
        "Lightning Pitch",
        "HackFusion",
        "State Level", // DIPEX State
        "Honeywell",
        "ZENTRIX",
        "IGNITION",
        "Build for Bharat"
      ];

      const getIndex = (name) => {
        const index = exactOrder.findIndex(keyword => name.includes(keyword));
        return index === -1 ? -1 : index;
      };

      const indexA = getIndex(a.name);
      const indexB = getIndex(b.name);

      // Sort descending (highest index first, meaning newest first)
      return indexB - indexA;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section className="py-24 relative z-10 bg-theme-bg">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-theme-text mb-4">Competition Timeline</h2>
          <p className="text-theme-muted">The road of challenges, innovation, and success.</p>
        </motion.div>

        {/* Search */}
        <div className="flex justify-end mb-16">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-theme-muted" />
            <input 
              type="text" 
              placeholder="Search competitions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-theme-bg-secondary border border-theme-border rounded-full py-2.5 pl-10 pr-4 text-sm text-theme-text placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-12">
          <AnimatePresence>
            {filteredData.map((item, idx) => {
              const isExpanded = expandedId === item.id;

              return (
                <motion.div 
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  className="bg-theme-bg-secondary border border-theme-border rounded-3xl overflow-hidden shadow-theme-shadow"
                >
                  {/* Closed View (Horizontal Row with Zig-Zag) */}
                  <div className={`flex flex-col lg:flex-row p-6 md:p-10 gap-10 items-start cursor-pointer group ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`} onClick={() => setExpandedId(isExpanded ? null : item.id)}>
                    
                    {/* Left/Right: Slideshow Image (Increased Size) */}
                    <div className="w-full lg:w-[550px] xl:w-[600px] aspect-video rounded-xl overflow-hidden relative shadow-theme-shadow ring-1 ring-white/10 shrink-0">
                      <Swiper
                        modules={[Autoplay, EffectFade]}
                        effect="fade"
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        loop={true}
                        allowTouchMove={false}
                        className="w-full h-full"
                      >
                        {item.images.map((img, i) => (
                          <SwiperSlide key={i} className="relative w-full h-full flex items-center justify-center bg-theme-card overflow-hidden">
                            <img loading="lazy" src={img} alt="Background Blur" className="absolute inset-0 w-full h-full object-cover blur-xl opacity-40 group-hover:scale-110 transition-transform duration-1000" />
                            <img loading="lazy" src={img} alt="Competition Moment" className="relative z-10 w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 drop-shadow-theme-shadow" />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    {/* Right: Info & Button */}
                    <div className="flex-1 w-full flex flex-col justify-between h-full min-h-[250px]">
                      <div>
                        <div className="flex items-center flex-wrap gap-3 mb-3">
                          <span className="text-indigo-400 font-bold text-lg">{item.fullDate}</span>
                          <span className="hidden sm:block w-1.5 h-1.5 rounded-full bg-theme-card/20" />
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/20">
                            {item.category}
                          </span>
                          <span className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-[10px] font-bold uppercase tracking-wider border border-indigo-500/20">
                            {item.badge}
                          </span>
                          {item.project && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider border border-blue-500/20">
                              <Code className="w-3 h-3" /> Project: {item.project}
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold text-theme-text mb-2 group-hover:text-indigo-400 transition-colors">{item.name}</h3>
                        <p className="text-theme-muted text-sm mb-6 leading-relaxed line-clamp-3">
                          <span className="text-indigo-300 font-semibold">Theme:</span> {item.desc}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 text-xs text-theme-disabled font-medium mb-8">
                          <div className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-pink-500" /> {item.location}</div>
                          <div className="flex items-center gap-1.5"><Award className="w-3.5 h-3.5 text-yellow-500" /> {item.organizer}</div>
                          <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> Level: {item.level}</div>
                          <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" /> Role: {item.role}</div>
                        </div>
                      </div>

                      <div className="mt-auto">
                        <button className="w-fit flex items-center justify-center gap-2 px-6 py-3 bg-theme-card hover:bg-theme-card-hover border border-theme-border text-theme-text rounded-xl text-sm font-medium transition-colors">
                          View Details <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expanded View */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-t border-theme-border/5 bg-theme-card/20"
                      >
                        <div className="p-6 md:p-8 grid grid-cols-1 gap-10">
                          
                          {/* Details Right */}
                          <div className="space-y-8">
                            <div>
                              <h4 className="text-xs uppercase tracking-widest text-theme-disabled font-bold mb-3">Tech Stack</h4>
                              <div className="flex flex-wrap gap-2">
                                {item.tech.map(t => (
                                  <span key={t} className="px-3 py-1.5 bg-theme-bg border border-theme-border rounded-lg text-xs font-semibold text-theme-muted hover:text-white hover:border-indigo-500/50 transition-colors cursor-default shadow-sm">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            {item.architecture && item.architecture !== 'Frontend -> Backend -> Cloud Deployment' && (
                              <div>
                                <h4 className="text-xs uppercase tracking-widest text-theme-disabled font-bold mb-3">System Architecture</h4>
                                <pre className="text-theme-muted text-xs bg-theme-bg p-4 rounded-xl border border-theme-border font-mono overflow-x-auto whitespace-pre-wrap shadow-inner">
                                  {item.architecture}
                                </pre>
                              </div>
                            )}
                            
                            <div>
                              <h4 className="text-xs uppercase tracking-widest text-theme-disabled font-bold mb-4">Team</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {item.team.map((member, idx) => (
                                  <div key={idx} className="flex items-center gap-3 bg-theme-bg border border-theme-border rounded-xl p-2 pr-4 hover:border-indigo-500/50 transition-colors group shadow-sm">
                                    <img loading="lazy" src={member.avatar} alt={member.name} className="w-10 h-10 rounded-lg object-cover ring-1 ring-white/5 group-hover:ring-indigo-500/50 transition-all" />
                                    <div className="flex flex-col overflow-hidden">
                                      <span className="text-sm font-bold text-theme-text leading-tight mb-0.5 truncate group-hover:text-white transition-colors">{member.name}</span>
                                      <span className="text-[10px] uppercase tracking-wider text-indigo-400 font-bold truncate">{member.role}</span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex gap-4 pt-4">
                              <button className="flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-sm font-medium transition-colors">
                                <ExternalLink className="w-4 h-4" /> Live Demo
                              </button>
                              <button className="flex items-center gap-2 px-5 py-2.5 bg-theme-card hover:bg-theme-card-hover border border-theme-border text-theme-text rounded-lg text-sm font-medium transition-colors">
                                <Code className="w-4 h-4" /> GitHub
                              </button>
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
          
          {filteredData.length === 0 && (
            <div className="text-center py-20 text-theme-disabled">
              No competitions found matching your search criteria.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}