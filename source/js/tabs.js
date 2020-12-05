$(function () {
  if ($(window).width() >= '1200') {
    $('.vertical__links').delegate('li:not(.chosen)', 'click', function () {
      console.log(901)
      $(this)
        .addClass('chosen')
        .siblings()
        .removeClass('chosen')
        .parents('.vertical__tabs')
        .find('.vertical-tabs-content')
        .hide()
        .eq($(this).index())
        .fadeIn(170)
    })
  }
})

/* Reviews */

$(function () {
  $('.reviews__links').delegate('li:not(.chosen)', 'click', function () {
    console.log(901)
    $(this)
      .addClass('chosen')
      .siblings()
      .removeClass('chosen')
      .parents('.reviews__tabs')
      .find('.reviews-tabs-content')
      .hide()
      .eq($(this).index())
      .fadeIn(170)
  })
})

$(function () {
  if ($(window).width() <= '1200') {
    $('.vertical-tabs-content').css('display', 'block')
    return false
  }
})
