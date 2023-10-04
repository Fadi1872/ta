

// this code is to load the collection menu twice one as a dropdown menu and the second to slide in and out the offcanvas
let ssdCardH= 'SSD CARD';
let ssdCard = ['Affinity M20','Affinity P40 Pro','PO V40 ThinQ','Tencho 7.3','Tencho 8.1','Nexian','Ningbo','Fix A Phone','Hisense','Force Cell'];
let PowerH = 'POWER BANKS';
let Power = ['Spots 8 Lite','Spots ERA 5X','Tencho 8.1','Phonelink','Musah','Connect 4','Alcatel','MobiAir','Beat Cell','Hunk Cell'];
let earPhonrH = 'EARPHONE';
let earPhonr =['Spots Y93 1815','Tencho F12 Pro','Telefonika','T-Blast','Alcatel','Ampy','Crystal Cell','MOI Cell','Groove Cell','Olly Cell'];
let androidH = 'ANDROID';
let android = ['Tencho 10 Lite','Tencho 7.3','Spectrum','Hisense','Bluesky','GreatDid','Mastic','Pigeon Cell','Arise Cell','Ritz Cell'];

// this is teh function
function genrateCollection(tag, h, arr, col) {
    let inner = ``;
    arr.forEach(element => {
        inner+= `<a href="#" class="redHover transition text-decoration-none text-dark mt-2">${element}</a>`;
    });
    tag.innerHTML += `
    const collectionContainer = document.querySelector('#collectionContainer');
    <div class="${col} d-flex flex-column align-items-start">
    <h4 class="border-bottom py-2">${h}</h4>
    ${inner}
    </div>
    `;
};
// load on dropdown
const collectionContainer = document.querySelector('#collectionContainer');
let column = 'col';

genrateCollection(collectionContainer, ssdCardH, ssdCard, column);
genrateCollection(collectionContainer, PowerH, Power, column);
genrateCollection(collectionContainer, earPhonrH, earPhonr, column);
genrateCollection(collectionContainer, androidH, android, column);
collectionContainer.innerHTML +=`<div class="col d-flex justity-content-center align-items-center">
                                    <img src="./assets/img/IPhone15ProMax.jpg" alt="IPhone 15 Pro Max" class="w-100">
                                </div>`;


// load on offcanvas
const collectionContainerOffCanvas = document.querySelector('#collectionContainerOffCanvas');

column = 'col-12';
genrateCollection(collectionContainerOffCanvas, ssdCardH, ssdCard, column);
genrateCollection(collectionContainerOffCanvas, PowerH, Power, column);
genrateCollection(collectionContainerOffCanvas, earPhonrH, earPhonr, column);
genrateCollection(collectionContainerOffCanvas, androidH, android, column);
collectionContainerOffCanvas.innerHTML +=`<div class="col-12 d-flex justify-content-center align-items-center">
                                            <img src="./assets/img/IPhone15ProMax.jpg" alt="IPhone 15 Pro Max" class="w-75 mt-4 mx-auto">
                                        </div>`;





// getting the country codes from api and then adding the eventlistener
const country = document.querySelector('#country');
fetch('https://restcountries.com/v3.1/all')
.then(res => {
    return res.json();
})
.then(res => {
    flags(res);
})
.then(
    () => {
        const countryItem = document.querySelectorAll('.countryItem');
        const select = document.querySelector('#select');

        countryItem.forEach(element => {
            element.addEventListener('click', () => {
                                    select.innerHTML = `${element.children[0].innerHTML} <img src="https://flagcdn.com/${element.children[0].innerHTML}.svg" width="20px" class="mb-1" alt="flag">`;
                                    });
                                });
    }
);

// loading the flages and the codes
// teh flag is loaded from awebsite using the country code
function flags(arr) {
    arr.forEach(element => {
        country.innerHTML += `<div class="d-flex align-items-center countryItem"><a class="dropdown-item px-0 text-uppercase" href="#">${element.altSpellings[0].toLowerCase()}</a><img src="https://flagcdn.com/${element.altSpellings[0].toLowerCase()}.svg" width="20px" alt="flag"></div>`;
    });
}






// gettinf the products detailes from api
fetch('https://dummyjson.com/products')
.then(res => {
    return res.json();
})
.then(res => {
    displayProduct(res.products);
});

// const sliderBig = document.querySelector('#sliderBig');
let imgs;
let cardNumber = 0;

// displaying only 6 productes and it should be from Apple or Huawi or infinix or oppo
// at the same time i am counting the final price after discount and the number of stars for each product dynamicly
// i did consider out of stoke products but there is no out of stocks product
function displayProduct(arr) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(cardNumber === 6){
            break;
        };
        if(element.brand === "Apple" || element.brand === "Huawei" || element.brand === "Infinix" || element.brand === "OPPO"){
            let badge = '';
            let elPrice = Number(element.price);
            let price =`<p class="text-danger fs-3 mb-0">
                            $${elPrice}
                        </p>`;
            if(element.discountPercentage != 0){
                badge = `<div class="position-absolute top10-left10 smallFont square rounded-pill bg-black text-white d-flex flex-column justify-content-center align-items-center">
                            <p class="mb-0">${element.discountPercentage}%</p>
                            <p class="mb-0">OFF</p>
                        </div>`;
                        
                let finalPrice = Math.round(elPrice - ((elPrice * Number(element.discountPercentage))/100));
                price = `<p class="text-danger fs-3 mb-0">
                            $${finalPrice}
                            <del class="fs-5">$${elPrice}</del>
                        </p>`;
            }
            let stars = '';
            let rating = Math.round(Number(element.rating));
            for (let index = 1; index <= 5; index++) {
                if(index <= rating){
                    stars += '<i class="fa-solid fa-star"></i>';
                }else{
                    stars += '<i class="fa-regular fa-star"></i>';
                }
            };
            let addToCart = `<p class="mb-0 text-white text-uppercase p-3">add to card</p>`;
            if(element.stock === 0){
                addToCart = `<p class="mb-0 text-white text-uppercase p-3">Out Of Stock</p>`
            }
            sliderBig.innerHTML += `
            <div class="slide w-100 position-absolute top-0" style="--slide-id: ${cardNumber};">
                <div class="px-2">
                    <div class="border cardHover transition position-relative">
                        <div class="customHeight Backimg imgChange transition"  style="--img-url: url(${element.images[0]}); --hover-url: url(${element.images[1]}); --position: center;">
                            ${badge}
                        </div>
                        <div class="height-147px offcanvas-nav-in text-center position-relative">
                            <div class="position-absolute top-0 start-0 w-100 transition translate-100 bg-dark cursor z-1">
                                ${addToCart}
                            </div>
                            <div class="position-relative offcanvas-nav-in z-1 p-3">
                                <h4 class="redHover mb-2">${element.title}</h4>
                                <p class="opacity-50 mb-2">
                                    ${stars}
                                </p>
                                ${price}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
            cardNumber++;
        };
    };
};