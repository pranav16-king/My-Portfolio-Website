import React from 'react';

export default function Roadmap() {
  return (
    <>
      <section id="roadmap" className="white-bg section-transition py-24 relative overflow-hidden"
    aria-label="Learning roadmap">

    {/*  Decorative gradient lights  */}
    <div className="bg-lights" aria-hidden="true">
      <div className="light light-left"></div>
      <div className="light light-right"></div>
    </div>

    <div className="container-wide px-4">
      <h2 className="title">Ultimate <span className="accent-gradient">Skill Roadmap</span> 🚀</h2>
      <p className="subtitle">Flow: Data Science → Machine Learning → AI → Deep Learning — completed, in-progress & upcoming
        modules/libraries.</p>

      {/*  FLOW: desktop: row; mobile: stacked  */}
      <div className="flow-wrap" role="list">

        {/*  DATA SCIENCE Stage  */}
        <article className="flow-stage" id="stage-ds" role="listitem" aria-labelledby="ds-title">
          <div className="stage-card">
            <div className="stage-header">
              <div className="stage-icon">📊</div>
              <div>
                <h3 id="ds-title" className="stage-title">Data Science</h3>
                <div className="status-row">
                  <span className="status-pill green">Completed (basics)</span>
                  <span className="status-pill purple small">In Progress (advanced)</span>
                </div>
              </div>
            </div>

            <div className="progress-row">
              <div className="progress-label">Overall</div>
              <div className="progress-bar" data-percent="70" aria-hidden="true">
                <div className="progress-fill" style={{ /* width:0% */ }}></div>
              </div>
              <div className="progress-text">70%</div>
            </div>

            <div className="group">
              <div className="group-title">Completed libraries</div>
              <div className="tags">
                <span className="tag cyan">Python</span>
                <span className="tag cyan">HTML</span>
                <span className="tag cyan">CSS</span>
                <span className="tag cyan">NumPy</span>
                <span className="tag cyan">Pandas</span>
                <span className="tag cyan">Matplotlib</span>
                <span className="tag cyan">Jupyter</span>
              </div>
            </div>

            <div className="group">
              <div className="group-title">In progress (advanced)</div>
              <div className="tags">
                <span className="tag purple">EDA</span>
                <span className="tag purple">Data Preprocessing</span>
                <span className="tag purple">Feature Engineering</span>
                <span className="tag purple">SciPy</span>
                <span className="tag purple">Seaborn</span>
              </div>
            </div>

            {/*  ribbon showing Python completed (prominent)  */}
            <div className="ribbon ribbon-right">Python ✓</div>
          </div>
        </article>

        {/*  connector 1 (SVG)  */}
        <div className="connector" aria-hidden="true">
          <svg viewBox="0 0 160 60" preserveAspectRatio="none" className="connector-svg">
            <path d="M10 50 C60 10, 100 10, 150 50" fill="none" stroke="url(#g1)" stroke-width="3"
              stroke-linecap="round" />
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0%" stop-color="#22d3ee" />
                <stop offset="100%" stop-color="#c084fc" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/*  MACHINE LEARNING Stage  */}
        <article className="flow-stage" id="stage-ml" aria-labelledby="ml-title">
          <div className="stage-card">
            <div className="stage-header">
              <div className="stage-icon">🧠</div>
              <div>
                <h3 id="ml-title" className="stage-title">Machine Learning</h3>
                <div className="status-row"><span className="status-pill purple">Next Stage</span></div>
              </div>
            </div>

            <div className="progress-row">
              <div className="progress-label">Overall</div>
              <div className="progress-bar" data-percent="15">
                <div className="progress-fill" style={{ /* width:0% */ }}></div>
              </div>
              <div className="progress-text">15%</div>
            </div>

            <div className="group">
              <div className="group-title">Target libraries</div>
              <div className="tags">
                <span className="tag purple">Scikit-Learn</span>
                <span className="tag purple">Keras</span>
                <span className="tag purple">Tenserflow</span>
                <span className="tag purple">SciPy</span>
              </div>
            </div>

            <div className="group">
              <div className="group-title">Core topics</div>
              <div className="tags">
                <span className="tag purple">Regression</span>
                <span className="tag purple">Classification</span>
                <span className="tag purple">Model Training</span>
                <span className="tag purple">Evaluation</span>
              </div>
            </div>
          </div>
        </article>

        {/*  connector 2  */}
        <div className="connector" aria-hidden="true">
          <svg viewBox="0 0 160 60" preserveAspectRatio="none" className="connector-svg">
            <path d="M10 50 C60 10, 100 10, 150 50" fill="none" stroke="url(#g2)" stroke-width="3"
              stroke-linecap="round" />
            <defs>
              <linearGradient id="g2" x1="0" x2="1">
                <stop offset="0%" stop-color="#22d3ee" />
                <stop offset="100%" stop-color="#c084fc" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/*  ARTIFICIAL INTELLIGENCE Stage  */}
        <article className="flow-stage" id="stage-ai" aria-labelledby="ai-title">
          <div className="stage-card">
            <div className="stage-header">
              <div className="stage-icon">🤖</div>
              <div>
                <h3 id="ai-title" className="stage-title">Artificial Intelligence</h3>
                <div className="status-row"><span className="status-pill gray">Future Stage</span></div>
              </div>
            </div>

            <div className="progress-row">
              <div className="progress-label">Overall</div>
              <div className="progress-bar" data-percent="5">
                <div className="progress-fill" style={{ /* width:0% */ }}></div>
              </div>
              <div className="progress-text">5%</div>
            </div>

            <div className="group">
              <div className="group-title">Key concepts</div>
              <div className="tags">
                <span className="tag purple">AI Algorithms</span>
                <span className="tag purple">Search Techniques</span>
                <span className="tag purple">Optimization</span>
              </div>
            </div>

            <div className="group">
              <div className="group-title">Agentic AI & tools</div>
              <div className="tags">
                <span className="tag purple">Agentic AI</span>
                <span className="tag purple">LangChain</span>
                <span className="tag purple">HuggingFace</span>
              </div>
            </div>
          </div>
        </article>

        {/*  connector 3  */}
        <div className="connector" aria-hidden="true">
          <svg viewBox="0 0 160 60" preserveAspectRatio="none" className="connector-svg">
            <path d="M10 50 C60 10, 100 10, 150 50" fill="none" stroke="url(#g3)" stroke-width="3"
              stroke-linecap="round" />
            <defs>
              <linearGradient id="g3" x1="0" x2="1">
                <stop offset="0%" stop-color="#22d3ee" />
                <stop offset="100%" stop-color="#c084fc" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/*  DEEP LEARNING Stage  */}
        <article className="flow-stage" id="stage-dl" aria-labelledby="dl-title">
          <div className="stage-card">
            <div className="stage-header">
              <div className="stage-icon">🧬</div>
              <div>
                <h3 id="dl-title" className="stage-title">Deep Learning</h3>
                <div className="status-row"><span className="status-pill gray">Final Stage</span></div>
              </div>
            </div>

            <div className="progress-row">
              <div className="progress-label">Overall</div>
              <div className="progress-bar" data-percent="0">
                <div className="progress-fill" style={{ /* width:0% */ }}></div>
              </div>
              <div className="progress-text">0%</div>
            </div>

            <div className="group">
              <div className="group-title">Libraries</div>
              <div className="tags">
                <span className="tag purple">TensorFlow</span>
                <span className="tag purple">Keras</span>
                <span className="tag purple">PyTorch</span>
              </div>
            </div>

            <div className="group">
              <div className="group-title">Core topics</div>
              <div className="tags">
                <span className="tag purple">Neural Networks</span>
                <span className="tag purple">CNN</span>
                <span className="tag purple">RNN</span>
                <span className="tag purple">Backpropagation</span>
              </div>
            </div>
          </div>
        </article>
      </div>

      {/*  Compact summary + "Last Me" highlighted card  */}
      <div className="summary-grid">

        {/*  ========================= Compact Lists — Upgraded Design =========================  */}
        <div className="compact-lists-new">

          {/*  Completed  */}
          <div className="list-card">
            <div className="list-header">
              <div className="dot dot-green"></div>
              <h4 className="list-title">Completed</h4>
            </div>

            <ul className="list-body">
              <li><span className="tag">Frontend</span> HTML · CSS · JavaScript · Tailwind</li>
              <li><span className="tag">Backend</span> Python · Flask</li>
              <li><span className="tag">DS Basics</span> NumPy · Pandas · Matplotlib · Jupyter</li>
              <li><span className="tag">Python Modules</span> os · random · datetime</li>
            </ul>
          </div>

          {/*  In Progress  */}
          <div className="list-card">
            <div className="list-header">
              <div className="dot dot-purple"></div>
              <h4 className="list-title">In Progress</h4>
            </div>

            <ul className="list-body">
              <li><span className="tag">Advanced DS</span> SciPy · Seaborn · EDA · Feature Engineering</li>
              <li><span className="tag">Databases</span> MongoDB · MySQL</li>
              <li><span className="tag">Computer Vision</span> OpenCV</li>
            </ul>
          </div>

          {/*  Upcoming  */}
          <div className="list-card">
            <div className="list-header">
              <div className="dot dot-gray"></div>
              <h4 className="list-title">Upcoming</h4>
            </div>

            <ul className="list-body">
              <li><span className="tag">Core AI Path</span> Machine Learning · AI · Agentic AI · Deep Learning</li>
              <li><span className="tag">AI Libraries</span> Scikit-Learn · TensorFlow · Keras · PyTorch · LangChain</li>
              <li><span className="tag">Extra Skills</span> DOM Handling · Async/Await · Fetch API · Logging · Argparse ·
                glob · PostgreSQL</li>
            </ul>
          </div>

        </div>



        <aside className="last-me" aria-labelledby="lastme-title">
          <div className="last-me-card">

            <div className="last-me-badge" style={{ /* 
      background: linear-gradient(90deg, #22d3ee, #c084fc);
      color: #fff;
      font-weight: 900;
     */ }}>
              Current Learning
            </div>

            <h3 id="lastme-title" className="last-me-title" style={{ /* color:#071427; font-weight:900; */ }}>
              Technologies for database and Deployment
            </h3>

            <p className="last-me-text" style={{ /* color:#071427; font-weight:700; line-height:1.6; */ }}>
              I am currently learning
              <strong style={{ /* color:#22d3ee; */ }}>MongoDB</strong> and
              <strong style={{ /* color:#22d3ee; */ }}>MySQL</strong>
              to build and manage modern database systems. <br /><br />

              Along with databases, I am also learning
              <strong style={{ /* color:#c084fc; */ }}>Docker</strong> — including creating
              <strong style={{ /* color:#c084fc; */ }}>Docker images</strong>, running
              <strong style={{ /* color:#c084fc; */ }}>containers</strong>, and using them for
              <strong style={{ /* color:#c084fc; */ }}>deployment</strong>.
            </p>

          </div>
        </aside>


        <aside className="last-me" aria-labelledby="lastme-title">
          <div className="last-me-card">
            <div className="last-me-badge">Latest — Me</div>
            <h3 id="lastme-title" className="last-me-title">About Me — Short & Recent</h3>

            <p className="last-me-text">
              I’m <strong>Pranav</strong>, currently pursuing B.Tech in Computer Science & Design at <strong>MIT
                Chhatrapati Sambhaji Nagar</strong>.
              I build responsive frontends and practical backends using Flask. I completed frontend and Python stacks,
              and I’m deepening my expertise in Data Science while progressing toward Machine Learning, AI and Deep
              Learning.
            </p>

            <div className="last-me-stats">
              <div className="stat">
                <div className="stat-val">12+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat">
                <div className="stat-val">8</div>
                <div className="stat-label">Libraries</div>
              </div>
              <div className="stat">
                <div className="stat-val">3</div>
                <div className="stat-label">In-progress</div>
              </div>
            </div>

            <div className="last-me-cta">
              <a href="#projects" className="btn">View Projects</a>
              <a href="#contact" className="btn btn-outline">Contact</a>
            </div>
          </div>
        </aside>
      </div>
    </div>

    {/*  accessibility note  */}
    <div className="sr-only" aria-hidden="false">Roadmap summary: Frontend & Python completed; Data Science in progress;
      Machine Learning, AI, Deep Learning upcoming.</div>
  </section>
    </>
  );
}
