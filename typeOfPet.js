// var typeOfPet = prompt("What type of pet do you have?");
// switch (typeOfPet) {
//   case "dog":
//     console.log("A " + typeOfPet + " is a normal pet");
//     break;
//   case "cat":
//     console.log("A " + typeOfPet + " is a normal pet");
//     break;
//   case "parrot":
//     console.log("A " + typeOfPet + " is a normal pet");
//     break;
//   case "liger":
//     console.log("WOW! You have a liger.  You are so cool!");
//     break;
//   default:
//     console.log("I have never heard of that type of pet");
//     break;
// }



var typeOfPet = prompt("What type of pet do you have?");

if (typeOfPet == "dog") {
  console.log("A " + typeOfPet + " is a normal pet");
} else if (typeOfPet == "cat") {
  console.log("A " + typeOfPet + " is a normal pet");
} else if (typeOfPet == "parrot") {
  console.log("A " + typeOfPet + " is a normal pet");
} else if (typeOfPet == "liger") {
  console.log("WOW! You have a liger.  You are so cool!");
} else {
  console.log("I have never heard of that type of pet");
}