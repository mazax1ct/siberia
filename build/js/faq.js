$(document).ready(function () {
  if($('.js-faq-nav').length && $('body').width() < 768) {
    $('.js-faq-nav').slick({
      mobileFirst: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: '.js-faq-slider',
      prevArrow: '<button type="button" class="slick-prev slick-arrow" title="Назад"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_left"/></svg></button>',
      nextArrow: '<button type="button" class="slick-next slick-arrow" title="Вперед"><svg class="slick-arrow__icon" aria-hidden="true"><use xlink:href="#arrow_right"/></svg></button>',
      focusOnSelect: true
    });
  }

  if($('.js-faq-slider').length && $('body').width() < 768) {
    $('.js-faq-slider').slick({
      mobileFirst: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.js-faq-nav',
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

$(document).on('click', '.faq__nav-button', function () {
  $('.faq__nav-button').removeClass('is-active');
  $(this).addClass('is-active');
  $('.faq__slide').removeClass('is-active');
  $('.faq__slide[data-target="'+$(this).attr('data-target')+'"]').addClass('is-active');
  return false;
});

$(document).on('click', '.faq__item-title', function() {
  $(this).toggleClass('is-active');
  $(this).next('.faq__item-text').slideToggle();
  return false;
});
