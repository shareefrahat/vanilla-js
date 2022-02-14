//----------Index of Array-------------//

var myMarks = [34, 76, 98, 54, 68, 99];
// Index    = [0,   1,  2,  3,  4,  5]

var index = myMarks.indexOf(98);
console.log(index); //output: 2

var indexNum = myMarks.indexOf(125);
console.log(indexNum); //output: -1. because the index of 125 is not available in myMarks.

//----------Find out Array-------------//

// Finding out the position of array Element

var amarMathmarks = myMarks[2];
console.log(amarMathmarks); //output: 98

var amarBigganMarks = myMarks[11];
console.log(amarBigganMarks); //output: undefine. because 11 no index ta define kora hoynai myMarks array er moddhe.

//----------Replacement of Array-------------//

myMarks[3] = 85; //index number 3 te or 4th position er je value ache setake replace kore 85 kore diche. that means 54 er replacement e 85 hobe.

console.log(myMarks); //output:[34, 76, 98, 85, 68, 99]
