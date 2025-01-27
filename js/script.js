$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,

        },
        600: {
            items: 2,

        },
        1000: {
            items: 2,

        }
    }
});

var btn = $('#btbtn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
