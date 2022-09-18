//It should have access to the outer variables at both
//I'm guessing Pete again, because withing the function Pete willl be the most recent assignment.
function makeWorker() {
    var names = "Pete";
    return function () {
        alert(names);
    };
}
names = "John";
// create a function
var work = makeWorker();
// call it
work(); // what will it show? Pete
