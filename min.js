/*---------------Min Value--------------*/
//Example-1: Normal System

const business = 450;
const minister = 550;

if (business < minister) {
  console.log("Business persona is smaller");
} else {
  console.log("Minister persona is smaller");
}

//Example-2: Using Math.min()

let a = 3;
let b = 4;
let c = 5;

var minValue = Math.min(a, b, c);
console.log("The minimum value is", minValue);

//Example-3: Using function and return value

function getMinValue(x, y, z) {
  if (x < y && x < z) {
    return x;
  } else if (y < x && y < z) {
    return y;
  } else {
    return z;
  }
}

var minValueInput = getMinValue(3, 4, 5);
console.log("Min value is =", minValueInput);
