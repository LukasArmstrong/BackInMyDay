var User = require('../models/User');
var Photo = require('../models/Photo');

var async = require('async');


function callback(err, data){
  if(err){console.error(err, 'something went wrong');}
  else{console.log(data + 'here is the data');}
}

//display home page on GET
exports.gen_index_get = function (req, res, next) {

  async.parallel({
    photo_count: function(callback){
      Photo.countDocuments({}, callback);
    },
    user_count: function(callback){
      User.countDocuments({}, callback);
    },
  }, function(err,results){
    console.log('callback function');
    res.render('insta', {title: 'Back In My Day Home', error:err, data: results});
  });
};

//display user create form on GET
exports.user_create_get = function (req, res, next) {
  res.send('NOT DONE: user create GET');
};

//handle user create Post
exports.user_create_post = function (req, res, next) {
  res.send('NOT DONE: user create POST');
};

//display user login form on GET
exports.gen_login_get = function (req, res, next) {
  res.send('NOT DONE: user login GET');
};

//handle user login on POST
exports.gen_login_post = function (req, res, next) {
  res.send('NOT DONE user login POST');
};

//disply guest form on GET
exports.gen_guest_get = function (req, res, next) {
  res.send('NOT DONE: go to guest cersion')
  //res.send('NOT DONE continue as guest GET');
};
