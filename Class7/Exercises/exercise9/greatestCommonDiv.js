/*How would you find the greatest common divisor of two numbers?*/

function greatestCommonDivisor(a, b) {
  while (b) {
    var t = b;
    b = a % b;
    a = t;
  }
  console.log(Math.abs(a));
  return a;
}

greatestCommonDivisor(14, 21); // returns 7
greatestCommonDivisor(14, -21); // returns 7, but would be -7
greatestCommonDivisor(60, 72); //12
