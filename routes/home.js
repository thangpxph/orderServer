var express = require('express');
var router = express.Router();
let Table= require('../models/Table');

router.get('/', async function (req, res) {
    let table =await Table.find({}).lean();
    res.render('home/home.hbs',{data: table});
})
module.exports = router;

