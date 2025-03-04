jQuery(document).ready(function ($) {
    "use strict";
    /* Scroll to top
    ===================*/

    $.scrollUp({
        scrollText: '<i class="fa fa-long-arrow-up"></i>',
        easingType: 'linear',
        scrollSpeed: 2000,
        animation: 'fade'
    });

    // owlCarousel JS

        $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 10,
          nav: true,
          navText: [
            "<i class='fa fa-caret-left'></i>",
            "<i class='fa fa-caret-right'></i>"
          ],
          autoplay: true,
          autoplayHoverPause: true,
          responsive: {
            0: {
              items: 1
            },
            600: {
              items: 3
            },
            1000: {
              items: 5
            }
          }
        });
    // owlCarousel End

}(jQuery));