'use strict';

function renderMeme() {
    var meme = getMeme();
    var img = new Image();
    // img.src = `${meme.selectedUrl}`;
    img.src = meme.selectedUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);

        for (var i = 0; i < meme.lines.length; i++) {
            var txt = meme.lines[i].txt;
            var color = meme.lines[i].color
            var size = meme.lines[i].size;
            var strokeColor = meme.lines[i].strokeColor;
            // var align = meme.lines[i].align;
            var posX = meme.lines[i].pos.x;
            var posY = meme.lines[i].pos.y;
            if (i === 0) {
                drawText(txt, { x: posX, y: posY }, color, size, strokeColor);
            } else {
                drawText(txt, { x: posX, y: posY }, color, size, strokeColor);
            }
            //     drawText(txt, 125, 50, color, size, strokeColor, align);
            // } else {
            //     drawText(txt, 125, 450, color, size, strokeColor, align);
            // }
        }
    }
}





// function drawText(text, x, y, color, size, strokeColor, align) {
function drawText(text, pos, color, size, strokeColor) {
    gCtx.font = `${size}px arial`;
    gCtx.lineWidth = 1;
    gCtx.strokeStyle = strokeColor;
    gCtx.fillStyle = color;
    // gCtx.textAlign = align;
    // gCtx.fillText(text, x, y);
    gCtx.fillText(text, pos.x, pos.y);
    // gCtx.strokeText(text, x, y);
    gCtx.strokeText(text, pos.x, pos.y);
}