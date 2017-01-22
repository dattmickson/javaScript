function Person(firstname, lastname) {

	this.firstname = firstname;
	this.lastname = lastname;

}

Person.prototype.greet = function(){
	console.log('Hello, ' + this.firstname + ' ' + this.lastname);
};

//this created a function that creates a object prototype


var john = new Person ('john', 'doe');
john.greet();

var jane = new Person('jane', 'doe');
jane.greet();

console.log(john.__proto__);
console.log(john.__proto__ === jane.__proto__);