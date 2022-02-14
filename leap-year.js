/*-------------Leap Year Conversion-------------*/

//#Example-1:

function isLeapYear(year) {
  if (year % 4 == 0 || (year % 100 != 0 && year % 400 == 0)) {
    return true;
  } else {
    return false;
  }
}

const myInputYear = 1992;
const isMyYear = isLeapYear(myInputYear);
console.log("Is my input a Leap Year?", "Ans:", isMyYear);
