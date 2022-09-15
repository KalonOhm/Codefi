function sayHello() {
    let say = function () {
      console.log(hello);
    };
    // Local variable that ends up within the closure
    let hello = "Hello, world!";
    return say;
  }
  var sayHelloClosure = sayHello();
  sayHelloClosure();

  //What will sayHelloClosure() log to the console?
//This does seem weird, but it logs "Hello, world!"
//inside say, hello is not the string hello, it is a variable. 
//that variable is assigned "Hello, world!" one level up, withing sayHello(), so it can go up and grab that
