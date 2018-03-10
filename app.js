const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const database = require('./bin/databases');

const index = require('./routes/index');
const my = require('./routes/my');
const material = require('./routes/material');
const materialmain = require('./routes/materialmain');

//后台
const practicemenu = require('./routes/admin/practicemenu');
const practicemainmanu = require('./routes/admin/practicemainmanu');
const subject = require('./routes/admin/subject');

const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);  //首页
app.use('/my', my);   //我的
app.use('/material', material);   //材料详情
app.use('/materialmain', materialmain);   //题目详情

//后台
app.use('/admin/practicemenu', practicemenu);   //新增一级分类
app.use('/admin/practicemainmanu', practicemainmanu);   //新增一级分类
app.use('/admin/subject', subject);   //新增一级分类





// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
