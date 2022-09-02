//scopes
//accessibility of variables

//global scopes
//these variables are visible throughout the entire script/program
let x = 0;




//local scopes/inner scope/block scope/*function scope
//a local scope has access to its own variables as well as
//those of it's outer scope variable. It doesn't have 
//access to it's INNER scope. 

//examples
//functions, conditional statements, sclasses, loops, etc

function logToConsole(){
    let y=0;
    console.log(y, x);
}
logToConsole();

//console.log(y); errors, y is local to the function, can't be seen outside