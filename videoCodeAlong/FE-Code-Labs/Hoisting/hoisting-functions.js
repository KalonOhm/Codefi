


let paycheck = 300;

logNumberToConsole(10)

function addRandomNumber(num){
    let randomNumber = Math.floor(Math.random() * 100);
    logNumberToConsole(randomNumber + num);
}


function logNumberToConsole(num){
    console.log(num);
}


addRandomNumber(paycheck);
