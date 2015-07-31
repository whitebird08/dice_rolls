// need 10 strings, with 1 -> 10 and 10 -> 1.
// each on a different line

// var stringy = "";
// var num = 1
// var num2 = 10

// for (var i = 1; i <= 10; i++) {
//    while (num == i) {
//       stringy = "" + num + " " + num2 + "";
//    }
//    num++;
//    num2--;
//    console.log(stringy);
// }

var stringy
var num = 1
var num2 = 10

for (var i = 1; i <= 10; i++) {
   var stringy = num + " " + num2;
   console.log(stringy);
   num++;
   num2--;
};

console.log(typeof stringy); 