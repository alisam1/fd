/* Горизонтальное меню на главной странице */

var swiper = new Swiper('.nav-bottom__slider.swiper-container', {
  slidesPerView: 6,
  slidesPerGroup: 6,
  spaceBetween: 30,
  centeredSlides: false,
  navigation: true,
  navigation: {
    nextEl: '.nav-bottom__arr.swiper-button-next',
    prevEl: '.nav-bottom__arr.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1280: {
      slidesPerView: 6,
      slidesPerGroup: 6,
      spaceBetween: 20,
    },
  },
})

/* Слайдер в разделе Bestsellers на главной странице */

var swiper_best = new Swiper('#swiper_best', {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
})

/* Слайдер в разделе Bestsellers на главной странице */

var swiper_best = new Swiper('#swiper_album', {
  slidesPerView: 3,
  spaceBetween: 30,
  centeredSlides: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
})

/* Card like */

$(function () {
  $('.card__img--like').click(function () {
    $(this).toggleClass('voted')
    preventDefault()
  })

  /* Card product like */

  $(function () {
    $('.card__img--like-black').click(function () {
      $(this).toggleClass('voted')
      return false
    })
  })

  /* Слайдер в разделе Bestsellers на главной странице */

  var swiper_best = new Swiper('#swiper_about', {
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  })
})
