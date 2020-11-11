var express = require('express');
var router = express.Router();
const User = require('../models/User');

/* GET home page. */
router.get('/', async function (req, res, next) {
    res.render('login/index');
});
router.post('/', async function (req, res) {
    let username= req.body.username;
    let password= req.body.password;
    const result = await User.findOne({username: username, password: password});
    if (result != null) {
        res.redirect('/home');
    } else {
        res.render('login/index', {
            status: "Thất Bại", content_status: "Tài khoản hoặc mật khẩu không chính xác",
            isShowNotification: null,
            styleButton: 'alert alert-danger m-t-20'
        })
    }
});
module.exports = router;
