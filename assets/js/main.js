const swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 10,
    stretch: 0,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  
});