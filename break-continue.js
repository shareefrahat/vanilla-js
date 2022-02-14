//---------------Break & Continue---------------\\

var i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

//Loop er moddhe if/else if/else conditional use kora jay.

//#Example-1

//Same Example with conditonal

var i = 0;

while (i < 10) {
  console.log(i);
  if (i == 5) {
    break;
  }
  i++;
}

//You can control the conditonals and break into "for loop"

//#Example-2

for (var i = 0; i <= 20; i++) {
  console.log(i);
  if (i == 8) {
    break;
  }
}

//you can use break into an array

//#Example-3

var numbers = [5, 11, 18, 33, 48, 60, 85, 97, 106, 22, 38, 64];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  console.log(number);
  if (number > 90) {
    break;
  }
}

//We can use continue instead of break

var numbers = [5, 11, 18, 33, 48, 60, 85, 97, 106, 22, 38, 64];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  console.log(number);
  if (number > 90) {
    continue;
  }
}
