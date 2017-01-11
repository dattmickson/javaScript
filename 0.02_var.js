var firstName = "matt" //sting variables
var lastName = "Dickson"
var fullName = firstName + " " + lastName
console.log(fullName) //build or combine strings "concatenation"

var empty //empty variable

/*************************************************************
	 Operator ***** Example ***** Equivalent *****
    	+=		|    a += b   |    a = a + b   | 
    	-=		|    a -= b   |    a = a - b   | 
    	*=		|    a *= b   |    a = a * b   | 
    	/=		|    a /= b   |    a = a / b   | 
    	%=		|    a %= b   |    a = a % b   |   
              *****         *****            *****
*************************************************************/
//x++ = x+1
//x-- = x-1

var myNum = 0
console.log(myNum)
myNum +=10
console.log(myNum)
myNum -=1
console.log(myNum)
myNum *=9
console.log(myNum)
myNum /=7
console.log(myNum)

var age = 21
var maxAge = 100
var waterDaily = 8
var waterYearly = waterDaily * 365 * (maxAge-age)
console.log("I will need " + waterYearly + " more glasses of water if I live to be " + maxAge)