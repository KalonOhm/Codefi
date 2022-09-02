

let multiples = [];

function arrayOfMultiples(num1, num2) {
    for (let i = 0; i < num2; i++){
        multiples.push(num1 * i);
    }
};
console.log(multiples)

arrayOfMultiples(3,7);