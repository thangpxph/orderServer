var express = require('express');
var router = express.Router();

router.get('/', async function (req, res) {
    res.render('category/index.hbs')
})
router.get('/addCategory', async function (req, res) {
    res.render('category/addCategory/addCategory.hbs')
})

module.exports = router;