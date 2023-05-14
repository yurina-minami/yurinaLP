$(function () {
    $(".hamburger").click(function () {
      $(this).toggleClass("active");
      $("nav").toggleClass("active");
    });

    $(".nav-links").click(function () {
        $(".hamburger").toggleClass("active");
        $("nav").toggleClass("active");
      });
});