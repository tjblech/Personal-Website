(() => {
  'use strict';

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const body = document.body;
  const header = document.querySelector('.site-header');
  const progressBar = document.querySelector('.scroll-progress span');
  const boot = document.getElementById('boot');
  const year = document.getElementById('year');
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const signalToggle = document.getElementById('signal-toggle');
  const devOverlay = document.getElementById('dev-overlay');
  const viewportReadout = document.getElementById('viewport-readout');
  const scrollReadout = document.getElementById('scroll-readout');
  const signalReadout = document.getElementById('signal-readout');

  if (year) year.textContent = new Date().getFullYear();

  const hideBoot = () => {
    if (!boot) return;
    window.setTimeout(() => boot.classList.add('is-hidden'), reduceMotion ? 0 : 900);
  };
  if (document.readyState === 'complete') hideBoot();
  else window.addEventListener('load', hideBoot, { once: true });
  window.setTimeout(hideBoot, 2300);

  const updateScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const percent = Math.min(100, Math.max(0, (y / max) * 100));
    if (progressBar) progressBar.style.width = `${percent}%`;
    if (header) header.classList.toggle('is-scrolled', y > 24);
    if (scrollReadout) scrollReadout.textContent = `${Math.round(percent)}%`;
  };
  updateScroll();
  window.addEventListener('scroll', updateScroll, { passive: true });

  const reveals = document.querySelectorAll('.reveal, .reveal-text, .timeline');
  if ('IntersectionObserver' in window && !reduceMotion) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-visible'));
  }

  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = Number(el.dataset.count || 0);
        const hasDecimals = String(el.dataset.count).includes('.');
        const duration = reduceMotion ? 1 : 1100;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const current = target * eased;
          el.textContent = hasDecimals ? current.toFixed(2) : Math.round(current).toString();
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach((el) => counterObserver.observe(el));
  }

  const setMenu = (open) => {
    if (!menuButton || !mobileMenu) return;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    mobileMenu.classList.toggle('is-open', open);
    mobileMenu.setAttribute('aria-hidden', String(!open));
    body.classList.toggle('menu-open', open);
  };
  menuButton?.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  mobileMenu?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });

  let signalMode = false;
  const setSignalMode = (enabled) => {
    signalMode = enabled;
    body.classList.toggle('signal-mode', enabled);
    signalToggle?.setAttribute('aria-pressed', String(enabled));
    if (signalReadout) signalReadout.textContent = enabled ? 'BOOST' : 'NORMAL';
  };
  signalToggle?.addEventListener('click', () => setSignalMode(!signalMode));

  let devOpen = false;
  document.addEventListener('keydown', (event) => {
    const tag = document.activeElement?.tagName;
    if (event.key.toLowerCase() === 't' && tag !== 'INPUT' && tag !== 'TEXTAREA') {
      devOpen = !devOpen;
      devOverlay?.classList.toggle('is-open', devOpen);
      devOverlay?.setAttribute('aria-hidden', String(!devOpen));
    }
  });
  const updateViewport = () => {
    if (viewportReadout) viewportReadout.textContent = `${window.innerWidth}×${window.innerHeight}`;
  };
  updateViewport();
  window.addEventListener('resize', updateViewport, { passive: true });

  if (finePointer) {
    const cursor = document.querySelector('.cursor-orbit');
    let mouseX = -100;
    let mouseY = -100;
    let cursorX = -100;
    let cursorY = -100;
    document.addEventListener('mousemove', (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      if (cursor) cursor.style.opacity = '1';
    }, { passive: true });
    const animateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.18;
      cursorY += (mouseY - cursorY) * 0.18;
      if (cursor) cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(animateCursor);
    };
    requestAnimationFrame(animateCursor);

    document.querySelectorAll('a, button, input, .project__visual').forEach((el) => {
      el.addEventListener('mouseenter', () => cursor?.classList.add('is-active'));
      el.addEventListener('mouseleave', () => cursor?.classList.remove('is-active'));
    });

    if (!reduceMotion) {
      document.querySelectorAll('.magnetic').forEach((el) => {
        el.addEventListener('mousemove', (event) => {
          const rect = el.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;
          el.style.transform = `translate(${x * 0.08}px, ${y * 0.1}px)`;
        });
        el.addEventListener('mouseleave', () => {
          el.style.transform = '';
        });
      });

      document.querySelectorAll('.project__visual').forEach((visual) => {
        visual.addEventListener('mousemove', (event) => {
          const rect = visual.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          const frame = visual.querySelector('.browser-frame, .dashboard-mock, .common-mock');
          if (frame) frame.style.transform = `perspective(1400px) rotateX(${-y * 3}deg) rotateY(${x * 4}deg) translate3d(${x * 4}px, ${y * 4}px, 0)`;
        });
        visual.addEventListener('mouseleave', () => {
          const frame = visual.querySelector('.browser-frame, .dashboard-mock, .common-mock');
          if (frame) frame.style.transform = '';
        });
      });
    }
  }

  const form = document.getElementById('terminal-form');
  const input = document.getElementById('terminal-input');
  const history = document.getElementById('terminal-history');
  const commandButtons = document.querySelectorAll('[data-command]');

  const terminalCommands = {
    help: 'Commands: about · projects · stack · now · contact · resume · clear',
    about: 'TJ is an incoming Northeastern CS student with a computer engineering foundation and a focus on product engineering, startups, and ambitious technical work.',
    projects: '01 Campaign platform  |  02 Billiards tournament system  |  03 Common Ground resource platform',
    stack: 'C++ · JavaScript · TypeScript · React · HTML/CSS · Git · Supabase · MATLAB · Cloudflare',
    now: 'Building this portfolio, refining client work, and exploring a custom 52V electric-bike platform.',
    contact: 'Email: tjblech@gmail.com  |  GitHub: github.com/tjblech',
    resume: 'Opening résumé…'
  };

  const printTerminal = (command) => {
    if (!history) return;
    const key = command.trim().toLowerCase();
    if (!key) return;
    const commandLine = document.createElement('p');
    commandLine.innerHTML = `<span style="color:var(--accent)">tj@portfolio:~$</span> ${escapeHtml(key)}`;
    history.appendChild(commandLine);

    if (key === 'clear') {
      history.innerHTML = '<p><span class="terminal__muted">System:</span> Terminal cleared.</p>';
    } else {
      const response = document.createElement('p');
      response.className = terminalCommands[key] ? 'terminal__response' : 'terminal__error';
      response.textContent = terminalCommands[key] || `Command not found: ${key}. Try “help”.`;
      history.appendChild(response);
      if (key === 'resume') window.setTimeout(() => { window.location.href = 'resume.html'; }, 350);
    }
    history.scrollTop = history.scrollHeight;
  };

  function escapeHtml(value) {
    return value.replace(/[&<>'"]/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));
  }

  form?.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!input) return;
    printTerminal(input.value);
    input.value = '';
  });
  commandButtons.forEach((button) => button.addEventListener('click', () => {
    printTerminal(button.dataset.command || '');
    input?.focus();
  }));

  const canvas = document.getElementById('signal-canvas');
  if (canvas instanceof HTMLCanvasElement && !reduceMotion) {
    const ctx = canvas.getContext('2d', { alpha: true });
    if (ctx) {
      let width = 0;
      let height = 0;
      let dpr = 1;
      let nodes = [];
      const mouse = { x: -9999, y: -9999 };

      const resize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        dpr = Math.min(window.devicePixelRatio || 1, 1.7);
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        const count = Math.max(28, Math.min(82, Math.floor(width * height / 26000)));
        nodes = Array.from({ length: count }, () => ({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.17,
          vy: (Math.random() - 0.5) * 0.17,
          r: Math.random() * 1.2 + 0.45
        }));
      };
      resize();
      window.addEventListener('resize', resize, { passive: true });
      window.addEventListener('mousemove', (event) => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
      }, { passive: true });

      const render = () => {
        ctx.clearRect(0, 0, width, height);
        const accent = signalMode ? [255, 118, 108] : [120, 247, 207];
        nodes.forEach((node) => {
          node.x += node.vx * (signalMode ? 2.1 : 1);
          node.y += node.vy * (signalMode ? 2.1 : 1);
          if (node.x < -20) node.x = width + 20;
          if (node.x > width + 20) node.x = -20;
          if (node.y < -20) node.y = height + 20;
          if (node.y > height + 20) node.y = -20;

          const mdx = mouse.x - node.x;
          const mdy = mouse.y - node.y;
          const md = Math.hypot(mdx, mdy);
          if (md < 160 && md > 0) {
            node.x -= (mdx / md) * 0.12;
            node.y -= (mdy / md) * 0.12;
          }
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${accent[0]},${accent[1]},${accent[2]},.38)`;
          ctx.fill();
        });

        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const a = nodes[i];
            const b = nodes[j];
            const distance = Math.hypot(a.x - b.x, a.y - b.y);
            const limit = signalMode ? 150 : 118;
            if (distance < limit) {
              const alpha = (1 - distance / limit) * (signalMode ? 0.15 : 0.075);
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.strokeStyle = `rgba(${accent[0]},${accent[1]},${accent[2]},${alpha})`;
              ctx.lineWidth = 0.7;
              ctx.stroke();
            }
          }
        }
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    }
  }
})();
