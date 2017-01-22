var greetings = require('./greeting.json'); // this targets the greetings.json file

var greet = function () {
	console.log(greetings.en); // this targets the greetings variable that is an object and targeting "en" within that
}

module.exports = greet;