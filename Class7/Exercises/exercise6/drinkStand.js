/*You will be given an array of drinks,
with each drink being an object with two properties: name and price.
Define a function with the parameter representing the array of drinks
and return the drinks objects sorted by price in ascending order.*/
var drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: 'carrot', price: 34 }
];
//unfinished, moving on for now
var sortPrice = drinks.sort(function (a, b) { return a.price - b.price; });
console.log(sortPrice);
//remember to call things. I keep writing possibly useful code, forgetting to call the function, and
//getting frustrated when nothing runs, but I'm calling nothing. Not sure that was my original mistake
//anymore, but it seems it could have been. 
/*PS C:\Users\kalon\Desktop\Codefi\Class7\Exercises\exercise6> node drinkStand
[
  { name: 'lime', price: 10 },
  { name: 'carrot', price: 34 },
  { name: 'lemonade', price: 50 }
]*/ 
