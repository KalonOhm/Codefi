// let person = {
//     name: "Kalon",
//     age: 32,
//     printName: function(){
//         console.log(this)
//     }
// }

// person.printName();

let student = {
    name: "Tom"
}

function printName(){
    console.log(this.name)
}

printName.call(student);