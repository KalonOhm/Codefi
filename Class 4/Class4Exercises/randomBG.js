function randomColors() {
    randomColorBG();
    randomColorText();
}

function randomColorBG() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    document.body.style.background = `rgb(${r},${g},${b})`
}

function randomColorText() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    document.body.style.color= `rgb(${r},${g},${b})`
}
