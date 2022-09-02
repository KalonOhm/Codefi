//I think it will say Pete. You call the function after name has been reassigned to Pete

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi();
//doesn't like using deprecated names
