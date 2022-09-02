
function product([[arg1, arg2], [arg3, arg4], [arg5, arg6]]){
    //(ar1 + ar2 + ar3);
    //array ar1 multiply together
    return((arg1*arg2) + (arg3*arg4) + (arg5*arg6))


}

console.log(product([[1,2],[1,1],[2,3]]))   // ➞    9
// 1 * 2 + 1 * 1 + 2 * 3

console.log(product([[10,2],[5,0],[2,3]])) //  ➞    26
// 10 * 2 + 5 * 0 + 2 * 3

console.log(product([[1,2],[2,3],[3,4]])) //  ➞    20
// 1 * 2 + 2 * 3 + 3 * 4

console.log(product([[1,2],[0,3],[3,0]]))   // ➞    2
// 1 * 2 + 0 * 3 + 3 * 0
