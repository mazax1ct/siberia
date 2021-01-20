$(document).ready(function () {
  //запуск плавающего блока
  if ($(".js-float-block").length) {
    if ($("body").width() >= 768) {
      $(".js-float-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-float-block").stick_in_parent({
          offset_top: 120
        });
      }, 100);
    }
  }
});

//открепляем и перезапускаем прилипающий блок при резайзе
$(window).resize(function() {
  if ($(".js-float-block").length) {
    if ($("body").width() >= 768) {
      $(".js-float-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-float-block").stick_in_parent({
          offset_top: 120
        });
      }, 100);
    }
  }
});

//открепляем и перезапускаем прилипающий блок при повороте устройства
$(window).on("orientationchange", function(event) {
  if ($(".js-float-block").length) {
    if ($("body").width() >= 768) {
      $(".js-float-block").trigger("sticky_kit:detach");
      setTimeout(function() {
        $(".js-float-block").stick_in_parent({
          offset_top: 120
        });
      }, 100);
    }
  }
});
