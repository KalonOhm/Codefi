//I think it will say Pete. You call the function after name has been reassigned to Pete

let names: string = "John";

function sayHi() {
  alert("Hi, " + names);
}

names = "Pete";

sayHi();
//doesn't like using deprecated names
