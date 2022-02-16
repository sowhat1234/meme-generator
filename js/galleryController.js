'use strict';



var gImgs = [{
        id: 1,
        url: 'assests/img/1.jpg',
        keywords: ['politics', 'obama']
    },
    {
        id: 2,
        url: 'assests/img/2.jpg',
        keywords: ['politics', 'obama']
    },
    {
        id: 3,
        url: 'assests/img/3.jpg',
        keywords: ['politics', 'obama']
    },
    {
        id: 4,
        url: 'assests/img/4.jpg',
        keywords: ['politics', 'obama']
    },
    {
        id: 5,
        url: 'assests/img/5.jpg',
        keywords: ['politics', 'obama']
    },
    // {
    //     id: 1,
    //     url: 'assests/img/1.jpg',
    //     keywords: ['politics', 'obama']
    // },
    // {
    //     id: 1,
    //     url: 'assests/img/1.jpg',
    //     keywords: ['politics', 'obama']
    // },
    // {
    //     id: 1,
    //     url: 'assests/img/1.jpg',
    //     keywords: ['politics', 'obama']
    // },
    // {
    //     id: 1,
    //     url: 'assests/img/1.jpg',
    //     keywords: ['politics', 'obama']
    // },
    // {
    //     id: 1,
    //     url: 'assests/img/1.jpg',
    //     keywords: ['politics', 'obama']
    // },
    // {
    //     id: 1,
    //     url: 'assests/img/1.jpg',
    //     keywords: ['politics', 'obama']
    // },
    // {
    //     id: 1,
    //     url: 'assests/img/1.jpg',
    //     keywords: ['politics', 'obama']
    // },
    // {
    //     id: 1,
    //     url: 'assests/img/1.jpg',
    //     keywords: ['politics', 'obama']
    // },
    // {
    //     id: 1,
    //     url: 'assests/img/1.jpg',
    //     keywords: ['politics', 'obama']
    // },
    // {
    //     id: 1,
    //     url: 'assests/img/1.jpg',
    //     keywords: ['politics', 'obama']
    // },
    // {
    //     id: 1,
    //     url: 'assests/img/1.jpg',
    //     keywords: ['politics', 'obama']
    // },
    // {
    //     id: 1,
    //     url: 'assests/img/1.jpg',
    //     keywords: ['politics', 'obama']
    // },
    // {
    //     id: 1,
    //     url: 'assests/img/1.jpg',
    //     keywords: ['politics', 'obama']
    // },
    // {
    //     id: 1,
    //     url: 'assests/img/1.jpg',
    //     keywords: ['politics', 'obama']
    // },
    // {
    //     id: 1,
    //     url: 'assests/img/1.jpg',
    //     keywords: ['politics', 'obama']
    // },
    // {
    //     id: 1,
    //     url: 'assests/img/1.jpg',
    //     keywords: ['politics', 'obama']
    // },

];

function getImgs() {

    return gImgs;
}


function renderImg() {
    var strHTMLs = getImgs().map(img => {
        return `
       <div class="img">
           <img src="${img.url}" onclick="onImgSelect(this, ${img.id})" alt="">
       </div>
            `
    }).join('');
    document.querySelector('.img-gallery-container').innerHTML = strHTMLs;
}