/* Sidebar sticky */

$(function () {
  var $window = $(window)
  if ($sidebar !== null) {
    var $sidebar = $('.top-catalog__sort-panel')
    var $sidebarTop = $sidebar.position().top
    var $sidebarHeight = $sidebar.height()
    var $footer = $('.footer')
    var $footerTop = $footer.position().top

    $window.scroll(function (event) {
      $sidebar.addClass('fixed')
      var $scrollTop = $window.scrollTop()
      var $topPosition = Math.max(0, $sidebarTop - $scrollTop)

      if ($scrollTop + $sidebarHeight > $footerTop) {
        var $topPosition = Math.min(
          $topPosition,
          $footerTop - $scrollTop - $sidebarHeight
        )
      }

      $sidebar.css('top', $topPosition)
    })
  }
})

/* Filter panel visible */

var flag = true
var btn = document.getElementById('btn')

if (btn !== null) {
  btn.addEventListener('click', function () {
    if (flag) {
      panel.classList.add('visible')
    } else {
      panel.classList.remove('visible')
    }
    flag = !flag
  })
}

/* Slider range */

$(function () {
  $('#slider-range').slider({
    range: true,
    min: 5600,
    max: 30000,
    values: [0, 100000],
    slide: function (event, ui) {
      $('#min').val(ui.values[0] + ' ' + 'р.') +
        ' - ' +
        $('#max').val(ui.values[1] + ' ' + 'р.')
    },
  })
  $('#min').val($('#slider-range').slider('values', 0) + ' ' + 'р.') +
    ' ' +
    $('#max').val($('#slider-range').slider('values', 1) + ' ' + 'р.')
})

/* Scroll panel */

$(window).on('scroll', function () {
  if ($(window).scrollTop() > 0) $('.visible').addClass('visible-top')
  else $('.visible').removeClass('visible-top')
})

/* Sidebar footer */

jQuery(document).ready(function () {
  jQuery('.content, .sidebar').theiaStickySidebar({
    // Настройки
    additionalMarginTop: 30,
  })
})

/* Scroll sidebar */

$(window).on('scroll', function () {
  if ($(window).scrollTop() > 0) $('.sidebar').addClass('sidebar-top')
  else $('.sidebar').removeClass('sidebar-top')
})

/* Toggle color */

$(document).ready(function () {
  $('.content_toggle').click(function () {
    $('.content_block').slideToggle(300, function () {
      if ($(this).is(':hidden')) {
        $('.content_toggle').html('Показать больше')
      } else {
        $('.content_toggle').html('Показать меньше')
      }
    })

    return false
  })
})

/* Toggle material */

$(document).ready(function () {
  $('.material_toggle').click(function () {
    $('.content_material').slideToggle(300, function () {
      if ($(this).is(':hidden')) {
        $('.material_toggle').html('Показать больше')
      } else {
        $('.material_toggle').html('Показать меньше')
      }
    })

    return false
  })
})

/* Toggle filter */

$(document).ready(function () {
  if ($(window).width() >= '768') {
    $('.top-catalog__filter-toggle').click(function () {
      $('.top-catalog__filter-block').toggle(
        'slide',
        { direction: 'right' },
        300,
        function () {
          if ($(this).is(':hidden')) {
            $('.top-catalog__filter-toggle').html('Сортировка')
          } else {
            $('.top-catalog__filter-toggle').html('Сортировка')
          }
        }
      )

      return false
    })
  } else {
    $('.top-catalog__filter-toggle').click(function () {
      $('.top-catalog__filter-block').slideToggle(300)

      return false
    })
  }
})

/* Sort toggle */

$('.top-catalog__filter-sort').click(function (e) {
  e.preventDefault()
  $(this).find('.top-catalog__filter-arrow').toggleClass('active')
})

/* Fiter block mobile version */

$(document).ready(function () {
  if ($(window).width() <= '768') {
    $('.top-catalog__sort-button').click(function () {
      $('.top-catalog__sort-mobile').slideToggle(300, function () {
        if ($(this).is(':hidden')) {
          $('.top-catalog__sort-button').html('Фильтры')
        } else {
          $('.top-catalog__sort-button').html('Фильтры')
        }
      })

      return false
    })
  }
})

$(document).ready(function () {
  if ($(window).width() <= '768') {
    $('#top-catalog__filter-button-mobile').click(function () {
      $('.top-catalog__filter-block-mobile').slideToggle(300, function () {
        if ($(this).is(':hidden')) {
          $('#top-catalog__filter-button-mobile').html('Сортировка')
        } else {
          $('#top-catalog__filter-button-mobile').html('Сортировка')
        }
      })

      return false
    })
  }
})

/* Mobile slider range */

$(function () {
  $('#slider-range-mobile').slider({
    range: true,
    min: 5600,
    max: 30000,
    values: [0, 100000],
    slide: function (event, ui) {
      $('#min-mobile').val(ui.values[0] + ' ' + 'р.') +
        ' - ' +
        $('#max-mobile').val(ui.values[1] + ' ' + 'р.')
    },
  })
  $('#min-mobile').val(
    $('#slider-range-mobile').slider('values', 0) + ' ' + 'р.'
  ) +
    ' ' +
    $('#max-mobile').val(
      $('#slider-range-mobile').slider('values', 1) + ' ' + 'р.'
    )
})

/* Color mobile */

$(document).ready(function () {
  $('.accordion-title--footer').on('click', f_acc)
})
function f_acc() {
  $('.footer-accordion-content').not($(this).next()).slideUp(300)
  $(this).next().slideToggle(300)
}

/* Sidebar active */

$(function () {
  var location = window.location.href
  var cur_url = '/' + location.split('/').pop()

  $('.sidebar__item').each(function () {
    var link = $(this).find('a').attr('href')

    if (cur_url == link) {
      $(this).addClass('active')
    }
  })
})
