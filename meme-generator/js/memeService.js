'use strict';

var gMeme = {
    selectedUrl: '',
    selectedImgId: 1,
    selectedLineIdx: 1,
    lines: [{
        id: 1,
        txt: 'I sometimes eat Falafel',
        size: 20,
        align: 'left',
        color: 'red'
    }]
};

function getMeme() {
    return gMeme;
}


function setLineTxt(txt) {
    gMeme.lines.forEach(line=>{
        if(line.id === gMeme.selectedLineIdx){
            line.txt = txt;
        };
    });
};


function setImg(url) {
    gMeme.selectedUrl = url;
}

function setImgId(id) {
    gMeme.selectedImgId = id;
}

function getSelectedLine(){
    return gMeme.lines.forEach(line=>{
        if(line.id === gMeme.selectedLineIdx){
            return line;
        }
    })
}

function updateLineId(){
    var length = gMeme.lines.length;
    if(gMeme.selectedLineIdx < length){
        gMeme.selectedLineIdx++
    }else if(gMeme.selectedLineIdx === length){
        gMeme.selectedLineIdx = 1;
    }
    
}

function changeColor(color) {
    // gMeme.lines[gMeme.selectedLineIdx].color = color;
    gMeme.lines.forEach(line => {
        if (line.id === gMeme.selectedLineIdx) {
            line.color = color
        };
    });
    // gMeme.lines[0].color = color;
};

function addFontSize(){
    gMeme.lines.forEach(line => {
        if (line.id === gMeme.selectedLineIdx) {
            line.size++;
        };
    });
}
function decFontSize(){
    gMeme.lines.forEach(line => {
        if (line.id === gMeme.selectedLineIdx) {
            line.size--;
        };
    });
}

function addLineText() {
    gMeme.lines.push({
        id: gMeme.lines.length + 1,
        txt: 'newText',
        size: 20,
        align: 'left',
        color: 'red'
    })

}