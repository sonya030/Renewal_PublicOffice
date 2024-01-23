/* relativeGov */
let govclick = document.querySelector(".relateGov");
console.log(govclick);
function i() {
  govclick.classList.toggle("active");
}
govclick.addEventListener("click", i);

/* relativesite */
let siteclick = document.querySelector(".relateSite");
console.log(siteclick);
function j() {
  siteclick.classList.toggle("active");
}
siteclick.addEventListener("click", j);

/* footerSwiper */
/* 01 */
var swiper = new Swiper(".footerSwiper01", {
  slidesPerView: 3,
  spaceBetween: 10,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  loopAdditionalSlides: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/* 02 */
var swiper = new Swiper(".footerSwiper02", {
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
