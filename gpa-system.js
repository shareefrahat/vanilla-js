// ----------------- GPA grading system -------------- \\

// #Example-1

let averageMarks = 75;

if (averageMarks >= 90) {
  if (averageMarks > 100) {
    console.log(
      "The number",
      averageMarks,
      "is not acceptable. Please enter a number between 0-100"
    );
  } else {
    console.log("Your result is A+ : Marks:", averageMarks, ": Execellent");
  }
} else if (averageMarks >= 80) {
  console.log("Your result is A+ : Marks:", averageMarks, ": Very Good");
} else if (averageMarks >= 70) {
  console.log("Your result is A : Marks:", averageMarks, ": Good");
} else if (averageMarks >= 65) {
  console.log("Your result is A- : Marks:", averageMarks, ": Medium");
} else if (averageMarks >= 60) {
  console.log("Your result is B : Marks:", averageMarks, ": Bad");
} else if (averageMarks >= 50) {
  console.log("Your result is C : Marks:", averageMarks, ": Very Bad");
} else if (averageMarks >= 40) {
  console.log("Your result is D : Marks:", averageMarks, ": Passed Only");
} else {
  console.log("Your result is F : Marks:", averageMarks, ": Failed!");
}

//#Example-2

// let bangla = 65;
// let english = 72;
// let math = 84;
// let physics = 89;
// let chemistry = 82;
// let biology = 78;

// let avgMarks = (bangla + english + math + physics + chemistry + biology) / 6;
// let averageMarks = Math.round(avgMarks);
// if (averageMarks >= 90) {
//   if (averageMarks > 100) {
//     console.log(
//       "The number",
//       averageMarks,
//       "is not acceptable. Please enter a number between 0-100"
//     );
//   } else {
//     console.log("Your result is A+ : Marks:", averageMarks, ": Execellent");
//   }
// } else if (averageMarks >= 80) {
//   console.log("Your result is A+ : Marks:", averageMarks, ": Very Good");
// } else if (averageMarks >= 70) {
//   console.log("Your result is A : Marks:", averageMarks, ": Good");
// } else if (averageMarks >= 65) {
//   console.log("Your result is A- : Marks:", averageMarks, ": Medium");
// } else if (averageMarks >= 60) {
//   console.log("Your result is B : Marks:", averageMarks, ": Bad");
// } else if (averageMarks >= 50) {
//   console.log("Your result is C : Marks:", averageMarks, ": Very Bad");
// } else if (averageMarks >= 40) {
//   console.log("Your result is D : Marks:", averageMarks, ": Passed Only");
// } else {
//   console.log("Your result is F : Marks:", averageMarks, ": Failed!");
// }
