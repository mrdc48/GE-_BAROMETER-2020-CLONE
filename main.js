
const menuIcon= document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');

 menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
  
});


jQuery(document).ready(function($) {
  function hideShow(scroll) {
    if (scroll >= 680) {
      $('.logo').hide();
    } else {
      $('.logo').show();
    }
  }
  hideShow($(this).scrollTop());
  $(document).scroll(function() {
    hideShow($(this).scrollTop());
  });
});


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




