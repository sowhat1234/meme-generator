'use strict';



var gImgs =[{
    id: 1,
    url: 'assests/barka-obama-meme.jpeg',
    keywords: ['politics', 'obama']
},
{
    id: 2,
    url: 'assests/chad-meme.png',
    keywords: ['chad', 'guy']
},
{
    id: 3,
    url: 'assests/jim_halpert-meme.jpeg',
    keywords: ['office', 'jim']
}
];

function getImgs(){

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