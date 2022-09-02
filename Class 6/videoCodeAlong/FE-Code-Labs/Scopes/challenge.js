//Return a Boolean if a number is divisible by 10
//Here, you'll create a function that will give you a 
//"true" or "false" output. The inputted number should 
//only return a "true" if it's divisible by 10. Otherwise, 
//your program should return a "false" answer.

let optionOne = 3;
let optionTwo = 30;

function isDivisibleByTen() {
    // let result = null;
    // if (optionOne % 10 !== 0){
    //     result = false;
    // } else {
    //     result = true;
    // }
    // return result;
    //decided to look up ternary because it sounded like a good spot for that
    return ((optionOne % 10 === 0) ? true : false)
}

console.log(isDivisibleByTen());
