
//using shorthand export instead of module.exports will not work unless 
//you right it properly

	//doesnt work
exports = function() {
	console.log("hello");
}

	//works
exports.greet = function() {
	console.log("hello");
}