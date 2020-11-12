const mongoose = require('mongoose');
const CategorySchema = mongoose.Schema({
    nameCategory: {type: String},
});
const Category = mongoose.model('category', CategorySchema);
module.exports = Category;