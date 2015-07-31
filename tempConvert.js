// Temperature Convertor 
// Write code that asks the user for a temperature in Celsius and converts it to Fahrenheit. 
// Bonus: ask the user first if they want to convert from F to C or C to F.

// T(°F) = T(°C) × 1.8 + 32

var input = prompt("Can you give me a temperature in Celsius?");

var fahrenheit = (input * 1.8) + 32;

alert(input + " degrees Celsius is " + fahrenheit + " degrees Fahrenheit!");