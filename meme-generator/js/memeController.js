'use strict';

function renderMeme() {
    var meme = getMeme();
    var img = new Image();
    img.src = `${meme.selectedUrl}`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        // drawText(meme.lines[0].txt, 50, 50, meme.lines[0].color);

            for (let i = 0; i < meme.lines.length; i++) {
                var txt = meme.lines[i].txt;
                var color = meme.lines[i].color
                var size = meme.lines[i].size;
                if (i === 0) {
                    drawText(txt, 50, 50,color,size);
                } else {
                    drawText(txt, 50, 100,color,size);
                }
            }
        }
    }





function drawText(text, x, y, color,size) {
    gCtx.font = `${size}px Serif`;
    gCtx.lineWidth = 4;
    gCtx.strokeStyle = color;
    gCtx.fillStyle = color;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}