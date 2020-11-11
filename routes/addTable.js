var express = require('express');
var router = express.Router();
var Table = require('../models/Table');


router.get('/', async function (req, res) {

    res.render('home/add_table/add_table.hbs')
});
router.post('/', async function (req, res) {
    const name = req.body.nameTable;
    console.log(req.body.nameTable);
    let table = await Table.find({nameTable: name}).lean();
    if (table <= 0) {
        const addTable = new Table({
            nameTable: req.body.nameTable,
            amount: req.body.amount_table,
            information: null,
            status: 1
        });
        let status = await addTable.save();
        if (status) {
            res.render('home/add_table/add_table.hbs', {status: 'block', data: 'Thêm bàn thành công'});
        } else {
            res.render('home/add_table/add_table.hbs', {status: 'block', data: 'Thêm bàn không thành công'})
        }
    } else {
        res.render('home/add_table/add_table.hbs', {status: 'block', data: 'Thêm bàn không thành công, bàn đã tồn tại'})
    }
})

module.exports = router;
