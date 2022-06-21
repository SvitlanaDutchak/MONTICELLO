$(document).ready(function () {

  $('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          arrows: false
        }
      }
    ]
  });

  $('.hero-slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    autoplay: true,
  })

  $('.menu li a').click(function () { // 1
    elementClick = $(this).attr('href');
    destination = $(elementClick).offset().top;
    $('body,html').animate({
      scrollTop: destination
    }, 1400);
  });

});



const footer = document.querySelector('.footer');
const btnDown = document.querySelector('.btn-down');

btnDown.addEventListener("click", function (event) {
  footer.scrollIntoView({
      behavior: "smooth"
    }),

    event.preventDefault()
});

const hamburger = document.querySelector(".btn-menu");
const navMenu = document.querySelector(".menu");
const menuIcons = document.querySelector(".menu-icons");
const links = document.querySelectorAll(".menu__link");
const closeBurgerButton = document.querySelector(".close-button");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("is-active");
  navMenu.classList.toggle("is-open");
  document.body.classList.toggle('lock-scroll');
  menuIcons.classList.toggle("is-open");
  navMenu.append(menuIcons);
};


for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    document.body.classList.remove('lock-scroll');
  });
}

closeBurgerButton.addEventListener("click", function () {
  document.body.classList.add('lock-scroll');
})