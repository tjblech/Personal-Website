(function(){
  const CONTACT_CONFIG={
    eyebrow:'get in touch',
    heading:"let's talk",
    intro:'Reach out about co-ops, internships, or just to talk shop.',
    meta:'Based in New England, open to co-op and internship opportunities.'
  };

  const wrap=document.getElementById('pcWrap');
  const eyebrowSR=document.getElementById('pcEyebrowSR');
  const eyebrowText=document.getElementById('pcEyebrowText');
  const headingSR=document.getElementById('pcHeadingSR');
  const headingText=document.getElementById('pcHeadingText');
  const intro=document.getElementById('pcIntro');
  const meta=document.getElementById('pcMeta');

  if(!wrap||!eyebrowSR||!eyebrowText||!headingSR||!headingText||!intro||!meta)return;

  eyebrowSR.textContent=CONTACT_CONFIG.eyebrow;
  headingSR.textContent=CONTACT_CONFIG.heading;
  intro.textContent=CONTACT_CONFIG.intro;
  meta.textContent=CONTACT_CONFIG.meta;

  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const CHARS='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#%&+=';

  function scrambleInto(element,finalText,duration=700){
    if(reduceMotion){
      element.textContent=finalText;
      return;
    }

    const started=performance.now();
    function frame(now){
      const progress=Math.min((now-started)/duration,1);
      const revealed=Math.floor(progress*finalText.length);
      let output='';

      for(let index=0;index<finalText.length;index++){
        output+=index<revealed||finalText[index]===' '
          ? finalText[index]
          : CHARS[Math.floor(Math.random()*CHARS.length)];
      }

      element.textContent=output;
      if(progress<1)requestAnimationFrame(frame);
      else element.textContent=finalText;
    }

    requestAnimationFrame(frame);
  }

  const revealObserver=new IntersectionObserver(entries=>{
    for(const entry of entries){
      if(!entry.isIntersecting)continue;
      entry.target.classList.add('in-view');
      scrambleInto(eyebrowText,CONTACT_CONFIG.eyebrow,450);
      scrambleInto(headingText,CONTACT_CONFIG.heading,750);
      revealObserver.unobserve(entry.target);
    }
  },{threshold:.35});
  revealObserver.observe(wrap);

  (function(){
    const canvas=document.getElementById('pcCanvas');
    const section=document.getElementById('contact');
    if(!canvas||!section)return;

    const context=canvas.getContext('2d');
    if(!context)return;

    const BACKGROUND='#161220';
    const NODE_COLOR='rgba(226,169,178,.5)';
    const CORE_COLOR='#e2a9b2';
    const faint=alpha=>`rgba(226,169,178,${(alpha*.4).toFixed(3)})`;

    let nodes=[];
    let running=false;
    let startTime=performance.now();
    let width=1;
    let height=1;

    function resize(){
      const rect=section.getBoundingClientRect();
      const ratio=Math.min(window.devicePixelRatio||1,2);
      width=Math.max(1,rect.width);
      height=Math.max(1,rect.height);
      canvas.width=Math.round(width*ratio);
      canvas.height=Math.round(height*ratio);
      context.setTransform(ratio,0,0,ratio,0,0);

      const count=Math.max(14,Math.round((width*height)/26000));
      nodes=Array.from({length:count},()=>({
        radius:30+Math.random()*Math.min(width,height)*.46,
        speed:(Math.random()*.25+.08)*(Math.random()<.5?-1:1),
        offset:Math.random()*Math.PI*2,
        size:1.2+Math.random()*1.6
      }));

      draw(2);
    }

    function draw(time){
      context.fillStyle=BACKGROUND;
      context.fillRect(0,0,width,height);

      const centerX=width/2;
      const centerY=height*.4;
      const points=nodes.map(node=>{
        const angle=node.offset+time*node.speed;
        return{
          x:centerX+Math.cos(angle)*node.radius,
          y:centerY+Math.sin(angle)*node.radius*.6,
          size:node.size
        };
      });

      const threshold=Math.min(width,height)*.32;
      for(let first=0;first<points.length;first++){
        for(let second=first+1;second<points.length;second++){
          const distance=Math.hypot(points[first].x-points[second].x,points[first].y-points[second].y);
          if(distance>=threshold)continue;
          context.strokeStyle=faint(1-distance/threshold);
          context.lineWidth=1;
          context.beginPath();
          context.moveTo(points[first].x,points[first].y);
          context.lineTo(points[second].x,points[second].y);
          context.stroke();
        }
      }

      for(const point of points){
        context.fillStyle=NODE_COLOR;
        context.beginPath();
        context.arc(point.x,point.y,point.size,0,Math.PI*2);
        context.fill();
      }

      context.fillStyle=CORE_COLOR;
      context.beginPath();
      context.arc(centerX,centerY,2.6,0,Math.PI*2);
      context.fill();
    }

    function loop(now){
      if(!running)return;
      draw((now-startTime)/1000);
      requestAnimationFrame(loop);
    }

    const resizeObserver=new ResizeObserver(resize);
    resizeObserver.observe(section);
    resize();

    if(reduceMotion)return;

    const visibilityObserver=new IntersectionObserver(entries=>{
      for(const entry of entries){
        if(entry.isIntersecting&&!running){
          running=true;
          startTime=performance.now();
          requestAnimationFrame(loop);
        }else if(!entry.isIntersecting){
          running=false;
        }
      }
    },{threshold:.05});
    visibilityObserver.observe(section);
  })();
})();
