

let multiples: number[] = [];

function arrayOfMultiples(num1: number, num2: number) {
    for (let i = 0; i < num2; i++){
        multiples.push(num1 * i);
    }
};
console.log(multiples)

arrayOfMultiples(3,7);