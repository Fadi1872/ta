let ssdCardH= 'SSD CARD';
let ssdCard = ['Affinity M20','Affinity P40 Pro','PO V40 ThinQ','Tencho 7.3','Tencho 8.1','Nexian','Ningbo','Fix A Phone','Hisense','Force Cell'];
let PowerH = 'POWER BANKS';
let Power = ['Spots 8 Lite','Spots ERA 5X','Tencho 8.1','Phonelink','Musah','Connect 4','Alcatel','MobiAir','Beat Cell','Hunk Cell'];
let earPhonrH = 'EARPHONE';
let earPhonr =['Spots Y93 1815','Tencho F12 Pro','Telefonika','T-Blast','Alcatel','Ampy','Crystal Cell','MOI Cell','Groove Cell','Olly Cell'];
let androidH = 'ANDROID';
let android = ['Tencho 10 Lite','Tencho 7.3','Spectrum','Hisense','Bluesky','GreatDid','Mastic','Pigeon Cell','Arise Cell','Ritz Cell'];

const collectionContainer = document.querySelector('#collectionContainer');

function genrateCollection(tag, h, arr, col) {
    let inner = ``;
    arr.forEach(element => {
        inner+= `<a href="#" class="redHover transition text-decoration-none text-dark mt-2">${element}</a>`;
    });
    tag.innerHTML += `
    <div class="${col} d-flex flex-column align-items-start">
        <h4 class="border-bottom py-2">${h}</h4>
        ${inner}
    </div>
    `;
};

let column = 'col';

genrateCollection(collectionContainer, ssdCardH, ssdCard, column);
genrateCollection(collectionContainer, PowerH, Power, column);
genrateCollection(collectionContainer, earPhonrH, earPhonr, column);
genrateCollection(collectionContainer, androidH, android, column);
collectionContainer.innerHTML +=`<div class="col d-flex justity-content-center align-items-center">
                                    <img src="./assets/img/IPhone15ProMax.jpg" alt="IPhone 15 Pro Max" class="w-100">
                                </div>`;



const collectionContainerOffCanvas = document.querySelector('#collectionContainerOffCanvas');

column = 'col-12';
genrateCollection(collectionContainerOffCanvas, ssdCardH, ssdCard, column);
genrateCollection(collectionContainerOffCanvas, PowerH, Power, column);
genrateCollection(collectionContainerOffCanvas, earPhonrH, earPhonr, column);
genrateCollection(collectionContainerOffCanvas, androidH, android, column);
collectionContainerOffCanvas.innerHTML +=`<div class="col-12 d-flex justify-content-center align-items-center">
                                            <img src="./assets/img/IPhone15ProMax.jpg" alt="IPhone 15 Pro Max" class="w-75 mt-4 mx-auto">
                                        </div>`;














// const country = document.querySelector('#country');
// const countryCode = ["AF","AL","DZ","AS","AD","AO","AI","AQ","AG","AR","AM","AW","AU","AT","AZ","BS","BH","BD","BB","BY","BE","BZ","BJ","BM","BT","BO","BQ","BA","BW","BV","BR","IO","BN","BG","BF","BI","CV","KH","CM","CA","KY","CF","TD","CL","CN","CX","CC","CO","KM","CD","CG","CK","CR","HR","CU","CW","CY","CZ","CI","DK","DJ","DM","DO","EC","EG","SV","GQ","ER","EE","SZ","ET","FK","FO","FJ","FI","FR","GF","PF","TF","GA","GM","GE","DE","GH","GI","GR","GL","GD","GP","GU","GT","GG","GN","GW","GY","HT","HM","VA","HN","HK","HU","IS","IN","ID","IR","IQ","IE","IM","IL","IT","JM","JP","JE","JO","KZ","KE","KI","KP","KR","KW","KG","LA","LV","LB","LS","LR","LY","LI","LT","LU","MO","MG","MW","MY","MV","ML","MT","MH","MQ","MR","MU","YT","MX","FM","MD","MC","MN","ME","MS","MA","MZ","MM","NA","NR","NP","NL","NC","NZ","NI","NE","NG","NU","NF","MP","NO","OM","PK","PW","PS","PA","PG","PY","PE","PH","PN","PL","PT","PR","QA","MK","RO","RU","RW","RE","BL","SH","KN","LC","MF","PM","VC","WS","SM","ST","SA","SN","RS","SC","SL","SG","SX","SK","SI","SB","SO","ZA","GS","SS","ES","LK","SD","SR","SJ","SE","CH","SY","TW","TJ","TZ","TH","TL","TG","TK","TO","TT","TN","TR","TM","TC","TV","UG","UA","AE","GB","UM","US","UY","UZ","VU","VE","VN","VG","VI","WF","EH","YE","ZM","ZW","AX",];
// let newArray = [];
// countryCode.forEach(element => {
//     newArray.push(element.toLowerCase());
// });


// newArray.forEach(element => {
//     country.innerHTML += `<div class="d-flex align-items-center countryItem"><a class="dropdown-item px-0 text-uppercase" href="#">${element}</a><img src="https://flagcdn.com/${element}.svg" width="20px" alt="flag"></div>`;
// });

// const countryItem = document.querySelectorAll('.countryItem');
// const select = document.querySelector('#select');

// countryItem.forEach(element => {
//     element.addEventListener('click', () => {
//         select.innerHTML = `${element.children[0].innerHTML} <img src="https://flagcdn.com/${element.children[0].innerHTML}.svg" width="20px" class="mb-1" alt="flag">`;
//     });
// });



fetch('https://dummyjson.com/products')
.then(res => {
    return res.json();
})
.then(res => {
    console.log(res.products);
    displayProduct(res.products);
});

// const sliderBig = document.querySelector('#sliderBig');
let imgs;

let cardNumber = 0;


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
                        <div class="height-300px offcanvas-nav-in text-center position-relative">
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