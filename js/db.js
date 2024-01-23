/* relativeGov */
let closeDB = document.querySelector(".dbClose");
let searchTab = document.querySelector(".dbSearch");
let dbButton = document.querySelector(".dbBtn");
console.log(closeDB, searchTab);

closeDB.addEventListener("click", function () {
  searchTab.style.display = "none";
  dbButton.style.rotate = "180deg";
});

dbButton.addEventListener("click", function () {
  searchTab.style.display = "block";
  dbButton.style.rotate = "0deg";
});
