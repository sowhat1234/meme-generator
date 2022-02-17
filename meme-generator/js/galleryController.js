'use strict';



var gImgs = [{
        id: 1,
        url: 'assests/img/1.jpg',
        keywords: ['trump','politics']
    },
    {
        id: 2,
        url: 'assests/img/2.jpg',
        keywords: ['dogs']
    },
    {
        id: 3,
        url: 'assests/img/3.jpg',
        keywords: ['baby', 'poopob']
    },
    {
        id: 4,
        url: 'assests/img/4.jpg',
        keywords: ['cat', 'cats']
    },
    {
        id: 5,
        url: 'assests/img/5.jpg',
        keywords: ['baby']
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

function getImgKeyword(str){
    var filteredImgs = [];
    for (var i=0; i< gImgs.length; i++){
        gImgs[i].keywords.filter(keyword=>{
            if(keyword.includes(str)){
                if (filteredImgs.indexOf(gImgs[i]) === -1 && gImgs[i] !== '') {
                    filteredImgs.push(gImgs[i]);
                }
            }
           
        })
       
    }
    renderImg(filteredImgs);
}

function renderImg(arr) {
    var strHTMLs = arr.map(img => {
        return `
       <div class="img">
           <img src="${img.url}" onclick="onImgSelect(this, ${img.id})" alt="">
       </div>
            `
    }).join('');
    document.querySelector('.img-gallery-container').innerHTML = strHTMLs;
}