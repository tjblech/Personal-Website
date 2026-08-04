(function(){

  const WORK_CONFIG = {
    eyebrow: "selected work",
    heading: "things i've built",
    intro: "a few projects i've shipped, plus one i'm still building in the garage."
  };

  const PROJECTS = [
    {
      file: "common-ground.md",
      title: "Common Ground",
      blurb: "A hub that centralizes legal, healthcare, and community resources, with an event pipeline where a Google Form submission flows through Sheets approval straight to a live calendar.",
      tags: ["JavaScript", "Google Apps Script", "Calendar API"],
      link: "https://tjblech.github.io/Common-Ground/",
      accent: "slate",
      scene: "branch",
      screenshot: "common-ground-shot.jpg",
      screenshotUrl: "tjblech.github.io/Common-Ground"
    },
    {
      file: "measured-from-here.md",
      title: "Measured From Here",
      blurb: "Two scroll experiences spanning sixty orders of magnitude: one from eye level out to the observable universe, one from now back to the Planck time. A custom collision solver keeps every content card from overlapping at any viewport size, backed by 516 passing test assertions.",
      tags: ["JavaScript", "Testing", "No dependencies"],
      link: "#",
      accent: "plum",
      scene: "orbit"
    },
    {
      file: "runway.md",
      title: "Runway",
      blurb: "A single-file personal planner: a natural-language quick-add box, a command palette, drag-to-reschedule, and a 14-day view that shows the shape of your workload at a glance. Syncs across devices through Supabase with built-in conflict resolution.",
      tags: ["JavaScript", "Supabase", "Local-first"],
      link: "#",
      accent: "gold",
      scene: "flow"
    },
    {
      file: "billiards-tournament-manager.md",
      title: "Billiards Tournament Manager",
      blurb: "A bracket manager built for pool leagues: live queueing across two tables, single and double elimination, and a public bracket view players can pull up from a QR code.",
      tags: ["React", "TypeScript", "Supabase"],
      link: "https://tjblech.github.io/Billiards/",
      accent: "slate",
      scene: "orbit"
    },
    {
      file: "jack-cadman-campaign.md",
      title: "Jack Cadman Campaign Website",
      blurb: "A full site built for a local school committee campaign: priorities, bio, and volunteer info in a responsive, mobile-first layout.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      link: "https://jacklcadman.com/",
      accent: "plum",
      scene: "pulse"
    },
    {
      file: "ebike-build.md",
      title: "Mountain Bike → Ebike",
      blurb: "Converting my mountain bike into an ebike, working through motor, battery, and controller integration. Still in progress.",
      tags: ["Hardware", "DIY", "In Progress"],
      link: "#",
      accent: "rose",
      scene: "flow"
    }
  ];

  document.getElementById('pwEyebrowSR').textContent = WORK_CONFIG.eyebrow;
  document.getElementById('pwHeadingSR').textContent = WORK_CONFIG.heading;
  document.getElementById('pwIntro').textContent = WORK_CONFIG.intro;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&+=";
  const scrambleRuns = new WeakMap();

  function scrambleInto(el, finalText, duration){
    duration = duration || 600;
    const myRun = (scrambleRuns.get(el) || 0) + 1;
    scrambleRuns.set(el, myRun);
    if(reduceMotion){ el.textContent = finalText; return; }
    const start = performance.now();
    function frame(now){
      if(scrambleRuns.get(el) !== myRun) return;
      const progress = Math.min((now-start)/duration, 1);
      const revealCount = Math.floor(progress*finalText.length);
      let out = '';
      for(let i=0;i<finalText.length;i++){
        if(i < revealCount || finalText[i] === ' '){ out += finalText[i]; }
        else{ out += SCRAMBLE_CHARS[Math.floor(Math.random()*SCRAMBLE_CHARS.length)]; }
      }
      el.textContent = out;
      if(progress < 1){ requestAnimationFrame(frame); }
      else{ el.textContent = finalText; }
    }
    requestAnimationFrame(frame);
  }

  const PALETTES = {
    rose:  { bg:'#1c1420', line:'rgba(226,169,178,0.6)', core:'#e2a9b2', faint:a=>`rgba(226,169,178,${(a*0.55).toFixed(3)})` },
    gold:  { bg:'#1c1710', line:'rgba(227,193,127,0.6)', core:'#e3c17f', faint:a=>`rgba(227,193,127,${(a*0.55).toFixed(3)})` },
    slate: { bg:'#12141c', line:'rgba(148,166,208,0.6)', core:'#94a6d0', faint:a=>`rgba(148,166,208,${(a*0.55).toFixed(3)})` },
    plum:  { bg:'#1a1220', line:'rgba(154,107,168,0.6)', core:'#9a6ba8', faint:a=>`rgba(154,107,168,${(a*0.55).toFixed(3)})` }
  };

  function makeFlowScene(pal){
    let particles=[];
    function init(w,h){
      particles=[];
      const n=Math.max(16,Math.round((w*h)/6500));
      for(let i=0;i<n;i++) particles.push({x:Math.random()*w,y:Math.random()*h,age:Math.random()*90});
    }
    function step(ctx,w,h,t){
      ctx.globalAlpha=1;ctx.fillStyle=pal.bg;ctx.fillRect(0,0,w,h);ctx.globalAlpha=.5;
      particles.forEach(p=>{
        const a=Math.sin(p.x*.02+t*.6)+Math.cos(p.y*.024-t*.5);
        const nx=p.x+Math.cos(a)*1.5,ny=p.y+Math.sin(a)*1.5;
        ctx.strokeStyle=pal.line;ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(nx,ny);ctx.stroke();
        p.x=nx;p.y=ny;p.age++;
        if(p.x<0||p.x>w||p.y<0||p.y>h||p.age>90){p.x=Math.random()*w;p.y=Math.random()*h;p.age=0;}
      });
      ctx.globalAlpha=1;
    }
    return{init,step};
  }

  function makeOrbitScene(pal){
    let nodes=[];
    function init(w,h){
      nodes=[];
      for(let i=0;i<9;i++) nodes.push({r:18+Math.random()*Math.min(w,h)*.42,speed:(Math.random()*.4+.15)*(Math.random()<.5?-1:1),offset:Math.random()*Math.PI*2,size:1.3+Math.random()*1.7});
    }
    function step(ctx,w,h,t){
      ctx.globalAlpha=1;ctx.fillStyle=pal.bg;ctx.fillRect(0,0,w,h);
      const cx=w/2,cy=h/2;
      const pts=nodes.map(n=>{const ang=n.offset+t*n.speed;return{x:cx+Math.cos(ang)*n.r,y:cy+Math.sin(ang)*n.r*.62,size:n.size};});
      for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
        const d=Math.hypot(pts[i].x-pts[j].x,pts[i].y-pts[j].y),thresh=Math.min(w,h)*.36;
        if(d<thresh){ctx.strokeStyle=pal.faint(1-d/thresh);ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke();}
      }
      pts.forEach(p=>{ctx.fillStyle=pal.line;ctx.beginPath();ctx.arc(p.x,p.y,p.size,0,Math.PI*2);ctx.fill();});
      ctx.fillStyle=pal.core;ctx.beginPath();ctx.arc(cx,cy,3,0,Math.PI*2);ctx.fill();
    }
    return{init,step};
  }

  function makeBranchScene(pal){
    let phase=0;
    function init(){phase=Math.random();}
    function drawBranch(ctx,x,y,angle,len,depth,growth){
      if(depth<=0||len<2)return;
      const g=Math.max(0,Math.min(1,(growth-depth*.11)*3));
      if(g<=0)return;
      const ex=x+Math.cos(angle)*len*g,ey=y+Math.sin(angle)*len*g;
      ctx.strokeStyle=pal.line;ctx.lineWidth=Math.max(.6,depth*.55);ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(ex,ey);ctx.stroke();
      if(g>=1){drawBranch(ctx,ex,ey,angle-.42,len*.72,depth-1,growth);drawBranch(ctx,ex,ey,angle+.5,len*.68,depth-1,growth);}
    }
    function step(ctx,w,h,t){
      ctx.globalAlpha=1;ctx.fillStyle=pal.bg;ctx.fillRect(0,0,w,h);
      const growth=Math.sin(t*.35+phase*Math.PI*2)*.5+.5;
      drawBranch(ctx,w*.5,h*.98,-Math.PI/2,Math.min(w,h)*.5,6,growth);
    }
    return{init,step};
  }

  function makePulseScene(pal){
    let cell=18;
    function init(w,h){cell=Math.max(14,Math.min(w,h)/11);}
    function step(ctx,w,h,t){
      ctx.globalAlpha=1;ctx.fillStyle=pal.bg;ctx.fillRect(0,0,w,h);
      const cx=w*(.5+.3*Math.sin(t*.3)),cy=h*(.5+.3*Math.cos(t*.24));
      const cols=Math.ceil(w/cell)+1,rows=Math.ceil(h/cell)+1;
      for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){
        const x=c*cell,y=r*cell,d=Math.hypot(x-cx,y-cy),wave=Math.max(0,Math.sin(d*.05-t*2))*.5+.06;
        ctx.fillStyle=pal.faint(wave);ctx.beginPath();ctx.arc(x,y,cell*.32*(.4+wave),0,Math.PI*2);ctx.fill();
      }
    }
    return{init,step};
  }

  const SCENE_FACTORIES={flow:makeFlowScene,orbit:makeOrbitScene,branch:makeBranchScene,pulse:makePulseScene};
  const sidebar=document.getElementById('pwSidebar');
  const pane=document.getElementById('pwPane');
  const tabs=[];
  const panels=[];

  PROJECTS.forEach((p,i)=>{
    const pal=PALETTES[p.accent]||PALETTES.rose;
    const tab=document.createElement('button');
    tab.type='button';tab.className='pw-file-tab';tab.id='pwTab'+i;
    tab.setAttribute('role','tab');tab.setAttribute('aria-selected',i===0?'true':'false');tab.setAttribute('aria-controls','pwPanel'+i);tab.tabIndex=i===0?0:-1;
    tab.innerHTML=`<span class="pw-file-dot" style="background:${pal.core}"></span>${p.file}`;
    tab.addEventListener('click',()=>selectProject(i,true));
    sidebar.appendChild(tab);tabs.push(tab);

    const panel=document.createElement('div');
    panel.className='pw-tabpanel'+(i===0?' active':'');panel.id='pwPanel'+i;panel.setAttribute('role','tabpanel');panel.setAttribute('aria-labelledby','pwTab'+i);if(i!==0)panel.hidden=true;
    const cmdline=document.createElement('div');cmdline.className='pw-panel-cmdline';
    const banner=document.createElement('div');banner.className='pw-panel-banner';
    const canvas=document.createElement('canvas');banner.appendChild(canvas);
    const content=document.createElement('div');content.className='pw-panel-content';
    const hasLiveLink=p.link&&p.link!=='#';
    content.innerHTML=`
      <h3 class="pw-panel-title"></h3>
      <p class="pw-panel-blurb">${p.blurb}</p>
      <div class="pw-panel-tags">${p.tags.map(t=>`<span class="pw-inline-code">${t}</span>`).join('')}</div>
      ${p.screenshot?`<a class="pw-shot" href="${hasLiveLink?p.link:'#'}" ${hasLiveLink?'target="_blank" rel="noopener noreferrer"':'aria-disabled="true" tabindex="-1"'}><div class="pw-shot-chrome"><span class="pw-shot-dot red"></span><span class="pw-shot-dot yellow"></span><span class="pw-shot-dot green"></span><span class="pw-shot-url">${p.screenshotUrl||p.link}</span></div><img class="pw-shot-img" src="${p.screenshot}" alt="${p.title} screenshot" loading="lazy"></a>`:''}
      ${hasLiveLink?`<a class="pw-panel-link" href="${p.link}" target="_blank" rel="noopener noreferrer">view project &#8599;</a>`:`<span class="pw-panel-status">case study coming soon</span>`}
    `;
    const shotImg=content.querySelector('.pw-shot-img');
    if(shotImg)shotImg.addEventListener('error',()=>shotImg.closest('.pw-shot')?.remove(),{once:true});
    panel.appendChild(cmdline);panel.appendChild(banner);panel.appendChild(content);pane.appendChild(panel);

    const scene=(SCENE_FACTORIES[p.scene]||makeFlowScene)(pal),ctx=canvas.getContext('2d');
    let running=false,tStart=performance.now();
    function resize(){const rect=banner.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.max(1,rect.width*dpr);canvas.height=Math.max(1,rect.height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);scene.init(rect.width,rect.height);if(reduceMotion)scene.step(ctx,rect.width,rect.height,2);}
    function loop(now){if(!running)return;const rect=banner.getBoundingClientRect();scene.step(ctx,rect.width,rect.height,(now-tStart)/1000);requestAnimationFrame(loop);}
    new ResizeObserver(resize).observe(banner);resize();
    panels.push({el:panel,cmdline,banner,content,titleEl:content.querySelector('.pw-panel-title'),title:p.title,file:p.file,start(){if(running||reduceMotion)return;running=true;tStart=performance.now();requestAnimationFrame(loop);},stop(){running=false;}});
  });

  let currentIndex=-1,typeRunId=0,sectionVisible=false;
  function typeCommand(el,text,speed){
    speed=speed||20;const myRun=++typeRunId;el.innerHTML='';
    if(reduceMotion){el.textContent=text;return Promise.resolve();}
    return new Promise(resolve=>{let i=0;function step(){if(myRun!==typeRunId)return;el.textContent=text.slice(0,i);const cursor=document.createElement('span');cursor.className='pw-cmd-cursor';el.appendChild(cursor);if(i<text.length){i++;setTimeout(step,speed);}else resolve();}step();});
  }

  function selectProject(i,moveFocus){
    if(i===currentIndex)return;
    if(currentIndex>=0){panels[currentIndex].stop();panels[currentIndex].el.classList.remove('active');panels[currentIndex].el.hidden=true;panels[currentIndex].banner.classList.remove('show');panels[currentIndex].content.classList.remove('show');tabs[currentIndex].setAttribute('aria-selected','false');tabs[currentIndex].tabIndex=-1;}
    currentIndex=i;const panel=panels[i];tabs[i].setAttribute('aria-selected','true');tabs[i].tabIndex=0;if(moveFocus)tabs[i].focus();panel.el.hidden=false;panel.el.classList.add('active');
    typeCommand(panel.cmdline,'$ cat '+panel.file).then(()=>{if(currentIndex!==i)return;panel.banner.classList.add('show');panel.content.classList.add('show');scrambleInto(panel.titleEl,panel.title,550);if(sectionVisible)panel.start();});
  }

  sidebar.addEventListener('keydown',e=>{
    const keys=['ArrowDown','ArrowRight','ArrowUp','ArrowLeft','Home','End'];if(!keys.includes(e.key))return;e.preventDefault();let next=currentIndex;
    if(e.key==='ArrowDown'||e.key==='ArrowRight')next=(currentIndex+1)%tabs.length;else if(e.key==='ArrowUp'||e.key==='ArrowLeft')next=(currentIndex-1+tabs.length)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;selectProject(next,true);
  });

  const headerIO=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');scrambleInto(document.getElementById('pwEyebrowText'),WORK_CONFIG.eyebrow,450);scrambleInto(document.getElementById('pwHeadingText'),WORK_CONFIG.heading,700);headerIO.unobserve(entry.target);}}),{threshold:.3});
  headerIO.observe(document.getElementById('pwHeader'));
  const editorEl=document.getElementById('pwEditor');
  const revealIO=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in-view');selectProject(0,false);revealIO.unobserve(entry.target);}}),{threshold:.2});
  revealIO.observe(editorEl);
  const visIO=new IntersectionObserver(entries=>entries.forEach(entry=>{sectionVisible=entry.isIntersecting;if(sectionVisible&&currentIndex>=0)panels[currentIndex].start();else if(!sectionVisible&&currentIndex>=0)panels[currentIndex].stop();}),{threshold:.05});
  visIO.observe(editorEl);
})();