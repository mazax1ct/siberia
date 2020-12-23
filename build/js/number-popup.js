$(document).ready(function () {
  if($('.js-number-slider').length) {
    $('.js-number-slider').slick({
      mobileFirst: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true
    });
  }
});

$("[data-fancybox]").fancybox({
		afterShow: function( instance, slide ) {
      $('.js-number-slider').slick('setPosition');
		}
	});
