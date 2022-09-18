function randomColors() {
    randomColorBG();
    randomColorText();
}

function randomColorBG() {
    let r: number = Math.floor(Math.random() * 256);
    let g: number = Math.floor(Math.random() * 256);
    let b: number = Math.floor(Math.random() * 256);

    document.body.style.background = `rgb(${r},${g},${b})`
}

function randomColorText() {
    let r: number = Math.floor(Math.random() * 256);
    let g: number = Math.floor(Math.random() * 256);
    let b: number = Math.floor(Math.random() * 256);

    document.body.style.color= `rgb(${r},${g},${b})`
}
