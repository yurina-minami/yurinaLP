$(function () {
    $(".hamburger").click(function () {
      $(this).toggleClass("active");
      $("nav").toggleClass("active");
    });
});