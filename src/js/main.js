//настройки fancybox
$.fancybox.defaults.hash = false;
$.fancybox.defaults.toolbar = false;
$.fancybox.defaults.i18n.en.CLOSE = "Закрыть";
$.fancybox.defaults.i18n.en.NEXT = "Вперёд";
$.fancybox.defaults.i18n.en.PREV = "Назад";

//открытие главного меню
$(document).on('click', '.js-menu-opener', function () {
  $('body').addClass('overflow');
  $('.header__dropdown').addClass('is-open');
  document.addEventListener('click', closeMainMenu);
  return false;
});

//закрытие главного меню
$(document).on('click', '.js-menu-closer', function () {
  $('body').removeClass('overflow');
  $('.header__dropdown').removeClass('is-open');
  return false;
});

function closeMainMenu(evt) {
  if (!$('.main-menu__inner').is(evt.target) && $('.main-menu__inner').has(evt.target).length === 0) {
    $('body').removeClass('overflow');
    $('.header__dropdown').removeClass('is-open');
    document.removeEventListener('click', closeMainMenu);
	}
}

//открытие закрытие блока выбора языковой версии
$(document).on('click', '.js-lang', function () {
  $(this).toggleClass('is-active');
  $(this).next('.lang__dropdown').toggleClass('is-open');
  return false;
});

//второй уровень меню
$(document).on('click', '.js-menu-lvl2', function () {
  if($(this).hasClass('is-active')) {
    $(this).removeClass('is-active');
    $('.main-menu__dropdown').removeClass('is-open');
    $('.main-menu__inner').removeClass('overflow');
  } else {
    $('.js-menu-lvl2').removeClass('is-active');
    $('.main-menu__dropdown').removeClass('is-open');
    $(this).addClass('is-active');
    $('.main-menu__inner').addClass('overflow');
    $(this).next('.main-menu__dropdown').addClass('is-open');
  }
  return false;
});

$(document).on('click', '.js-menu-lvl2-close', function () {
  $('.js-menu-lvl2').removeClass('is-active');
  $('.main-menu__inner').removeClass('overflow');
  $('.main-menu__dropdown').removeClass('is-open');
  return false;
});
