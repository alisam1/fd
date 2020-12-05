/* Добавление класса к header */

$(document).ready(function () {
  if (window.location.pathname == '/reviews.html') {
    $('.header').addClass('white')
  }
})

/* Блок с ответом магазина */

$(document).ready(function () {
  $('.reviews__block-button').on('click', f_acc)
  console.log(091)
})
function f_acc() {
  $('.reviews__block-answer').not($(this).next()).slideUp(300)
  $(this).next().slideToggle(300)
}

/* Блок с модалкой */

/* Мобилка аккордеон */

$(document).ready(function () {
  $('.reviews__choise-mobile').on('click', f_acc)
})
function f_acc() {
  $('.reviews__info').not($(this).next()).slideUp(300)
  $(this).next().slideToggle(300)
}

/* Модалка с отзывом */

$(function () {
  $('.review-modal').click(function (e) {
    openPopup(this.className)
  })
  $(document).on('click', '#review_greet', function (e) {
    console.log(230)
    e.preventDefault()
    $.magnificPopup.open()
  })
})
