
 let list = [
    {
      id: 1, 
      completed: true,
      action: "Study"
    },
    {
      id: 2,
      completed: false, 
      action: "Dishes"
    }
  ]
// Print each object's id, status of completion 
// and action onto the page.


let printOut = `${list.reduce((previous, current,) => {
    previous += `
    ID: ${current.id}
    Status: ${current.status}
    Actiopn: ${current.action}
    

    `

    return previous
}, )}`;

//now try with a loop
