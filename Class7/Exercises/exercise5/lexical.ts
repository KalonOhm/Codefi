/* Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared.

function parent(x) {
  return function closure() {
    // Closure is declared here.
    return x;
  };
}

const remember = parent("remembers me");

closure(); // WRONG, the global scope doesn't have access to its inner scopes and the closure method
// Returns "remembers me" because the inner
// function remembers x.
Aim: Fix this code so it ultimately prints 'remembers me'.*/

function parent1(x: string) {
  function closure() {
    return x;
  }
  return closure();
}
const remember = parent1("remembers me");
console.log(remember)

//idk if i did it the intended way, 
//but it prints "remembers me"