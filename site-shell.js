(function(){
  const hero=document.getElementById('phRoot');
  const eyesWrap=document.getElementById('phEyesWrap');

  if(hero&&eyesWrap){
    eyesWrap.querySelector('.ph-eyes-hint')?.remove();
    let nudge=document.getElementById('phEyesNudge');
    if(!nudge){
      nudge=document.createElement('div');
      nudge.className='ph-eyes-nudge';
      nudge.id='phEyesNudge';
      nudge.setAttribute('aria-hidden','true');
      nudge.innerHTML='<svg width="46" height="34" viewBox="0 0 46 34" fill="none" aria-hidden="true"><path d="M43 4C34 6 21 9 12 16C7 20 5 24 6 29" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M2 22C3 25 4 28 6 30" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M11 27C9 29 7 30 5 30" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg><span>psst, click me</span>';
      eyesWrap.insertAdjacentElement('afterend',nudge);
    }
    const actions=document.getElementById('phActions');
    if(actions){
      Array.from(actions.querySelectorAll('.ph-action')).forEach(link=>{
        const href=link.getAttribute('href');
        if(href!=='#work'&&href!=='resume.html')link.remove();
      });
      if(actions.classList.contains('show'))nudge.classList.add('show');
      else{
        const observer=new MutationObserver(()=>{
          if(actions.classList.contains('show')){nudge.classList.add('show');observer.disconnect();}
        });
        observer.observe(actions,{attributes:true,attributeFilter:['class']});
      }
    }
  }

  const tagline=document.getElementById('phTagline');
  if(tagline){
    const desired='a computer science and business student at Northeastern, interested in startups, software engineering, and quant.';
    const syncTagline=()=>{if(tagline.textContent&&tagline.textContent!==desired)tagline.textContent=desired;};
    syncTagline();
    new MutationObserver(syncTagline).observe(tagline,{childList:true,characterData:true,subtree:true});
  }

  function upgradeProject(fileName,url,previewUrl){
    const tabs=Array.from(document.querySelectorAll('.pw-file-tab'));
    const tab=tabs.find(item=>item.textContent.trim()===fileName);
    if(!tab)return;
    const panel=document.getElementById(tab.getAttribute('aria-controls'));
    if(!panel)return;
    const content=panel.querySelector('.pw-panel-content');
    if(!content)return;
    const status=content.querySelector('.pw-panel-status');
    if(status){
      const link=document.createElement('a');
      link.className='pw-panel-link';
      link.href=url;link.target='_blank';link.rel='noopener noreferrer';link.innerHTML='view project &#8599;';
      status.replaceWith(link);
    }
    if(previewUrl){
      content.querySelector('.pw-shot,.pw-shot-live')?.remove();
      const tags=content.querySelector('.pw-panel-tags');
      const shot=document.createElement('div');
      shot.className='pw-shot pw-shot-live';
      shot.innerHTML='<div class="pw-shot-chrome"><span class="pw-shot-dot red"></span><span class="pw-shot-dot yellow"></span><span class="pw-shot-dot green"></span><span class="pw-shot-url">'+previewUrl.replace(/^https?:\/\//,'').replace(/\/$/,'')+'</span></div><div class="pw-live-frame-wrap"><iframe class="pw-live-frame" src="'+previewUrl+'" title="'+fileName.replace(/\.md$/,'')+' live preview" loading="lazy" tabindex="-1" aria-hidden="true"></iframe></div>';
      tags?.insertAdjacentElement('afterend',shot);
    }
  }
  upgradeProject('common-ground.md','https://tjblech.github.io/Common-Ground/','https://tjblech.github.io/Common-Ground/');
  upgradeProject('measured-from-here.md','https://tjblech.github.io/Measured-From-Here/');
  upgradeProject('runway.md','https://tjblech.github.io/Runway/');
  upgradeProject('billiards-tournament-manager.md','https://tjblech.github.io/Billiards/','https://tjblech.github.io/Billiards/');

  let progress=document.querySelector('.sn-progress');
  if(!progress){
    progress=document.createElement('div');
    progress.className='sn-progress';
    progress.setAttribute('aria-hidden','true');
    progress.innerHTML='<div class="sn-progress-fill" id="snProgressFill"></div>';
    document.body.prepend(progress);
  }
  const progressFill=document.getElementById('snProgressFill');
  let progressTicking=false;
  function updateProgress(){
    const docHeight=document.documentElement.scrollHeight-window.innerHeight;
    const pct=docHeight>0?Math.min(100,Math.max(0,(window.scrollY/docHeight)*100)):0;
    if(progressFill)progressFill.style.width=pct+'%';
    progressTicking=false;
  }
  window.addEventListener('scroll',()=>{if(!progressTicking){requestAnimationFrame(updateProgress);progressTicking=true;}},{passive:true});
  window.addEventListener('resize',updateProgress);
  updateProgress();

  if(!document.querySelector('script[data-person-schema]')){
    const schema=document.createElement('script');
    schema.type='application/ld+json';
    schema.dataset.personSchema='';
    schema.textContent=JSON.stringify({
      '@context':'https://schema.org','@type':'Person',name:'TJ Blechman',url:'https://tjblech.github.io/',
      image:'https://tjblech.github.io/og-image.png',jobTitle:'Computer Science & Business Student',
      alumniOf:{'@type':'CollegeOrUniversity',name:'Northeastern University'},
      sameAs:['https://github.com/tjblech','https://www.linkedin.com/in/tj-blechman']
    });
    document.head.appendChild(schema);
  }

  const nav=document.getElementById('snNav');
  if(nav){
    if(hero){
      const heroObserver=new IntersectionObserver(([entry])=>nav.classList.toggle('show',!entry.isIntersecting),{rootMargin:'-80px 0px 0px 0px',threshold:0});
      heroObserver.observe(hero);
    }else nav.classList.add('show');
    const links=Array.from(nav.querySelectorAll('.sn-link[data-section]'));
    const sections=links.map(link=>document.getElementById(link.dataset.section)).filter(Boolean);
    if(sections.length){
      const sectionObserver=new IntersectionObserver(entries=>{
        const visible=entries.filter(entry=>entry.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
        if(!visible)return;
        links.forEach(link=>{
          const active=link.dataset.section===visible.target.id;
          link.classList.toggle('active',active);
          if(active)link.setAttribute('aria-current','page'); else link.removeAttribute('aria-current');
        });
      },{rootMargin:'-28% 0px -58% 0px',threshold:[0,.1,.25,.5]});
      sections.forEach(section=>sectionObserver.observe(section));
    }
  }
  const year=document.getElementById('sfYear');
  if(year)year.textContent=String(new Date().getFullYear());
})();
