
let btns = Array.from(document.querySelectorAll('.games1__item-btn'));
for (let btn of btns) {
    btn.addEventListener('click', () =>{
        btn.nextElementSibling.classList.toggle('hidden');
   
       document.onclick = function(e){
            let a = e.target.closest('.games1__item-text');
                     
        if(!e.target.closest('.games1__item-text') && !e.target.closest('.games1__item-btn')){
               
        btn.nextElementSibling.classList.remove('hidden');
    }}
});
}
        

/*-----------------------------------------------*/
const gamesSwiper = new Swiper('.latest-projects__slider',{
    
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
  
    grabCursor: true,
    slidesPerView: 3, 
    slidesPerGroup: 1,
    speed: 300,
    loop: true,
    spaceBetween: 20,/*--расстояние м-ду слайдами--*/
      breakpoints:{
    300:{
      slidesPerView: 1,
    },

    700:{
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1050:{
      slidesPerView: 3,
       spaceBetween: 80,
    },
   
    },

     });

const projectsPrev = document.getElementById('projectsPrev')
const projectsNext = document.getElementById('projectsNext')

projectsPrev.addEventListener('click', () => {
  gamesSwiper.slidePrev();
})
projectsNext.addEventListener('click', () => {
  gamesSwiper.slideNext();
})
