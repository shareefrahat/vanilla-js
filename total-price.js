//#Example-1:

const products = [
  { name: "mouse", price: 1200 },
  { name: "keyboard", price: 3540 },
  { name: "tshirt", price: 900 },
  { name: "accesories", price: 1860 },
];

let totalPrice = 0;

for (const product of products) {
  totalPrice = totalPrice + product.price;
}

console.log(totalPrice, "BDT");

//#Example-2:

const cart = [
  { name: "mouse", price: 650, quantity: 3 },
  { name: "keyboard", price: 1540, quantity: 2 },
  { name: "tshirt", price: 450, quantity: 5 },
  { name: "accesories", price: 1260, quantity: 4 },
];

let totalProductPrice = 0;

for (const product of cart) {
  const perProductTotal = product.price * product.quantity;
  totalProductPrice = totalProductPrice + perProductTotal;
}

console.log(totalProductPrice, "taka");
