$(function () {
  $('.popup-modal').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#username',
    modal: true,
  })
  $(document).on('click', '.popup-modal-dismiss', function (e) {
    e.preventDefault()
    $.magnificPopup.close()
  })
})

/* Promocode */

$(document).ready(function () {
  $('.basket-ok').click(function () {
    console.log(901)
    $('.basket__promo-congr').css('display', 'flex')
    return false
  })
})

$(document).ready(function () {
  $('.basket-close').click(function () {
    $('.basket__promo-congr').css('display', 'none')
    return false
  })
})
