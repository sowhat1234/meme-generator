'use strict';

var gElCanvas;
var gCtx;
var gisLineDrag = false;
var gStartPos = {
    x: null,
    y: null
};

var textInput = document.querySelector('[name="text"]');
var deleteInput = document.querySelector('[name="delete-btn"]');
var hideGallery = document.querySelector('.img-gallery-container');
var showCanvas = document.querySelector('.canvas-container');
var contentNav = document.querySelector('.content-nav');
var searchFilter = document.getElementById('searchInput');
gElCanvas = document.querySelector('.canvas');

textInput.addEventListener('keyup', () => {
    setLineTxt(textInput.value);
    renderMeme();
})

searchFilter.addEventListener('keyup', (e) => {
    getImgKeyword(e.target.value);
})

function init() {
    renderImg(getImgs());
    renderCanvas();
    addMouseListeners()
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function onSetTextAlign(align) {
    setTextAlign(align)
    renderMeme()
}

function downloadImg(elLink) {
    const data = gElCanvas.toDataURL();
    elLink.href = data;
    elLink.download = 'my-meme.jpg';
}

function loadImageFromInput(ev, onImageReady) {
    var reader = new FileReader()

    reader.onload = function(event) {
        console.log('onload');
        var img = new Image()
        img.onload = onImageReady.bind(null, img)
        img.src = event.target.result
        img = getImgs();
    }
    console.log('after');
    reader.readAsDataURL(ev.target.files[0])
}

function onImgSelect(url, id) {
    setImg(url.src);
    setImgId(id);
    hideGallery.classList.add('hide')
    showCanvas.classList.add('show')
    showCanvas.classList.remove('hide')
    contentNav.classList.add('hide');

    renderMeme();
}

function backToGallery() {
    showCanvas.classList.remove('show')
    showCanvas.classList.add('hide')
    hideGallery.classList.remove('hide')
    contentNav.classList.remove('hide');


}

function onAddLineText() {

    addLine();
    renderMeme();
}

function onChangeColor(color) {

    changeColor(color);
    renderMeme();
}

function onStrokeChangeColor(color) {

    changeStrokeColor(color);
    renderMeme();
}

function onFontBig() {
    addFontSize();
    renderMeme();
}

function onFontSmall() {
    decFontSize();
    renderMeme();
}

function onChangeLineFocus() {
    updateLineId();
    updateInputText();
    renderMeme();
};

function onRemoveLine() {
    removeLine();
    updateInputText();
    renderMeme();
};

function updateInputText() {
    textInput.value = '';
    var lineText = getSelectedLine();

    textInput.value = lineText ? lineText.txt : '';
}

function renderCanvas() {
    gElCanvas = document.querySelector('.canvas');
    gCtx = gElCanvas.getContext('2d');
    showCanvas.classList.add('hide');

}

function onMove(ev) {
    if (!gisLineDrag) return;
    if (gStartPos != null) {
        const pos = getEvPos(ev)
        const dx = pos.x - gStartPos.x
        const dy = pos.y - gStartPos.y
        gStartPos = pos
        moveLine(dx, dy)
        renderMeme()
        renderCanvas()
    }
}

function onDown(ev) {
    var pos = getEvPos(ev)
    gStartPos = isLineClicked(ev);
    if (gStartPos != null) {
        gStartPos = pos
    }
    gisLineDrag = true;
    gElCanvas.style.cursor = 'grabbing'

}

function onUp() {
    gisLineDrag = false;
    gStartPos = null;
    gElCanvas.style.cursor = 'grab'
}

function moveLine(dx, dy) {
    var lines = getMeme().lines;
    lines.forEach(line => {
        if (line.id === gMeme.selectedLineIdx) {
            const pos = line.pos;
            pos.x += dx
            pos.y += dy
        }
        return line
    })
}

function isLineClicked(clickedPos) {
    var lines = getMeme().lines;

    for (var i = 0; i < lines.length; i++) {
        var pos = lines[i].pos;
        var width = lines[i].width;
        var height = lines[i].height;
        if (clickedPos.offsetX - width / 2 <= pos.x + (width / 2) && clickedPos.offsetX + width / 2 >= pos.x - (width / 2) && clickedPos.offsetY <= pos.y && clickedPos.offsetY >= pos.y - height) {
            setSelectedLineIdx(i + 1)
            return lines[i];
        }
    }
    return null;
}

function getEvPos(ev) {
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    return pos;
};