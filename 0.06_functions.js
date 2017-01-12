// function hello(){
// 	console.log("hello world");
// };
// hello();
// hello();
// hello();
// hello();
// hello();
function greet(neighbor) {
	console.log("Morning " + neighbor)
}

greet("tony")

/*
function add(x,y) {
	z = x + y;
	return z;
}
function multiply(x,y) {
	z = x * y;
	return z;
}
function divide(x,y) {
	z = x / y;
	return z;
}
function subtract(x,y){
	z = x - y;
	return z;
}
function quadraticFormula(a,b,c){
	
	f = divide(add(-b,Math.sqrt(subtract(Math.pow(b,2),multiply(multiply(4,a),c)))),multiply(2,a));
	console.log(f + " is one answer");
	y = divide(subtract(-b,Math.sqrt(subtract(Math.pow(b,2),multiply(multiply(4,a),c)))),multiply(2,a));
	console.log(y + " is the other");
}
*/

//console.log(divide(12,4));
//var c = add(multiply(2,3),divide(12,3));
//console.log(c);
//quadraticFormula(2,-4,-3)
/*
function calcPrice(quantity, price){
	var tax = 0.07;
	var totalTax = quantity * price * tax;
	var totalPrice = totalTax + quantity * price;

	return totalPrice
}

console.log(calcPrice(17, 5))

var today = new Date();
console.log(today.toDateString());

function divByThree(num) {
	if (num % 3 === 0){
		return "number is divisible by 3"
	} else{
		return "number cant be divided by three"
	}
}
console.log(divByThree(5))
console.log(divByThree(6))

function greet(name){
	if (name==="Matt"){
		return "yo matt why are you talking to yourself"
	} else if(name === "tony"){
		return "yo tony what up"
	} else{
		return "sorry idk you bub"
	}
} 
console.log(greet("Matt"));
console.log(greet("tony"));
console.log(greet("kenn"));
*/



function total(item,p,q) {
	var tax = 1.07;
	var totCost = Math.round(p * q * tax *100)/100;
	return q +" " +item +" at $" + p + " each will total $" + totCost+ " including tax"
}
console.log(total("hotdogs",3,15));