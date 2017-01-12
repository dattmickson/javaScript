var emptyObject = {};

var facebookFriend = {
	//properties
	name			: "",
	life			: 100,
	damage			: 0,
	
	//methods
	challenge		: function(){
		console.log(this.name + " asks would anyone care to fight?");
	},
	accept 			: function(target){
		console.log("yee, me, " + this.name + ", would love to fight you " + target.name); //"this" targets whats being called
	}


};
 
// facebookFriend.name = "Matt";
// facebookFriend.age = 21;
// console.log(facebookFriend.siblings)

var melkor = Object.create(facebookFriend);// create new object with the properties from player
melkor.name = "Melkor";
var miley = Object.create(facebookFriend);
miley.name = "Miley"
//console.log(melkor.name)
//console.log(miley.name)

//Access methods
melkor.challenge();
miley.accept(melkor);