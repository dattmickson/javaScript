// to add in node code that is not global, you must
// look up the api documentation on how to import it
// and how it is used

var util = require('util');

var name = 'matt';
var greeting = util.format('hello, %s', name);
util.log(greeting)