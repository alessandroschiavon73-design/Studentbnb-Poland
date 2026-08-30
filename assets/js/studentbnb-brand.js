document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.brand').forEach(b=>{const labels=[...b.children].filter(e=>e.tagName==='SPAN'&&!e.classList.contains('brand-icon')),l=labels[labels.length-1];if(!l)return;const s=l.querySelector('small'),h=s?s.outerHTML:'';l.innerHTML='Student<strong>BnB</strong>'+h;});
  const hero=document.querySelector('.home-hero .hero-copy');
  const brand=document.querySelector('.site-header .brand');if(brand)brand.setAttribute('aria-label','StudentBnB home');
  if(hero){
    document.title='StudentBnB — Tymczasowe zakwaterowanie dla studentów | 1 tydzień, 2 tygodnie lub 1 miesiąc';
    const meta=document.querySelector('meta[name="description"]');if(meta)meta.setAttribute('content','Tymczasowe zakwaterowanie dla studentów w akademikach, mieszkaniach współdzielonych i mieszkaniach studenckich. Znajdź pokój na tydzień, dwa tygodnie lub miesiąc na Erasmus, praktyki, kursy lub krótki pobyt akademicki.');
    const h=hero.querySelector('h1'),p=hero.querySelector(':scope > p');hero.querySelectorAll('.studentbnb-tagline,.studentbnb-duration-options').forEach(el=>el.remove());
    if(h){h.innerHTML='Zamieszkaj na chwilę w samym środku <span>studenckiego życia.</span>';const t=document.createElement('div');t.className='studentbnb-tagline';t.textContent='Twój tymczasowy pobyt wśród studentów.';h.before(t);}
    if(p){p.classList.add('studentbnb-concept');p.textContent='Znajdź pokój w akademiku, domu współdzielonym przez studentów lub mieszkaniu studenckim na Erasmus, praktyki, kursy, egzaminy albo kilka tygodni w innym mieście.';const d=document.createElement('div');d.className='studentbnb-duration-options';d.innerHTML='<strong>1 tydzień</strong><span>•</span><strong>2 tygodnie</strong><span>•</span><strong>1 miesiąc</strong>';p.after(d);}
    const sh=hero.querySelector('.search-card h2');if(sh)sh.textContent='Gdzie chcesz się zatrzymać?';
  }
  const intl=document.querySelector('.footer-international > strong');if(intl)intl.textContent='Na dłuższy pobyt: CasaStudent';
  const bottom=document.querySelectorAll('.footer-bottom span');if(bottom[0])bottom[0].textContent='© 2026 StudentBnB';if(bottom[1])bottom[1].textContent='Polska · studentbnb.pl';
  const login=document.querySelector('#login-title');if(login)login.textContent='Zaloguj się do StudentBnB';
  const f=document.querySelector('.site-footer .container')||document.querySelector('footer');if(f&&!f.querySelector('.casastudent-family')){const b=document.createElement('div');b.className='casastudent-family';b.innerHTML='StudentBnB jest przeznaczony na tymczasowe pobyty w społeczności studenckiej. Jeśli szukasz czegoś na dłużej, odwiedź <a href="https://casastudent.pl/">CasaStudent ↗</a>.';f.appendChild(b)}
});
