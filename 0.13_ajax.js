$(document).ready(function(){
	// $.ajax({
	// 	dataType: "json",
	// 	url: "https://swapi.co/api/people",
	// 	success: function(data){
	// 		console.log(data.results.forEach(function(element){
	// 			console.log(element.name)
	// 			console.log(element.height)
	// 		}))
	// 	}
	// });
	// $.ajax({
	// 	dataType: "json",
	// 	url: "https://swapi.co/api/starships",
	// 	success: function(data){
	// 		console.log(data.results.forEach(function(banana){
	// 			console.log(banana.name)
	// 		}))
	// 	}
	// })
	$.ajax({
		dataType: "json",
		url: "https://swapi.co/api",
		success: function(data){
			console.log(data.people.results.forEach(function(element){
				console.log(element.name)
			}))
		}
	})
});