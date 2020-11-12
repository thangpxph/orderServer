const mongoose = require('mongoose');
const DishSchema = mongoose.Schema({
    nameDish: {type: String},
    category: {type: String},
    time: {type: String},
    price: {type: Number},
    image: {type: String},
    ingredient: {type: String}
});
const Dish = mongoose.model('dish', DishSchema);
module.exports = Dish;