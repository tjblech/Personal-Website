(function(){
  const nav=document.getElementById('snNav');
  const hero=document.getElementById('phRoot');

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
