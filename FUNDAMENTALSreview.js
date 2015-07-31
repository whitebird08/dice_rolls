// Assignment, reassignment, equals

var ducks = "ducks";
ducks = "mighty ducks";
ducks == ducks[1];


// Variable Hoisting

var darkwingDuck = 11

function duck() {
  var darkwingDuck
  function () {
    console.log("shit")
  }
  darkwingDuck += 35

}

A string is an 0-index collection of characters

A number is any decimal value which can be expressed in floating point

An array is an indexed, ordered collection of values
-Arrays can be variant
But should be invariant because honestly eww gross. [if type is string, make new array, etc, if num make this array, etc]

A JavaScript object is a collection of property(key)/value pairs.

1) State
2) Behavior

var objectify = {
  stuff: false, //state
  getStuff: function() { // behavior
    this.stuff = true;
  }
}


this refers to the properties within the object that the method is in

function reverseEachElement (arr) {
  var stringy = arr.join(" ");
  var reversey = "";
  for (var i = stringy.length - 1; i >= 0; i--) {
    reversey += stringy[i];

  }
  return reversey.split(" ");
}

console.log(reverseEachElement(["Cat", "Dog", "Horse"]));




