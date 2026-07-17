<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="TJ Blechman builds thoughtful software, product systems, and hardware prototypes." />
  <meta name="theme-color" content="#0b0c0b" />
  <meta property="og:title" content="TJ Blechman — Engineering Ideas Into Reality" />
  <meta property="og:description" content="Selected work by TJ Blechman: software, product systems, and hardware prototypes." />
  <meta property="og:type" content="website" />
  <title>TJ Blechman — Engineering Ideas Into Reality</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="icon" href="favicon.svg" type="image/svg+xml" />
  <link rel="manifest" href="site.webmanifest" />
  <link rel="stylesheet" href="styles.css" />
  <script src="script.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#main">Skip to content</a>
  <div class="scroll-progress" aria-hidden="true"><span></span></div>

  <header class="site-header" id="top">
    <a class="brand" href="#top" aria-label="TJ Blechman, home">
      <span class="brand-mark" aria-hidden="true">TJ</span>
      <span class="brand-name">TJ BLECHMAN</span>
    </a>

    <nav class="desktop-nav" aria-label="Primary navigation">
      <a href="#work">Work</a>
      <a href="#workbench">Workbench</a>
      <a href="#about">About</a>
      <a href="resume.html">Résumé</a>
      <a href="#contact">Contact</a>
    </nav>

    <a class="header-cta" href="mailto:tjblech@gmail.com">Get in touch</a>

    <button class="menu-button" type="button" aria-label="Open navigation" aria-expanded="false" aria-controls="mobile-menu">
      <span></span><span></span>
    </button>
  </header>

  <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
    <nav aria-label="Mobile navigation">
      <a href="#work">Selected work</a>
      <a href="#workbench">Workbench</a>
      <a href="#about">About</a>
      <a href="resume.html">Résumé</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="mobile-menu-meta">
      <span>Boston / Rhode Island</span>
      <a href="mailto:tjblech@gmail.com">tjblech@gmail.com</a>
    </div>
  </div>

  <main id="main">
    <section class="hero shell" aria-labelledby="hero-title">
      <div class="hero-copy reveal">
        <p class="eyebrow status-green">Software. Hardware. Prototypes.</p>
        <h1 id="hero-title">
          <span>Engineering</span>
          <span>ideas into</span>
          <span class="copper-text">reality.</span>
        </h1>
        <p class="hero-summary">I’m TJ Blechman, an incoming Northeastern Computer Science student with an engineering foundation. I build useful software, thoughtful interfaces, and physical systems that solve real problems.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#work">View my work <span aria-hidden="true">→</span></a>
          <a class="button button-secondary" href="resume.html"><span aria-hidden="true">↓</span> Open résumé</a>
        </div>
      </div>

      <div class="hero-graphic reveal" aria-hidden="true">
        <svg class="hero-trace" viewBox="0 0 430 310" role="img">
          <path class="trace-ghost" d="M20 265H92l31-31v-91l36-36h78l31-31h140" />
          <path class="trace-live" d="M20 265H92l31-31v-91l36-36h78l31-31h140" />
          <circle cx="92" cy="265" r="7" />
          <circle cx="123" cy="234" r="5" />
          <circle cx="268" cy="76" r="5" />
        </svg>
      </div>

      <aside class="status-panel reveal" aria-label="Current status">
        <div class="panel-title">/STATUS</div>
        <dl>
          <div>
            <dt>Current focus</dt>
            <dd>Portfolio v2.0 <span class="status-badge status-live">In progress</span></dd>
          </div>
          <div>
            <dt>Location</dt>
            <dd>Boston, MA <span class="status-badge status-live">Local</span></dd>
          </div>
          <div>
            <dt>Availability</dt>
            <dd>Open to opportunities <span class="status-badge status-live">Available</span></dd>
          </div>
          <div>
            <dt>GitHub</dt>
            <dd><a href="https://github.com/tjblech" target="_blank" rel="noreferrer">github.com/tjblech</a></dd>
          </div>
        </dl>
        <div class="panel-terminal"><span>tj@workbench:~$</span><i></i></div>
      </aside>
    </section>

    <section class="selected-work shell section-rule" id="work" aria-labelledby="work-title">
      <div class="section-intro reveal">
        <p class="section-label">// Selected work</p>
        <a class="section-link" href="https://github.com/tjblech" target="_blank" rel="noreferrer">View GitHub <span>→</span></a>
      </div>

      <h2 id="work-title" class="sr-only">Selected work</h2>

      <div class="project-grid">
        <article class="project-card project-card-featured reveal">
          <div class="project-visual campaign-visual">
            <img src="assets/jack-cadman-home.png" alt="Homepage of the Jack Cadman campaign website" />
            <div class="project-schematic" aria-hidden="true">
              <svg viewBox="0 0 600 260" preserveAspectRatio="none">
                <path d="M30 220h84l28-28h76l28-28h140l32-32h150" />
                <circle cx="114" cy="220" r="5" />
                <circle cx="246" cy="164" r="5" />
                <circle cx="398" cy="132" r="5" />
              </svg>
            </div>
          </div>
          <div class="project-body">
            <div class="project-heading">
              <div>
                <h3>Jack Cadman Campaign Website</h3>
                <p>Designer &amp; developer</p>
              </div>
              <span class="status-badge status-live">Live</span>
            </div>
            <p class="project-description">A clear, accessible public-facing website built for a real local campaign—from visual direction and content hierarchy through deployment.</p>
            <div class="case-study-grid">
              <div><span>Problem</span><p>A local campaign needed a credible online presence before launch.</p></div>
              <div><span>Approach</span><p>Designed and developed a fast, responsive site centered on clarity and trust.</p></div>
              <div><span>Stack</span><p>Jekyll · HTML/CSS · GitHub Pages · Cloudflare</p></div>
              <div><span>Outcome</span><p>Deployed live and used as the campaign’s primary web presence.</p></div>
            </div>
            <a class="project-link" href="https://jacklcadman.com/" target="_blank" rel="noreferrer">Visit live project <span>→</span></a>
          </div>
        </article>

        <article class="project-card reveal">
          <div class="project-visual dashboard-visual" aria-label="Schematic interface preview for the billiards tournament manager">
            <div class="dashboard-shell" aria-hidden="true">
              <div class="dash-sidebar"><b>TB</b><i></i><i></i><i></i><i></i></div>
              <div class="dash-main">
                <div class="dash-top"><span>Friday Night 8-Ball</span><em>Live</em></div>
                <div class="dash-stats"><span>8 players</span><span>2 tables</span><span>4 rounds</span></div>
                <div class="dash-table">
                  <div><b>Table 1</b><span>Jordan vs Maya</span><em>In play</em></div>
                  <div><b>Next</b><span>Chris vs Alex</span><em>Ready</em></div>
                  <div><b>On deck</b><span>Sam vs Eli</span><em>08:42</em></div>
                  <div><b>Bracket</b><span>Round 2</span><em>Active</em></div>
                </div>
              </div>
            </div>
            <div class="project-schematic" aria-hidden="true">
              <svg viewBox="0 0 600 260" preserveAspectRatio="none">
                <path d="M40 205h75l34-34h96l26-26h105l31-31h150" />
                <circle cx="115" cy="205" r="5" />
                <circle cx="271" cy="145" r="5" />
                <circle cx="407" cy="114" r="5" />
              </svg>
            </div>
          </div>
          <div class="project-body">
            <div class="project-heading">
              <div><h3>Billiards Tournament Manager</h3><p>Product design &amp; development</p></div>
              <span class="status-badge status-progress">In development</span>
            </div>
            <p class="project-description">A tournament-management tool designed around actual event flow: live brackets, two-table queues, organizer controls, public views, and persistent state.</p>
            <div class="case-study-grid">
              <div><span>Problem</span><p>Manual tracking was fragmented, slow, and easy to lose.</p></div>
              <div><span>Approach</span><p>Model the real workflow first, then build the interface around it.</p></div>
              <div><span>Focus</span><p>State · Scheduling · Mobile usability</p></div>
              <div><span>Status</span><p>Core product and interaction model in active development.</p></div>
            </div>
            <a class="project-link" href="https://github.com/tjblech" target="_blank" rel="noreferrer">View development work <span>→</span></a>
          </div>
        </article>

        <article class="project-card reveal">
          <div class="project-visual bike-visual" aria-label="Technical illustration of the electric bicycle project">
            <svg class="bike-blueprint" viewBox="0 0 700 380" role="img" aria-label="Electric bicycle schematic">
              <g class="grid-lines">
                <path d="M0 70H700M0 140H700M0 210H700M0 280H700M100 0V380M200 0V380M300 0V380M400 0V380M500 0V380M600 0V380" />
              </g>
              <g class="bike-lines">
                <circle cx="180" cy="265" r="93" /><circle cx="530" cy="265" r="93" />
                <path d="M180 265l115-8 86-117 149 125M295 257l86-117 62 123H295l-52-126h-58M381 140l-32-52h71M443 263l50-151h58M490 112h96M180 265l63-128" />
                <rect x="302" y="183" width="95" height="58" rx="7" />
                <path d="M313 196h73M313 208h73M313 220h73" />
              </g>
              <g class="bike-labels">
                <path d="M343 176V88h-58" /><text x="180" y="82">52V BATTERY PACKAGE</text>
                <path d="M535 160h93" /><text x="548" y="151">HUB MOTOR</text>
                <path d="M205 180H92" /><text x="25" y="170">FRAME FIT</text>
              </g>
            </svg>
            <div class="project-schematic" aria-hidden="true">
              <svg viewBox="0 0 600 260" preserveAspectRatio="none">
                <path d="M40 205h75l34-34h96l26-26h105l31-31h150" />
                <circle cx="115" cy="205" r="5" />
                <circle cx="271" cy="145" r="5" />
                <circle cx="407" cy="114" r="5" />
              </svg>
            </div>
          </div>
          <div class="project-body">
            <div class="project-heading">
              <div><h3>Custom Electric Bicycle</h3><p>Hardware system design</p></div>
              <span class="status-badge status-progress">Prototype</span>
            </div>
            <p class="project-description">A ground-up e-bike project exploring performance targets, electrical architecture, battery packaging, waterproofing, and future telemetry.</p>
            <div class="case-study-grid">
              <div><span>Problem</span><p>Balance speed, range, reliability, weight, and safe packaging.</p></div>
              <div><span>Approach</span><p>Define constraints first, then evaluate each subsystem as part of one platform.</p></div>
              <div><span>Architecture</span><p>52V system · 20–25Ah target · custom enclosure</p></div>
              <div><span>Status</span><p>Component research and system planning in progress.</p></div>
            </div>
            <a class="project-link" href="#workbench">Open the workbench <span>→</span></a>
          </div>
        </article>
      </div>
    </section>

    <section class="workbench shell section-rule" id="workbench" aria-labelledby="workbench-title">
      <div class="workbench-heading reveal">
        <div>
          <p class="section-label">// Workbench</p>
          <h2 id="workbench-title">Current builds and experiments.</h2>
          <p>Ideas become prototypes. Prototypes become systems.</p>
        </div>
        <button class="button button-secondary terminal-toggle" type="button" aria-expanded="true" aria-controls="terminal">Toggle terminal <span aria-hidden="true">&gt;_</span></button>
      </div>

      <div class="bench-layout">
        <div class="bench-cards reveal">
          <article class="bench-card">
            <div class="bench-art circuit-art" aria-hidden="true"><i></i><i></i><i></i><i></i><b></b></div>
            <h3>Electric bike architecture</h3>
            <p>Battery placement, controller selection, enclosure design, and system tradeoffs.</p>
            <span>Hardware</span>
          </article>
          <article class="bench-card">
            <div class="bench-art ui-art" aria-hidden="true"><div></div><div></div><div></div></div>
            <h3>Portfolio v2</h3>
            <p>A complete visual-system rebuild focused on clarity, credibility, and restraint.</p>
            <span>Product design</span>
          </article>
          <article class="bench-card">
            <div class="bench-art waveform-art" aria-hidden="true"><svg viewBox="0 0 300 120"><path d="M0 62h35l15-31 28 69 25-52 22 14h31l19-43 31 81 24-54 19 16h71" /></svg></div>
            <h3>Tournament logic</h3>
            <p>Translating messy real-world event operations into reliable product state.</p>
            <span>Software</span>
          </article>
          <article class="bench-card">
            <div class="bench-art notes-art" aria-hidden="true"><span></span><span></span><span></span><b>?</b></div>
            <h3>Engineering notebook</h3>
            <p>Design notes, technical questions, experiments, and ideas worth pursuing.</p>
            <span>Exploration</span>
          </article>
        </div>

        <div class="terminal reveal" id="terminal">
          <div class="terminal-top"><span>tj@workbench</span><span>interactive console</span></div>
          <div class="terminal-output" id="terminal-output" aria-live="polite">
            <p><span class="prompt">tj@workbench:~$</span> help</p>
            <p class="terminal-response">projects&nbsp;&nbsp;— selected work<br>resume&nbsp;&nbsp;&nbsp;&nbsp;— open résumé<br>bike&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— e-bike development<br>about&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— background<br>contact&nbsp;&nbsp;&nbsp;— get in touch<br>clear&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;— clear terminal</p>
          </div>
          <form class="terminal-form" id="terminal-form">
            <label for="terminal-input" class="sr-only">Terminal command</label>
            <span class="prompt">tj@workbench:~$</span>
            <input id="terminal-input" name="command" autocomplete="off" spellcheck="false" />
            <span class="terminal-caret" aria-hidden="true"></span>
          </form>
        </div>
      </div>
    </section>

    <section class="process shell section-rule" aria-labelledby="process-title">
      <div class="process-intro reveal">
        <p class="section-label">// How I build</p>
        <h2 id="process-title">Curiosity.<br>First principles.</h2>
      </div>
      <div class="process-grid">
        <article class="process-step reveal"><span class="process-icon">↗</span><div><h3>Explore</h3><p>Understand the problem deeply, question assumptions, and identify the constraints that actually matter.</p></div></article>
        <article class="process-step reveal"><span class="process-icon">▦</span><div><h3>Design</h3><p>Turn the constraints into a clear system: hierarchy, states, architecture, and a plan that can survive contact with reality.</p></div></article>
        <article class="process-step reveal"><span class="process-icon">⌁</span><div><h3>Build</h3><p>Prototype, test, revise, and keep polishing until the result feels trustworthy—not merely technically complete.</p></div></article>
      </div>
    </section>

    <section class="about shell section-rule" id="about" aria-labelledby="about-title">
      <div class="about-heading reveal">
        <p class="section-label">// About</p>
        <h2 id="about-title">Engineering foundation.<br>Product mindset.</h2>
      </div>
      <div class="about-copy reveal">
        <p>I’m transferring to Northeastern University to study Computer Science after building a foundation in Computer Engineering at the University of Rhode Island. That path shaped how I think: software is never isolated from the people, hardware, constraints, and systems around it.</p>
        <p>I’m most energized by ambitious projects with a real user, a real constraint, or a real physical component—especially work at the intersection of product engineering, startups, and emerging technology.</p>
        <div class="about-facts">
          <div><span>Education</span><strong>Northeastern CS · URI Engineering</strong></div>
          <div><span>Focus</span><strong>Product engineering · Startups · Hardware</strong></div>
          <div><span>Location</span><strong>Boston / Rhode Island</strong></div>
        </div>
      </div>
    </section>

    <section class="contact shell section-rule" id="contact" aria-labelledby="contact-title">
      <p class="section-label reveal">// Contact</p>
      <div class="contact-layout">
        <div class="reveal">
          <h2 id="contact-title">Let’s build something worth remembering.</h2>
          <p>I’m open to internships, co-ops, collaborations, and conversations about ambitious technical ideas.</p>
        </div>
        <div class="contact-links reveal">
          <a href="mailto:tjblech@gmail.com"><span>Email</span><strong>tjblech@gmail.com</strong><i>→</i></a>
          <a href="https://github.com/tjblech" target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/tjblech</strong><i>→</i></a>
          <a href="https://www.linkedin.com/in/tj-blechman-1190aa3ab" target="_blank" rel="noreferrer"><span>LinkedIn</span><strong>TJ Blechman</strong><i>→</i></a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer shell">
    <span>© <span id="year"></span> TJ Blechman</span>
    <span>Designed and built from scratch.</span>
    <a href="#top">Back to top ↑</a>
  </footer>
</body>
</html>
