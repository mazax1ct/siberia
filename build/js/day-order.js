$(document).ready(function () {
  if($('.js-timing-slider').length) {
    $('.js-timing-slider').slick({
      mobileFirst: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
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

  if($('.js-time-line').length && $('body').width() < 768) {
    $('.js-time-line').slick({
      mobileFirst: true,
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      centerMode: true,
      centerPadding: '0',
      asNavFor: '.js-timing-slider',
      focusOnSelect: true,
      variableWidth: true,
      swipe: false,
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

if($('body').width() > 767) {
  $(document).on('click', '.time-line__button', function () {
    $('.time-line__button').removeClass('is-active');
    $(this).addClass('is-active');
    var parentWidth = $(this).parent().parent().width();
    var leftOffset = parseInt($(this).parent().css("left"));
    var percent = leftOffset / parentWidth * 100;
    console.log(parentWidth, leftOffset, percent);

    $('.timing__mask').css('clip-path', 'polygon(0% 0%, '+percent+'% 0%, '+percent+'% 100%, 0% 100%)');
    $('.js-timing-slider.slick-initialized').slick('slickGoTo', $(this).parent().index());
    return false;
  });
}
