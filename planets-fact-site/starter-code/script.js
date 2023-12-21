const btnMobileMenu = document.querySelector(`.btn-mobile-nav`);
const nav = document.querySelector(`.main-nav`);
const main = document.querySelector(`.main`);

btnMobileMenu.addEventListener(`click`, function () {
  nav.classList.toggle("nav-open");
  main.classList.toggle("hidden");
});
