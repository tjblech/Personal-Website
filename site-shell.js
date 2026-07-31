(function(){
  const hero=document.getElementById('phRoot');
  const eyesWrap=document.getElementById('phEyesWrap');

  if(hero && eyesWrap){
    const oldHint=eyesWrap.querySelector('.ph-eyes-hint');
    if(oldHint) oldHint.remove();

    let nudge=document.getElementById('phEyesNudge');
    if(!nudge){
      nudge=document.createElement('div');
      nudge.className='ph-eyes-nudge';
      nudge.id='phEyesNudge';
      nudge.setAttribute('aria-hidden','true');
      nudge.innerHTML=`
        <svg width="46" height="34" viewBox="0 0 46 34" fill="none" aria-hidden="true">
          <path d="M43 4C34 6 21 9 12 16C7 20 5 24 6 29" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M2 22C3 25 4 28 6 30" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
          <path d="M11 27C9 29 7 30 5 30" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
        </svg>
        <span>psst, click these</span>
      `;
      eyesWrap.insertAdjacentElement('afterend',nudge);
    }

    const actions=document.getElementById('phActions');
    if(actions){
      Array.from(actions.querySelectorAll('.ph-action')).forEach(link=>{
        const href=link.getAttribute('href');
        if(href!=='#work' && href!=='resume.html') link.remove();
      });

      if(actions.classList.contains('show')) nudge.classList.add('show');
      else{
        const actionsObserver=new MutationObserver(()=>{
          if(actions.classList.contains('show')){
            nudge.classList.add('show');
            actionsObserver.disconnect();
          }
        });
        actionsObserver.observe(actions,{attributes:true,attributeFilter:['class']});
      }
    }
  }

  const nav=document.getElementById('snNav');

  if(nav){
    if(hero){
      const heroObserver=new IntersectionObserver(([entry])=>{
        nav.classList.toggle('show',!entry.isIntersecting);
      },{rootMargin:'-80px 0px 0px 0px',threshold:0});
      heroObserver.observe(hero);
    }else{
      nav.classList.add('show');
    }

    const links=Array.from(nav.querySelectorAll('.sn-link[data-section]'));
    const sections=links.map(link=>document.getElementById(link.dataset.section)).filter(Boolean);

    if(sections.length){
      const sectionObserver=new IntersectionObserver(entries=>{
        const visible=entries
          .filter(entry=>entry.isIntersecting)
          .sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
        if(!visible)return;
        links.forEach(link=>{
          const active=link.dataset.section===visible.target.id;
          link.classList.toggle('active',active);
          if(active)link.setAttribute('aria-current','page');
          else link.removeAttribute('aria-current');
        });
      },{rootMargin:'-28% 0px -58% 0px',threshold:[0,.1,.25,.5]});
      sections.forEach(section=>sectionObserver.observe(section));
    }
  }

  const year=document.getElementById('sfYear');
  if(year)year.textContent=String(new Date().getFullYear());
})();
