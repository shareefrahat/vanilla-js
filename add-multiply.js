//chair = 3cft/per chair
//table = 10cft/per table
//bed = 50cft/per bed

function woodCalculator(chairNo, tableNo, bedNo) {
  const perChairWood = 3;
  const perTableWood = 10;
  const perBedWood = 50;

  let totalChairWood = perChairWood * chairNo;
  let totalTableWood = perTableWood * tableNo;
  let totalBedWood = perBedWood * bedNo;

  const totalWood = totalChairWood + totalTableWood + totalBedWood;
  return totalWood;
}

const totalWoodrequ = woodCalculator(5, 3, 2);
console.log(totalWoodrequ);
