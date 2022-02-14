//--------------Multiple Condition----------------\\

//Multiple condition using && and || operator

// #Example-1
var valoJob = true;
var salary = 55000;

if (valoJob == true && salary > 65000) {
  console.log("Ami ekhon MacBook Kinbo");
} else {
  console.log("Ekhon MacBook kinar taka nai pore kinbo");
}

// #Example-2
var valoJob = true;
var salary = 75000;

if (valoJob == true && salary > 65000) {
  console.log("Ami ekhon MacBook Kinbo");
} else {
  console.log("Ekhon MacBook kinar taka nai pore kinbo");
}

// #Example-3
var valoJob = false;
var salary = 55000;

if (valoJob == true || salary > 65000) {
  console.log("Ami ekhon MacBook Kinbo");
} else {
  console.log("Ekhon MacBook kinar taka nai pore kinbo");
}

// #Example-4
var valoJob = true;
var salary = 55000;

if (valoJob == true || salary > 65000) {
  console.log("Ami ekhon MacBook Kinbo");
} else {
  console.log("Ekhon MacBook kinar taka nai pore kinbo");
}

// #Example-5
var valoJob = true;
var salary = 55000;
var takaJomaisi = true;

if (valoJob == true && salary > 65000 && takaJomaisi == true) {
  console.log("Ami ekhon MacBook Kinbo");
} else {
  console.log("Ekhon MacBook kinar taka nai pore kinbo");
}

// #Example-6
var valoJob = true;
var salary = 55000;
var takaJomaisi = true;

if (valoJob == true || salary > 65000 || takaJomaisi == true) {
  console.log("Ami ekhon MacBook Kinbo");
} else {
  console.log("Ekhon MacBook kinar taka nai pore kinbo");
}

// #Example-7
var valoJob = true;
var salary = 75000;
var takaJomaisi = true;

if ((valoJob == true && salary > 65000) || takaJomaisi == true) {
  console.log("Ami ekhon MacBook Kinbo");
} else {
  console.log("Ekhon MacBook kinar taka nai pore kinbo");
}
