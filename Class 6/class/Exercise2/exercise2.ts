//It should have access to the outer variables at both
//I'm guessing Pete again, because withing the function Pete willl be the most recent assignment.

function makeWorker() {
    let name = "Pete";
  
    return function() {
      alert(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // what will it show? Pete


  //I think it is impossible to make TS happy here while preserving the "question" 
  //of which name will be called. You have to use different names for each block 
  //scope variable, and that means you will know which you are calling in the final function call