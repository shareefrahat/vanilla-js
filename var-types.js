// Types of Javascript variable
// #1-Primitive        #2-Non Primitive
// a-Number            a-Object
// b-String            b-Array
// c-Boolean           c-function
// d-undefined
// e-null

//Adition of two decimal number

var x = 1.11;
var y = 0.3;

var total = x + y;

// console.log(total);  output: 1.4100000000000001

var roundFigure = total.toFixed(2);
// toFixed er value 1, 2, 3, 4 etc hobe. that means decimal er pore koy ghor hobe ta define kore
// console.log(typeof roundFigure); output: string
// var roundFigure = parseInt(roundFigure); output: 1 because roundFigure will be int Number. and the type of roundFigure will be a string data type. but jodi purseFloat use kora hoy tobe data type will be a number, not a string! INTERESTING!

var roundFigure = parseFloat(roundFigure);

console.log(roundFigure);

console.log(typeof roundFigure);
//output data type will be a number. because we declare the roundFigure as parseFloat.

//Data Type : Boolean   |   Boolean can be defined as true or false.

var isRaining = true;

console.log(isRaining);

console.log(typeof isRaining);
