const overlays = document.querySelectorAll('.overlay');
const slider = document.querySelector('#slider');
const left = document.querySelector('#left');
const right = document.querySelector('#right');

const leftBig = document.querySelector('#leftBig');
const rightBig = document.querySelector('#rightBig');
const sliderBig = document.querySelector('#sliderBig');


let currentSlide = 0;
let currentSlideBig = 0;

function goToSlide(current ,slideType) {
    slideType.style.transform = `translate(calc(${current} * (-100%)))`;
    if(slideType === slider){
        overlays.forEach(element => {
            (element.getAttribute('data-slide') == current)? element.classList.add('removeOverlay'):element.classList.remove('removeOverlay');
        });
    };
};



right.addEventListener('click', () => {
    (currentSlide === 3)? currentSlide = 0 : currentSlide++ ;
    goToSlide(currentSlide, slider);
});
left.addEventListener('click', () => {
    (currentSlide === 0)? currentSlide = 3 : currentSlide-- ;
    goToSlide(currentSlide, slider);
});


let clickNumber;
window.addEventListener('resize', () => {
    let windowWidth = window.innerWidth;
    if(windowWidth >991){
        clickNumber = 2;
    }else if(windowWidth < 992 && windowWidth > 576){
        clickNumber = 4;
    }
    else{
        clickNumber = 6;
    }
});


window.addEventListener('load', () => {
    let windowWidth = window.innerWidth;
    if(windowWidth >991){
        clickNumber = 2;
    }else if(windowWidth < 992 && windowWidth > 576){
        clickNumber = 4;
    }
    else{
        clickNumber = 5;
    }
});

rightBig.addEventListener('click', () => {
    (currentSlideBig === clickNumber)? currentSlideBig = currentSlideBig : currentSlideBig++ ;
    goToSlide(currentSlideBig, sliderBig);
});
leftBig.addEventListener('click', () => {
    (currentSlideBig === 0)? currentSlideBig = currentSlideBig : currentSlideBig-- ;
    goToSlide(currentSlideBig, sliderBig);
});

