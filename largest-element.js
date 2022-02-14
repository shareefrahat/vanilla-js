//Largest element from a array

function largestElement(numbers) {
  let largest = numbers[0];
  ///let largest = o dile array er negative value er jonno kaj korbe na
  for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element > largest) {
      largest = element;
    }
  }
  return largest;
}

const ages = [12, 45, 23, 56, 89, 35, 34, 78, 35, 27, 29, 68];
const oldest = largestElement(ages);
console.log("oldest age is =", oldest);
