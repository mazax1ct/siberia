$(document).ready(function () {
  if($('.js-programs-nav').length) {
    $('.js-programs-nav').slick({
      mobileFirst: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.js-programs-slider',
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }
      ]
    });
  }

  if($('.js-programs-slider').length) {
    $('.js-programs-slider').slick({
      mobileFirst: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true,
      asNavFor: '.js-programs-nav',
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
