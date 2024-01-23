let quick = document.querySelector("#quickMenu");
let topButton = document.querySelectorAll("#topBtn");
let docElem = document.documentElement;
let scrollAmount;
console.log(
  "quick",
  quick,
  "topBtn",
  topBtn,
  "docElem",
  docElem,
  "scrollAmount",
  scrollAmount
);

window.addEventListener("scroll", function () {
  scrollAmount = docElem.scrollTop;
  console.log(scrollAmount);

  if (scrollAmount > 20) {
    quick.className = "visible";
  } else {
    quick.classList.remove("visible");
  }
});

topBtn.addEventListener("click", function (top) {
  top.preventDefault();
  let scrollInterval = setInterval(function () {
    if (scrollAmount != 0) {
      window.scrollBy(0, -20);
    } else {
      clearInterval(scrollInterval);
    }
  }, 10);
});
