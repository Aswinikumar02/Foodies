var mongoose = require('mongoose');


var schema = new mongoose.Schema({
	name : String,
	cuisines : String,
	address : String,
	img : String,
	ratings : Number
})

var model = mongoose.model('Restaurant' , schema);

module.exports = {
  RestaurantModel: model
};
