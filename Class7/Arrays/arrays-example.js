// let brotherOne = "Johnny";
// let brotherTwo = "Jimmy";
// let brotherThree = "Jason";

// const brothers = [];
// console.log(brothers);
// brothers.push(brotherOne, brotherTwo, brotherThree);
// console.log(brothers);

const brothers = [{
    firstName: "Johnny",
    weight: 150
}, 
{
    firstName: "Jimmy",
    weight: 132
}, 
{
    firstName: "Jason",
    weight: 210
}]
console.log(`We are three brothers, ${brothers[0].firstName}, ${brothers[1].firstName}, and ${brothers[2]["firstName"]}.`)


