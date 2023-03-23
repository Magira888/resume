AOS.init();

const burgerIcon = document.querySelector(".burger__icon");
const mobileMenu = document.querySelector(".mobile-menu__item");

burgerIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("show-menu");
});
