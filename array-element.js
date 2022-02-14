//Cheking array element using for loop.

var myArray = [23, 45, 68, 28, 03, 57, 36, 35, 79];

for (var i = 0; i < myArray.length; i++) {
  var arrayElement = myArray[i];
  console.log(arrayElement);
}

console.log("--------------");

var yourArray = [23, 85, 68, 28, 103, 57, 136, 35, 97, 89, 53];

for (var i = 0; i < yourArray.length; i++) {
  var element = yourArray[i];
  if (element > 80) {
    console.log(element);
  }
}
