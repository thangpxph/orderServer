var express = require('express');
var router = express.Router();
var multer = require('multer');
const Dish = require('../models/Dish');
let nameImage = string='';

let storage = multer.diskStorage({
    destination: function (req, file, callback){
        callback(null,'./public/images');
    },
    filename(req, file, callback){
        if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPE|png|PNG)$/)) {
            return callback(new Error('Sai định dạng'), "");
        }
        const newNameFile = `${Date.now()}-thangpxph-${file.originalname}`
        nameImage = newNameFile;
        callback(null, newNameFile);
    }
});

router.get('/', async function (req, res) {
    let dish = await Dish.find({}).lean();
    res.render('dish/index.hbs', {dish: dish})
})
router.get('/addDish', async function (req, res) {
    res.render('dish/addDish/addDish.hbs')
});
router.post('/add_dish', async function (req, res) {
    const upload = await multer({storage}).array('selectFile',5);
    upload(req, res, (err) =>{
        if (err){
            res.send(err)
            return
        }
        const dish = new Dish({
            nameDish: req.body.nameProduct,
            category: req.body.category,
            time: req.body.times,
            price: req.body.price,
            ingredient: req.body.ingredient,
            urlImage: '/images/'+nameImage
        })
        dish.save();
        res.redirect('/dish')
    })
})
module.exports = router;