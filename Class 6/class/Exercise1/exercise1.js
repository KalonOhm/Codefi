//I think it will say Pete. You call the function after name has been reassigned to Pete
var names = "John";
function sayHi() {
    alert("Hi, " + names);
}
names = "Pete";
sayHi();
//doesn't like using deprecated names
