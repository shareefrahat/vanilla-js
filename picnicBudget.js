//Problem-3 : Picnic Budget

function picnicBudget(persons) {
  if (typeof persons != "number") {
    return "Please enter the total number of persons";
  } else if (persons < 0) {
    return "Number of persons is not valid";
  }
  const firstHundredPerPerson = 5000;
  const secondHundredPerPerson = 4000;
  const NextPerPerson = 3000;

  if (persons <= 100) {
    var firstHundredCost = Math.floor(persons) * firstHundredPerPerson;
    return firstHundredCost;
  } else if (persons <= 200) {
    var firstHundredCost = 100 * firstHundredPerPerson;
    var restPersons = Math.floor(persons) - 100;
    var secondHundredCost = restPersons * secondHundredPerPerson;
    var totalAmmount = firstHundredCost + secondHundredCost;
  } else {
    var firstHundredCost = 100 * firstHundredPerPerson;
    var secondHundredCost = 100 * secondHundredPerPerson;
    var restPersons = Math.floor(persons) - 200;
    var nextHundredCost = restPersons * NextPerPerson;
    var totalAmmount = firstHundredCost + secondHundredCost + nextHundredCost;
  }
  return totalAmmount;
}

const totalBudget = picnicBudget(234);
console.log(totalBudget);
