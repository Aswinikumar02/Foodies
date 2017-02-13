const mongoose = require('mongoose');

const schema = new mongoose.Schema({userName: String, password: String});
const model = mongoose.model('User', schema);
module.exports = {
    UserModel: model
};
