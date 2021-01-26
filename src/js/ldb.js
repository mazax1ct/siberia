$(document).ready(function () {
  if($('.js-ldb-nav').length && $('body').width() < 1024) {
    $('.js-ldb-nav').slick({
      mobileFirst: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.js-ldb-slider',
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
      focusOnSelect: true
    });
  }

  if($('.js-ldb-slider').length && $('body').width() < 1024) {
    $('.js-ldb-slider').slick({
      mobileFirst: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true,
      asNavFor: '.js-ldb-nav',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            swipe: false,
            fade: true
          }
        }
      ]
    });
  }
});

$(document).on('click', '.ldb__nav-button', function () {
  $('.ldb__nav-button').removeClass('is-active');
  $(this).addClass('is-active');
  $('.ldb__slide').removeClass('is-active');
  $('.ldb__slide[data-target="'+$(this).attr('data-target')+'"]').addClass('is-active');
  return false;
});
