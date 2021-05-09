$(function () {
  AOS.init({
    offset: 80,
    duration: 1200,
  });
  $("#nav-btn").on("click", function () {
    $(this).toggleClass("-active");
    $("#nav").toggleClass("-active");
  });
  $(".pagetop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() === 0) {
      $(".pagetop").fadeOut();
    } else {
      $(".pagetop").fadeIn();
    }
  });
  $(".about").click(function () {
    var position = $(".sec01").offset().top-60;
    $("html, body").animate({ scrollTop: position }, "300");
  });
  $(".skills").click(function () {
    var position = $(".sec02").offset().top-60;
    $("html, body").animate({ scrollTop: position }, "300");
  });
  $(".services").click(function () {
    var position = $(".sec03").offset().top-60;
    $("html, body").animate({ scrollTop: position }, "300");
  });
  $(".works").click(function () {
    var position = $(".sec04").offset().top-60;
    $("html, body").animate({ scrollTop: position }, "300");
  });
  $(".contact").click(function () {
    var position = $(".sec05").offset().top-60;
    $("html, body").animate({ scrollTop: position }, "300");
  });
});
