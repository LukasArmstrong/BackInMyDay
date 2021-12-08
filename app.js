var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

//routers-----------------------------------------------------------------------
var indexRouter = require('./routes/index')
var catalogRouter = require('./routes/catalog');
var guestRouter = require('./routes/guest');
var usersRouter = require('./routes/users');



//database connection-----------------------------------------------------------
var mongoDB = 'mongodb://127.0.0.1/BIMDDB';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;
//bind to error events
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//routing tools-----------------------------------------------------------------
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '/public')));


//routing
app.use('/', catalogRouter);
//app.use('/guest/*', guestRouter, function(req,res,next){console.log('in the guest');});
//app.use('/user/*', usersRouter, function(req,res,next){console.log('in the user');});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
