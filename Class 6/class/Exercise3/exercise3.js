//at line 18 and 19 I assume it will be 0 then 1, because it's a separate variable starting up (counter2) 


function makeCounter() {
    let count = 0;
  
    return function() {
      return count++;
    };
  }
  
  let counter   = makeCounter();
  let counter2  = makeCounter();
  
  alert( counter() ); // 0
  alert( counter() ); // 1
  
  alert( counter2() ); // ?
  alert( counter2() ); // ?