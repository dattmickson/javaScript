//function statement
function greet() {
	console.log("hi")
}
greet();

//functions are first class
function logGreeting(fn){
	fn();
}
logGreeting(great);

//function expression
var greetMe = function() {
	console.log("hi Matt");
}
greetMe();

//its first class
logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function () {
	console.log("hello Matt")
});
//why set it equal to a variable if i will only use it once