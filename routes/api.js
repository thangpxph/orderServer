var express = require('express');
var router = express.Router();
const Category = require('../models/Category');
const Table = require('../models/Table');
const Dish = require('../models/Dish');

router.get('/getCategory', async function (req, res) {
    const listCategory = await Category.find().lean();
    res.send(listCategory);
});
router.get('/getAllDish', async function (req, res) {
    const listDish = await Dish.find().lean();
    res.send(listDish);
});
router.get('/getAllTable', async function (req, res) {
    const listTable = await Table.find().lean();
    res.send(listTable);
});
router.get('/getAllDish', async function (req, res) {
    const listDish = await Dish.find().lean();
    res.send(listDish);
});
module.exports = router;