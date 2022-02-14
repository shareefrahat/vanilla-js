//--------------Nested Condition--------------\\

// #Example-1
var mac = 90;
var windows = 80;
var lenevo = 68;
var dell = 58;
var hp = 50;
var walton = 40;

var budget = 60;

if (budget > mac) {
  console.log("You can buy Mac");
} else if (budget >= windows) {
  console.log("You can buy Windows");
} else if (budget < windows && budget > dell) {
  console.log("You can buy Lenevo");
} else if (budget < lenevo && budget == hp) {
  console.log("You can buy Dell");
} else if (budget < hp && budget > walton) {
  console.log("You can buy Hp");
} else {
  console.log("You can buy Walton");
}

// #Example-1

var macBook = 90;
var touchScreen = false;
var wallet = 60;

if (wallet >= macBook) {
  if (touchScreen == true) {
    console.log("I will buy touch Mac");
  } else {
    console.log("Touch screen na thakle Mac kinmu na");
  }
} else if (wallet > 70) {
  console.log("Ami tahole lenevo kinte pari");
} else {
  console.log("I will buy Dell with this budget");
}

//Value gula change kore kore dekha jete pare

// GPA grading system

var averageMarks = 85;

if (averageMarks >= 90) {
  if (averageMarks >= 100) {
    console.log(
      "The number",
      averageMarks,
      "is not acceptable. Please enter a number between 0-100"
    );
  } else {
    console.log("Your result is A+", averageMarks, ": Execellent");
  }
} else if (averageMarks >= 80) {
  console.log("Your result is A+", averageMarks, ": Very Good");
} else if (averageMarks >= 70) {
  console.log("Your result is A", averageMarks, ": Good");
} else if (averageMarks >= 65) {
  console.log("Your result is A-", averageMarks, ": Medium");
} else if (averageMarks >= 60) {
  console.log("Your result is B", averageMarks, ": Bad");
} else if (averageMarks >= 50) {
  console.log("Your result is C", averageMarks, ": Very Bad");
} else if (averageMarks >= 40) {
  console.log("Your result is D", averageMarks, ": Passed Only");
} else {
  console.log("Your result is F", averageMarks, ": Failed");
}
