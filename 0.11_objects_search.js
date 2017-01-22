// this allows us to search iterate through an object to print specific 
// info using an area of what we want
var i;
var properties = [
 'first-name',
 'middle-name',
 'last-name',
 'profession'
];
for (i = 0; i < properties.length; i += 1) {
 console.log(properties[i] + ': ' +
 another_stooge[properties[i]]);
}