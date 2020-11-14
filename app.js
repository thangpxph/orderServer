var express = require('express');
var path = require('path');
var logger = require('morgan');
var hbs = require('express-handlebars')
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var homeRouter = require('./routes/home');
var addTableRouter = require('./routes/addTable');
var categoryRouter = require('./routes/category');
var dishRouter = require('./routes/dish');
var employeeAccountRouter = require('./routes/employeeAccount');


var app = express();


mongoose.connect('mongodb+srv://thangpxph:123456aA@cluster0.micor.mongodb.net/quanly', {useNewUrlParser:true});
console.log('Kết nối thành công');

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', hbs({
    extname: '.hbs',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public/images'));
app.use(express.static('public/css'));


app.use('/', indexRouter);
app.use('/home',homeRouter);
app.use('/api', apiRouter);
app.use('/addTable', addTableRouter);
app.use('/category', categoryRouter);
app.use('/dish', dishRouter);
app.use('/employeeAccount', employeeAccountRouter);

module.exports = app;
