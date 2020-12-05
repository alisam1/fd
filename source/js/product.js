$(function () {
  var tabs = $('.product-tabs li a')

  tabs.click(function () {
    var terms = this.hash.replace('/', '')
    tabs.removeClass('active')
    $(this).addClass('active')
    $('#product-terms').find('div').hide()
    $(terms).fadeIn(200)
  })
})

/* Vertical slider Slick */

$(function () {
  $('.product-info__slider-preview').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.product-info__slider-thumb',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          swipe: true,
          dots: true,
          arrows: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  })
  $('.product-info__slider-thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.product-info__slider-preview',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  })
})

$(document).ready(function () {
  if ($(window).width() >= '1280') {
    $('.product-info').addClass('container')
  }
})

/* Test */

$(function () {
  $('.product-info__color-get').each(function () {
    $(this).on('click', function () {
      console.log(123)
      $(this).toggleClass('active')
      return false
    })
  })
})

$(function () {
  $('.choise').each(function () {
    $(this).on('click', function () {
      $(this).toggleClass('active')
      $('.product__size-choise').css('display', 'none')
      return false
    })
  })
})

$('input:radio[name="options[size]"]').on('change', function () {
  if ($(this).is(':checked')) {
    console.log(432)
    $('.product__size-choise').css('display', 'none')
  }
})

/* Product like */

$(function () {
  $('.product-info__basket-like').click(function () {
    $(this).toggleClass('voted')
    return false
  })
})

/* Slider zoom */

$(document).ready(function () {
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
    },
  })
})
