function pandaCost(singara, somusa, jilapi) {
  if (
    typeof singara != "number" ||
    typeof somusa != "number" ||
    typeof jilapi != "number"
  ) {
    return "Please enter the amount of individual item";
  } else if (singara % 1 !== 0 || somusa % 1 !== 0 || jilapi % 1 != 0) {
    return "Amount of item must be a integer number";
  } else if (singara < 0 || somusa < 0 || jilapi < 0) {
    return "Amount of item can be 0 or a positive number";
  } else {
    const singaraPrice = 7;
    const somusaPrice = 10;
    const jilapiPrice = 15;

    let totalSingaraPrice = singaraPrice * singara;
    let totalSomusaPrice = somusaPrice * somusa;
    let totalJilapiPrice = jilapiPrice * jilapi;

    const totalCost = totalSingaraPrice + totalSomusaPrice + totalJilapiPrice;
    return totalCost;
  }
}

const grandTotal = pandaCost(5.6, 3, 2);
console.log(grandTotal);
