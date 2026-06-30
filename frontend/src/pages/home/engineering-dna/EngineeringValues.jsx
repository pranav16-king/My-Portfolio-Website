import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const VALUES = [
  {
    title: 'Curiosity',
    description: 'Always exploring new technologies and pushing the boundaries of what is possible.',
    color: 'from-blue-500 to-cyan-400'
  },
  {
    title: 'Innovation',
    description: 'Turning complex, abstract ideas into scalable, production-ready solutions.',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: 'Leadership',
    description: 'Leading cross-functional teams in high-pressure hackathons and collaborative projects.',
    color: 'from-emerald-400 to-teal-500'
  },
  {
    title: 'Ownership',
    description: 'Taking full responsibility for architecture, from initial concept to deployment.',
    color: 'from-orange-400 to-rose-400'
  },
  {
    title: 'Continuous Learning',
    description: 'Learning every day through active research, prototyping, and building.',
    color: 'from-indigo-400 to-blue-600'
  },
  {
    title: 'Impact',
    description: 'Creating software that solves real problems and delivers measurable value.',
    color: 'from-amber-400 to-orange-500'
  }
];

export default function EngineeringValues() {
  return (
    <div className="mb-32">
      <div className="text-center mb-16 px-6">
        <h3 className="text-3xl font-bold text-theme-text mb-4">Engineering Values</h3>
        <p className="text-theme-muted">The core principles that guide my day-to-day decisions.</p>
      </div>

      {/* Desktop Grid Layout */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {VALUES.map((value, idx) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="group relative p-8 rounded-3xl bg-theme-card border border-theme-border overflow-hidden cursor-default shadow-lg"
          >
            {/* Magnetic Glow Effect */}
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.color} rounded-full blur-[60px] opacity-10 group-hover:opacity-40 transition-opacity duration-500`} />
            
            <h4 className="text-2xl font-bold text-theme-text mb-4 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-gray-400 transition-all">
              {value.title}
            </h4>
            <p className="text-theme-muted leading-relaxed relative z-10 group-hover:text-theme-muted transition-colors">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Mobile Stacked Deck Layout */}
      <div className="md:hidden flex justify-center px-4">
        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
          className="w-[280px] h-[340px]"
          cardsEffect={{
            slideShadows: false,
          }}
          onClick={(swiper) => {
            if (swiper.isEnd) {
              swiper.slideTo(0);
            } else {
              swiper.slideNext();
            }
          }}
        >
          {VALUES.map((value, idx) => (
            <SwiperSlide key={`mobile-${value.title}`} className="rounded-[32px]">
              <div className="w-full h-full p-8 rounded-[32px] bg-[#0A101C] border border-theme-border overflow-hidden shadow-2xl relative flex flex-col justify-center items-center text-center">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${value.color} rounded-full blur-[50px] opacity-20`} />
                
                <h4 className="text-2xl font-extrabold text-theme-text mb-4 relative z-10 tracking-tight">
                  {value.title}
                </h4>
                <p className="text-theme-muted font-medium leading-relaxed relative z-10 text-sm">
                  {value.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
