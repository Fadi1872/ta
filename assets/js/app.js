const toggler = document.querySelector('.navbar-toggler');




let clicked = false;

toggler.addEventListener('click', () => {
    if (!clicked) {
        toggler.classList.remove('clicked');
        const offcanvasBackdrop = document.querySelector('.offcanvas-backdrop');
        offcanvasBackdrop.addEventListener('click', () => {
            toggler.classList.add('clicked');
            clicked = !clicked;
        });
        clicked = !clicked;
    }else{
        toggler.classList.add('clicked');
        clicked = !clicked;
    }
});




const search = document.querySelector('#search');
const searchbar = document.querySelector('#searchbar');
const closeSeachBar = document.querySelector('#closeSeachBar');

search.addEventListener('click', () => {
    searchbar.classList.remove('bottom-100');
    searchbar.classList.add('bottom-0');
});
closeSeachBar.addEventListener('click', () => {
    searchbar.classList.remove('bottom-0');
    searchbar.classList.add('bottom-100');
});


const openColllection = document.querySelector('#openColllection');
const closeCollection = document.querySelector('#closeCollection');
const collectionNav = document.querySelector('#collectionNav');

const openPages = document.querySelector('#openPages');
const closePages = document.querySelector('#closePages');
const pagesNav = document.querySelector('#pagesNav');

function openNav (NavMenu, button, open){
    button.addEventListener('click', () => {
        if(open){
            NavMenu.classList.remove('start-100');
            NavMenu.classList.add('start-0');
        }else{
            NavMenu.classList.remove('start-0');
            NavMenu.classList.add('start-100');
        }
    });
};

openNav(collectionNav, openColllection, true);
openNav(collectionNav, closeCollection, false);
openNav(pagesNav, openPages, true);
openNav(pagesNav, closePages, false);



const goUp = document.querySelector('#goUp');
const ics = document.querySelector('#ics');


window.addEventListener('scroll', () => {
    if(window.scrollY >= ics.offsetTop){
        goUp.classList.remove('displayOff');
        goUp.classList.add('displayOn');
        goUp.classList.add('d-flex');
    }else{
        goUp.classList.remove('d-flex');
        goUp.classList.remove('displayOn');
        goUp.classList.add('displayOff');
    }
});

