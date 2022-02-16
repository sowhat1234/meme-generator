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


function addLineText() {
    gMeme.lines.push({
        id: gMeme.lines.length + 1,
        txt: '',
        size: 20,
        align: 'left',
        color: 'red'
    })

}