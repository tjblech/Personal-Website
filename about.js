(function(){
  const ABOUT_CONFIG={
    eyebrow:'about',
    heading:'a bit more about me',
    story:"I've had my head buried in a screen for as long as I can remember, mostly games, mostly just poking at how things worked. At some point I realized I could actually build the things I was obsessed with, and that turned into a real interest in computer science. Now, with how much faster AI makes it to go from idea to working software, I can build things that actually matter, like Common Ground, a lot quicker than I used to be able to."
  };

  const eyebrowSR=document.getElementById('paEyebrowSR');
  const eyebrowText=document.getElementById('paEyebrowText');
  const headingSR=document.getElementById('paHeadingSR');
  const headingText=document.getElementById('paHeadingText');
  const story=document.getElementById('paStory');
  if(!eyebrowSR||!eyebrowText||!headingSR||!headingText||!story)return;

  eyebrowSR.textContent=ABOUT_CONFIG.eyebrow;
  headingSR.textContent=ABOUT_CONFIG.heading;
  story.textContent=ABOUT_CONFIG.story;

  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const CHARS='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&+=';

  function scrambleInto(el,finalText,duration=700){
    if(reduceMotion){el.textContent=finalText;return;}
    const start=performance.now();
    function frame(now){
      const progress=Math.min((now-start)/duration,1);
      const revealed=Math.floor(progress*finalText.length);
      let output='';
      for(let i=0;i<finalText.length;i++){
        output+=i<revealed||finalText[i]===' '?finalText[i]:CHARS[Math.floor(Math.random()*CHARS.length)];
      }
      el.textContent=output;
      if(progress<1)requestAnimationFrame(frame);else el.textContent=finalText;
    }
    requestAnimationFrame(frame);
  }

  const header=document.getElementById('paHeader');
  const headerObserver=new IntersectionObserver(entries=>{
    for(const entry of entries){
      if(!entry.isIntersecting)continue;
      entry.target.classList.add('in-view');
      scrambleInto(eyebrowText,ABOUT_CONFIG.eyebrow,450);
      scrambleInto(headingText,ABOUT_CONFIG.heading,700);
      headerObserver.unobserve(entry.target);
    }
  },{threshold:.3});
  headerObserver.observe(header);

  const blockObserver=new IntersectionObserver(entries=>{
    for(const entry of entries){
      if(!entry.isIntersecting)continue;
      entry.target.classList.add('in-view');
      blockObserver.unobserve(entry.target);
    }
  },{threshold:.2});
  document.querySelectorAll('.pa-block').forEach(element=>blockObserver.observe(element));

  const barObserver=new IntersectionObserver(entries=>{
    for(const entry of entries){
      if(!entry.isIntersecting)continue;
      entry.target.classList.add('in-view');
      barObserver.unobserve(entry.target);
    }
  },{threshold:.4});
  document.querySelectorAll('.pa-bar-row').forEach((element,index)=>{
    element.style.transitionDelay=`${index*120}ms`;
    barObserver.observe(element);
  });

  (function(){
    const canvas=document.getElementById('paKnightCanvas');
    if(!canvas)return;
    const ctx=canvas.getContext('2d');
    const MOVES=[[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]];
    let cell=15,trail=[],position=[4,4],running=false,width=120,height=120;

    function setup(){
      const rect=canvas.parentElement.getBoundingClientRect();
      const dpr=Math.min(window.devicePixelRatio||1,2);
      width=rect.width||120;height=rect.height||120;cell=width/8;
      canvas.width=Math.max(1,Math.round(width*dpr));
      canvas.height=Math.max(1,Math.round(height*dpr));
      ctx.setTransform(dpr,0,0,dpr,0,0);
      trail=[position];
      draw();
    }

    function center(square){return[square[1]*cell+cell/2,square[0]*cell+cell/2];}
    function draw(){
      ctx.fillStyle='#12101a';ctx.fillRect(0,0,width,height);
      for(let row=0;row<8;row++)for(let column=0;column<8;column++)if((row+column)%2===0){
        ctx.fillStyle='rgba(154,107,168,.07)';ctx.fillRect(column*cell,row*cell,cell,cell);
      }
      ctx.lineWidth=1.4;
      for(let i=1;i<trail.length;i++){
        const [x1,y1]=center(trail[i-1]);const [x2,y2]=center(trail[i]);
        ctx.strokeStyle=`rgba(226,169,178,${.1+(i/trail.length)*.4})`;
        ctx.beginPath();ctx.moveTo(x1,y1);ctx.lineTo(x2,y2);ctx.stroke();
      }
      const [cx,cy]=center(position);ctx.fillStyle='rgba(227,193,127,.85)';ctx.beginPath();ctx.arc(cx,cy,3,0,Math.PI*2);ctx.fill();
    }

    function step(){
      const options=MOVES.map(([dr,dc])=>[position[0]+dr,position[1]+dc]).filter(([row,column])=>row>=0&&row<8&&column>=0&&column<8);
      if(!options.length){trail=[position];return;}
      position=options[Math.floor(Math.random()*options.length)];
      trail.push(position);if(trail.length>7)trail.shift();
    }

    function frame(){if(!running)return;draw();requestAnimationFrame(frame);}
    setup();
    new ResizeObserver(setup).observe(canvas.parentElement);
    if(reduceMotion)return;
    setInterval(step,650);
    const visibilityObserver=new IntersectionObserver(entries=>{
      for(const entry of entries){
        if(entry.isIntersecting&&!running){running=true;requestAnimationFrame(frame);}else if(!entry.isIntersecting){running=false;}
      }
    },{threshold:.1});
    visibilityObserver.observe(canvas);
  })();
})();