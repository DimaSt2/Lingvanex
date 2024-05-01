const buttons = document.querySelectorAll('.tab__button');
const slideTitle = document.querySelector ('.slide__title');
const slideImg = document.querySelector ('.page2__slide__image');

const tab = document.querySelector ('.page2__tab__buttons');

function changeSlide (e) {

    if (!e.target.closest('.tab__button')) return;

    buttons.forEach((btn) => {
        btn.classList.remove('active__btn');
        e.target.classList.add('active__btn')
        slideTitle.textContent = e.target.textContent;
    });

    if (buttons[0].classList.contains('active__btn')) {
        slideImg.src = 'img/card1.jpg';
    } else if (buttons[1].classList.contains('active__btn')){
        slideImg.src = 'img/card2.jpg';
    }
     else {
        slideImg.src = 'img/card3.jpg';
    }
}

tab.addEventListener('click', changeSlide);