jQuery(document).ready(function( $ ) {
// menu mobile
$(function() {
  $(".e-mobile-menu__main-menu .menu-item-has-children > a").click(function(e) {
    e.preventDefault();
    $(this)
      .next("ul")
      .toggleClass("js-mobile-menu-open");
    $(".e-mobile-menu__main-menu .menu-item-has-children > a")
      .not(this)
      .next("ul")
      .removeClass("js-mobile-menu-open");
    $(".e-mobile-menu__main-menu .menu-item-has-children > a")
      .not(this)
      .removeClass("js-menu-active");
    $(this).toggleClass("js-menu-active");
  });
});
// menu desktop
$(function() {
  $(".c-desktop-menu > div > ul > .menu-item-has-children > a").click(function(
    e
  ) {
    e.preventDefault();
    $(this)
      .next("ul")
      .toggleClass("js-menu-open");
    $(".c-desktop-menu > div > ul > .menu-item-has-children > a")
      .not(this)
      .next("ul")
      .removeClass("js-menu-open");
    $(".c-desktop-menu > div > ul > .menu-item-has-children > a")
      .not(this)
      .removeClass("js-menu-active");
    $(this).toggleClass("js-menu-active");
  });
});
});
