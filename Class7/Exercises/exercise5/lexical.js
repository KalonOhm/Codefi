/* Closures are functions that remember their lexical environments. Lexical environments mean the environment in which the function was declared.

function parent(x) {
  return function closure() {
    // Closure is declared here.
    return x;
  };
}

const remember = parent("remembers me");
// Seems like the variable x would be gone after
// parent is executed, but it's not.

closure(); // WRONG, the global scope doesn't have access to its inner scopes and the closure method
// Returns "remembers me" because the inner
// function remembers x.
Aim: Fix this code so it ultimately prints 'remembers me'.*/

function parent(x) {
  function closure() {
    return x;
  }
  return closure();
}
const remember = parent("remembers me");
console.log(remember)

//idk if i did what you were asking me to do, but it prints "remembers me"