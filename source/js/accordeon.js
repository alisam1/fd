/* Footer accordion */

let items = document.querySelectorAll('.accordion button')

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded')

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false')
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true')
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion))

/* Footer */

$(document).ready(function () {
  if ($(window).width() < 1280) {
    $('.footer__item--title').on('click', f_acc)
  }
})
function f_acc() {
  $('.footer-accordion-content').not($(this).next()).slideUp(300)
  $(this).next().slideToggle(300)
}

/* Color mobile */

$(document).ready(function () {
  $('.top-catalog__sort-check-title').on('click', f_acc)
})
function f_acc() {
  $('.top-catalog__sort__block-mobile').not($(this).next()).slideUp(300)
  $(this).next().slideToggle(300)
}
