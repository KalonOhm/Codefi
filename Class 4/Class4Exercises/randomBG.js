function randomColors() {
    randomColorBG();
    randomColorText();
}
function randomColorBG() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    document.body.style.background = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
}
function randomColorText() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    document.body.style.color = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
}
