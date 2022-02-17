'use strict';

var gElCanvas;
var gCtx;

var textInput = document.querySelector('[name="text"]');
var hideGallery = document.querySelector('.img-gallery-container');
var showCanvas = document.querySelector('.canvas-container');
var contentNav = document.querySelector('.content-nav');
var searchFilter = document.getElementById('searchInput');

textInput.addEventListener('keyup', () => {
    setLineTxt(textInput.value);
    renderMeme();
})

searchFilter.addEventListener('keyup',(e) => {
    getImgKeyword(e.target.value);
})

function init() {
    renderImg(getImgs());
    renderCanvas();
}


function downloadImg() {
    var elLink = gMeme.selectedUrl
    var imgContent = gElCanvas.toDataURL()
    elLink.href = imgContent
    elLink.dowmload = 'my-img.jpg'
    // doesnt work
}

function onImgSelect(url, id) {
    setImg(url.src);
    setImgId(id);
    hideGallery.classList.add('hide')
    showCanvas.classList.add('show')
    showCanvas.classList.remove('hide')
    contentNav.classList.add('hide');

    renderMeme();
}


function backToGallery() {
    showCanvas.classList.remove('show')
    showCanvas.classList.add('hide')
    hideGallery.classList.remove('hide')
    contentNav.classList.remove('hide');


}

function onAddLineText() {

    addLineText();
    renderMeme();
}


function onChangeColor(color) {
    
    changeColor(color);
    renderMeme();
}


function onFontBig(){
    addFontSize();
    renderMeme();
}
function onFontSmall(){
    decFontSize();
    renderMeme();
}

function onChangeLineFocus(){
    updateLineId();
    updateInputText();
    renderMeme();
};

function updateInputText(){
    textInput.value = '';
    var lineText = getSelectedLine();
    
    textInput.value = lineText ? lineText.txt : '';
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