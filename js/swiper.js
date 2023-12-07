const mySwiper = new Swiper('.team__slider',{
    //Стрелки:
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
  
    grabCursor: true,
    slidesPerView: 4, 
    slidesPerGroup: 1,
    speed: 300,
    loop: true,
    breakpoints:{
    300:{
      slidesPerView: 1,
    },

    700:{
      slidesPerView: 2,
    },
    1150:{
      slidesPerView: 3,
    },
    1780:{
      slidesPerView: 4,
    }
    },
    });

const swiperPrev = document.getElementById('swiperPrev')
const swiperNext = document.getElementById('swiperNext')

swiperPrev.addEventListener('click', () => {
  mySwiper.slidePrev();
})
swiperNext.addEventListener('click', () => {
  mySwiper.slideNext();
})
