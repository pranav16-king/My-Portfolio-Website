import React from 'react';

export default function Contact() {
  return (
    <>
      <section id="contact" className="white-bg section-transition section-pad" style={{ minHeight: '500px' }}>
    <div className="container-wide px-2 text-center">
      <h2 className="text-4xl font-bold mb-8 font-poppins fade-up" style={{ animationDelay: '0.1s' }}>
        Get <span className="accent-gradient">In Touch</span>
      </h2>

      <div className="flex flex-col md:flex-row section-gap justify-center items-center fade-up"
        style={{ /* animation-delay:0.2s; min-height:400px; */ }}>

        {/*  Contact Form  */}
        <form id="contactForm"
          className="flex flex-col gap-4 items-center w-full max-w-md card-bg p-8 rounded-2xl shadow-lg section-transition font-inter">
          <input type="text" name="name" placeholder="Your Name" required
            className="px-4 py-2 w-full rounded-lg border-2 border-cyan-400 bg-white text-[#111b32] focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input type="email" name="email" placeholder="Your Email" required
            className="px-4 py-2 w-full rounded-lg border-2 border-cyan-400 bg-white text-[#111b32] focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <input type="text" name="phone" placeholder="Your Phone (optional)"
            className="px-4 py-2 w-full rounded-lg border-2 border-cyan-400 bg-white text-[#111b32] focus:outline-none focus:ring-2 focus:ring-cyan-400" />
          <select name="service" required
            className="px-4 py-2 w-full rounded-lg border-2 border-cyan-400 bg-white text-[#111b32] focus:outline-none focus:ring-2 focus:ring-cyan-400">
            <option value="">Select Service</option>
            <option value="AI">AI</option>
            <option value="Data Science">Data Science</option>
            <option value="ML">ML</option>
            <option value="Full Stack">Full Stack</option>
          </select>
          <textarea name="details" placeholder="Your Message" required
            className="px-4 py-2 w-full rounded-lg border-2 border-cyan-400 bg-white text-[#111b32] focus:outline-none focus:ring-2 focus:ring-cyan-400"></textarea>
          <button type="submit"
            className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-[#111b32] font-bold rounded-lg shadow-lg hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-500 transition font-inter">
            Send Message
          </button>
          <div id="formMsg" className="text-cyan-400 font-bold hidden text-center mt-2">Thank you! Message sent.</div>
        </form>

        {/*  Contact Info  */}
        <div className="flex flex-col gap-6 items-center w-full mt-8 md:mt-0">
          <div>
            <a href="mailto:pranavkhaire53@example.com"
              className="flex items-center gap-2 text-lg hover:text-cyan-400 transition font-inter">📧
              pranavkhaire@example.com</a>
            <a href="https://github.com/pranav16-king" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-cyan-400 transition font-inter">🔗 /pranav-khaire</a>
            <a href="https://www.linkedin.com/in/pranav-khaire-732793338/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg hover:text-purple-400 transition font-inter">💼 /pranavkhaire</a>
          </div>

          <div className="social-container">
            <a href="https://github.com/pranav16-king" target="_blank" className="social-icon github">
              <img loading="lazy" src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/github.svg" alt="GitHub" />
            </a>

            <a href="https://www.linkedin.com/in/pranav-khaire-732793338/" target="_blank" className="social-icon linkedin">
              <img loading="lazy" src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/linkedin.svg" alt="LinkedIn" />
            </a>

            <a href="mailto:pranavkhaire53@example.com" className="social-icon gmail">
              <img loading="lazy" src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/gmail.svg" alt="Email" />
            </a>

            <a href="https://twitter.com/PranavKhaire16" target="_blank" className="social-icon twitter">
              <img loading="lazy" src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/twitter.svg" alt="Twitter" />
            </a>

            <a href="https://www.instagram.com/pranav_khaire___/" target="_blank" className="social-icon instagram">
              <img loading="lazy" src="https://cdn.jsdelivr.net/npm/simple-icons@v8/icons/instagram.svg" alt="Instagram" />
            </a>
          </div>


          <div className="mt-4 text-sm text-theme-muted">
            I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.<br />
            <span className="font-semibold">Currently seeking internship opportunities in Data Science, AI, ML, and Full
              Stack.</span>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
