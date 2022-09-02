function reversibleInclusiveList(start, end){
    let newList = [];
    if (start <= end){
        for (i = start; i <= end; i++){
            newList.push(i);
        }
    }
    else {
        for (i = start; i >= end; i--){
            newList.push(i);
        }
    }
    return newList
}

console.log(reversibleInclusiveList( 1, 5));
console.log(reversibleInclusiveList(4 , 11));
console.log(reversibleInclusiveList( -1, 19));
console.log(reversibleInclusiveList( 16, -3));
console.log(reversibleInclusiveList( 12, 17));
console.log(reversibleInclusiveList( 3, -11));
console.log(reversibleInclusiveList( 3, -3));
console.log(reversibleInclusiveList( -0, 0));
