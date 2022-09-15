function redundantReturn(str) {
    function redundantReturnReturn(){
        return console.log(str);
    }
    return redundantReturnReturn();
}

redundantReturn("redundancy");

//that was redundant
