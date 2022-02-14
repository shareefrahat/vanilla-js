/*-----------Swap the value of two variable-------------*/

//#Example-1:
//Normal Approach

var first = 5;
var second = 7;
console.log(first, second);

var temp = first;
first = second;
second = temp;
console.log(first, second);

//#Example-2:
//Destructuring Approach (using same variable)

[first, second] = [second, first];
console.log(first, second);
