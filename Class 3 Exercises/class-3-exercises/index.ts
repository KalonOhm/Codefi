let user: {name: string, 
    age: number, 
    occupation: string} = 
    {name: "Kalon",
    age: 32,
    occupation: "future developer - unemployed"
}

function printUser () {
    alert(JSON.stringify(user, null, 4))
}


