// Requirements

// Create an html file and JavaScript file and add a script tag to include the JavaScript file as before
// Prompt the user to enter their phone number with dashes.
// Alert the user if their phone number is valid (just true or false) according to the simple rule that the fourth and eighth 
// characters must be dashes.
// Following the same procedure as #2 and #3 above to prompt and validate the following fields:
// birth date
// must follow the format xx/xx/xx
// postal code
// must follow the format xxxxx OR xxxxx-xxxx
// state abbreviation
// must be two characters
// must be all caps
// married
// must be yes or no
// may be any capitalization: YES, Yes, yes.

var response = function () {
  alert("Hey thanks that looks valid!!!");
}

var badResponse = function () {
  alert("Hmm sorry that looks fake...");
} 

var phone = prompt("What's ur number? With DASHES~~")

if (phone[3] == "-" && phone[7] == "-") {
  response();
} else {
  badResponse();
}

var birthDate = prompt("Birthday? Must be in format of xx/xx/xx")

if (birthDate[2] == "/" && birthDate[5] == "/") {
  response();
} else {
  badResponse();
}

var zip = prompt("Postal code? Must be xxxxx or xxxxx-xxxx")

if (zip.length == 5 || zip[5] == "-") {
  response();
} else {
  badResponse();
}

var state = prompt("What's your state? Must be two ALL CAPS BABY letters")

if (state.length == 2 && state == state.toUpperCase() && state == NaN) {
  response();
} else {
  badResponse();
}

var married = prompt("You have marriage? Must be a yes or no type answer")

if (married.toUpperCase() == "YES" || married.toUpperCase() == "NO") {
  response();
} else {
  badResponse();
}