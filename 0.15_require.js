//the require function in js is used to target another js file,
//similar to how html docs use script
require("./exapmle.js");

// this will run the example.js file but it cannot target 
//the functions or variables  in that file unless

module.exports = exampleFunction;

//is used in the called file that is being targeted,
//and in the main.js you create a variable to hold the information you want to carry over
var exampleFunction = require("./example.js");
exampleFunction();

// the module.exports function is telling the computer to wrap the desired function, making
// it an expresion. this is then set to a variabel in the main file then the function is called

//require is a function, that you pass a 'path' too

//module.exports is what the require function returns

//this works because your code is actually wrapped in a function 
//that is given these things as function parameters