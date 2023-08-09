window.addEventListener("scroll", function() {
  var header = document.querySelector(".header");
  if (window.scrollY > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

//Hamburger-menu
const headerBars = document.querySelector('.header__bar')
const overlay = document.querySelector('.header__overlay')
const headerRight = document.querySelector('.header__right')
const body = document.querySelector('body')

headerBars.addEventListener('click', () => {
  overlay.classList.toggle('show-overlay')
  headerRight.classList.toggle('show-menu')
  body.classList.toggle('overflow')
})

overlay.addEventListener('click', () => {
  overlay.classList.remove('show-overlay')
  headerRight.classList.remove('show-menu')
  body.classList.remove('overflow')
})