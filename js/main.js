'use strict';

var gElCanvas;
var gCtx;

function init() {
    renderCanvas();
}

function renderCanvas() {
    gElCanvas = document.querySelector('.canvas');
    gCtx = gElCanvas.getContext('2d');

    drawImg()
}

function drawImg() {
    var img = new Image();
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
    };
    img.src = 'assests/barka-obama-meme.jpeg';

}