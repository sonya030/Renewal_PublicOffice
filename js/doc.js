var swiper = new Swiper(".docSwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    clickable: "true",
  },
  threshold: 1,
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 10,
      centeredSlides: true,
    },
    450: {
      slidesPerView: 3,
      spaceBetween: 0,
      centeredSlides: true,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    },
    781: {
      slidesPerView: 5,
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },
    },
  },
  loop: true,
  slideToClickedSlide: true,
});
/*var swiper = new Swiper(".docSwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    780: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
  centeredSlides: true,
  loop: true,
  on: {
    slideChangeTransitionEnd: function () {
      var activeIndex = swiper.activeIndex;
      var slides = document.querySelectorAll(".swiper-slide");
      slides.forEach((slide, index) => {
        if (index === activeIndex) {
          slide.style.fontSize = "2rem";
          slide.style.opacity = "1";
        } else if (index === activeIndex - 1 || index === activeIndex + 1) {
          slide.style.fontSize = "1rem";
          slide.style.opacity = "0.5";
        } else {
          slide.style.fontSize = "1rem";
          slide.style.opacity = "0.5";
        }
      });
    },
  },
});
*/
