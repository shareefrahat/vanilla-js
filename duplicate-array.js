/*----------Remove duplicate element-----------*/

//Example-1: using string type array

// const names = [
//   "rahim",
//   "karim",
//   "salim",
//   "shofiq",
//   "azad",
//   "salim",
//   "azad",
//   "karim",
//   "mazed",
//   "jabed",
//   "jahed",
//   "mazed",
//   "shofiq",
// ];

// function removeDuplicate(names) {
//   const unique = [];
//   for (const element of names) {
//     // console.log(element);
//     if (unique.indexOf(element) == -1) {
//       unique.push(element);
//     }
//   }
//   return unique;
// }

// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);

//Example-2: using number type array

const friendAges = [
  18, 22, 16, 19, 24, 29, 32, 24, 18, 28, 24, 25, 19, 22, 26, 25, 24, 29, 30,
  24, 25, 26, 33, 32, 30, 28, 26,
];

function removeDuplicateAges(ages) {
  const uniqueNumbers = [];
  for (const agesElement of ages) {
    if (uniqueNumbers.indexOf(agesElement) == -1) {
      uniqueNumbers.push(agesElement);
    }
  }
  return uniqueNumbers;
}

const agesOutput = removeDuplicateAges(friendAges);
console.log(agesOutput);
