function makePlusFunction(baseNum) {
    //console.log(`my number was ${baseNum}`)
        return (newNum) => {
            console.log(baseNum + newNum);
    }
}

const plusFive = makePlusFunction(5);
plusFive(2);
plusFive(-8);

const plusTen = makePlusFunction(10);
plusTen(0);
plusTen(188);

plusFive(plusTen(0));

// I'm not getting the final one to work correctly. 
// It's doing plusTen, but then printing NaN in plusFive.
// So it's not totally correct, because ideally it should 
// only log once it's complete, so my log is in the wrong spot.