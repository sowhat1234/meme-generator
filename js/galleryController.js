'use strict';



var gImgs = [{
        id: 1,
        url: 'assests/img/1.jpg',
        keywords: ['politics', 'trump']
    },
    {
        id: 2,
        url: 'assests/img/2.jpg',
        keywords: ['animals', 'dogs']
    },
    {
        id: 3,
        url: 'assests/img/3.jpg',
        keywords: ['baby', 'dog']
    },
    {
        id: 4,
        url: 'assests/img/4.jpg',
        keywords: ['animals', 'cats']
    },
    {
        id: 5,
        url: 'assests/img/5.jpg',
        keywords: ['baby', 'win']
    },
    {
        id: 6,
        url: 'assests/img/6.jpg',
        keywords: ['history', 'weed']
    },
    {
        id: 7,
        url: 'assests/img/7.jpg',
        keywords: ['baby', 'black']
    },
    {
        id: 8,
        url: 'assests/img/8.jpg',
        keywords: ['funny', 'meme']
    },
    {
        id: 9,
        url: 'assests/img/9.jpg',
        keywords: ['baby', 'wtf']
    },
    {
        id: 10,
        url: 'assests/img/10.jpg',
        keywords: ['politics', 'obama']
    },
    {
        id: 11,
        url: 'assests/img/11.jpg',
        keywords: ['nba', 'basketball']
    },
    {
        id: 12,
        url: 'assests/img/12.jpg',
        keywords: ['i told you so', 'tv show']
    },
    {
        id: 13,
        url: 'assests/img/13.jpg',
        keywords: ['leo dicaprio', 'movie']
    },
    {
        id: 14,
        url: 'assests/img/14.jpg',
        keywords: ['funny', 'matrix']
    },
    {
        id: 15,
        url: 'assests/img/15.jpg',
        keywords: ['meme', 'simply']
    },
    {
        id: 16,
        url: 'assests/img/16.jpg',
        keywords: ['tv show', 'star wars']
    },
    {
        id: 17,
        url: 'assests/img/17.jpg',
        keywords: ['politics', 'putin']
    },
    {
        id: 18,
        url: 'assests/img/18.jpg',
        keywords: ['tv show', 'woody']
    },
    {
        id: 19,
        url: 'assests/old/barka-obama-meme.jpeg',
        keywords: ['politics', 'funny']
    },
    {
        id: 20,
        url: 'assests/old/chad-meme.png',
        keywords: ['chad', 'funny']
    },
    {
        id: 21,
        url: 'assests/old/dont-trust-no-one.jpeg',
        keywords: ['funny', 'self']
    },
    {
        id: 22,
        url: 'assests/old/jim_halpert-meme.jpeg',
        keywords: ['the office', 'tv show']
    },


];

function getImgs() {

    return gImgs;
}

function getImgKeyword(str) {
    var filteredImgs = [];
    for (var i = 0; i < gImgs.length; i++) {
        gImgs[i].keywords.filter(keyword => {
            if (keyword.includes(str)) {
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