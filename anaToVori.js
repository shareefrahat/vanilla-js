//Problem-1 : Ana To Vori

function anaToVori(ana) {
  if (typeof ana != "number") {
    return "Please enter a number";
  } else if (ana < 0) {
    return "Please enter a number greater than 0";
  } else {
    var vori = ana / 16;
  }
  return vori;
}

var resultInVori = anaToVori(80);
console.log(resultInVori);
