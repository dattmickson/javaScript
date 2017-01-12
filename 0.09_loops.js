//DRY dont repeat yourself
//WET write everything 

var name = "matt dickson";
var length = name.length;

var i = 0;
// // while (i < 15){
// 	console.log(name);
// 	i++;
// }

// while (i<50){
// 	i+=5;
// 	console.log(i)
// }

// for (var i = 0; i < Things.length; i++) {
// 	Things[i]
// }

// var team = "packers";

// //same as   for(i=0; i < team.length; i++)
// for (var letter in team){
// 	console.log(team[letter])
// }
var vowel = 0
var food = "pizza"
for (var i in food){
	console.log(food[i])
	if(food[i] === "a" ||food[i] === "e" ||food[i] === "i" ||food[i] === "u" ||food[i] === "o"){
		vowel++;
	}
}
console.log("there are " + vowel + " vowels in the word " + food);