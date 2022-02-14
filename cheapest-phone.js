const phones = [
  { name: "samsung", price: 45000, camera: 35, storage: 128 },
  { name: "xiaomi", price: 35000, camera: 40, storage: 64 },
  { name: "oneplus", price: 41000, camera: 45, storage: 128 },
  { name: "oppo", price: 28000, camera: 20, storage: 64 },
  { name: "nokia", price: 12000, camera: 10, storage: 32 },
  { name: "walton", price: 17000, camera: 15, storage: 64 },
];

let cheapest = phones[0];
for (const phone of phones) {
  //compare only price
  if (phone.price < cheapest.price) {
    cheapest = phone;
  }
}

console.log(cheapest);
