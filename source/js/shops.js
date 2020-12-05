$(document).ready(function () {
  $('.shops__city-mobile').on('click', f_acc)
})
function f_acc() {
  $('.shops__info').not($(this).next()).slideUp(300)
  $(this).next().slideToggle(300)
}
