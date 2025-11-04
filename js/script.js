// MOBILE MENU TOGGLE
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

//CAROUSEL
const carousel = document.getElementById('cardCarousel');

if (carousel) {
  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse drag support
  carousel.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
    carousel.classList.add('active');
  });

  carousel.addEventListener('mouseleave', () => {
    isDown = false;
    carousel.classList.remove('active');
  });

  carousel.addEventListener('mouseup', () => {
    isDown = false;
    carousel.classList.remove('active');
  });

  carousel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Touch (mobile) support
  let startTouchX = 0;
  carousel.addEventListener(
    'touchstart',
    (e) => {
      startTouchX = e.touches[0].pageX;
      scrollLeft = carousel.scrollLeft;
    },
    { passive: true }
  );

  carousel.addEventListener(
    'touchmove',
    (e) => {
      const x = e.touches[0].pageX;
      const walk = (x - startTouchX) * -1;
      carousel.scrollLeft = scrollLeft + walk;
    },
    { passive: true }
  );
}
