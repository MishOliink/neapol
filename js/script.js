$(function(){
   // Slider
   $('.slider').slick({
      arrows: false,
      dots: true,
      speed: 700
   });

   // Menu nav toggle
   $('#nav_toggle').on('click', function(event) {
      event.preventDefault();

      $(this).toggleClass('active');
      $('#menu').toggleClass('active');
   });
});




