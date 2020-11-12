var express = require('express');
var router = express.Router();
var Category = require('../models/Category');

router.get('/', async function (req, res) {
    let category = await Category.find({}).lean();
    res.render('category/index.hbs', {category: category});
})
router.get('/addCategory', async function (req, res) {
    res.render('category/addCategory/addCategory.hbs')
})
router.post('/add_category', async function (req, res) {
    const nameCategory = req.body.nameCategory;
    let category = await Category.find({nameCategory: nameCategory}).lean();
    if (category <=0){
        const addCategory = new Category({
            nameCategory: nameCategory
        });
        let status = await addCategory.save();
        if (status) {
            res.render('category/addCategory/addCategory.hbs', {status: 'block', data: 'Thêm bàn thành công'});
        } else {
            res.render('category/addCategory/addCategory.hbss', {status: 'block', data: 'Thêm bàn không thành công'})
        }
    } else {
        res.render('category/addCategory/addCategory.hbs', {status: 'block', data: 'Thêm bàn không thành công, bàn đã tồn tại'})
    }
})
module.exports = router;