const toggle = document.querySelector(".page-header__toggle");
const nav = document.querySelector(".main-nav");

nav.classList.add("main-nav--closed");

toggle.classList.add("page-header__toggle--closed");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("page-header__toggle--opened");
  nav.classList.toggle("main-nav--opened");
  nav.classList.toggle("main-nav--closed");
});
