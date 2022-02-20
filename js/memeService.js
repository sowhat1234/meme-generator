'use strict';

var gMeme = {
    selectedUrl: '',
    selectedImgId: 1,
    selectedLineIdx: 1,
    lines: [{
        id: 1,
        txt: 'Enter Your Text ',
        size: 30,
        align: 'center',
        color: 'black',
        strokeColor: 'black',
        width: null,
        height: null,
        pos: { x: gElCanvas.width / 2, y: gElCanvas.height / 10 }
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

function setSelectedLineIdx(lineIdx) {
    gMeme.selectedLineIdx = lineIdx;
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

function addLine() {
    var posX = gElCanvas.width / 2
    var posY;
    if (gMeme.lines.length === 0) {
        posY = gElCanvas.height / 10
    } else if (gMeme.lines.length === 1) {
        posY = gElCanvas.height / 1.1
    } else {
        posY = gElCanvas.height / 2
    }

    gMeme.lines.push(addLineText(posX, posY));
}

function addLineText(x, y) {
    return {
        id: gMeme.lines.length + 1,
        txt: 'Enter Your Text ',
        size: 30,
        align: 'center',
        color: 'black',
        strokeColor: 'black',
        width: null,
        height: null,
        pos: { x, y }
    }

}

function setTextAlign(align) {
    gMeme.lines.forEach(line => {
        if (line.id === gMeme.selectedLineIdx) {
            line.align = align;
        };
    });
};

function getLinePos() {
    gMeme.lines.forEach(line => {
        line.pos = line
    })
}

function getSelectedLineIdx() {
    return gMeme.selectedLineIdx;
}

function removeLine() {
    if (getSelectedLineIdx() > 0) {
        gMeme.lines.splice(getSelectedLine(), 1);
    }
    gMeme.lines.splice(getSelectedLineIdx(), 1);
}