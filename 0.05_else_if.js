/*var age = 25;
if (age>= 18){
	console.log("you can vote");
	if (age >= 21){
		console.log("you can drink");
		if (age >=25){
			console.log("you can rent a car");
		}
	}
} else {
	console.log("your worthless");
}

*/
do {
  var response = prompt("On a scale of 1-5, how do you think the colts will do")
  var work = 0
  switch (response){
    case "1":
      alert("We wont win a game");
      work = 1;
      break;
    case "2":
      alert("We will win a few");
      work = 1;
      break;
    case "3":
      alert = "We will be average";
      work = 1;
      break;
    case "4":
      alert("We will make the playoffs");
      work=1
      break;
    case "5":
      alert("Superbowl!!!");
      work = 1;
      break;
    default:
      response = prompt("invalid response, try again")
  }
} while (work==0)