$(document).ready(function() {
  $('.c-hide-sidebar').hide();
  $('.c-show-sidebar').on('click', function() {
    $('.c-vertical-nav').removeClass('c-vertical-nav-closed');
    $('.c-show-sidebar').hide();
    $('.c-hide-sidebar').show();
  });
  $('.c-hide-sidebar').on('click', function() {
    $('.c-vertical-nav').addClass('c-vertical-nav-closed');
    $('.c-hide-sidebar').hide();
    $('.c-show-sidebar').show();
  });
});


// function toggleSidebar() {
//   alert('menu');
//   el = document.querySelector('div.c-vertical-nav');
//   el.className = el.className + ' c-vertical-nav-closed';
// };
//
// var menuToggle = document.querySelectorAll("body");
// //menuToggle.addEventListener('click', toggleSidebar, false);
//
// toggleSidebar();
