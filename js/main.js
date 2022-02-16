'use strict';

var gElCanvas;
var gCtx;

var textInput = document.querySelector('[name="text"]');

textInput.addEventListener('keyup', ()=> {
    setLineTxt(textInput.value);
    renderMeme();
})

function init() {
    renderImg()
    renderCanvas();
}

function onImgSelect(url,id){
    setImg(url.src);
    setId(id);
    renderMeme();
}


function onAddLineText(){

    addLineText();
    renderMeme();
}


function onChangeColor(color){

    var meme = getMeme();
    meme.lines.forEach(line =>{
            if(line.id === meme.selectedLineIdx){
                line.color = color.value;
                }
    })
    renderMeme();
    
    
}


function renderCanvas() {
    gElCanvas = document.querySelector('.canvas');
    gCtx = gElCanvas.getContext('2d');

    
}





function getId(imgId) {
    gImgs.find(img => imgId === img.url)
    console.log(imgId);
}



