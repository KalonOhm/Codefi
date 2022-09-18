var multiples = [];
function arrayOfMultiples(num1, num2) {
    for (var i = 0; i < num2; i++) {
        multiples.push(num1 * i);
    }
}
;
console.log(multiples);
arrayOfMultiples(3, 7);

arrayOfMultiples(7, 5)  //  ➞    [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) //   ➞    [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6)  //