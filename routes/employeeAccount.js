var express = require('express');
var router = express.Router();

router.get('/', async function (req, res) {
    res.render('employeeaccount/index.hbs')
})
router.get('/addAccount', async function (req, res) {
    res.render('employeeaccount/addAccount/addAccount.hbs')
});
module.exports = router;