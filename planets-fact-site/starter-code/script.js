// Initialization
const btnMobileMenu = document.querySelector(`.btn-mobile-nav`);
const nav = document.querySelector(`.main-nav`);
const main = document.querySelector(`.main`);

const btnOverview = document.querySelector(`.btn-overview`);
const btnInternal = document.querySelector(`.btn-internal`);
const btnSurface = document.querySelector(`.btn-surface`);

const btns = [btnOverview, btnInternal, btnSurface];

const elOverview = document.querySelector(`.overview`);
const elInternal = document.querySelector(`.internal`);
const elSurface = document.querySelector(`.surface`);

const elements = [elOverview, elInternal, elSurface];

const imgOverview = document.querySelector(`.img-overview`);
const imgInternal = document.querySelector(`.img-internal`);
const imgSurface = document.querySelector(`.img-surface`);

const imgs = [imgOverview, imgInternal, imgSurface];

// Event Listeners

// Mobile Menu Event Listener
btnMobileMenu.addEventListener(`click`, function () {
  nav.classList.toggle("nav-open");
  main.classList.toggle("hidden");
});

// Content Event Listeners
btnOverview.addEventListener(`click`, function () {
  for (let i = 0; i < 3; i++) {
    btns[i].classList.remove(`btn-active`);
    elements[i].classList.add(`hidden`);
    imgs[i].classList.add(`hidden`);
  }
  btnOverview.classList.add(`btn-active`);
  elOverview.classList.remove(`hidden`);
  imgOverview.classList.remove(`hidden`);
});

btnInternal.addEventListener(`click`, function () {
  for (let i = 0; i < 3; i++) {
    btns[i].classList.remove(`btn-active`);
    elements[i].classList.add(`hidden`);
    imgs[i].classList.add(`hidden`);
  }
  btnInternal.classList.add(`btn-active`);
  elInternal.classList.remove(`hidden`);
  imgInternal.classList.remove(`hidden`);
});

btnSurface.addEventListener(`click`, function () {
  for (let i = 0; i < 3; i++) {
    btns[i].classList.remove(`btn-active`);
    elements[i].classList.add(`hidden`);
    imgs[i].classList.add(`hidden`);
  }
  btnSurface.classList.add(`btn-active`);
  elSurface.classList.remove(`hidden`);
  imgOverview.classList.remove(`hidden`);
  imgSurface.classList.remove(`hidden`);
});
