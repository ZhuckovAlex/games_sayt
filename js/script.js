document.addEventListener('DOMContentLoaded', () => {
   
    document.querySelector('.header__burger').addEventListener('click', function() {
            this.classList.toggle('active');
            document.querySelector('.header__menu').classList.toggle('active');
            document.querySelector('body').classList.toggle('lock');
        });
});

/*------------------------------*/

