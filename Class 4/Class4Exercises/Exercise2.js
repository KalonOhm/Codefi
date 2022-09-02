function countTrue(bools) {
  let trueArray = [];
  for (let i = 0; i <= bools.length; i++) {
    if (bools[i] === true) {
      trueArray.push(true);
    }
  }
  console.log(trueArray.length);
  return trueArray.length;
}

countTrue([true, false, false, true, false]); // ➞    2

countTrue([false, false, false, false]); //➞    0

countTrue([]); //➞    0

countTrue([true, true, false, true, false, true, false, false, false, true]); //➞ 5
