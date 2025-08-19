(function(){
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.menu');
  if (toggle && menu){
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.classList.toggle('x');
    });
  }

  // Reduce motion respect
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq.matches){
    document.documentElement.style.setProperty('--motion', '0');
    document.querySelectorAll('.pulse').forEach(el => el.style.animation = 'none');
    const track = document.querySelector('.marquee__track');
    if (track) track.style.animation = 'none';
  }

  // Interactive tilt for portfolio cards
  document.querySelectorAll('.p-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const x = e.clientX - r.left, y = e.clientY - r.top;
      const rx = ((y / r.height) - .5) * -8;
      const ry = ((x / r.width) - .5) * 8;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
})();
