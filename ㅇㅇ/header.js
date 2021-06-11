/* 회원가입 코드 새로 추가 */
let s_con = document.querySelector("#sign_container");
let front = document.querySelectorAll("div.front");
let back = document.querySelectorAll("div.back");
let menuSign = document.getElementById("signup");
let menuJoin = document.getElementById("join");
let cancel = document.querySelectorAll("div.exit");
let signChange1 = document.querySelector("#ok");
let signChange2 = document.querySelector("#ok2");

menuSign.addEventListener("click", () => {
  b_con.classList.add("active2");
  s_con.style.display = "block";

  for (let i = 0; i < back.length; i++) {
    front[i].style.display = "none";
    back[i].style.display = "grid";
  }
});

menuJoin.addEventListener("click", () => {
  b_con.classList.add("active2");
  s_con.style.display = "block";
  for (let i = 0; i < back.length; i++) {
    back[i].style.display = "none";
    front[i].style.display = "grid";
  }
});

signChange1.addEventListener("click", () => {
  for (let i = 0; i < back.length; i++) {
    front[i].style.display = "none";
    back[i].style.display = "grid";
  }
});
signChange2.addEventListener("click", () => {
  for (let i = 0; i < back.length; i++) {
    back[i].style.display = "none";
    front[i].style.display = "grid";
  }
});

for (let i = 0; i < cancel.length; i++) {
  cancel[i].addEventListener("click", function () {
    s_con.style.display = "none";
    b_con.classList.remove("active2");
  });
}
