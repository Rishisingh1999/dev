// animations.js — scroll reveal + simple parallax + smooth scroll
(function(){
  // Smooth scroll for anchor links
  document.addEventListener('click', function(e){
    const a = e.target.closest('a[href^="#"]');
    if(a){
      const href = a.getAttribute('href');
      if(href && href.startsWith('#')){
        const target = document.querySelector(href);
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      }
    }
  });

  // Intersection Observer for reveal animations
  const observerOpts = { root: null, rootMargin: '0px', threshold: 0.12 };
  const revealCb = (entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('revealed');
        // if it's one-time, unobserve
        if(!entry.target.dataset.repeat) observer.unobserve(entry.target);
      }
    });
  };
  const observer = new IntersectionObserver(revealCb, observerOpts);
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

  // subtle continuous float animation for hero accent elements
  // Parallax for elements with data-parallax attribute
  const parallaxEls = Array.from(document.querySelectorAll('[data-parallax]'));
  function onScroll(){
    const sc = window.scrollY;
    parallaxEls.forEach(el=>{
      const depth = parseFloat(el.getAttribute('data-parallax')) || 0.12;
      const movement = -(sc * depth);
      el.style.transform = `translateY(${movement}px)`;
    });
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  // initial call
  onScroll();

  // small helper: add animated class on load
  window.addEventListener('load', ()=>{
    document.documentElement.classList.add('animations-ready');
  });
})();
