let siteTabs = document.querySelectorAll(".siteMenu li a");
let siteContent = document.querySelectorAll(".siteCon div");
console.log(siteTabs, siteContent);
document.getElementById("sitetab01").style.display = "grid";

for (let b = 0; b < siteTabs.length; b++) {
  siteTabs[b].addEventListener("click", function (c) {
    c.preventDefault();
    let clickTabs = c.target.getAttribute("href");
    let conTarget = clickTabs.replace("#", "");
    for (let y = 0; y < siteContent.length; y++) {
      siteContent[y].style.display = "none";
    }
    document.getElementById(conTarget).style.display = "grid";
    for (let k = 0; k < siteTabs.length; k++) {
      siteTabs[k].classList.remove("active");
      c.target.classList.add("active");
    }
  });
}

let closeSitemap = document.querySelector(".closeSiteMap");
let siteMaps = document.querySelector(".siteTab");
let openSitemap = document.querySelector(".siteMap");

openSitemap.addEventListener("click", function () {
  siteMaps.style.display = "block";
});
closeSitemap.addEventListener("click", function () {
  siteMaps.style.display = "none";
});

//반응형시
let headerSitemap = document.querySelector(".headerNavi");
headerSitemap.addEventListener("click", function () {
  siteMaps.style.display = "flex";
});
