var tired = false;
var hungry = true;

var isTrue = 1 == "1"; 	// single "=" assigns     double"==" evaluates (returns true or false) 
var isFalse = 1=== "1"
console.log(isTrue)  	// to compare type and contents use "==="
console.log(isFalse)

console.log("*****************************");

/*
var moneyToSpend = 15// your money
var time = 5 // how much time you have to receive package
var op1Cash = 30
var op1 = 1
var op2Cash = 15
var op2 = 3
var groundCash = 0
var ground = 10
if (time<=op1){
	if(moneyToSpend >= op1Cash){
	 	console.log("Your package will arrive tomorrow");
	} else if (moneyToSpend >= op2Cash){
    	console.log("Your best option is 3 day shipping");
  } else {
    	console.log("Your only option is ground shipping, sorry bub")
  }
} else if (time <=op2 || op2<time<ground){
  	if(moneyToSpend >= op2Cash){
    	console.log("Your package will arrive in 3 days");
  	} else {
    	console.log("Your only option is ground shipping, sorry bub");
  	}	
} else {
	console.log("hopefully you will get it in 10 days or so");
}
*/

var cash = 200 // dollars
var debt = 250
var diff = cash - debt
var want = true
if (diff>=0 && want){
	console.log("congrats you are debt free with: $" + diff + " left in your account");
} else if (diff<0 && want){
	console.log("You can not pay it off you need: $" + Math.abs(diff) +" more money to close out debts")
} else {
	console.log("You dont want to pay, you still have $" + cash + " cash and $" + debt + " of debt")
}