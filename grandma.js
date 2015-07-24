// Deaf Grandma

// Write a Deaf Grandma program. Whatever you say to grandma (whatever you type in), she should respond with HUH?! 
// SPEAK UP, SONNY!, unless you shout it (type in all capitals). If you shout, she can hear you (or at least she thinks so) 
// and yells back, NO, NOT SINCE 1938! To make your program really believable, have grandma shout a different year each time; 
// maybe any year at random between 1930 and 1950.

var input = prompt("What do you want to say to Grandma?");

var memory = ((Math.floor(Math.random() * (1950 - 1930)) + 1950));


if (input != input.toUpperCase()) {
  alert("HUH?! SPEAK UP, SONNY!");
} else {
  alert("NO, NOT SINCE " + memory + "!");
}



