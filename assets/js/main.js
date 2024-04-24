/*------------------SLIDER JS START------------------*/

$('.tutor-slider').slick({
  prevArrow: $('.tutors-left-arrow'),
  nextArrow: $('.tutors-right-arrow'),
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  speed: 2500,
  dots: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1205,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
$('.testimonials-slider').slick({
  prevArrow: $('.testi-left-arrow'),
  nextArrow: $('.testi-right-arrow'),
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  speed: 2500,
  dots: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1205,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});