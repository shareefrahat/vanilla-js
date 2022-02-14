//-----------------Fibo Series----------------\\

//#Example-1: Using Normal for loop
const fibo = [0, 1];
for (let i = 2; i <= 10; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
}

console.log(fibo);

//#Example-2: Using Function
function fiboSeries(num) {
  if (typeof num != "number") {
    return "Please enter a valid number";
  }
  if (num < 2) {
    return "Please enter a number greater than 1";
  }
  const fibo = [0, 1];
  for (let i = 2; i <= num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}

let fiboOutput = fiboSeries(12);
console.log(fiboOutput);
