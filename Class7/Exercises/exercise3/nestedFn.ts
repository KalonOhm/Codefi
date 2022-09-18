let x: number = 10;                                         //x = 10
function foo(a: number) {                                   //foo which takes argument a, which will be 5
  let b: number = 20;                                       //b = 20
  function bar(c: number) {                                 //bar which takes arg c
    let d: number = 30;                                     //d = 30
    return boop(x + a + b + c + d);                 //boop (10(x) + 5(a) + 20(b) + 15(c) + 30(d))
  }                                                 //
  function boop(e: number) {                                //boop which takes arg e
    console.log(e * -1);                            //console.log (e * -1)
  }                                                 //not seeing where we get c, unless it's from moar(15)'s input? 
  return bar;                                       //if c = 15,
}                                                   //-80
let moar = foo(5); // Closure
moar(15);

/*What will moar log to the console?
Before executing the code, think about this. To check your answer, execute this code.*/

/*  moar(15) */

/* PS C:\Users\kalon\Desktop\Codefi\Class7\Exercises\exercise3> node nestedFn     
-80 

i got it right, and I'm really surprised */