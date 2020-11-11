const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    username: {type: String},
    password: {type: String}
});
const User = mongoose.model('user', UserSchema);
module.exports = User;