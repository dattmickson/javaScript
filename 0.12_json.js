//JSON is an acronym for java script object notation
//
var names = [["james", "paul", "cam", "chris"],["morg", "julie", "abbey", "brie"]]
//console.log(names[1][3])

var items = [
	{
		id: 1,
		name: "Green Door",
		price: 12.50,
		tags: ["home", "green", "vinyl"],
		avaliability: true
	},

	{
		id: 2,
		name: "Red Door",
		price: 12.50,
		tags: ["home", "red", "cheap wood"],
		avaliability: false
	},

	{
		id: 3,
		name: "Glass Door",
		price: 1200,
		tags: ["home", "clear", "glass"],
		avaliability: true
	}

];

console.log(items[2].tags[1])

for (var i = 0; i<items.length; i++){
	console.log("name of " + i + " element of array is: " + items[i].name)
}