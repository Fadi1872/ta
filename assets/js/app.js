


// this code is for the toggle bytton when i click on the button or the off canvas backdrop to close and open
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



// this code is to show the search bar and hide it
const search = document.querySelector('#search');
const searchbar = document.querySelector('#searchbar');
const closeSeachBar = document.querySelector('#closeSeachBar');

function closeSeachFun() {
    searchbar.classList.toggle('bottom-100');
    searchbar.classList.toggle('bottom-0');
}

search.addEventListener('click', () => {
    closeSeachFun();
});
closeSeachBar.addEventListener('click', () => {
    closeSeachFun();
});





// this code is for responsive so the user can slide in and out the collection and pages
const openColllection = document.querySelector('#openColllection');
const closeCollection = document.querySelector('#closeCollection');
const collectionNav = document.querySelector('#collectionNav');

const openPages = document.querySelector('#openPages');
const closePages = document.querySelector('#closePages');
const pagesNav = document.querySelector('#pagesNav');

function openNav (NavMenu, button){
    button.addEventListener('click', () => {
        NavMenu.classList.toggle('start-100');
        NavMenu.classList.toggle('start-0');
    });
};

openNav(collectionNav, openColllection);
openNav(collectionNav, closeCollection);
openNav(pagesNav, openPages);
openNav(pagesNav, closePages);




// this code is to show and hide the goUp button
const goUp = document.querySelector('#goUp');
const ics = document.querySelector('#ics');


window.addEventListener('scroll', () => {
    if(window.scrollY >= ics.offsetTop){
        goUp.classList.remove('displayOff');
        goUp.classList.add('d-flex', 'displayOn');
    }else{
        goUp.classList.remove('d-flex', 'displayOn');
        goUp.classList.add('displayOff');
    }
});




// this code to let the user click on the black dot and light the related card
const dot = document.querySelectorAll('.dot');
const dotCard = document.querySelectorAll('.dot-card');

dot.forEach(element => {
    element.addEventListener('click', () => {
        dotCard.forEach(item => {
            if(element.getAttribute('data-card-target') == item.getAttribute('data-card-id')){
                item.style.border = 'var(--color-red) 1px solid';
            }else{
                item.style.border = '#fff 1px solid';
            };
        });
    });
});

