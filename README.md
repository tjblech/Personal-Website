<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="TJ Blechman — computer science student, engineer, and builder." />
  <meta name="theme-color" content="#07090d" />
  <title>TJ Blechman — Engineer & Builder</title>
  <link rel="icon" href="assets/favicon.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div class="noise" aria-hidden="true"></div>
  <div class="cursor-glow" aria-hidden="true"></div>
  <div class="progress" aria-hidden="true"><span></span></div>

  <header class="nav shell">
    <a class="brand" href="#top" aria-label="TJ home">TJ<span>.</span></a>
    <nav aria-label="Primary navigation">
      <a href="#work">Work</a>
      <a href="#about">About</a>
      <a href="#terminal">TJ_OS</a>
      <a href="#contact">Contact</a>
    </nav>
    <a class="nav-cta" href="#contact">Let’s talk <span>↗</span></a>
  </header>

  <main id="top">
    <section class="hero shell">
      <div class="hero-kicker reveal"><span class="status-dot"></span> Available for ambitious work</div>
      <h1 class="reveal">
        I build software<br />
        <span>that deserves</span><br />
        to exist.
      </h1>
      <div class="hero-bottom reveal">
        <p>Computer Science at Northeastern. Engineer, product-minded builder, and future founder obsessed with turning difficult ideas into polished, useful products.</p>
        <div class="hero-actions">
          <a class="button primary" href="#work">Explore my work <span>↓</span></a>
          <a class="button ghost" href="assets/TJ-Blechman-Resume.pdf">Résumé <span>↗</span></a>
        </div>
      </div>
      <div class="hero-orbit" aria-hidden="true">
        <div class="orb orb-a"></div><div class="orb orb-b"></div><div class="orb orb-c"></div>
        <div class="orbit-ring ring-a"></div><div class="orbit-ring ring-b"></div>
      </div>
      <div class="scroll-hint">SCROLL TO EXPLORE <span></span></div>
    </section>

    <section class="marquee" aria-label="Capabilities">
      <div class="marquee-track">
        <span>SOFTWARE ENGINEERING</span><i>✦</i><span>PRODUCT DESIGN</span><i>✦</i><span>WEB DEVELOPMENT</span><i>✦</i><span>EMBEDDED SYSTEMS</span><i>✦</i><span>STARTUPS</span><i>✦</i>
        <span>SOFTWARE ENGINEERING</span><i>✦</i><span>PRODUCT DESIGN</span><i>✦</i><span>WEB DEVELOPMENT</span><i>✦</i><span>EMBEDDED SYSTEMS</span><i>✦</i><span>STARTUPS</span><i>✦</i>
      </div>
    </section>

    <section id="work" class="section shell">
      <div class="section-heading reveal">
        <span>01 / SELECTED WORK</span>
        <h2>Projects built to<br />make an impression.</h2>
      </div>

      <article class="project reveal">
        <div class="project-visual campaign-preview">
          <div class="browser-bar"><span></span><span></span><span></span><em>jacklcadman.com</em></div>
          <div class="campaign-site">
            <div class="campaign-nav"><b>JACK CADMAN</b><small>FOR OFFICE</small></div>
            <div class="campaign-copy"><p>LEADERSHIP THAT LISTENS.</p><h3>A stronger future<br />starts here.</h3><button>JOIN THE CAMPAIGN</button></div>
            <div class="campaign-person"></div>
          </div>
        </div>
        <div class="project-copy">
          <div><span class="project-number">01</span><span class="project-type">CLIENT WEBSITE</span></div>
          <h3>Jack Cadman<br />Campaign Platform</h3>
          <p>Designed and developed a complete political campaign website with a distinctive visual identity, responsive layouts, clear calls to action, and production deployment.</p>
          <ul><li>TypeScript</li><li>GitHub Pages</li><li>Cloudflare</li><li>Responsive Design</li></ul>
          <div class="project-links"><a href="#">Live site ↗</a><a href="#">View code ↗</a></div>
        </div>
      </article>

      <article class="project reverse reveal">
        <div class="project-visual bike-preview">
          <div class="tech-grid"></div>
          <div class="bike-wheel wheel-left"></div><div class="bike-wheel wheel-right"></div>
          <div class="bike-frame"></div><div class="battery"></div>
          <div class="telemetry"><span>52V SYSTEM</span><b>30.0</b><small>MPH TARGET</small></div>
          <div class="spec spec-a">CUSTOM ENCLOSURE</div><div class="spec spec-b">LIVE TELEMETRY</div>
        </div>
        <div class="project-copy">
          <div><span class="project-number">02</span><span class="project-type">ENGINEERING PROJECT</span></div>
          <h3>Custom Electric<br />Bike System</h3>
          <p>Designing a custom high-performance e-bike around a 52V power system, weather-resistant enclosure, thermal management, and future telemetry.</p>
          <ul><li>Hardware</li><li>CAD</li><li>Power Systems</li><li>Embedded</li></ul>
          <div class="project-links"><a href="#">Case study coming soon ↗</a></div>
        </div>
      </article>

      <article class="project reveal">
        <div class="project-visual lab-preview">
          <div class="code-window">
            <div class="code-top">engineering_lab.cpp <span>●</span></div>
            <pre><code><i>class</i> Builder {
  <b>public</b>:
    Idea imagine();
    System engineer(Idea);
    Product ship(System);
};

<span>// curiosity → execution</span>
auto future = TJ.build();</code></pre>
          </div>
          <div class="floating-card fc-a">C++<small>Systems</small></div>
          <div class="floating-card fc-b">Python<small>Automation</small></div>
          <div class="floating-card fc-c">React<small>Interfaces</small></div>
        </div>
        <div class="project-copy">
          <div><span class="project-number">03</span><span class="project-type">ONGOING LAB</span></div>
          <h3>Engineering<br />Experiments</h3>
          <p>A growing collection of software, embedded systems, coursework, prototypes, and experiments documenting how I think and build.</p>
          <ul><li>C++</li><li>Python</li><li>Java</li><li>Embedded Systems</li></ul>
          <div class="project-links"><a href="#">Explore GitHub ↗</a></div>
        </div>
      </article>
    </section>

    <section id="about" class="about-section">
      <div class="shell about-grid">
        <div class="sticky-label reveal"><span>02 / WHY I BUILD</span></div>
        <div class="about-copy reveal">
          <p class="statement">I’m not interested in building things just because they’re technically possible.</p>
          <p class="statement muted">I want to make products that feel inevitable once they exist.</p>
          <div class="about-detail">
            <p>I started in computer engineering, where I learned to think from the hardware up. Now, as a computer science student at Northeastern, I’m combining that technical foundation with product design, entrepreneurship, and a bias toward shipping.</p>
            <p>The long-term goal is simple: build companies, solve meaningful problems, and create work people remember.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="timeline-section shell">
      <div class="section-heading reveal"><span>03 / TRAJECTORY</span><h2>Built through<br />momentum.</h2></div>
      <div class="timeline">
        <div class="timeline-line"></div>
        <div class="timeline-item reveal"><b>2022</b><h3>Started Computer Engineering</h3><p>Built a foundation across software, electronics, physics, and systems thinking at the University of Rhode Island.</p></div>
        <div class="timeline-item reveal"><b>2024–26</b><h3>Dean’s List & Real-World Projects</h3><p>Strengthened my technical range while building for real clients and developing a sharper product mindset.</p></div>
        <div class="timeline-item reveal"><b>2026</b><h3>Transferred to Northeastern</h3><p>Moved into Computer Science to go deeper on software, startups, and ambitious product development.</p></div>
        <div class="timeline-item reveal"><b>NEXT</b><h3>Building What Comes After</h3><p>Looking for teams and problems where curiosity, engineering, and taste all matter.</p></div>
      </div>
    </section>

    <section id="terminal" class="terminal-section">
      <div class="shell">
        <div class="section-heading light reveal"><span>04 / TJ_OS</span><h2>A little more<br />under the hood.</h2></div>
        <div class="terminal reveal">
          <div class="terminal-top"><div><i></i><i></i><i></i></div><span>TJ_OS — zsh — 80×24</span><em>SECURE SESSION</em></div>
          <div id="terminal-output" class="terminal-output">
            <p class="dim">TJ_OS v1.0.0 — personal operating system</p>
            <p class="dim">Type <strong>help</strong> to explore.</p>
          </div>
          <form id="terminal-form" autocomplete="off">
            <label for="terminal-input">tj@portfolio:~$</label>
            <input id="terminal-input" aria-label="Terminal command" spellcheck="false" autofocus />
          </form>
          <div class="command-chips"><button data-command="help">help</button><button data-command="about">about</button><button data-command="skills">skills</button><button data-command="currently">currently</button><button data-command="contact">contact</button><button data-command="clear">clear</button></div>
        </div>
      </div>
    </section>

    <section class="capabilities shell">
      <div class="section-heading reveal"><span>05 / CAPABILITIES</span><h2>Technical enough to build it.<br />Product-minded enough to matter.</h2></div>
      <div class="capability-grid">
        <div class="capability reveal"><span>01</span><h3>Software Engineering</h3><p>C++, Java, Python, systems thinking, data structures, and software architecture.</p></div>
        <div class="capability reveal"><span>02</span><h3>Frontend & Product</h3><p>Responsive interfaces, TypeScript, web development, interaction design, and visual polish.</p></div>
        <div class="capability reveal"><span>03</span><h3>Hardware & Embedded</h3><p>Electronics, microcontrollers, power systems, technical prototyping, and physical computing.</p></div>
        <div class="capability reveal"><span>04</span><h3>Founder Mindset</h3><p>Problem discovery, rapid learning, ownership, iteration, and an instinct for useful products.</p></div>
      </div>
    </section>

    <section id="contact" class="contact-section">
      <div class="shell contact-inner reveal">
        <span>HAVE A HARD PROBLEM?</span>
        <h2>Let’s build<br /><em>something remarkable.</em></h2>
        <a class="contact-email" href="mailto:YOUR_EMAIL@example.com">YOUR_EMAIL@example.com <b>↗</b></a>
        <div class="contact-links"><a href="#">GitHub ↗</a><a href="#">LinkedIn ↗</a><a href="assets/TJ-Blechman-Resume.pdf">Résumé ↗</a></div>
      </div>
    </section>
  </main>

  <footer class="footer shell"><span>© <span id="year"></span> TJ BLECHMAN</span><span>BUILT WITH CURIOSITY + TOO MUCH COFFEE</span><a href="#top">BACK TO TOP ↑</a></footer>
  <script src="script.js"></script>
</body>
</html>
