// --------------Array Loop---------------\\
//use can use array element for loop

// #Example-1

var numbers = [45, 78, 23, 56, 67, 99, 30, 81, 15, 85, 2];
for (var i = 0; i < 10; i++) {
  var element = numbers[i];
  console.log(element);
}

// #Example-2

//IMPORTANT: Direct number er condition diye array er element ke loop chailaile ekta problem hoy. Seta hocche array te new element push korle seta loop ar count kore na. Ekhetre .lenght use korte hoy. Ex: arrayName.length (instead of i <10).

var myNumbers = [45, 78, 23, 56, 67, 99, 30, 81, 15, 85, 2, 5, 19];
for (var i = 0; i < myNumbers.length; i++) {
  var element = myNumbers[i];
  console.log(element);
}

var name = "false";
console.log(typeof name);
