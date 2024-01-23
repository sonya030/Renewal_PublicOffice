//변수선언
const loginBtn = document.querySelector(".btn-login");
const overlay = document.querySelector(".loginWrap");
const closeBtn = document.querySelector(".close_modal");
const responsiveLogin = document.querySelector(".join");
console.log(loginBtn, overlay, closeBtn);
//클릭핸들러
function toggleMemberLoginOverlay() {
  overlay.classList.toggle("active");
}
//버튼에 클릭 이벤트리스너 추가
loginBtn.addEventListener("click", toggleMemberLoginOverlay);
closeBtn.addEventListener("click", toggleMemberLoginOverlay);
responsiveLogin.addEventListener("click", toggleMemberLoginOverlay);
