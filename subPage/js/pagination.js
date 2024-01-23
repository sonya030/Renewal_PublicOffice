//한페이지에 보여질 행의 수와 테이블 행
let rowsPerPage = 10;
let rows = document.querySelectorAll("#my-table tbody tr");
let rowsCount = rows.length;
let pageCount = Math.ceil(rowsCount / rowsPerPage); //Math.ceil>>숫자반올림
let numbers = document.querySelector("#numbers");
let maxPageNum = 5;
console.log(rowsPerPage, rows, rowsCount, pageCount);

for (let i = 1; i <= pageCount; i++) {
  numbers.innerHTML += `<li><a href="">${i}</a></li>`;
}
//a 선택하기
let numberBtn = numbers.querySelectorAll("a");
console.log(numberBtn);
/*
변수.forEach(function(item,idx){

})
*/
numberBtn.forEach(function (item, idx) {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    displayRows(idx); //열리는 페이지 행 보여주는 함수
  });
});
function displayRows(idx) {
  let start = idx * rowsPerPage;
  let end = start + rowsPerPage;
  let rowsArray = [...rows]; //모든 행을 담은 배열
  //모든 행을 숨기고
  for (ra of rowsArray) {
    ra.style.display = "none";
  }
  //현재 페이지에 해당하는 행만 표시
  let newRows = rowsArray.slice(start, end);
  for (nr of newRows) {
    nr.style.display = "";
  }
  for (nb of numberBtn) {
    nb.classList.remove("active");
  }
  numberBtn[idx].classList.add("active");
}
//초기페이지 설정
displayRows(0);

document.querySelector(
  ".contentsAmount"
).innerHTML = `총 게시물 수 <span> ${rowsCount}</span> `;
