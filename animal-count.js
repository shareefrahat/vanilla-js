function animalCount(miles) {
  const zeroToTenPerMiles = 10;
  const elevenToTweentyPerMiles = 50;
  const tweentyOneToEndPerMiles = 100;

  if (miles <= 10) {
    var count = miles * zeroToTenPerMiles;
    return count;
  } else if (miles <= 20) {
    var zeroToTenAnimal = 10 * zeroToTenPerMiles;
    var restMiles = miles - 10;
    var elevenToTweenty = restMiles * elevenToTweentyPerMiles;
    var totalAnimalMiles = zeroToTenAnimal + elevenToTweenty;
  } else {
    var zeroToTenAnimal = 10 * zeroToTenPerMiles;
    var elevenToTweenty = 10 * elevenToTweentyPerMiles;
    var restMiles = miles - 20;
    var tweentyOneToEnd = restMiles * tweentyOneToEndPerMiles;
    var totalAnimalMiles = zeroToTenAnimal + elevenToTweenty + tweentyOneToEnd;
  }
  return totalAnimalMiles;
}

const totalAminals = animalCount(23);
console.log(totalAminals);
