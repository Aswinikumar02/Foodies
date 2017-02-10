var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


var schema = new mongoose.Schema({
	name : String,
	cuisines : String,
	address : String,
	img : String,
	ratings : Number
})

var Restaurant = mongoose.model('restaurant' , schema);

module.exports = Restaurant;
