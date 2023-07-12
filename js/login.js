const loginId = document.getElementById("login_email");
const loginPw = document.getElementById("login_pw");
const loginBtn = document.getElementById("login_btn");

loginId.addEventListener("keyup", color);
loginPw.addEventListener("keyup", color);
loginBtn.addEventListener("click", validationChk);

function validationChk() {
  let id = document.getElementById("login_email");
  let pw = document.getElementById("login_pw");

  let idChk = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  if (id.value == "") {
    alert("이메일을 입력하세요.");
    id.focus();
    return false;
  }

  if (pw.value == "") {
    alert("비밀번호를 입력하세요.");
    pw.focus();
    return false;
  }

  if (idChk.test(id.value) == false) {
    alert("이메일형식이 올바르지 않습니다.");
    id.focus();
    return false;
  } else {
    let setId = ["green@gmail.com", "green@naver.com", "green@hanmail.net"];
    let setPw = "green1234"


    for (let i = 0; i < setId.length; i++) {
      if (id.value == setId[i]) {
        if (pw.value == setPw) {
          moveToMain();
        } else {
          pw.value = "";
          alert("이메일과 비밀번호를 확인하세요.");
        }
      }
    }

  }
}

function color() {
  if (
    loginId.value.length > 0 &&
    loginId.value.indexOf("@") !== -1 &&
    loginPw.value.length >= 5
  ) {
    loginBtn.style.backgroundColor = "#FD8234";
    loginBtn.disabled = false;
  } else {
    loginBtn.style.backgroundColor = "#9a9a9a";
    loginBtn.disabled = true;
  }
}

function moveToMain() {
  location.replace("./logout.html");
}