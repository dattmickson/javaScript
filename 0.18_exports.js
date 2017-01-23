//different ways to use the module.exports function these are called "module paterns"
	//in file greet1.js
module.exports = function() {
	console.log('hello world');
}
	//in file greet2.js
module.exports.greet = function() {
	console.log('hello world');
}

	//in file greet3.js
function Greetr() {
	this.greeting = "hello World";
	this.greet = function () {
		console.log(this.greeting);
	}
}
module.exports = new Greetr(); //can only be run once because the return is cached

	//in file greet4.js    allowing to be called multiple times and return the same thing
function Greetr() {
	this.greeting = "hello World";
	this.greet = function () {
		console.log(this.greeting);
	}
}
module.exports = new Greetr;	

	//in file greet5.js     this is revealing module pattern: exposing only desired properties and methods
var greeting = "hello world!!!";
function greet() {
	console.log(greeting);
}
module.exports = {
	greet: greet
}


//----------------------------------------------------------------------------

//in main.js

	//greet1
var greet = require('./greet1');
greet();

	//greet 2
var greet2 = require('./greet2').greet;
greet2();

	//greet 3
var greet3 = require('./greet3');
greet3.greet();

	//greet 4
var greet4 = require('./greet4');
var grtr = new Greet4(); //can continue to creat "new" grtr's 
grtr.greet();

	//greet5
var greet5 = require('./greet5').greet;
greet5();

