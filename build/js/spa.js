$(document).ready(function () {
  if($('.js-single-slider').length) {
    $('.js-single-slider').slick({
      mobileFirst: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      adaptiveHeight: true,
      dots: true
    });
  }
});
