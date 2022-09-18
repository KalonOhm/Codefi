const orders = [
    {
      order: "Nachos with Cheese",
      name: "Sandy",
      price: "$13.99",
    },
    {
      order: "Chile Relleno, Burrito, & Rice",
      name: "John",
      price: "$13.99",
    },
    {
      order: "Flauta, Chicken Quesadilla, & Taco",
      name: "Amy",
      price: "$13.99",
    },
  ];
  
  function reciteMyOrders(customerOrders) {
    for (let index = 0; index < customerOrders.length; index++) {
        console.log(customerOrders[index].order)
        
    }
  }
  
  reciteMyOrders(orders);
  // Nachos with Cheese
  // Chile Relleno, Burrito, & Rice
  // Flauta, Chicken Quesadilla, & Taco