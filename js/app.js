$(function() {

/* Slider */
$('.slick-item').slick({
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000
});


/* Slider navigation */
$('#slickSliderNext').on('click', function() {
    $('.slick-item').slick('slickPrev')
});

$('#slickSliderPref').on('click', function() {
    $('.slick-item').slick('slickNext')
});

/* ***************** */

/* Slider 2*/
$('.reviews__slider').slick({
  centerMode: true,
  centerPadding: '22%',
  slidesToShow: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

/* Slider2 navigation */
$('#slickReviewsPrev').on('click', function() {
  $('.reviews__slider').slick('slickPrev')
});

$('#slickReviewsNext').on('click', function() {
  $('.reviews__slider').slick('slickNext')
});



});