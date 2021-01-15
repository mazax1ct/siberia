//переключение вида каталога
$(document).on('click', '.js-view', function () {
  $('.js-view').removeClass('is-active');
  $(this).addClass('is-active');
  $('.numbers-list').removeClass('list');
  $('.numbers-list').addClass($(this).attr('data-view'));
  return false;
});

//открытие фильтра
$(document).on('click', '.js-filter-opener', function () {
  $('.filter__popup').addClass('is-open');
  $('body').addClass('overflow');
  return false;
});

//закрытие фильтра
$(document).on('click', '.js-filter-closer', function () {
  $('.filter__popup').removeClass('is-open');
  $('body').removeClass('overflow');
  return false;
});

//открытие блока в фильтре
$(document).on('click', '.js-filter-item-toggler', function () {
  if($(this).hasClass('is-active')) {
    $(this).removeClass('is-active').next('.filter__item-dropdown').slideUp();
  } else {
    $('.js-filter-item-toggler').removeClass('is-active');
    $('.filter__item-dropdown').slideUp();
    $(this).addClass('is-active').next('.filter__item-dropdown').slideDown();
  }

  return false;
});

//слайдеры количества дней и человек
if ($('.js-days-slider').length) {
  var min_days = 1;
  var max_days = 30;
  $(".js-days-slider").ionRangeSlider({
    skin: "round",
    min: min_days,
    max: max_days,
    from: 1,
    grid: false,
    hide_min_max: true,
    hide_from_to: true,
    onChange: function (data) {
      $('.js-days').val(data.from);
    }
  });

  var days_range = $(".js-days-slider").data("ionRangeSlider");

  $('.js-days').on('change', function() {
    days_range.update({
      from: $('.js-days').val()
    });

    if($('.js-days').val() < min_days ) {
      $('.js-days').val(min_days);
      days_range.update({
        from: min_days
      });
    }

    if($('.js-days').val() > max_days ) {
      $('.js-days').val(max_days);
      days_range.update({
        from: max_days
      });
    }
  });
}

if ($('.js-guests-slider').length) {
  var min_guests = 1;
  var max_guests = 10;
  $(".js-guests-slider").ionRangeSlider({
    skin: "round",
    min: min_guests,
    max: max_guests,
    from: 1,
    grid: false,
    hide_min_max: true,
    hide_from_to: true,
    onChange: function (data) {
      $('.js-guests').val(data.from);
    }
  });

  var guests_range = $(".js-guests-slider").data("ionRangeSlider");

  $('.js-guests').on('change', function() {
    guests_range.update({
      from: $('.js-guests').val()
    });

    if($('.js-guests').val() < min_guests ) {
      $('.js-guests').val(min_guests);
      guests_range.update({
        from: min_guests
      });
    }

    if($('.js-guests').val() > max_guests ) {
      $('.js-guests').val(max_guests);
      guests_range.update({
        from: max_guests
      });
    }
  });
}

if ($('.js-childs-slider').length) {
  var min_childs = 1;
  var max_childs = 10;
  $(".js-childs-slider").ionRangeSlider({
    skin: "round",
    min: min_childs,
    max: max_childs,
    from: 1,
    grid: false,
    hide_min_max: true,
    hide_from_to: true,
    onChange: function (data) {
      $('.js-childs').val(data.from);
    }
  });

  var childs_range = $(".js-childs-slider").data("ionRangeSlider");

  $('.js-childs').on('change', function() {
    childs_range.update({
      from: $('.js-childs').val()
    });

    if($('.js-childs').val() < min_childs ) {
      $('.js-childs').val(min_childs);
      childs_range.update({
        from: min_childs
      });
    }

    if($('.js-childs').val() > max_childs ) {
      $('.js-childs').val(max_childs);
      childs_range.update({
        from: max_childs
      });
    }
  });
}
