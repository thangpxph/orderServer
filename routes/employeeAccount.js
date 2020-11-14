var express = require('express');
var router = express.Router();
var EmployeeAccount = require('../models/EmployeeAccount');

router.get('/', async function (req, res) {
    let employeeAccount = await EmployeeAccount.find({}).lean();
    res.render('employeeaccount/index.hbs',{account: employeeAccount});
})
router.get('/addAccount', async function (req, res) {
    res.render('employeeaccount/addAccount/addAccount.hbs')
});
router.post('/add_account', async function (req, res) {
    const usernameEmployee = req.body.usernameEmployee;
    let username = await EmployeeAccount.find({username: usernameEmployee}).lean();
    if (username <=0){
        const addAccount = new EmployeeAccount({
            staffsname: req.body.nameEmployee,
            age: req.body.age,
            address: req.body.address,
            username: req.body.usernameEmployee,
            password: req.body.passwordEmployee
        });
        let status = await addAccount.save();
        if (status) {
            res.render('employeeaccount/addAccount/addAccount.hbs', {status: 'block', data: 'Thêm thành công'});
        } else {
            res.render('employeeaccount/addAccount/addAccount.hbs', {status: 'block', data: 'Thêm không thành công'})
        }
    } else {
        res.render('employeeaccount/addAccount/addAccount.hbs', {status: 'block', data: 'Thêm không thành công, tài khoản đã tồn tại'})
    }
});
module.exports = router;