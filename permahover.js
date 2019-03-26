var $tabs = $('.tab');
$tabs.hover(function() {
  $tabs.not($(this)).removeClass('last');
  $(this).addClass('last');
})
