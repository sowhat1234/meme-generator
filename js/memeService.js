'use strict';

var gMeme = {
    selectedUrl: '',
    selectedImgId: 1,
    selectedLineIdx: 1,
    lines: [{
        id: 1,
        txt: 'Enter Your Text HERE',
        size: 30,
        align: 'start',
        color: 'black',
        strokeColor: 'black',
        pos: { x: 125, y: 50 }
    }]
};

function getMeme() {
    return gMeme;
}


function setLineTxt(txt) {
    gMeme.lines.forEach(line => {
        if (line.id === gMeme.selectedLineIdx) {
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

function getSelectedLine() {
    return gMeme.lines.forEach(line => {
        if (line.id === gMeme.selectedLineIdx) {
            return line;
        }
    })
}

function updateLineId() {
    var length = gMeme.lines.length;
    if (gMeme.selectedLineIdx < length) {
        gMeme.selectedLineIdx++
    } else if (gMeme.selectedLineIdx === length) {
        gMeme.selectedLineIdx = 1;
    }

}

function changeColor(color) {
    gMeme.lines.forEach(line => {
        if (line.id === gMeme.selectedLineIdx) {
            line.color = color
        };
    });
};

function changeStrokeColor(color) {
    gMeme.lines.forEach(line => {
        if (line.id === gMeme.selectedLineIdx) {
            line.strokeColor = color
        };
    });
}

function addFontSize() {
    gMeme.lines.forEach(line => {
        if (line.id === gMeme.selectedLineIdx) {
            line.size++;
        };
    });
}

function decFontSize() {
    gMeme.lines.forEach(line => {
        if (line.id === gMeme.selectedLineIdx) {
            line.size--;
        };
    });
}

function addLineText() {
    gMeme.lines.push({
        id: gMeme.lines.length + 1,
        txt: 'Enter a text HERE',
        size: 30,
        align: 'left',
        color: 'black',
        pos: { x: 125, y: 400 }
    })

}

function getLinePos() {
    gMeme.lines.forEach(line => {
        line.pos = line
    })
}

function removeLine() {
    gMeme.lines.forEach(line => {
        if (line.id === gMeme.selectedLineIdx) {
            line.txt = '';
        };
    });
};