/*-------------Even-Odd Number-------------*/

//#Example-1
function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  return false;
}

const myNumber = 249;
const isMyNumberEven = isEven(myNumber);
console.log("Is my input number Even?", "Ans:", isMyNumberEven);

//Same vabe conditional er moddhe != diye kaj kora jay.
