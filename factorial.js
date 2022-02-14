/*-------------Factorial--------------*/

//#Example-1:
//What is the value of 5!?

var factorial = 1;

for (i = 1; i <= 5; i++) {
  factorial = factorial * i;
}

console.log("The value of 5! =", factorial);

//#Example-2:
//Factorial using changable input

var myInputNumber = 7;

var factorial = 1;

for (i = 1; i <= myInputNumber; i++) {
  factorial = factorial * i;
}

console.log(
  "The factorial of your input number",
  myInputNumber,
  "is =",
  factorial
);

//#Example-3:
//Factorial using function

function getFactorial(number) {
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

var myInputNumber = 7;
var myFactorial = getFactorial(myInputNumber);
console.log("The factorial of", myInputNumber, "is =", factorial);

//Example-4
//You can find factorial using while loop.

function yourFactorial(number) {
  let factorial = 1;
  let i = 1;
  while (i <= number) {
    factorial = factorial * i;
    i++;
  }
  return factorial;
}

var outputFactorial = yourFactorial(5);
console.log("The factorial of your input is =", outputFactorial);

/*Same vabe jodi i-- (descreminent) diye korte hoy tahole conditional er value i>= 1 kore dite hobe. */

//Example-5
//You can find factorial using while loop and decreminent.

function yourFactorial(number) {
  let factorial = 1;
  let i = number;
  while (i >= 1) {
    factorial = factorial * i;
    i--;
  }
  return factorial;
}

var outputFactorial = yourFactorial(6);
console.log("The factorial of your input is =", outputFactorial);
