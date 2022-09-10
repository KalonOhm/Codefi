function outer() {
    const someVar = 'some value';

    function inner() {
        const someInnerVar = "inner var"
        console.log(someVar);

    }

    console.log(someInnerVar);
}