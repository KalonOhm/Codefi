/*Define a function that converts an object into an array,
where each element represents a key-value pair in the form of an array.*/
function toArray(someObject) {
    console.log(Object.entries(someObject));
    //     return Object.entries(someObject);
}
toArray({ a: 1, b: 2 }); // ➞    [["a", 1], ["b", 2]]
toArray({ shrimp: 15, tots: 12 }); //  ➞    [["shrimp", 15], ["tots", 12]]
toArray({}); //  ➞  []
