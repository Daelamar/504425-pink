var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-header__button-menu');
var navTop = document.querySelector('.main-header__top-nav');

navMain.classList.add('main-nav--closed');
navTop.classList.add('main-header__top-nav--closed');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--closed');
  navTop.classList.toggle('main-header__top-nav--closed');
});
