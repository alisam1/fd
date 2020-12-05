/* Color header in index.html */

$(document).ready(function () {
  if (window.location.pathname == '/') {
    $('.header').addClass('white')
  }
})

/* Burger visible block */

$(document).ready(function () {
  $('.header__item--link--menu').click(function () {
    $('.header__info').slideToggle(300, function () {
      if ($(this).is(':hidden')) {
        $('.header__item--link--menu').removeClass('cross')
        if ($('.header').hasClass('white')) {
          $('.header-desktop').removeClass('white-bg')
        }
      } else {
        $('.header__item--link--menu').addClass('cross')
        if ($('.header').hasClass('white')) {
          $('.header-desktop').addClass('white-bg')
        }
      }
    })

    return false
  })
})

/* Catalog visible block */

$(document).ready(function () {
  $('.header__item---catalog-link').mouseover(function () {
    console.log(891)
    $('.header-desktop').addClass('white-bg')
    $('.header__info-catalog').css({
      opacity: 1,
      'pointer-events': 'auto',
      display: 'block',
    })
  })

  $('.header__info-catalog').mouseleave(function () {
    console.log(901)
    $('.header-desktop').removeClass('white-bg')
    $(this).css({
      opacity: 0,
      'pointer-events': 'none',
    })
  })
})

/* Search visible block */

$(document).ready(function () {
  $('.header__link-search').click(function () {
    $('.header__info-search').slideToggle(300, function () {
      if ($(this).is(':hidden')) {
        $('.header__info-catalog').removeClass('cross')
        if ($('.header').hasClass('white')) {
          $('.header-desktop').removeClass('white-bg')
        }
      } else {
        $('.header__info-catalog').addClass('cross')
        if ($('.header').hasClass('white')) {
          $('.header-desktop').addClass('white-bg')
        }
      }
    })

    return false
  })
})

/* !!! Mobile version !!! */

$(document).ready(function () {
  $('.header__item--link').click(function () {
    $('.header-mobile__navigation').toggle(
      'slide',
      { direction: 'left' },
      300,
      function () {
        if ($(this).is(':hidden')) {
          $('.header-mobile__navigation').addClass('open')
          $('body').css('overflow', 'auto')
        } else {
          $('.header-mobile__navigation').removeClass('open')
          $('body').css('overflow', 'hidden')
        }
      }
    )

    return false
  })
})

$(document).ready(function () {
  $('.header-mobile__cross').click(function () {
    $('.header-mobile__navigation').toggle(
      'slide',
      { direction: 'left' },
      300,
      function () {
        $('.header-mobile__navigation').removeClass('open')
      }
    )

    return false
  })
})

/* Avtorization modal */

$(document).ready(function () {
  $('.popup-with-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function () {
        if ($(window).width() < 700) {
          this.st.focus = false
        } else {
          this.st.focus = '#name'
        }
      },
    },
  })
})

/* Registration form desktop */

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

/* Tabs form */

$(function () {
  var tabs = $('.tabs li a')

  tabs.click(function () {
    var terms = this.hash.replace('/', '')
    tabs.removeClass('active')
    $(this).addClass('active')
    $('#terms').find('div').hide()
    $('#terms').find('.custom-form-group').show()
    $(terms).fadeIn(200)
  })
})

/* All form */

const inputs = [...document.querySelectorAll('input')]

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    if (input.value !== '') {
      input.classList.add('input_filled')
    } else {
      input.classList.remove('input_filled')
    }
  })
})

let birthday = document.getElementById('personal-birthday')
if (birthday !== null && birthday.value == '') {
  if (birthday !== '') {
    birthday.classList.add('input_filled')
  } else {
    birthday.classList.remove('input_filled')
  }
}

/* Form birthday */

$(function () {
  if ($('#personal-birthday').length) {
    $('#personal-birthday').mask('99.99.9999')
  }
})

/* Body overflow */

$(function () {
  if ($('.header-mobile__navigation').css('display') == 'block') {
    console.log(234)
    $('body').css('overflow', 'hidden')
  }
})

$(document).ready(function () {
  $('.header__reg-title-avtor').click(function () {
    $('#two').css('display', 'block')
    $('#one').css('display', 'none')
    return false
  })
})

$(document).ready(function () {
  $('.header__reg-title-reg').click(function () {
    $('#one').css('display', 'block')
    $('#two').css('display', 'none')
    return false
  })
})
