var num1 = 1
var num2 = 2
var sum = 0
// for (var i = 0; i<10; i++){
// 	num1=num1+num2
	
// 	if(num1%2==0){
// 		sum = sum + num1;
// 	} else if (num2%2==0){
// 		sum = sum + num1;
// 	}
// 	num2=num2+num1
	
// }

while (num1<4000000 && num2<4000000){
	if(num1%2==0){
		sum = sum + num1;
	} else if (num2%2==0){
		sum = sum + num2;
	};
	num1=num1+num2;
	num2=num2+num1;
}
console.log(sum)