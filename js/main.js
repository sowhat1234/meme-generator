'use strict';

var gElCanvas;
var gCtx;

var textInput = document.querySelector('[name="text"]');
var hideGallery = document.querySelector('.img-gallery-container');
var showCanvas = document.querySelector('.canvas-container');

textInput.addEventListener('keyup', () => {
    setLineTxt(textInput.value);
    renderMeme();
})

function init() {
    renderImg()
    renderCanvas();
}



function onImgSelect(url, id) {
    setImg(url.src);
    setId(id);
    hideGallery.classList.add('hide')
    showCanvas.classList.add('show')

    renderMeme();
}


function backToGallery() {
    showCanvas.classList.remove('show')
    showCanvas.classList.add('hide')
    hideGallery.classList.remove('hide')

}

function onAddLineText() {

    addLineText();
    renderMeme();
}


function onChangeColor(color) {

    var meme = getMeme();
    meme.lines.forEach(line => {
        if (line.id === meme.selectedLineIdx) {
            line.color = color.value;
        }
    })
    renderMeme();


}


function renderCanvas() {
    gElCanvas = document.querySelector('.canvas');
    gCtx = gElCanvas.getContext('2d');
    showCanvas.classList.add('hide');

}





function getId(imgId) {
    gImgs.find(img => imgId === img.url)
    console.log(imgId);
}