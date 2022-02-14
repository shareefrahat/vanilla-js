/*---------------Max Value--------------*/
//Example-1: Normal System

const business = 450;
const minister = 550;

if (business > minister) {
  console.log("Business persona is greater");
} else {
  console.log("Minister persona is greater");
}

//Example-2: Using Math.max()

let a = 3;
let b = 4;
let c = 5;

var maxValue = Math.max(a, b, c);
console.log("The maximum value is", maxValue);

//Example-3: Using function and return value

function getMaxValue(x, y, z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
}

var maxValueInput = getMaxValue(3, 4, 5);
console.log("Max value is =", maxValueInput);

//same vabe minimum value ber korte hobe.
