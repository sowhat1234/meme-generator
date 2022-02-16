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
    gMeme.lines[0].txt = txt;
}


function setImg(url) {
    gMeme.selectedUrl = url;
}

function setId(id) {
    gMeme.selectedImgId = id;
}

function changeColor(color) {
    gMeme.lines[gMeme.selectedLineIdx].color = color;
    // gMeme.lines.forEach(line => {
    //     if (line.id === gMeme.selectedLineIdx) {
    //         line.color = color
    //     };
    // });
    // gMeme.lines[0].color = color;
};

function addLineText() {
    gMeme.lines.push({
        id: gMeme.lines.length + 1,
        txt: '',
        size: 20,
        align: 'left',
        color: 'red'
    })

}