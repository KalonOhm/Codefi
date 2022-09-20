//Add two to every value of the array except 
//to odd numbers.

function addTwoExceptToOddNumbers(numbers) {
    let newNumbers = []
    for (i = 0; i < numbers.length; ++i) {
        if (numbers[i] % 2 === 0) {
            numbers [i] = numbers[i] + 2; 
        }
    //     newNumbers.push(numbers[i]);
    // }
    // console.log(newNumbers)
    // return newNumbers;
    }
    console.log(numbers);
    return numbers;
}


addTwoExceptToOddNumbers([1,2,3,4,5]); // [1,4,3,6,5]
addTwoExceptToOddNumbers([101,1,4,10]); // [101,1,6,12]


//forEach or array map also work
//++i saves 1 cpu call over i++

//{return numbers.map((num) => num % 2 === 0 ? num + 2 : num)}

//const addTwoExceptToOddNumbers = (numbers) => numbers.map((num) => num % 2 === 0 ? num + 2 : num)

