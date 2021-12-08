//this module adds a user ro the database
// require this function and run
//<require_name>(first, last, ID, callback)
var async = require('async')

var User = require('./../../models/User');

//main function-----------------------------------------------------------------
module.exports = function (first_name, last_name, UserID, cb){
  userCreate(first_name, last_name, UserID, cb);
}

//create user add to database---------------------------------------------------
function userCreate(first_name, last_name, UserID, cb) {
  userdetail = {firstName:first_name , lastName: last_name, userID: UserID}
  var user = new User(userdetail);
  user.save(function (err) {
    if (err) {
      cb(err, null)
      return}
    cb(null, user)
  });
};
