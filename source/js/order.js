/* Steps */
var frmInfoFirst = $('#frmInfoFirst')
var frmInfoValidatorFirst = frmInfoFirst.validate({
  validClass: 'success',
  errorClass: 'error help-inline',
  highlight: function (element, errorClass, validClass) {
    $('#frmInfoFirst').addClass(errorClass).removeClass(validClass)
  },
  unhighlight: function (element, errorClass, validClass) {
    $('#frmInfoFirst').removeClass(errorClass).addClass(validClass)
    $('.order__info').css('display', 'block')
  },
})

var frmInfo = $('#frmInfo')
var frmInfoValidator = frmInfo.validate()

var frmLogin = $('#frmLogin')
var frmLoginValidator = frmLogin.validate()

var frmMobile = $('#frmMobile')
var frmMobileValidator = frmMobile.validate()

$('#demo').steps({
  onChange: function (currentIndex, newIndex, stepDirection) {
    // step1
    if (currentIndex === 0) {
      if (stepDirection === 'forward') {
        return frmInfoFirst.valid()
      }
    }
    // step2
    if (currentIndex === 1) {
      if (stepDirection === 'forward') {
        return frmInfo.valid()
      }
      if (stepDirection === 'backward') {
        frmInfoValidator.resetForm()
      }
    }
    // step4
    if (currentIndex === 3) {
      if (stepDirection === 'forward') {
        return frmLogin.valid()
      }
      if (stepDirection === 'backward') {
        frmLoginValidator.resetForm()
      }
    }
    // step5
    if (currentIndex === 4) {
      if (stepDirection === 'forward') {
        return frmMobile.valid()
      }
      if (stepDirection === 'backward') {
        frmMobileValidator.resetForm()
      }
    }
    return true
  },
  onFinish: function () {
    alert('Wizard Completed')
  },
})

/* Add class */

$(document).ready(function () {
  if ($('.frmInfoFirst').hasClass('success')) {
    $('.test-block').css('display', 'block')
    console.log(111)
  } else {
    console.log(111)
  }
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
    $(terms).fadeIn(200)
  })
})
