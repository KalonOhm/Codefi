// Warm Up Exercise
// Use HTML, CSS and JavaScript to do the following:

// With a click of a button, change the background color to lightblue.
// Include a form that allows the user to enter a specific color.
// When the user submits a form, change the background color to the specified input by the user.
// Record each submission. Be sure to include each record by including them on the webpage.
function changeBackground(color){
    document.body.style.background = color;
}

function colorChange() {
    console.log(this.value);
    changeBackground(this.value);
}
// document.querySelector('#btn-lightblue').addEventListener('click', () => {
//     changeBackground('lightblue');
// });

const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('change', colorChanged)


document.getElementById(colorForm).addEventListener("sumbit", ()=> {
    console.log('form submit');
})

//     document.body.style.backgroundColor = 
// })



//in the <ul> append <li>'s of the colors chosen?