//настройки fancybox
$.fancybox.defaults.autoFocus = false;
$.fancybox.defaults.touch = false;
$.fancybox.defaults.hash = false;
$.fancybox.defaults.toolbar = false;
$.fancybox.defaults.i18n.en.CLOSE = "Закрыть";
$.fancybox.defaults.i18n.en.NEXT = "Вперёд";
$.fancybox.defaults.i18n.en.PREV = "Назад";

function closeMainMenu(evt) {
  if (!$('.main-menu__inner').is(evt.target) && $('.main-menu__inner').has(evt.target).length === 0) {
    $('body').removeClass('overflow');
    $('.header__dropdown').removeClass('is-open');
    document.removeEventListener('click', closeMainMenu);
	}
}

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
  document.removeEventListener('click', closeMainMenu);
  return false;
});

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

//табы
$(document).on('click', '.js-tabs', function () {
  $('.js-tabs').removeClass('is-active');
  $(this).addClass('is-active');
  $('.tabs[data-tabs="'+$(this).closest('.tabs-nav').attr('data-tabs')+'"] .tab').removeClass('is-active');
  $('.tabs[data-tabs="'+$(this).closest('.tabs-nav').attr('data-tabs')+'"] .tab[data-target="'+$(this).attr('data-target')+'"]').addClass('is-active');
  return false;
});

$(document).ready(function () {
  //кастомный селект
	$('.js-select').each(function() {
   var $p = $(this).closest('.select-wrapper');
   $(this).select2({
		 minimumResultsForSearch: Infinity,
     dropdownPosition: 'below',
     dropdownParent: $p
   });
	}).on("select2:open", function (e) {
		var $p = $(this).closest('.select-wrapper');
		$p.addClass('open');
	}).on("select2:close", function (e) {
		var $p = $(this).closest('.select-wrapper');
		$p.removeClass('open');
	});
});
