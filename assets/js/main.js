// mobile menu 
let navs = document.querySelector('.primary-navs')
let menuIcon = document.querySelectorAll('.menu-toggle')
console.log(navs, menuIcon);
menuIcon.forEach(function (e) {
    e.addEventListener('click', function () {
        navs.classList.toggle('active');
    });
});

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
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
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

$(document).ready(function(){
  $(".filter-collepse-body").click(function(){
    $(this).closest('.filter-collepse-body').find('.filter-conent').slideToggle(); // Toggle visibility of filter-conent div
    $(this).find('.fa-solid').toggleClass('fa-angle-up fa-angle-down');
  });
});