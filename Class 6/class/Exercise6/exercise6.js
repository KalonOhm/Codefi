function product(_a) {
    var _b = _a[0], arg1 = _b[0], arg2 = _b[1], _c = _a[1], arg3 = _c[0], arg4 = _c[1], _d = _a[2], arg5 = _d[0], arg6 = _d[1];
    //(ar1 + ar2 + ar3);
    //array ar1 multiply together
    return ((arg1 * arg2) + (arg3 * arg4) + (arg5 * arg6));
}
console.log(product([[1, 2], [1, 1], [2, 3]])); // ➞    9
// 1 * 2 + 1 * 1 + 2 * 3
console.log(product([[10, 2], [5, 0], [2, 3]])); //  ➞    26
// 10 * 2 + 5 * 0 + 2 * 3
console.log(product([[1, 2], [2, 3], [3, 4]])); //  ➞    20
// 1 * 2 + 2 * 3 + 3 * 4
console.log(product([[1, 2], [0, 3], [3, 0]])); // ➞    2
// 1 * 2 + 0 * 3 + 3 * 0
