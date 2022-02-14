// Topics:
// #string
// #numeric
// #numeric string
// #int number
// #float number

// -----------Numeric variable---------- //

var x = 5;

// ----------String variable------------//

var firstName = "John";
var lastName = "Doe";

// var fullName = firstName + lastName; output: JohnDoe
var fullName = firstName + " " + lastName;

// String er pasha pashi jora dewa ke concatenation bole.
console.log(fullName);

//-------------Numeric String--------------//

var y = "10";
var z = "30";

var w = y + z;
console.log(w); //output is 1030.

//--------------Interiger number-----------//
// here we have converted a numeric string into a int number.

var fatherAge = "35";
var sonAge = "5";

var fatherAge = parseInt(fatherAge);
var sonAge = parseInt(sonAge);

var userAge = fatherAge + sonAge;

console.log(userAge);

//---------------Float number-------------//
//here we have converted a numeric string into a float number.

var motherAge = "25.5";
var daughterAge = "3.8";

var motherAge = parseFloat(motherAge);
var daughterAge = parseFloat(daughterAge);

var totalAge = motherAge + daughterAge;

console.log(totalAge);

//------------check the type of variable-----------//

console.log(typeof fullName);
console.log(typeof w);
console.log(typeof sonAge);
console.log(typeof totalAge);
