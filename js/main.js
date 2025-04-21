const header = document.querySelector(".header");

// offsetHeight: html 요소의 총 높이
const headerHeight = header.offsetHeight;
// console.log(headerHeight);

// 스크롤이 되면 익명함수 실행
document.addEventListener("scroll", () => {
  if (window.scrollY > headerHeight) {
    // console.log("window.scrollY가 headerHeight보다 큽니다.");
    // 클래스를 추가하는 메소드.(html헤더클래스에 header--dark를 추가하는 코드)
    // why? -> 기존에 css에만 header--dark를 만들어놨기 때문에 연결필요)
    header.classList.add("header--dark");
  } else {
    // console.log("window.scrollY가 headerHeight보다 작습니다.");
    // 클래스를 제거하는 메소드
    header.classList.remove("header--dark");
  }
});

const home = document.querySelector(".home__container");
const homeHeight = home.offsetHeight;
document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

const arrowUp = document.querySelector(".arrow-up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.style.opacity = 1;
  } else {
    arrowUp.style.opacity = 0;
  }
});

// a태크의 기본 동작을 막음. 익명함수에 e(임의의 변수)를 넣으면 arrowUp을 조작할 수 있음.
arrowUp.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const navbarMenu = document.querySelector(".header__menu");
const navbarToggle = document.querySelector(".header__toggle");
navbarToggle.addEventListener("click", () => {
  // toggle: 스위치같은 개념(open 클래스가 추가됐다 빠졌다 하게 됨.)
  navbarMenu.classList.toggle("open");
});

navbarMenu.addEventListener("click", () => {
  navbarMenu.classList.remove("open");
});
