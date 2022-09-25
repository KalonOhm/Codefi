//Evaluate the expression of a and b depending on what operator is (..see defined function below).

function calculate(a, b, operator) {
   // return ` ${a}${operator}${b} ` 
//    if (operator === "+"){
//     console.log(a + b);
//     return a + b;
//    } else if {
    // (operator === "-"){
        //     console.log(a - b);
        //     return a - b;
        //    }
// }

   switch (operator) {
    case "+":
        return a + b;

    case "-":
        return a - b;
    
    default:
        throw new Error("Not Implemented");
   }
   //break continues here. no break, falls through executing all until a break or default.
}

calculate(1,1, "+"); // 2
calculate(2, 2, '-'); // 0/*


