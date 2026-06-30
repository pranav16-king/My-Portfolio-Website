import React from 'react';

export default function Overview() {
  return (
    <>
      <section id="overview" className="overview-max" aria-labelledby="overview-title">
    {/*  Background lights  */}
    <div className="ov-bg">
      <div className="ov-glow ov-glow-left"></div>
      <div className="ov-glow ov-glow-right"></div>
    </div>

    <div className="ov-wrap">
      {/*  Header  */}
      <header className="ov-head">
        <h2 id="overview-title"><span className="" style={{ /* color: #071427; */ }}>Professional</span> <span
            className="accent">Overview</span> ✨</h2>
        <p className="ov-sub">A complete snapshot: profile, progress, tools, mentors, and next steps — interactive &
          responsive.</p>
      </header>

      <div className="ov-grid">

        {/*  LEFT: Hero with image, badges, progress  */}
        <main className="ov-left" aria-labelledby="name-title">
          <div className="card hero-card">

            {/*  top row: image + name  */}
            <div className="hero-top">
              <div className="avatar-wrap" aria-hidden="false">
                {/*  Replace src with your image  */}
                <img loading="lazy" className="avatar-img" src="/achivment/member/pranav.webp" alt="Pranav Khaire photo" />
                <div className="avatar-ring" aria-hidden="true"></div>
              </div>

              <div className="hero-info">
                <div id="name-title" className="hero-name">Pranav Samadhan Khaire</div>
                <div className="hero-sub">B.Tech — Computer Science & Design • <span className="badge-small">2nd Year</span>
                </div>

                <div className="hero-meta">
                  <span className="meta-item">🏛️ <strong>MIT</strong></span>
                  <span className="meta-sep">•</span>
                  <span className="meta-item">🎓 Computer Science & Design</span>
                </div>

                <div className="hero-verified">
                  <span className="v-badge">✅ Frontend</span>
                  <span className="v-badge">✅ Python</span>
                </div>
              </div>
            </div>

            {/*  quick intro  */}
            <p className="hero-desc">
              I craft responsive frontends and robust backends. Currently strengthening databases (MongoDB & MySQL) and
              containerized deployments with Docker.
            </p>

            {/*  progress area  */}
            <div className="progress-area">
              <div className="progress-row">
                <div className="label">Data Science 📊</div>
                <div className="bar" data-percent="70">
                  <div className="fill"></div>
                </div>
                <div className="num">70%</div>
              </div>

              <div className="progress-row">
                <div className="label">Machine Learning 🤖</div>
                <div className="bar" data-percent="15">
                  <div className="fill"></div>
                </div>
                <div className="num">15%</div>
              </div>

              <div className="progress-row">
                <div className="label">Databases (MongoDB · MySQL) 🗄️</div>
                <div className="bar" data-percent="35">
                  <div className="fill"></div>
                </div>
                <div className="num">35%</div>
              </div>

              <div className="progress-row">
                <div className="label">Docker & Deployment 🐳</div>
                <div className="bar" data-percent="30">
                  <div className="fill"></div>
                </div>
                <div className="num">30%</div>
              </div>
            </div>

            {/*  CTA  */}
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">View Projects 🚀</a>
              <a href="#contact" className="btn-ghost">Contact ✉️</a>
            </div>

          </div>
        </main>

        {/*  RIGHT: Details, chips, mentor and timeline  */}
        <aside className="ov-right" aria-labelledby="details-title">
          <div className="card details-card">

            <h3 id="details-title" className="details-h">Expertise • Tools • Mentors</h3>
            <p className="details-note">Completed → Learning → Upcoming — click any chip for quick notes.</p>

            {/*  Chips groups  */}
            <div className="chips-row">
              <div className="chip-group">
                <div className="group-title">✅ Completed</div>
                <div className="chips">
                  <button className="chip completed"
                    data-note="Frontend projects: responsive sites with Tailwind + JS">HTML</button>
                  <button className="chip completed" data-note="Styled layouts, grid & Flexbox">CSS</button>
                  <button className="chip completed" data-note="Interactive UI logic">JavaScript</button>
                  <button className="chip completed" data-note="Utility-first styling">Tailwind</button>
                  <button className="chip completed" data-note="Scripting & backend APIs">Python</button>
                  <button className="chip completed" data-note="Micro web apps & APIs">Flask</button>
                  <button className="chip completed" data-note="Core DS tools">NumPy</button>
                  <button className="chip completed" data-note="Dataframes & ETL">Pandas</button>
                  <button className="chip completed" data-note="Plots & charts">Matplotlib</button>
                </div>
              </div>

              <div className="chip-group">
                <div className="group-title">🔄 Learning</div>
                <div className="chips">
                  <button className="chip learning" data-note="Advanced stats & algorithms">SciPy</button>
                  <button className="chip learning" data-note="Statistical plotting">Seaborn</button>
                  <button className="chip learning" data-note="NoSQL DB — documents">MongoDB</button>
                  <button className="chip learning" data-note="Relational DB — SQL">MySQL</button>
                  <button className="chip learning" data-note="Image processing & CV">OpenCV</button>
                  <button className="chip learning" data-note="Container images & deployment">Docker</button>
                </div>
              </div>

              <div className="chip-group">
                <div className="group-title">⏳ Upcoming</div>
                <div className="chips">
                  <button className="chip upcoming" data-note="ML models, pipelines">Scikit-Learn</button>
                  <button className="chip upcoming" data-note="Neural network library">TensorFlow</button>
                  <button className="chip upcoming" data-note="High-level DL API">Keras</button>
                  <button className="chip upcoming" data-note="Research DL library">PyTorch</button>
                  <button className="chip upcoming" data-note="LLM apps & chains">LangChain</button>
                  <button className="chip upcoming" data-note="Agentic AI research">Agentic AI</button>
                  <button className="chip upcoming" data-note="Advanced RDBMS">PostgreSQL</button>
                </div>
              </div>
            </div>

            {/*  Mentor / Instructor
          <div className="mentor">
            <div className="mentor-left">
              <img loading="lazy" className="mentor-pic" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='64' height='64' /><rect width='64' height='64' rx='12' fill='%23c084fc'/></svg>" alt="Instructor">
            </div>
            <div className="mentor-right">
              <div className="mentor-name">Mentor: <strong>Dr. A. Sharma</strong> 👨‍🏫</div>
              <div className="mentor-role">Data Science Instructor • MIT (Adjunct)</div>
              <div className="mentor-note">Weekly code reviews, project feedback & research guidance.</div>
            </div>
          </div>  */}

            {/*  Metrics  */}
            <div className="metrics-row">
              <div className="metric">
                <div className="m-big">9+</div>
                <div className="m-small">Projects</div>
              </div>
              <div className="metric">
                <div className="m-big">7+</div>
                <div className="m-small">Skills</div>
              </div>
              <div className="metric">
                <div className="m-big">30+</div>
                <div className="m-small">Certifications</div>
              </div>
              <div className="metric">
                <div className="m-big">3</div>
                <div className="m-small">In-Progress</div>
              </div>
            </div>

            {/*  mini timeline / roadmap  */}
            <div className="mini-roadmap">
              <svg viewBox="0 0 420 80" className="mini-svg" aria-hidden="true">
                <defs>
                  <linearGradient id="mg1" x1="0" x2="1">
                    <stop offset="0" stop-color="#22d3ee" />
                    <stop offset="1" stop-color="#c084fc" />
                  </linearGradient>
                </defs>
                <path d="M20 60 L100 20 L200 20 L300 60 L380 60" stroke="rgba(10,10,10,0.06)" stroke-width="8"
                  fill="none" stroke-linecap="round" />
                <circle cx="100" cy="20" r="9" fill="#22d3ee" />
                <circle cx="200" cy="20" r="9" fill="#c084fc" />
                <circle cx="300" cy="60" r="9" fill="#9ca3af" />
              </svg>
            </div>

          </div>
        </aside>
      </div>
    </div>

    {/*  Modal for chip notes  */}
    <div id="chip-modal" className="chip-modal" role="dialog" aria-modal="true" aria-hidden="true"
      aria-labelledby="chip-modal-title">
      <div className="chip-modal-card" role="document">
        <button className="chip-close" aria-label="Close modal">✕</button>
        <h4 id="chip-modal-title">Detail</h4>
        <p id="chip-modal-body"></p>
      </div>
    </div>
  </section>
    </>
  );
}
