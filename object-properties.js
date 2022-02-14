//--------------Object Properties---------------\\

var computer = {
  brand: "Dell",
  color: "Black",
  ram: "8GB",
  ssd: "256GB",
  processor: "corei5",
  generation: 7,
  price: 65000,
};

//Show this full object

console.log(computer);

//Show the specific property of this object

console.log(computer.processor);

//store any properties of object and then access it

var price = computer.price;

console.log(price, "taka");

//Changing the value of object property outside the object

computer.price = 60000;

var newPrice = computer.price;

console.log(newPrice, "taka after discount");

//Second method of Changing the value of object property

computer["price"] = 50000;

var lastPrice = computer.price;

console.log(lastPrice, "taka is our last price");

//Another method of Changing the value of object property

var finalPrice = "price";
computer[finalPrice] = 45000;

console.log(computer.price, "taka is our final price after bargain");
