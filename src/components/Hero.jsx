import React from 'react';

export default function Hero() {
  return (
    <>
      <section id="home" className="relative min-h-screen flex flex-col justify-center items-center section-transition pt-24 
         bg-[#0d1125]">

    <div id="particles-bg"></div>

    <div className="flex flex-col md:flex-row items-center container-wide px-6 relative z-10">

      {/*  Left Content  */}
      <div className="flex-1">
        <div className="mb-2 text-cyan-400 font-semibold flex items-center gap-2 font-inter fade-up"
          style={{ animationDelay: '0.1s' }}>
          <span>🤖</span> Welcome to my portfolio
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-2 font-poppins fade-up accent-gradient"
          style={{ animationDelay: '0.2s' }}>
          Pranav<br /> Samadhan<br />
          <span className="accent-gradient font-poppins">Khaire</span>
        </h1>

        <p className="text-xl text-theme-muted mb-2 font-inter fade-up" style={{ animationDelay: '0.3s' }}>
          Aspiring Data Scientist | AI & ML Enthusiast | Full Stack Learner
        </p>

        <p className="text-lg text-theme-muted mb-4 font-inter fade-up" style={{ animationDelay: '0.4s' }}>
          Second-Year Computer Science and Design student at Maharashtra Institute of Technology, Chhatrapati Sambhaji
          Nagar.
        </p>

        {/*  Buttons  */}
        <div className="flex gap-4 fade-up" style={{ animationDelay: '0.5s' }}>
          <a href="#projects" className="px-4 py-4 rounded-lg font-semibold shadow-lg text-[#111b32] bg-cyan-400 
                 hover:shadow-cyan-400/50 hover:scale-105 glow-hover font-inter transition">
            View My Projects
          </a>

          <a href="#certificates" className="px-4 py-4 rounded-lg font-semibold shadow-lg 
                 bg-white text-[#111b32] hover:shadow-purple-400/50 hover:scale-105
                 glow-hover font-inter transition">
            View Certificates
          </a>

          <a href="certificate_pdf/Pranav Resume.pdf" download className="px-4 py-4 rounded-lg font-semibold shadow-lg text-theme-text 
                 bg-gradient-to-r from-cyan-400 to-purple-500 
                 hover:from-cyan-500 hover:to-purple-600 
                 hover:shadow-purple-400/50 hover:scale-105 glow-hover font-inter transition">
            Download My Resume
          </a>
        </div>
      </div>

      {/*  Right (Profile Image)  */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 relative">
        <div className="relative group fade-up" style={{ animationDelay: '0.6s' }}>

          {/*  Animated glowing border circle  */}
          <div className="w-72 h-72 rounded-full flex items-center justify-center 
                 bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500 p-1 animate-pulse
                 shadow-[0_0_40px_#00ffff80]">

            <div className="w-full h-full rounded-full bg-[#0d1125] flex items-center justify-center 
                   shadow-inner-glow transform transition-all duration-700 ease-out animate-fade-up">

              {/*  Profile Image  */}
              <img loading="lazy" src="images/Pranav.webp" alt="Profile" className="w-76 h-76 object-cover rounded-full border-4 border-cyan-400 shadow-xl 
                     transition-transform duration-500 hover:scale-105" />
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
    </>
  );
}
