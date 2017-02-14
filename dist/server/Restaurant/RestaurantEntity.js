let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let schema = new mongoose.Schema({
    name: String,
    cuisines: String,
    address: String,
    img: String,
    ratings: Number,
    comments: {
        type: String,
        default: 'Enter comments'
    }
});

let Restaurant = mongoose.model('restaurant', schema);

module.exports = Restaurant;
