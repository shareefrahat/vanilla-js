// ------------ Array Push ---------------\\

//Push a new string in array

var lastBench = ["Forhad", "Arman", "Ridwan", "Rafi"];

lastBench.push("Razu");

console.log(lastBench); //push kore Razu ke last bench e add kora hoise.

//Push a new number in array

var examMarks = [45, 78, 54, 90, 75];

examMarks.push(62);

console.log(examMarks); //push kore Razu ke last bench e add kora hoise.

// ------------ Array Pop ---------------\\

var lastBenchNew = ["Forhad", "Arman", "Ridwan", "Rafi", "Razu"];

lastBenchNew.pop();

console.log(lastBenchNew); //pop kore Razu ke last bench theke bair kora hoise.

// You can Pop a number from array as well

//Save this last pop element

var lastPop = lastBenchNew.pop();

console.log(lastPop); //output: Rafi. because out last element was Rafi after first pop. ager pop ke comment kore dile outpu Razu hobe.

//N.B: jotobar pop kora hobe totobar last element ke bair kore dibe. sob pop hoye gele output will be: []

//how to add or remove (push or pop) first item from an array in javascript.

// Ans: shift and unshift

// Summary:
// pop(): Remove an item from the end of an array.
// push(): Add items to the end of an array.
// shift(): Remove an item from the beginning of an array.
// unshift(): Add items to the beginning of an array.
