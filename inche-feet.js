/*--------------Inche-Feet convertion--------------*/

//#Example-1:
//we know that 12 inche = 1 feet. so 1 inche = 1/12 feet.

var dataInInche = 176;

var dataInFeet = dataInInche / 12;

console.log(dataInFeet);

//#Example-2:
//Inches to feet using function

function incheToFeet(inches) {
  var feet = inches / 12;
  return feet;
}

var inchesInput = 178;
var feet = incheToFeet(inchesInput);
console.log("The value of", inchesInput, "inches is", feet, "feet");
console.log(
  "The value of",
  inchesInput,
  "inches is about",
  parseInt(feet),
  "feet"
);

/*--------------Mile-Km convertion--------------*/

//#Example-1:
//we know that 1 mile = 1.6 km. so n mile = n * 1.6 km.

var dataInMile = 14;

var dataInKm = dataInMile * 1.6;

console.log(dataInKm);

//#Example-2:
//Mile to Km using function

function mileToKm(miles) {
  var kilo = miles * 1.6;
  return kilo;
}

var mileInput = 14;
var kilo = mileToKm(mileInput);
console.log("The value of", mileInput, "miles is", kilo, "kilometer");
console.log("The value of", mileInput, "miles is", parseInt(kilo), "kilometer");
