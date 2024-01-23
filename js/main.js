var swiper = new Swiper(".mainSwiper", {
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
    disableOnInteraction: true,
  },
  breakpoints: {
    450: {
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
      },
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  },
});
