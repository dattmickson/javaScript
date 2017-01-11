
var name = "Matt"
console.log(name + ": " + 55)
var mess = name + ": " + 55
console.log(typeof mess) //"typeof" identifies a variable
var greet = 'matt says "how\'s your day"' // "\" says not to end a string
console.log(greet)
var thing = []
console.log(greet.length)  //".length" counts characters in string
//console.log(greet.toUpperCase())  //everything to uppercase ".toUpperCase"
//console.log(greet.toLowerCase())  //everything to lowercase ".toLowerCase"
//console.log(greet.split(" "))  // creates array   split([seperator[, limit]]) "seperator" is where to break and "limit" is max times
//console.log(greet.slice(0,8)) //removes   slice(start,end)  everything else removed
thing = greet.split("says")
console.log(thing)
console.log("****************************************")
var age = 21;
if (age>=21){
	console.log("Since you are " + age + " you have all of your rights");
} else if (age >= 18) {
	console.log("Sorry bub, you can't drink yet");
} else {
	console.log("Sorry bub, you are nobody")
}
