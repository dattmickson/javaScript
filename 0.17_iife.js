// Immediately Invoked Function Expressions (IIFE)

// to change a function to an exxpresion add parenthasis
var firstname = 'jane';
(function (lastname) {

	var firstname = 'john';  // this is local and is not reached by the outside variable
	console.log(firstname);
	console.log(lastname);
}('doe'));

console.log(firstname);

//IIFE is what is used in the require function and modules