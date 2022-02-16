'use strict';

function renderMeme() {
    var meme = getMeme(); 
    var img = new Image();
    img.src = `${meme.selectedUrl}`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height);
        // renderMemeImg(img)
        // drawText(meme.lines[0].txt,50,50);
        
        for (let i = 0; i < meme.lines.length; i++) {
            if(i === 0){
                drawText(meme.lines[i].txt, 50, 50);
            } else {
                drawText(meme.lines[i].txt, 50, 100);
            }
           
            
        }
       
    }
  
}



function drawText(text, x, y) {
   
    gCtx.lineWidth = 4;
    gCtx.strokeStyle = 'brown';
    gCtx.fillStyle = 'black';
    gCtx.font = '20px Arial';
    gCtx.fillText(text, x, y);
    gCtx.strokeText(text, x, y);
  }
  
