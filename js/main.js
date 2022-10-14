$(function(){

  $('.slider__top, .news__column-left').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
  });

  $('select').styler();

  $('.header__menu .header__menu-burger').on('click', function(){
    $('.header__menu .header__menu-links').slideToggle();
  });

});