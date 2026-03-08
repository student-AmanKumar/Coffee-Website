const navlinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenBtn = document.querySelector("#menu-open-button");
const menuCloseBtn = document.querySelector("#menu-close-button");
menuOpenBtn.addEventListener("click",()=>{
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});

// close menu when the close btn is clicked
menuCloseBtn.addEventListener("click",()=>menuOpenBtn.click());


// close menu when the close navlink is clicked

navlinks.forEach(link =>{
  link.addEventListener("click", () => menuOpenBtn.click()); 

});
// Initialize swipper


const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//    Responsive breakpoints

  breakpoints:{
    0:{
        slidesPerView:1
    },
     768:{
        slidesPerView:2
    },
     1024:{
        slidesPerView:3
    }

  }


});