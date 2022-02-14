//Set the parameter of function

function bringSingara(taka) {
  console.log("singara kinar jonno dise", taka);
  console.log("mama singara den");
}

bringSingara(100);

//Save the parameter value in a variable

var money = 500;

bringSingara(money);

//-------------Function Return--------------\\

function bringSingara(taka) {
  console.log("singara kinar jonno dise", taka);
  console.log("mama singara den");
  var singaraPrice = 10;
  var singaraQuantity = taka / singaraPrice;
  return singaraQuantity;
}

var money = 150;
var singara = bringSingara(money);

console.log(singara);

function getReminder(number1, number2) {
  number1 % number2;
}

const reminder = getReminder(12, 2);

console.log(reminder);
