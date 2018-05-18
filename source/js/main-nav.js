var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-header__button-menu');
var header = document.querySelector('.main-header');

navMain.classList.add('main-nav--closed');
header.classList.add('main-header--closed');

navToggle.addEventListener('click', function () {
  navMain.classList.toggle('main-nav--closed');
  header.classList.toggle('main-header--closed');
});
