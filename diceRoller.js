var diceRoller = function(numOfRolls, sideOfDie) {
  var newArray = [];
  if (isNaN(sideOfDie)) {
    var sideOfDie = 6;
  }
  for (var i = 0; i < numOfRolls; i++) {
  newArray.push(Math.floor(Math.random() * sideOfDie) + 1);
  }
  return newArray;
};

console.log(diceRoller(10));