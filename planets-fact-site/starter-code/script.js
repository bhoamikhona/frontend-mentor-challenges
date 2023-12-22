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

// Updating Content Based on Button Clicks
function updateView(btn, el, img, imgOverview) {
  for (let i = 0; i < 3; i++) {
    btns[i].classList.remove(`btn-active`);
    elements[i].classList.add(`hidden`);
    imgs[i].classList.add(`hidden`);
  }
  btn.classList.add(`btn-active`);
  el.classList.remove(`hidden`);
  img.classList.remove(`hidden`);

  if (btn === btnSurface) {
    imgOverview.classList.remove(`hidden`);
  }
}

btnOverview.addEventListener(`click`, function () {
  updateView(btnOverview, elOverview, imgOverview);
});

btnInternal.addEventListener(`click`, function () {
  updateView(btnInternal, elInternal, imgInternal);
});

btnSurface.addEventListener(`click`, function () {
  updateView(btnSurface, elSurface, imgSurface, imgOverview);
});
