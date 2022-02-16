'use strict';

function renderMeme() {
    var meme = getMeme();
    var img = new Image();
    img.src = `${meme.selectedUrl}`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText(meme.lines[0].txt, 50, 50, meme.lines.color);

        //     for (let i = 0; i < meme.lines.length; i++) {
        //         if (i === 0) {
        //             drawText(meme.lines[i].txt, 50, 50);
        //         } else {
        //             drawText(meme.lines[i].txt, 50, 100);
        //         }
        //     }
        // }
    }
}




function drawText(text, x, y, color = 'red') {

    gCtx.font = '30px Serif';
    gCtx.lineWidth = 4;
    gCtx.strokeStyle = 'brown';
    gCtx.fillStyle = color;
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
}