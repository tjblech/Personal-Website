<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#f3f1ea" />
  <title>Résumé — TJ Blechman</title>
  <link rel="icon" href="favicon.svg" type="image/svg+xml" />
  <style>
    :root { --ink:#0b0d10; --muted:#5e6670; --paper:#f3f1ea; --accent:#126b5a; --line:#c9c6bd; }
    * { box-sizing:border-box; }
    body { margin:0; color:var(--ink); background:#11151b; font-family:Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; line-height:1.45; }
    a { color:inherit; text-decoration:none; }
    .toolbar { position:sticky; top:0; z-index:10; display:flex; justify-content:space-between; align-items:center; gap:16px; padding:14px 22px; color:#e8ebef; background:rgba(8,11,15,.88); border-bottom:1px solid rgba(255,255,255,.1); backdrop-filter:blur(14px); }
    .toolbar a,.toolbar button { border:0; color:inherit; background:none; font:650 12px/1 ui-monospace,monospace; letter-spacing:.08em; cursor:pointer; }
    .toolbar button { padding:10px 14px; color:#07100d; background:#78f7cf; border-radius:999px; }
    .page { width:min(900px,calc(100% - 32px)); margin:36px auto; padding:58px 64px; background:var(--paper); box-shadow:0 30px 100px rgba(0,0,0,.34); }
    header { display:grid; grid-template-columns:1fr auto; gap:36px; align-items:end; padding-bottom:26px; border-bottom:2px solid var(--ink); }
    h1 { margin:0; font-size:56px; line-height:.9; letter-spacing:-.065em; }
    .headline { margin:14px 0 0; color:var(--accent); font-size:15px; font-weight:750; }
    .contact { text-align:right; color:var(--muted); font-size:12px; line-height:1.7; }
    .contact a { border-bottom:1px solid var(--line); }
    main { display:grid; grid-template-columns:.72fr 1.28fr; gap:46px; padding-top:34px; }
    section { margin-bottom:32px; }
    h2 { margin:0 0 16px; color:var(--accent); font:800 10px/1 ui-monospace,monospace; letter-spacing:.16em; text-transform:uppercase; }
    h3 { margin:0; font-size:15px; letter-spacing:-.015em; }
    p { margin:7px 0 0; color:var(--muted); font-size:12px; }
    .item { margin-bottom:22px; }
    .item__top { display:flex; justify-content:space-between; gap:20px; align-items:baseline; }
    .item__top span { color:var(--muted); font:600 9px/1 ui-monospace,monospace; white-space:nowrap; }
    ul { margin:9px 0 0; padding-left:17px; color:var(--muted); font-size:12px; }
    li { margin:5px 0; }
    .skill-group { margin-bottom:18px; }
    .skill-group strong { display:block; margin-bottom:5px; font-size:12px; }
    .skill-group p { line-height:1.65; }
    .stat { display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid var(--line); font-size:12px; }
    .stat span { color:var(--muted); }
    .summary { color:#33383f; font-size:13px; line-height:1.65; }
    .note { margin-top:26px; padding-top:18px; border-top:1px solid var(--line); color:var(--muted); font-size:10px; }
    @media (max-width:700px) { .page{padding:38px 26px}.page header{grid-template-columns:1fr}.contact{text-align:left}main{grid-template-columns:1fr;gap:10px}h1{font-size:45px}.toolbar span{display:none} }
    @media print { body{background:white}.toolbar{display:none}.page{width:100%;margin:0;padding:.45in .55in;box-shadow:none}a{border:0!important} }
  </style>
</head>
<body>
  <div class="toolbar"><a href="index.html">← Portfolio</a><span>PRINT-READY WEB RÉSUMÉ</span><button type="button" onclick="window.print()">Print / Save PDF</button></div>
  <article class="page">
    <header>
      <div><h1>TJ Blechman</h1><p class="headline">Computer Science Student • Engineer • Product Builder</p></div>
      <div class="contact">
        Wakefield, Rhode Island<br />
        <a href="mailto:tjblech@gmail.com">tjblech@gmail.com</a><br />
        <a href="https://github.com/tjblech">github.com/tjblech</a><br />
        <a href="https://www.linkedin.com/in/tj-blechman-1190aa3ab">LinkedIn profile</a>
      </div>
    </header>
    <main>
      <aside>
        <section><h2>Profile</h2><p class="summary">Incoming Computer Science student at Northeastern University with a computer engineering foundation and experience building public-facing web products, client websites, and practical software systems. Interested in product engineering, startups, embedded systems, and turning ambitious ideas into polished tools.</p></section>
        <section><h2>Core skills</h2>
          <div class="skill-group"><strong>Languages</strong><p>C++, JavaScript, TypeScript, HTML, CSS, MATLAB</p></div>
          <div class="skill-group"><strong>Tools & platforms</strong><p>React, Git, GitHub Pages, Supabase, Cloudflare, Google APIs</p></div>
          <div class="skill-group"><strong>Strengths</strong><p>Product design, UI systems, responsive development, technical problem solving, rapid prototyping</p></div>
        </section>
        <section><h2>Highlights</h2><div class="stat"><span>URI GPA</span><strong>3.80</strong></div><div class="stat"><span>Academic standing</span><strong>Dean’s List</strong></div><div class="stat"><span>Focus</span><strong>Build + ship</strong></div></section>
      </aside>
      <div>
        <section><h2>Education</h2>
          <div class="item"><div class="item__top"><h3>Northeastern University</h3><span>BEGINNING FALL 2026</span></div><p>Computer Science — incoming transfer student</p></div>
          <div class="item"><div class="item__top"><h3>University of Rhode Island</h3><span>2024–2026</span></div><p>Computer Engineering coursework • 3.80 GPA • Dean’s List</p><ul><li>Coursework across programming, circuits, calculus, linear algebra, physics, and engineering design.</li><li>Built a multidisciplinary foundation spanning software and hardware systems.</li></ul></div>
        </section>
        <section><h2>Selected projects</h2>
          <div class="item"><div class="item__top"><h3>Jack Cadman Campaign Website</h3><span>CLIENT PROJECT / 2026</span></div><p>Designed and deployed a responsive public-facing campaign website from scratch.</p><ul><li>Owned visual direction, information hierarchy, implementation, deployment, and iteration.</li><li>Used GitHub Pages, Jekyll, and Cloudflare to deliver a reliable production site.</li></ul></div>
          <div class="item"><div class="item__top"><h3>Billiards Tournament Manager</h3><span>PRODUCT SYSTEM / 2026</span></div><p>Built a mobile-friendly tournament management system to replace fragmented event workflows.</p><ul><li>Implemented live brackets, two-table queueing, organizer/public views, late-arrival handling, leaderboard support, and persistent state.</li><li>Designed around real tournament operations rather than a generic bracket template.</li></ul></div>
          <div class="item"><div class="item__top"><h3>Common Ground</h3><span>EARLY PROTOTYPE / 2026</span></div><p>Created a resource-coordination concept for immigrants seeking trusted legal, healthcare, housing, and community support.</p><ul><li>Focused on search, information architecture, trust, and accessibility.</li><li>Prototyped with HTML, CSS, JavaScript, and Google services.</li></ul></div>
        </section>
        <section><h2>Current exploration</h2><div class="item"><div class="item__top"><h3>Custom Electric Bike Platform</h3><span>IN DEVELOPMENT</span></div><p>Exploring system architecture, battery packaging, performance constraints, and future telemetry for a custom 52V e-bike build.</p></div></section>
      </div>
    </main>
    <p class="note">This résumé is intentionally delivered as a print-ready web page so it remains usable on GitHub Pages without external files or build tools.</p>
  </article>
</body>
</html>
