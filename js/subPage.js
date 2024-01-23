document.addEventListener("DOMContentLoaded", function () {
  let clickableElement = document.querySelector(".goSubpage");

  let targetURL = "../subPage/index.html";
  let clickHandler = function () {
    document.location.href = targetURL;
  };
  clickableElement.addEventListener("click", clickHandler);
});
