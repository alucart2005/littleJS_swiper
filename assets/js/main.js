const swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 15,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  
});