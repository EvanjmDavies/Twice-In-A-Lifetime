$(function(){
  $(window).scroll(function() {
    if($(window).scrollTop() >= 285) {
        console.log('it works');
      $('nav').addClass('scroll-nav');
    }
    else {
      $('nav').removeClass('scroll-nav');
    }
  });
});

$(document).ready(function(){
  $('.menu-button').click(function(){
    $('.nav-menu-dropdown').toggleClass('active');
  })
})
