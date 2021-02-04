
jQuery(document).ready(function($) {
  function hideShow(scroll) {
    if (scroll >= 700) {
      $('.skill').hide();
    } else {
      $('.skill').show();
    }
  }
  hideShow($(this).scrollTop());
  $(document).scroll(function() {
    hideShow($(this).scrollTop());
  });
});
