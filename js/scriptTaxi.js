(function headerHello() {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50 && window.innerWidth > 992) {
            header.classList.add('header__active');
        } else {
            header.classList.remove('header__active');
        }
    };
}());

(() => {
      window.onload = () => {
        let header__burger = document.querySelector('.header__burger');
        let header__menu = document.querySelector('.menu__body');
        let body = document.querySelector('body');
        header__burger.addEventListener('click', (e)=> {
          header__burger.classList.toggle('active');
          header__menu.classList.toggle('active');
          body.classList.toggle('lock');
        })
      }
})();

 $('.timepicker').wickedpicker();

const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

 const swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 25,
      slidesPerGroup: 1,
      autoplay: true,
      speed: 1500,
      grabCursor: true,
      loop: true,
      loopFillGroupWithBlank: true,
      autoHeight: true,
      effect: 'coverflow',
      coverflowEffect: {
	   rotate: 35,
	   slideShadows: false,
	   },
	    breakpoints: {
	    767: {
	      slidesPerView: 2,
	      slidesPerGroup: 2,

	    }
  }
});