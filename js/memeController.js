'use strict';

function renderMeme() {
    var meme = getMeme();
    var img = new Image();
    img.src = meme.selectedUrl;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        drawText(meme)

    }
}

function drawText(currMeme) {
    gCtx.lineWidth = 2;
    currMeme.lines.forEach(line => {
        gCtx.fillStyle = line.color
            // gCtx.font = `${line.size}px ${line.font}`
        gCtx.font = `${line.size}px arial`
        gCtx.textAlign = line.align
        gCtx.strokeStyle = line.strokeColor
        line.width = gCtx.measureText(line.txt).width
        line.height = gCtx.measureText(line.txt).fontBoundingBoxAscent
        gCtx.fillText(line.txt, line.pos.x, line.pos.y)
        gCtx.strokeText(line.txt, line.pos.x, line.pos.y)
    })
}