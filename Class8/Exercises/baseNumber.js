function makePlusFunction(addNum) {
    //console.log(`my number was ${addNum}`)
    return boop(addNum + baseNum);

    function boop(e) {
        console.log(e)
    }
}



const plusFive = makePlusFunction(5);

plusFive(2);

plusFive(-8);

const plusTen = makePlusFunction(10);

plusTen(0);

plusTen(188);

plusFive(plusTen(0));