/*Aim: Create a function that takes a string as input, 
capitalizes a letter if its ASCII code is even, 
and returns its lower case version if its ASCII code is odd*/

function asciiCapitalize(someString) {
    for (i=0; i< someString.length; i++)
        if (((someString.charAt(i))%2 === 0)) {
            someString.charAt(i).toUpperCase() + someString.slice((i+1));
        } else {
            someString.charAt(i).toLowerCase() + someString.slice((i+1));
        }

}


//idk


asciiCapitalize("to be or not to be!")   // ➞    "To Be oR NoT To Be!"

asciiCapitalize("THE LITTLE MERMAID")   // ➞    "THe LiTTLe meRmaiD"

asciiCapitalize("Oh what a beautiful morning.")   // ➞    "oH wHaT a BeauTiFuL moRNiNg."

asciiCapitalize("ThIs iS aLmOsT tHe SpOnGeBoB mEmE!") // -> ???
