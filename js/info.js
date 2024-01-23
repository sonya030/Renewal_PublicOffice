/* notice */
let targetTab = document.querySelectorAll(".noticeTab li a");
let noticeContent = document.querySelectorAll(".noticeCon div");
console.log(targetTab, noticeContent);
document.getElementById("notice01").style.display = "block";

targetTab[0].classList.add("active");

for (let i = 0; i < targetTab.length; i++) {
  targetTab[i].addEventListener("click", function (e) {
    e.preventDefault();
    let clickTarget = e.target.getAttribute("href");
    let tabTarget = clickTarget.replace("#", "");
    for (let x = 0; x < noticeContent.length; x++) {
      noticeContent[x].style.display = "none";
    }
    document.getElementById(tabTarget).style.display = "block";
    for (let j = 0; j < targetTab.length; j++) {
      targetTab[j].classList.remove("active");
      e.target.classList.add("active");
    }
  });
}
/* pr */
let prTabs = document.querySelectorAll(".prTab li a");
let prContent = document.querySelectorAll(".prCon .prInner");
console.log(prTabs, prContent);
document.getElementById("pr01").style.display = "block";
prTabs[0].classList.add("active");

for (let k = 0; k < prTabs.length; k++) {
  prTabs[k].addEventListener("click", function (f) {
    f.preventDefault();
    let prTarget = f.target.getAttribute("href");
    let prtabTarget = prTarget.replace("#", "");

    for (let y = 0; y < prContent.length; y++) {
      prContent[y].style.display = "none";
    }
    document.getElementById(prtabTarget).style.display = "block";
    for (let l = 0; l < prTabs.length; l++) {
      prTabs[l].classList.remove("active");
      f.target.classList.add("active");
    }
  });
}

/* swiper */
var swiper = new Swiper(".prSwiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 1500,
  },
});
