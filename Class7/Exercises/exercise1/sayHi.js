  //The function sayHi uses an external variable name. When the function runs, which value is it going to use?
//if it doesn't reassign the variable name, then it can use the external name. With scope, it can look outside itself
//and will run into the name in the next higher block. 

function numberGenerator() {
    // Local “free” variable that ends up within the closure
    let num = 1;
    function checkNumber() {
      console.log(num);
    }
    num++;
    return checkNumber;
  }
  
  var number = numberGenerator();
  number();

  //What will number() log to the console?
//It will log 2. checkNumber is called after num++ increments num from 1 to 2, so it logs 2

