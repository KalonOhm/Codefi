// let firstName = "Kalon"
// let age = 32;
// let favoriteIceCream = "Birthday Cake";

let person = {
    firstName: "Kalon",
    age: 32,
    favoriteIceCream: "Birthday Cake",
    vehicle: {
        model: "Equinox",
        year: 2011
    }
}
// console.log(`My name is ${firstName}, I am ${age} years old, and I like ${favoriteIceCream} ice cream`);
console.log(`My name is ${person.firstName}, I am ${person.age} years old, and I like ${person["favoriteIceCream"]} icecream.`);
console.log(`I own an ${person.vehicle.model}`)
