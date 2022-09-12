//A class is a blueprint for objects
class User {
    //instance properties -> data
    username = '';
    //constructor -> executed when an instance gets created
    constructor(newUsername) {
        this.username = newUsername
        console.log("instance was created")
    }
    //methods -> define logic to manipulate data, like functions but defined in the class
    printMyName(){
        console.log(`My name is ${this.username}`)
    }
}

// let obj = {
//     data: '',
//     dataTwo: ''
// }

// let userExample = {
//     username: '',

// }

let user = new User("John 117");
console.log(user)
user.printMyName();

let userTwo = new User("Kelly 087");
console.log(userTwo)
userTwo.printMyName();